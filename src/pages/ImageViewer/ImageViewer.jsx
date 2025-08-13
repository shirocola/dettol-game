import React from 'react';
import './ImageViewer.css';

const ImageViewer = () => {
  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get('type');
  const file = urlParams.get('file');
  
  if (!type || !file) {
    return <div className="error-message">ไม่พบรูปภาพ</div>;
  }
  
  const filename = `${type}-${file}.png`;
  const imageUrl = `/${filename}`;
  
  const handleDownload = async () => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      URL.revokeObjectURL(url);
    } catch (error) {
      // Fallback
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = filename;
      link.click();
    }
  };

  return (
    <div className="image-viewer-container">
      <img 
        src={imageUrl} 
        alt="Downloaded Image"
        className="viewer-image"
      />
      <button 
        className="download-button-overlay"
        onClick={handleDownload}
      >
        📥 ดาวน์โหลด
      </button>
    </div>
  );
};

export default ImageViewer;