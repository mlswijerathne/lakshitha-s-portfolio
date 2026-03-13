import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import SocialIcons from '../common/SocialIcons';
import Lakshitha from '../../assets/Lakshitha.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-white dark:bg-slate-900">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="watermark-text text-[12rem] md:text-[20rem] lg:text-[28rem] leading-none whitespace-nowrap">Portfolio</span>
      </div>

      <div className="absolute top-20 left-10 w-40 h-40 sm:w-72 sm:h-72 bg-accent-200/20 dark:bg-accent-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 sm:w-96 sm:h-96 bg-accent-100/20 dark:bg-accent-500/5 rounded-full blur-3xl"></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-24 pt-24 sm:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-5 sm:space-y-6 order-1 lg:order-1 min-w-0">
<div className="scroll-hidden" data-scroll="fade-up">
              <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">Hello, I'm</p>
            </div>

            <div className="scroll-hidden" data-scroll="fade-up">
              <h1 className="hero-title font-bold text-gray-900 dark:text-white tracking-tight">
                {personalInfo.name.split(' ').map((word, i) => (
                  <span key={i}>
                    {i === 1 ? (
                      <span className="font-serif italic text-accent-600 dark:text-accent-400">{word}</span>
                    ) : word}
                    {i === 0 && <br />}
                  </span>
                ))}
              </h1>
            </div>

            <div className="scroll-hidden" data-scroll="fade-up">
              <h2 className="hero-subtitle text-gray-500 dark:text-gray-400 font-medium max-w-lg">{personalInfo.title}</h2>
            </div>

            <div className="scroll-hidden" data-scroll="fade-up">
              <p className="text-gray-400 dark:text-gray-500 leading-relaxed max-w-lg">
                Passionate about building intelligent systems, scalable backends, and bridging software engineering with AI.
              </p>
            </div>

            <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 pt-2 scroll-hidden" data-scroll="fade-up">
              <button onClick={scrollToContact} className="w-full xs:w-auto px-8 py-3.5 bg-accent-600 text-white font-medium rounded-full hover:bg-accent-700 transition-all duration-200 hover:shadow-lg hover:shadow-accent-200 dark:hover:shadow-accent-900/30 text-center">
                Let's Talk
              </button>
              <a href="https://drive.google.com/uc?export=download&id=1K975JeLDGraRckma8iH5bu6KBuQd0C_U" target="_blank" rel="noopener noreferrer" className="w-full xs:w-auto px-8 py-3.5 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-full hover:border-accent-300 dark:hover:border-accent-600 hover:text-accent-600 dark:hover:text-accent-400 transition-all duration-200 text-center">
                Download CV
              </a>
            </div>

            <div className="pt-4 scroll-hidden" data-scroll="fade-up">
              <SocialIcons />
            </div>
          </div>

          <div className="order-2 lg:order-2 flex justify-center lg:justify-end scroll-hidden py-6 sm:py-0" data-scroll="fade-up">
            <div className="relative p-4">
              <div className="absolute inset-0 bg-accent-100/50 dark:bg-accent-900/30 rounded-[2rem] -rotate-3"></div>
              <div className="absolute inset-0 border-2 border-accent-200/50 dark:border-accent-700/50 rounded-[2rem] rotate-3"></div>

              <div className="relative w-44 h-52 sm:w-72 sm:h-80 lg:w-96 lg:h-[26rem] rounded-2xl overflow-hidden shadow-2xl shadow-accent-200/30 dark:shadow-accent-900/20">
                <img src={Lakshitha} alt="Lakshitha Wijerathne - Associate Software Engineer and AI Developer" className="w-full h-full object-cover" style={{ objectPosition: 'center 30%' }} />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-accent-900/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
        <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-300 dark:bg-gray-600 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
