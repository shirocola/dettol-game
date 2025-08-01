import React from 'react';
import './QuizResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';

const ScentResult1 = ({ onNext }) => {
  return (
    <div className="quiz-result-container sakura">
      <ResultFooter onNext={onNext} nextButtonText="ถัดไป" theme="sakura" />
    </div>
  );
};

export default ScentResult1;