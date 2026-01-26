import React from 'react';
import { Lock, Rocket, Gift, AlertTriangle } from 'lucide-react';

const InfoCard: React.FC = () => {
  return (
    <div className="w-full space-y-6">
      {/* Sub-headline High Value Info */}
      <div className="relative p-4 border-l-2 border-neon-gold bg-gradient-to-r from-yellow-900/10 to-transparent">
        <p className="font-tech text-gray-200 text-base leading-relaxed">
          La información de alto valor para <span className="text-white font-semibold">facturar en dólares</span> no se comparte públicamente. Se entrega exclusivamente a nuestra <span className="text-neon-gold">Comunidad Privada.</span>
        </p>
      </div>

      {/* Main Content Widget */}
      <div className="relative bg-[#0A0A0A]/90 border border-white/10 rounded-xl p-6 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        
        {/* Header of the card */}
        <div className="mb-6">
          <p className="font-tech text-gray-400 text-sm mb-2">
            Estás a un paso de entrar al círculo de Blacks University.
          </p>
          <div className="flex items-center gap-2">
             <AlertTriangle className="text-neon-gold w-5 h-5 animate-pulse" />
             <h2 className="font-cyber text-sm md:text-base font-bold text-white uppercase tracking-wider">
               ¿Por qué es OBLIGATORIO unirte?
             </h2>
          </div>
        </div>

        {/* Benefits List */}
        <ul className="space-y-5">
          {/* Item 1 */}
          <li className="flex items-start gap-3 group">
            <div className="mt-1 p-1.5 rounded bg-gray-900 border border-gray-800 group-hover:border-gray-600 transition-colors">
              <Lock className="w-4 h-4 text-neon-gold" />
            </div>
            <div>
              <h3 className="text-white font-cyber text-xs font-bold uppercase mb-0.5">Información Confidencial</h3>
              <p className="text-sm font-tech text-gray-400 leading-snug">
                Revelaremos los productos "ocultos" que más se están vendiendo ahora mismo.
              </p>
            </div>
          </li>

          {/* Item 2 */}
          <li className="flex items-start gap-3 group">
             <div className="mt-1 p-1.5 rounded bg-gray-900 border border-gray-800 group-hover:border-gray-600 transition-colors">
              <Rocket className="w-4 h-4 text-neon-green" />
            </div>
            <div>
              <h3 className="text-white font-cyber text-xs font-bold uppercase mb-0.5">Prioridad de Acceso</h3>
              <p className="text-sm font-tech text-gray-400 leading-snug">
                El enlace del 29 de Enero se publicará en el grupo 1 hora antes que en cualquier otro lugar.
              </p>
            </div>
          </li>

          {/* Item 3 */}
          <li className="flex items-start gap-3 group">
             <div className="mt-1 p-1.5 rounded bg-gray-900 border border-gray-800 group-hover:border-gray-600 transition-colors">
              <Gift className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <h3 className="text-white font-cyber text-xs font-bold uppercase mb-0.5">Bonos de Bienvenida</h3>
              <p className="text-sm font-tech text-gray-400 leading-snug">
                Material de estudio inmediato al ingresar.
              </p>
            </div>
          </li>
        </ul>

        {/* Closing Punchline */}
        <div className="mt-6 pt-4 border-t border-white/5 text-center">
            <p className="font-cyber text-xs md:text-sm text-gray-300 tracking-wide italic">
              "No te quedes en la puerta mirando cómo otros despegan."
            </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;