import React from 'react';
import './QuoteResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';

const EfficiencyQuote = ({ onNext }) => {
  return (
    <ResponsiveImage 
      src="/lavender-quote.png" 
      className="quote-result-container lavender"
    >
      <ResultFooter onNext={onNext} nextButtonText="ถัดไป" theme="lavender" />
    </ResponsiveImage>
  );
};

export default EfficiencyQuote;