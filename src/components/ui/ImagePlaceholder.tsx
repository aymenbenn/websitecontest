import React from 'react';

interface ImagePlaceholderProps {
  label: string;
  spec?: string;
  className?: string;
  compact?: boolean;
  hideLabel?: boolean;
}

/**
 * Images are stored in /public/images.
 * Keep these filenames short so Windows/Git can handle the project safely.
 */
function assetFor(label: string) {
  const l = label.toLowerCase();

  // Homepage hero / sample report
  if (l.includes('sample report')) return '/images/report.png';

  // Service report images
  if (l.includes('perf') || l.includes('performance')) return '/images/performance.png';
  if (l.includes('seo')) return '/images/seo.png';
  if (l.includes('ui/ux') || l.includes('ui & ux') || l.includes('uiux')) return '/images/uiux.png';
  if (l.includes('aeo')) return '/images/aeo.png';
  if (l.includes('ga4')) return '/images/ga4.png';
  if (l.includes('ads') || l.includes('google')) return '/images/google-ads.png';

  // Proof / case-study images
  if (l.includes('northline') || l.includes('before / after')) return '/images/afterbefore.png';
  if (l.includes('ardent')) return '/images/ga4.png';
  if (l.includes('caldera')) return '/images/google-ads.png';
  if (l.includes('case study') || l.includes('result screenshot')) return '/images/case-study.png';

  // Testimonial
  if (l.includes('headshot')) return '/images/avatar.png';

  // Other useful visuals
  if (l.includes('dashboard')) return '/images/dashbored.png';
  if (l.includes('analytics')) return '/images/analytics.png';
  if (l.includes('audit')) return '/images/audit.png';
  if (l.includes('data')) return '/images/data.png';
  if (l.includes('report')) return '/images/reports.png';

  // Client-logo placeholders: use existing image assets rather than showing an empty box.
  const logoMatch = l.match(/client logo ([1-6])/);
  if (logoMatch) {
    const logos = [
      '/images/analytics.png',
      '/images/performance.png',
      '/images/seo.png',
      '/images/uiux.png',
      '/images/ga4.png',
      '/images/google-ads.png'
    ];
    return logos[Number(logoMatch[1]) - 1];
  }

  return '/images/report.png';
}

export function ImagePlaceholder({
  label,
  spec,
  className = '',
  compact = false,
  hideLabel = false
}: ImagePlaceholderProps) {
  const src = assetFor(label);

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden rounded-md border border-line bg-panel ${className}`}
    >
      <img
        src={src}
        alt={label}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        onError={(e) => {
          // If a user replaces an image and temporarily misses a filename,
          // fall back to the main report visual instead of showing a broken image.
          const img = e.currentTarget;
          if (img.src.endsWith('/images/report.png')) return;
          img.src = '/images/report.png';
        }}
      />

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
