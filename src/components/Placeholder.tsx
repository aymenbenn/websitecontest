import React from 'react';

interface PlaceholderProps {
  label: string;
  ratio?: string;
  className?: string;
}

/**
 * Image slot. Uses the client's supplied artwork from /public/optimized.
 * The label remains the source of truth so existing components do not need
 * to know about image filenames or layout decisions.
 */
const imageFor = (label: string) => {
  const l = label.toLowerCase();

  if (l.includes('care lead') || l.includes('portrait')) return '/optimized/OKMN.webp';
  if (l.includes('physiotherapist')) return '/optimized/TY.webp';
  if (l.includes('night nurse')) return '/optimized/C.webp';
  if (l.includes('first week') || l.includes('quiet domestic')) return '/optimized/TYl.webp';
  if (l.includes('throw') || l.includes('linen box')) return '/optimized/olkp.webp';
  if (l.includes('handwritten card')) return '/optimized/ERTY.webp';
  if (l.includes('linen box open') || l.includes('the object')) return '/optimized/AA.webp';
  if (l.includes('year of cards')) return '/optimized/POKL.webp';
  if (l.includes('season journal')) return '/optimized/BD.webp';
  if (l.includes('the linen box')) return '/optimized/AA.webp';
  if (l.includes('her, in her own light')) return '/optimized/B.webp';

  return '/optimized/AA.webp';
};

const objectPositionFor = (label: string) => {
  const l = label.toLowerCase();
  if (l.includes('physiotherapist')) return 'object-[center_40%]';
  if (l.includes('night nurse')) return 'object-[center_35%]';
  if (l.includes('handwritten card')) return 'object-center';
  return 'object-center';
};

export function Placeholder({ label, ratio = '4 / 5', className = '' }: PlaceholderProps) {
  const src = imageFor(label);
  const objectPosition = objectPositionFor(label);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-card border border-line bg-shell ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={label}>
      <img
        src={src}
        alt={label}
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover ${objectPosition}`}
      />
    </div>
  );
}
