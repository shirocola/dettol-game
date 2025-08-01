import React from 'react';
import html2canvas from 'html2canvas';
import DownloadButton from '../DownloadButton/DownloadButton';
import Button from '../Button/Button';
import './ResultFooter.css';

const ResultFooter = ({ onDownload, onNext, nextButtonText = "ถัดไป", theme }) => {
  const handleDownload = async () => {
    if (onDownload) {
      onDownload();
      return;
    }

    try {
      // Find the result container to capture
      const resultContainer = document.querySelector('.quiz-result-container') || 
                             document.querySelector('.quote-result-container');
      
      if (!resultContainer) {
        console.error('Result container not found');
        alert('Unable to capture screenshot');
        return;
      }

      // Hide the footer buttons temporarily during capture
      const footer = document.querySelector('.result-footer');
      if (footer) {
        footer.style.display = 'none';
      }

      // Create canvas from the result container
      const canvas = await html2canvas(resultContainer, {
        backgroundColor: null,
        scale: 2, // Higher quality
        useCORS: true,
        allowTaint: true,
        width: resultContainer.offsetWidth,
        height: resultContainer.offsetHeight
      });

      // Restore the footer buttons after capture
      if (footer) {
        footer.style.display = '';
      }

      // Convert canvas to blob and download
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `dettol-proskin-result-${Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 'image/png');

    } catch (error) {
      console.error('Error capturing screenshot:', error);
      alert('Error downloading image. Please try again.');
    }
  };

  return (
    <div className="result-footer">
      <div className="footer-buttons">
        <DownloadButton onClick={handleDownload} theme={theme} />
        <Button 
          text={nextButtonText} 
          onClick={onNext}
          className="smooth-button"
        />
      </div>
    </div>
  );
};

export default ResultFooter;