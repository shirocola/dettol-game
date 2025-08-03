import React from 'react';
import './QuizResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';

const GentleResult = ({ onNext }) => {
  return (
    <ResponsiveImage 
      src="/apple-result.png" 
      className="quiz-result-container apple"
    >
      <ResultFooter onNext={onNext} nextButtonText="ถัดไป" theme="apple" />
    </ResponsiveImage>
  );
};

export default GentleResult;