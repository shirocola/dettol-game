import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen-container">
      <div className="loading-screen-content">
        <div className="loading-gif">
          <div className="spinner"></div>
        </div>
        <div className="loading-text">
          กำลังโหลด
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;