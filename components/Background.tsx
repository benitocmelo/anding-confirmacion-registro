import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Base: Pure Deep Black */}
      <div className="absolute inset-0 bg-[#050505]" />
      
      {/* Top Center Spotlight: Subtle Dark Grey Gradient */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[80vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900/40 via-[#050505] to-[#050505] opacity-80"
      />

      {/* Very faint ambient gold glow near top for Logo context */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px]" />
    </div>
  );
};

export default Background;