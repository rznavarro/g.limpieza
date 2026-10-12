import { useEffect, useState } from 'react';
import { buildWhatsAppLink } from '../utils/formatters.ts';

export default function Hero() {
  const [showCurtain, setShowCurtain] = useState(false);

  useEffect(() => {
    // Check if first visit in this session and if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasSeenCurtain = sessionStorage.getItem('gl_curtain_shown');

    if (!hasSeenCurtain && !prefersReducedMotion) {
      setShowCurtain(true);
      sessionStorage.setItem('gl_curtain_shown', 'true');
      const timer = setTimeout(() => {
        setShowCurtain(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const whatsappUrl = buildWhatsAppLink(
    'Hola Grupo Limpieza, quiero agendar una limpieza a domicilio.'
  );

  const handleScrollToPrices = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#precios');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      aria-label="Presentación principal Grupo Limpieza"
      className="relative min-h-[100svh] w-full bg-[#0d1114] text-[#eef0ec] overflow-hidden flex flex-col justify-between pt-24 md:pt-28 select-none"
    >
      {/* Session Curtain Animation */}
      {showCurtain && (
        <div
          className="fixed inset-0 z-[120] bg-[#0d1114] pointer-events-none transition-transform duration-700 ease-in-out -translate-y-full"
          style={{ animation: 'curtainSlide 0.75s cubic-bezier(0.85, 0, 0.15, 1) forwards' }}
          aria-hidden="true"
        />
      )}

      {/* Layer 1: Background photo with cold duotone & gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/lavado-carroceria.jpg"
          alt="Limpieza de carrocería con vapor a domicilio"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="w-full h-full object-cover object-center brightness-[0.45] contrast-[1.1] grayscale-[0.35]"
        />
        {/* Cold tint and dark gradient overlays */}
        <div className="absolute inset-0 bg-[#0d1114]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1114] via-[#0d1114]/75 to-transparent" />

        {/* Steam Spots (subtle vapor drift) */}
        <div
          className="steam-cloud-1 absolute top-1/4 -left-20 w-[420px] h-[420px] rounded-full bg-white blur-[120px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="steam-cloud-2 absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#1aa6c8] blur-[150px] pointer-events-none opacity-20"
          aria-hidden="true"
        />
      </div>

      {/* Layer 2: Core Value Prop and Content */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-8 mt-6 sm:mt-10 md:mt-14">
        {/* Label */}
        <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
          <span className="w-2 h-2 rounded-full bg-[var(--steam)] animate-pulse" />
          <p className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.16em] uppercase text-[#9aa19c]">
            LIMPIEZA PROFUNDA Y SANITIZACIÓN · REGIÓN METROPOLITANA
          </p>
        </div>

        {/* H1 Heading */}
        <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight uppercase max-w-4xl text-[#eef0ec]">
          Limpieza de tapices, autos y hogar con vapor, a domicilio en Santiago.
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-[#eef0ec]/80 max-w-2xl font-normal leading-relaxed">
          Vamos a tu casa u oficina en todas las comunas de la Región Metropolitana. Sin recargo por distancia en la Provincia de Santiago.
        </p>

        {/* CTA Buttons & Microline */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          {/* Primary CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sweep inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-[#eef0ec] text-[#0d1114] font-bold text-sm tracking-wide uppercase shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] min-h-[48px]"
          >
            <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.031 2C6.496 2 2 6.505 2 12.049c0 1.942.556 3.754 1.516 5.289L2 22l4.838-1.464c1.472.87 3.183 1.365 4.993 1.365 5.535 0 10.031-4.505 10.031-10.049C21.862 6.505 17.566 2 12.031 2zm0 18.258c-1.59 0-3.092-.44-4.388-1.206l-.315-.187-2.87.868.877-2.793-.205-.327a8.214 8.214 0 01-1.267-4.364c0-4.538 3.693-8.231 8.231-8.231 4.538 0 8.231 3.693 8.231 8.231 0 4.538-3.693 8.231-8.231 8.231z" />
            </svg>
            <span>Agendar por WhatsApp</span>
            <span className="text-base leading-none">↗</span>
          </a>

          {/* Secondary CTA */}
          <a
            href="#precios"
            onClick={handleScrollToPrices}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-[#eef0ec]/30 text-[#eef0ec] font-semibold text-sm tracking-wide uppercase hover:border-[#eef0ec] hover:bg-white/5 transition-all min-h-[48px]"
          >
            <span>Ver precios</span>
            <span className="text-sm">↓</span>
          </a>

          {/* Microline */}
          <div className="text-xs sm:text-sm text-[#9aa19c] font-medium tracking-wide sm:ml-2">
            Lunes a domingo · Garantía en cada trabajo
          </div>
        </div>
      </div>

      {/* Layer 3: Giant monumental word "VAPOR" anchored to bottom */}
      <div
        className="relative z-10 w-full overflow-hidden leading-none select-none pointer-events-none mt-12 sm:mt-16 md:mt-20 border-b border-[#eef0ec]/10"
        aria-hidden="true"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <span
            className="font-display font-black block tracking-tighter text-[#eef0ec]/20 uppercase transform translate-y-3 sm:translate-y-6"
            style={{
              fontSize: 'clamp(72px, 18vw, 290px)',
              lineHeight: 0.82,
              fontVariationSettings: "'wdth' 125",
            }}
          >
            VAPOR
          </span>
        </div>
      </div>
    </section>
  );
}
