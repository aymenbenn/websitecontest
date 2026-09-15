import type { Service } from '../types/audit';

export const services: Service[] = [
{
  id: 'performance',
  slug: 'performance',
  name: 'Website Performance Analysis',
  abbr: 'PERF',
  tagline: 'Every wasted millisecond, traced to the line of code that caused it.',
  problem:
  'Slow pages quietly cap your conversion rate. We measure real user timings, then hand you a prioritised fix list with the expected second-by-second gain of each one.',
  icon: 'gauge',
  benefits: [
  'Core Web Vitals broken down by template, device and country',
  'Request waterfall with render-blocking and third-party cost attributed per script',
  'Fix list ranked by seconds saved against engineering effort'],

  findings: [
  {
    label: 'Hero image served uncompressed',
    detail: 'A 2.4 MB PNG loads before any text paints on mobile. WebP at the same quality is 180 KB.',
    severity: 'critical',
    metric: 'LCP 4.8s → 1.9s'
  },
  {
    label: 'Four analytics tags loading synchronously',
    detail: 'Tag manager blocks the main thread for 610 ms before your navigation becomes interactive.',
    severity: 'warning',
    metric: 'TBT −610ms'
  },
  {
    label: 'No font-display strategy',
    detail: 'Headlines swap 900 ms after paint, shifting the entire hero and costing layout stability.',
    severity: 'warning',
    metric: 'CLS 0.24 → 0.02'
  }],

  readout: [
  { label: 'LCP', value: 72, unit: 's', target: '4.8s / target 2.5s' },
  { label: 'CLS', value: 88, unit: '', target: '0.24 / target 0.1' },
  { label: 'TBT', value: 61, unit: 'ms', target: '610ms / target 200ms' }],

  tiers: [
  {
    id: 'perf-snapshot',
    name: 'Snapshot',
    price: 490,
    turnaround: '3 working days',
    summary: 'One template, one market. The fastest way to know whether speed is actually your problem.',
    includes: [
    'Lab + field data for 1 key template',
    'Top 10 prioritised fixes',
    '12-page PDF report',
    '30-minute walkthrough call']

  },
  {
    id: 'perf-deep',
    name: 'Deep Dive',
    price: 1290,
    turnaround: '7 working days',
    summary: 'Site-wide, multi-device, with code-level diffs your developers can apply the same week.',
    includes: [
    'Up to 8 templates across mobile and desktop',
    'Waterfall + bundle analysis with third-party cost table',
    'Code-level recommendations and example diffs',
    'Re-test 30 days after your fixes ship',
    '60-minute engineering handover'],

    popular: true
  }]

},
{
  id: 'seo',
  slug: 'seo',
  name: 'SEO Audit',
  abbr: 'SEO',
  tagline: 'Technical, content and authority gaps in one ranked backlog.',
  problem:
  'Most sites lose traffic to a handful of structural mistakes, not to a lack of blog posts. We find which pages Google can reach, trust and rank — and which are cannibalising each other.',
  icon: 'search',
  benefits: [
  'Full crawl with index bloat, redirect chains and canonical conflicts mapped',
  'Keyword-to-page matching that exposes cannibalisation and orphan content',
  'Backlink and internal-link audit with concrete link targets'],

  findings: [
  {
    label: '1,840 filter URLs indexed',
    detail: 'Faceted navigation generates near-duplicate pages that dilute crawl budget across the catalogue.',
    severity: 'critical',
    metric: '68% of index wasted'
  },
  {
    label: 'Three pages targeting "crm software"',
    detail: 'Your strongest page ranks 14th while two thinner pages split its authority.',
    severity: 'warning',
    metric: 'Pos. 14 → est. 6'
  },
  {
    label: 'Service pages 2 clicks from nowhere',
    detail: 'High-intent pages are only reachable from the footer, so internal equity never reaches them.',
    severity: 'opportunity',
    metric: '+28 internal links'
  }],

  readout: [
  { label: 'Indexable', value: 32, unit: '%', target: '1,840 of 2,710 URLs wasted' },
  { label: 'Crawl depth', value: 45, unit: '', target: 'avg. 5.2 clicks to key pages' },
  { label: 'Intent match', value: 58, unit: '%', target: '42% of demand unaddressed' }],

  tiers: [
  {
    id: 'seo-snapshot',
    name: 'Snapshot',
    price: 590,
    turnaround: '4 working days',
    summary: 'Technical health plus your top 50 keywords, so you know where the ceiling is.',
    includes: [
    'Crawl of up to 1,000 URLs',
    'Indexation and canonical review',
    'Top 50 keyword gap analysis',
    '30-minute walkthrough call']

  },
  {
    id: 'seo-deep',
    name: 'Deep Dive',
    price: 1690,
    turnaround: '10 working days',
    summary: 'Technical, content and off-site in one sequenced 90-day backlog.',
    includes: [
    'Crawl of up to 25,000 URLs',
    'Content cannibalisation and pruning plan',
    'Backlink profile and competitor gap',
    'Structured data and log-file review',
    '90-day prioritised roadmap + 60-minute handover'],

    popular: true
  }]

},
{
  id: 'uiux',
  slug: 'ui-ux',
  name: 'UI & UX Audit',
  abbr: 'UI/UX',
  tagline: 'Where people hesitate, backtrack and leave — with the fix drawn, not described.',
  problem:
  'Your funnel is not leaking evenly. We review the real journey against behavioural data and heuristics, then redraw the three screens doing the most damage.',
  icon: 'layout',
  benefits: [
  'Heuristic review of every step in your primary conversion flow',
  'Session and form analytics read alongside the interface, not separately',
  'Redesigned wireframes for the three highest-impact screens'],

  findings: [
  {
    label: 'Checkout asks for 14 fields',
    detail: 'Six are optional but unmarked. Field-level drop-off peaks on "company VAT".',
    severity: 'critical',
    metric: '41% form abandon'
  },
  {
    label: 'Primary CTA below the fold on mobile',
    detail: 'On a 390px viewport the buy button sits 1.4 screens down, under three trust badges.',
    severity: 'critical',
    metric: '−2.1% CVR est.'
  },
  {
    label: 'Error states appear on submit only',
    detail: 'Users discover all validation problems at once, after investing three minutes.',
    severity: 'warning',
    metric: '2.3 retries avg.'
  }],

  readout: [
  { label: 'Flow completion', value: 41, unit: '%', target: '59% abandon before payment' },
  { label: 'Task success', value: 64, unit: '%', target: '9 of 14 usability tasks passed' },
  { label: 'Accessibility', value: 55, unit: '', target: '23 WCAG AA violations' }],

  tiers: [
  {
    id: 'uiux-snapshot',
    name: 'Snapshot',
    price: 690,
    turnaround: '4 working days',
    summary: 'One flow reviewed end to end, annotated screen by screen.',
    includes: [
    'Heuristic review of 1 conversion flow',
    'Annotated screenshots with severity ratings',
    'Accessibility quick-pass (WCAG AA)',
    '30-minute walkthrough call']

  },
  {
    id: 'uiux-deep',
    name: 'Deep Dive',
    price: 1890,
    turnaround: '10 working days',
    summary: 'Whole-journey review with redesigned screens and a testable hypothesis backlog.',
    includes: [
    'Up to 4 flows across mobile and desktop',
    'Behavioural data review (heatmaps, recordings, form analytics)',
    'High-fidelity redesign of 3 key screens',
    'Full WCAG AA report',
    'A/B test backlog with expected uplift + 60-minute handover'],

    popular: true
  }]

},
{
  id: 'aeo',
  slug: 'aeo',
  name: 'AEO Audit',
  abbr: 'AEO',
  tagline: 'How you appear when the answer engine answers instead of listing.',
  problem:
  'ChatGPT, Perplexity, Gemini and AI Overviews now sit between you and your buyer. We test what they say about you, where they got it, and how to change it.',
  icon: 'bot',
  benefits: [
  'Live prompt testing across the major answer engines for your category',
  'Citation-source mapping: which pages and third parties get quoted instead of you',
  'Entity, schema and answer-format fixes that make your content quotable'],

  findings: [
  {
    label: 'Competitor cited in 7 of 10 buying prompts',
    detail: 'Their comparison page is structured as a direct answer; yours is a 2,400-word narrative.',
    severity: 'critical',
    metric: '11% share of voice'
  },
  {
    label: 'No organisation entity resolved',
    detail: 'Missing sameAs and Organization schema means engines cannot confidently identify your brand.',
    severity: 'warning',
    metric: '0 knowledge panel'
  },
  {
    label: 'Pricing answered from a 2023 review site',
    detail: 'Because your pricing page is JS-rendered, engines quote stale third-party numbers.',
    severity: 'critical',
    metric: '3 wrong facts cited'
  }],

  readout: [
  { label: 'Share of voice', value: 11, unit: '%', target: '10 category prompts tested' },
  { label: 'Citable pages', value: 24, unit: '%', target: '9 of 38 pages answer-shaped' },
  { label: 'Entity clarity', value: 30, unit: '', target: 'Organization schema absent' }],

  tiers: [
  {
    id: 'aeo-snapshot',
    name: 'Snapshot',
    price: 540,
    turnaround: '4 working days',
    summary: 'Ten buying-intent prompts tested across four engines, with your current standing documented.',
    includes: [
    '10 prompts × 4 answer engines',
    'Share-of-voice and citation source table',
    'Schema and entity quick-fixes',
    '30-minute walkthrough call']

  },
  {
    id: 'aeo-deep',
    name: 'Deep Dive',
    price: 1490,
    turnaround: '9 working days',
    summary: 'Full category prompt set, competitor teardown and an answer-shaped content plan.',
    includes: [
    '40 prompts × 5 answer engines, re-run at day 30',
    'Competitor citation teardown',
    'Answer-shaped content rewrite plan for 10 pages',
    'Structured data and entity implementation spec',
    '60-minute handover'],

    popular: true
  }]

},
{
  id: 'ga4',
  slug: 'ga4',
  name: 'GA4 Audit',
  abbr: 'GA4',
  tagline: 'Before you trust another number, find out which ones are wrong.',
  problem:
  'Most GA4 properties were migrated in a hurry and never verified. We validate every event, conversion and attribution setting so your reporting stops disagreeing with your bank account.',
  icon: 'chart',
  benefits: [
  'Event and conversion validation against real transactions',
  'Consent, filtering and cross-domain configuration checked end to end',
  'A clean measurement plan plus the exact GTM changes to get there'],

  findings: [
  {
    label: 'Purchase event fires twice',
    detail: 'Both GTM and the hard-coded gtag snippet send purchase, inflating revenue on every order.',
    severity: 'critical',
    metric: 'Revenue +94%'
  },
  {
    label: 'Internal traffic unfiltered',
    detail: 'Office and agency IPs account for a meaningful share of sessions on key landing pages.',
    severity: 'warning',
    metric: '8.2% of sessions'
  },
  {
    label: 'Paid traffic landing in Direct',
    detail: 'Missing UTMs on two campaigns push spend-driven revenue into unattributed Direct.',
    severity: 'warning',
    metric: '£42k unattributed'
  }],

  readout: [
  { label: 'Data accuracy', value: 48, unit: '%', target: '11 of 23 events validated' },
  { label: 'Attribution', value: 55, unit: '%', target: '£42k in Direct / unassigned' },
  { label: 'Consent setup', value: 40, unit: '', target: 'Consent Mode v2 incomplete' }],

  tiers: [
  {
    id: 'ga4-snapshot',
    name: 'Snapshot',
    price: 440,
    turnaround: '3 working days',
    summary: 'Configuration and conversion validation — the trust check before your next board deck.',
    includes: [
    'Property and data-stream configuration review',
    'Validation of up to 10 events',
    'Filtering, consent and PII check',
    '30-minute walkthrough call']

  },
  {
    id: 'ga4-deep',
    name: 'Deep Dive',
    price: 1190,
    turnaround: '8 working days',
    summary: 'Full measurement plan, GTM rebuild spec and reporting layer you can actually defend.',
    includes: [
    'All events and conversions validated against source data',
    'Cross-domain, server-side and consent review',
    'Documented measurement plan + GTM change spec',
    'Two Looker Studio report templates',
    '60-minute analytics handover'],

    popular: true
  }]

},
{
  id: 'ads',
  slug: 'google-ads',
  name: 'Google Ads Audit',
  abbr: 'ADS',
  tagline: 'The line items quietly spending your budget on nothing.',
  problem:
  'Automation hides waste inside broad match and Performance Max. We open the account up, find the spend that never converts, and show you where the same budget performs.',
  icon: 'target',
  benefits: [
  'Search-term and placement waste quantified in currency, not percentages',
  'Structure, bidding and conversion-signal review across every campaign',
  'A 30-day reallocation plan with projected CPA impact'],

  findings: [
  {
    label: '£9.4k on non-converting search terms',
    detail: 'Broad match on three ad groups pulled in informational queries with zero conversions in 90 days.',
    severity: 'critical',
    metric: '£9,400 / 90 days'
  },
  {
    label: 'PMax optimising to the wrong signal',
    detail: 'Newsletter sign-ups are set as a primary conversion, so bidding chases cheap leads.',
    severity: 'critical',
    metric: 'CPA 3.1× target'
  },
  {
    label: 'No brand/non-brand separation',
    detail: 'Brand terms absorb 38% of budget at low incremental value, flattering blended ROAS.',
    severity: 'warning',
    metric: '38% of spend'
  }],

  readout: [
  { label: 'Wasted spend', value: 26, unit: '%', target: '£9.4k of £36k / 90 days' },
  { label: 'Conv. signal', value: 35, unit: '', target: '2 of 6 conversions mis-set' },
  { label: 'Structure', value: 52, unit: '', target: 'Brand and generic unsplit' }],

  tiers: [
  {
    id: 'ads-snapshot',
    name: 'Snapshot',
    price: 640,
    turnaround: '4 working days',
    summary: 'Waste and conversion-signal check on accounts up to £25k monthly spend.',
    includes: [
    'Search-term and placement waste report',
    'Conversion tracking and signal review',
    'Quick-win negative keyword list',
    '30-minute walkthrough call']

  },
  {
    id: 'ads-deep',
    name: 'Deep Dive',
    price: 1790,
    turnaround: '9 working days',
    summary: 'Full account teardown with a restructure blueprint and 30-day reallocation plan.',
    includes: [
    'Every campaign, asset group and audience reviewed',
    'Landing-page and offer alignment review',
    'Restructure blueprint with bidding strategy',
    '30-day budget reallocation plan with CPA projection',
    '60-minute performance handover'],

    popular: true
  }]

}];


export const bundle = {
  id: 'bundle',
  name: 'Full-Stack Audit',
  price: 6400,
  listPrice: 9340,
  turnaround: '15 working days',
  summary:
  'All six audits run by one team against one shared dataset, delivered as a single sequenced roadmap instead of six competing to-do lists.',
  includes: [
  'All six Deep Dive audits',
  'One cross-discipline roadmap, sequenced by impact',
  'Executive summary deck for your board or client',
  'Two 60-minute handover sessions',
  'Day-45 re-test across every discipline']

};

export function findService(id: string) {
  return services.find((s) => s.id === id);
}

export function findTier(serviceId: string, tierId: string) {
  return findService(serviceId)?.tiers.find((t) => t.id === tierId);
}