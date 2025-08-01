import React from 'react';
import './QuoteResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';

const ProtectionQuote = ({ onNext }) => {
  return (
    <div className="quote-result-container honey">
      <ResultFooter onNext={onNext} nextButtonText="เล่นอีกครั้ง" theme="honey" />
    </div>
  );
};

export default ProtectionQuote;