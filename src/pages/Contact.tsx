import React, { useState } from 'react';
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SendIcon,
  TwitterIcon } from
'lucide-react';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { Blobs, WaveDivider } from '../components/Decor';
import { company, contactPage } from '../data/site';

const socials = [
{ label: 'Facebook', Icon: FacebookIcon },
{ label: 'Twitter', Icon: TwitterIcon },
{ label: 'Instagram', Icon: InstagramIcon },
{ label: 'LinkedIn', Icon: LinkedinIcon }];


type Field = 'name' | 'email' | 'phone' | 'message';

const labels: Record<Field, string> = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  message: 'Message'
};

export function Contact() {
  const [values, setValues] = useState<Record<Field, string>>({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [sent, setSent] = useState(false);

  const update = (field: Field, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors: Partial<Record<Field, string>> = {};
    if (!values.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    nextErrors.email = 'Please enter a valid email address.';
    if (!values.message.trim()) nextErrors.message = 'Please enter your message.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSent(true);
      setValues({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={contactPage.heading}
        intro={contactPage.intro}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]} />
      
      <WaveDivider to="ivory" />

      <section className="relative overflow-hidden bg-ivory py-24 sm:py-32" aria-labelledby="contact-form">
        <Blobs />
        <div className="relative mx-auto grid max-w-[1240px] items-start gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <img
              src={contactPage.illustration}
              alt="Illustration of an envelope, map pin and leaf"
              loading="lazy"
              decoding="async"
              className="float-slow w-full rounded-4xl" />
            

            <ul className="mt-10 space-y-4">
              <li className="flex items-start gap-4 rounded-3xl border border-line bg-white p-6 shadow-soft">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-mint text-botanical">
                  <MapPinIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="text-[16px] leading-relaxed text-ink">{company.address}</p>
              </li>
              <li className="flex items-start gap-4 rounded-3xl border border-line bg-white p-6 shadow-soft">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-mint text-botanical">
                  <MailIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <a className="break-all text-[16px] text-ink hover:text-forest" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-4 rounded-3xl border border-line bg-white p-6 shadow-soft">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-mint text-botanical">
                  <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="space-y-1">
                  {company.phones.map((phone) =>
                  <a key={phone} className="block text-[16px] text-ink hover:text-forest" href={`tel:${phone}`}>
                      {phone}
                    </a>
                  )}
                </span>
              </li>
              <li className="flex items-start gap-4 rounded-3xl border border-line bg-white p-6 shadow-soft">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-mint text-botanical">
                  <ClockIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="text-[16px] text-ink">
                  <p className="font-semibold">Business Hours</p>
                  <p className="mt-1 text-muted">Monday – Saturday · 9:00 AM – 6:00 PM</p>
                  <p className="text-muted">Sunday · Closed</p>
                </div>
              </li>
            </ul>

            <ul className="mt-8 flex items-center gap-3">
              {socials.map(({ label, Icon }) =>
              <li key={label}>
                  <button
                  type="button"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-2xl border border-line bg-white text-botanical shadow-soft transition-[background-color,transform] duration-150 ease-out hover:-translate-y-0.5 hover:bg-mint">
                  
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </button>
                </li>
              )}
            </ul>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="rounded-4xl border border-line bg-white p-8 shadow-soft sm:p-10">
              <h2 id="contact-form" className="t-sub">
                {contactPage.heading}
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-muted">{contactPage.intro}</p>

              <form className="mt-9 space-y-6" onSubmit={onSubmit} noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  {(['name', 'email'] as Field[]).map((field) =>
                  <FloatingField
                    key={field}
                    field={field}
                    value={values[field]}
                    error={errors[field]}
                    onChange={update} />

                  )}
                </div>
                <FloatingField field="phone" value={values.phone} error={errors.phone} onChange={update} />
                <FloatingField
                  field="message"
                  value={values.message}
                  error={errors.message}
                  onChange={update}
                  multiline />
                

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-4 text-[17px] font-semibold text-white shadow-soft transition-[background-color,transform] duration-150 ease-out hover:-translate-y-0.5 hover:bg-leaf">
                  
                  {contactPage.submit}
                  <SendIcon className="h-4 w-4" aria-hidden="true" />
                </button>
                <p className="min-h-[24px] text-[15px] text-forest" role="status">
                  {sent ? `Thank you. ${contactPage.submit} received.` : ''}
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pb-24 sm:pb-32" aria-label="Location map">
        <div className="mx-auto max-w-[1240px] px-6">
          <Reveal>
            <div className="overflow-hidden rounded-4xl border border-line shadow-soft">
              <iframe
                title="Bio Green Solutions location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=80.14%2C13.16%2C80.24%2C13.24&layer=mapnik"
                className="h-[420px] w-full border-0"
                loading="lazy" />
              
            </div>
          </Reveal>
        </div>
      </section>
    </>);

}

function FloatingField({
  field,
  value,
  error,
  onChange,
  multiline = false






}: {field: Field;value: string;error?: string;onChange: (field: Field, value: string) => void;multiline?: boolean;}) {
  const id = `contact-${field}`;
  const shared =
  'peer w-full rounded-3xl border bg-sagelight px-5 pb-3 pt-7 text-[16px] text-ink placeholder-transparent transition-colors duration-150 focus:bg-white';
  const borderClass = error ? 'border-red-400' : 'border-line focus:border-forest';

  return (
    <div className="relative">
      {multiline ?
      <textarea
        id={id}
        rows={5}
        placeholder={labels[field]}
        value={value}
        onChange={(event) => onChange(field, event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${shared} ${borderClass} resize-y`} /> :


      <input
        id={id}
        type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
        placeholder={labels[field]}
        value={value}
        onChange={(event) => onChange(field, event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${shared} ${borderClass}`} />

      }
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-5 top-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-forest transition-all duration-150 ease-out peer-placeholder-shown:top-5 peer-placeholder-shown:text-[16px] peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-muted peer-focus:top-2.5 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-[0.1em] peer-focus:text-forest">
        
        {labels[field]}
      </label>
      {error &&
      <p id={`${id}-error`} className="mt-2 pl-5 text-sm text-red-500">
          {error}
        </p>
      }
    </div>);

}