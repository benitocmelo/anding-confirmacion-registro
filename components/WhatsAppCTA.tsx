import React from 'react';
import { MessageCircle } from 'lucide-react';
import { LINKS } from '../constants';

const WhatsAppCTA: React.FC = () => {

  const handleJoinClick = () => {
    // 1. Log para verificar en consola que el clic funciona
    console.log("🔵 Clic detectado: Intentando enviar evento a Facebook...");

    // 2. Disparar evento de Facebook Pixel MANUALMENTE
    // @ts-ignore
    if (typeof window.fbq === 'function') {
      // @ts-ignore
      window.fbq('track', 'Lead', {
        content_name: 'Grupo WhatsApp Lanzamiento',
        status: 'clicked_button',
        value: 0.00,
        currency: 'USD'
      });
      console.log("🟢 Evento LEAD enviado a Facebook Pixel");
    } else {
      console.warn("🔴 Pixel no detectado (window.fbq no existe)");
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-4 pt-2 pb-6 relative z-20">
      
      {/* Hero Button Container */}
      <div className="w-full relative group max-w-md mx-auto">
        {/* The Halo Effect - Diffuse Green Glow */}
        <div className="absolute inset-0 bg-green-500 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
        
        {/* Main Button */}
        <a 
          href={LINKS.WHATSAPP_GROUP}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleJoinClick}
          className="relative w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:to-[#075E54] text-white py-5 px-3 rounded-xl shadow-[0_0_30px_rgba(37,211,102,0.4)] transform transition-all active:scale-95 animate-[breathing_3s_ease-in-out_infinite] border border-white/10 overflow-hidden"
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-white/20 skew-x-12 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>

          {/* Icon hidden on very small screens to save space for text, visible on larger */}
          <MessageCircle className="w-6 h-6 md:w-8 md:h-8 fill-white text-transparent shrink-0 relative z-10" />
          
          <div className="flex flex-col items-start leading-none relative z-10">
             <span className="font-cyber font-bold text-sm md:text-lg tracking-wide uppercase text-shadow-sm text-left">
              CONFIRMAR MI CUPO AHORA 👉
            </span>
             <span className="font-tech text-xs md:text-sm font-medium tracking-wider uppercase opacity-90">
              Último paso requerido
            </span>
          </div>
        </a>
      </div>

      {/* Loss Aversion Warning */}
      <div className="mt-2 text-center space-y-1">
        <p className="text-[10px] md:text-xs font-tech text-red-400/90 font-medium flex items-center justify-center gap-2 max-w-xs mx-auto leading-tight">
            <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0"></span>
            ADVERTENCIA: SI TE SALES, PIERDES TU CUPO Y LOS BONOS.
        </p>
      </div>

      {/* CSS for custom animations */}
      <style>{`
        @keyframes breathing {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
          50% { transform: scale(1.02); box-shadow: 0 0 20px 0 rgba(37, 211, 102, 0.4); }
        }
        @keyframes shimmer {
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppCTA;