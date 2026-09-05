import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';
import { Blobs } from './Decor';
import { Reveal } from './Reveal';

type Crumb = {label: string;to?: string;};

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs





}: {eyebrow: string;title: string;intro?: string;crumbs: Crumb[];}) {
  return (
    <section className="relative overflow-hidden bg-sagelight pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div className="radial-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <Blobs />
      <div className="relative mx-auto max-w-[1240px] px-6">
        <Reveal>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
              {crumbs.map((crumb, index) =>
              <li key={crumb.label} className="flex items-center gap-1.5">
                  {crumb.to ?
                <Link className="transition-colors duration-150 hover:text-forest" to={crumb.to}>
                      {crumb.label}
                    </Link> :

                <span className="text-ink">{crumb.label}</span>
                }
                  {index < crumbs.length - 1 &&
                <ChevronRightIcon className="h-3.5 w-3.5 text-line" aria-hidden="true" />
                }
                </li>
              )}
            </ol>
          </nav>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="eyebrow mt-8">{eyebrow}</p>
          <h1 className="t-section mt-4 max-w-4xl">{title}</h1>
          {intro && <p className="t-body mt-6 max-w-prose text-muted">{intro}</p>}
        </Reveal>
      </div>
    </section>);

}