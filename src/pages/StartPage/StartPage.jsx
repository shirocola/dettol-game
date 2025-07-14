import './StartPage.css';
import DettolCircle from '../../components/DettolCircle/DettolCircle';
import Button from '../../components/Button/Button';
import LazyBackgroundImage from '../../components/LazyBackgroundImage/LazyBackgroundImage';

const StartPage = ({ onStart }) => {
  return (
    <LazyBackgroundImage 
      src="/BG-Cream.png" 
      className="start-page"
    >
      <DettolCircle />
      <div className="start-page-text">
        <h1>MATCH YOUR <br /> LOVE STORY</h1>
      </div>
      <Button text="START!" onClick={onStart} className="smooth-button" />
    </LazyBackgroundImage>
  );
};

export default StartPage;