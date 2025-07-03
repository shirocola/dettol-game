import React from 'react';
import './QuizResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';

const GentleResult = ({ onNext }) => {
  return (
    <div className="quiz-result-container">
      <div className="quiz-result-card">
        <h2>Gentle Result</h2>
        <p>You prefer gentle and refreshing products!</p>
      </div>
      <ResultFooter onNext={onNext} nextButtonText="Next" />
    </div>
  );
};

export default GentleResult;