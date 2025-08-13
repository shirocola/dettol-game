import React from 'react';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';
import './Process.css';

const Process = () => {
  return (
    <ResponsiveImage 
      src="/lodingbackground.png" 
      className="process-container"
    >
      <div className="process-content">
        <div className="loading-gif">
          <img 
            src="/loading.svg" 
            alt="Loading..." 
            className="loading-icon"
          />
        </div>
        <div className="process-text">
          กำลังวิเคราะห์ตัวตน
        </div>
      </div>
    </ResponsiveImage>
  );
};

export default Process;