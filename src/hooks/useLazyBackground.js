import { useState, useEffect, useRef } from 'react';

export const useLazyBackground = (imageSrc, options = {}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Start with loading=true
  const [error, setError] = useState(null);
  const elementRef = useRef(null);

  const { 
    threshold = 0.1, 
    rootMargin = '50px',
    placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjZjBmMGYwIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjY2NjIj5Mb2FkaW5nLi4uPC90ZXh0Pgo8L3N2Zz4='
  } = options;

  useEffect(() => {
    if (!imageSrc) return;
    
    console.log('useLazyBackground: Loading image', imageSrc);
    
    // Reset states
    setIsLoaded(false);
    setIsLoading(true);
    setError(null);
    
    // Create and load image
    const img = new Image();
    
    img.onload = () => {
      console.log('useLazyBackground: Image loaded successfully');
      setIsLoaded(true);
      setIsLoading(false);
    };
    
    img.onerror = () => {
      console.log('useLazyBackground: Image load failed');
      setError('Failed to load image');
      setIsLoading(false);
    };
    
    // Start loading
    img.src = imageSrc;
    
    // Handle already cached images
    if (img.complete) {
      console.log('useLazyBackground: Image was already cached');
      setIsLoaded(true);
      setIsLoading(false);
    }
    
  }, [imageSrc]);

  const backgroundStyle = {
    backgroundImage: isLoaded ? `url(${imageSrc})` : `url(${placeholder})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transition: 'background-image 0.3s ease-in-out'
  };

  return {
    ref: elementRef,
    style: backgroundStyle,
    isLoaded,
    isLoading,
    error
  };
};