import React, { useState, useEffect } from 'react';
import { personalInfo } from '../../data/portfolioData';
import SocialIcons from '../common/SocialIcons';
import { isMobileDevice, shouldUseReducedAnimations } from '../../utils/helpers';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = personalInfo.name;
  const isMobile = isMobileDevice();
  const useReducedAnimations = shouldUseReducedAnimations();

  useEffect(() => {
    // Skip typing animation on mobile for better performance
    if (isMobile || useReducedAnimations) {
      setDisplayText(fullText);
      return;
    }

    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText, isMobile, useReducedAnimations]);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      // Use instant scroll on mobile for better performance
      if (isMobile) {
        element.scrollIntoView({ behavior: 'auto' });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 relative overflow-hidden"
      style={{
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    >
      {/* Subtle background accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/[0.03] rounded-full blur-2xl hidden lg:block"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-slate-500/[0.03] rounded-full blur-2xl hidden lg:block"></div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-6">
          {/* Status badge */}
          <div className="scroll-hidden" data-scroll="fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-100 dark:border-blue-800/50">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Available for collaboration
            </span>
          </div>

          {/* Typing animation for name */}
          <div className="h-20 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white min-h-[1.2em] tracking-tight">
              {displayText}
              {!isMobile && !useReducedAnimations && <span className="animate-pulse text-blue-500">|</span>}
            </h1>
          </div>
          
          {/* Title */}
          <div className="scroll-hidden-down" data-scroll="slide-down">
            <h2 className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium">
              {personalInfo.title}
            </h2>
          </div>
          
          {/* Objective */}
          <div className="scroll-hidden" data-scroll="fade-up">
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {personalInfo.objective}
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <div className="scroll-hidden-left" data-scroll="fade-left">
              <button
                onClick={scrollToAbout}
                className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 hover:shadow-lg"
              >
                View My Work
              </button>
            </div>
            <div className="scroll-hidden-right" data-scroll="fade-right">
              <a
                href="https://drive.google.com/uc?export=download&id=1K975JeLDGraRckma8iH5bu6KBuQd0C_U"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 hover:shadow-lg inline-block"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Social icons */}
          <div className="mt-8 scroll-hidden" data-scroll="fade-up">
            <SocialIcons />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-300 dark:bg-gray-600 rounded-full mt-2 animate-bounce-gentle"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;