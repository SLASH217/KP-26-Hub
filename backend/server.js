import express from 'express';
import cors from 'cors';
import { Pool } from 'pg';
import dotenv from 'dotenv';
import * as XLSX from 'xlsx';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const isProduction = process.env.NODE_ENV === 'production';
const adminLocalOnly = (process.env.ADMIN_LOCAL_ONLY || 'true').toLowerCase() === 'true';
const corsOrigins = (process.env.CORS_ORIGIN || '')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

const VALIDATION_LIMITS = {
    nameMaxLength: 100,
    emailMaxLength: 254,
    roomNumberMaxLength: 20,
    complaintMaxLength: 2000,
    complaintMaxLines: 25
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_STATUSES = ['pending', 'in_progress', 'resolved', 'rejected'];

function isLoopbackIp(ip = '') {
    return ip === '127.0.0.1' || ip === '::1' || ip === '::ffff:127.0.0.1';
}

function getHostnameFromUrl(value = '') {
    try {
        return new URL(value).hostname;
    } catch {
        return '';
    }
}

function isLocalRequest(req) {
    const forwardedFor = req.headers['x-forwarded-for'];
    const forwardedIp = typeof forwardedFor === 'string' ? forwardedFor.split(',')[0].trim() : '';
    const requestIp = forwardedIp || req.ip || req.socket?.remoteAddress || '';
    const hostHeader = req.headers.host || '';
    const hostName = hostHeader.split(':')[0];
    const originHostname = getHostnameFromUrl(req.headers.origin || '');

    return (
        isLoopbackIp(requestIp) ||
        hostName === 'localhost' ||
        hostName === '127.0.0.1' ||
        originHostname === 'localhost' ||
        originHostname === '127.0.0.1'
    );
}

function requireLocalAdmin(req, res, next) {
    if (!adminLocalOnly || isLocalRequest(req)) {
        return next();
    }

    return res.status(403).json({ error: 'Admin endpoints are available only on localhost' });
}

function normalizeAndValidateComplaintPayload(payload) {
    const name = typeof payload?.name === 'string' ? payload.name.trim() : '';
    const email = typeof payload?.email === 'string' ? payload.email.trim().toLowerCase() : '';
    const complaint = typeof payload?.complaint === 'string' ? payload.complaint.trim() : '';
    const room_number = typeof payload?.room_number === 'string' ? payload.room_number.trim() : '';

    if (!name || !email || !complaint || !room_number) {
        return { error: 'Name, email, complaint, and room number are required' };
    }

    if (name.length > VALIDATION_LIMITS.nameMaxLength) {
        return { error: `Name must be at most ${VALIDATION_LIMITS.nameMaxLength} characters` };
    }

    if (email.length > VALIDATION_LIMITS.emailMaxLength || !EMAIL_REGEX.test(email)) {
        return { error: 'Please provide a valid email address' };
    }

    if (room_number.length > VALIDATION_LIMITS.roomNumberMaxLength) {
        return { error: `Room number must be at most ${VALIDATION_LIMITS.roomNumberMaxLength} characters` };
    }

    if (complaint.length > VALIDATION_LIMITS.complaintMaxLength) {
        return { error: `Complaint must be at most ${VALIDATION_LIMITS.complaintMaxLength} characters` };
    }

    const complaintLineCount = complaint.split(/\r?\n/).length;
    if (complaintLineCount > VALIDATION_LIMITS.complaintMaxLines) {
        return { error: `Complaint must be at most ${VALIDATION_LIMITS.complaintMaxLines} lines` };
    }

    return {
        value: { name, email, complaint, room_number }
    };
}

app.use(helmet());
app.use(cors({
    origin(origin, callback) {
        // Allow server-to-server and curl/postman requests with no Origin header.
        if (!origin) {
            return callback(null, true);
        }

        if (corsOrigins.length === 0) {
            if (isProduction) {
                return callback(new Error('CORS_ORIGIN is not configured'));
            }
            return callback(null, true);
        }

        if (corsOrigins.includes(origin)) {
            return callback(null, true);
        }

        return callback(new Error('Not allowed by CORS'));
    }
}));
app.use(express.json({ limit: '20kb' }));

const complaintsLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many complaint submissions. Please try again later.' }
});

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running' });
});

// Submit a complaint
app.post('/api/complaints', complaintsLimiter, async (req, res) => {
    const validationResult = normalizeAndValidateComplaintPayload(req.body);

    if (validationResult.error) {
        return res.status(400).json({ error: validationResult.error });
    }

    const { name, email, complaint, room_number } = validationResult.value;

    try {
        // Parameterized query prevents SQL injection by separating SQL from user input.
        const result = await pool.query(
            'INSERT INTO complaints (name, email, complaint, room_number, created_at) VALUES ($1, $2, $3, $4, NOW()) RETURNING id, name, email, room_number, created_at',
            [name, email, complaint, room_number]
        );
        res.status(201).json({
            message: 'Complaint submitted successfully',
            data: result.rows[0]
        });
    } catch (error) {
        console.error('Error inserting complaint:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Admin: get all complaints (supports optional ?status=pending)
app.get('/api/admin/complaints', requireLocalAdmin, async (req, res) => {
    const { status } = req.query;

    if (status && !ALLOWED_STATUSES.includes(status)) {
        return res.status(400).json({ error: 'Invalid status filter' });
    }

    try {
        const query = status
            ? 'SELECT id, name, email, complaint, room_number, status, created_at FROM complaints WHERE status = $1 ORDER BY created_at DESC'
            : 'SELECT id, name, email, complaint, room_number, status, created_at FROM complaints ORDER BY created_at DESC';

        const params = status ? [status] : [];
        const result = await pool.query(query, params);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching admin complaints:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Admin: update complaint status
app.patch('/api/admin/complaints/:id/status', requireLocalAdmin, async (req, res) => {
    const id = Number.parseInt(req.params.id, 10);
    const status = typeof req.body?.status === 'string' ? req.body.status.trim() : '';

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({ error: 'Invalid complaint id' });
    }

    if (!ALLOWED_STATUSES.includes(status)) {
        return res.status(400).json({ error: `Status must be one of: ${ALLOWED_STATUSES.join(', ')}` });
    }

    try {
        const result = await pool.query(
            'UPDATE complaints SET status = $1 WHERE id = $2 RETURNING id, name, email, complaint, room_number, status, created_at',
            [status, id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Complaint not found' });
        }

        return res.json({
            message: 'Status updated successfully',
            data: result.rows[0]
        });
    } catch (error) {
        console.error('Error updating complaint status:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Admin: export all complaints as Excel
app.get('/api/admin/complaints/export', requireLocalAdmin, async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT id, name, email, room_number, complaint, status, created_at FROM complaints ORDER BY created_at DESC'
        );

        const rows = result.rows.map((item) => ({
            ID: item.id,
            Name: item.name,
            Email: item.email,
            RoomNumber: item.room_number,
            Complaint: item.complaint,
            Status: item.status,
            CreatedAt: new Date(item.created_at).toISOString()
        }));

        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(rows);
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Complaints');

        const workbookBuffer = XLSX.write(workbook, {
            type: 'buffer',
            bookType: 'xlsx'
        });

        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', `attachment; filename=complaints-${new Date().toISOString().slice(0, 10)}.xlsx`);
        return res.status(200).send(workbookBuffer);
    } catch (error) {
        console.error('Error exporting complaints:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});