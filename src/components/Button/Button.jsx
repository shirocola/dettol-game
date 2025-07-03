import React from 'react';
import './Button.css';

const Button = ({ text, onClick, className, disabled = false }) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button 
      className={`button ${className} ${disabled ? 'disabled' : ''}`} 
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;