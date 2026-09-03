import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { createWhatsAppLink, PRESET_MESSAGES, DISPLAY_PHONE } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [closedManually, setClosedManually] = useState(false);

  useEffect(() => {
    // Show polite tooltip after 4 seconds
    const timer = setTimeout(() => {
      if (!closedManually) {
        setShowTooltip(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [closedManually]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="mb-3 mr-1 bg-white rounded-2xl p-3.5 shadow-2xl border border-[#e8e2d8] max-w-[260px] text-left animate-slideUp relative">
          <button
            onClick={() => {
              setShowTooltip(false);
              setClosedManually(true);
            }}
            className="absolute top-2 right-2 text-[#9c9489] hover:text-[#22201d] text-xs p-1"
            aria-label="Cerrar"
          >
            ✕
          </button>
          
          <div className="flex items-center gap-2 mb-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
            </span>
            <span className="text-[11px] font-bold text-[#6f583c] uppercase tracking-wider">
              Lic. Tatiana Samana
            </span>
          </div>

          <p className="text-xs text-[#3b3631] leading-relaxed">
            ¡Hola! 👋 ¿Buscás turno para <strong>kinesiología o masajes</strong> esta semana? Escribime directo por WhatsApp.
          </p>

          <a
            href={createWhatsAppLink(PRESET_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 inline-flex items-center justify-center gap-1.5 w-full py-1.5 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-[11px] font-bold transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Iniciar Chat Directo</span>
          </a>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={createWhatsAppLink(PRESET_MESSAGES.general)}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_6px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] active:scale-95 transition-all duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 group-hover:opacity-75 animate-ping -z-10" />
        <MessageCircle className="w-7 h-7 fill-white text-white" />
      </a>
    </div>
  );
}
