import { useState } from 'react';
import './App.css';
import './pages/AgeSelection/AgeSelection.css'; 
import AgeSelection from './pages/AgeSelection/AgeSelection';
import Button from './components/Button/Button'; 
import DettolQuizComplete from './components/Quiz/Quiz';
import EfficiencyResult from './pages/Quiz/EfficiencyResult';
import ProtectionResult from './pages/Quiz/ProtectionResult';
import ScentResult1 from './pages/Quiz/ScentResult1';
import ScentResult2 from './pages/Quiz/ScentResult2';
import LavenderResult from './pages/Quiz/LavenderResult';
import GentleResult from './pages/Quiz/GentleResult';
import EfficiencyQuote from './pages/Quiz/EfficiencyQuote';
import ProtectionQuote from './pages/Quiz/ProtectionQuote';
import ScentQuote1 from './pages/Quiz/ScentQuote1';
import ScentQuote2 from './pages/Quiz/ScentQuote2';
import LavenderQuote from './pages/Quiz/LavenderQuote';
import GentleQuote from './pages/Quiz/GentleQuote';
import Process from './pages/Process/Process';
import DownloadPage from './pages/Download/DownloadPage';
import ResponsiveImage from './components/ResponsiveImage/ResponsiveImage';
import useImagePreloader from './hooks/useImagePreloader';
import { useEffect } from 'react';

