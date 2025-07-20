import { useEffect } from 'react';
import { isMobileDevice, shouldUseReducedAnimations } from '../utils/helpers';

export const useScrollAnimation = () => {
  useEffect(() => {
    // Skip complex animations for low-power or problematic devices
    if (shouldUseReducedAnimations()) {
      // Just make elements visible without animations
      const elements = document.querySelectorAll('[data-scroll]');
      elements.forEach((element) => {
        element.classList.remove(
          'scroll-hidden', 
          'scroll-hidden-left', 
          'scroll-hidden-right', 
          'scroll-hidden-down',
          'scroll-hidden-up',
          'scroll-hidden-scale'
        );
        element.style.opacity = '1';
        element.style.transform = 'none';
      });
      return;
    }

    let ticking = false;
    let scrollTimeout = null;
    const animatedElements = new Set(); // Track already animated elements
    const isMobile = isMobileDevice();
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const elements = document.querySelectorAll('[data-scroll]');
          elements.forEach((element) => {
            // Skip if element is already animated
            if (animatedElements.has(element)) {
              return;
            }
            
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = isMobile ? 80 : 150; // Smaller threshold for mobile
            
            if (elementTop < window.innerHeight - elementVisible) {
              const animationType = element.getAttribute('data-scroll');
              
              // Mark element as animated
              animatedElements.add(element);
              
              // Remove initial hidden classes
              element.classList.remove(
                'scroll-hidden', 
                'scroll-hidden-left', 
                'scroll-hidden-right', 
                'scroll-hidden-down',
                'scroll-hidden-up',
                'scroll-hidden-scale'
              );
              
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
                case 'slide-up':
                  element.classList.add('animate-slide-in-up');
                  break;
                case 'slide-left':
                  element.classList.add('animate-slide-in-left');
                  break;
                case 'slide-right':
                  element.classList.add('animate-slide-in-right');
                  break;
                case 'scale-bounce':
                  element.classList.add('animate-scale-in-bounce');
                  break;
                default:
                  element.classList.add('animate-fade-in-up');
              }
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    // More gentle throttling for mobile devices - allow some animation
    const throttleDelay = isMobile ? 40 : 16; // Less aggressive throttle on mobile
    
    const throttledHandleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(handleScroll, throttleDelay);
    };

    // Initial check for elements already in view
    handleScroll();
    
    // Use passive listener for better performance
    const scrollHandler = isMobile ? throttledHandleScroll : handleScroll;
    window.addEventListener('scroll', scrollHandler, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', scrollHandler);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
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
