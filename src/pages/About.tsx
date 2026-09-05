import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon, HeartHandshakeIcon, SproutIcon, TruckIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { Blobs, Counter, WaveDivider } from '../components/Decor';
import { aboutHome, aboutPage, imagery } from '../data/site';

const pillars = [
{ title: aboutPage.valuesTitle, items: aboutPage.values, Icon: SproutIcon },
{ title: aboutPage.deliveryTitle, items: aboutPage.delivery, Icon: TruckIcon },
{ title: aboutPage.customerTitle, items: aboutPage.customer, Icon: HeartHandshakeIcon }];


export function About() {
  return (
    <>
      <PageHero
        eyebrow={aboutPage.eyebrow}
        title={aboutPage.tagline}
        intro={aboutHome.intro}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]} />
      
      <WaveDivider to="ivory" />

      <section className="relative overflow-hidden bg-ivory py-24 sm:py-32" aria-labelledby="about-why">
        <Blobs />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-16 px-6 lg:grid-cols-2">
          <Reveal>
            <h2 id="about-why" className="t-section">
              {aboutPage.whyHeading}
            </h2>
            <ul className="mt-10 space-y-5">
              {aboutPage.whyPoints.map((point) =>
              <li key={point} className="flex items-start gap-4">
                  <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-mint text-botanical">
                    <CheckIcon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <p className="text-[17px] leading-relaxed text-muted">{point}</p>
                </li>
              )}
            </ul>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="relative">
              <img
                src={imagery.sustainability}
                alt="Illustration of the earth surrounded by leaves"
                loading="lazy"
                decoding="async"
                className="float-slow mx-auto w-full max-w-[500px]" />
              
              <div className="glass absolute bottom-0 right-0 rounded-3xl px-6 py-5 shadow-soft">
                <p className="text-3xl font-extrabold text-ink">
                  <Counter value={100} suffix="%" />
                </p>
                <p className="mt-1 max-w-[180px] text-sm text-muted">certified compostable alternatives</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32" aria-labelledby="about-tabs">
        <div className="mx-auto max-w-[1240px] px-6">
          <Reveal>
            <p className="eyebrow">{aboutHome.eyebrow}</p>
            <h2 id="about-tabs" className="t-section mt-4 max-w-3xl">
              {aboutHome.heading}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {aboutHome.tabs.map((tab, index) =>
            <Reveal key={tab.key} delay={index * 0.05} className="h-full">
                <article className="flex h-full flex-col rounded-4xl border border-line bg-sagelight p-8 transition-[box-shadow,transform,background-color] duration-200 ease-out hover:-translate-y-1.5 hover:bg-white hover:shadow-lift">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-forest">{tab.key}</p>
                  <h3 className="t-sub mt-4">{tab.title}</h3>
                  <p className="mt-5 text-[17px] leading-relaxed text-muted">{tab.body}</p>
                </article>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <WaveDivider to="sagelight" />
      <section className="bg-sagelight py-24 sm:py-32" aria-labelledby="about-timeline">
        <div className="mx-auto max-w-[1240px] px-6">
          <Reveal>
            <p className="eyebrow">{aboutPage.manufacturingLabel}</p>
            <h2 id="about-timeline" className="t-section mt-4 max-w-3xl">
              {aboutPage.manufacturingTitle}
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <div className="space-y-6">
                {aboutPage.manufacturingBody.map((paragraph) =>
                <p key={paragraph} className="t-body max-w-prose text-muted">
                    {paragraph}
                  </p>
                )}
              </div>
              <div className="mt-10 space-y-6">
                <div className="glass rounded-4xl p-8 shadow-soft">
                  <h3 className="t-sub">{aboutPage.achievementsTitle}</h3>
                  <p className="mt-4 text-[17px] leading-relaxed text-muted">{aboutPage.achievementsBody}</p>
                </div>
                <div className="glass rounded-4xl p-8 shadow-soft">
                  <h3 className="t-sub">{aboutPage.futureTitle}</h3>
                  <p className="mt-4 text-[17px] leading-relaxed text-muted">{aboutPage.futureBody}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="overflow-hidden rounded-4xl border border-line bg-white shadow-soft">
                <img
                  src={imagery.manufacturing}
                  alt="Illustration of eco-friendly manufacturing and distribution"
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover" />
                
              </div>
              <Link
                to="/manufacturing"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-4 text-[17px] font-semibold text-white shadow-soft transition-[background-color,transform] duration-150 ease-out hover:-translate-y-0.5 hover:bg-leaf">
                
                {aboutPage.manufacturingLabel}
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 sm:py-32" aria-labelledby="about-pillars">
        <div className="mx-auto max-w-[1240px] px-6">
          <h2 id="about-pillars" className="sr-only">
            {aboutPage.valuesTitle}
          </h2>
          <div className="grid gap-7 lg:grid-cols-3">
            {pillars.map((pillar, index) =>
            <Reveal key={pillar.title} delay={index * 0.05} className="h-full">
                <article className="flex h-full flex-col rounded-4xl border border-line bg-white p-8 shadow-soft transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-1.5 hover:shadow-lift">
                  <span className="grid h-14 w-14 place-items-center rounded-3xl bg-mint text-botanical">
                    <pillar.Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="t-sub mt-7">{pillar.title}</h3>
                  <ul className="mt-5 space-y-4">
                    {pillar.items.map((item) =>
                  <li key={item} className="flex items-start gap-3 text-[16px] leading-relaxed text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" aria-hidden="true" />
                        {item}
                      </li>
                  )}
                  </ul>
                </article>
              </Reveal>
            )}
          </div>
        </div>
      </section>
    </>);

}