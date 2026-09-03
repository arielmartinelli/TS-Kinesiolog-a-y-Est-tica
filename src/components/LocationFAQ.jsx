import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  ChevronDown, 
  Clock, 
  ShieldCheck, 
  MessageCircle,
  ExternalLink 
} from 'lucide-react';
import { InstagramIcon } from './Icons';
import { 
  DISPLAY_PHONE, 
  createWhatsAppLink, 
  PRESET_MESSAGES, 
  INSTAGRAM_URL, 
  INSTAGRAM_HANDLE 
} from '../utils/whatsapp';

export default function LocationFAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "¿Cómo funciona la atención kinésica a domicilio en Nueva Córdoba?",
      a: "Coordinamos previamente por WhatsApp día y horario según tu conveniencia. La Lic. Tatiana Samana asiste con los elementos terapéuticos necesarios (camilla portátil, bandas elásticas, instrumental de fisioterapia y terapia manual) para realizar la sesión completa en la comodidad de tu casa."
    },
    {
      q: "¿Atendés en consultorio o gabinete además de a domicilio?",
      a: "Sí. Para tratamientos estéticos (faciales, masajes y depilación definitiva) y pacientes que prefieran no recibir atención en casa, se atiende con turnos programados en espacio acondicionado en Nueva Córdoba y clínicas aliadas."
    },
    {
      q: "¿Cómo sé si mi dolor de espalda o cuello requiere kinesiología o masajes?",
      a: "Si el dolor proviene de una lesión traumática, hernia de disco, pinzamiento, o te impide el movimiento normal, lo indicado es una evaluación kinésica y rehabilitación. Si es una molestia por sobrecarga postural, estrés o contractura muscular difusa, una sesión de masajes descontracturantes te brindará un gran alivio. Ante la duda, podés consultarnos por WhatsApp y te orientamos."
    },
    {
      q: "¿Cómo puedo aprovechar la promo del 10% OFF en faciales o agendar depilación definitiva?",
      a: "Escribinos directamente al WhatsApp indicando la promo y te asignamos los turnos y cupos disponibles para las próximas fechas programadas."
    },
    {
      q: "¿Emitís factura para reintegro de obras sociales o prepagas?",
      a: "Sí, se emite factura profesional de honorarios kinésicos para que puedas presentar en tu obra social o prepaga si tu plan cuenta con sistema de reintegros para kinesiología."
    }
  ];

  return (
    <section id="ubicacion" className="py-16 md:py-24 bg-[#f8f5ee] border-t border-[#e8e2d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Location & Contact Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6f583c]/10 text-[#6f583c] text-xs font-bold uppercase tracking-wider">
              Ubicación & Contacto
            </div>

            <h3 className="text-3xl font-bold text-[#22201d] leading-tight">
              Nueva Córdoba y Alrededores
            </h3>

            <p className="text-[#5e574f] text-sm sm:text-base leading-relaxed">
              Atención kinésica presencial a domicilio y sesiones de estética/masajes en gabinete coordinadas con anticipación.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#e8e2d8] shadow-sm">
                <MapPin className="w-5 h-5 text-[#6f583c] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#22201d]">Zona de Cobertura</h4>
                  <p className="text-xs text-[#5e574f] mt-0.5">Nueva Córdoba, Barrio Güemes, Centro y zonas aledañas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#e8e2d8] shadow-sm">
                <Phone className="w-5 h-5 text-[#6f583c] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#22201d]">Teléfono / WhatsApp</h4>
                  <a 
                    href={createWhatsAppLink(PRESET_MESSAGES.general)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-[#6f583c] font-semibold hover:underline mt-0.5 block"
                  >
                    {DISPLAY_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#e8e2d8] shadow-sm">
                <InstagramIcon className="w-5 h-5 text-[#e1306c] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#22201d]">Instagram Oficial</h4>
                  <a 
                    href={INSTAGRAM_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-[#6f583c] font-semibold hover:underline mt-0.5 block"
                  >
                    {INSTAGRAM_HANDLE}
                  </a>
                </div>
              </div>
            </div>

            {/* Direct CTA card */}
            <div className="p-5 rounded-2xl bg-[#6f583c] text-white space-y-3 shadow-md">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#e5d2be]">
                <Clock className="w-4 h-4" />
                <span>Horarios Flexibles</span>
              </div>
              <p className="text-xs text-[#f0eae1] leading-relaxed">
                Consultá disponibilidad para esta semana o coordiná tu sesión con tiempo para asegurar tu horario preferido.
              </p>
              <a
                href={createWhatsAppLink(PRESET_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-[#6f583c] text-xs font-bold uppercase tracking-wider hover:bg-[#faf7f2] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Consultar Turnos Ahora</span>
              </a>
            </div>
          </div>

          {/* Interactive FAQ Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7A8C73]/15 text-[#475742] text-xs font-bold uppercase tracking-wider mb-2">
              Preguntas Frecuentes
            </div>
            <h3 className="text-3xl font-bold text-[#22201d] mb-6">
              Todo lo que necesitás saber antes de tu sesión
            </h3>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-[#e8e2d8] bg-white overflow-hidden transition-all shadow-sm"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#22201d] hover:bg-[#faf7f2] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#6f583c] flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#5e574f] leading-relaxed border-t border-[#f0eae1]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
