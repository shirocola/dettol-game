import React from 'react';
import './QuoteResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';

const ScentQuote2 = ({ onNext }) => {
  return (
    <ResponsiveImage 
      src="/peach-quote.png" 
      className="quote-result-container peach"
    >
      <ResultFooter onNext={onNext} nextButtonText="กลับสู่หน้าหลัก" theme="peach" />
    </ResponsiveImage>
  );
};

export default ScentQuote2;