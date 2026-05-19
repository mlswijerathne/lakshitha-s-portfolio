import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasPointer, setHasPointer] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    setHasPointer(window.matchMedia('(pointer: fine)').matches);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    },
    [cursorX, cursorY, isVisible]
  );

  const handleMouseEnter = useCallback(() => setIsExpanded(true), []);
  const handleMouseLeave = useCallback(() => setIsExpanded(false), []);

  useEffect(() => {
    if (!hasPointer) return;

    window.addEventListener('mousemove', handleMouseMove);

    const interactiveSelector = 'a, button, [data-cursor="expand"], input, textarea, select';

    const addListeners = () => {
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    addListeners();
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      observer.disconnect();
    };
  }, [hasPointer, handleMouseMove, handleMouseEnter, handleMouseLeave]);

  if (!hasPointer) return null;

  return (
    <>
      {/* --- Dot --- */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full"
        style={{
          width: 8,
          height: 8,
          backgroundColor: 'var(--cursor-color)',
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* --- Ring --- */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9997] rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isExpanded ? 80 : 40,
          height: isExpanded ? 80 : 40,
          borderWidth: isExpanded ? 1 : 1.5,
          opacity: isExpanded ? 0.4 : 0.5,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            border: '1.5px solid var(--cursor-color)',
          }}
        />
      </motion.div>
    </>
  );
}
