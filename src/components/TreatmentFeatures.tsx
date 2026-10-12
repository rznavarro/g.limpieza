import { useState } from 'react';
import { TREATMENT_ROWS } from '../data/servicesData.ts';

export default function TreatmentFeatures() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    // Relative coordinates
    setCursorPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <section
      aria-label="Qué incluye cada limpieza y metodología"
      className="bg-[#0f1316] text-[#eef0ec] py-20 sm:py-28 md:py-36 border-t border-b border-[#eef0ec]/10 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10 pb-4 border-b border-[#eef0ec]/15">
          <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#9aa19c]">
            02 / METODOLOGÍA & ESTÁNDAR
          </span>
          <span className="h-[1px] flex-1 bg-[#eef0ec]/10" />
        </div>

        {/* Big Staggered Headline */}
        <div className="max-w-4xl mb-16 sm:mb-24">
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-[1.1] text-[#eef0ec]">
            <span className="text-[#1aa6c8]">Vapor.</span>{' '}
            <span className="text-[#d7ff45]">Espuma.</span>{' '}
            <span className="text-[#eef0ec]">Sanitización.</span>{' '}
            <span className="text-[#9aa19c] block mt-2 text-2xl sm:text-4xl md:text-5xl font-bold">
              Cada punto incluye el tratamiento completo.
            </span>
          </h2>
        </div>

        {/* Treatment Rows */}
        <div className="divide-y divide-[#eef0ec]/15 border-t border-b border-[#eef0ec]/15">
          {TREATMENT_ROWS.map((row, idx) => (
            <div
              key={row.num}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline group transition-colors duration-200 hover:bg-[#eef0ec]/5 px-2 sm:px-4 cursor-default"
            >
              {/* Number */}
              <div className="md:col-span-1 font-mono text-sm sm:text-base font-bold text-[#1aa6c8]">
                {row.num}
              </div>

              {/* Title */}
              <div className="md:col-span-5">
                <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl uppercase tracking-tight text-[#eef0ec] group-hover:text-[#d7ff45] transition-colors">
                  {row.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-6 text-sm sm:text-base text-[#9aa19c] font-normal leading-relaxed">
                {row.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Hover Image following mouse (Desktop only) */}
      {hoveredIdx !== null && (
        <div
          className="fixed pointer-events-none z-50 hidden md:block transition-opacity duration-200"
          style={{
            left: `${cursorPos.x + 28}px`,
            top: `${cursorPos.y - 120}px`,
            transform: 'rotate(-4deg)',
          }}
          aria-hidden="true"
        >
          <div className="w-56 h-40 overflow-hidden rounded-sm shadow-2xl border border-[#eef0ec]/20 bg-[#0d1114]">
            <img
              src={TREATMENT_ROWS[hoveredIdx].image}
              alt={TREATMENT_ROWS[hoveredIdx].title}
              width={300}
              height={200}
              className="w-full h-full object-cover img-duotone brightness-95"
            />
          </div>
        </div>
      )}
    </section>
  );
}
