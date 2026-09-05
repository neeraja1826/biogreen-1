import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { XIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { WaveDivider } from '../components/Decor';
import { footerHeadings, gallery, motto } from '../data/site';

const EASE = [0.23, 1, 0.32, 1] as const;

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openItem = openIndex === null ? null : gallery[openIndex];

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenIndex(null);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [openIndex]);

  return (
    <>
      <PageHero
        eyebrow={footerHeadings.gallery}
        title={footerHeadings.gallery}
        intro={motto.quotes[1]}
        crumbs={[{ label: 'Home', to: '/' }, { label: footerHeadings.gallery }]} />
      
      <WaveDivider to="ivory" />

      <section className="bg-ivory py-24 sm:py-32" aria-labelledby="gallery-grid">
        <div className="mx-auto max-w-[1240px] px-6">
          <h2 id="gallery-grid" className="sr-only">
            {footerHeadings.gallery}
          </h2>
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
            {gallery.map((item, index) =>
            <Reveal key={item.src} delay={index % 3 * 0.04}>
                <button
                type="button"
                onClick={() => setOpenIndex(index)}
                className="group block w-full overflow-hidden rounded-4xl border border-line bg-white shadow-soft transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-1 hover:shadow-lift"
                aria-label={`Open image: ${item.alt}`}>
                
                  <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className={`w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04] ${
                  item.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`
                  } />
                
                </button>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {openItem &&
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-ink/70 p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: EASE }}
          role="dialog"
          aria-modal="true"
          aria-label={openItem.alt}
          onClick={() => setOpenIndex(null)}>
          
            <motion.figure
            className="relative max-h-[86vh] w-full max-w-4xl overflow-hidden rounded-4xl bg-white"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.22, ease: EASE }}
            onClick={(event) => event.stopPropagation()}>
            
              <img src={openItem.src} alt={openItem.alt} className="max-h-[74vh] w-full object-contain" />
              <figcaption className="border-t border-line px-6 py-4 text-sm text-muted">
                {openItem.alt}
              </figcaption>
              <button
              type="button"
              onClick={() => setOpenIndex(null)}
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-2xl bg-white/90 text-ink shadow-soft transition-colors duration-150 hover:bg-mint"
              aria-label="Close image">
              
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </motion.figure>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}