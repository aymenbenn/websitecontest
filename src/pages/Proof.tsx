import React from 'react';
import { ArrowRightIcon, QuoteIcon } from 'lucide-react';
import { caseStudies, clientLogos, stats, testimonials } from '../data/proof';
import { ButtonLink } from '../components/ui/Button';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { CtaBand } from '../components/layout/CtaBand';
import { useSeo } from '../hooks/useSeo';

export function Proof() {
  useSeo(
    'Results & Case Studies — Website Audits That Moved Numbers | Auditlab',
    'Case studies and testimonials from 240+ website audits: mobile LCP cut from 5.2s to 1.8s, 94% revenue over-reporting corrected, £9.4k of quarterly ad waste reallocated.'
  );

  const [featured, ...rest] = caseStudies;
  const [heroQuote, ...otherQuotes] = testimonials;

  return (
    <>
      <section className="border-b border-line" aria-labelledby="proof-heading">
        <div className="mx-auto max-w-content px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_auto] lg:items-end">
            <div>
              <p className="font-mono text-[11px] text-mute">
                <span className="text-accent">240 audits</span> · 11 sectors · 4 refunds honoured
              </p>
              <h1
                id="proof-heading"
                className="mt-5 max-w-2xl text-[36px] font-semibold leading-[1.05] tracking-tightest md:text-[50px]">
                
                The only proof that matters is the number that moved afterwards.
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-mute">
                Three clients, their actual starting position, and what changed once their own teams shipped the fixes
                we ranked. No rebuilds, no retainers.
              </p>
            </div>
            <ButtonLink to="/checkout" size="lg" className="shrink-0">
              Buy an audit
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>

          <dl className="mt-14 grid gap-8 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) =>
            <div key={s.label}>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-faint">{s.label}</dt>
                <dd className="mt-2 text-[32px] font-semibold tracking-tightest">{s.value}</dd>
              </div>
            )}
          </dl>
        </div>
      </section>

      <section className="light-section border-b border-[#deded7] bg-[#f5f5f0] text-[#11161b]" aria-label="Clients">
        <div className="mx-auto max-w-content px-5 py-12 lg:px-8">
          <p className="font-mono text-[11px] text-faint">Audits delivered for teams at</p>
          <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {clientLogos.map((logo) =>
            <li key={logo}>
                <ImagePlaceholder label={logo} className="h-16 w-full" compact />
              </li>
            )}
          </ul>
        </div>
      </section>

      <section className="light-section border-b border-[#deded7] bg-white text-[#11161b]" aria-labelledby="cases-heading">
        <div className="mx-auto max-w-content px-5 py-20 lg:px-8">
          <h2 id="cases-heading" className="sr-only">
            Case studies
          </h2>

          <article className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
            <div>
              <p className="font-mono text-[11px] text-accent">
                {featured.client} · {featured.sector}
              </p>
              <h3 className="mt-4 text-[28px] font-semibold leading-[1.1] tracking-tightest md:text-[36px]">
                {featured.headline}
              </h3>
              <p className="mt-5 text-[15px] leading-relaxed text-mute">{featured.summary}</p>
              <dl className="mt-8 grid gap-6 border-t border-line pt-7 sm:grid-cols-3">
                {featured.results.map((r) =>
                <div key={r.label}>
                    <dt className="font-mono text-[10px] uppercase tracking-wider text-faint">{r.label}</dt>
                    <dd className="mt-1.5 font-mono text-[18px] tabular-nums text-accent">{r.value}</dd>
                  </div>
                )}
              </dl>
              {featured.quote &&
              <blockquote className="mt-8 border-l-2 border-accent pl-5 text-[15px] leading-relaxed text-fg">
                  “{featured.quote.text}”
                  <footer className="mt-3 font-mono text-[11px] text-faint">
                    {featured.quote.author} — {featured.quote.role}
                  </footer>
                </blockquote>
              }
            </div>
            <ImagePlaceholder
              label={`${featured.client} — before / after screenshot`}
              spec="1200 × 1000 · PNG or WebP"
              className="aspect-[6/5] w-full" />
            
          </article>

          <div className="mt-16 grid gap-10 border-t border-line pt-14 md:grid-cols-2 md:gap-12">
            {rest.map((cs) =>
            <article key={cs.id} className="flex flex-col">
                <ImagePlaceholder
                label={`${cs.client} — result screenshot`}
                spec="800 × 500 · PNG or WebP"
                className="aspect-[8/5] w-full" />
              
                <p className="mt-6 font-mono text-[11px] text-accent">
                  {cs.client} · {cs.sector}
                </p>
                <h3 className="mt-3 text-[20px] font-semibold leading-snug tracking-tight">{cs.headline}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{cs.summary}</p>
                <dl className="mt-auto flex flex-wrap gap-x-10 gap-y-4 pt-7">
                  {cs.results.map((r) =>
                <div key={r.label}>
                      <dt className="font-mono text-[10px] uppercase tracking-wider text-faint">{r.label}</dt>
                      <dd className="mt-1 font-mono text-[16px] tabular-nums text-accent">{r.value}</dd>
                    </div>
                )}
                </dl>
              </article>
            )}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-panel/40" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-content px-5 py-20 lg:px-8">
          <h2
            id="testimonials-heading"
            className="max-w-lg text-[30px] font-semibold leading-[1.15] tracking-tightest md:text-[38px]">
            
            What clients say once the report lands.
          </h2>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <figure className="flex flex-col">
              <QuoteIcon className="h-6 w-6 text-accent" aria-hidden="true" />
              <blockquote className="mt-5 text-[22px] font-medium leading-snug tracking-tight md:text-[26px]">
                {heroQuote.text}
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-8">
                <ImagePlaceholder
                  label={`Headshot — ${heroQuote.author}`}
                  className="h-11 w-11 shrink-0 rounded-full"
                  compact
                  hideLabel />
                
                <span className="text-sm">
                  <span className="block font-medium">{heroQuote.author}</span>
                  <span className="block text-mute">
                    {heroQuote.role}, {heroQuote.company} · {heroQuote.service}
                  </span>
                </span>
              </figcaption>
            </figure>

            <ul className="divide-y divide-line border-y border-line">
              {otherQuotes.map((t) =>
              <li key={t.id} className="py-6 first:pt-0 last:pb-0">
                  <figure>
                    <blockquote className="text-[15px] leading-relaxed text-fg">{t.text}</blockquote>
                    <figcaption className="mt-3 font-mono text-[11px] text-faint">
                      {t.author}, {t.role} · {t.service}
                    </figcaption>
                  </figure>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Your numbers next."
        body="Every case study above started with one fixed-price audit and a ranked list. Pick yours and we start this week." />
      
    </>);

}