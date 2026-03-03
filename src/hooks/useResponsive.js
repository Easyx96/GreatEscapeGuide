import { useState, useEffect, useRef, useCallback } from 'react';

export const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const lastScrollY = useRef(0);
  const scrollThrottleRef = useRef(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 720);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHeaderVisible(currentScrollY < 50);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleBackToTopVisibility = () => {
      if (scrollThrottleRef.current) return;
      scrollThrottleRef.current = setTimeout(() => {
        setShowBackToTop(window.scrollY > 350);
        scrollThrottleRef.current = null;
      }, 100);
    };
    window.addEventListener('scroll', handleBackToTopVisibility, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleBackToTopVisibility);
      if (scrollThrottleRef.current) clearTimeout(scrollThrottleRef.current);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { isMobile, headerVisible, showBackToTop, scrollToTop };
};
