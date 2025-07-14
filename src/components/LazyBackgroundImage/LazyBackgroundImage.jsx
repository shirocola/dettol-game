import React from 'react';
import { useLazyBackground } from '../../hooks/useLazyBackground';
import './LazyBackgroundImage.css';

const LazyBackgroundImage = ({ 
  src, 
  children, 
  className = '', 
  style = {},
  loadingComponent = null,
  errorComponent = null,
  ...props 
}) => {
  const { ref, style: backgroundStyle, isLoaded, isLoading, error } = useLazyBackground(src);

  const combinedStyle = {
    ...backgroundStyle,
    ...style
  };

  return (
    <div
      ref={ref}
      className={`lazy-background ${className} ${isLoading ? 'loading' : ''} ${isLoaded ? 'loaded' : ''}`}
      style={combinedStyle}
      {...props}
    >
      {isLoading && loadingComponent && (
        <div className="lazy-background-loading">
          {loadingComponent}
        </div>
      )}
      
      {error && errorComponent && (
        <div className="lazy-background-error">
          {errorComponent}
        </div>
      )}
      
      {children}
    </div>
  );
};

export default LazyBackgroundImage;