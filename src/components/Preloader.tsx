import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

const letters = 'LAKSHITHA'.split('');

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ backgroundColor: 'var(--bg-primary)' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* --- Monogram --- */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex overflow-hidden">
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  className="font-display text-5xl font-bold tracking-tight md:text-7xl"
                  style={{ color: 'var(--text-primary)' }}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + i * 0.06,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* --- Line --- */}
          <motion.div
            className="h-px w-48 md:w-72"
            style={{ backgroundColor: 'var(--text-primary)' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1,
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          />

          {/* --- Subtitle --- */}
          <motion.p
            className="mt-4 text-xs font-light uppercase tracking-[0.3em]"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            Portfolio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
