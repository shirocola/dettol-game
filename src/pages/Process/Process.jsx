import React from 'react';
import './Process.css';

const Process = () => {
  return (
    <div className="process-container">
      <div className="process-content">
        <div className="loading-gif">
          <div className="spinner"></div>
        </div>
        <div className="process-text">
          กำลังวิเคราะห์ตัวตน
        </div>
      </div>
    </div>
  );
};

export default Process;