function ComplaintsContent({ formData, handleChange, handleSubmit, loading, message, error }) {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        backgroundColor: '#1a1a1a',
        padding: '30px',
        borderRadius: '8px',
        border: '1px solid #333'
      }}>
        {/* Name Field */}
        <div>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontSize: '1rem' }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #444',
              backgroundColor: '#0d0d0d',
              color: '#fff',
              borderRadius: '4px',
              fontSize: '1rem',
              fontFamily: 'inherit',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontSize: '1rem' }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #444',
              backgroundColor: '#0d0d0d',
              color: '#fff',
              borderRadius: '4px',
              fontSize: '1rem',
              fontFamily: 'inherit',
              boxSizing: 'border-box'
            }}
          />
        </div>
          {/* Room Number Field */}
        <div>
          <label htmlFor="room_number" style={{ display: 'block', marginBottom: '8px', fontSize: '1rem' }}>
            Room Number
          </label>
          <input
            type="text"
            id="room_number"
            name="room_number"
            value={formData.room_number}
            onChange={handleChange}
            placeholder="Your room number (e.g., 101A)"
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #444',
              backgroundColor: '#0d0d0d',
              color: '#fff',
              borderRadius: '4px',
              fontSize: '1rem',
              fontFamily: 'inherit',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Complaint Field */}
        <div>
          <label htmlFor="complaint" style={{ display: 'block', marginBottom: '8px', fontSize: '1rem' }}>
            Complaint
          </label>
          <textarea
            id="complaint"
            name="complaint"
            value={formData.complaint}
            onChange={handleChange}
            placeholder="Please describe your complaint in detail..."
            required
            rows="6"
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #444',
              backgroundColor: '#0d0d0d',
              color: '#fff',
              borderRadius: '4px',
              fontSize: '1rem',
              fontFamily: 'inherit',
              resize: 'vertical',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Error Message */}
        {error && (
          <div style={{
            padding: '12px',
            backgroundColor: '#3d1f1f',
            color: '#ff6b6b',
            borderRadius: '4px',
            border: '1px solid #5d3f3f'
          }}>
            {error}
          </div>
        )}

        {/* Success Message */}
        {message && (
          <div style={{
            padding: '12px',
            backgroundColor: '#1f3d1f',
            color: '#6bff6b',
            borderRadius: '4px',
            border: '1px solid #3f5d3f'
          }}>
            {message}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '12px 24px',
            backgroundColor: loading ? '#555' : '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.3s',
            opacity: loading ? 0.7 : 1
          }}
          onMouseEnter={(e) => !loading && (e.target.style.backgroundColor = '#0056b3')}
          onMouseLeave={(e) => !loading && (e.target.style.backgroundColor = '#007bff')}
        >
          {loading ? 'Submitting...' : 'Submit Complaint'}
        </button>
      </form>
    </div>
  );
}

export default ComplaintsContent;
