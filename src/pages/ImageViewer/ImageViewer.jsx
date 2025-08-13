import React from 'react';
import './ImageViewer.css';

const ImageViewer = () => {
  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get('type');
  
  if (!type) {
    return <div className="error-message">ไม่พบรูปภาพ</div>;
  }
  
  const resultFilename = `${type}-result.png`;
  const quoteFilename = `${type}-quote.png`;
  const resultImageUrl = `/${resultFilename}`;
  const quoteImageUrl = `/${quoteFilename}`;
  
  const handleDownload = async (imageUrl, filename) => {
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
      <div className="images-scroll-container">
        {/* Result Image */}
        <div className="image-section">
          <div className="image-header">
            <h2>ผลลัพธ์</h2>
          </div>
          <div className="image-wrapper">
            <img 
              src={resultImageUrl} 
              alt="Result Image"
              className="viewer-image"
            />
            <button 
              className="download-button-overlay"
              onClick={() => handleDownload(resultImageUrl, resultFilename)}
            >
              📥 ดาวน์โหลดผลลัพธ์
            </button>
          </div>
        </div>
        
        {/* Quote Image */}
        <div className="image-section">
          <div className="image-header">
            <h2>คำคม</h2>
          </div>
          <div className="image-wrapper">
            <img 
              src={quoteImageUrl} 
              alt="Quote Image"
              className="viewer-image"
            />
            <button 
              className="download-button-overlay"
              onClick={() => handleDownload(quoteImageUrl, quoteFilename)}
            >
              📥 ดาวน์โหลดคำคม
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;