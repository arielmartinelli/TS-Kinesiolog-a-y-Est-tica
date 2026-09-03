import Logo from './Logo';
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  Heart,
  ArrowUp 
} from 'lucide-react';
import { InstagramIcon } from './Icons';
import { 
  DISPLAY_PHONE, 
  createWhatsAppLink, 
  PRESET_MESSAGES, 
  INSTAGRAM_URL, 
  INSTAGRAM_HANDLE,
  JOMA_URL 
} from '../utils/whatsapp';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#22201d] text-[#e5e2dd] pt-16 pb-12 border-t border-[#3a3530]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3a3530]">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="full" isLight={true} />
            <p className="text-xs sm:text-sm text-[#9c9489] leading-relaxed max-w-sm pt-2">
              Kinesiología, fisioterapia traumatológica y estética integral. Atención profesional personalizada a domicilio en Nueva Córdoba y sesiones en gabinete.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#6f583c] flex items-center justify-center text-white transition-colors"
                aria-label="Instagram de Tatiana Samana"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={createWhatsAppLink(PRESET_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center text-white transition-colors"
                aria-label="WhatsApp directo"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#dcd2c4]">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#aba296]">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#kinesiologia" className="hover:text-white transition-colors">Kinesiología & Fisioterapia</a>
              </li>
              <li>
                <a href="#estetica" className="hover:text-white transition-colors">Estética, Masajes & Depilación</a>
              </li>
              <li>
                <a href="#turnos" className="hover:text-white transition-colors">Pedir Turno Online</a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-white transition-colors">Ubicación & FAQ</a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#dcd2c4]">
              Contacto & Redes
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#aba296]">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c4aa82]" />
                <a href="tel:2804831115" className="hover:text-white transition-colors">{DISPLAY_PHONE}</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#c4aa82]" />
                <span>Nueva Córdoba y alrededores (A domicilio)</span>
              </li>
              <li className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-[#c4aa82]" />
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
              <li className="flex items-center gap-2 text-[11px] text-[#787168]">
                <span>Alianzas: @joma.skiin • @jomaskinclinic</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#787168]">
          <p>© {new Date().getFullYear()} TS Kinesiología & Estética • Lic. Tatiana Samana.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Subir al inicio</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
