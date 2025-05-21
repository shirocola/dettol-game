import React from 'react';
import './StartPage.css';
import DettolCircle from '../../components/DettolCircle/DettolCircle';
import Button from '../../components/Button/Button';

const StartPage = ({ onStart }) => {
  return (
    <div className="start-page">
      <DettolCircle />
      <div className="start-page-text">
        <h1>MATCH YOUR <br /> LOVE STORY</h1>
      </div>
      <Button text="START!" onClick={onStart} />
    </div>
  );
};

export default StartPage;