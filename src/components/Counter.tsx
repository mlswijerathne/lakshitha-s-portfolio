import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'motion/react';
import { EASE } from '../lib/motion';

interface CounterProps {
  to: number;
  duration?: number;
  className?: string;
}

/* Animated number that counts up from 0 → `to` when it enters the viewport.
   Used for hero/projects stats. Fires once. */
export function Counter({ to, duration = 1.6, className = '' }: CounterProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
