import React from 'react';
import './QuizResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';

const ProtectionResult = ({ onNext }) => {
  return (
    <ResponsiveImage 
      src="/honey-result.png" 
      className="quiz-result-container honey"
    >
      <ResultFooter onNext={onNext} nextButtonText="ถัดไป" theme="honey" />
    </ResponsiveImage>
  );
};

export default ProtectionResult;