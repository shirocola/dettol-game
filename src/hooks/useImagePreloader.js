import { useEffect } from 'react';

const useImagePreloader = (gameStep) => {
  useEffect(() => {
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };

    const getOptimalSrc = (baseSrc) => {
      const fileName = baseSrc.replace(/^\//, '').replace(/\.[^/.]+$/, '');
      const screenWidth = window.innerWidth;
      let quality = '';
      
      if (screenWidth <= 430) {
        quality = '-mobile';
      } else if (screenWidth <= 768) {
        quality = '-tablet';
      }
      
      return `/optimized/${fileName}${quality}.webp`;
    };

    // Preload next screen images based on current step
    const preloadNextImages = () => {
      switch (gameStep) {
        case 0: // Start screen - preload age selection
          preloadImage(getOptimalSrc('/age-selection.png'));
          break;
        case 1: // Age selection - preload quiz backgrounds
          preloadImage(getOptimalSrc('/BG-Cream.png'));
          break;
        case 14: // Process screen - preload result images
          preloadImage(getOptimalSrc('/honey-result.png'));
          preloadImage(getOptimalSrc('/sakura-result.png'));
          preloadImage(getOptimalSrc('/apple-result.png'));
          preloadImage(getOptimalSrc('/lavender-result.png'));
          preloadImage(getOptimalSrc('/peach-result.png'));
          break;
        default:
          break;
      }
    };

    // Delay preloading to not interfere with current screen loading
    const timeoutId = setTimeout(preloadNextImages, 1000);
    
    return () => clearTimeout(timeoutId);
  }, [gameStep]);
};

export default useImagePreloader;