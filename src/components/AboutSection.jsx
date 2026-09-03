import { Award, HeartHandshake, UserCheck, ShieldPlus } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { INSTAGRAM_URL } from '../utils/whatsapp';

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-[#6f583c]/20 -z-10" />
              
              <div className="rounded-3xl overflow-hidden shadow-xl border border-[#e8e2d8] bg-white aspect-[4/5] relative">
                <img
                  src="https://lh3.googleusercontent.com/aida/AEtjO1VcBSYqQNQtPAIwvnWIZfyaAAkqLGFBm2Zbx77RmPZDZiFEU-RL6727HsZzfPqyQFuP-OY41_AiuxM6BbPiAsRZIyyCK6kcw5UCGidWUBjrN_ht69kyZN8lz8t91lz3n5oHLeDFKcXTzVhbgI8wG1K0QAs6SYVi_Eh2VQKUYZivvIqVAVBbldXdQmQVE7T2pyoE8YDA5Gn74pd9TiBCmx2Iq8SynUSRbDZkXSpcIdIeS-8rXGHmu-qOmpE"
                  alt="Lic. Tatiana Samana - Kinesiología y Estética"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                
                {/* Floating pill badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#e8e2d8] shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#f5efe8] text-[#6f583c] flex items-center justify-center font-bold font-serif text-lg">
                      TS
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#22201d]">Tatiana Samana</h4>
                      <p className="text-xs text-[#6b645c]">Lic. en Kinesiología y Fisioterapia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6f583c]/10 text-[#6f583c] text-xs font-bold uppercase tracking-wider">
              Enfoque Profesional & Humano
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-[#22201d] leading-tight">
              Cuidado personalizado donde la salud física y el bienestar estético se potencian
            </h3>

            <p className="text-[#5e574f] text-base leading-relaxed">
              Como Licenciada en Kinesiología y Fisioterapia, mi objetivo es acompañar a cada persona con un abordaje clínico riguroso pero cercano. Entiendo que detrás de cada dolor muscular, lesión o necesidad de rehabilitación, hay una rutina y una calidad de vida que queremos recuperar cuanto antes.
            </p>

            <p className="text-[#5e574f] text-base leading-relaxed">
              En el área estética y de masajes, aplico el conocimiento anatómico y fisiológico del cuerpo para que cada tratamiento no sea solo cosmético, sino una experiencia real de alivio tensional, desconexión del estrés y cuidado integral de la piel.
            </p>

            {/* Credibility highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#e8e2d8]">
                <UserCheck className="w-5 h-5 text-[#6f583c] flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-[#22201d]">Atención 1 a 1</h5>
                  <p className="text-xs text-[#6b645c]">Sin atenciones simultáneas; el tiempo de la sesión es 100% para vos.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#e8e2d8]">
                <HeartHandshake className="w-5 h-5 text-[#6f583c] flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-[#22201d]">A Domicilio en Nva Córdoba</h5>
                  <p className="text-xs text-[#6b645c]">Comodidad total para pacientes postquirúrgicos o con movilidad reducida.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#6f583c] hover:underline"
              >
                <InstagramIcon className="w-4 h-4 text-[#e1306c]" />
                <span>Seguir en Instagram @lic.tatisamana</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
