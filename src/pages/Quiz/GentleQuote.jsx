import React from 'react';
import './QuoteResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';

const GentleQuote = ({ onNext }) => {
  return (
    <ResponsiveImage 
      src="/apple-quote.png" 
      className="quote-result-container apple"
    >
      <ResultFooter onNext={onNext} nextButtonText="กลับสู่หน้าหลัก" theme="apple" />
    </ResponsiveImage>
  );
};

export default GentleQuote;