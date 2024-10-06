'use client';

import { useEffect } from 'react';

const AdInitializer = () => {
  useEffect(() => {
    // Function to dynamically load a script
    const loadScript = (src: string, onLoad?: () => void) => {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.type = 'text/javascript';
        script.async = true;

        script.onload = () => {
          if (onLoad) onLoad();
          resolve();
        };

        script.onerror = () => {
          console.error(`Failed to load script: ${src}`);
          reject(new Error(`Failed to load script: ${src}`));
        };

        document.body.appendChild(script);
      });
    };

    // Function to initialize aclib after the script is loaded
    const initializeAclib = () => {
      if (window.aclib && typeof window.aclib.runAutoTag === 'function') {
        window.aclib.runAutoTag({
          zoneId: 'jln41lltsy',
        });
        console.log('aclib.runAutoTag has been called');
      } else {
        console.error('aclib is not available on window');
      }
    };

    // Load the aclib script and then initialize it
    loadScript('https://acscdn.com/script/aclib.js', initializeAclib)
      .then(() => {
        console.log('aclib.js loaded successfully');
      })
      .catch((error) => {
        console.error('Error loading aclib.js:', error);
      });

    // Optional: Clean up if needed when the component unmounts
    return () => {
      // If you need to remove the script or perform any cleanup, do it here
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AdInitializer;
