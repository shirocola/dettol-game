import React from 'react';
import './QuizResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';

const EfficiencyResult = ({ onNext }) => {
  return (
    <div className="quiz-result-container lavender">
      <ResultFooter onNext={onNext} nextButtonText="ถัดไป" theme="lavender" />
    </div>
  );
};

export default EfficiencyResult;