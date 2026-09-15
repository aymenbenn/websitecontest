import React from 'react';
import { services } from '../../data/services';

export function ServiceNav() {
  return (
    <nav
      aria-label="Jump to an audit"
      className="sticky top-16 z-40 border-y border-line bg-ink/90 backdrop-blur-md">
      
      <div className="mx-auto flex max-w-content items-center gap-1 overflow-x-auto px-5 py-2.5 lg:px-8">
        <span className="shrink-0 pr-2 font-mono text-[10px] uppercase tracking-wider text-faint">Jump to</span>
        {services.map((s) =>
        <a
          key={s.id}
          href={`#${s.slug}`}
          className="shrink-0 rounded px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-mute transition-colors duration-150 ease-swift hover:bg-raise hover:text-accent">
          
            {s.abbr}
          </a>
        )}
      </div>
    </nav>);

}