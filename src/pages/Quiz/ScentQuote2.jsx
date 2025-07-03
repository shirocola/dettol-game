import React from 'react';
import './QuoteResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';

const ScentQuote2 = ({ onNext }) => {
  return (
    <div className="quote-result-container">
      <div className="quote-result-card">
        <div className="quote-icon">✨</div>
        <h2>Scent Quote</h2>
        <div className="quote-text">
          <p>"Elegance is when the inside is as beautiful as the outside. Your appreciation for fine fragrances reflects your refined taste."</p>
        </div>
        <div className="quote-author">- Dettol ProSkin</div>
      </div>
      <ResultFooter onNext={onNext} nextButtonText="Play Again" />
    </div>
  );
};

export default ScentQuote2;