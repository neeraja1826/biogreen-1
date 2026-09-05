import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

type ToneProps = {
  /** color of the section the wave flows INTO (the section below) */
  to: 'ivory' | 'sagelight' | 'white' | 'botanical';
  className?: string;
};

const FILL: Record<ToneProps['to'], string> = {
  ivory: '#FCFCF8',
  sagelight: '#F4FAF3',
  white: '#FFFFFF',
  botanical: '#335C4D'
};

/** Organic curved separator between two sections. */
export function WaveDivider({ to, className = '' }: ToneProps) {
  return (
    <div className={`pointer-events-none relative -mb-px w-full ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 110" preserveAspectRatio="none" className="block h-[70px] w-full sm:h-[110px]">
        <path
          d="M0 44C168 12 322 0 522 26c200 26 330 66 528 62 132-3 258-27 390-64v86H0z"
          fill={FILL[to]} />
        
      </svg>
    </div>);

}

/** Soft pastel blobs used behind sections. */
export function Blobs({ className = '' }: {className?: string;}) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="drift absolute -left-24 top-10 h-72 w-72 rounded-full bg-mint/50 blur-3xl" />
      <div className="float-slower absolute right-[-10%] top-1/3 h-80 w-80 rounded-full bg-sage/35 blur-3xl" />
    </div>);

}

/** Decorative organic leaf mark. */
export function LeafMark({ className = '' }: {className?: string;}) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M54 8C28 8 10 22 10 42c0 5 1.6 9.4 4.4 12.9C22 40 33 31 50 27 36 33 25 43 19 58c3.6 2.6 8 4 13 4 20 0 32-18 32-44 0-4.4-4.6-10-10-10z"
        fill="currentColor" />
      
    </svg>);

}

/** Counter that animates once when scrolled into view. */
export function Counter({
  value,
  suffix = '',
  duration = 1100




}: {value: number;suffix?: string;duration?: number;}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>);

}