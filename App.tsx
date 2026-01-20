import React, { useEffect } from 'react';
import Background from './components/Background';
import Header from './components/Header';
import InfoCard from './components/InfoCard';
import DigitalTicket from './components/DigitalTicket';
import WhatsAppCTA from './components/WhatsAppCTA';

const App: React.FC = () => {
  useEffect(() => {
    // Forzar el disparo del Pixel cuando la app carga
    // @ts-ignore
    if (typeof window.fbq === 'function') {
      // @ts-ignore
      window.fbq('track', 'PageView');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-yellow-500/30">
      <Background />
      
      <main className="relative z-10 w-full min-h-screen flex flex-col justify-center py-8 px-5 md:px-0">
        <div className="w-full max-w-md mx-auto flex flex-col gap-8 animate-[fadeIn_0.6s_ease-out]">
          
          <Header />
          
          <div className="flex flex-col gap-6">
            <InfoCard />
            <DigitalTicket />
          </div>

          <div className="mt-4">
            <WhatsAppCTA />
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;