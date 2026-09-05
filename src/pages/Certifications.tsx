import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, AwardIcon, BadgeCheckIcon, FileTextIcon, RecycleIcon, ShieldCheckIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { Blobs, WaveDivider } from '../components/Decor';
import { certifications, certificationsSection } from '../data/site';

const icons = [ShieldCheckIcon, FileTextIcon, RecycleIcon, BadgeCheckIcon, AwardIcon];

export function Certifications() {
  return (
    <>
      <PageHero
        eyebrow={certificationsSection.eyebrow}
        title={certificationsSection.heading}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Certificates' }]} />
      
      <WaveDivider to="ivory" />

      <section className="relative overflow-hidden bg-ivory py-24 sm:py-32" aria-labelledby="certs-timeline">
        <Blobs />
        <div className="relative mx-auto max-w-[1000px] px-6">
          <h2 id="certs-timeline" className="sr-only">
            {certificationsSection.heading}
          </h2>

          <ol className="relative space-y-8 border-l border-line pl-8 sm:pl-12">
            {certifications.map((certification, index) => {
              const Icon = icons[index % icons.length];
              return (
                <Reveal as="li" key={certification.slug} delay={index * 0.05} className="relative">
                  <span
                    className="absolute -left-[calc(2rem+1px)] top-8 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-forest bg-ivory sm:-left-[calc(3rem+1px)]"
                    aria-hidden="true" />
                  
                  <article className="glass rounded-4xl p-8 shadow-soft transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-1 hover:shadow-lift">
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="grid h-14 w-14 place-items-center rounded-3xl bg-mint text-botanical">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-ink">{certification.name}</h3>
                        <p className="mt-1 text-sm text-forest">{certification.date}</p>
                      </div>
                    </div>
                    <h4 className="mt-7 text-lg font-semibold text-ink">{certification.title}</h4>
                    <p className="mt-3 text-[17px] leading-relaxed text-muted">{certification.body}</p>
                    <Link
                      to={`/certifications/${certification.slug}`}
                      className="mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-forest transition-colors duration-150 hover:text-botanical">
                      
                      Learn More
                      <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </article>
                </Reveal>);

            })}
          </ol>
        </div>
      </section>
    </>);

}