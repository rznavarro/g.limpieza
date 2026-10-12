import { PHONE_HREF, buildWhatsAppLink } from '../utils/formatters.ts';

export default function MobileActionBar() {
  const whatsappUrl = buildWhatsAppLink(
    'Hola Grupo Limpieza, quiero agendar una limpieza a domicilio.'
  );

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[95] md:hidden bg-[#0d1114]/90 backdrop-blur-md border-t border-[#eef0ec]/15 p-3 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-2xl transition-transform duration-300"
      aria-label="Acciones rápidas móviles"
    >
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#1aa6c8] text-white font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-transform min-h-[48px]"
        >
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M12.031 2C6.496 2 2 6.505 2 12.049c0 1.942.556 3.754 1.516 5.289L2 22l4.838-1.464c1.472.87 3.183 1.365 4.993 1.365 5.535 0 10.031-4.505 10.031-10.049C21.862 6.505 17.566 2 12.031 2zm0 18.258c-1.59 0-3.092-.44-4.388-1.206l-.315-.187-2.87.868.877-2.793-.205-.327a8.214 8.214 0 01-1.267-4.364c0-4.538 3.693-8.231 8.231-8.231 4.538 0 8.231 3.693 8.231 8.231 0 4.538-3.693 8.231-8.231 8.231z" />
          </svg>
          <span>WhatsApp</span>
        </a>

        {/* Call Button */}
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#eef0ec] text-[#0d1114] font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-transform min-h-[48px]"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          <span>Llamar</span>
        </a>
      </div>
    </div>
  );
}
