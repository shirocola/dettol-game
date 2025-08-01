import React from 'react';
import './QuoteResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';

const ScentQuote2 = ({ onNext }) => {
  return (
    <div className="quote-result-container peach">
      <ResultFooter onNext={onNext} nextButtonText="เล่นอีกครั้ง" theme="peach" />
    </div>
  );
};

export default ScentQuote2;