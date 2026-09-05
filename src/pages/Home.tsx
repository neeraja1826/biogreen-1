import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  FactoryIcon,
  LeafIcon,
  PackageIcon,
  RecycleIcon,
  ScissorsIcon,
  SproutIcon,
  TruckIcon } from
'lucide-react';
import { HomeHero } from '../components/HomeHero';
import { ProductCard } from '../components/ProductCard';
import { QuoteCarousel } from '../components/QuoteCarousel';
import { Reveal } from '../components/Reveal';
import { Blobs, Counter, LeafMark, WaveDivider } from '../components/Decor';
import {
  aboutHome,
  aboutPage,
  certifications,
  certificationsSection,
  company,
  gallery,
  imagery,
  motto,
  productCategories,
  whatWeDo } from
'../data/site';

const featureIcons = [LeafIcon, PackageIcon, RecycleIcon, ScissorsIcon];

const processSteps = [
{ Icon: SproutIcon, label: aboutPage.manufacturingLabel, body: aboutPage.manufacturingBody[0] },
{ Icon: FactoryIcon, label: aboutPage.manufacturingTitle, body: aboutPage.manufacturingBody[1] },
{ Icon: TruckIcon, label: aboutPage.deliveryTitle, body: aboutPage.delivery[0] },
{ Icon: RecycleIcon, label: aboutPage.achievementsTitle, body: aboutPage.achievementsBody }];


