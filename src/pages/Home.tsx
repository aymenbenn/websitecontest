import React from 'react';
import { Hero, type HeroVariant } from '../components/home/Hero';
import { ValueProp } from '../components/home/ValueProp';
import { ServiceIndex } from '../components/home/ServiceIndex';
import { ProofStrip } from '../components/home/ProofStrip';
import { CtaBand } from '../components/layout/CtaBand';
import { useSeo } from '../hooks/useSeo';

export function Home({ heroVariant }: {heroVariant: HeroVariant;}) {
  useSeo(
    'Website Audits — Performance, SEO, UX, AEO, GA4 & Google Ads | Auditlab',
    'Fixed-price website audits from £440. Performance, SEO, UI & UX, AEO, GA4 and Google Ads — every finding priced, prioritised and delivered in days. Five material findings or your money back.'
  );

  return (
    <>
      <Hero variant={heroVariant} />
      <ValueProp />
      <ServiceIndex />
      <ProofStrip />
      <CtaBand
        heading="Know what to fix by Friday."
        body="Pick an audit, pay, and choose your kick-off slot in under three minutes. If the report does not contain five findings worth acting on, you get a full refund and keep the report." />
      
    </>);

}