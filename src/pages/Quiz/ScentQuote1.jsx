import React from 'react';
import './QuoteResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';

const ScentQuote1 = ({ onNext }) => {
  return (
    <div className="quote-result-container">
      <div className="quote-result-card">
        <div className="quote-icon">🌸</div>
        <h2>Scent Quote</h2>
        <div className="quote-text">
          <p>"A beautiful fragrance is like a memory that lingers. Your love for lasting scents creates unforgettable moments."</p>
        </div>
        <div className="quote-author">- Dettol ProSkin</div>
      </div>
      <ResultFooter onNext={onNext} nextButtonText="Play Again" />
    </div>
  );
};

export default ScentQuote1;