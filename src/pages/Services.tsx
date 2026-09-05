import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { WaveDivider } from '../components/Decor';
import { footerHeadings, productCategories, whatWeDo } from '../data/site';

export function Services() {
  return (
    <>
      <PageHero
        eyebrow={footerHeadings.services}
        title={whatWeDo.heading}
        crumbs={[{ label: 'Home', to: '/' }, { label: footerHeadings.services }]} />
      
      <WaveDivider to="ivory" />

      <section className="bg-ivory py-24 sm:py-32" aria-labelledby="services-list">
        <div className="mx-auto max-w-[1240px] px-6">
          <Reveal>
            <p className="eyebrow">{whatWeDo.eyebrow}</p>
            <h2 id="services-list" className="t-section mt-4 max-w-3xl">
              {footerHeadings.services}
            </h2>
          </Reveal>

          <ol className="mt-14 space-y-8">
            {productCategories.map((category, index) =>
            <Reveal as="li" key={category.slug} delay={index * 0.04}>
                <article
                className={`grid overflow-hidden rounded-4xl border border-line bg-white shadow-soft transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-1 hover:shadow-lift lg:grid-cols-2 ${
                index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`
                }>
                
                  <div className="relative aspect-[16/10] overflow-hidden bg-sagelight lg:aspect-auto">
                    <img
                    src={category.image}
                    alt={category.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover" />
                  
                  </div>
                  <div className="flex flex-col justify-center p-8 sm:p-12">
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-forest">
                      {String(index + 1).padStart(2, '0')} · {whatWeDo.eyebrow}
                    </p>
                    <h3 className="t-sub mt-4">{category.title}</h3>
                    <p className="mt-5 text-[17px] leading-relaxed text-muted">
                      We specialize in the manufacturing and marketing of a wide range of carry bags and waste
                      collection garbage bags.
                    </p>
                    <Link
                    to={`/products/${category.slug}`}
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-[15px] font-semibold text-white shadow-soft transition-[background-color,transform] duration-150 ease-out hover:-translate-y-0.5 hover:bg-leaf">
                    
                      Learn More
                      <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            )}
          </ol>
        </div>
      </section>
    </>);

}