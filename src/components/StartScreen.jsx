import React from 'react'
import DettolCircle from '../../components/DettolCircle/DettolCircle';
import Button from '../../components/Button/Button';

function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <h1>Welcome to the Game</h1>
      <button className="play-button" onClick={onStart}>
        Play
      </button>
    </div>
  )
}

export default StartScreen