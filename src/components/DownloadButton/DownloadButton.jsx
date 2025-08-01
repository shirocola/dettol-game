import React from 'react';
import './DownloadButton.css';

const DownloadButton = ({ onClick, theme }) => {
  return (
    <button className={`download-button ${theme ? `theme-${theme}` : ''}`} onClick={onClick}>
      ดาวน์โหลด
    </button>
  );
};

export default DownloadButton;