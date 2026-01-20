import React, { useEffect } from 'react';
import Background from './components/Background';
import Header from './components/Header';
import InfoCard from './components/InfoCard';
import DigitalTicket from './components/DigitalTicket';
import WhatsAppCTA from './components/WhatsAppCTA';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

const App: React.FC = () => {
  useEffect(() => {
    // 1. Definir el Pixel ID
    const PIXEL_ID = '1615717146280012';

    // 2. Inyectar el script de Facebook manualmente si no existe
    if (!window.fbq) {
      !function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      
      window.fbq('init', PIXEL_ID);
    }

    // 3. Disparar el evento PageView con un pequeño retraso de seguridad
    const timer = setTimeout(() => {
      if (window.fbq) {
        window.fbq('track', 'PageView');
        console.log("Facebook Pixel: PageView fired!"); // Para depuración
      }
    }, 1000); // Retraso de 1 segundo para asegurar carga

    return () => clearTimeout(timer);
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