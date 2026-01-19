import React from 'react';
import { ASSETS } from '../constants';

const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-6 text-center w-full max-w-sm mx-auto">
      {/* Logo with Soft Premium Glow */}
      <div className="relative mb-2">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-500/20 rounded-full blur-2xl"></div>
        <img 
          src={ASSETS.LOGO_URL} 
          alt="Blacks University Logo" 
          className="relative w-36 h-36 object-contain z-10 drop-shadow-2xl"
        />
      </div>

      {/* Authority Title */}
      <div className="space-y-3">
        <h1 className="font-cyber text-4xl font-bold tracking-wider text-white drop-shadow-lg">
          ¡ESTÁS DENTRO! 🦅
        </h1>
        
        {/* Minimalist Status Bar */}
        <div className="w-full space-y-2">
          <div className="flex justify-between items-center text-xs font-tech tracking-widest text-gray-400 uppercase">
            <span>Paso 1 de 2 completado</span>
            <span className="text-neon-gold font-bold">90%</span>
          </div>
          <div className="h-1.5 w-full bg-gray-900 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-yellow-600 to-neon-gold rounded-full"
              style={{ width: '90%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;