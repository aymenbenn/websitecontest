import React from 'react';

interface HeroSequenceProps {
  compact?: boolean;
}

export function HeroSequence({ compact = false }: HeroSequenceProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-card border border-line bg-paper ${
        compact ? 'aspect-[4/3]' : 'aspect-[16/9]'
      }`}
    >
      <img
        src="/B.png"
        alt="A quiet moment of support"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}