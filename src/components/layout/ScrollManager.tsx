import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Keeps scroll position sane across route changes and honours in-page hash links. */
export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        window.requestAnimationFrame(() => el.scrollIntoView({ block: 'start' }));
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}