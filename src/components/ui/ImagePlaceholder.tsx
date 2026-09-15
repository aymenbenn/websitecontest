import React from 'react';

interface ImagePlaceholderProps {
  label: string;
  spec?: string;
  className?: string;
  compact?: boolean;
  hideLabel?: boolean;
}

function assetFor(label: string) {
  const l = label.toLowerCase();
  if (l.includes('sample report')) return '/assets/hero-report.svg';
  if (l.includes('performance')) return '/assets/perf.svg';
  if (l.includes('seo')) return '/assets/seo.svg';
  if (l.includes('ui & ux') || l.includes('uiux')) return '/assets/uiux.svg';
  if (l.includes('aeo')) return '/assets/aeo.svg';
  if (l.includes('ga4')) return '/assets/ga4.svg';
  if (l.includes('google ads') || l.includes('ads report')) return '/assets/ads.svg';
  if (l.includes('northline')) return '/assets/northline.svg';
  if (l.includes('ardent')) return '/assets/ardent.svg';
  if (l.includes('caldera')) return '/assets/caldera.svg';
  if (l.includes('headshot')) return '/assets/avatar1.svg';
  const logoMatch = l.match(/client logo ([1-6])/);
  if (logoMatch) return `/assets/logo${logoMatch[1]}.svg`;
  return '/assets/hero-report.svg';
}

export function ImagePlaceholder({ label, spec, className = '', compact = false, hideLabel = false }: ImagePlaceholderProps) {
  const src = assetFor(label);
  return (
    <div role="img" aria-label={label} className={`relative overflow-hidden rounded-md border border-line bg-panel ${className}`}>
      <img src={src} alt={label} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      {!hideLabel && compact && (
        <span className="absolute bottom-2 left-2 rounded bg-ink/85 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-fg">
          {label}
        </span>
      )}
      {!hideLabel && !compact && spec && (
        <span className="absolute bottom-2 right-2 rounded bg-ink/85 px-2 py-1 font-mono text-[9px] text-faint">
          {spec}
        </span>
      )}
    </div>
  );
}
