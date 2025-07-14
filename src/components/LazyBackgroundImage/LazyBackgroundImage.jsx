import React, { useState, useEffect } from 'react';
import './LazyBackgroundImage.css';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const LazyBackgroundImage = ({ 
  src, 
  children, 
  className = '', 
  style = {},
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!src) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setIsLoaded(false);

    const img = new Image();
    img.onload = () => {
      setIsLoaded(true);
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoaded(true); // Still show content even if image fails
      setIsLoading(false);
    };
    img.src = src;

    // Handle cached images
    if (img.complete) {
      setIsLoaded(true);
      setIsLoading(false);
    }
  }, [src]);

  const combinedStyle = {
    backgroundImage: isLoaded ? `url(${src})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    ...style
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div
      className={`lazy-background ${className}`}
      style={combinedStyle}
      {...props}
    >
      {children}
    </div>
  );
};

export default LazyBackgroundImage;