import { buildWhatsAppLink } from '../utils/formatters.ts';

export default function PolishingShowcase() {
  const whatsappUrl = buildWhatsAppLink(
    'Hola Grupo Limpieza, vi el resultado del pulido y simonizado y quiero cotizar para mi vehículo. Mi modelo es: '
  );

  return (
    <section
      aria-label="Resultados de pulido y simonizado antes y después"
      className="bg-[#0d1114] text-[#eef0ec] py-24 sm:py-32 md:py-40 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10 pb-4 border-b border-[#eef0ec]/15">
          <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#9aa19c]">
            05 / EVIDENCIA REAL EN TERRENO
          </span>
          <span className="h-[1px] flex-1 bg-[#eef0ec]/10" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Main Visual: paste145.jpg Real Before/After */}
          <div className="lg:col-span-8 relative">
            <div className="relative overflow-hidden rounded-sm border border-[#eef0ec]/20 shadow-2xl bg-[#0f1316] group">
              <img
                src="/images/paste145.jpg"
                alt="Pulido y simonizado automotriz: resultado antes y después"
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full h-[360px] sm:h-[480px] md:h-[560px] object-cover object-center img-duotone transition-transform duration-700 group-hover:scale-105"
              />

              {/* Before and After Badges */}
              <div className="absolute top-4 left-4 bg-[#0d1114]/90 text-[#eef0ec] border border-[#eef0ec]/20 px-3 py-1 text-xs font-mono font-bold tracking-widest uppercase backdrop-blur-sm">
                ANTES
              </div>

              <div className="absolute top-4 right-4 bg-[#d7ff45] text-[#0d1114] px-3 py-1 text-xs font-mono font-bold tracking-widest uppercase shadow-md">
                DESPUÉS
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-[#0d1114]/85 backdrop-blur-sm border border-[#eef0ec]/10 px-4 py-2.5 flex items-center justify-between text-xs font-mono text-[#9aa19c]">
                <span>Foto real de trabajo Grupo Limpieza</span>
                <span className="text-[#d7ff45] font-bold">Garantía 6 meses</span>
              </div>
            </div>
          </div>

          {/* Floated Story Card */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="bg-[#eef0ec] text-[#0d1114] p-8 sm:p-10 rounded-sm shadow-2xl border border-[#0d1114]/10 transform transition-transform hover:-translate-y-1">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#1aa6c8] block mb-2">
                Tratamiento Especial
              </span>

              <h3 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight leading-tight text-[#0d1114]">
                Pulido y Simonizado
              </h3>

              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1114] text-[#d7ff45] text-xs font-mono font-bold">
                ✓ Garantía de 6 meses
              </div>

              <p className="mt-6 text-sm sm:text-base text-[#0d1114]/80 leading-relaxed font-normal">
                Elimina micro-rayas, hologramas y opacidad causados por el sol y lavados convencionales.
                Recuperamos la profundidad del color y aplicamos un sellador de alta durabilidad que repele el polvo y el agua.
              </p>

              <div className="mt-8 pt-6 border-t border-[#0d1114]/15">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sweep w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-[#0d1114] text-[#eef0ec] font-bold text-xs uppercase tracking-wider min-h-[48px]"
                >
                  <svg className="w-3.5 h-3.5 fill-[#25D366]" viewBox="0 0 24 24">
                    <path d="M12.031 2C6.496 2 2 6.505 2 12.049c0 1.942.556 3.754 1.516 5.289L2 22l4.838-1.464c1.472.87 3.183 1.365 4.993 1.365 5.535 0 10.031-4.505 10.031-10.049C21.862 6.505 17.566 2 12.031 2zm0 18.258c-1.59 0-3.092-.44-4.388-1.206l-.315-.187-2.87.868.877-2.793-.205-.327a8.214 8.214 0 01-1.267-4.364c0-4.538 3.693-8.231 8.231-8.231 4.538 0 8.231 3.693 8.231 8.231 0 4.538-3.693 8.231-8.231 8.231z" />
                  </svg>
                  <span>Cotizar por WhatsApp ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
