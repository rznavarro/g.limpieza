import { PHONE_NUMBER, PHONE_HREF, EMAIL_PRIMARY } from '../utils/formatters.ts';

export default function Footer() {
  const links = [
    { label: 'Autos', href: '#autos' },
    { label: 'Hogar', href: '#hogar' },
    { label: 'Empresas', href: '#empresas' },
    { label: 'Precios', href: '#precios' },
    { label: 'Condiciones', href: '#condiciones' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0d1114] text-[#eef0ec] py-12 border-t border-[#eef0ec]/10 text-xs">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-[#eef0ec]/10">
          <div>
            <a
              href="#"
              className="font-display font-black text-base tracking-[0.16em] uppercase block hover:opacity-80 transition-opacity"
            >
              GRUPO LIMPIEZA
            </a>
            <p className="text-[#9aa19c] mt-1 font-mono text-[11px]">
              Limpieza profunda y sanitización con vapor · Región Metropolitana
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 font-semibold uppercase tracking-wider text-[11px]" aria-label="Navegación pie de página">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="hover:text-[var(--steam)] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact Details */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-[#9aa19c] font-mono text-[11px]">
            <a href={PHONE_HREF} className="hover:text-[#eef0ec] transition-colors">
              {PHONE_NUMBER}
            </a>
            <span className="hidden sm:inline">·</span>
            <a href={`mailto:${EMAIL_PRIMARY}`} className="hover:text-[#eef0ec] transition-colors">
              {EMAIL_PRIMARY}
            </a>
          </div>
        </div>

        {/* Bottom copyright and motto */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[#9aa19c] text-[11px]">
          <div>© {new Date().getFullYear()} Grupo Limpieza. Todos los derechos reservados.</div>
          <div className="italic text-[#9aa19c]">
            “¡Realizamos un minucioso trabajo con un acabado perfecto!”
          </div>
        </div>
      </div>
    </footer>
  );
}
