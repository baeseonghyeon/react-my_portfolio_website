import { useState, useLayoutEffect } from 'react';

// Screen Size Get
const useMediaQuery = () => {
  const [screenSize, setScreenSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateScreenSize() {
      setScreenSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateScreenSize);
    updateScreenSize();
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return screenSize;
};

export default useMediaQuery;
