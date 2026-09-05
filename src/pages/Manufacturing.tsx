import React from 'react';
import { FactoryIcon, RecycleIcon, SproutIcon, TruckIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { Blobs, WaveDivider } from '../components/Decor';
import { aboutHome, aboutPage, imagery } from '../data/site';

const steps = [
{ Icon: SproutIcon, title: aboutPage.manufacturingLabel, body: aboutPage.manufacturingBody[0] },
{ Icon: FactoryIcon, title: aboutPage.manufacturingTitle, body: aboutPage.manufacturingBody[1] },
{ Icon: TruckIcon, title: aboutPage.deliveryTitle, body: aboutPage.delivery[1] },
{ Icon: RecycleIcon, title: aboutPage.achievementsTitle, body: aboutPage.achievementsBody }];


export function Manufacturing() {
  return (
    <>
      <PageHero
        eyebrow={aboutPage.manufacturingLabel}
        title={aboutPage.manufacturingTitle}
        intro={aboutPage.manufacturingBody[0]}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Manufacturing' }]} />
      
      <WaveDivider to="ivory" />

      <section className="relative overflow-hidden bg-ivory py-24 sm:py-32" aria-labelledby="mfg-timeline">
        <Blobs />
        <div className="relative mx-auto max-w-[1240px] px-6">
          <Reveal>
            <h2 id="mfg-timeline" className="t-section max-w-3xl">
              {aboutPage.manufacturingBody[1]}
            </h2>
          </Reveal>

          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-7 hidden h-[2px] bg-line lg:block" aria-hidden="true" />
            <ol className="grid gap-8 lg:grid-cols-4">
              {steps.map((step, index) =>
              <Reveal as="li" key={step.title} delay={index * 0.06}>
                  <span className="relative z-10 grid h-14 w-14 place-items-center rounded-3xl bg-botanical text-white shadow-soft">
                    <step.Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div className="glass mt-7 rounded-4xl p-7 shadow-soft">
                    <p className="text-sm font-semibold uppercase tracking-[0.1em] text-forest">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-3 text-lg font-bold text-ink">{step.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">{step.body}</p>
                  </div>
                </Reveal>
              )}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32" aria-labelledby="mfg-detail">
        <div className="mx-auto grid max-w-[1240px] items-center gap-16 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-4xl border border-line bg-sagelight shadow-soft">
              <img
                src={imagery.manufacturing}
                alt="Isometric illustration of the eco-friendly manufacturing line"
                loading="lazy"
                decoding="async"
                className="w-full object-cover" />
              
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="mfg-detail" className="t-section">
              {aboutPage.futureTitle}
            </h2>
            <p className="t-body mt-6 max-w-prose text-muted">{aboutPage.futureBody}</p>

            <div className="mt-10 space-y-5">
              <div className="rounded-4xl border border-line bg-sagelight p-7">
                <h3 className="t-sub">{aboutPage.deliveryTitle}</h3>
                <ul className="mt-5 space-y-4">
                  {aboutPage.delivery.map((item) =>
                  <li key={item} className="flex items-start gap-3 text-[16px] leading-relaxed text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" aria-hidden="true" />
                      {item}
                    </li>
                  )}
                </ul>
              </div>
              <div className="rounded-4xl border border-line bg-sagelight p-7">
                <h3 className="t-sub">{aboutPage.customerTitle}</h3>
                <ul className="mt-5 space-y-4">
                  {aboutPage.customer.map((item) =>
                  <li key={item} className="flex items-start gap-3 text-[16px] leading-relaxed text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" aria-hidden="true" />
                      {item}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <WaveDivider to="botanical" />
      <section className="bg-botanical py-24 sm:py-28" aria-labelledby="mfg-quality">
        <div className="mx-auto max-w-[1240px] px-6">
          <Reveal>
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-mint">
              {aboutHome.tabs[1].key}
            </p>
            <h2 id="mfg-quality" className="t-section mt-4 max-w-3xl text-white">
              {aboutHome.tabs[1].title}
            </h2>
            <p className="mt-7 max-w-3xl text-[18px] leading-relaxed text-white/75">
              {aboutHome.tabs[1].body}
            </p>
          </Reveal>
        </div>
      </section>
    </>);

}