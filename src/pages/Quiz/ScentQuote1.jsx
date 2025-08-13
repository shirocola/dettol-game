import React from 'react';
import './QuoteResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';

const ScentQuote1 = ({ onNext }) => {
  return (
    <ResponsiveImage 
      src="/sakura-quote.png" 
      className="quote-result-container sakura"
    >
      <ResultFooter onNext={onNext} nextButtonText="ถัดไป" theme="sakura" />
    </ResponsiveImage>
  );
};

export default ScentQuote1;