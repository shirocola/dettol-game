import './AgeSelection.css';
import Button from '../../components/Button/Button';
import LazyBackgroundImage from '../../components/LazyBackgroundImage/LazyBackgroundImage';

const AgeSelection = ({ onNext }) => {

  const handleAgeSelection = (ageRange) => {
    console.log(`Selected Age: ${ageRange}`);
    if (onNext) onNext(); // Go to next page
  };

  return (
    <LazyBackgroundImage 
      src="/BG-Cream.png" 
      className="age-selection-container"
      loadingComponent={<div className="loading-spinner"></div>}
    >
      <div className="age-selection-card">
        <div className="logo-container">
          <div className="logo">
            <div className="logo-text">Dettol</div>
          </div>
        </div>

        <div className="button-group">
          <Button text="Under 18" onClick={() => handleAgeSelection('under 18')} className="smooth-button" />
          <Button text="18 - 24 Y" onClick={() => handleAgeSelection('18-24')} className="smooth-button" />
          <Button text="25 - 34 Y" onClick={() => handleAgeSelection('25-34')} className="smooth-button" />
          <Button text="35 - 44 Y" onClick={() => handleAgeSelection('35-44')} className="smooth-button" />
          <Button text="45 Y and Over" onClick={() => handleAgeSelection('45 and over')} className="smooth-button" />
        </div>
      </div>
    </LazyBackgroundImage>
  );
};

export default AgeSelection;