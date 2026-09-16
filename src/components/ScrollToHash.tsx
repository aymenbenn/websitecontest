import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HEADER_OFFSET = 88;

/**
 * Router links carrying a hash (e.g. "/#packages") only change location —
 * they do not move the page. This moves it, allowing for the sticky header.
 */
export function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const id = hash.replace('#', '');
    const frame = requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}