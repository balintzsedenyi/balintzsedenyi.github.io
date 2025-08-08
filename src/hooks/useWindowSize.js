import { useCallback, useState, useEffect, useMemo } from 'react';

function getSize() {
    return {
        width: window.innerWidth,
        height: window.innerHeight,
    };
};
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getSize);
  const handleResize = useCallback(() => setWindowSize(getSize()), [setWindowSize]);

  useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
 
export default useWindowSize;
