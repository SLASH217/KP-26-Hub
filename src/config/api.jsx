// API configuration
const RAW_API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const API_BASE_URL = RAW_API_BASE_URL.replace(/\/$/, '');

export const API_ENDPOINTS = {
  COMPLAINTS: `${API_BASE_URL}/api/complaints`,
  ADMIN_COMPLAINTS: `${API_BASE_URL}/api/admin/complaints`,
  ADMIN_COMPLAINTS_EXPORT: `${API_BASE_URL}/api/admin/complaints/export`,
  ADMIN_COMPLAINTS_STATUS: (id) => `${API_BASE_URL}/api/admin/complaints/${id}/status`,
};

export default API_BASE_URL;
