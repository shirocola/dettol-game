import React from 'react';
import './QuoteResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';

const GentleQuote = ({ onNext }) => {
  return (
    <div className="quote-result-container apple">
      <ResultFooter onNext={onNext} nextButtonText="กลับสู่หน้าหลัก" theme="apple" />
    </div>
  );
};

export default GentleQuote;