import React from 'react';
import { ASSETS } from '../constants';

const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-6 text-center w-full max-w-md mx-auto">
      {/* Logo with Soft Premium Glow */}
      <div className="relative mb-2">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-500/20 rounded-full blur-2xl"></div>
        <img 
          src={ASSETS.LOGO_URL} 
          alt="Blacks University Logo" 
          className="relative w-36 h-36 object-contain z-10 drop-shadow-2xl"
        />
      </div>

      {/* Authority Title section */}
      <div className="space-y-4">
        <h1 className="font-cyber text-2xl md:text-3xl font-bold tracking-wide text-white drop-shadow-lg leading-tight">
          CONFIRMADO: TU PASE DE ABORDAJE ESTÁ RESERVADO 🎫
        </h1>
        
        <p className="font-tech text-gray-400 text-sm md:text-base tracking-wide font-medium">
          (Pero tu asiento en Primera Clase aún no está asignado)
        </p>
        
        {/* Minimalist Status Bar */}
        <div className="w-full space-y-2 pt-2">
          <div className="flex justify-between items-center text-[10px] font-tech tracking-widest text-gray-500 uppercase">
            <span>Registro Iniciado</span>
            <span className="text-neon-gold font-bold animate-pulse">Pendiente</span>
          </div>
          <div className="h-1 w-full bg-gray-900 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-yellow-800 to-neon-gold rounded-full w-[85%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;