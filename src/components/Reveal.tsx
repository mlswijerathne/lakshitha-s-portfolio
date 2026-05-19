import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { DURATION, EASE } from '../lib/motion';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  /** When true, animate on mount instead of on viewport enter.
   *  Use for content that is already visible on initial render (hero). */
  immediate?: boolean;
}

const viewportConfig = { once: true, margin: '-40px' } as const;

/* Single-line / single-block mask reveal. Wrap headings, eyebrows, anything
   you want to slide up from behind a hidden edge. */
export function Reveal({
  children,
  delay = 0,
  duration = DURATION.reveal,
  className = '',
  immediate = false,
}: RevealProps) {
  const animProps = immediate
    ? { animate: { y: 0 } }
    : { whileInView: { y: 0 }, viewport: viewportConfig };

  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{ y: '110%' }}
        transition={{ duration, ease: EASE, delay }}
        {...animProps}
      >
        {children}
      </motion.span>
    </span>
  );
}

/* Image / element mask reveal — clip-path animates from bottom to fully visible. */
export function ImageReveal({
  children,
  delay = 0,
  duration = DURATION.image,
  className = '',
  immediate = false,
}: RevealProps) {
  const animProps = immediate
    ? { animate: { clipPath: 'inset(0% 0% 0% 0%)' } }
    : {
        whileInView: { clipPath: 'inset(0% 0% 0% 0%)' },
        viewport: viewportConfig,
      };

  return (
    <motion.div
      className={className}
      initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
      transition={{ duration, ease: EASE, delay }}
      {...animProps}
    >
      {children}
    </motion.div>
  );
}
