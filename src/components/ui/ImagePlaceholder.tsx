import React from 'react';
import { ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  /** What the client should drop in here, e.g. "Hero — audit dashboard". */
  label: string;
  /** Recommended dimensions or format note. */
  spec?: string;
  /** Tailwind aspect / sizing classes. */
  className?: string;
  compact?: boolean;
  /** Icon only — for tight slots such as avatars, where the label cannot fit. */
  hideLabel?: boolean;
}

const imageForLabel = (label: string) => {
  const value = label.toLowerCase();
  if (value.includes('sample report spread')) return '/report.png';
  if (value.includes('northline') || value.includes('before / after')) return '/afterbefore.png';
  if (value.includes('ardent') || value.includes('ga4')) return '/ga4.png';
  if (value.includes('caldera') || value.includes('google ads')) return '/google-ads.png';
  if (value.includes('perf') || value.includes('performance')) return '/performance.png';
  if (value.includes('seo')) return '/seo.png';
  if (value.includes('ui') || value.includes('ux')) return '/uiux.png';
  if (value.includes('aeo')) return '/aeo.png';
  if (value.includes('report excerpt')) return '/reports.png';
  if (value.includes('headshot')) return '/avatar-placeholder.svg';
  if (value.includes('client logo 1')) return '/data.png';
  if (value.includes('client logo 2')) return '/analytics.png';
  if (value.includes('client logo 3')) return '/ga4.png';
  if (value.includes('client logo 4')) return '/modern ux.png';
  if (value.includes('client logo 5')) return '/seo.png';
  if (value.includes('client logo 6')) return '/google-ads.png';
  return null;
};

/**
 * Uses the supplied project imagery when an asset matches the slot, while
 * retaining a graceful fallback for any future client-supplied image.
 */
export function ImagePlaceholder({
  label,
  spec,
  className = '',
  compact = false,
  hideLabel = false
}: ImagePlaceholderProps) {
  const src = imageForLabel(label);

  return (
    <div
      role="img"
      aria-label={src ? label : `Image placeholder: ${label}`}
      className={`hatch relative flex flex-col items-center justify-center gap-1.5 overflow-hidden rounded-md border border-line bg-panel text-center ${compact ? 'p-2' : 'p-4'} ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={label}
          className={`absolute inset-0 h-full w-full ${value.includes('client logo') ? 'object-contain p-3' : 'object-cover'}`}
          loading="lazy"
        />
      ) : (
        <>
          <ImageIcon className={compact ? 'h-3.5 w-3.5 text-faint' : 'h-5 w-5 text-faint'} aria-hidden="true" />
          {!hideLabel && (
            <span className={`font-mono uppercase tracking-wider text-mute ${compact ? 'text-[9px] leading-tight' : 'text-[10px]'}`}>
              {label}
            </span>
          )}
          {spec && !compact && <span className="font-mono text-[10px] text-faint">{spec}</span>}
        </>
      )}
      {src && !hideLabel && (
        <span className="absolute bottom-2 left-2 rounded bg-black/65 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-white backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}
