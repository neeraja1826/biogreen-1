import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { QuoteIcon } from 'lucide-react';
import { motto } from '../data/site';

const EASE = [0.23, 1, 0.32, 1] as const;

export function QuoteCarousel() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const id = window.setInterval(() => setIndex((current) => (current + 1) % motto.quotes.length), 6000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="glass-dark rounded-4xl px-8 py-14 text-center shadow-lift sm:px-14">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-mint text-botanical">
          <QuoteIcon className="h-6 w-6" aria-hidden="true" />
        </span>
        <div className="relative mt-8 min-h-[112px] sm:min-h-[96px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={reduced ? undefined : { opacity: 0, y: 12 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.26, ease: EASE }}
              className="t-sub text-white">
              
              {motto.quotes[index]}
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <div className="mt-10 flex items-center justify-center gap-2.5" role="tablist" aria-label="Our Motto">
          {motto.quotes.map((quote, dotIndex) =>
          <button
            key={quote}
            type="button"
            role="tab"
            aria-selected={dotIndex === index}
            aria-label={`Show motto ${dotIndex + 1}`}
            onClick={() => setIndex(dotIndex)}
            className={`h-2 rounded-full transition-[width,background-color] duration-200 ease-out ${
            dotIndex === index ? 'w-8 bg-mint' : 'w-2 bg-white/35 hover:bg-white/60'}`
            } />

          )}
        </div>
      </div>
    </div>);

}