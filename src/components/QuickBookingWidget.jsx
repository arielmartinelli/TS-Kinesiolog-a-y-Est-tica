import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Sparkles, 
  MessageCircle, 
  CheckCircle,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import { createWhatsAppLink, DISPLAY_PHONE } from '../utils/whatsapp';

export default function QuickBookingWidget() {
  const [service, setService] = useState('kinesio-domicilio');
  const [zone, setZone] = useState('nueva-cordoba');
  const [timePreference, setTimePreference] = useState('tarde');
  const [name, setName] = useState('');

  const servicesList = [
    { id: 'kinesio-domicilio', name: 'Kinesiología a Domicilio', category: 'Kinesiología' },
    { id: 'rehab-traumatologica', name: 'Rehabilitación Traumatológica', category: 'Kinesiología' },
    { id: 'masajes-relax', name: 'Masajes Relajantes / Descontracturantes', category: 'Estética' },
    { id: 'facial-promo', name: 'Tratamiento Facial (Promo 10% OFF)', category: 'Estética' },
    { id: 'depilacion-def', name: 'Depilación Definitiva Láser', category: 'Estética' },
  ];

  const zonesList = [
    { id: 'nueva-cordoba', name: 'Nueva Córdoba' },
    { id: 'centro', name: 'Centro / Güemes' },
    { id: 'alrededores', name: 'Barrio Jardín / Otras zonas' },
  ];

  const timeList = [
    { id: 'manana', name: 'Por la Mañana (9 a 13hs)' },
    { id: 'tarde', name: 'Por la Tarde (14 a 20hs)' },
    { id: 'indistinto', name: 'Horario a convenir' },
  ];

  const handleBooking = (e) => {
    e.preventDefault();

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#6f583c', '#c4aa82', '#7A8C73', '#ffffff'],
      });
    } catch (err) {
      // Ignore if canvas confetti not supported
    }

    const selectedServiceName = servicesList.find((s) => s.id === service)?.name || service;
    const selectedZoneName = zonesList.find((z) => z.id === zone)?.name || zone;
    const selectedTimeName = timeList.find((t) => t.id === timePreference)?.name || timePreference;

    const patientName = name.trim() ? `Soy ${name.trim()}. ` : '';
    const message = `Hola Tatiana! 👋 ${patientName}Quisiera coordinar un turno para *${selectedServiceName}*.\n\n📍 Zona: ${selectedZoneName}\n⏰ Preferencia: ${selectedTimeName}\n\n¿Qué disponibilidad tenés en tu agenda? Muchas gracias!`;

    const link = createWhatsAppLink(message);
    window.open(link, '_blank');
  };

  return (
    <section id="turnos" className="py-16 md:py-24 bg-gradient-to-b from-[#faf7f2] via-[#f3efe9] to-[#faf7f2] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-[#e5ded3] shadow-[0_12px_40px_rgba(111,88,60,0.09)]">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6f583c]/10 text-[#6f583c] text-xs font-bold uppercase tracking-wider mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>Agenda Tu Consulta en 3 Clics</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#22201d] tracking-tight">
              Configurá tu consulta y recibí respuesta directa
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#5e574f]">
              Seleccioná el servicio que necesitás. Te responderá personalmente la Lic. Tatiana Samana por WhatsApp.
            </p>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleBooking} className="space-y-6">
            {/* 1. Service Selection */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-[#22201d] mb-3 uppercase tracking-wide">
                1. ¿Qué servicio o tratamiento buscás?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {servicesList.map((item) => {
                  const isSelected = service === item.id;
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setService(item.id)}
                      className={`text-left p-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between text-xs sm:text-sm ${
                        isSelected
                          ? 'bg-[#f5efe8] border-[#6f583c] text-[#6f583c] font-bold shadow-sm ring-1 ring-[#6f583c]'
                          : 'bg-white border-[#ded7cd] text-[#443e37] hover:bg-[#faf7f2]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#6f583c]' : 'bg-[#ded7cd]'}`} />
                        <span>{item.name}</span>
                      </div>
                      {isSelected && <CheckCircle className="w-4 h-4 text-[#6f583c]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Zone Selection */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-[#22201d] mb-3 uppercase tracking-wide">
                2. ¿En qué zona te encontrás?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {zonesList.map((item) => {
                  const isSelected = zone === item.id;
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setZone(item.id)}
                      className={`text-center p-3 rounded-2xl border transition-all text-xs sm:text-sm font-medium ${
                        isSelected
                          ? 'bg-[#f5efe8] border-[#6f583c] text-[#6f583c] font-bold ring-1 ring-[#6f583c]'
                          : 'bg-white border-[#ded7cd] text-[#443e37] hover:bg-[#faf7f2]'
                      }`}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Time Preference */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-[#22201d] mb-3 uppercase tracking-wide">
                3. Tu franja horaria preferida
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {timeList.map((item) => {
                  const isSelected = timePreference === item.id;
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setTimePreference(item.id)}
                      className={`text-center p-3 rounded-2xl border transition-all text-xs sm:text-sm font-medium ${
                        isSelected
                          ? 'bg-[#f5efe8] border-[#6f583c] text-[#6f583c] font-bold ring-1 ring-[#6f583c]'
                          : 'bg-white border-[#ded7cd] text-[#443e37] hover:bg-[#faf7f2]'
                      }`}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Optional Patient Name */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-[#22201d] mb-2 uppercase tracking-wide">
                Tu Nombre (Opcional)
              </label>
              <input
                type="text"
                placeholder="Ej: Laura / Martín"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border border-[#ded7cd] focus:outline-none focus:ring-2 focus:ring-[#6f583c] bg-[#fdfbf7] text-sm text-[#22201d]"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#6f583c] hover:bg-[#513e28] text-white font-bold text-base shadow-[0_6px_20px_rgba(111,88,60,0.3)] hover:shadow-[0_8px_25px_rgba(111,88,60,0.4)] transition-all active:scale-98"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>Enviar Consulta Directa por WhatsApp</span>
              </button>

              <div className="flex items-center justify-center gap-4 mt-4 text-xs text-[#6b645c]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#7A8C73]" />
                  Respuesta directa de la profesional
                </span>
                <span>•</span>
                <span>Sin intermediarios</span>
                <span>•</span>
                <span>Tel: {DISPLAY_PHONE}</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
