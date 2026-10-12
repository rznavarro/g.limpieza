import { useState } from 'react';
import { FAQS } from '../data/servicesData.ts';

export default function FaqSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // First item open by default

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section
      id="condiciones"
      aria-label="Condiciones y preguntas frecuentes"
      className="bg-[#eef0ec] text-[#0d1114] py-20 sm:py-28 md:py-36 border-b border-[#0d1114]/15"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10 pb-4 border-b border-[#0d1114]/15">
          <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#9aa19c]">
            06 / TRANSPARENCIA & CONDICIONES
          </span>
          <span className="h-[1px] flex-1 bg-[#0d1114]/10" />
        </div>

        {/* 2-Column layout: Title left, Accordion right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight leading-[1.08] text-[#0d1114]">
              Antes de agendar.
            </h2>
            <p className="mt-4 text-base text-[#0d1114]/75 leading-relaxed font-normal">
              Condiciones claras, tiempos exactos y respaldo por escrito para que tu experiencia sea transparente y sin sorpresas.
            </p>
            <div className="mt-8 p-4 rounded-sm bg-[#0d1114]/5 border border-[#0d1114]/10 text-xs font-mono text-[#0d1114]/80 space-y-1.5">
              <div>✓ Garantía de 4 días en limpiezas</div>
              <div>✓ Garantía de 6 meses en pulido</div>
              <div>✓ Sin recargo en Provincia de Stgo.</div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-[#0d1114]/15 border-t border-b border-[#0d1114]/15">
              {FAQS.map((faq, idx) => {
                const isOpen = openIndices.includes(idx);

                return (
                  <div key={idx} className="transition-colors">
                    <button
                      type="button"
                      onClick={() => toggleIndex(idx)}
                      aria-expanded={isOpen}
                      className="w-full py-6 flex items-start justify-between text-left group gap-4 cursor-pointer focus:outline-none"
                    >
                      <span className="font-display font-bold text-lg sm:text-xl uppercase tracking-tight text-[#0d1114] group-hover:text-[#1aa6c8] transition-colors">
                        {faq.question}
                      </span>

                      {/* Pure CSS thin "+" rotating to "×" */}
                      <span
                        className="shrink-0 w-8 h-8 rounded-full border border-[#0d1114]/20 flex items-center justify-center text-sm font-mono text-[#0d1114] group-hover:border-[#0d1114] transition-all transform duration-300 select-none"
                        style={{
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        }}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>

                    {/* Accordion Content with smooth height */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-72 opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'
                      }`}
                    >
                      <p className="text-sm sm:text-base text-[#0d1114]/80 leading-relaxed max-w-2xl font-normal pl-0">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
