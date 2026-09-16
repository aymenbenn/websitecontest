import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/landing/Hero';
import { TheObject } from '../components/landing/TheObject';
import { DataForward } from '../components/landing/DataForward';
import { CareBalance } from '../components/landing/CareBalance';
import { Packages } from '../components/landing/Packages';
import { Placeholder } from '../components/Placeholder';

interface LandingProps {
  heroVariant: 'portrait' | 'editorial';
}

export function Landing({ heroVariant }: LandingProps) {
  return (
    <main>
      <Hero variant={heroVariant} />
      <TheObject />
      <DataForward />
      <CareBalance />
      <Packages />

      <section id="care" className="border-b border-line bg-canvas">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-24 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <h2 className="max-w-[28ch] font-serif text-3xl leading-[1.1] tracking-tightish text-ink md:text-4xl">
                The care is delivered by people who do this for a living.
              </h2>
              <p className="mt-6 max-w-readable font-sans text-base leading-relaxed text-ink-soft">
                Postnatal nurses, lactation consultants, pelvic health physiotherapists and
                perinatal therapists, all licensed in her area and all paid properly. Her care lead
                is not a chatbot and not a rota — it is one named person who stays.
              </p>
              <Link
                to="/gift"
                className="mt-8 inline-block rounded-full border border-ink/20 px-6 py-3 font-sans text-sm text-ink transition-colors duration-150 ease-out hover:border-ink/50">
                
                Start a gift
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              <Placeholder label="Care lead portrait" ratio="3 / 4" />
              <Placeholder label="Physiotherapist" ratio="3 / 4" />
              <Placeholder label="Night nurse" ratio="3 / 4" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28 lg:px-12">
          <div className="max-w-[34ch]">
            <h2 className="font-serif text-3xl leading-[1.08] tracking-tightish text-paper md:text-4xl lg:text-[3rem]">
              Buy her the months, not the moment.
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-shell/80">
              One purchase. Six steps. Her circle can add to it afterwards, and she decides what any
              of it becomes.
            </p>
            <Link
              to="/gift"
              className="mt-9 inline-block rounded-full bg-paper px-7 py-3.5 font-sans text-sm text-ink transition-colors duration-150 ease-out hover:bg-shell">
              
              Give this gift
            </Link>
          </div>
        </div>
      </section>
    </main>);

}