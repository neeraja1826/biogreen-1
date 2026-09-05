import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, LeafIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { QuoteCarousel } from '../components/QuoteCarousel';
import { Reveal } from '../components/Reveal';
import { Blobs, Counter, LeafMark, WaveDivider } from '../components/Decor';
import { aboutHome, aboutPage, imagery, motto, productCategories } from '../data/site';

const metrics = [
{ value: 100, suffix: '%', label: 'certified compostable alternatives' },
{ value: 5, suffix: '', label: 'Our Certifications' },
{ value: 10, suffix: '+', label: 'For over a decade' },
{ value: 3, suffix: '', label: 'passionate entrepreneurs' }];


export function Sustainability() {
  return (
    <>
      <PageHero
        eyebrow={aboutHome.tabs[2].title}
        title={aboutHome.tabs[2].body}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Sustainability' }]} />
      
      <WaveDivider to="ivory" />

      <section className="relative overflow-hidden bg-ivory py-24 sm:py-32" aria-labelledby="sus-impact">
        <Blobs />
        <LeafMark className="float-slower absolute right-10 top-20 h-14 w-14 text-mint" />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-16 px-6 lg:grid-cols-2">
          <Reveal>
            <img
              src={imagery.sustainability}
              alt="Illustration of the earth surrounded by floating leaves"
              loading="lazy"
              decoding="async"
              className="float-slow mx-auto w-full max-w-[520px]" />
            
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="sus-impact" className="t-section">
              {aboutHome.heading}
            </h2>
            <p className="t-body mt-6 max-w-prose text-muted">{aboutHome.tabs[0].body}</p>
            <dl className="mt-12 grid gap-5 sm:grid-cols-2">
              {metrics.map((metric) =>
              <div key={metric.label} className="glass rounded-3xl p-7 shadow-soft">
                  <dd className="text-4xl font-extrabold text-ink">
                    <Counter value={metric.value} suffix={metric.suffix} />
                  </dd>
                  <dt className="mt-2 text-sm text-muted">{metric.label}</dt>
                </div>
              )}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32" aria-labelledby="sus-values">
        <div className="mx-auto max-w-[1240px] px-6">
          <Reveal>
            <p className="eyebrow">{aboutPage.valuesTitle}</p>
            <h2 id="sus-values" className="t-section mt-4 max-w-3xl">
              {aboutPage.whyHeading}
            </h2>
          </Reveal>
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {aboutPage.values.map((value, index) =>
            <Reveal as="li" key={value} delay={index * 0.05}>
                <div className="h-full rounded-4xl border border-line bg-sagelight p-8 transition-[background-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-1.5 hover:bg-white hover:shadow-lift">
                  <span className="grid h-14 w-14 place-items-center rounded-3xl bg-mint text-botanical">
                    <LeafIcon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <p className="t-body mt-7 text-ink">{value}</p>
                </div>
              </Reveal>
            )}
          </ul>
        </div>
      </section>

      <WaveDivider to="botanical" />
      <section className="relative overflow-hidden bg-botanical py-24 sm:py-28" aria-labelledby="sus-motto">
        <div
          className="pointer-events-none absolute right-[-8%] top-6 h-80 w-80 rounded-full bg-olive/40 blur-3xl"
          aria-hidden="true" />
        
        <div className="relative mx-auto max-w-[1240px] px-6">
          <p className="text-center text-[13px] font-semibold uppercase tracking-[0.14em] text-mint">
            {motto.eyebrow}
          </p>
          <h2 id="sus-motto" className="sr-only">
            {motto.eyebrow}
          </h2>
          <div className="mt-10">
            <QuoteCarousel />
          </div>
        </div>
      </section>
      <WaveDivider to="ivory" />

      <section className="bg-ivory py-24 sm:py-28" aria-labelledby="sus-products">
        <div className="mx-auto max-w-[1240px] px-6">
          <Reveal>
            <h2 id="sus-products" className="t-sub">
              {aboutHome.tabs[2].title}
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((category, index) =>
            <Reveal as="li" key={category.slug} delay={index * 0.04}>
                <Link
                to={`/products/${category.slug}`}
                className="group block overflow-hidden rounded-4xl border border-line bg-white shadow-soft transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-1.5 hover:shadow-lift">
                
                  <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.05]" />
                
                  <span className="flex items-center justify-between gap-3 p-6 font-semibold text-ink">
                    {category.title}
                    <ArrowRightIcon
                    className="h-4 w-4 shrink-0 text-forest transition-transform duration-150 ease-out group-hover:translate-x-1"
                    aria-hidden="true" />
                  
                  </span>
                </Link>
              </Reveal>
            )}
          </ul>
        </div>
      </section>
    </>);

}