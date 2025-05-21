import React, { useState } from 'react';
import './App.css';
import './pages/AgeSelection/AgeSelection.css'; // Import AgeSelection styles
import StartPage from './pages/StartPage/StartPage'; // Import StartPage
import AgeSelection from './pages/AgeSelection/AgeSelection'; // Import AgeSelection
import DettolCircle from './components/DettolCircle/DettolCircle'; // Import DettolCircle
import Button from './components/Button/Button'; // Import Button component

function App() {
  const [gameStep, setGameStep] = useState(0); // 0: Start Screen, 1: Age Selection, 2: Start Page

  const handleStartGame = () => {
    setGameStep(1); // Navigate to Age Selection
  };

  const handleNext = () => {
    setGameStep(2); // Navigate to Start Page
  };

  return (
    <div className="app-container">
      {gameStep === 0 && (
        <div className="start-screen">
          <DettolCircle />
          <div className="start-screen-text">
            <h1>LOVE IN <br /> FIRST SCENT <br /> with DETTOL</h1>
            <h2>PROSKIN INTERACTIVE GAME</h2>
          </div>
          <Button text="PLAY!" onClick={handleStartGame} className="age-button" />
        </div>
      )}
      {gameStep === 1 && (
        <AgeSelection
          backgroundImage="/path/to/age-selection-background.jpg"
          onNext={handleNext} // Pass the handleNext function as a prop
        />
      )}
      {gameStep === 2 && <StartPage />}
    </div>
  );
}

export default App;
