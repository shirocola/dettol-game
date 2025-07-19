import React from 'react';
import './QuoteResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';

const ProtectionQuote = ({ onNext }) => {
  return (
    <div className="quote-result-container">
      <div className="quote-result-card">
        <div className="quote-icon">🛡️</div>
        <h2>Protection Quote</h2>
        <div className="quote-text">
          <p>"True beauty comes from healthy skin. Your care for protection shows your wisdom in self-love."</p>
        </div>
        <div className="quote-author">- Dettol ProSkin</div>
      </div>
      <ResultFooter onNext={onNext} nextButtonText="เล่นอีกครั้ง" />
    </div>
  );
};

export default ProtectionQuote;