import React from 'react';
import './QuoteResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';

const ProtectionQuote = ({ onNext }) => {
  return (
    <div className="quote-result-container honey">
      <ResultFooter onNext={onNext} nextButtonText="กลับสู่หน้าหลัก" theme="honey" />
    </div>
  );
};

export default ProtectionQuote;