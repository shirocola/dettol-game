import React from 'react';
import './QuizResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';

const ScentResult2 = ({ onNext }) => {
  return (
    <ResponsiveImage 
      src="/peach-result.png" 
      className="quiz-result-container peach"
    >
      <ResultFooter onNext={onNext} nextButtonText="ถัดไป" theme="peach" />
    </ResponsiveImage>
  );
};

export default ScentResult2;