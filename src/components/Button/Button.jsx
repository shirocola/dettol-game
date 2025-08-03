import React from 'react';
import './Button.css';

const Button = ({ text, onClick, className, disabled = false }) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button 
      className={`button ${className} ${disabled ? 'disabled' : ''}`} 
      onClick={handleClick}
      onTouchEnd={handleTouchEnd}
      disabled={disabled}
      style={{ touchAction: 'manipulation' }}
    >
      {text}
    </button>
  );
};

export default Button;