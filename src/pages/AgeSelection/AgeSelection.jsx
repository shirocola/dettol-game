import { useState } from 'react';
import './AgeSelection.css';
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage';

const AgeSelection = ({ onNext }) => {
  const [selectedAge, setSelectedAge] = useState(null);

  const handleAgeSelection = (ageRange) => {
    console.log(`Selected Age: ${ageRange}`);
    setSelectedAge(ageRange);
    if (onNext) onNext(); // Go to next page
  };

  return (
    <div className="age-selection-bg-container">
      {/* Background image */}
      <OptimizedImage src="/age-selection.png" alt="Age Selection" className="age-selection-bg" />
      {/* Overlay buttons */}
      <button 
        className={`age-btn btn1 ${selectedAge === 'under 18' ? 'selected' : ''}`} 
        onClick={() => handleAgeSelection('under 18')} 
        aria-label="อายุต่ำกว่า 18" 
      />
      <button 
        className={`age-btn btn2 ${selectedAge === '18-24' ? 'selected' : ''}`} 
        onClick={() => handleAgeSelection('18-24')} 
        aria-label="18 - 24 ปี" 
      />
      <button 
        className={`age-btn btn3 ${selectedAge === '25-34' ? 'selected' : ''}`} 
        onClick={() => handleAgeSelection('25-34')} 
        aria-label="25 - 34 ปี" 
      />
      <button 
        className={`age-btn btn4 ${selectedAge === '35-44' ? 'selected' : ''}`} 
        onClick={() => handleAgeSelection('35-44')} 
        aria-label="35 - 44 ปี" 
      />
      <button 
        className={`age-btn btn5 ${selectedAge === '45 and over' ? 'selected' : ''}`} 
        onClick={() => handleAgeSelection('45 and over')} 
        aria-label="45 ปีขึ้นไป" 
      />
    </div>
  );
};

export default AgeSelection;