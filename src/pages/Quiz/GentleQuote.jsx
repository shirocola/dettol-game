import React from 'react';
import './QuoteResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';

const GentleQuote = ({ onNext }) => {
  return (
    <div className="quote-result-container">
      <div className="quote-result-card">
        <div className="quote-icon">🌿</div>
        <h2>Gentle Quote</h2>
        <div className="quote-text">
          <p>"Gentleness is strength under control. Your preference for gentle care shows your understanding of true wellness."</p>
        </div>
        <div className="quote-author">- Dettol ProSkin</div>
      </div>
      <ResultFooter onNext={onNext} nextButtonText="เล่นอีกครั้ง" />
    </div>
  );
};

export default GentleQuote;