import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './QRCodeComponent.css';

const QRCodeComponent = ({ url, size = 200 }) => {
  const [showQR, setShowQR] = useState(false);

  const toggleQR = () => {
    setShowQR(!showQR);
  };

  return (
    <div className="qr-code-container">
      <button 
        className="qr-toggle-button" 
        onClick={toggleQR}
        aria-label="Show QR Code"
      >
        {showQR ? '📱 Hide QR' : '📱 Scan to Play'}
      </button>
      
      {showQR && (
        <div className="qr-code-modal">
          <div className="qr-code-content">
            <div className="qr-code-header">
              <h3>Scan to Play on Mobile</h3>
              <button 
                className="qr-close-button" 
                onClick={toggleQR}
                aria-label="Close QR Code"
              >
                ✕
              </button>
            </div>
            
            <div className="qr-code-wrapper">
              <QRCodeSVG 
                value={url}
                size={size}
                level="M"
                includeMargin={true}
                bgColor="#ffffff"
                fgColor="#000000"
              />
            </div>
            
            <div className="qr-code-info">
              <p>Point your phone camera at this QR code to open the game</p>
              <div className="game-url">
                <small>{url}</small>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRCodeComponent;