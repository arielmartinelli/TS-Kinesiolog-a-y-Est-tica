import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Sparkles, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  HeartHandshake, 
  ShieldCheck,
  CalendarCheck2
} from 'lucide-react';
import { createWhatsAppLink, PRESET_MESSAGES } from '../utils/whatsapp';

export default function Hero({ activeTab, setActiveTab }) {
  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle organic background ambient glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-[#ebe3d5]/40 via-[#f4efe8]/70 to-[#dcd2c4]/20 blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute -top-10 right-10 w-96 h-96 bg-[#7A8C73]/10 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Professional Pill Badge */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f3efe9] border border-[#e5ded3] text-[#6f583c] text-xs md:text-sm font-semibold mb-6 shadow-sm"
          >
            <ShieldCheck className="w-4 h-4 text-[#7A8C73]" />
            <span>Lic. en Kinesiología y Fisioterapia • Tatiana Samana</span>
          </motion.div>

          {/* Main Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-bold text-3xl sm:text-5xl lg:text-6xl text-[#22201d] tracking-tight max-w-4xl leading-[1.15]"
          >
            Rehabilitación kinésica y estética médica integral en{' '}
            <span className="font-serif italic font-normal text-[#6f583c] underline decoration-[#c4aa82]/60 underline-offset-4">
              Córdoba
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg md:text-xl text-[#5e574f] max-w-2xl font-normal leading-relaxed"
          >
            Atención kinésica profesional a domicilio en <span className="font-semibold text-[#22201d]">Nueva Córdoba</span> y tratamientos de estética avanzada (masajes relajantes, faciales y depilación láser) adaptados a tu ritmo y necesidad.
          </motion.p>

          {/* Interactive Dual-Experience Switcher Tab */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 p-1.5 bg-[#f0ede8] rounded-full border border-[#ded7cd] inline-flex items-center shadow-inner"
          >
            <button
              onClick={() => setActiveTab('kinesio')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === 'kinesio'
                  ? 'bg-[#6f583c] text-white shadow-md'
                  : 'text-[#5e574f] hover:text-[#22201d]'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Kinesiología & Rehabilitación</span>
            </button>
            <button
              onClick={() => setActiveTab('estetica')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === 'estetica'
                  ? 'bg-[#6f583c] text-white shadow-md'
                  : 'text-[#5e574f] hover:text-[#22201d]'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Estética, Masajes & Relax</span>
            </button>
          </motion.div>

          {/* Tab Specific Content Cards / Preview */}
          <div className="w-full mt-10 max-w-5xl">
            <AnimatePresence mode="wait">
              {activeTab === 'kinesio' ? (
                <motion.div
                  key="kinesio-hero"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/95 rounded-3xl p-6 sm:p-8 md:p-10 border border-[#e5ded3] shadow-[0_10px_35px_rgba(111,88,60,0.08)] grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left"
                >
                  <div className="md:col-span-7 space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#eef2ec] text-[#475742] text-xs font-semibold">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Atención Kinésica a Domicilio en Nueva Córdoba</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-[#22201d] leading-snug">
                      Traumatología, alivio del dolor y recuperación funcional activa
                    </h2>

                    <p className="text-[#645c53] text-sm sm:text-base leading-relaxed">
                      Especializada en el tratamiento de lesiones osteoarticulares, contracturas dolorosas y rehabilitación pre y postoperatoria en la comodidad de tu hogar, sin traslados innecesarios.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {[
                        'Pre y postoperatorios',
                        'Dolor muscular y articular',
                        'Lesiones agudas y crónicas',
                        'Ejercicio terapéutico guiado'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#3b3631]">
                          <CheckCircle2 className="w-4 h-4 text-[#7A8C73] flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <a
                        href={createWhatsAppLink(PRESET_MESSAGES.domicilio)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#6f583c] hover:bg-[#513e28] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all active:scale-95"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Consultar Kinesiología a Domicilio</span>
                      </a>
                      <a
                        href="#kinesiologia"
                        className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full border border-[#ded7cd] hover:border-[#6f583c] text-xs sm:text-sm font-semibold text-[#443e37] transition-all"
                      >
                        <span>Ver servicios clínicos</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="md:col-span-5 relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#e5ded3] aspect-[4/3] md:aspect-[4/5]">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRJKr74-1dBfIrKhYqM-ytsmfvKTMrTvH4X3Ni25rLumfDtEbJwgyZ6lQsFcu1qjHeZrbVUb-EZAStCnr4shQ85h-wk3qm3ZlGLnvks24_sEFhnWMMMu0us1O3NLOUIDpbyFKiRKqN97WtRDwq8VMjfbXM_g92kZbFydRDXGE0vCOvVprZXsd5-ho_NHdBkTOjsd_T7JAErNKBTk1KBmb7qtO6mRgqCWclrfvGTmHuSYj0Hv001Pr-TQ"
                        alt="Sesión de kinesiología y rehabilitación"
                        className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-white/40 text-xs text-[#22201d]">
                        <p className="font-semibold">Evaluación Kinésica Personalizada</p>
                        <p className="text-[#645c53] text-[11px]">Seguimiento continuo en cada etapa de tu evolución.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="estetica-hero"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/95 rounded-3xl p-6 sm:p-8 md:p-10 border border-[#e5ded3] shadow-[0_10px_35px_rgba(111,88,60,0.08)] grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left"
                >
                  <div className="md:col-span-7 space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#fdf3e9] text-[#8e5229] text-xs font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Agenda Abierta • Regalate un Momento Para Vos</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-[#22201d] leading-snug">
                      Masajes relajantes, cuidado dérmico facial y depilación definitiva
                    </h2>

                    <p className="text-[#645c53] text-sm sm:text-base leading-relaxed">
                      Desconectá de la rutina y liberá tensiones corporales acumuladas. Tratamientos estéticos no invasivos y masajes manuales de alta eficacia en un entorno de máxima serenidad y confort.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {[
                        'Masajes relajantes y descontracturantes',
                        'Tratamientos faciales (10% OFF)',
                        'Depilación definitiva láser',
                        'Alianzas con @joma.skiin y clínica'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#3b3631]">
                          <CheckCircle2 className="w-4 h-4 text-[#7A8C73] flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <a
                        href={createWhatsAppLink(PRESET_MESSAGES.masajes)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#6f583c] hover:bg-[#513e28] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all active:scale-95"
                      >
                        <CalendarCheck2 className="w-4 h-4" />
                        <span>Reservar Turno para Masajes</span>
                      </a>
                      <a
                        href="#estetica"
                        className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full border border-[#ded7cd] hover:border-[#6f583c] text-xs sm:text-sm font-semibold text-[#443e37] transition-all"
                      >
                        <span>Ver tratamientos estéticos</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="md:col-span-5 relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#e5ded3] aspect-[4/3] md:aspect-[4/5]">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFDsiIVIlgm4dRDcMrPxcWM4b_-6D1V517TSkJTMLzJV-XKAzPq9m3-pwJn5fM3j88ZfumDsIzCWIMMaUotBBp3oDzYTPV8sZrxqNpD75e5k4m6SUpUOh0AAnq3EE1sXBm4jr1IzM--lGegwNfFM8Llo2Wb0ZQJlyjL5SnktxX9G4bqNVFdpxBoMzklsZD92feZJZRQQnVu9CSIGTqm1uTi26PvobHbd7rJmgrwsBQ-8356heQV8uF3A"
                        alt="Masaje relajante y descontracturante"
                        className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-white/40 text-xs text-[#22201d]">
                        <p className="font-semibold">Masajes Terapéuticos y Descontracturantes</p>
                        <p className="text-[#645c53] text-[11px]">Liberá contracturas cervicales, dorsales y lumbares.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Trust stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 max-w-4xl w-full text-center">
            <div className="p-4 rounded-2xl bg-white/60 border border-[#e8e2d8] shadow-sm">
              <span className="block text-2xl md:text-3xl font-bold text-[#6f583c]">100%</span>
              <span className="text-xs md:text-sm text-[#5e574f]">Atención Personalizada</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/60 border border-[#e8e2d8] shadow-sm">
              <span className="block text-2xl md:text-3xl font-bold text-[#6f583c]">A Domicilio</span>
              <span className="text-xs md:text-sm text-[#5e574f]">Nueva Córdoba & Zonas</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/60 border border-[#e8e2d8] shadow-sm">
              <span className="block text-2xl md:text-3xl font-bold text-[#6f583c]">Directo</span>
              <span className="text-xs md:text-sm text-[#5e574f]">Coordinación por WhatsApp</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/60 border border-[#e8e2d8] shadow-sm">
              <span className="block text-2xl md:text-3xl font-bold text-[#6f583c]">Profesional</span>
              <span className="text-xs md:text-sm text-[#5e574f]">Kinesiología & Estética</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
