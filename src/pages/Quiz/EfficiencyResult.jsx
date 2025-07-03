import React from 'react';
import './QuizResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';

const EfficiencyResult = ({ onNext }) => {
  return (
    <div className="quiz-result-container">
      <div className="quiz-result-card">
        <h2>Efficiency Result</h2>
        <p>You value efficiency in cleaning products!</p>
      </div>
      <ResultFooter onNext={onNext} nextButtonText="Next" />
    </div>
  );
};

export default EfficiencyResult;