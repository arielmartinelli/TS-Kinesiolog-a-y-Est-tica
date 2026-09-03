import React, { useState } from 'react';
import { 
  Sparkles, 
  Heart, 
  Calendar, 
  Percent, 
  MessageCircle, 
  Check, 
  ChevronRight,
  ZoomIn
} from 'lucide-react';
import { InstagramIcon } from './Icons';
import { createWhatsAppLink, PRESET_MESSAGES, INSTAGRAM_URL, JOMA_URL } from '../utils/whatsapp';

export default function EsteticaSection() {
  const [modalImage, setModalImage] = useState(null);

  const services = [
    {
      id: "masajes",
      tag: "Cuerpo & Mente",
      title: "Masajes Relajantes y Descontracturantes",
      headline: "Regalate un momento para vos 🥰",
      desc: "Técnicas manuales profundas para desarmar nudos y contracturas en cuello, hombros y espalda, combinadas con maniobras relajantes que reducen el estrés y renuevan tu energía vital.",
      benefits: [
        "Alivio inmediato de tensiones musculares",
        "Estimulación de la circulación y drenaje",
        "Reducción del estrés físico y mental",
        "Ambiente cálido con aromaterapia"
      ],
      ctaText: "Pedir Turno para Masajes",
      whatsappPreset: PRESET_MESSAGES.masajes,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFDsiIVIlgm4dRDcMrPxcWM4b_-6D1V517TSkJTMLzJV-XKAzPq9m3-pwJn5fM3j88ZfumDsIzCWIMMaUotBBp3oDzYTPV8sZrxqNpD75e5k4m6SUpUOh0AAnq3EE1sXBm4jr1IzM--lGegwNfFM8Llo2Wb0ZQJlyjL5SnktxX9G4bqNVFdpxBoMzklsZD92feZJZRQQnVu9CSIGTqm1uTi26PvobHbd7rJmgrwsBQ-8356heQV8uF3A",
      flyerThumb: "/assets/flyer-masajes.png",
      badge: "Agenda abierta para esta semana"
    },
    {
      id: "faciales",
      tag: "Cuidado Facial",
      title: "Tratamientos Faciales Profesionales",
      headline: "Promoción Activa: 10% OFF",
      desc: "Protocolos dérmicos personalizados para revitalizar tu piel: higiene facial profunda, extracción de impurezas, shock de hidratación y nutrición celular con productos de grado médico.",
      benefits: [
        "Higiene profunda y descongestión de poros",
        "Luminosidad, frescura y tono uniforme",
        "Activos anti-age y regeneradores",
        "Alianza con @joma.skiin"
      ],
      ctaText: "Aprovechar 10% OFF en Faciales",
      whatsappPreset: PRESET_MESSAGES.faciales,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaMXwuXDLfRRR31yPiMDqK4p4MUhIhpEUCHUft9uMa5chRKbebOwaUeT1T6DNHvuthk54Yk45PY7jfs5rlRHntxaiZqPAJ6NiTwlnuWJyDur3KzHsx6OOeCHGxCbyA3f97h7OqGjGw0G3yZyW6p65-xOjiDKD1GpxYuP9c4k82khUr8d8dI-srSuaAjLMz0x0Q1TJCEVf8O9UT6EE4MfWCPNFmKfuuQkfBzbUVFXAc6JJ5ae4azSqk1g",
      flyerThumb: "/assets/flyer-faciales.png",
      badge: "10% OFF exclusivo"
    },
    {
      id: "depilacion",
      tag: "Depilación Láser",
      title: "Depilación Definitiva de Alta Eficacia",
      headline: "Próximas fechas con cupos limitados",
      desc: "Tecnología láser de última generación segura para todo tipo de pieles. Resultados visibles desde las primeras sesiones en un espacio higiénico y con seguimiento profesional especializado.",
      benefits: [
        "Resultados progresivos y duraderos",
        "Tratamiento rápido, cómodo y seguro",
        "Zonas corporales y faciales a elección",
        "En conjunto con @jomaskinclinic"
      ],
      ctaText: "Reservar Próxima Sesión Láser",
      whatsappPreset: PRESET_MESSAGES.depilacion,
      image: "/assets/flyer-depilacion.png",
      flyerThumb: "/assets/flyer-depilacion.png",
      badge: "Sesiones programadas"
    }
  ];

  return (
    <section id="estetica" className="py-16 md:py-24 bg-[#faf7f2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A8C73]/15 text-[#475742] text-xs font-bold uppercase tracking-widest mb-3">
            Bienestar & Cuidado Dérmico
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#22201d] tracking-tight">
            Estética, Masajes Terapéuticos & Spa
          </h2>
          <p className="mt-4 text-[#5e574f] text-base md:text-lg leading-relaxed">
            Una propuesta integral diseñada para renovar tu bienestar físico y resaltar la salud natural de tu piel, con la precisión de una profesional de la salud.
          </p>
        </div>

        {/* Services Cards List */}
        <div className="space-y-12">
          {services.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl border border-[#e8e2d8] shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Column */}
                  <div className={`lg:col-span-5 relative h-72 lg:h-full min-h-[320px] ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden" />
                    
                    {/* Badge Pill */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#6f583c]/90 backdrop-blur-md text-white text-xs font-semibold shadow-md">
                        <Sparkles className="w-3.5 h-3.5 text-[#e5d2be]" />
                        <span>{service.badge}</span>
                      </span>
                    </div>

                    {/* Button to view original flyer */}
                    <button
                      onClick={() => setModalImage(service.flyerThumb)}
                      className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-[#22201d] p-2.5 rounded-xl text-xs font-medium backdrop-blur-md shadow-md flex items-center gap-1.5 transition-all"
                      title="Ver flyer oficial"
                    >
                      <ZoomIn className="w-4 h-4 text-[#6f583c]" />
                      <span className="hidden sm:inline">Ver flyer</span>
                    </button>
                  </div>

                  {/* Text Column */}
                  <div className={`p-6 sm:p-8 lg:p-10 lg:col-span-7 space-y-4 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="inline-block px-3 py-1 rounded-md bg-[#f5efe8] text-[#6f583c] text-xs font-bold uppercase tracking-wider">
                      {service.tag}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#22201d] leading-tight">
                      {service.title}
                    </h3>

                    <p className="font-serif italic text-lg sm:text-xl text-[#6f583c] font-normal">
                      "{service.headline}"
                    </p>

                    <p className="text-[#5e574f] text-sm sm:text-base leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Benefits bullet points */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {service.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-xs sm:text-sm text-[#3b3631]">
                          <div className="w-4 h-4 rounded-full bg-[#eef2ec] text-[#475742] flex items-center justify-center flex-shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <a
                        href={createWhatsAppLink(service.whatsappPreset)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#6f583c] hover:bg-[#513e28] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all active:scale-95"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>{service.ctaText}</span>
                      </a>

                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full border border-[#ded7cd] hover:border-[#6f583c] text-xs font-semibold text-[#5e574f] transition-all"
                      >
                        <InstagramIcon className="w-4 h-4 text-[#e1306c]" />
                        <span>@lic.tatisamana</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Flyer Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setModalImage(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-sm w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              ✕
            </button>
            <img
              src={modalImage}
              alt="Flyer promocional"
              className="w-full h-auto object-contain max-h-[85vh]"
            />
            <div className="p-3 text-center bg-[#faf7f2]">
              <a
                href={createWhatsAppLink(PRESET_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#6f583c] hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Reservar turno por WhatsApp (2804831115)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
