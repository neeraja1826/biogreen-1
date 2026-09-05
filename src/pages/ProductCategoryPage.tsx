import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { Blobs, WaveDivider } from '../components/Decor';
import { aboutHome, aboutPage, productCategories, whatWeDo } from '../data/site';

export function ProductCategoryPage() {
  const { slug } = useParams();
  const category = productCategories.find((item) => item.slug === slug) ?? productCategories[0];
  const others = productCategories.filter((item) => item.slug !== category.slug);

  return (
    <>
      <PageHero
        eyebrow={whatWeDo.eyebrow}
        title={category.title}
        crumbs={[
        { label: 'Home', to: '/' },
        { label: 'Products', to: '/products' },
        { label: category.title }]
        } />
      
      <WaveDivider to="ivory" />

      <section className="relative overflow-hidden bg-ivory py-24 sm:py-32" aria-labelledby="category-detail">
        <Blobs />
        <div className="relative mx-auto grid max-w-[1240px] items-start gap-16 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="overflow-hidden rounded-4xl border border-line bg-white shadow-soft">
              <img
                src={category.image}
                alt={category.title}
                loading="lazy"
                decoding="async"
                className="w-full object-cover" />
              
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 id="category-detail" className="t-section">
              {category.title}
            </h2>
            <p className="t-body mt-6 max-w-prose text-muted">{aboutHome.tabs[0].body}</p>

            <div className="glass mt-9 rounded-4xl p-8 shadow-soft">
              <h3 className="t-sub">{aboutPage.manufacturingTitle}</h3>
              <div className="mt-5 space-y-4">
                {aboutPage.manufacturingBody.map((paragraph) =>
                <p key={paragraph} className="text-[17px] leading-relaxed text-muted">
                    {paragraph}
                  </p>
                )}
              </div>
            </div>

            <ul className="mt-9 space-y-4">
              {aboutPage.values.map((value) =>
              <li key={value} className="flex items-start gap-3.5">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint text-botanical">
                    <CheckIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <p className="text-[16px] leading-relaxed text-muted">{value}</p>
                </li>
              )}
            </ul>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-4 text-[17px] font-semibold text-white shadow-soft transition-[background-color,transform] duration-150 ease-out hover:-translate-y-0.5 hover:bg-leaf">
              
              Join With Us
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-28" aria-labelledby="category-more">
        <div className="mx-auto max-w-[1240px] px-6">
          <Reveal>
            <h2 id="category-more" className="t-sub">
              {whatWeDo.heading}
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {others.map((item, index) =>
            <Reveal as="li" key={item.slug} delay={index * 0.04}>
                <Link
                to={`/products/${item.slug}`}
                className="group flex h-full items-center gap-5 rounded-4xl border border-line bg-sagelight p-5 transition-[background-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-1 hover:bg-white hover:shadow-lift">
                
                  <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-20 w-20 shrink-0 rounded-3xl object-cover" />
                
                  <span className="font-semibold text-ink">{item.title}</span>
                  <ArrowRightIcon
                  className="ml-auto h-5 w-5 shrink-0 text-forest transition-transform duration-150 ease-out group-hover:translate-x-1"
                  aria-hidden="true" />
                
                </Link>
              </Reveal>
            )}
          </ul>
        </div>
      </section>
    </>);

}