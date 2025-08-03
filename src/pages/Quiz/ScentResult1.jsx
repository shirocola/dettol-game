import React from 'react';
import './QuizResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';

const ScentResult1 = ({ onNext }) => {
  return (
    <ResponsiveImage 
      src="/sakura-result.png" 
      className="quiz-result-container sakura"
    >
      <ResultFooter onNext={onNext} nextButtonText="ถัดไป" theme="sakura" />
    </ResponsiveImage>
  );
};

export default ScentResult1;