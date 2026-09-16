import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Placeholder } from '../Placeholder';
import { HeroSequence } from './HeroSequence';

interface HeroProps {
  variant: 'portrait' | 'editorial';
}

const EASE = [0.23, 1, 0.32, 1] as const;

export function Hero({ variant }: HeroProps) {
  const reduced = useReducedMotion();

  const copy =
  <div className={variant === 'editorial' ? 'mx-auto max-w-[24ch] text-center' : ''}>
      <motion.h1
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0.12 : 0.28, delay: reduced ? 0 : 0.86, ease: EASE }}
      className="font-serif text-[2.5rem] leading-[1.06] tracking-tightish text-ink md:text-6xl lg:text-[4.25rem]">
      
        Someone should be looking after her, too.
      </motion.h1>
      <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: reduced ? 0.06 : 0.96, ease: 'easeOut' }}
      className={`mt-6 font-sans text-base leading-relaxed text-ink-soft md:text-lg ${
      variant === 'editorial' ? 'mx-auto max-w-[46ch]' : 'max-w-[42ch]'}`
      }>
      
        A gift you buy for a new mother. A parcel arrives at her door — and behind it, a service
        that quietly carries her recovery for the months after birth, for as long as she needs it.
      </motion.p>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: reduced ? 0.08 : 1.02, ease: 'easeOut' }}
      className={`mt-9 flex flex-col gap-3 sm:flex-row ${
      variant === 'editorial' ? 'sm:justify-center' : ''}`
      }>
      
        <Link
        to="/gift"
        className="rounded-full bg-plum px-7 py-3.5 text-center font-sans text-sm text-paper transition-colors duration-150 ease-out hover:bg-plum-soft">
        
          Give this gift
        </Link>
        <a
        href="#object"
        className="rounded-full border border-line px-7 py-3.5 text-center font-sans text-sm text-ink transition-colors duration-150 ease-out hover:border-ink/40">
        
          See what arrives
        </a>
      </motion.div>
      <p
      className={`mt-6 font-sans text-xs leading-relaxed text-ink-mute ${
      variant === 'editorial' ? 'mx-auto max-w-[40ch]' : 'max-w-[38ch]'}`
      }>
      
        She decides what she uses, when, and what we are told. You never see any of it.
      </p>
    </div>;


  if (variant === 'editorial') {
    return (
      <section className="border-b border-line bg-canvas">
        <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20 lg:px-12">
          {copy}
          <div className="mt-14 md:mt-20">
            <HeroSequence />
          </div>
        </div>
      </section>);

  }

  return (
    <section className="border-b border-line bg-canvas">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12">
        <div>{copy}</div>
        <div className="relative">
          <Placeholder label="Her, in her own light — window, blanket, no baby-brand styling" ratio="4 / 5" />
          <div className="pointer-events-none absolute -bottom-6 -left-4 w-[78%] md:-bottom-8 md:left-8 lg:-left-10">
            <HeroSequence compact />
          </div>
        </div>
      </div>
    </section>);

}