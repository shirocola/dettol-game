import React from 'react';
import './QuoteResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';

const EfficiencyQuote = ({ onNext }) => {
  return (
    <div className="quote-result-container">
      <div className="quote-result-card">
        <div className="quote-icon">💪</div>
        <h2>Efficiency Quote</h2>
        <div className="quote-text">
          <p>"Excellence is not a skill, it's an attitude. Like you, we believe in getting things done right the first time."</p>
        </div>
        <div className="quote-author">- Dettol ProSkin</div>
      </div>
      <ResultFooter onNext={onNext} nextButtonText="Play Again" />
    </div>
  );
};

export default EfficiencyQuote;