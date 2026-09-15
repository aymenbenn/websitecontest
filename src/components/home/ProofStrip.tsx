import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, QuoteIcon } from 'lucide-react';
import { caseStudies, clientLogos, stats, testimonials } from '../../data/proof';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';

export function ProofStrip() {
  const featured = caseStudies[0];
  const quote = testimonials[0];

  return (
    <section className="light-section border-b border-line" aria-labelledby="proof-strip-heading">
      <div className="mx-auto max-w-content px-5 py-20 lg:px-8">
        <h2 id="proof-strip-heading" className="sr-only">
          Results and client proof
        </h2>

        <dl className="grid gap-8 border-b border-line pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) =>
          <div key={s.label}>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-faint">{s.label}</dt>
              <dd className="mt-2 text-[32px] font-semibold tracking-tightest">{s.value}</dd>
            </div>
          )}
        </dl>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <article>
            <p className="font-mono text-[11px] text-accent">{featured.sector}</p>
            <h3 className="mt-3 text-[24px] font-semibold leading-tight tracking-tight md:text-[28px]">
              {featured.headline}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-mute">{featured.summary}</p>
            <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-5">
              {featured.results.map((r) =>
              <div key={r.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-faint">{r.label}</dt>
                  <dd className="mt-1 font-mono text-[17px] tabular-nums text-accent">{r.value}</dd>
                </div>
              )}
            </dl>
            <Link
              to="/proof"
              className="mt-8 inline-flex items-center gap-2 text-sm text-accent transition-colors duration-150 ease-swift hover:text-fg">
              
              Read all three case studies
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>

          <figure className="flex flex-col rounded-lg border border-line bg-panel p-7">
            <QuoteIcon className="h-5 w-5 text-accent" aria-hidden="true" />
            <blockquote className="mt-4 text-[17px] leading-relaxed text-fg">{quote.text}</blockquote>
            <figcaption className="mt-auto flex items-center gap-3 pt-7">
              <ImagePlaceholder
                label={`Headshot — ${quote.author}`}
                className="h-10 w-10 shrink-0 rounded-full"
                compact
                hideLabel />
              
              <span className="text-sm">
                <span className="block font-medium">{quote.author}</span>
                <span className="block text-mute">
                  {quote.role}, {quote.company}
                </span>
              </span>
            </figcaption>
          </figure>
        </div>

        <div className="mt-14 border-t border-line pt-10">
          <p className="font-mono text-[11px] text-faint">Audits delivered for teams at</p>
          <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {clientLogos.map((logo) =>
            <li key={logo}>
                <ImagePlaceholder label={logo} className="h-14 w-full" compact />
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>);

}