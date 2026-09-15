export type Severity = 'critical' | 'warning' | 'opportunity';

export interface Finding {
  label: string;
  detail: string;
  severity: Severity;
  metric: string;
}

export interface Tier {
  id: string;
  name: string;
  price: number;
  turnaround: string;
  summary: string;
  includes: string[];
  popular?: boolean;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  abbr: string;
  tagline: string;
  problem: string;
  icon: 'gauge' | 'search' | 'layout' | 'bot' | 'chart' | 'target' | 'layers';
  benefits: string[];
  findings: Finding[];
  readout: {label: string;value: number;unit: string;target: string;}[];
  tiers: Tier[];
}

export interface CaseStudy {
  id: string;
  client: string;
  sector: string;
  headline: string;
  summary: string;
  services: string[];
  results: {label: string;value: string;}[];
  quote?: {text: string;author: string;role: string;};
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  company: string;
  service: string;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export interface Selection {
  serviceId: string;
  tierId: string;
}