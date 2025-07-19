import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import SocialIcons from '../common/SocialIcons';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
            {personalInfo.name}
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
            {personalInfo.title}
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.objective}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              View My Work
            </button>
            <a
              href="https://drive.google.com/uc?export=download&id=1K975JeLDGraRckma8iH5bu6KBuQd0C_U"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-gray-900 dark:border-white text-gray-900 dark:text-white font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;