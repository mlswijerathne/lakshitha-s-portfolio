import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { DURATION, EASE } from '../lib/motion';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

/* Single-line / single-block mask reveal. Wrap headings, eyebrows, anything
   you want to slide up from behind a hidden edge as it enters the viewport. */
export function Reveal({
  children,
  delay = 0,
  duration = DURATION.reveal,
  className = '',
}: RevealProps) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{ y: '110%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/* Image / element mask reveal — clip-path animates from bottom to fully visible.
   Premium "shutter" effect for hero and editorial imagery. */
export function ImageReveal({
  children,
  delay = 0,
  duration = DURATION.image,
  className = '',
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
