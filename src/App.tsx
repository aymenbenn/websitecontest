import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollManager } from './components/layout/ScrollManager';
import { CheckoutProvider } from './contexts/CheckoutContext';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Proof } from './pages/Proof';
import { Faq } from './pages/Faq';
import { Checkout } from './pages/Checkout';

type Accent = 'mint' | 'cyan' | 'amber' | 'violet';
type HeroLayout = 'readout' | 'statement';

const accents: Record<Accent, {accent: string;accentFg: string;}> = {
  mint: { accent: '0 229 160', accentFg: '4 14 11' },
  cyan: { accent: '56 189 248', accentFg: '4 14 22' },
  amber: { accent: '255 180 84', accentFg: '26 15 2' },
  violet: { accent: '167 139 250', accentFg: '14 8 26' }
};

interface AppProps {
  /** Brand accent used across CTAs, metrics and highlights. */
  accent?: Accent;
  /** Hero composition: data readout panel beside the pitch, or a centred statement. */
  heroLayout?: HeroLayout;
}

export function App({ accent = 'mint', heroLayout = 'readout' }: AppProps) {
  const tokens = accents[accent];

  return (
    <BrowserRouter>
      <CheckoutProvider>
        <div
          className="flex min-h-screen w-full flex-col bg-ink font-sans text-fg antialiased"
          style={
          {
            '--accent': tokens.accent,
            '--accent-fg': tokens.accentFg
          } as React.CSSProperties
          }>
          
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-accentFg">
            
            Skip to content
          </a>
          <ScrollManager />
          <Header />
          <main id="main-content" className="flex-1">
            <Routes>
              <Route path="/" element={<Home heroVariant={heroLayout} />} />
              <Route path="/services" element={<Services />} />
              <Route path="/proof" element={<Proof />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<Home heroVariant={heroLayout} />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CheckoutProvider>
    </BrowserRouter>);

}