import React from 'react';
import './Resume.css';

const Resume: React.FC = () => {
  return (
    <div className="resume-container">
      <div className="resume-wrapper">
        <iframe
          src="https://profile.indeed.com/p/7fvrkbz"
          width="100%"
          height="100%"
          allow="autoplay"
          title="Resume"
          className="resume-iframe"
          data-testid="resume-iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;