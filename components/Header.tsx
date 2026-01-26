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
    </div>
  );
};

export default Header;