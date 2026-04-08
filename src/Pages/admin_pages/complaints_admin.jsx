import React, { useEffect, useMemo, useState } from 'react';
import { API_ENDPOINTS } from '../../config/api';

const STATUS_OPTIONS = ['pending', 'in_progress', 'resolved', 'rejected'];

function ComplaintsAdmin() {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [savingId, setSavingId] = useState(null);
  const [statusDrafts, setStatusDrafts] = useState({});

  const exportUrl = useMemo(() => API_ENDPOINTS.ADMIN_COMPLAINTS_EXPORT, []);

  const loadComplaints = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(API_ENDPOINTS.ADMIN_COMPLAINTS);
      if (!response.ok) {
        throw new Error('Failed to load complaints');
      }

      const data = await response.json();
      setComplaints(data);
      const draftMap = {};
      data.forEach((item) => {
        draftMap[item.id] = item.status;
      });
      setStatusDrafts(draftMap);
    } catch (err) {
      setError(err.message || 'Failed to load complaints');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadComplaints();
  }, []);

  const handleStatusChange = (id, value) => {
    setStatusDrafts((prev) => ({ ...prev, [id]: value }));
  };

  const handleStatusSave = async (id) => {
    const nextStatus = statusDrafts[id];
    if (!nextStatus) {
      return;
    }

    setSavingId(id);
    setError('');

    try {
      const response = await fetch(API_ENDPOINTS.ADMIN_COMPLAINTS_STATUS(id), {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: nextStatus }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.error || 'Failed to update status');
      }

      await loadComplaints();
    } catch (err) {
      setError(err.message || 'Failed to update status');
    } finally {
      setSavingId(null);
    }
  };

  return (
    <div style={{ padding: '24px', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', gap: '12px', flexWrap: 'wrap' }}>
        <h1 style={{ margin: 0 }}>Complaints Admin</h1>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={loadComplaints}
            disabled={loading}
            style={{ padding: '10px 14px', borderRadius: '6px', border: '1px solid #444', background: '#1f1f1f', color: 'white', cursor: 'pointer' }}
          >
            Refresh
          </button>
          <a
            href={exportUrl}
            style={{ padding: '10px 14px', borderRadius: '6px', border: '1px solid #444', background: '#1f1f1f', color: 'white', textDecoration: 'none' }}
          >
            Export Excel
          </a>
        </div>
      </div>

      {error && (
        <div style={{ marginBottom: '12px', padding: '10px', border: '1px solid #5d3f3f', borderRadius: '6px', backgroundColor: '#3d1f1f', color: '#ffb3b3' }}>
          {error}
        </div>
      )}

      {loading ? (
        <p>Loading complaints...</p>
      ) : (
        <div style={{ overflowX: 'auto', border: '1px solid #2f2f2f', borderRadius: '8px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '960px' }}>
            <thead style={{ background: '#1a1a1a' }}>
              <tr>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Room</th>
                <th style={thStyle}>Complaint</th>
                <th style={thStyle}>Created</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((item) => (
                <tr key={item.id}>
                  <td style={tdStyle}>{item.id}</td>
                  <td style={tdStyle}>{item.name}</td>
                  <td style={tdStyle}>{item.email}</td>
                  <td style={tdStyle}>{item.room_number}</td>
                  <td style={{ ...tdStyle, maxWidth: '360px', whiteSpace: 'pre-wrap' }}>{item.complaint}</td>
                  <td style={tdStyle}>{new Date(item.created_at).toLocaleString()}</td>
                  <td style={tdStyle}>
                    <select
                      value={statusDrafts[item.id] || item.status}
                      onChange={(e) => handleStatusChange(item.id, e.target.value)}
                      style={{ padding: '6px 8px', borderRadius: '6px', border: '1px solid #444', backgroundColor: '#0f0f0f', color: 'white' }}
                    >
                      {STATUS_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td style={tdStyle}>
                    <button
                      type="button"
                      onClick={() => handleStatusSave(item.id)}
                      disabled={savingId === item.id}
                      style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #3a3a3a', background: '#2a2a2a', color: 'white', cursor: 'pointer' }}
                    >
                      {savingId === item.id ? 'Saving...' : 'Save'}
                    </button>
                  </td>
                </tr>
              ))}
              {complaints.length === 0 && (
                <tr>
                  <td style={tdStyle} colSpan={8}>No complaints found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const thStyle = {
  textAlign: 'left',
  padding: '10px',
  borderBottom: '1px solid #333',
  fontWeight: 600,
};

const tdStyle = {
  padding: '10px',
  borderBottom: '1px solid #252525',
  verticalAlign: 'top',
};

export default ComplaintsAdmin;
