import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const InfoCard: React.FC = () => {
  return (
    <div className="w-full">
      {/* Context Text */}
      <p className="font-tech text-gray-300 text-lg text-center mb-6 leading-relaxed max-w-xs mx-auto">
        Este grupo es tu <span className="text-white font-medium">sala de espera exclusiva</span> para la Masterclass de Blacks University.
      </p>

      {/* Clean Info Widget */}
      <div className="relative bg-[#0A0A0A]/80 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-3">
          <AlertCircle className="text-neon-gold w-5 h-5" />
          <h2 className="font-cyber text-sm font-bold tracking-wider text-white uppercase">
            ¿QUÉ PASARÁ EL 22 DE ENERO?
          </h2>
        </div>

        <ul className="space-y-3">
          {[
            "Liberación del Enlace Privado",
            "Entrega de Materiales de Trabajo",
            "Revelación de la Oferta Especial"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-sm font-tech text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoCard;