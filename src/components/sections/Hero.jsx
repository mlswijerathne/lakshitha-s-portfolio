import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import SocialIcons from '../common/SocialIcons';
import myselfPhoto from '../../assets/myself.PNG';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="h-screen flex items-center justify-center bg-white dark:bg-gray-900 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Column - Details */}
          <div className="space-y-4 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              {personalInfo.name}
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 font-medium">
              {personalInfo.title}
            </h2>
            
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl lg:max-w-none">
              {personalInfo.objective}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button
                onClick={scrollToAbout}
                className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors rounded-md"
              >
                View My Work
              </button>
              <a
                href="https://drive.google.com/uc?export=download&id=1K975JeLDGraRckma8iH5bu6KBuQd0C_U"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-gray-900 dark:border-white text-gray-900 dark:text-white font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors rounded-md"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <img
                src={myselfPhoto}
                alt={`${personalInfo.name} - Portfolio Photo`}
                className="w-72 h-72 md:w-[370px] md:h-[370px] lg:w-[420px] lg:h-[420px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;