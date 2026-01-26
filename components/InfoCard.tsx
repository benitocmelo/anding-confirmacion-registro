import React from 'react';
import { Lock, AlertTriangle, CheckCircle } from 'lucide-react';

const InfoCard: React.FC = () => {
  return (
    <div className="w-full space-y-6 max-w-md mx-auto">
      
      {/* 1. BARRA DE PROGRESO (Psicología: El cerebro necesita ver el 100%) */}
      <div className="w-full">
        <div className="flex justify-between items-end mb-1 px-1">
            <span className="text-[10px] font-cyber text-gray-400 tracking-widest uppercase">Progreso del Registro</span>
            <span className="text-xs font-mono text-neon-gold font-bold">80%</span>
        </div>
        <div className="bg-gray-900 rounded-full h-3 w-full border border-gray-800 overflow-hidden relative shadow-[0_0_10px_rgba(255,215,0,0.1)]">
            <div className="bg-gradient-to-r from-yellow-800 via-yellow-600 to-neon-gold h-full w-[80%] relative animate-pulse">
                {/* Glow effect on the bar tip */}
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]"></div>
            </div>
        </div>
      </div>

      {/* 2. MENSAJE DE ESTADO: URGENCIA */}
      <div className="text-center space-y-3 pt-2">
         <div className="inline-flex items-center gap-2 bg-red-900/20 border border-red-500/30 px-4 py-1.5 rounded-full backdrop-blur-sm shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
            <span className="text-red-400 font-cyber text-[10px] md:text-xs tracking-widest font-bold uppercase">Estado: Registro Incompleto</span>
         </div>
         <h2 className="text-xl md:text-3xl font-bold text-white font-cyber leading-tight drop-shadow-lg">
            ¡ALTO! NO CIERRES<br/>ESTA PÁGINA
         </h2>
         <p className="text-gray-400 text-sm font-tech leading-relaxed max-w-xs mx-auto">
            Tu cupo ha sido reservado, pero <span className="text-white font-bold underline decoration-neon-gold underline-offset-4 decoration-2">aún no está confirmado.</span>
         </p>
      </div>

      {/* Main Content Widget */}
      <div className="relative bg-[#0A0A0A]/90 border border-white/10 rounded-xl p-5 shadow-[0_0_30px_rgba(0,0,0,0.6)] backdrop-blur-md">
        
        <div className="mb-5 text-center border-b border-white/5 pb-4">
            <p className="text-sm font-tech text-gray-300 leading-relaxed">
               ⚠️ Por políticas de privacidad, <span className="text-white font-semibold">no podemos enviarte el acceso por correo</span>.
            </p>
        </div>

        {/* Benefits List (SIMPLIFICADA AL MÁXIMO - CHECKLIST) */}
        <div className="space-y-3 bg-black/40 p-4 rounded-lg border border-white/5">
          {/* Step 1 */}
          <div className="flex items-center gap-3 opacity-40 select-none">
            <CheckCircle className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400 font-cyber text-xs md:text-sm line-through decoration-gray-500">Paso 1: Registro en Formulario</span>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-3 relative overflow-hidden rounded p-1 -mx-1">
            {/* Subtle highlight for the active step */}
            <div className="absolute inset-0 bg-neon-gold/5 animate-pulse rounded"></div>
            
            <div className="relative shrink-0">
                <div className="absolute inset-0 bg-neon-gold blur-md opacity-40 animate-pulse"></div>
                <AlertTriangle className="w-5 h-5 text-neon-gold relative z-10" />
            </div>
            <span className="text-white font-cyber text-xs md:text-sm font-bold tracking-wide relative z-10">Paso 2: Unirse al Grupo VIP</span>
            <span className="ml-auto text-[9px] md:text-[10px] bg-neon-gold text-black px-2 py-1 rounded font-bold animate-bounce whitespace-nowrap shadow-[0_0_10px_rgba(255,215,0,0.5)] relative z-10">FALTA ESTO</span>
          </div>
        </div>

        {/* El argumento final */}
        <div className="mt-5 flex items-start gap-3 bg-red-500/5 p-3 rounded border border-red-500/10">
             <Lock className="w-4 h-4 text-red-400/70 flex-shrink-0 mt-0.5" />
             <p className="text-xs font-tech text-gray-400 leading-snug">
                <span className="text-red-400 font-semibold">IMPORTANTE:</span> El enlace de la clase del Jueves es único y se autodestruye. Solo se publicará dentro del grupo de WhatsApp.
             </p>
        </div>

      </div>
    </div>
  );
};

export default InfoCard;