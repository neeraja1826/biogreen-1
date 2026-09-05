import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FacebookIcon,
  InstagramIcon,
  LeafIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon } from
'lucide-react';
import { certifications, company, footerHeadings, productCategories } from '../data/site';

const quickLinks = [
{ label: 'Home', to: '/' },
{ label: 'About Us', to: '/about' },
{ label: 'Manufacturing', to: '/manufacturing' },
{ label: 'Sustainability', to: '/sustainability' },
{ label: 'Our Gallery', to: '/gallery' },
{ label: 'Contact Us', to: '/contact' }];


const socials = [
{ label: 'Facebook', Icon: FacebookIcon },
{ label: 'Twitter', Icon: TwitterIcon },
{ label: 'Instagram', Icon: InstagramIcon },
{ label: 'LinkedIn', Icon: LinkedinIcon }];


export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-botanical text-white/75">
      <div
        className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-olive/40 blur-3xl"
        aria-hidden="true" />
      
      <div className="relative mx-auto max-w-[1240px] px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-mint text-botanical">
                <LeafIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-extrabold text-white">Bio Green Solutions</span>
            </Link>
            <p className="mt-5 max-w-sm text-[17px] leading-relaxed">
              Building a sustainable future one bag at a time
            </p>

            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-mint">Newsletter</h3>
              <form
                className="mt-4 flex max-w-sm flex-col gap-3 sm:flex-row"
                onSubmit={(event) => {
                  event.preventDefault();
                  if (email.trim()) setSubscribed(true);
                }}>
                
                <label className="sr-only" htmlFor="newsletter-email">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email address"
                  className="min-w-0 flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-[15px] text-white placeholder:text-white/50 focus:border-mint" />
                
                <button
                  type="submit"
                  className="rounded-full bg-mint px-5 py-3 text-[15px] font-semibold text-botanical transition-[background-color,transform] duration-150 ease-out hover:-translate-y-0.5 hover:bg-white">
                  
                  Subscribe
                </button>
              </form>
              <p className="mt-3 min-h-[20px] text-sm text-mint" role="status">
                {subscribed ? 'Thank you for subscribing.' : ''}
              </p>
            </div>
          </div>

          <nav aria-label="Quick links">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-mint">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-[15px]">
              {quickLinks.map((link) =>
              <li key={link.to}>
                  <Link className="transition-colors duration-150 hover:text-white" to={link.to}>
                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          <nav aria-label="Products and services">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-mint">
              {footerHeadings.services}
            </h3>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <Link className="transition-colors duration-150 hover:text-white" to="/services">
                  {footerHeadings.services}
                </Link>
              </li>
              {productCategories.map((category) =>
              <li key={category.slug}>
                  <Link
                  className="transition-colors duration-150 hover:text-white"
                  to={`/products/${category.slug}`}>
                  
                    {category.title}
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          <div>
            <nav aria-label="Certifications">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-mint">
                {footerHeadings.certifications}
              </h3>
              <ul className="mt-5 space-y-3 text-[15px]">
                {certifications.map((certification) =>
                <li key={certification.slug}>
                    <Link
                    className="transition-colors duration-150 hover:text-white"
                    to={`/certifications/${certification.slug}`}>
                    
                      {certification.name}
                    </Link>
                  </li>
                )}
              </ul>
            </nav>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-mint">Contact</h3>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="mt-1 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                <span>{company.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MailIcon className="mt-1 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                <a className="break-all hover:text-white" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </li>
              {company.phones.map((phone) =>
              <li key={phone} className="flex items-start gap-2.5">
                  <PhoneIcon className="mt-1 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                  <a className="hover:text-white" href={`tel:${phone}`}>
                    {phone}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/20 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm">© {new Date().getFullYear()} Bio Green Solutions. All rights reserved.</p>
          <ul className="flex items-center gap-3">
            {socials.map(({ label, Icon }) =>
            <li key={label}>
                <button
                type="button"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-2xl border border-white/20 bg-white/10 text-white/80 transition-[background-color,color,transform] duration-150 ease-out hover:-translate-y-0.5 hover:bg-mint hover:text-botanical">
                
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </footer>);

}