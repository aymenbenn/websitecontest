import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ScrollToHash } from './components/ScrollToHash';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { Landing } from './pages/Landing';
import { GiftFlow } from './pages/GiftFlow';
import { FirstWeekCheck } from './pages/FirstWeekCheck';
import { MotionDirection } from './pages/MotionDirection';

interface AppProps {
  /** Hero composition: portrait-led, or centred editorial type. */
  heroVariant?: 'portrait' | 'editorial';
  /** Show the per-step desktop treatment notes inside the gift flow. */
  showDesktopNotes?: boolean;
}

export function App({ heroVariant = 'portrait', showDesktopNotes = true }: AppProps) {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen w-full flex-col bg-canvas">
        <ScrollToHash />
        <SiteHeader />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Landing heroVariant={heroVariant} />} />
            <Route path="/gift" element={<GiftFlow showDesktopNotes={showDesktopNotes} />} />
            <Route path="/first-week-check" element={<FirstWeekCheck />} />
            <Route path="/motion" element={<MotionDirection />} />
            <Route path="*" element={<Landing heroVariant={heroVariant} />} />
          </Routes>
        </div>
        <SiteFooter />
      </div>
    </BrowserRouter>);

}