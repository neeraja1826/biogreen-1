import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon, BadgeCheckIcon, LeafIcon, ShieldCheckIcon } from 'lucide-react';
import { hero } from '../data/site';
import { LeafMark } from './Decor';

const EASE = [0.23, 1, 0.32, 1] as const;

const trust = [
{ Icon: BadgeCheckIcon, label: 'Certified compostable products' },
{ Icon: ShieldCheckIcon, label: 'ISI Standard No: IS017088' },
{ Icon: LeafIcon, label: 'Certified eco-friendly by the Pollution Control Board' }];


export function HomeHero() {
  const reduced = useReducedMotion();
  const rise = (delay: number) =>
  reduced ?
  {} :
  {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, delay, ease: EASE }
  };

  return (
    <section className="relative overflow-hidden bg-ivory pb-14 pt-10 sm:pb-24 sm:pt-16">
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="radial-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="drift absolute -left-20 top-24 h-72 w-72 rounded-full bg-mint/55 blur-3xl" />
        <div className="float-slower absolute right-[-8%] top-8 h-96 w-96 rounded-full bg-sage/35 blur-3xl" />
        <LeafMark className="float-slow absolute left-[6%] top-[62%] h-10 w-10 text-sage/60" />
        <LeafMark className="float-slower absolute left-[46%] top-[12%] h-8 w-8 rotate-45 text-forest/25" />
      </div>

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <motion.p className="eyebrow" {...rise(0)}>
            {hero.eyebrow}
          </motion.p>
          <motion.h1 className="t-hero mt-5" {...rise(0.05)}>
            {hero.heading}
          </motion.h1>
          <motion.p className="t-body mt-6 max-w-xl text-muted" {...rise(0.1)}>
            {hero.tagline}
          </motion.p>

          <motion.div className="mt-9 flex flex-wrap items-center gap-3" {...rise(0.15)}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-forest px-7 py-4 text-[17px] font-semibold text-white shadow-soft transition-[background-color,transform] duration-150 ease-out hover:-translate-y-0.5 hover:bg-leaf">
              
              {hero.cta}
              <ArrowRightIcon
                className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-1"
                aria-hidden="true" />
              
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-7 py-4 text-[17px] font-semibold text-ink shadow-soft transition-[border-color,transform] duration-150 ease-out hover:-translate-y-0.5 hover:border-forest">
              
              Products
            </Link>
          </motion.div>

          <motion.ul className="mt-12 space-y-3.5" {...rise(0.2)}>
            {trust.map(({ Icon, label }) =>
            <li key={label} className="flex items-start gap-3 text-[15px] text-muted">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint text-botanical">
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {label}
              </li>
            )}
          </motion.ul>

          <motion.div
            className="mt-10 flex flex-wrap items-end gap-x-12 gap-y-6 border-t border-line pt-8"
            {...rise(0.25)}>
            
            <div>
              <p className="text-3xl font-extrabold text-ink">100%</p>
              <p className="mt-1 text-sm text-muted">certified compostable alternatives</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-ink">10+</p>
              <p className="mt-1 text-sm text-muted">For over a decade</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-ink">5</p>
              <p className="mt-1 text-sm text-muted">Our Certifications</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={reduced ? undefined : { opacity: 0, scale: 0.96 }}
          animate={reduced ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1, ease: EASE }}>
          
          <div className="relative mx-auto aspect-square w-full max-w-[580px]">
            <div
              className="absolute inset-6 rounded-[46%_54%_48%_52%/52%_46%_54%_48%] bg-white/70 shadow-soft"
              aria-hidden="true" />
            
            <img
              src={hero.image}
              alt="Compostable bag roll floating among leaves"
              width={1024}
              height={1024}
              className="float-slow relative h-full w-full object-contain" />
            
            <div className="glass float-slower absolute bottom-6 left-0 rounded-3xl px-5 py-4 shadow-soft">
              <p className="text-sm font-semibold text-ink">Think Green choose Bio Green</p>
              <p className="mt-1 text-xs text-muted">Our Motto</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}