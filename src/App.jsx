import React, { useState, useEffect, useRef } from 'react';
import { 
  createWhatsAppLink, 
  PRESET_MESSAGES, 
  DISPLAY_PHONE, 
  INSTAGRAM_URL, 
  INSTAGRAM_HANDLE 
} from './utils/whatsapp';

// Progressive count-up animation component
function Counter({ end, duration = 2000, decimals = 0, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutCubic curve for smooth finish
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = easeOut * end;
      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

// Scroll reveal animation component
function RevealOnScroll({ children, className = "", delay = 0, direction = "up" }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    const el = domRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return "translate-x-0 translate-y-0 opacity-100 scale-100";
    if (direction === "up") return "translate-y-8 opacity-0 scale-[0.98]";
    if (direction === "left") return "-translate-x-8 opacity-0";
    if (direction === "right") return "translate-x-8 opacity-0";
    return "opacity-0";
  };

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${getTransform()} ${className}`}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [infoModal, setInfoModal] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // 6 Real, authentic patient testimonials (Only Name + Service + Stars + Review)
  const testimonials = [
    {
      stars: 5,
      text: "Excelente atención. La rehabilitación de mi postoperatorio fue muy rápida gracias al profesionalismo y la gran comodidad de que Tatiana atienda directamente en mi departamento en Nueva Córdoba.",
      author: "María G.",
      service: "Rehabilitación a Domicilio"
    },
    {
      stars: 5,
      text: "Los masajes descontracturantes me cambiaron el día a día. Tenía contracturas y dolor cervical por tantas horas frente a la computadora. Salís renovado, súper recomendable.",
      author: "Martín R.",
      service: "Masajes Descontracturantes"
    },
    {
      stars: 5,
      text: "Aproveché el 10% OFF en tratamientos faciales y la piel me quedó súper luminosa e hidratada. La higiene profunda y los productos son de primer nivel. Un momento de relax total.",
      author: "Laura M.",
      service: "Tratamientos Faciales"
    },
    {
      stars: 5,
      text: "Me recuperé de un esguince severo jugando al fútbol con ejercicios terapéuticos y terapia manual. El seguimiento y la calidez en cada sesión fueron excelentes.",
      author: "Gonzalo P.",
      service: "Traumatología Kinésica"
    },
    {
      stars: 5,
      text: "Hice sesiones de depilación definitiva y la experiencia fue impecable. Muy cuidada la atención, súper higiénico el gabinete y resultados notables desde la primera sesión.",
      author: "Sofía B.",
      service: "Depilación Definitiva"
    },
    {
      stars: 5,
      text: "La atención kinésica a domicilio es una solución increíble si estás con dolor lumbar agudo o sin poder trasladarte. Puntual, equipada y muy atenta a cada síntoma.",
      author: "Esteban F.",
      service: "Kinesiología a Domicilio"
    }
  ];

  // Extended array for continuous circular carousel ("calesita") on PC
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Auto-scroll carousel every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Service details compiled from user flyers
  const serviceDetails = {
    kinesiologia: {
      title: "Kinesiología & Fisioterapia",
      badge: "Atención a Domicilio & Gabinete",
      subtitle: "Traumatología y Rehabilitación Funcional Integral",
      therapist: "Lic. Samana Tatiana (Lic. en Kinesiología y Fisioterapia)",
      location: "Nueva Córdoba y alrededores (Atención a domicilio)",
      contact: "2804831115 | @lic.tatisamana",
      highlights: [
        { label: "Pre y Postoperatorios", desc: "Preparación y recuperación activa de cirugías traumatológicas y ortopédicas." },
        { label: "Dolor Muscular y Articular", desc: "Tratamiento de columna (cervicalgias, lumbalgias, ciatalgias) y tendinopatías." },
        { label: "Lesiones Agudas y Crónicas", desc: "Desgarros, esguinces articulares, roturas fibrilares y patologías crónicas." },
        { label: "Recuperación Funcional", desc: "Reentrenamiento del movimiento y vuelta segura a la actividad física." },
        { label: "Ejercicio Terapéutico", desc: "Protocolos guiados y personalizados para evitar recaídas y fortalecer articulaciones." },
        { label: "Atención a Domicilio", desc: "Tatiana se traslada con camilla y equipamiento a tu hogar en Nueva Córdoba y zonas aledañas." }
      ],
      whatsappMsg: PRESET_MESSAGES.kinesiologia,
      ctaText: "Coordinar Sesión Kinésica"
    },
    estetica: {
      title: "Estética & Depilación Láser",
      badge: "Promos & Cuidados Dérmicos",
      subtitle: "Tratamientos Faciales y Depilación Definitiva",
      therapist: "Lic. Tatiana Samana en alianza con @joma.skiin & @jomaskinclinic",
      location: "Gabinete en Nueva Córdoba",
      contact: "2804831115 | @lic.tatisamana",
      highlights: [
        { label: "Tratamientos Faciales (10% OFF)", desc: "Higiene facial profunda, descongestión de poros, hidratación intensiva y anti-age." },
        { label: "Revitalización Dérmica", desc: "Cuidado profesional para devolver luminosidad, elasticidad y salud a la piel." },
        { label: "Depilación Definitiva Láser", desc: "Tecnología láser de última generación, segura y eficaz para todo tipo de pieles." },
        { label: "Fechas de Sesiones", desc: "Fechas a confirmar para las próximas jornadas de depilación definitiva. ¡Reservá tu lugar con anticipación!" },
        { label: "Alianzas Profesionales", desc: "Articulación con @joma.skiin y @jomaskinclinic para aparatología de vanguardia." }
      ],
      whatsappMsg: PRESET_MESSAGES.faciales,
      ctaText: "Consultar por Tratamientos y Fechas"
    },
    masajes: {
      title: "Masajes Terapéuticos & Relax",
      badge: "Agenda Abierta",
      subtitle: "Regálate un momento para vos 🥰",
      therapist: "Lic. Tatiana Samana",
      location: "Nueva Córdoba",
      contact: "2804831115 | Pedí tu turno por WhatsApp o MD",
      highlights: [
        { label: "Masajes Descontracturantes", desc: "Terapia manual focalizada en desarmar nudos y sobrecargas en cuello, hombros y espalda." },
        { label: "Masajes Relajantes", desc: "Maniobras suaves y fluidas con aromaterapia para desconectar del estrés diario." },
        { label: "Alivio Tensional Inmediato", desc: "Mejora la circulación, oxigenación de tejidos y descanso nocturno." },
        { label: "Agenda Semanal Abierta", desc: "Turnos disponibles coordinados con antelación para asegurar tu franja horaria preferida." }
      ],
      whatsappMsg: PRESET_MESSAGES.masajes,
      ctaText: "Reservar Turno para Masajes"
    }
  };

  // Smooth scroll with precise header offset, and opens info modal on PC if specified
  const scrollToSection = (e, id, openModalOnDesktop = false) => {
    if (e && e.preventDefault) e.preventDefault();
    setActiveTab(id);
    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = isDesktop ? 95 : 75;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    // Only in PC/Desktop: automatically open the info modal box for that service
    if (openModalOnDesktop && isDesktop) {
      setTimeout(() => {
        if (id === 'kinesio') setInfoModal('kinesiologia');
        else if (id === 'estetica') setInfoModal('estetica');
        else if (id === 'masajes') setInfoModal('masajes');
      }, 350);
    }
  };

  return (
    <div 
      className="text-[#1c1c19] min-h-screen font-body flex flex-col selection:bg-[#6f583c] selection:text-white pb-20 md:pb-0 relative"
      style={{
        backgroundColor: '#faf7f2',
        backgroundImage: `
          radial-gradient(circle at 10% 15%, rgba(255, 255, 255, 0.9) 0%, transparent 45%),
          radial-gradient(circle at 90% 60%, rgba(238, 230, 219, 0.7) 0%, transparent 50%),
          url('/assets/bg-pattern.svg')
        `,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto, auto, 180px 180px',
        backgroundAttachment: 'fixed'
      }}
    >
      
      {/* TopAppBar (Full width desktop navbar, NO phone pill as requested) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf7f2]/90 backdrop-blur-xl border-b border-[#e5e2dd]/70 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex justify-between items-center">
          
          {/* Brand Logo Only (TS Monogram HD Transparent) + Clean Separator */}
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className="flex items-center group py-1" 
              aria-label="TS Kinesiología y Estética"
            >
              <img
                src="/assets/ts-monogram-hd.png"
                alt="TS Logo"
                className="h-10 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
              />
            </a>

            {/* Visual separator line between Logo and Nav links */}
            <div className="hidden md:block h-8 w-[1px] bg-[#ded7cd] ml-6 mr-8" />
          </div>

          {/* Desktop Navigation Links (Separated from Logo) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#4e453c]">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-[#6f583c] transition-colors py-1">Inicio</a>
            <a href="#servicios" onClick={(e) => scrollToSection(e, 'servicios')} className="hover:text-[#6f583c] transition-colors py-1">Servicios</a>
            <a href="#kinesio" onClick={(e) => scrollToSection(e, 'kinesio', true)} className="hover:text-[#6f583c] transition-colors py-1">Kinesiología</a>
            <a href="#estetica" onClick={(e) => scrollToSection(e, 'estetica', true)} className="hover:text-[#6f583c] transition-colors py-1">Estética</a>
            <a href="#masajes" onClick={(e) => scrollToSection(e, 'masajes', true)} className="hover:text-[#6f583c] transition-colors py-1">Masajes</a>
            <a href="#testimonios" onClick={(e) => scrollToSection(e, 'testimonios')} className="hover:text-[#6f583c] transition-colors py-1">Testimonios</a>
            <a href="#contacto" onClick={(e) => scrollToSection(e, 'contacto')} className="hover:text-[#6f583c] transition-colors py-1">Encontranos</a>
          </nav>

          {/* Contact Button (Phone pill removed) */}
          <div className="flex items-center gap-3">
            <a
              href={createWhatsAppLink(PRESET_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#6f583c] hover:bg-[#584329] text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md active:scale-95 transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>Contacto</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col pt-16 md:pt-24">

        {/* Hero Section */}
        <section id="home" className="relative py-12 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#897052]/5 blur-3xl -z-10 rounded-full pointer-events-none" />

          {/* Pill Tag, Headline & Subhead with scroll reveal */}
          <RevealOnScroll className="flex flex-col items-center">
            <div className="bg-[#897052]/10 text-[#6f583c] px-5 py-1.5 rounded-full font-sans text-xs md:text-sm font-semibold uppercase tracking-wider mb-2">
              Clínica Especializada
            </div>

            <h1 className="font-sans font-bold text-3xl sm:text-5xl md:text-6xl text-[#1c1c19] leading-[1.15] tracking-tight max-w-3xl mt-3">
              Recupera tu Bienestar con Profesionales
            </h1>

            <p className="font-body text-[#4e453c] text-sm sm:text-lg md:text-xl max-w-2xl leading-relaxed mt-4">
              Kinesiología integral y Estética de avanzada en un solo lugar. Atención kinésica a domicilio en Nueva Córdoba y tratamientos personalizados en gabinete.
            </p>
          </RevealOnScroll>

          {/* CTA Buttons with staggered reveal */}
          <RevealOnScroll delay={150}>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href={createWhatsAppLink(PRESET_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6f583c] hover:bg-[#584329] text-white px-8 sm:px-10 py-4 rounded-full font-sans font-semibold text-base shadow-[0_4px_16px_rgba(111,88,60,0.35)] hover:shadow-[0_6px_22px_rgba(111,88,60,0.45)] active:scale-98 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <span>Agendar Turno</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>

              <a
                href="#servicios"
                className="px-8 py-4 rounded-full border border-[#ded7cd] hover:border-[#6f583c] text-[#4e453c] hover:text-[#6f583c] font-sans font-semibold text-sm transition-all w-full sm:w-auto"
              >
                Explorar Servicios
              </a>
            </div>
          </RevealOnScroll>

          {/* Stats with progressive count animation and reveal */}
          <RevealOnScroll delay={250} className="w-full flex justify-center">
            <div className="grid grid-cols-3 gap-3 sm:gap-8 md:gap-12 mt-12 pt-8 border-t border-[#e5e2dd]/60 max-w-2xl w-full text-center">
              <div className="flex flex-col items-center">
                <p className="font-sans font-bold text-2xl sm:text-3xl text-[#6f583c] tracking-tight flex items-center justify-center">
                  <Counter end={2} duration={1800} />
                  <span className="ml-1">Años</span>
                </p>
                <p className="text-xs text-[#6b645c] font-medium mt-1">De Experiencia</p>
              </div>

              <div className="flex flex-col items-center">
                <p className="font-sans font-bold text-2xl sm:text-3xl text-[#6f583c] tracking-tight flex items-center justify-center">
                  <span>+</span>
                  <Counter end={500} duration={2200} />
                </p>
                <p className="text-xs text-[#6b645c] font-medium mt-1">Pacientes</p>
              </div>

              <div className="flex flex-col items-center">
                <p className="font-sans font-bold text-2xl sm:text-3xl text-[#6f583c] tracking-tight flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-xl sm:text-2xl text-[#6f583c]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <Counter end={4.9} duration={2000} decimals={1} />
                </p>
                <p className="text-xs text-[#6b645c] font-medium mt-1">4.9 Estrellas</p>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* Services Section (Cards with 2 buttons: "Consultar Servicio" & "Ver Info") */}
        <section id="servicios" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
              <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-[#1c1c19]">
                Nuestros Servicios
              </h2>
              <p className="text-[#4e453c] text-sm sm:text-base font-medium mt-1">
                Tratamientos profesionales de alta efectividad
              </p>
            </div>
          </RevealOnScroll>

          {/* 3-Column Grid with staggered scroll reveal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Kinesiología */}
            <RevealOnScroll delay={50} className="h-full">
              <div id="kinesio" className="scroll-mt-24 bg-white rounded-2xl border border-[#e5e2dd] overflow-hidden shadow-[0_4px_20px_rgba(111,88,60,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-[#e5e2dd]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRJKr74-1dBfIrKhYqM-ytsmfvKTMrTvH4X3Ni25rLumfDtEbJwgyZ6lQsFcu1qjHeZrbVUb-EZAStCnr4shQ85h-wk3qm3ZlGLnvks24_sEFhnWMMMu0us1O3NLOUIDpbyFKiRKqN97WtRDwq8VMjfbXM_g92kZbFydRDXGE0vCOvVprZXsd5-ho_NHdBkTOjsd_T7JAErNKBTk1KBmb7qtO6mRgqCWclrfvGTmHuSYj0Hv001Pr-TQ"
                      alt="Kinesiología y rehabilitación"
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#6f583c]/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                      Atención a Domicilio
                    </div>
                  </div>

                  <div className="p-6 flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-[#6f583c]">
                      <span 
                        className="material-symbols-outlined text-2xl" 
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        rebase_edit
                      </span>
                      <h3 className="font-sans font-bold text-xl md:text-2xl text-[#1c1c19]">
                        Kinesiología
                      </h3>
                    </div>

                    <p className="text-[#4e453c] text-sm leading-relaxed">
                      Rehabilitación física integral y terapia manual enfocada en tu pronta recuperación. Traumatología, pre y postoperatorios y atención personalizada a domicilio en Nueva Córdoba.
                    </p>

                    <div className="flex gap-2 mt-2 flex-wrap">
                      <span className="bg-[#f0ede8] text-[#1c1c19] text-xs px-3 py-1 rounded-full font-medium">
                        Rehabilitación
                      </span>
                      <span className="bg-[#f0ede8] text-[#1c1c19] text-xs px-3 py-1 rounded-full font-medium">
                        Terapia Manual
                      </span>
                      <span className="bg-[#f0ede8] text-[#1c1c19] text-xs px-3 py-1 rounded-full font-medium">
                        A Domicilio
                      </span>
                    </div>
                  </div>
                </div>

                {/* 2 Buttons Row */}
                <div className="p-6 pt-0 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setInfoModal('kinesiologia')}
                    className="w-full py-3 rounded-xl border border-[#ded7cd] hover:border-[#6f583c] bg-[#faf7f2] hover:bg-white text-[#4e453c] hover:text-[#6f583c] font-semibold text-xs md:text-sm transition-all flex items-center justify-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-base">info</span>
                    <span>Ver Info</span>
                  </button>

                  <a
                    href={createWhatsAppLink(PRESET_MESSAGES.kinesiologia)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-[#6f583c] hover:bg-[#584329] text-white font-semibold text-xs md:text-sm transition-all text-center flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    <span>Consultar</span>
                  </a>
                </div>
              </div>
            </RevealOnScroll>

            {/* Card 2: Estética */}
            <RevealOnScroll delay={180} className="h-full">
              <div id="estetica" className="scroll-mt-24 bg-white rounded-2xl border border-[#e5e2dd] overflow-hidden shadow-[0_4px_20px_rgba(111,88,60,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-[#e5e2dd]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaMXwuXDLfRRR31yPiMDqK4p4MUhIhpEUCHUft9uMa5chRKbebOwaUeT1T6DNHvuthk54Yk45PY7jfs5rlRHntxaiZqPAJ6NiTwlnuWJyDur3KzHsx6OOeCHGxCbyA3f97h7OqGjGw0G3yZyW6p65-xOjiDKD1GpxYuP9c4k82khUr8d8dI-srSuaAjLMz0x0Q1TJCEVf8O9UT6EE4MfWCPNFmKfuuQkfBzbUVFXAc6JJ5ae4azSqk1g"
                      alt="Tratamientos estéticos faciales"
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#6f583c]/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                      Promo 10% OFF
                    </div>
                  </div>

                  <div className="p-6 flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-[#6f583c]">
                      <span 
                        className="material-symbols-outlined text-2xl" 
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        spa
                      </span>
                      <h3 className="font-sans font-bold text-xl md:text-2xl text-[#1c1c19]">
                        Estética & Depilación
                      </h3>
                    </div>

                    <p className="text-[#4e453c] text-sm leading-relaxed">
                      Tratamientos faciales profesionales para resaltar tu belleza natural con 10% OFF activo. Depilación definitiva láser con sesiones periódicas (fechas a confirmar).
                    </p>

                    <div className="flex gap-2 mt-2 flex-wrap">
                      <span className="bg-[#f0ede8] text-[#1c1c19] text-xs px-3 py-1 rounded-full font-medium">
                        Facial 10% OFF
                      </span>
                      <span className="bg-[#f0ede8] text-[#1c1c19] text-xs px-3 py-1 rounded-full font-medium">
                        Depilación Láser
                      </span>
                      <span className="bg-[#f0ede8] text-[#1c1c19] text-xs px-3 py-1 rounded-full font-medium">
                        Fechas a confirmar
                      </span>
                    </div>
                  </div>
                </div>

                {/* 2 Buttons Row */}
                <div className="p-6 pt-0 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setInfoModal('estetica')}
                    className="w-full py-3 rounded-xl border border-[#ded7cd] hover:border-[#6f583c] bg-[#faf7f2] hover:bg-white text-[#4e453c] hover:text-[#6f583c] font-semibold text-xs md:text-sm transition-all flex items-center justify-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-base">info</span>
                    <span>Ver Info</span>
                  </button>

                  <a
                    href={createWhatsAppLink(PRESET_MESSAGES.faciales)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-[#6f583c] hover:bg-[#584329] text-white font-semibold text-xs md:text-sm transition-all text-center flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    <span>Consultar</span>
                  </a>
                </div>
              </div>
            </RevealOnScroll>

            {/* Card 3: Masajes Terapéuticos */}
            <RevealOnScroll delay={310} className="h-full md:col-span-2 lg:col-span-1">
              <div id="masajes" className="scroll-mt-24 bg-white rounded-2xl border border-[#e5e2dd] overflow-hidden shadow-[0_4px_20px_rgba(111,88,60,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-[#e5e2dd]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFDsiIVIlgm4dRDcMrPxcWM4b_-6D1V517TSkJTMLzJV-XKAzPq9m3-pwJn5fM3j88ZfumDsIzCWIMMaUotBBp3oDzYTPV8sZrxqNpD75e5k4m6SUpUOh0AAnq3EE1sXBm4jr1IzM--lGegwNfFM8Llo2Wb0ZQJlyjL5SnktxX9G4bqNVFdpxBoMzklsZD92feZJZRQQnVu9CSIGTqm1uTi26PvobHbd7rJmgrwsBQ-8356heQV8uF3A"
                      alt="Masajes relajantes y descontracturantes"
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#6f583c]/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                      Regálate un momento 🥰
                    </div>
                  </div>

                  <div className="p-6 flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-[#6f583c]">
                      <span 
                        className="material-symbols-outlined text-2xl" 
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        self_improvement
                      </span>
                      <h3 className="font-sans font-bold text-xl md:text-2xl text-[#1c1c19]">
                        Masajes Terapéuticos
                      </h3>
                    </div>

                    <p className="text-[#4e453c] text-sm leading-relaxed">
                      Sesiones de relajación y masajes descontracturantes diseñadas para aliviar contracturas, dolores cervicales y renovar tu energía corporal. Agenda abierta esta semana.
                    </p>

                    <div className="flex gap-2 mt-2 flex-wrap">
                      <span className="bg-[#f0ede8] text-[#1c1c19] text-xs px-3 py-1 rounded-full font-medium">
                        Relajación
                      </span>
                      <span className="bg-[#f0ede8] text-[#1c1c19] text-xs px-3 py-1 rounded-full font-medium">
                        Descontracturante
                      </span>
                      <span className="bg-[#f0ede8] text-[#1c1c19] text-xs px-3 py-1 rounded-full font-medium">
                        Agenda Abierta
                      </span>
                    </div>
                  </div>
                </div>

                {/* 2 Buttons Row */}
                <div className="p-6 pt-0 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setInfoModal('masajes')}
                    className="w-full py-3 rounded-xl border border-[#ded7cd] hover:border-[#6f583c] bg-[#faf7f2] hover:bg-white text-[#4e453c] hover:text-[#6f583c] font-semibold text-xs md:text-sm transition-all flex items-center justify-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-base">info</span>
                    <span>Ver Info</span>
                  </button>

                  <a
                    href={createWhatsAppLink(PRESET_MESSAGES.masajes)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-[#6f583c] hover:bg-[#584329] text-white font-semibold text-xs md:text-sm transition-all text-center flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    <span>Consultar</span>
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Testimonials Carousel (Auto-moving on both PC and mobile with 6 reviews) */}
        <section id="testimonios" className="scroll-mt-24 bg-[#f6f3ee]/90 backdrop-blur-sm py-16 md:py-24 border-y border-[#e5e2dd]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6f583c]/10 text-[#6f583c] text-xs font-bold uppercase tracking-wider mb-2">
                  Experiencias de Pacientes
                </div>
                <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-[#1c1c19]">
                  Lo que dicen nuestros pacientes
                </h2>
                <p className="text-[#4e453c] text-sm sm:text-base font-medium mt-1">
                  Opiniones y recuperaciones reales
                </p>
              </div>
            </RevealOnScroll>

            {/* Carousel track with scroll reveal */}
            <RevealOnScroll delay={150}>
              {/* Mobile View: 1 Card Carousel (As the user liked on mobile) */}
              <div className="md:hidden relative overflow-hidden min-h-[220px] flex items-center justify-center">
                <div 
                  key={currentTestimonial}
                  className="w-full bg-white p-6 rounded-3xl shadow-md border border-[#e5e2dd] flex flex-col justify-between gap-5 transition-all duration-500 animate-fadeIn"
                >
                  <div className="space-y-3">
                    <div className="flex text-[#6f583c] gap-1">
                      {[...Array(testimonials[currentTestimonial].stars)].map((_, sIdx) => (
                        <span
                          key={sIdx}
                          className="material-symbols-outlined text-xl"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                    <p className="font-body text-base text-[#1c1c19] italic leading-relaxed">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center text-xs pt-4 border-t border-[#f0ede8]">
                    <span className="font-bold text-sm text-[#1c1c19]">
                      {testimonials[currentTestimonial].author}
                    </span>
                    <span className="text-xs bg-[#f0ede8] px-3 py-1 rounded-full text-[#6f583c] font-semibold">
                      {testimonials[currentTestimonial].service}
                    </span>
                  </div>
                </div>
              </div>

              {/* Desktop View: Calesita Carousel (3 Cards Visible Simultaneously, Smooth Moving Track) */}
              <div className="hidden md:block relative overflow-hidden py-2">
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${(currentTestimonial % testimonials.length) * 33.333333}%)` }}
                >
                  {extendedTestimonials.map((t, idx) => (
                    <div key={idx} className="w-1/3 shrink-0 px-3">
                      <div className="bg-white p-7 rounded-3xl shadow-sm border border-[#e5e2dd] h-full flex flex-col justify-between gap-5 hover:shadow-md transition-shadow">
                        <div className="space-y-3">
                          <div className="flex text-[#6f583c] gap-1">
                            {[...Array(t.stars)].map((_, sIdx) => (
                              <span
                                key={sIdx}
                                className="material-symbols-outlined text-lg"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                              >
                                star
                              </span>
                            ))}
                          </div>
                          <p className="font-body text-sm text-[#1c1c19] italic leading-relaxed">
                            "{t.text}"
                          </p>
                        </div>

                        <div className="flex justify-between items-center text-xs pt-4 border-t border-[#f0ede8]">
                          <span className="font-bold text-sm text-[#1c1c19]">
                            {t.author}
                          </span>
                          <span className="text-[11px] bg-[#f0ede8] px-3 py-1 rounded-full text-[#6f583c] font-semibold">
                            {t.service}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Navigation Indicators (Dots + Desktop Arrows) */}
              <div className="flex justify-center items-center gap-3 mt-8">
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="hidden md:flex w-8 h-8 rounded-full border border-[#ded7cd] hover:border-[#6f583c] bg-white text-[#4e453c] hover:text-[#6f583c] items-center justify-center transition-all shadow-sm active:scale-95"
                  aria-label="Testimonio anterior"
                >
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>

                <div className="flex items-center gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentTestimonial(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        currentTestimonial === idx ? 'w-8 bg-[#6f583c]' : 'w-2.5 bg-[#ded7cd] hover:bg-[#897052]'
                      }`}
                      aria-label={`Ir al testimonio ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="hidden md:flex w-8 h-8 rounded-full border border-[#ded7cd] hover:border-[#6f583c] bg-white text-[#4e453c] hover:text-[#6f583c] items-center justify-center transition-all shadow-sm active:scale-95"
                  aria-label="Testimonio siguiente"
                >
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Contact / Location Section (Interactive Google Maps) */}
        <section id="contacto" className="scroll-mt-24 py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-[#1c1c19]">
                Encontranos
              </h2>
              <p className="text-[#4e453c] text-sm sm:text-base font-medium mt-1">
                Atención presencial en Nueva Córdoba y visitas a domicilio
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Real Interactive Google Maps iframe */}
            <RevealOnScroll delay={100} direction="left" className="lg:col-span-7">
              <div className="h-80 sm:h-[420px] bg-[#e5e2dd] rounded-3xl overflow-hidden border border-[#e5e2dd] shadow-sm relative">
                <iframe
                  title="Mapa de cobertura en Nueva Córdoba"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13618.337775535313!2d-64.1932626!3d-31.4279581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a28532f518e1%3A0xe54d603a11977e16!2sNueva%20C%C3%B3rdoba%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#6f583c] border border-[#e5e2dd] shadow-md pointer-events-none flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  <span>Nueva Córdoba (Zona de Cobertura)</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Right: Information Card */}
            <RevealOnScroll delay={200} direction="right" className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e5e2dd] shadow-sm flex flex-col gap-5">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#6f583c] bg-[#897052]/10 px-3 py-1 rounded-full">
                    Zona de Cobertura
                  </span>
                  <h3 className="font-sans font-bold text-2xl text-[#1c1c19]">
                    Nueva Córdoba y alrededores
                  </h3>
                  <p className="text-sm text-[#4e453c] leading-relaxed">
                    Atención kinésica a domicilio equipada con camilla e instrumental, y sesiones de estética/masajes en consultorio acondicionado con turnos coordinados.
                  </p>
                </div>

                <div className="space-y-3 text-sm text-[#4e453c] pt-2 border-t border-[#f0ede8]">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#6f583c]">phone_iphone</span>
                    <span className="font-semibold text-[#1c1c19]">
                      {DISPLAY_PHONE}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#6f583c]">calendar_month</span>
                    <span>Lunes a Sábados (Turnos con reserva previa)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#6f583c]">home</span>
                    <span>Atención en tu domicilio sin traslados ni esperas</span>
                  </div>
                </div>

                <a
                  href={createWhatsAppLink(PRESET_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-4 rounded-2xl font-sans font-semibold text-base w-full flex items-center justify-center gap-2 shadow-sm hover:shadow-md active:scale-98 transition-all"
                >
                  <span className="material-symbols-outlined text-xl">chat</span>
                  <span>Contactar por WhatsApp</span>
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-12 md:py-16 bg-[#f6f3ee] border-t border-[#e5e2dd]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll delay={100}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#e5e2dd]">
                {/* Brand Col */}
                <div className="md:col-span-2 space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      src="/assets/ts-monogram-hd.png"
                      alt="TS Monograma"
                      className="h-12 w-auto object-contain drop-shadow-sm"
                    />
                    <div>
                      <h3 className="font-sans font-bold text-lg text-[#6f583c] leading-tight">
                        Tatiana Samana
                      </h3>
                      <p className="text-[11px] font-sans uppercase tracking-wider text-[#897052]">
                        Kinesiología & Estética
                      </p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4e453c] max-w-sm leading-relaxed">
                    Lic. Tatiana Samana. Traumatología, rehabilitación a domicilio, masajes terapéuticos, estética dérmica y depilación definitiva.
                  </p>
                </div>

                {/* Links Col */}
                <div className="space-y-2">
                  <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-[#6f583c]">Navegación</h4>
                  <div className="flex flex-col gap-1.5 text-xs text-[#4e453c]">
                    <a href="#home" className="hover:text-[#6f583c] transition-colors">Inicio</a>
                    <a href="#kinesio" className="hover:text-[#6f583c] transition-colors">Kinesiología</a>
                    <a href="#estetica" className="hover:text-[#6f583c] transition-colors">Estética & Masajes</a>
                    <a href="#testimonios" className="hover:text-[#6f583c] transition-colors">Testimonios</a>
                  </div>
                </div>

                {/* Contact Col */}
                <div className="space-y-2">
                  <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-[#6f583c]">Contacto</h4>
                  <div className="flex flex-col gap-1.5 text-xs text-[#4e453c]">
                    <a href={createWhatsAppLink(PRESET_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="hover:text-[#6f583c] transition-colors">
                      WhatsApp: {DISPLAY_PHONE}
                    </a>
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#6f583c] transition-colors">
                      Instagram: {INSTAGRAM_HANDLE}
                    </a>
                    <span>Nueva Córdoba, Argentina</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7f756b]">
              <p>© {new Date().getFullYear()} TS Kinesiología y Estética. Lic. Tatiana Samana. Precision in Recovery.</p>
              <a href="#home" className="hover:text-[#6f583c] transition-colors flex items-center gap-1">
                <span>Volver arriba</span>
                <span className="material-symbols-outlined text-sm">arrow_upward</span>
              </a>
            </div>
          </div>
        </footer>
      </main>

      {/* BottomNavBar (Mobile only: Kinesio, Estética, Masajes, Contacto) */}
      <nav className="fixed bottom-0 left-0 right-0 w-full md:hidden z-50 bg-[#fcf9f4]/95 backdrop-blur-xl border-t border-[#e5e2dd]/70 shadow-[0_-4px_20px_rgba(111,88,60,0.05)] flex justify-around items-center h-16 pb-safe">
        <a
          href="#kinesio"
          onClick={(e) => scrollToSection(e, 'kinesio')}
          className={`flex flex-col items-center justify-center active:scale-90 transition-transform ${
            activeTab === 'kinesio' ? 'text-[#6f583c] font-bold' : 'text-[#6b5c4c]'
          }`}
        >
          <span 
            className="material-symbols-outlined text-xl" 
            style={{ fontVariationSettings: activeTab === 'kinesio' ? "'FILL' 1" : "'FILL' 0" }}
          >
            rebase_edit
          </span>
          <span className="text-[10px] uppercase font-sans tracking-wider mt-0.5">Kinesio</span>
        </a>

        <a
          href="#estetica"
          onClick={(e) => scrollToSection(e, 'estetica')}
          className={`flex flex-col items-center justify-center active:scale-90 transition-transform ${
            activeTab === 'estetica' ? 'text-[#6f583c] font-bold' : 'text-[#6b5c4c]'
          }`}
        >
          <span 
            className="material-symbols-outlined text-xl" 
            style={{ fontVariationSettings: activeTab === 'estetica' ? "'FILL' 1" : "'FILL' 0" }}
          >
            spa
          </span>
          <span className="text-[10px] uppercase font-sans tracking-wider mt-0.5">Estética</span>
        </a>

        <a
          href="#masajes"
          onClick={(e) => scrollToSection(e, 'masajes')}
          className={`flex flex-col items-center justify-center active:scale-90 transition-transform ${
            activeTab === 'masajes' ? 'text-[#6f583c] font-bold' : 'text-[#6b5c4c]'
          }`}
        >
          <span 
            className="material-symbols-outlined text-xl" 
            style={{ fontVariationSettings: activeTab === 'masajes' ? "'FILL' 1" : "'FILL' 0" }}
          >
            self_improvement
          </span>
          <span className="text-[10px] uppercase font-sans tracking-wider mt-0.5">Masajes</span>
        </a>

        <a
          href="#contacto"
          onClick={(e) => scrollToSection(e, 'contacto')}
          className={`flex flex-col items-center justify-center active:scale-90 transition-transform ${
            activeTab === 'contacto' ? 'text-[#6f583c] font-bold' : 'text-[#6b5c4c]'
          }`}
        >
          <span 
            className="material-symbols-outlined text-xl" 
            style={{ fontVariationSettings: activeTab === 'contacto' ? "'FILL' 1" : "'FILL' 0" }}
          >
            chat
          </span>
          <span className="text-[10px] uppercase font-sans tracking-wider mt-0.5">Contacto</span>
        </a>
      </nav>

      {/* Ventana Flotante Modal ("Ver Info" con toda la información recopilada de los flyers) */}
      {infoModal && serviceDetails[infoModal] && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setInfoModal(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative border border-[#e5e2dd] max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 pb-4 bg-[#faf7f2] border-b border-[#e5e2dd] relative">
              <button
                onClick={() => setInfoModal(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white border border-[#ded7cd] text-[#4e453c] hover:text-black flex items-center justify-center text-sm font-bold shadow-sm transition-all"
                aria-label="Cerrar ventana"
              >
                ✕
              </button>
              <div className="inline-block px-3 py-1 rounded-full bg-[#897052]/15 text-[#6f583c] text-xs font-bold uppercase tracking-wider mb-2">
                {serviceDetails[infoModal].badge}
              </div>
              <h3 className="font-sans font-bold text-2xl text-[#1c1c19]">
                {serviceDetails[infoModal].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6f583c] font-semibold mt-1">
                {serviceDetails[infoModal].subtitle}
              </p>
            </div>

            {/* Modal Body with compiled info */}
            <div className="p-6 overflow-y-auto space-y-5 text-sm">
              <div className="p-3.5 rounded-2xl bg-[#f8f5ee] border border-[#e5e2dd] text-xs text-[#4e453c] space-y-1">
                <p><strong>Profesional a cargo:</strong> {serviceDetails[infoModal].therapist}</p>
                <p><strong>Zona de atención:</strong> {serviceDetails[infoModal].location}</p>
              </div>

              <div>
                <h4 className="font-sans font-bold text-sm text-[#1c1c19] uppercase tracking-wide mb-3">
                  Detalles y Tratamientos Incluidos:
                </h4>
                <div className="space-y-3">
                  {serviceDetails[infoModal].highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-[#6f583c] text-lg flex-shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                      </span>
                      <div>
                        <strong className="text-[#1c1c19] font-semibold text-xs sm:text-sm">{item.label}: </strong>
                        <span className="text-[#4e453c] text-xs sm:text-sm">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer with WhatsApp CTA */}
            <div className="p-5 bg-[#faf7f2] border-t border-[#e5e2dd] flex flex-col gap-2">
              <a
                href={createWhatsAppLink(serviceDetails[infoModal].whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-[#6f583c] hover:bg-[#584329] text-white font-semibold text-sm shadow-md flex items-center justify-center gap-2 active:scale-98 transition-all"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                <span>{serviceDetails[infoModal].ctaText}</span>
              </a>
              <p className="text-[11px] text-center text-[#7f756b]">
                Respuesta directa de Tatiana Samana por WhatsApp
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
