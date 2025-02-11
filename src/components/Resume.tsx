import React from 'react';

const Resume: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f4f4f9' }}>
      <div style={{ width: '80%', height: '80vh', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden' }}>
        <iframe
          src="https://drive.google.com/file/d/1bge3dtinVV2ATjfzZiZOG7XqyMdw5t_Y/preview"
          width="100%"
          height="100%"
          allow="autoplay"
          style={{ border: 'none' }}
          data-testid="resume-iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;