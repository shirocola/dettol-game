import React from 'react';
import './QuizResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';

const ProtectionResult = ({ onNext }) => {
  return (
    <div className="quiz-result-container honey">
      <ResultFooter onNext={onNext} nextButtonText="ถัดไป" theme="honey" />
    </div>
  );
};

export default ProtectionResult;