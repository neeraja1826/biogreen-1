import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRightIcon, ShieldCheckIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { Blobs, WaveDivider } from '../components/Decor';
import { aboutPage, certifications, certificationsSection } from '../data/site';

export function CertificationPage() {
  const { slug } = useParams();
  const certification = certifications.find((item) => item.slug === slug) ?? certifications[0];
  const others = certifications.filter((item) => item.slug !== certification.slug);

  return (
    <>
      <PageHero
        eyebrow={certificationsSection.eyebrow}
        title={certification.name}
        intro={certification.date}
        crumbs={[
        { label: 'Home', to: '/' },
        { label: 'Certificates', to: '/certifications' },
        { label: certification.name }]
        } />
      
      <WaveDivider to="ivory" />

      <section className="relative overflow-hidden bg-ivory py-24 sm:py-32" aria-labelledby="cert-detail">
        <Blobs />
        <div className="relative mx-auto grid max-w-[1240px] items-start gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <span className="grid h-16 w-16 place-items-center rounded-3xl bg-mint text-botanical">
              <ShieldCheckIcon className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 id="cert-detail" className="t-section mt-8">
              {certification.title}
            </h2>
            <p className="t-body mt-6 max-w-prose text-muted">{certification.body}</p>

            <div className="glass mt-10 rounded-4xl p-8 shadow-soft">
              <h3 className="t-sub">{aboutPage.manufacturingTitle}</h3>
              <div className="mt-5 space-y-4">
                {aboutPage.manufacturingBody.map((paragraph) =>
                <p key={paragraph} className="text-[17px] leading-relaxed text-muted">
                    {paragraph}
                  </p>
                )}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <aside className="rounded-4xl border border-line bg-white p-8 shadow-soft">
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-forest">
                {certificationsSection.eyebrow}
              </h3>
              <ul className="mt-6 space-y-4">
                {others.map((item) =>
                <li key={item.slug}>
                    <Link
                    to={`/certifications/${item.slug}`}
                    className="group flex items-start justify-between gap-4 rounded-3xl bg-sagelight px-5 py-4 transition-[background-color,transform] duration-150 ease-out hover:-translate-y-0.5 hover:bg-mint/50">
                    
                      <span>
                        <span className="block font-semibold text-ink">{item.name}</span>
                        <span className="mt-1 block text-sm text-muted">{item.date}</span>
                      </span>
                      <ArrowRightIcon
                      className="mt-1 h-4 w-4 shrink-0 text-forest transition-transform duration-150 ease-out group-hover:translate-x-1"
                      aria-hidden="true" />
                    
                    </Link>
                  </li>
                )}
              </ul>
              <Link
                to="/contact"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-[15px] font-semibold text-white transition-[background-color,transform] duration-150 ease-out hover:-translate-y-0.5 hover:bg-leaf">
                
                Join With Us
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
            </aside>
          </Reveal>
        </div>
      </section>
    </>);

}