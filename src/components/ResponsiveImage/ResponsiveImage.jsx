import { useState, useEffect } from 'react';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const ResponsiveImage = ({ 
  src, 
  children, 
  className = '', 
  style = {},
  fallbackSrc = null,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');

  // Detect device type and screen size
  const getOptimalImageSrc = (baseSrc) => {
    if (!baseSrc) return '';
    
    // Remove file extension and path
    const fileName = baseSrc.replace(/^\//, '').replace(/\.[^/.]+$/, '');
    
    // Check if we have optimized WebP versions
    const screenWidth = window.innerWidth;
    let quality = '';
    
    if (screenWidth <= 430) {
      quality = '-mobile';
    } else if (screenWidth <= 768) {
      quality = '-tablet';
    }
    
    // Try WebP optimized version first
    const webpSrc = `/optimized/${fileName}${quality}.webp`;
    
    return {
      webp: webpSrc,
      fallback: baseSrc // Original image as fallback
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
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setIsLoaded(false);

    const loadImage = async () => {
      try {
        const { webp, fallback } = getOptimalImageSrc(src);
        
        // Try to load WebP version first
        try {
          await preloadImage(webp);
          setCurrentSrc(webp);
          console.log(`✓ Loaded WebP: ${webp}`);
        } catch (webpError) {
          // Fallback to original image
          console.log(`WebP failed, using fallback: ${fallback}`);
          try {
            await preloadImage(fallback);
            setCurrentSrc(fallback);
          } catch (fallbackError) {
            // Use fallbackSrc if provided
            if (fallbackSrc) {
              await preloadImage(fallbackSrc);
              setCurrentSrc(fallbackSrc);
            } else {
              throw fallbackError;
            }
          }
        }
        
        setIsLoaded(true);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load image:', error);
        setIsLoaded(true); // Still show content even if image fails
        setIsLoading(false);
        setCurrentSrc(''); // No background image
      }
    };

    loadImage();
  }, [src, fallbackSrc]);

  // Handle window resize to potentially load different image size
  useEffect(() => {
    const handleResize = () => {
      if (src && isLoaded) {
        const { webp } = getOptimalImageSrc(src);
        if (webp !== currentSrc && currentSrc.includes('optimized')) {
          // Only reload if we're switching between optimized versions
          setIsLoading(true);
          preloadImage(webp)
            .then(() => {
              setCurrentSrc(webp);
              setIsLoading(false);
            })
            .catch(() => {
              setIsLoading(false);
            });
        }
      }
    };

    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 300);
    };

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [src, currentSrc, isLoaded]);

  const combinedStyle = {
    ...style,
    backgroundImage: isLoaded && currentSrc ? `url(${currentSrc})` : 'none',
    backgroundSize: '100% 100%', // Stretch to exact screen dimensions
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll'
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div
      className={`responsive-image ${className}`}
      style={combinedStyle}
      {...props}
    >
      {children}
    </div>
  );
};

export default ResponsiveImage;