import { useState } from 'react';
import './App.css';
import './pages/AgeSelection/AgeSelection.css'; 
import StartPage from './pages/StartPage/StartPage';
import AgeSelection from './pages/AgeSelection/AgeSelection';
import DettolCircle from './components/DettolCircle/DettolCircle'; 
import Button from './components/Button/Button'; 
import DettolQuizComplete from './components/Quiz/Quiz';

function App() {
  const [gameStep, setGameStep] = useState(0); // 0: Start Screen, 1: Age Selection, 2: Start Page

  const handleStartGame = () => {
    setGameStep(1); // Navigate to Age Selection
  };

  const handleNext = () => {
    setGameStep(2); // Navigate to Start Page
  };

  const handleStartQuiz = () => {
    setGameStep(3); // Navigate to Quiz Complete
  }

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
      {gameStep === 2 && (
        <StartPage onStart={handleStartQuiz} />
      )}
      {gameStep === 3 && (
        <DettolQuizComplete />
      )}
    </div>
  );
}

export default App;
