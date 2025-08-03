import { useState, useEffect } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  style = {},
  fallbackSrc = null,
  ...props 
}) => {
  const [currentSrc, setCurrentSrc] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  // Get optimal image source based on screen size
  const getOptimalImageSrc = (baseSrc) => {
    if (!baseSrc) return '';
    
    const fileName = baseSrc.replace(/^\//, '').replace(/\.[^/.]+$/, '');
    const screenWidth = window.innerWidth;
    let quality = '';
    
    if (screenWidth <= 430) {
      quality = '-mobile';
    } else if (screenWidth <= 768) {
      quality = '-tablet';
    }
    
    const webpSrc = `/optimized/${fileName}${quality}.webp`;
    
    return {
      webp: webpSrc,
      fallback: baseSrc
    };
  };

  const preloadImage = async (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = () => reject(new Error(`Failed to load ${src}`));
      img.src = src;
    });
  };

  useEffect(() => {
    if (!src) {
      setCurrentSrc('');
      setIsLoaded(true);
      return;
    }

    const loadImage = async () => {
      try {
        const { webp, fallback } = getOptimalImageSrc(src);
        
        try {
          await preloadImage(webp);
          setCurrentSrc(webp);
          console.log(`✓ Loaded optimized: ${webp}`);
        } catch (webpError) {
          console.log(`WebP failed, using fallback: ${fallback}`);
          try {
            await preloadImage(fallback);
            setCurrentSrc(fallback);
          } catch (fallbackError) {
            if (fallbackSrc) {
              await preloadImage(fallbackSrc);
              setCurrentSrc(fallbackSrc);
            } else {
              throw fallbackError;
            }
          }
        }
        
        setIsLoaded(true);
      } catch (error) {
        console.error('Failed to load image:', error);
        setCurrentSrc('');
        setIsLoaded(true);
      }
    };

    loadImage();
  }, [src, fallbackSrc]);

  if (!isLoaded) {
    return (
      <div 
        className={`optimized-image-loading ${className}`}
        style={{ 
          backgroundColor: '#f0f0f0', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          minHeight: '100px',
          ...style 
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={`optimized-image ${className}`}
      style={style}
      onLoad={() => setIsLoaded(true)}
      {...props}
    />
  );
};

export default OptimizedImage;