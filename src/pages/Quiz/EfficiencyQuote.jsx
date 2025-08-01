import React from 'react';
import './QuoteResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';

const EfficiencyQuote = ({ onNext }) => {
  return (
    <div className="quote-result-container lavender">
      <ResultFooter onNext={onNext} nextButtonText="กลับสู่หน้าหลัก" theme="lavender" />
    </div>
  );
};

export default EfficiencyQuote;