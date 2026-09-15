import type { CaseStudy, Testimonial } from '../types/audit';

export const clientLogos = [
'Client logo 1',
'Client logo 2',
'Client logo 3',
'Client logo 4',
'Client logo 5',
'Client logo 6'];


export const caseStudies: CaseStudy[] = [
{
  id: 'northline',
  client: 'Northline Supply',
  sector: 'B2B distribution · 40k SKUs',
  headline: 'A performance and SEO audit recovered 61% of a wasted crawl budget in one quarter.',
  summary:
  'Faceted navigation had generated 1,840 near-duplicate URLs while the mobile catalogue took 5.2 seconds to paint. We sequenced 14 fixes; their two developers shipped them over six weeks. Nothing was rebuilt.',
  services: ['Performance', 'SEO'],
  results: [
  { label: 'Mobile LCP', value: '5.2s → 1.8s' },
  { label: 'Organic sessions', value: '+38%' },
  { label: 'Revenue / session', value: '+22%' }],

  quote: {
    text: 'We had been quoted a replatform. The audit showed the actual problem was fourteen fixes and a week of developer time.',
    author: 'Placeholder Name',
    role: 'Head of Digital, Northline Supply'
  }
},
{
  id: 'ardent',
  client: 'Ardent Health',
  sector: 'Healthcare SaaS',
  headline: 'GA4 was overstating revenue by 94%. Every decision downstream was wrong.',
  summary:
  'A duplicate purchase event had been double-counting orders since migration. We validated all 23 events, rebuilt the GTM layer spec and delivered reporting the finance team could reconcile.',
  services: ['GA4'],
  results: [
  { label: 'Reporting variance', value: '94% → 1.2%' },
  { label: 'Events validated', value: '23 / 23' }]

},
{
  id: 'caldera',
  client: 'Caldera Outdoor',
  sector: 'DTC retail',
  headline: '£9.4k of quarterly ad waste reallocated, CPA down 34%.',
  summary:
  'Performance Max was optimising toward newsletter sign-ups. We corrected the conversion signals, split brand from generic and reallocated budget to the three ad groups already beating target.',
  services: ['Google Ads', 'UI & UX'],
  results: [
  { label: 'Blended CPA', value: '−34%' },
  { label: 'Checkout completion', value: '+19%' }]

}];


export const testimonials: Testimonial[] = [
{
  id: 't1',
  text: 'The report arrived on day six and read like it had been written by someone on our team. Every finding had a number attached to it, so prioritising with engineering took one meeting instead of a month of debate.',
  author: 'Placeholder Name',
  role: 'VP Growth',
  company: 'Placeholder Company',
  service: 'Full-Stack Audit'
},
{
  id: 't2',
  text: 'We stopped arguing about which dashboard to trust. That alone paid for it.',
  author: 'Placeholder Name',
  role: 'Finance Director',
  company: 'Placeholder Company',
  service: 'GA4 Audit'
},
{
  id: 't3',
  text: 'No 60-page PDF of generic best practice. Three redrawn screens and a ranked list of what to test first.',
  author: 'Placeholder Name',
  role: 'Product Lead',
  company: 'Placeholder Company',
  service: 'UI & UX Audit'
},
{
  id: 't4',
  text: 'They found competitors were being cited in seven of ten buying prompts. We had no idea that channel existed.',
  author: 'Placeholder Name',
  role: 'CMO',
  company: 'Placeholder Company',
  service: 'AEO Audit'
}];


export const stats = [
{ value: '240+', label: 'audits delivered since 2019' },
{ value: '1.8s', label: 'average mobile LCP after fixes ship' },
{ value: '£2.1m', label: 'ad spend reallocated in the last 12 months' },
{ value: '6 days', label: 'median time from payment to report' }];