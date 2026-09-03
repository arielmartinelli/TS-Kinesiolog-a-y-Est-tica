import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { createWhatsAppLink, PRESET_MESSAGES, DISPLAY_PHONE } from '../utils/whatsapp';
import { MessageCircle, Menu, X, PhoneCall, CalendarCheck } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Kinesiología', href: '#kinesiologia' },
    { name: 'Estética & Masajes', href: '#estetica' },
    { name: 'Reservar Turno', href: '#turnos' },
    { name: 'Ubicación & FAQ', href: '#ubicacion' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#faf7f2]/90 backdrop-blur-md shadow-sm border-b border-[#e8e2d8] py-2.5'
          : 'bg-[#faf7f2]/60 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#inicio" className="group flex items-center gap-2">
            <Logo variant="full" />
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#443e37] hover:text-[#6f583c] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#6f583c] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:2804831115"
              className="flex items-center gap-1.5 text-xs font-semibold text-[#6b645c] hover:text-[#6f583c] px-3 py-2 rounded-full border border-[#e8e2d8] hover:border-[#6f583c]/40 transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#6f583c]" />
              <span>{DISPLAY_PHONE}</span>
            </a>

            <a
              href={createWhatsAppLink(PRESET_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#6f583c] hover:bg-[#513e28] shadow-[0_4px_14px_rgba(111,88,60,0.25)] hover:shadow-[0_6px_20px_rgba(111,88,60,0.35)] active:scale-95 transition-all duration-200"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7A8C73] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#95B18E]"></span>
              </span>
              <MessageCircle className="w-4 h-4" />
              <span>Pedir Turno</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={createWhatsAppLink(PRESET_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#6f583c] text-white active:scale-90 transition-transform"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#6f583c] hover:bg-[#f0ede8] transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf7f2] border-b border-[#e8e2d8] px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-[#443e37] hover:bg-[#f3efe9] hover:text-[#6f583c] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-[#e8e2d8] flex flex-col gap-2">
            <a
              href="tel:2804831115"
              className="flex items-center justify-center gap-2 py-2.5 rounded-full border border-[#e8e2d8] text-sm font-semibold text-[#443e37]"
            >
              <PhoneCall className="w-4 h-4 text-[#6f583c]" />
              <span>Llamar: {DISPLAY_PHONE}</span>
            </a>
            <a
              href={createWhatsAppLink(PRESET_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-full bg-[#6f583c] text-white text-sm font-bold uppercase tracking-wider shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
