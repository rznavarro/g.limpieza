import { useEffect } from 'react';
import Lenis from 'lenis';

import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Guarantees from './components/Guarantees.tsx';
import Ticker from './components/Ticker.tsx';
import ServicesOverview from './components/ServicesOverview.tsx';
import TreatmentFeatures from './components/TreatmentFeatures.tsx';
import CarPricing from './components/CarPricing.tsx';
import QuoteBuilder from './components/QuoteBuilder.tsx';
import PolishingShowcase from './components/PolishingShowcase.tsx';
import FaqSection from './components/FaqSection.tsx';
import ContactSection from './components/ContactSection.tsx';
import Footer from './components/Footer.tsx';
import MobileActionBar from './components/MobileActionBar.tsx';
import CustomCursor from './components/CustomCursor.tsx';

export default function App() {
  useEffect(() => {
    // Lenis smooth scroll initialization (desktop fine pointer only, disabled for touch and reduced motion)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isFinePointer && !prefersReducedMotion) {
      const lenis = new Lenis({
        duration: 1.15,
        wheelMultiplier: 0.9,
      });

      let animationFrameId: number;

      function raf(time: number) {
        lenis.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      }

      animationFrameId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(animationFrameId);
        lenis.destroy();
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#eef0ec] text-[#0d1114] selection:bg-[#d7ff45] selection:text-[#0d1114]">
      {/* SVG Grain Texture Overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Interactive Cursor for Desktop */}
      <CustomCursor />

      {/* Global Fixed Header & Scroll Indicator */}
      <Header />

      {/* Main Semantic Content */}
      <main id="main-content">
        {/* 1. Hero: Video-grade Typography & Vapor */}
        <Hero />

        {/* 2. Value Proposition & Guarantees */}
        <Guarantees />

        {/* 3. Acid Lime Ticker Ribbon */}
        <Ticker />

        {/* 4. Three Service Lines (Autos, Hogar, Inmuebles, Hoteles) */}
        <ServicesOverview />

        {/* 5. What Each Cleaning Includes / Methodology */}
        <TreatmentFeatures />

        {/* 6. Car Pricing with Dynamic Flex Expand */}
        <CarPricing />

        {/* 7. "Arma tu pedido" Interactive Quote Engine */}
        <QuoteBuilder />

        {/* 8. Cinematic Polishing Showcase (Before & After) */}
        <PolishingShowcase />

        {/* 9. Conditions & Accessible FAQ Accordion */}
        <FaqSection />

        {/* 10. Direct Contact & Coverage */}
        <ContactSection />
      </main>

      {/* 11. Compact Footer */}
      <Footer />

      {/* Fixed Bottom Quick Action Bar for Mobile (<900px) */}
      <MobileActionBar />
    </div>
  );
}
