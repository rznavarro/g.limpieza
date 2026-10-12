import { useState } from 'react';
import { CAR_PACKAGES } from '../data/servicesData.ts';
import { buildWhatsAppLink } from '../utils/formatters.ts';

export default function CarPricing() {
  const [activeHover, setActiveHover] = useState<string | null>(null);

  const polidoWhatsApp = buildWhatsAppLink(
    'Hola Grupo Limpieza, quiero cotizar pulido y simonizado para mi vehículo. Mi modelo y comuna son: '
  );

  return (
    <section
      id="precios"
      aria-label="Precios de servicios automotrices"
      className="bg-[#eef0ec] text-[#0d1114] py-20 sm:py-28 md:py-36 border-b border-[#0d1114]/15"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Eyebrow & Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-4 border-b border-[#0d1114]/15">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#9aa19c]">
                03 / SERVICIOS AUTOMOTRICES
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 bg-[#0d1114] text-[#eef0ec]">
                PRECIOS DESDE
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#0d1114]">
              Autos, a vapor y en tu casa.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs sm:text-sm text-[#9aa19c] font-mono max-w-xs">
            Precios no incluyen IVA · Sin recargo por distancia en Provincia de Santiago
          </p>
        </div>

        {/* 4 Cards Flex Container */}
        {/* On mobile: horizontal scroll snap / on desktop: expandable flex items */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 overflow-x-auto pb-4 lg:pb-0 snap-x snap-mandatory">
          {CAR_PACKAGES.map((pkg, idx) => {
            const isDark = !!pkg.highlighted;
            const isHovered = activeHover === pkg.id;
            const cardMsg = `Hola, quiero agendar: ${pkg.name} (${pkg.priceFormatted}). Mi comuna es: `;
            const cardUrl = buildWhatsAppLink(cardMsg);

            return (
              <div
                key={pkg.id}
                onMouseEnter={() => setActiveHover(pkg.id)}
                onMouseLeave={() => setActiveHover(null)}
                className={`snap-center shrink-0 w-full lg:w-auto rounded-sm p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 ease-out border ${
                  isDark
                    ? 'bg-[#0f1316] text-[#eef0ec] border-[#0f1316] shadow-2xl'
                    : 'bg-[#eef0ec] text-[#0d1114] border-[#0d1114]/20 hover:border-[#0d1114]'
                }`}
                style={{
                  // Desktop expansion from flex 1 to flex 1.35
                  flex: isHovered ? '1.35 1 0%' : '1 1 0%',
                }}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold tracking-widest text-[#9aa19c]">
                      0{idx + 1}
                    </span>
                    {pkg.tag && (
                      <span className="px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider uppercase bg-[#d7ff45] text-[#0d1114]">
                        {pkg.tag}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3
                    className={`font-display font-black text-xl sm:text-2xl uppercase tracking-tight leading-snug ${
                      isDark ? 'text-[#eef0ec]' : 'text-[#0d1114]'
                    }`}
                  >
                    {pkg.name}
                  </h3>

                  <p
                    className={`mt-3 text-xs sm:text-sm leading-relaxed ${
                      isDark ? 'text-[#9aa19c]' : 'text-[#0d1114]/70'
                    }`}
                  >
                    {pkg.description}
                  </p>

                  {/* Includes List */}
                  <div className="mt-6 pt-6 border-t border-current/10">
                    <span className="text-[11px] font-mono uppercase tracking-wider block mb-3 text-[#9aa19c]">
                      Incluye:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm">
                      {pkg.includes.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2.5 leading-snug">
                          <span
                            className={`font-bold mt-0.5 leading-none ${
                              isDark ? 'text-[#1aa6c8]' : 'text-[#0d1114]'
                            }`}
                          >
                            +
                          </span>
                          <span className={isDark ? 'text-[#eef0ec]/90' : 'text-[#0d1114]/85'}>
                            {inc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Pricing & CTA */}
                <div className="mt-8 pt-6 border-t border-current/15">
                  <div className="mb-4">
                    <span className="text-xs uppercase font-mono tracking-wider text-[#9aa19c] block">
                      Tarifa
                    </span>
                    <div className="font-display font-black text-2xl sm:text-3xl tracking-tight tabular-nums">
                      {pkg.priceFormatted}
                    </div>
                  </div>

                  <a
                    href={cardUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-sweep w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-full font-bold text-xs uppercase tracking-wider transition-all min-h-[48px] ${
                      isDark
                        ? 'bg-[#eef0ec] text-[#0d1114] hover:bg-[#1aa6c8] hover:text-white'
                        : 'bg-[#0d1114] text-[#eef0ec] hover:bg-[#1aa6c8]'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5 fill-[#25D366]" viewBox="0 0 24 24">
                      <path d="M12.031 2C6.496 2 2 6.505 2 12.049c0 1.942.556 3.754 1.516 5.289L2 22l4.838-1.464c1.472.87 3.183 1.365 4.993 1.365 5.535 0 10.031-4.505 10.031-10.049C21.862 6.505 17.566 2 12.031 2zm0 18.258c-1.59 0-3.092-.44-4.388-1.206l-.315-.187-2.87.868.877-2.793-.205-.327a8.214 8.214 0 01-1.267-4.364c0-4.538 3.693-8.231 8.231-8.231 4.538 0 8.231 3.693 8.231 8.231 0 4.538-3.693 8.231-8.231 8.231z" />
                    </svg>
                    <span>Agendar</span>
                    <span className="text-sm">↗</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Wide Banner: Pulido y simonizado */}
        <div className="mt-8 bg-[#0d1114] text-[#eef0ec] rounded-sm p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#d7ff45]" />
              <span className="font-mono text-xs font-bold text-[#d7ff45] tracking-widest uppercase">
                Garantía extendida de 6 meses
              </span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight">
              Pulido y simonizado
            </h3>
            <p className="mt-1 text-sm text-[#9aa19c]">
              Restauración del brillo y corrección de pintura. Cotiza según el tamaño y estado de tu vehículo.
            </p>
          </div>

          <a
            href={polidoWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sweep shrink-0 inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#1aa6c8] text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 min-h-[48px]"
          >
            <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
              <path d="M12.031 2C6.496 2 2 6.505 2 12.049c0 1.942.556 3.754 1.516 5.289L2 22l4.838-1.464c1.472.87 3.183 1.365 4.993 1.365 5.535 0 10.031-4.505 10.031-10.049C21.862 6.505 17.566 2 12.031 2zm0 18.258c-1.59 0-3.092-.44-4.388-1.206l-.315-.187-2.87.868.877-2.793-.205-.327a8.214 8.214 0 01-1.267-4.364c0-4.538 3.693-8.231 8.231-8.231 4.538 0 8.231 3.693 8.231 8.231 0 4.538-3.693 8.231-8.231 8.231z" />
            </svg>
            <span>Cotizar por WhatsApp ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
