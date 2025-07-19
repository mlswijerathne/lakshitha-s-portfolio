import { useEffect } from 'react';
import { isMobileDevice, shouldUseReducedAnimations } from '../utils/helpers';

export const useScrollAnimation = () => {
  useEffect(() => {
    // Skip complex animations for low-power or problematic devices
    if (shouldUseReducedAnimations()) {
      // Just make elements visible without animations
      const elements = document.querySelectorAll('[data-scroll]');
      elements.forEach((element) => {
        element.classList.remove('scroll-hidden', 'scroll-hidden-left', 'scroll-hidden-right', 'scroll-hidden-down');
        element.style.opacity = '1';
        element.style.transform = 'none';
      });
      return;
    }

    let ticking = false;
    const animatedElements = new Set(); // Track already animated elements
    
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
            const elementVisible = isMobileDevice() ? 100 : 150; // Smaller threshold for mobile
            
            if (elementTop < window.innerHeight - elementVisible) {
              const animationType = element.getAttribute('data-scroll');
              
              // Mark element as animated
              animatedElements.add(element);
              
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
          ticking = false;
        });
        ticking = true;
      }
    };

    // Throttle function for better performance
    let scrollTimeout;
    const throttleDelay = isMobileDevice() ? 32 : 16; // Slower throttle on mobile
    const throttledHandleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(handleScroll, throttleDelay);
    };

    // Initial check for elements already in view
    handleScroll();
    
    // Use passive listener for better performance
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
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
