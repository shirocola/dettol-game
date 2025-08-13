import React from 'react';
import Button from '../Button/Button';
import './ResultFooter.css';

const ResultFooter = ({ onNext, nextButtonText = "ถัดไป", theme }) => {
  return (
    <div className="result-footer">
      <div className="footer-buttons">
        <Button 
          text={nextButtonText} 
          onClick={onNext}
          className="smooth-button"
        />
      </div>
    </div>
  );
};

export default ResultFooter;