export function Home() {
  const [tab, setTab] = useState(aboutHome.tabs[0].key);
  const active = aboutHome.tabs.find((item) => item.key === tab) ?? aboutHome.tabs[0];

  return (
    <>
      <HomeHero />

      {/* About */}
      <WaveDivider to="sagelight" />
      <section className="relative overflow-hidden bg-sagelight py-24 sm:py-32" aria-labelledby="home-about">
        <Blobs />
        <div className="relative mx-auto grid max-w-[1240px] items-start gap-16 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img
                src={imagery.sustainability}
                alt="Illustration of the earth surrounded by leaves"
                loading="lazy"
                decoding="async"
                className="float-slow mx-auto w-full max-w-[520px] rounded-4xl" />
              
              <div className="glass absolute bottom-2 left-2 rounded-3xl px-6 py-5 shadow-soft">
                <p className="text-3xl font-extrabold text-ink">
                  <Counter value={3} />
                </p>
                <p className="mt-1 max-w-[190px] text-sm text-muted">
                  three passionate entrepreneurs with a shared vision for a greener future
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="eyebrow">{aboutHome.eyebrow}</p>
            <h2 id="home-about" className="t-section mt-4">
              {aboutHome.heading}
            </h2>
            <p className="t-body mt-6 max-w-prose text-muted">{aboutHome.intro}</p>

            <div className="mt-9 flex flex-wrap gap-2" role="tablist" aria-label={aboutHome.eyebrow}>
              {aboutHome.tabs.map((item) =>
              <button
                key={item.key}
                type="button"
                role="tab"
                aria-selected={item.key === tab}
                onClick={() => setTab(item.key)}
                className={`rounded-full px-5 py-2.5 text-[15px] font-semibold transition-[background-color,color,border-color] duration-150 ease-out ${
                item.key === tab ?
                'bg-botanical text-white' :
                'border border-line bg-white text-muted hover:border-forest hover:text-ink'}`
                }>
                
                  {item.key}
                </button>
              )}
            </div>

            <div className="glass mt-7 rounded-4xl p-8 shadow-soft">
              <h3 className="t-sub">{active.title}</h3>
              <p className="mt-4 text-[17px] leading-relaxed text-muted">{active.body}</p>
            </div>

            <dl className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="rounded-3xl border border-line bg-white p-6 shadow-soft">
                <dt className="text-sm text-muted">For over a decade</dt>
                <dd className="mt-2 text-3xl font-extrabold text-ink">
                  <Counter value={10} suffix="+" />
                </dd>
              </div>
              <div className="rounded-3xl border border-line bg-white p-6 shadow-soft">
                <dt className="text-sm text-muted">Certified compostable</dt>
                <dd className="mt-2 text-3xl font-extrabold text-ink">
                  <Counter value={100} suffix="%" />
                </dd>
              </div>
              <div className="rounded-3xl border border-line bg-white p-6 shadow-soft">
                <dt className="text-sm text-muted">Our Certifications</dt>
                <dd className="mt-2 text-3xl font-extrabold text-ink">
                  <Counter value={5} />
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Why choose */}
      <section className="relative bg-white py-24 sm:py-32" aria-labelledby="home-why">
        <div className="mx-auto max-w-[1240px] px-6">
          <Reveal>
            <p className="eyebrow">{aboutPage.eyebrow}</p>
            <h2 id="home-why" className="t-section mt-4 max-w-3xl">
              {aboutPage.whyHeading}
            </h2>
          </Reveal>
          <ul className="mt-14 grid gap-6 md:grid-cols-2">
            {aboutPage.whyPoints.map((point, index) => {
              const Icon = featureIcons[index % featureIcons.length];
              return (
                <Reveal as="li" key={point} delay={index * 0.04}>
                  <div className="group h-full rounded-4xl border border-line bg-sagelight p-8 transition-[box-shadow,transform,background-color] duration-200 ease-out hover:-translate-y-1.5 hover:bg-white hover:shadow-lift">
                    <span className="grid h-14 w-14 place-items-center rounded-3xl bg-mint text-botanical transition-transform duration-200 ease-out group-hover:-translate-y-0.5">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <p className="t-body mt-7 text-ink">{point}</p>
                  </div>
                </Reveal>);

            })}
          </ul>
        </div>
      </section>

      {/* What we do / products */}
      <WaveDivider to="ivory" />
      <section className="relative overflow-hidden bg-ivory py-24 sm:py-32" aria-labelledby="home-products">
        <LeafMark className="float-slower absolute right-8 top-16 h-16 w-16 text-mint" />
        <div className="mx-auto max-w-[1240px] px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-8">
              <div>
                <p className="eyebrow">{whatWeDo.eyebrow}</p>
                <h2 id="home-products" className="t-section mt-4 max-w-2xl">
                  {whatWeDo.heading}
                </h2>
              </div>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-[15px] font-semibold text-ink shadow-soft transition-[border-color,transform] duration-150 ease-out hover:-translate-y-0.5 hover:border-forest">
                
                View all products
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((category, index) =>
            <Reveal key={category.slug} delay={index * 0.04} className="h-full">
                <ProductCard category={category} badge={whatWeDo.eyebrow} />
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Manufacturing timeline */}
      <section className="relative bg-white py-24 sm:py-32" aria-labelledby="home-manufacturing">
        <div className="mx-auto max-w-[1240px] px-6">
          <Reveal>
            <p className="eyebrow">{aboutPage.manufacturingLabel}</p>
            <h2 id="home-manufacturing" className="t-section mt-4 max-w-3xl">
              {aboutPage.manufacturingTitle}
            </h2>
          </Reveal>

          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-7 hidden h-[2px] bg-line lg:block" aria-hidden="true" />
            <ol className="grid gap-8 lg:grid-cols-4">
              {processSteps.map((step, index) =>
              <Reveal as="li" key={step.label} delay={index * 0.06}>
                  <div className="relative">
                    <span className="relative z-10 grid h-14 w-14 place-items-center rounded-3xl bg-botanical text-white shadow-soft">
                      <step.Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div className="glass mt-7 h-full rounded-4xl p-7 shadow-soft">
                      <p className="text-sm font-semibold uppercase tracking-[0.1em] text-forest">
                        Step {index + 1}
                      </p>
                      <h3 className="mt-3 text-lg font-bold text-ink">{step.label}</h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-muted">{step.body}</p>
                    </div>
                  </div>
                </Reveal>
              )}
            </ol>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-16 overflow-hidden rounded-4xl border border-line bg-sagelight">
              <img
                src={imagery.manufacturing}
                alt="Illustration of eco-friendly manufacturing and distribution"
                loading="lazy"
                decoding="async"
                className="w-full object-cover" />
              
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sustainability */}
      <WaveDivider to="botanical" />
      <section className="relative overflow-hidden bg-botanical py-24 sm:py-32" aria-labelledby="home-sustain">
        <div
          className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-olive/40 blur-3xl"
          aria-hidden="true" />
        
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-16 px-6 lg:grid-cols-2">
          <Reveal>
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-mint">
              {aboutHome.tabs[2].title}
            </p>
            <h2 id="home-sustain" className="t-section mt-4 text-white">
              {aboutHome.tabs[2].body}
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
              { value: 100, suffix: '%', label: 'certified compostable alternatives' },
              { value: 5, suffix: '', label: 'Our Certifications' },
              { value: 3, suffix: '', label: 'passionate entrepreneurs' }].
              map((metric) =>
              <div key={metric.label} className="glass-dark rounded-3xl p-6">
                  <p className="text-3xl font-extrabold text-white">
                    <Counter value={metric.value} suffix={metric.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-white/70">{metric.label}</p>
                </div>
              )}
            </div>
            <Link
              to="/sustainability"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-mint px-7 py-4 text-[17px] font-semibold text-botanical transition-[background-color,transform] duration-150 ease-out hover:-translate-y-0.5 hover:bg-white">
              
              Sustainability
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <img
              src={imagery.sustainability}
              alt="Illustration of the earth surrounded by floating leaves"
              loading="lazy"
              decoding="async"
              className="float-slow mx-auto w-full max-w-[520px]" />
            
          </Reveal>
        </div>
      </section>
      <WaveDivider to="ivory" />

      {/* Certifications */}
      <section className="relative bg-ivory py-24 sm:py-32" aria-labelledby="home-certs">
        <div className="mx-auto max-w-[1240px] px-6">
          <Reveal>
            <p className="eyebrow">{certificationsSection.eyebrow}</p>
            <h2 id="home-certs" className="t-section mt-4 max-w-4xl">
              {certificationsSection.heading}
            </h2>
          </Reveal>

          <ol className="mt-16 space-y-6">
            {certifications.map((certification, index) =>
            <Reveal as="li" key={certification.slug} delay={index * 0.04}>
                <Link
                to={`/certifications/${certification.slug}`}
                className="group grid gap-6 rounded-4xl border border-line bg-white p-8 shadow-soft transition-[box-shadow,transform,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-forest hover:shadow-lift md:grid-cols-[220px_1fr_auto] md:items-center">
                
                  <div>
                    <p className="text-lg font-bold text-ink">{certification.name}</p>
                    <p className="mt-1 text-sm text-forest">{certification.date}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{certification.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{certification.body}</p>
                  </div>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sagelight text-botanical transition-transform duration-150 ease-out group-hover:translate-x-1">
                    <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            )}
          </ol>
        </div>
      </section>

      {/* Motto */}
      <section className="relative overflow-hidden bg-botanical py-24 sm:py-28" aria-labelledby="home-motto">
        <div
          className="pointer-events-none absolute right-[-10%] top-0 h-80 w-80 rounded-full bg-olive/40 blur-3xl"
          aria-hidden="true" />
        
        <div className="relative mx-auto max-w-[1240px] px-6">
          <Reveal>
            <p className="text-center text-[13px] font-semibold uppercase tracking-[0.14em] text-mint">
              {motto.eyebrow}
            </p>
            <h2 id="home-motto" className="sr-only">
              {motto.eyebrow}
            </h2>
            <div className="mt-10">
              <QuoteCarousel />
            </div>
          </Reveal>
        </div>
      </section>
      <WaveDivider to="ivory" />

      {/* Gallery preview */}
      <section className="bg-ivory py-24 sm:py-32" aria-labelledby="home-gallery">
        <div className="mx-auto max-w-[1240px] px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-8">
              <h2 id="home-gallery" className="t-section">
                Our Gallery
              </h2>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-[15px] font-semibold text-ink shadow-soft transition-[border-color,transform] duration-150 ease-out hover:-translate-y-0.5 hover:border-forest">
                
                Our Gallery
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.slice(0, 4).map((item, index) =>
            <Reveal key={item.src} delay={index * 0.04}>
                <div className="overflow-hidden rounded-4xl border border-line bg-white shadow-soft">
                  <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-300 ease-out hover:scale-[1.04]" />
                
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white py-20 sm:py-28" aria-labelledby="home-cta">
        <div className="mx-auto max-w-[1240px] px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-4xl border border-line bg-sagelight px-8 py-14 text-center sm:px-16">
              <div className="radial-glow pointer-events-none absolute inset-0" aria-hidden="true" />
              <div className="relative">
                <h2 id="home-cta" className="t-section mx-auto max-w-3xl">
                  {aboutHome.heading}
                </h2>
                <p className="t-body mx-auto mt-5 max-w-prose text-muted">{company.address}</p>
                <Link
                  to="/contact"
                  className="mt-9 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-4 text-[17px] font-semibold text-white shadow-soft transition-[background-color,transform] duration-150 ease-out hover:-translate-y-0.5 hover:bg-leaf">
                  
                  Join With Us
                  <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>);

}