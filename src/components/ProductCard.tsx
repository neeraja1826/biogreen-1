import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import type { ProductCategory } from '../data/site';

export function ProductCard({ category, badge }: {category: ProductCategory;badge: string;}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-4xl border border-line bg-white shadow-soft transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-1.5 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden bg-sagelight">
        <img
          src={category.image}
          alt={category.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.05]" />
        
        <span className="absolute left-5 top-5 rounded-full bg-white/85 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-botanical backdrop-blur">
          {badge}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-xl font-bold text-ink">{category.title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          Our company manufactures a range of compostable garbage bags and carry bags, all certified as
          eco-friendly by the Pollution Control Board.
        </p>
        <Link
          to={`/products/${category.slug}`}
          className="mt-auto inline-flex items-center gap-2 pt-7 text-[15px] font-semibold text-forest transition-colors duration-150 hover:text-botanical">
          
          Learn More
          <ArrowRightIcon
            className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-1"
            aria-hidden="true" />
          
        </Link>
      </div>
    </article>);

}