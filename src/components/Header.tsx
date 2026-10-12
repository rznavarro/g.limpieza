import { useState, useEffect } from 'react';
import { buildWhatsAppLink } from '../utils/formatters.ts';

interface HeaderProps {
  onOpenMobileMenu?: () => void;
}

export default function Header({ onOpenMobileMenu }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 80);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Autos', href: '#autos' },
    { label: 'Hogar', href: '#hogar' },
    { label: 'Empresas', href: '#empresas' },
    { label: 'Precios', href: '#precios' },
    { label: 'Condiciones', href: '#condiciones' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const genericWhatsAppUrl = buildWhatsAppLink('Hola Grupo Limpieza, quiero agendar una limpieza a domicilio.');

  return (
    <>
      {/* 3px scroll progress bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left pointer-events-none"
        style={{
          backgroundColor: 'var(--steam)',
          transform: `scaleX(${scrollProgress / 100})`,
        }}
        aria-hidden="true"
      />

      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 w-full z-[90] transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0d1114]/85 backdrop-blur-md border-b border-[#eef0ec]/10 text-[#eef0ec] py-3.5 shadow-sm'
            : 'bg-transparent text-[#eef0ec] py-5 mix-blend-difference'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Wordmark */}
          <a
            href="#"
            className="font-display font-black text-sm tracking-[0.16em] uppercase hover:opacity-80 transition-opacity"
            aria-label="Grupo Limpieza - Inicio"
          >
            GRUPO LIMPIEZA
          </a>

          {/* Center Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-7 text-xs font-semibold uppercase tracking-[0.12em]" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="hover:text-[var(--steam)] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[var(--steam)] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            {/* Desktop WhatsApp Pill Button */}
            <a
              href={genericWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-current text-xs font-semibold tracking-wider uppercase transition-transform hover:scale-105"
            >
              <svg className="w-3.5 h-3.5 fill-[#25D366]" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 2C6.496 2 2 6.505 2 12.049c0 1.942.556 3.754 1.516 5.289L2 22l4.838-1.464c1.472.87 3.183 1.365 4.993 1.365 5.535 0 10.031-4.505 10.031-10.049C21.862 6.505 17.566 2 12.031 2zm0 18.258c-1.59 0-3.092-.44-4.388-1.206l-.315-.187-2.87.868.877-2.793-.205-.327a8.214 8.214 0 01-1.267-4.364c0-4.538 3.693-8.231 8.231-8.231 4.538 0 8.231 3.693 8.231 8.231 0 4.538-3.693 8.231-8.231 8.231zm4.512-6.177c-.247-.123-1.465-.723-1.692-.806-.227-.083-.393-.123-.559.123-.166.247-.642.806-.787.97-.145.166-.289.186-.536.062s-1.045-.386-1.99-1.229c-.736-.657-1.233-1.468-1.378-1.715-.145-.247-.015-.38.108-.502.111-.11.247-.289.37-.433.123-.145.165-.247.247-.412.083-.166.041-.31-.02-.433-.062-.124-.558-1.345-.765-1.842-.201-.484-.405-.418-.559-.426l-.476-.008c-.165 0-.434.062-.661.31-.227.248-.868.848-.868 2.068 0 1.22 1.084 2.4 1.236 2.565.152.166 2.133 3.257 5.168 4.568.722.312 1.286.498 1.725.637.725.23 1.385.198 1.906.12.58-.087 1.785-.73 2.036-1.435.251-.705.251-1.31.176-1.434-.075-.124-.277-.197-.524-.32z" />
              </svg>
              <span>WhatsApp</span>
              <span className="text-sm leading-none">↗</span>
            </a>

            {/* Mobile WhatsApp icon only */}
            <a
              href={genericWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 rounded-full border border-current text-[#25D366] hover:bg-white/10"
              aria-label="Contactar por WhatsApp"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 2C6.496 2 2 6.505 2 12.049c0 1.942.556 3.754 1.516 5.289L2 22l4.838-1.464c1.472.87 3.183 1.365 4.993 1.365 5.535 0 10.031-4.505 10.031-10.049C21.862 6.505 17.566 2 12.031 2zm0 18.258c-1.59 0-3.092-.44-4.388-1.206l-.315-.187-2.87.868.877-2.793-.205-.327a8.214 8.214 0 01-1.267-4.364c0-4.538 3.693-8.231 8.231-8.231 4.538 0 8.231 3.693 8.231 8.231 0 4.538-3.693 8.231-8.231 8.231z" />
              </svg>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-current focus:outline-none"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-current transform transition-transform duration-300 ${
                    mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-current transition-opacity duration-300 ${
                    mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-current transform transition-transform duration-300 ${
                    mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Navigation Panel in Ink */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[89] bg-[#0d1114] text-[#eef0ec] flex flex-col justify-between px-6 pt-24 pb-12 transition-all duration-300 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col space-y-6">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#9aa19c]">
              Menú Principal
            </span>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="font-display font-black text-3xl uppercase tracking-tight hover:text-[var(--steam)] transition-colors py-1 flex items-center justify-between border-b border-[#eef0ec]/10"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <span>{link.label}</span>
                  <span className="text-sm font-mono text-[#9aa19c]">0{idx + 1}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <a
              href={genericWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[#1aa6c8] text-white font-bold text-sm tracking-wider uppercase hover:opacity-90"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M12.031 2C6.496 2 2 6.505 2 12.049c0 1.942.556 3.754 1.516 5.289L2 22l4.838-1.464c1.472.87 3.183 1.365 4.993 1.365 5.535 0 10.031-4.505 10.031-10.049C21.862 6.505 17.566 2 12.031 2zm0 18.258c-1.59 0-3.092-.44-4.388-1.206l-.315-.187-2.87.868.877-2.793-.205-.327a8.214 8.214 0 01-1.267-4.364c0-4.538 3.693-8.231 8.231-8.231 4.538 0 8.231 3.693 8.231 8.231 0 4.538-3.693 8.231-8.231 8.231z" />
              </svg>
              <span>Agendar por WhatsApp ↗</span>
            </a>
            <div className="text-center text-xs text-[#9aa19c]">
              Lunes a domingo · 10:00 · 14:00 · 17:00
            </div>
          </div>
        </div>
      )}
    </>
  );
}
