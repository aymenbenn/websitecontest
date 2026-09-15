import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon, CalendarIcon, FileTextIcon } from 'lucide-react';
import { ButtonLink } from '../ui/Button';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';
import { MetricBar } from '../ui/Readout';

export type HeroVariant = 'readout' | 'statement';

const heroMetrics = [
{ label: 'LCP', value: 38, note: 'median audited site: 4.1s on mobile' },
{ label: 'Tracking accuracy', value: 52, note: '1 in 2 GA4 properties mis-report revenue' },
{ label: 'Wasted ad spend', value: 26, note: 'median share of budget on non-converting terms' }];


export function Hero({ variant = 'readout' }: {variant?: HeroVariant;}) {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? undefined : { opacity: 0, y: 12 },
    animate: reduce ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.3, delay, ease: [0.23, 1, 0.32, 1] as const }
  });

  return (
    <section className="relative overflow-hidden border-b border-line" aria-labelledby="hero-heading">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className={`relative mx-auto max-w-content px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24 ${
        variant === 'readout' ? 'grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center' : ''}`
        }>
        
        <div className={variant === 'statement' ? 'mx-auto max-w-3xl text-center' : ''}>
          <motion.p
            {...rise(0)}
            className={`font-mono text-[11px] leading-relaxed text-mute ${
            variant === 'statement' ? 'mx-auto' : ''}`
            }>
            
            <span className="text-accent">240 audits since 2019</span> · median 6 days from payment to report
          </motion.p>

          <motion.h1
            {...rise(0.04)}
            id="hero-heading"
            className="mt-5 text-[38px] font-semibold leading-[1.05] tracking-tightest sm:text-[52px] lg:text-[60px]">
            
            Find out exactly what your website is costing you.
          </motion.h1>

          <motion.p
            {...rise(0.08)}
            className={`mt-6 text-[17px] leading-relaxed text-mute ${
            variant === 'statement' ? 'mx-auto max-w-2xl' : 'max-w-xl'}`
            }>
            
            Six fixed-price audits — performance, SEO, UI &amp; UX, AEO, GA4 and Google Ads. Every finding comes with
            the number behind it, the fix, and what that fix is worth. Buy today, report in your inbox this week.
          </motion.p>

          <motion.div
            {...rise(0.12)}
            className={`mt-9 flex flex-col gap-3 sm:flex-row ${variant === 'statement' ? 'sm:justify-center' : ''}`}>
            
            <ButtonLink to="/checkout" size="lg">
              Buy an audit — from £440
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink to="/checkout#schedule" variant="outline" size="lg">
              <CalendarIcon className="h-4 w-4" aria-hidden="true" />
              Book a 15-min scoping call
            </ButtonLink>
          </motion.div>

          <motion.p
            {...rise(0.16)}
            className={`mt-5 font-mono text-[11px] text-faint ${variant === 'statement' ? 'mx-auto' : ''}`}>
            
            Five material findings or your money back · No retainer pitch
          </motion.p>
        </div>

        {variant === 'readout' ?
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="rounded-lg border border-line bg-panel/90 p-3 shadow-2xl shadow-black/40 backdrop-blur">
          
            <div className="flex items-center gap-2 px-1 pb-3">
              <FileTextIcon className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              <span className="font-mono text-[11px] text-mute">sample-report / benchmarks.pdf</span>
              <span className="ml-auto font-mono text-[10px] text-faint">p. 4 of 38</span>
            </div>
            <ImagePlaceholder
            label="Sample report spread"
            spec="1280 × 800 · PNG or WebP"
            className="aspect-[16/10] w-full" />
          
            <div className="mt-4 grid gap-5 border-t border-line px-1 pt-4 sm:grid-cols-3">
              {heroMetrics.map((m) =>
            <MetricBar key={m.label} label={m.label} value={m.value} note={m.note} />
            )}
            </div>
          </motion.div> :

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.14, ease: [0.23, 1, 0.32, 1] }}
          className="mx-auto mt-16 max-w-4xl rounded-lg border border-line bg-panel/90 p-3">
          
            <ImagePlaceholder
            label="Sample report spread"
            spec="1600 × 900 · PNG or WebP"
            className="aspect-[16/9] w-full" />
          
          </motion.div>
        }
      </div>
    </section>);

}