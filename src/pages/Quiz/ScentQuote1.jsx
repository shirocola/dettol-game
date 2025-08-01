import React from 'react';
import './QuoteResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';

const ScentQuote1 = ({ onNext }) => {
  return (
    <div className="quote-result-container sakura">
      <ResultFooter onNext={onNext} nextButtonText="กลับสู่หน้าหลัก" theme="sakura" />
    </div>
  );
};

export default ScentQuote1;