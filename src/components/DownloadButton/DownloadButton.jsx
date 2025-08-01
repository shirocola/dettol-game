import React from 'react';
import './DownloadButton.css';

const DownloadButton = ({ onClick, theme }) => {
  return (
    <button className={`download-button ${theme ? `theme-${theme}` : ''}`} onClick={onClick}>
      <span className="download-icon">⬇</span>
      ดาวน์โหลด
    </button>
  );
};

export default DownloadButton;