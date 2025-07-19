import React, { useState, useEffect } from 'react';
import { personalInfo } from '../../data/portfolioData';
import SocialIcons from '../common/SocialIcons';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = personalInfo.name;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full animate-pulse-slow"></div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-6">
          {/* Typing animation for name */}
          <div className="h-20 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white min-h-[1.2em]">
              {displayText}
              <span className="animate-pulse">|</span>
            </h1>
          </div>
          
          {/* Slide in from top */}
          <div className="scroll-hidden-down" data-scroll="slide-down">
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
              {personalInfo.title}
            </h2>
          </div>
          
          {/* Fade up animation */}
          <div className="scroll-hidden" data-scroll="fade-up">
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {personalInfo.objective}
            </p>
          </div>
          
          {/* Buttons with staggered animation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <div className="scroll-hidden-left" data-scroll="fade-left">
              <button
                onClick={scrollToAbout}
                className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                View My Work
              </button>
            </div>
            <div className="scroll-hidden-right" data-scroll="fade-right">
              <a
                href="https://drive.google.com/uc?export=download&id=1K975JeLDGraRckma8iH5bu6KBuQd0C_U"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-gray-900 dark:border-white text-gray-900 dark:text-white font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-block"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Social icons with bounce animation */}
          <div className="mt-8 scroll-hidden" data-scroll="fade-up">
            <div className="animate-bounce-gentle">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;