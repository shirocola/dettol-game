import React from 'react';
import './QuizResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';

const ProtectionResult = ({ onNext }) => {
  return (
    <div className="quiz-result-container">
      <div className="quiz-result-card">
        <h2>Protection Result</h2>
        <p>You care about skin protection and care!</p>
      </div>
      <ResultFooter onNext={onNext} nextButtonText="ถัดไป" />
    </div>
  );
};

export default ProtectionResult;