import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../../context/ThemeContext';
import { NAVIGATION_ITEMS } from '../../utils/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button onClick={() => scrollToSection('#home')} className="flex items-center gap-2 group">
            <span className="text-lg font-bold text-gray-900 dark:text-white tracking-tight font-serif italic">
              Lakshitha
            </span>
            <span className="w-2 h-2 rounded-full bg-accent-500 group-hover:scale-125 transition-transform"></span>
          </button>

          <nav className="hidden md:flex items-center gap-1 bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-2 py-1.5">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-4 py-1.5 text-sm font-medium transition-all duration-200 rounded-full hover:bg-white dark:hover:bg-gray-700"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
              className="hidden sm:inline-flex px-5 py-2 bg-accent-600 text-white text-sm font-medium rounded-full hover:bg-accent-700 transition-colors"
            >
              Hire Me
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            >
              {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
          <nav className="space-y-1 bg-gray-50 dark:bg-gray-800 rounded-2xl p-2">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-700 text-sm font-medium rounded-xl transition-all"
              >
                {item.name}
              </button>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
              className="block w-full text-center px-4 py-3 bg-accent-600 text-white text-sm font-medium rounded-xl hover:bg-accent-700 transition-colors mt-2"
            >
              Hire Me
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
