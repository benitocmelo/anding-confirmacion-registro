import React from 'react';
import { MessageCircle } from 'lucide-react';
import { LINKS } from '../constants';

const WhatsAppCTA: React.FC = () => {

  const handleJoinClick = () => {
    // Disparar evento de Facebook Pixel MANUALMENTE
    // @ts-ignore
    if (window.fbq) {
      console.log("Disparando evento Lead...");
      // @ts-ignore
      window.fbq('track', 'Lead', {
        content_name: 'Grupo WhatsApp Lanzamiento',
        status: 'joined'
      });
    }
  };

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
          onClick={handleJoinClick}
          className="relative w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:to-[#075E54] text-white py-5 px-3 rounded-xl shadow-2xl transform transition-all active:scale-95 animate-[breathing_3s_ease-in-out_infinite] border border-white/10"
        >
          {/* Icon hidden on very small screens to save space for text, visible on larger */}
          <MessageCircle className="w-6 h-6 md:w-8 md:h-8 fill-white text-transparent shrink-0" />
          
          <div className="flex flex-col items-start leading-none">
             <span className="font-cyber font-bold text-sm md:text-lg tracking-wide uppercase text-shadow-sm text-left">
              👉 Confirmar mi asiento
            </span>
             <span className="font-tech text-xs md:text-sm font-medium tracking-wider uppercase opacity-90">
              Y unirme al grupo VIP
            </span>
          </div>
        </a>
      </div>

      {/* Loss Aversion Warning */}
      <p className="text-center text-[11px] md:text-xs font-tech text-red-400/80 max-w-xs leading-tight">
        <span className="font-bold">🚫 Regla vital:</span> Si te sales, el sistema libera tu cupo y pierdes los bonos.
      </p>

      {/* CSS for custom breathing animation */}
      <style>{`
        @keyframes breathing {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
          50% { transform: scale(1.02); box-shadow: 0 0 20px 0 rgba(37, 211, 102, 0.4); }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppCTA;