import React from 'react';
import DownloadButton from '../DownloadButton/DownloadButton';
import Button from '../Button/Button';
import './ResultFooter.css';

const ResultFooter = ({ onDownload, onNext, nextButtonText = "ถัดไป", theme }) => {
  const getBackgroundImageUrl = () => {
    // Find the result or quote container
    const resultContainer = document.querySelector('.quiz-result-container') || 
                           document.querySelector('.quote-result-container');
    
    if (!resultContainer) return null;

    // Get the background image from CSS
    const computedStyle = window.getComputedStyle(resultContainer);
    const backgroundImage = computedStyle.backgroundImage;
    
    // Extract URL from "url(...)" format
    const match = backgroundImage.match(/url\(["']?([^"')]+)["']?\)/);
    if (!match) return null;
    
    let imageUrl = match[1];
    
    // Use the actual loaded image (WebP) instead of trying to convert to PNG
    // This avoids CORS and file accessibility issues
    return imageUrl;
  };

  const handleDownload = async () => {
    if (onDownload) {
      onDownload();
      return;
    }

    try {
      // Get the background image URL
      const imageUrl = getBackgroundImageUrl();
      
      if (!imageUrl) {
        console.error('Background image not found');
        alert('Unable to find background image');
        return;
      }

      // Detect if this is a result or quote page
      const isQuotePage = document.querySelector('.quote-result-container');
      const pageType = isQuotePage ? 'quote' : 'result';

      // Get file extension from the actual image URL
      const fileExtension = imageUrl.includes('.webp') ? '.webp' : '.png';

      // Create a temporary link to download the image
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = `${theme || 'result'}-${pageType}${fileExtension}`;
      
      // For cross-origin images, we need to fetch and create blob
      try {
        const response = await fetch(imageUrl);
        if (!response.ok) throw new Error('Failed to fetch image');
        
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        
        link.href = blobUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Clean up
        URL.revokeObjectURL(blobUrl);
      } catch (fetchError) {
        // Fallback: try direct download
        console.log('Direct fetch failed, trying direct download:', fetchError);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

    } catch (error) {
      console.error('Error downloading image:', error);
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