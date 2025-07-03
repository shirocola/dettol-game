import React from 'react';
import './QuizResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';

const ScentResult1 = ({ onNext }) => {
  return (
    <div className="quiz-result-container">
      <div className="quiz-result-card">
        <h2>Scent Result 1</h2>
        <p>You love lasting fragrance - Option 1!</p>
      </div>
      <ResultFooter onNext={onNext} nextButtonText="Next" />
    </div>
  );
};

export default ScentResult1;