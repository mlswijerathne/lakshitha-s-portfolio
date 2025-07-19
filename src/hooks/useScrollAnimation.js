import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-scroll]');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          const animationType = element.getAttribute('data-scroll');
          
          // Remove initial hidden classes
          element.classList.remove('scroll-hidden', 'scroll-hidden-left', 'scroll-hidden-right', 'scroll-hidden-down');
          
          // Add appropriate animation class
          switch (animationType) {
            case 'fade-up':
              element.classList.add('animate-fade-in-up');
              break;
            case 'fade-left':
              element.classList.add('animate-fade-in-left');
              break;
            case 'fade-right':
              element.classList.add('animate-fade-in-right');
              break;
            case 'slide-down':
              element.classList.add('animate-slide-in-down');
              break;
            default:
              element.classList.add('animate-fade-in-up');
          }
        }
      });
    };

    // Initial check for elements already in view
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

export const scrollToSection = (sectionId) => {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};
