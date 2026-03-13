import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Portfolio from './components/sections/Portfolio';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  useScrollAnimation();

  useEffect(() => {
    document.title = 'Lakshitha Wijerathne - Portfolio';
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Portfolio />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
