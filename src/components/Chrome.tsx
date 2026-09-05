import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpIcon } from 'lucide-react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 30, mass: 0.4 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-forest"
      aria-hidden="true" />);


}

export function ScrollRestoration() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible &&
      <motion.button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, y: 12, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.96 }}
        transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
        className="fixed bottom-7 right-6 z-50 grid h-12 w-12 place-items-center rounded-2xl bg-botanical text-white shadow-lift transition-[background-color,transform] duration-150 ease-out hover:-translate-y-0.5 hover:bg-forest"
        aria-label="Scroll back to top">
        
          <ArrowUpIcon className="h-5 w-5" aria-hidden="true" />
        </motion.button>
      }
    </AnimatePresence>);

}

export function PageTransition({ children }: {children: React.ReactNode;}) {
  const { pathname } = useLocation();
  const reduced = useReducedMotion();
  if (reduced) return <main id="main">{children}</main>;
  return (
    <motion.main
      id="main"
      key={pathname}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}>
      
      {children}
    </motion.main>);

}