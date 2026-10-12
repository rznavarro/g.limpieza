import {
  PHONE_NUMBER,
  PHONE_HREF,
  EMAIL_PRIMARY,
  EMAIL_SECONDARY,
  buildWhatsAppLink,
} from '../utils/formatters.ts';

export default function ContactSection() {
  const whatsappUrl = buildWhatsAppLink(
    'Hola Grupo Limpieza, quiero agendar un servicio a domicilio en la Región Metropolitana.'
  );

  return (
    <section
      id="contacto"
      aria-label="Contacto y cobertura en la Región Metropolitana"
      className="bg-[#0d1114] text-[#eef0ec] py-24 sm:py-32 md:py-44 border-b border-[#eef0ec]/15 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10 pb-4 border-b border-[#eef0ec]/15">
          <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#9aa19c]">
            07 / CONTACTO DIRECTO & COBERTURA
          </span>
          <span className="h-[1px] flex-1 bg-[#eef0ec]/10" />
        </div>

        {/* Giant 2-Line Display Heading */}
        <div className="mb-14 sm:mb-20">
          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.9] text-[#eef0ec]">
            VAMOS A <br />
            <span className="text-[#1aa6c8]">TU CASA.</span>
          </h2>
          <p className="mt-6 text-base sm:text-xl md:text-2xl text-[#9aa19c] max-w-2xl font-normal leading-relaxed">
            A domicilio en todas las comunas de la Región Metropolitana. Sin recargo por distancia dentro de la Provincia de Santiago.
          </p>
        </div>

        {/* Two-Column Information Box */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pt-10 border-t border-[#eef0ec]/15">
          {/* Left Column: Direct Phone & WhatsApp */}
          <div className="md:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9aa19c] block">
              Canal Prioritario
            </span>

            <div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sweep inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-[#eef0ec] text-[#0d1114] font-bold text-sm uppercase tracking-wider hover:opacity-95 shadow-xl min-h-[48px]"
              >
                <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                  <path d="M12.031 2C6.496 2 2 6.505 2 12.049c0 1.942.556 3.754 1.516 5.289L2 22l4.838-1.464c1.472.87 3.183 1.365 4.993 1.365 5.535 0 10.031-4.505 10.031-10.049C21.862 6.505 17.566 2 12.031 2zm0 18.258c-1.59 0-3.092-.44-4.388-1.206l-.315-.187-2.87.868.877-2.793-.205-.327a8.214 8.214 0 01-1.267-4.364c0-4.538 3.693-8.231 8.231-8.231 4.538 0 8.231 3.693 8.231 8.231 0 4.538-3.693 8.231-8.231 8.231z" />
                </svg>
                <span>Agendar por WhatsApp ↗</span>
              </a>
            </div>

            <div className="pt-4">
              <span className="text-xs font-mono text-[#9aa19c] block mb-1">
                Llamada directa:
              </span>
              <a
                href={PHONE_HREF}
                className="font-display font-black text-2xl sm:text-3xl text-[#eef0ec] hover:text-[#1aa6c8] transition-colors tabular-nums"
              >
                {PHONE_NUMBER}
              </a>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#eef0ec]/5 border border-[#eef0ec]/10 text-xs font-mono text-[#9aa19c]">
              <span>Horarios:</span>
              <span className="text-[#eef0ec] font-bold">Lunes a domingo · 10:00 · 14:00 · 17:00</span>
            </div>
          </div>

          {/* Right Column: Email Channels & Coverage Details */}
          <div className="md:col-span-6 space-y-6 md:border-l md:border-[#eef0ec]/15 md:pl-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9aa19c] block">
              Correo Electrónico
            </span>

            <div className="space-y-3">
              <div>
                <span className="text-xs font-mono text-[#9aa19c] block">Principal:</span>
                <a
                  href={`mailto:${EMAIL_PRIMARY}`}
                  className="font-mono text-base sm:text-lg text-[#eef0ec] hover:text-[#1aa6c8] transition-colors underline underline-offset-4"
                >
                  {EMAIL_PRIMARY}
                </a>
              </div>

              <div>
                <span className="text-xs font-mono text-[#9aa19c] block">Secundario:</span>
                <a
                  href={`mailto:${EMAIL_SECONDARY}`}
                  className="font-mono text-sm sm:text-base text-[#9aa19c] hover:text-[#eef0ec] transition-colors"
                >
                  {EMAIL_SECONDARY}
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-[#eef0ec]/10 text-xs text-[#9aa19c] leading-relaxed">
              <span className="text-[#eef0ec] font-bold block mb-1">
                Cobertura Metropolitana:
              </span>
              Santiago Centro, Las Condes, Providencia, Vitacura, Ñuñoa, Lo Barnechea, La Reina, Maipú, La Florida, Puente Alto, Peñalolén, San Miguel y todas las comunas de la RM.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
