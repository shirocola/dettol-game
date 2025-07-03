import React from 'react'
import Button from '../Button/Button';

function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <h1>Welcome to the Game</h1>
      <Button text="Play" onClick={onStart} className="smooth-button" />
    </div>
  )
}

export default StartScreen