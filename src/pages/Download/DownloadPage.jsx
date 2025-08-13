import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';
import Button from '../../components/Button/Button';
import './DownloadPage.css';

const DownloadPage = ({ resultType, onBack }) => {
  const [resultQrData, setResultQrData] = useState('');
  const [quoteQrData, setQuoteQrData] = useState('');
  
  useEffect(() => {
    // URLs to React image viewer with download button
    const resultViewUrl = `${window.location.origin}/?type=${resultType}&file=result`;
    const quoteViewUrl = `${window.location.origin}/?type=${resultType}&file=quote`;
    
    setResultQrData(resultViewUrl);
    setQuoteQrData(quoteViewUrl);
  }, [resultType]);

  const handleDownloadSeparate = async () => {
    try {
      // Download result image
      const resultImageUrl = `/${resultType}-result.png`;
      await downloadImage(resultImageUrl, `${resultType}-result.png`);
      
      // Small delay between downloads
      setTimeout(async () => {
        // Download quote image
        const quoteImageUrl = `/${resultType}-quote.png`;
        await downloadImage(quoteImageUrl, `${resultType}-quote.png`);
      }, 500);

    } catch (error) {
      console.error('Error downloading images:', error);
      alert('เกิดข้อผิดพลาดในการดาวน์โหลด กรุณาลองใหม่อีกครั้ง');
    }
  };

  const downloadImage = async (imageUrl, filename) => {
    try {
      const response = await fetch(imageUrl);
      if (!response.ok) throw new Error('Failed to fetch image');
      
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
      console.error('Error downloading image:', imageUrl, error);
      throw error;
    }
  };

  return (
    <ResponsiveImage 
      src="/background-download.png" 
      className="download-page-container"
    >
      <div className="download-content">
        <div className="qr-section">
          <h2>สแกน QR Code เพื่อดาวน์โหลด</h2>
          
          <div className="qr-codes-container">
            <div className="qr-item">
              <div className="qr-code-container">
                {resultQrData && (
                  <QRCodeSVG
                    value={resultQrData}
                    size={150}
                    level="M"
                    includeMargin={true}
                  />
                )}
              </div>
              <p>ผลลัพธ์</p>
            </div>
            
            <div className="qr-item">
              <div className="qr-code-container">
                {quoteQrData && (
                  <QRCodeSVG
                    value={quoteQrData}
                    size={150}
                    level="M"
                    includeMargin={true}
                  />
                )}
              </div>
              <p>คำคม</p>
            </div>
          </div>
          
          <p>สแกนเพื่อดูรูปและดาวน์โหลด</p>
        </div>
        
        <div className="download-buttons-section">
          <Button
            text="ดาวน์โหลด 2 ไฟล์"
            onClick={handleDownloadSeparate}
            className="download-combined-button"
          />
          <Button
            text="กลับสู่หน้าหลัก"
            onClick={onBack}
            className="back-button"
          />
        </div>
      </div>
    </ResponsiveImage>
  );
};

export default DownloadPage;