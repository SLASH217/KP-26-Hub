import React, { useState } from 'react';
import { API_ENDPOINTS } from '../../config/api';
import ComplaintsTitle from '../../components/component/info_components/info_title/complaints.jsx';
import ComplaintsContent from '../../components/component/info_components/info_content/complaints.jsx';

function Complaints() {
  const LIMITS = {
    nameMaxLength: 100,
    emailMaxLength: 254,
    roomNumberMaxLength: 20,
    complaintMaxLength: 2000,
    complaintMaxLines: 25,
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    room_number: '',
    complaint: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const complaintLineCount = formData.complaint.split(/\r?\n/).length;

    if (!formData.name || !formData.email || !formData.complaint || !formData.room_number) {
      setError('All fields are required');
      return;
    }

    if (formData.name.length > LIMITS.nameMaxLength) {
      setError(`Name must be at most ${LIMITS.nameMaxLength} characters`);
      return;
    }

    if (formData.email.length > LIMITS.emailMaxLength) {
      setError(`Email must be at most ${LIMITS.emailMaxLength} characters`);
      return;
    }

    if (formData.room_number.length > LIMITS.roomNumberMaxLength) {
      setError(`Room number must be at most ${LIMITS.roomNumberMaxLength} characters`);
      return;
    }

    if (formData.complaint.length > LIMITS.complaintMaxLength) {
      setError(`Complaint must be at most ${LIMITS.complaintMaxLength} characters`);
      return;
    }

    if (complaintLineCount > LIMITS.complaintMaxLines) {
      setError(`Complaint must be at most ${LIMITS.complaintMaxLines} lines`);
      return;
    }

    setLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch(API_ENDPOINTS.COMPLAINTS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit complaint');
      }

      const data = await response.json();
      setMessage('Complaint submitted successfully!');
      setFormData({
        name: '',
        email: '',
        room_number: '',
        complaint: ''
      });

      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      setError(err.message || 'Error submitting complaint');
      console.error('Submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ComplaintsTitle />
      <ComplaintsContent
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        loading={loading}
        message={message}
        error={error}
      />
    </>
  );
}

export default Complaints;
