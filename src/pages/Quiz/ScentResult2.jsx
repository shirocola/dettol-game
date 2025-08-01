import React from 'react';
import './QuizResult.css';
import ResultFooter from '../../components/ResultFooter/ResultFooter';

const ScentResult2 = ({ onNext }) => {
  return (
    <div className="quiz-result-container peach">
      <ResultFooter onNext={onNext} nextButtonText="ถัดไป" theme="peach" />
    </div>
  );
};

export default ScentResult2;