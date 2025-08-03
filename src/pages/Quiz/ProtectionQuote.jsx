import React from 'react';
import './QuoteResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';

const ProtectionQuote = ({ onNext }) => {
  return (
    <ResponsiveImage 
      src="/honey-quote.png" 
      className="quote-result-container honey"
    >
      <ResultFooter onNext={onNext} nextButtonText="กลับสู่หน้าหลัก" theme="honey" />
    </ResponsiveImage>
  );
};

export default ProtectionQuote;