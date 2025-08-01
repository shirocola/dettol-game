import React from 'react';
import './QuizResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';

const GentleResult = ({ onNext }) => {
  return (
    <div className="quiz-result-container apple">
      <ResultFooter onNext={onNext} nextButtonText="ถัดไป" theme="apple" />
    </div>
  );
};

export default GentleResult;