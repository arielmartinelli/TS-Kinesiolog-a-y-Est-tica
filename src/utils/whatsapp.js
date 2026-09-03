export const WHATSAPP_PHONE = "5492804831115";
export const DISPLAY_PHONE = "+54 9 280 483-1115";
export const INSTAGRAM_HANDLE = "@lic.tatisamana";
export const INSTAGRAM_URL = "https://www.instagram.com/lic.tatisamana/";
export const JOMA_URL = "https://www.instagram.com/joma.skiin/";

export function createWhatsAppLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
}

export const PRESET_MESSAGES = {
  general: "Hola Tatiana! 👋 Estuve viendo tu página web y quisiera consultar por turnos disponibles.",
  kinesiologia: "Hola Tatiana! 👋 Quisiera consultar por atención kinésica y rehabilitación. ¿Tenés disponibilidad para atención a domicilio en Nueva Córdoba?",
  domicilio: "Hola Tatiana! 👋 Necesito coordinar una sesión de kinesiología a domicilio en Nueva Córdoba/alrededores.",
  traumatologia: "Hola Tatiana! 👋 Quisiera consultar por rehabilitación de traumatología (pre/post operatorio o dolor muscular/articular).",
  masajes: "Hola Tatiana! ✨ Quisiera agendar un turno para masajes relajantes / descontracturantes esta semana.",
  faciales: "Hola Tatiana! ✨ Quisiera consultar por tratamientos faciales y la promo disponible.",
  depilacion: "Hola Tatiana! ✨ Quisiera información y reservar mi turno para la próxima sesión de depilación definitiva.",
};
