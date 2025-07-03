import React from 'react';
import './DownloadButton.css';

const DownloadButton = ({ onClick }) => {
  return (
    <button className="download-button" onClick={onClick}>
      <span className="download-icon">⬇</span>
      Download
    </button>
  );
};

export default DownloadButton;