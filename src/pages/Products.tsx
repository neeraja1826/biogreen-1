import React from 'react';
import { PageHero } from '../components/PageHero';
import { ProductCard } from '../components/ProductCard';
import { QuoteCarousel } from '../components/QuoteCarousel';
import { Reveal } from '../components/Reveal';
import { WaveDivider } from '../components/Decor';
import { motto, productCategories, whatWeDo } from '../data/site';

export function Products() {
  return (
    <>
      <PageHero
        eyebrow={whatWeDo.eyebrow}
        title={whatWeDo.heading}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Products' }]} />
      
      <WaveDivider to="ivory" />

      <section className="bg-ivory py-24 sm:py-32" aria-labelledby="products-grid">
        <div className="mx-auto max-w-[1240px] px-6">
          <h2 id="products-grid" className="sr-only">
            {whatWeDo.heading}
          </h2>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category, index) =>
            <Reveal key={category.slug} delay={index * 0.04} className="h-full">
                <ProductCard category={category} badge={whatWeDo.eyebrow} />
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-botanical py-24 sm:py-28" aria-labelledby="products-motto">
        <div
          className="pointer-events-none absolute -left-16 top-8 h-80 w-80 rounded-full bg-olive/40 blur-3xl"
          aria-hidden="true" />
        
        <div className="relative mx-auto max-w-[1240px] px-6">
          <p className="text-center text-[13px] font-semibold uppercase tracking-[0.14em] text-mint">
            {motto.eyebrow}
          </p>
          <h2 id="products-motto" className="sr-only">
            {motto.eyebrow}
          </h2>
          <div className="mt-10">
            <QuoteCarousel />
          </div>
        </div>
      </section>
    </>);

}