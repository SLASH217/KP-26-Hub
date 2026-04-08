import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

async function createComplaintsTable() {
    try {
        console.log('Ensuring complaints table exists...');

        await pool.query(`
            CREATE TABLE IF NOT EXISTS complaints (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(254) NOT NULL,
                complaint TEXT NOT NULL,
                room_number VARCHAR(20) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                status VARCHAR(50) DEFAULT 'pending'
            );
        `);

        await pool.query(`
            ALTER TABLE complaints
            ALTER COLUMN name TYPE VARCHAR(100),
            ALTER COLUMN email TYPE VARCHAR(254),
            ALTER COLUMN room_number TYPE VARCHAR(20),
            ALTER COLUMN room_number SET NOT NULL,
            ALTER COLUMN status SET DEFAULT 'pending';
        `);

        await pool.query(`
            ALTER TABLE complaints
            ADD CONSTRAINT complaints_name_length_check CHECK (char_length(name) <= 100);
        `).catch(() => {});

        await pool.query(`
            ALTER TABLE complaints
            ADD CONSTRAINT complaints_email_length_check CHECK (char_length(email) <= 254);
        `).catch(() => {});

        await pool.query(`
            ALTER TABLE complaints
            ADD CONSTRAINT complaints_room_number_length_check CHECK (char_length(room_number) <= 20);
        `).catch(() => {});

        await pool.query(`
            ALTER TABLE complaints
            ADD CONSTRAINT complaints_text_length_check CHECK (char_length(complaint) <= 2000);
        `).catch(() => {});

        await pool.query(`
            ALTER TABLE complaints
            ADD CONSTRAINT complaints_status_allowed_check CHECK (status IN ('pending', 'in_progress', 'resolved', 'rejected'));
        `).catch(() => {});

        // Create indexes for common query patterns.
        await pool.query(`
            CREATE INDEX IF NOT EXISTS idx_complaints_email ON complaints(email);
        `);
        await pool.query(`
            CREATE INDEX IF NOT EXISTS idx_complaints_status ON complaints(status);
        `);
        await pool.query(`
            CREATE INDEX IF NOT EXISTS idx_complaints_created_at ON complaints(created_at DESC);
        `);

        console.log('✓ Complaints table and indexes are ready');

    } catch (error) {
        console.error('Error preparing database:', error);
        process.exitCode = 1;
    } finally {
        await pool.end();
    }
}

createComplaintsTable();
