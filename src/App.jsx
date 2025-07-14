import { useState } from 'react';
import './App.css';
import './pages/AgeSelection/AgeSelection.css'; 
import StartPage from './pages/StartPage/StartPage';
import AgeSelection from './pages/AgeSelection/AgeSelection';
import DettolCircle from './components/DettolCircle/DettolCircle'; 
import Button from './components/Button/Button'; 
import DettolQuizComplete from './components/Quiz/Quiz';
import QRCodeComponent from './components/QRCode/QRCodeComponent';
import EfficiencyResult from './pages/Quiz/EfficiencyResult';
import ProtectionResult from './pages/Quiz/ProtectionResult';
import ScentResult1 from './pages/Quiz/ScentResult1';
import ScentResult2 from './pages/Quiz/ScentResult2';
import GentleResult from './pages/Quiz/GentleResult';
import EfficiencyQuote from './pages/Quiz/EfficiencyQuote';
import ProtectionQuote from './pages/Quiz/ProtectionQuote';
import ScentQuote1 from './pages/Quiz/ScentQuote1';
import ScentQuote2 from './pages/Quiz/ScentQuote2';
import GentleQuote from './pages/Quiz/GentleQuote';
import Process from './pages/Process/Process';
import LazyBackgroundImage from './components/LazyBackgroundImage/LazyBackgroundImage';

function App() {
  const [gameStep, setGameStep] = useState(0); // 0: Start Screen, 1: Age Selection, 2: Start Page, 3: Quiz, 4-8: Results, 9-13: Quotes, 14: Process
  const [quizResult, setQuizResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const gameUrl = "https://dettol-game.vercel.app/";

  const smoothTransition = (nextStep, delay = 300) => {
    setIsLoading(true);
    setTimeout(() => {
      setGameStep(nextStep);
      setIsLoading(false);
    }, delay);
  };

  const handleStartGame = () => {
    smoothTransition(1); // Navigate to Age Selection
  };

  const handleNext = () => {
    smoothTransition(2); // Navigate to Start Page
  };

  const handleStartQuiz = () => {
    smoothTransition(3); // Navigate to Quiz Complete
  };

  const handleQuizComplete = (resultRoute, answers) => {
    setQuizResult({ route: resultRoute, answers });
    // Show process page first
    setGameStep(14);
    
    // After 3 seconds, navigate to result page
    setTimeout(() => {
      switch (resultRoute) {
        case 'efficiency':
          setGameStep(4);
          break;
        case 'protection':
          setGameStep(5);
          break;
        case 'scent1':
          setGameStep(6);
          break;
        case 'scent2':
          setGameStep(7);
          break;
        case 'gentle':
          setGameStep(8);
          break;
        default:
          setGameStep(4);
      }
    }, 3000);
  };

  const handlePlayAgain = () => {
    smoothTransition(0);
    setQuizResult(null);
  };

  const handleShowQuote = (resultStep) => {
    // Navigate to corresponding quote page
    switch (resultStep) {
      case 4: // EfficiencyResult
        smoothTransition(9);
        break;
      case 5: // ProtectionResult
        smoothTransition(10);
        break;
      case 6: // ScentResult1
        smoothTransition(11);
        break;
      case 7: // ScentResult2
        smoothTransition(12);
        break;
      case 8: // GentleResult
        smoothTransition(13);
        break;
      default:
        smoothTransition(9);
    }
  };

  return (
    <LazyBackgroundImage 
      src="/BG-Cream.png" 
      className="app-container"
      loadingComponent={<div className="loading-spinner"></div>}
    >
      {gameStep === 0 && (
        <div className="start-screen game-screen">
          <DettolCircle />
          <div className="start-screen-text">
            <h1>LOVE IN <br /> FIRST SCENT <br /> with DETTOL</h1>
            <h2>PROSKIN INTERACTIVE GAME</h2>
          </div>
          <Button text="PLAY!" onClick={handleStartGame} className="age-button smooth-button" />
          <QRCodeComponent url={gameUrl} size={200} />
        </div>
      )}
      {gameStep === 1 && (
        <div className="game-screen">
          <AgeSelection onNext={handleNext} />
        </div>
      )}
      {gameStep === 2 && (
        <div className="game-screen">
          <StartPage onStart={handleStartQuiz} />
        </div>
      )}
      {gameStep === 3 && (
        <div className="game-screen">
          <DettolQuizComplete onQuizComplete={handleQuizComplete} />
        </div>
      )}
      {gameStep === 4 && (
        <div className="game-screen">
          <EfficiencyResult onNext={() => handleShowQuote(4)} />
        </div>
      )}
      {gameStep === 5 && (
        <div className="game-screen">
          <ProtectionResult onNext={() => handleShowQuote(5)} />
        </div>
      )}
      {gameStep === 6 && (
        <div className="game-screen">
          <ScentResult1 onNext={() => handleShowQuote(6)} />
        </div>
      )}
      {gameStep === 7 && (
        <div className="game-screen">
          <ScentResult2 onNext={() => handleShowQuote(7)} />
        </div>
      )}
      {gameStep === 8 && (
        <div className="game-screen">
          <GentleResult onNext={() => handleShowQuote(8)} />
        </div>
      )}
      {gameStep === 9 && (
        <div className="game-screen">
          <EfficiencyQuote onNext={handlePlayAgain} />
        </div>
      )}
      {gameStep === 10 && (
        <div className="game-screen">
          <ProtectionQuote onNext={handlePlayAgain} />
        </div>
      )}
      {gameStep === 11 && (
        <div className="game-screen">
          <ScentQuote1 onNext={handlePlayAgain} />
        </div>
      )}
      {gameStep === 12 && (
        <div className="game-screen">
          <ScentQuote2 onNext={handlePlayAgain} />
        </div>
      )}
      {gameStep === 13 && (
        <div className="game-screen">
          <GentleQuote onNext={handlePlayAgain} />
        </div>
      )}
      {gameStep === 14 && (
        <div className="game-screen">
          <Process />
        </div>
      )}
      
      {/* Loading overlay */}
      {isLoading && (
        <div className="loading-transition">
          <div className="loading-spinner"></div>
        </div>
      )}
    </LazyBackgroundImage>
  );
}

export default App;
