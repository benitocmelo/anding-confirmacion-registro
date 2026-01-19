import React from 'react';
import { MessageCircle } from 'lucide-react';
import { LINKS } from '../constants';

const WhatsAppCTA: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4 pt-2 pb-6">
      
      {/* Hero Button Container */}
      <div className="w-full relative group">
        {/* The Halo Effect - Diffuse Green Glow */}
        <div className="absolute inset-0 bg-green-500 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
        
        {/* Main Button */}
        <a 
          href={LINKS.WHATSAPP_GROUP}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:to-[#075E54] text-white py-5 px-4 rounded-xl shadow-2xl transform transition-all active:scale-95 animate-[breathing_3s_ease-in-out_infinite]"
        >
          <MessageCircle className="w-8 h-8 fill-white text-transparent" />
          <span className="font-cyber font-bold text-lg md:text-xl tracking-wide uppercase text-shadow-sm">
            Unirme al Grupo Ahora 🟢
          </span>
        </a>
      </div>

      {/* Loss Aversion Warning */}
      <p className="text-center text-[11px] md:text-xs font-tech text-red-400/80 max-w-xs leading-tight">
        <span className="font-bold">🚫 Regla vital:</span> Si te sales, el sistema libera tu cupo y pierdes los bonos.
      </p>

      {/* CSS for custom breathing animation */}
      <style>{`
        @keyframes breathing {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppCTA;