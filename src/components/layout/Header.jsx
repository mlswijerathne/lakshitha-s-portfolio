import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { NAVIGATION_ITEMS } from '../../utils/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    let ticking = false;
    let scrollTimeout = null;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use throttled scroll for mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    const throttledHandleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(handleScroll, isMobile ? 32 : 16);
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', isMobile ? throttledHandleScroll : handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', isMobile ? throttledHandleScroll : handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-gray-700/50' 
          : 'bg-transparent'
      }`}
      style={{
        willChange: 'auto',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
              Lakshitha
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-1.5 py-1.5">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-4 py-1.5 text-sm font-medium transition-all duration-200 rounded-full hover:bg-white dark:hover:bg-gray-700"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'dark' ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6 transform rotate-180 transition-transform duration-300" />
              ) : (
                <Bars3Icon className="w-6 h-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-64 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="space-y-1">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 text-sm font-medium rounded-lg"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
