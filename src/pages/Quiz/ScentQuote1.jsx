import React from 'react';
import './QuoteResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';

const ScentQuote1 = ({ onNext }) => {
  return (
    <div className="quote-result-container sakura">
      <ResultFooter onNext={onNext} nextButtonText="เล่นอีกครั้ง" theme="sakura" />
    </div>
  );
};

export default ScentQuote1;