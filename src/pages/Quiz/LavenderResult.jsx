import React from 'react';
import './QuizResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';

const LavenderResult = ({ onNext }) => {
  return (
    <ResponsiveImage 
      src="/lavender-result.png" 
      className="quiz-result-container lavender"
    >
      <ResultFooter onNext={onNext} nextButtonText="ถัดไป" theme="lavender" />
    </ResponsiveImage>
  );
};

export default LavenderResult;