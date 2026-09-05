import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { LeafIcon, MailIcon, MenuIcon, PhoneIcon, XIcon } from 'lucide-react';
import { company, nav } from '../data/site';

const EASE = [0.23, 1, 0.32, 1] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <div className="hidden bg-botanical text-white/85 md:block">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-x-7 gap-y-1 px-6 py-2.5 text-[13px]">
          <a
            className="inline-flex items-center gap-2 transition-colors duration-150 hover:text-mint"
            href={`mailto:${company.email}`}>
            
            <MailIcon className="h-3.5 w-3.5" aria-hidden="true" />
            {company.email}
          </a>
          {company.phones.map((phone) =>
          <a
            key={phone}
            className="inline-flex items-center gap-2 transition-colors duration-150 hover:text-mint"
            href={`tel:${phone}`}>
            
              <PhoneIcon className="h-3.5 w-3.5" aria-hidden="true" />
              {phone}
            </a>
          )}
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-200 ease-out ${
        scrolled ? 'border-b border-line bg-ivory/85 shadow-soft backdrop-blur-xl' : 'border-b border-transparent bg-transparent'}`
        }>
        
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 py-4">
          <Link to="/" className="group inline-flex items-center gap-2.5" aria-label={`${company.name} — home`}>
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-forest text-white shadow-soft">
              <LeafIcon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-lg font-extrabold tracking-tight text-ink">
              Bio Green <span className="text-forest">Solutions</span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
            {nav.map((item) =>
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
              `relative rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors duration-150 ${
              isActive ? 'text-forest' : 'text-muted hover:text-ink'}`

              }>
              
                {({ isActive }) =>
              <>
                    {item.label}
                    <span
                  className={`absolute inset-x-3.5 -bottom-0.5 h-[2px] origin-left rounded-full bg-forest transition-transform duration-200 ease-out ${
                  isActive ? 'scale-x-100' : 'scale-x-0'}`
                  }
                  aria-hidden="true" />
                
                  </>
              }
              </NavLink>
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden rounded-full bg-forest px-5 py-2.5 text-[15px] font-semibold text-white shadow-soft transition-[background-color,transform] duration-150 ease-out hover:-translate-y-0.5 hover:bg-leaf md:inline-flex" style={{ flexDirection: "row", alignItems: "normal", justifyContent: "normal" }}>
              Join With Us
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-2xl border border-line bg-white text-ink shadow-soft xl:hidden"
              aria-label="Open menu"
              aria-expanded={open}>
              
              <MenuIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open &&
        <>
            <motion.div
            className="fixed inset-0 z-[60] bg-ink/35"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE }}
            onClick={() => setOpen(false)} />
          
            <motion.aside
            className="fixed inset-y-0 right-0 z-[61] flex w-[min(88vw,380px)] flex-col bg-ivory shadow-lift"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.28, ease: EASE }}
            aria-label="Mobile navigation">
            
              <div className="flex items-center justify-between border-b border-line px-6 py-5">
                <span className="font-extrabold text-ink">
                  Bio Green <span className="text-forest">Solutions</span>
                </span>
                <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-2xl border border-line bg-white text-ink"
                aria-label="Close menu">
                
                  <XIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto px-4 py-5" aria-label="Mobile">
                <ul className="space-y-1">
                  {nav.map((item) =>
                <li key={item.to}>
                      <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                    `block rounded-2xl px-4 py-3 text-lg font-semibold transition-colors duration-150 ${
                    isActive ? 'bg-mint/60 text-ink' : 'text-muted hover:bg-sagelight hover:text-ink'}`

                    }>
                    
                        {item.label}
                      </NavLink>
                    </li>
                )}
                </ul>
              </nav>
              <div className="space-y-2 border-t border-line px-6 py-6 text-sm">
                <a className="block text-muted" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
                {company.phones.map((phone) =>
              <a key={phone} className="block text-muted" href={`tel:${phone}`}>
                    {phone}
                  </a>
              )}
              </div>
            </motion.aside>
          </>
        }
      </AnimatePresence>
    </>);

}