import { buildWhatsAppLink } from '../utils/formatters.ts';

export default function ServicesOverview() {
  const hotelWhatsApp = buildWhatsAppLink(
    'Hola, tengo un hotel/residencia y quiero cotizar limpieza de sillones, sillas y colchones.'
  );

  const services = [
    {
      id: 'autos',
      num: '01',
      category: 'AUTOS',
      title: 'Limpieza Integral y Detallado Automotriz',
      desc: 'Servicio a domicilio para tu vehículo con tecnología a vapor. Cuidamos cada superficie sin encharcamientos ni desgaste.',
      list: [
        'Limpieza de tapiz e interior premium',
        'Lavado de carrocería y llantas con vapor',
        'Lavado técnico de motor para proteger sensores',
        'Pulido y simonizado con garantía de 6 meses'
      ],
      image: '/images/lavado-carroceria.jpg',
      alt: 'Lavado de carrocería con vapor para autos',
      ctaText: 'Ver precios de autos ↓',
      ctaHref: '#precios',
      isWhatsApp: false,
    },
    {
      id: 'hogar',
      num: '02',
      category: 'TAPICES DEL HOGAR',
      title: 'Sillones, Colchones, Sillas y Alfombras',
      desc: 'Sanitización profunda con espuma activa y vapor. Removemos suciedad incrustada, manchas rebeldes y ácaros acumulados con secado rápido.',
      list: [
        'Sillones de 1, 2 y 3 cuerpos',
        'Sillas completas (asiento y respaldo)',
        'Colchones de 1 y 2 plazas, Queen y King',
        'Tratamiento de manchas, olores y pelo de mascotas'
      ],
      image: '/images/paste134.jpg',
      alt: 'Limpieza de sillones y tapices del hogar con vapor',
      ctaText: 'Cotizar mi pedido ↓',
      ctaHref: '#cotizador',
      isWhatsApp: false,
    },
    {
      id: 'empresas',
      num: '03',
      category: 'CASAS, OFICINAS Y EDIFICIOS',
      title: 'Pisos, Baños Antihongos y Desengrase de Cocinas',
      desc: 'Tratamientos técnicos con vapor a presión para espacios habitacionales, comerciales y corporativos que requieren desinfección rigurosa.',
      list: [
        'Baños: limpieza, sanitización y tratamiento antihongos',
        'Cocinas: desengrase profundo de encimeras y campanas',
        'Pisos flotantes, cerámica y baldosa: limpieza y recuperación',
        'Alfombras muro a muro y alfombras sueltas'
      ],
      image: '/images/image1_(3).JPG',
      alt: 'Limpieza profunda a vapor para oficinas y hogares',
      ctaText: 'Ver precios ↓',
      ctaHref: '#cotizador',
      isWhatsApp: false,
    },
    {
      id: 'hoteles',
      num: '04',
      category: 'HOTELES Y RESIDENCIAS (B2B)',
      title: 'Servicio Especializado para Hotelería y Residencias',
      desc: 'Imagine cuántos millones de ácaros puede haber en los sillones, sillas y colchones de su hotel o residencia. Ofrezca a sus clientes la posibilidad de descansar tranquilos, se lo agradecerán.',
      list: [
        'Sanitización masiva a vapor de alta temperatura',
        'Eliminación certificada de ácaros y patógenos textiles',
        'Flexibilidad horaria sin entorpecer la operación',
        'Presupuestos directos por volumen para empresas'
      ],
      image: '/images/paste141.jpg',
      alt: 'Sanitización a vapor para hoteles y residencias',
      ctaText: 'Cotizar por WhatsApp ↗',
      ctaHref: hotelWhatsApp,
      isWhatsApp: true,
    },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="servicios"
      aria-label="Líneas de servicio de Grupo Limpieza"
      className="bg-[#eef0ec] text-[#0d1114] py-20 sm:py-28 md:py-36 relative"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Sticky section eyebrow */}
        <div className="sticky top-20 z-20 py-4 bg-[#eef0ec]/90 backdrop-blur-sm border-b border-[#0d1114]/15 mb-14 flex items-center justify-between">
          <h2 className="font-display font-black text-xs sm:text-sm tracking-[0.2em] uppercase text-[#0d1114]">
            LO QUE LIMPIAMOS
          </h2>
          <span className="font-mono text-xs text-[#9aa19c]">04 LÍNEAS DE SERVICIO</span>
        </div>

        {/* 4 alternating service blocks */}
        <div className="space-y-24 sm:space-y-36">
          {services.map((srv, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={srv.id}
                id={srv.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center scroll-mt-28`}
              >
                {/* Text Content */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-sm font-bold text-[#1aa6c8]">
                      {srv.num}
                    </span>
                    <span className="text-[#9aa19c] font-mono text-xs">/</span>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#9aa19c]">
                      {srv.category}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.1] text-[#0d1114]">
                    {srv.title}
                  </h3>

                  <p className="mt-5 text-base sm:text-lg text-[#0d1114]/80 leading-relaxed font-normal">
                    {srv.desc}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-[#0d1114]/15 pt-6">
                    {srv.list.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-sm sm:text-base text-[#0d1114]/90">
                        <span className="text-[#1aa6c8] font-bold text-base leading-none select-none mt-1">
                          +
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    {srv.isWhatsApp ? (
                      <a
                        href={srv.ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-sweep inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#0d1114] text-[#eef0ec] font-bold text-xs uppercase tracking-wider min-h-[48px]"
                      >
                        <svg className="w-3.5 h-3.5 fill-[#25D366]" viewBox="0 0 24 24">
                          <path d="M12.031 2C6.496 2 2 6.505 2 12.049c0 1.942.556 3.754 1.516 5.289L2 22l4.838-1.464c1.472.87 3.183 1.365 4.993 1.365 5.535 0 10.031-4.505 10.031-10.049C21.862 6.505 17.566 2 12.031 2zm0 18.258c-1.59 0-3.092-.44-4.388-1.206l-.315-.187-2.87.868.877-2.793-.205-.327a8.214 8.214 0 01-1.267-4.364c0-4.538 3.693-8.231 8.231-8.231 4.538 0 8.231 3.693 8.231 8.231 0 4.538-3.693 8.231-8.231 8.231z" />
                        </svg>
                        <span>{srv.ctaText}</span>
                      </a>
                    ) : (
                      <a
                        href={srv.ctaHref}
                        onClick={(e) => handleSmoothScroll(e, srv.ctaHref)}
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#0d1114] text-[#0d1114] font-bold text-xs uppercase tracking-wider hover:bg-[#0d1114] hover:text-[#eef0ec] transition-all min-h-[48px]"
                      >
                        <span>{srv.ctaText}</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Image Block */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative group overflow-hidden rounded-sm bg-[#0d1114]/10 shadow-lg">
                    <img
                      src={srv.image}
                      alt={srv.alt}
                      width={800}
                      height={550}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-[280px] sm:h-[380px] md:h-[420px] object-cover img-duotone transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Desktop Hover Label Badge */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
                      <span className="px-3.5 py-1.5 bg-[#d7ff45] text-[#0d1114] text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm">
                        {srv.ctaText}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