function App() {
  const [gameStep, setGameStep] = useState(0); // 0: Start Screen, 1: Age Selection, 2: Start Page, 3: Quiz, 4-9: Results, 10-15: Quotes, 16: Process, 17-22: Download Pages
  const [currentResultType, setCurrentResultType] = useState('');

  // Preload next screen images for faster transitions
  useImagePreloader(gameStep);

  // Cleanup audio on component unmount
  useEffect(() => {
    return () => {
      if (window.dettolAudio) {
        window.dettolAudio.pause();
        window.dettolAudio.currentTime = 0;
        if (window.dettolAudioEndedHandler) {
          window.dettolAudio.removeEventListener('ended', window.dettolAudioEndedHandler);
        }
        window.dettolAudio = null;
      }
      window.dettolGameStarting = false;
    };
  }, []);

  // Fullscreen functionality
  const enterFullscreen = async () => {
    try {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        await elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        await elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        await elem.msRequestFullscreen();
      }
      
      // Lock orientation to portrait on mobile devices
      if (screen.orientation && screen.orientation.lock) {
        try {
          await screen.orientation.lock('portrait');
        } catch (err) {
          console.log('Orientation lock not supported:', err);
        }
      }
    } catch (err) {
      console.log('Fullscreen request failed:', err);
    }
  };

  const smoothTransition = (nextStep, delay = 300) => {
    setTimeout(() => {
      setGameStep(nextStep);
    }, delay);
  };

  const handleStartGame = async () => {
    // Prevent multiple calls
    if (window.dettolGameStarting) return;
    window.dettolGameStarting = true;

    // Request fullscreen
    await enterFullscreen();

    // Stop previous audio if it exists
    if (window.dettolAudio) {
      window.dettolAudio.pause();
      window.dettolAudio.currentTime = 0;
      window.dettolAudio.removeEventListener('ended', window.dettolAudioEndedHandler);
      window.dettolAudio = null;
    }

    // Play background music (no loop, single play)
    try {
      const audio = new Audio('/music/Dettol BGM.mp3');
      audio.volume = 0.5;
      audio.loop = false; // Explicitly prevent looping
      audio.preload = 'auto';
      
      // Add ended event listener to clean up
      const endedHandler = () => {
        window.dettolAudio = null;
        audio.removeEventListener('ended', endedHandler);
      };
      audio.addEventListener('ended', endedHandler);
      window.dettolAudioEndedHandler = endedHandler;
      
      await audio.play();
      window.dettolAudio = audio;
    } catch (error) {
      console.error('Audio error:', error);
      console.log('Audio file path:', '/music/Dettol BGM.mp3');
    }

    // Reset the flag after a delay
    setTimeout(() => {
      window.dettolGameStarting = false;
    }, 1000);

    smoothTransition(1); // Navigate to Age Selection
  };

  const handleNext = () => {
    smoothTransition(3); // Navigate to Quiz Complete
  };


  const handleQuizComplete = (resultRoute) => {
    setGameStep(16);
    
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
        case 'lavender':
          setGameStep(8);
          break;
        case 'gentle':
          setGameStep(9);
          break;
        default:
          setGameStep(4);
      }
    }, 3000);
  };

  const handlePlayAgain = () => {
    smoothTransition(0);
  };

  const handleShowQuote = (resultStep) => {
    // Navigate to corresponding quote page
    switch (resultStep) {
      case 4: // EfficiencyResult
        smoothTransition(10);
        break;
      case 5: // ProtectionResult
        smoothTransition(11);
        break;
      case 6: // ScentResult1
        smoothTransition(12);
        break;
      case 7: // ScentResult2
        smoothTransition(13);
        break;
      case 8: // LavenderResult
        smoothTransition(14);
        break;
      case 9: // GentleResult
        smoothTransition(15);
        break;
      default:
        smoothTransition(10);
    }
  };

  const handleGoToDownload = (resultStep) => {
    // Set the result type based on the step
    let resultType = '';
    switch (resultStep) {
      case 4: // EfficiencyResult
      case 10: // EfficiencyQuote
        resultType = 'lavender';
        setCurrentResultType(resultType);
        smoothTransition(17);
        break;
      case 5: // ProtectionResult
      case 11: // ProtectionQuote
        resultType = 'honey';
        setCurrentResultType(resultType);
        smoothTransition(18);
        break;
      case 6: // ScentResult1
      case 12: // ScentQuote1
        resultType = 'sakura';
        setCurrentResultType(resultType);
        smoothTransition(19);
        break;
      case 7: // ScentResult2
      case 13: // ScentQuote2
        resultType = 'peach';
        setCurrentResultType(resultType);
        smoothTransition(20);
        break;
      case 8: // LavenderResult
      case 14: // LavenderQuote
        resultType = 'lavender';
        setCurrentResultType(resultType);
        smoothTransition(21);
        break;
      case 9: // GentleResult
      case 15: // GentleQuote
        resultType = 'apple';
        setCurrentResultType(resultType);
        smoothTransition(22);
        break;
      default:
        resultType = 'lavender';
        setCurrentResultType(resultType);
        smoothTransition(17);
    }
  };

  return (
    <ResponsiveImage 
      src="/BG-Cream.png" 
      className="app-container"
    >
      {gameStep === 0 && (
        <ResponsiveImage 
          src="/start-game.png" 
          className="start-screen game-screen"
        >
          <div className="start-screen-footer">
            <Button text="เล่น" onClick={handleStartGame} className="age-button smooth-button" />
          </div>
        </ResponsiveImage>
      )}
      {gameStep === 1 && (
        <div className="game-screen">
          <AgeSelection onNext={handleNext} />
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
          <LavenderResult onNext={() => handleShowQuote(8)} />
        </div>
      )}
      {gameStep === 9 && (
        <div className="game-screen">
          <GentleResult onNext={() => handleShowQuote(9)} />
        </div>
      )}
      {gameStep === 10 && (
        <div className="game-screen">
          <EfficiencyQuote onNext={() => handleGoToDownload(10)} />
        </div>
      )}
      {gameStep === 11 && (
        <div className="game-screen">
          <ProtectionQuote onNext={() => handleGoToDownload(11)} />
        </div>
      )}
      {gameStep === 12 && (
        <div className="game-screen">
          <ScentQuote1 onNext={() => handleGoToDownload(12)} />
        </div>
      )}
      {gameStep === 13 && (
        <div className="game-screen">
          <ScentQuote2 onNext={() => handleGoToDownload(13)} />
        </div>
      )}
      {gameStep === 14 && (
        <div className="game-screen">
          <LavenderQuote onNext={() => handleGoToDownload(14)} />
        </div>
      )}
      {gameStep === 15 && (
        <div className="game-screen">
          <GentleQuote onNext={() => handleGoToDownload(15)} />
        </div>
      )}
      {gameStep === 16 && (
        <div className="game-screen">
          <Process />
        </div>
      )}
      {gameStep === 17 && (
        <div className="game-screen">
          <DownloadPage resultType={currentResultType} onBack={handlePlayAgain} />
        </div>
      )}
      {gameStep === 18 && (
        <div className="game-screen">
          <DownloadPage resultType={currentResultType} onBack={handlePlayAgain} />
        </div>
      )}
      {gameStep === 19 && (
        <div className="game-screen">
          <DownloadPage resultType={currentResultType} onBack={handlePlayAgain} />
        </div>
      )}
      {gameStep === 20 && (
        <div className="game-screen">
          <DownloadPage resultType={currentResultType} onBack={handlePlayAgain} />
        </div>
      )}
      {gameStep === 21 && (
        <div className="game-screen">
          <DownloadPage resultType={currentResultType} onBack={handlePlayAgain} />
        </div>
      )}
      {gameStep === 22 && (
        <div className="game-screen">
          <DownloadPage resultType={currentResultType} onBack={handlePlayAgain} />
        </div>
      )}
      
    </ResponsiveImage>
  );
}

export default App;
