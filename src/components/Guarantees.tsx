import { buildWhatsAppLink } from '../utils/formatters.ts';

export default function Guarantees() {
  const whatsappUrl = buildWhatsAppLink(
    'Hola Grupo Limpieza, me interesa agendar un servicio con ustedes. ¿Qué disponibilidad tienen?'
  );

  const stats = [
    { number: '7', unit: 'días', label: 'Trabajamos de lunes a domingo' },
    { number: '$0', unit: '', label: 'Recargo por distancia en Provincia de Santiago' },
    { number: '4', unit: 'días', label: 'Garantía en limpiezas' },
    { number: '6', unit: 'meses', label: 'Garantía en pulido y simonizado' },
  ];

  return (
    <section
      aria-label="Propuesta y garantías de servicio"
      className="bg-[#eef0ec] text-[#0d1114] py-20 sm:py-28 md:py-36 border-b border-[#0d1114]/10"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Editorial Index Header */}
        <div className="flex items-center gap-3 mb-10 pb-4 border-b border-[#0d1114]/15">
          <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#9aa19c]">
            00 / PROPUESTA & COMPROMISO
          </span>
          <span className="h-[1px] flex-1 bg-[#0d1114]/10" />
        </div>

        {/* 7 / 5 Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* 7 Columns: Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-[1.08] text-[#0d1114]">
              “¡Realizamos un minucioso trabajo con un acabado perfecto!”
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#0d1114]/80 leading-relaxed max-w-2xl font-normal">
              Nuestro método combina el poder termodinámico del vapor y espuma de alta densidad para
              desincrustar suciedad profunda, desinfectar ácaros y gérmenes, y neutralizar manchas,
              olores y pelo de mascotas en tapices, vehículos e instalaciones. Todo directo en la
              comodidad de tu domicilio, sin que tengas que moverte.
            </p>

            <div className="mt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold uppercase tracking-wider text-[#0d1114] hover:text-[#1aa6c8] transition-colors group"
              >
                <span>Escríbenos y agenda tu horario</span>
                <span className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* 5 Columns: Trapezoid Masked Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-sm bg-[#0d1114]/5 shadow-xl">
              <img
                src="/images/aspirado.jpg"
                alt="Aspirado minucioso de vehículo a domicilio"
                width={700}
                height={520}
                loading="lazy"
                decoding="async"
                className="w-full h-[320px] sm:h-[420px] object-cover img-duotone transition-transform duration-700 hover:scale-105"
                style={{
                  clipPath: 'polygon(0% 0%, 94% 0%, 100% 100%, 6% 100%)',
                }}
              />
              <div
                className="absolute bottom-3 left-4 bg-[#0d1114]/80 text-[#eef0ec] px-3 py-1 text-[10px] font-mono tracking-widest uppercase backdrop-blur-sm"
                aria-hidden="true"
              >
                Trabajo en terreno RM
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="mt-20 pt-12 border-t border-[#0d1114]/15 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((st, i) => (
            <div key={i} className="flex flex-col border-l-2 border-[#1aa6c8] pl-4 sm:pl-6">
              <div className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#0d1114] flex items-baseline gap-1">
                <span className="tabular-nums">{st.number}</span>
                {st.unit && (
                  <span className="text-sm sm:text-lg font-bold text-[#9aa19c] font-sans">
                    {st.unit}
                  </span>
                )}
              </div>
              <div className="mt-2 text-xs sm:text-sm font-medium text-[#0d1114]/75 leading-snug">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
