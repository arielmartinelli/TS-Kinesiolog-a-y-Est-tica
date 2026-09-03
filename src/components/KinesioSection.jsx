import React, { useState } from 'react';
import { 
  Stethoscope, 
  Home, 
  Activity, 
  ShieldAlert, 
  Dumbbell, 
  Check, 
  MessageCircle, 
  MapPin, 
  Clock, 
  FileText,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { createWhatsAppLink, PRESET_MESSAGES } from '../utils/whatsapp';

export default function KinesioSection() {
  const [selectedFlyer, setSelectedFlyer] = useState(false);

  const treatments = [
    {
      title: "Pre y Postoperatorios",
      icon: Activity,
      desc: "Preparación muscular previa a cirugía y rehabilitación postquirúrgica temprana y segura para recuperar movilidad sin riesgos.",
      tags: ["Prótesis", "Ligamentos", "Artroscopias", "Fracturas"]
    },
    {
      title: "Dolor Muscular y Articular",
      icon: Stethoscope,
      desc: "Diagnóstico kinésico y tratamiento del dolor de columna (cervicalgia, dorsalgia, lumbalgia), ciática y sobrecargas musculares.",
      tags: ["Lumbalgias", "Cervicalgias", "Hombro Doloroso", "Tendinitis"]
    },
    {
      title: "Lesiones Agudas y Crónicas",
      icon: ShieldAlert,
      desc: "Tratamiento enfocado en la desinflamación, cicatrización adecuada de tejidos y retorno progresivo a la actividad física.",
      tags: ["Esguinces", "Desgarros", "Tendinosis", "Artrosis"]
    },
    {
      title: "Recuperación Funcional & Ejercicio Terapéutico",
      icon: Dumbbell,
      desc: "Prescripción de ejercicios personalizados de fuerza, estabilidad y movilidad para evitar recaídas y devolver la autonomía.",
      tags: ["Fortalecimiento", "Movilidad", "Propiocepción", "Postura"]
    }
  ];

  return (
    <section id="kinesiologia" className="py-16 md:py-24 bg-[#f8f5ee] border-y border-[#e8e2d8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6f583c]/10 text-[#6f583c] text-xs font-bold uppercase tracking-widest mb-3">
            Traumatología & Fisioterapia
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#22201d] tracking-tight">
            Kinesiología & Rehabilitación Clínica
          </h2>
          <p className="mt-4 text-[#5e574f] text-base md:text-lg leading-relaxed">
            Atención kinésica profesional para el tratamiento del dolor, lesiones y recuperación postquirúrgica. Sesiones uno a uno adaptadas a tus tiempos y objetivos de salud.
          </p>
        </div>

        {/* Feature Banner: Domicilio en Nueva Córdoba */}
        <div className="mb-14 bg-gradient-to-br from-[#6f583c] via-[#614c33] to-[#4d3a24] rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          {/* Decorative subtle texture circles */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-60 h-60 rounded-full bg-white/5 blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-sm">
                <Home className="w-3.5 h-3.5 text-[#e5d2be]" />
                <span>Modalidad Destacada</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
                Atención Kinésica a Domicilio en Nueva Córdoba y Alrededores
              </h3>

              <p className="text-[#efe6dc] text-sm sm:text-base leading-relaxed max-w-2xl">
                ¿Tenés dolor agudo o dificultad para trasladarte tras una cirugía? La <strong>Lic. Tatiana Samana</strong> realiza las sesiones directamente en tu domicilio con el equipamiento y la calidez profesional que necesitás para tu pronta recuperación.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-[#e6dcce]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#c4aa82]" />
                  <span>Nueva Córdoba, Centro, Güemes y zonas cercanas</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#c4aa82]" />
                  <span>Horarios coordinados previamente</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={createWhatsAppLink(PRESET_MESSAGES.domicilio)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white hover:bg-[#faf7f2] text-[#6f583c] font-bold text-sm shadow-lg hover:shadow-xl transition-all active:scale-95"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>Consultar por Domicilio</span>
              </a>

              <button
                onClick={() => setSelectedFlyer(true)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-medium transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Ver Flyer Oficial</span>
              </button>
            </div>
          </div>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {treatments.map((treatment, idx) => {
            const Icon = treatment.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-6 sm:p-8 border border-[#e8e2d8] hover:border-[#6f583c]/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#f5efe8] group-hover:bg-[#6f583c] text-[#6f583c] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h4 className="text-xl font-bold text-[#22201d] mb-2.5">
                    {treatment.title}
                  </h4>

                  <p className="text-[#5e574f] text-sm leading-relaxed mb-4">
                    {treatment.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#f0eae1]">
                    {treatment.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-[#faf7f2] border border-[#e8e2d8] text-[11px] font-medium text-[#6b645c]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={createWhatsAppLink(`Hola Tatiana! Quisiera consultar por el tratamiento de: ${treatment.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#6f583c] group-hover:text-[#513e28] transition-colors"
                  >
                    <span>Consultar por este tratamiento</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Flyer Lightbox Modal */}
      {selectedFlyer && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedFlyer(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-sm w-full overflow-hidden shadow-2xl animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3 bg-[#faf7f2] border-b border-[#e8e2d8] flex justify-between items-center">
              <span className="text-xs font-bold text-[#6f583c]">Flyer Oficial: Traumatología y Rehabilitación</span>
              <button 
                onClick={() => setSelectedFlyer(false)}
                className="w-7 h-7 rounded-full bg-[#e8e2d8] text-xs font-bold hover:bg-[#d1c4b9] flex items-center justify-center"
              >
                ✕
              </button>
            </div>
            <img 
              src="/assets/flyer-kinesiologia.png" 
              alt="Flyer de Traumatología y Rehabilitación - Samana Tatiana"
              className="w-full h-auto object-contain max-h-[80vh]"
            />
            <div className="p-4 bg-white text-center">
              <a
                href={createWhatsAppLink(PRESET_MESSAGES.domicilio)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6f583c] text-white text-xs font-bold uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pedir Turno al 2804831115</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
