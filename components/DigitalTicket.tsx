import React from 'react';
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import { COPY } from '../constants';

const DigitalTicket: React.FC = () => {
  return (
    <div className="w-full mt-2">
      <div className="bg-[#0f0f0f] rounded-lg border-l-4 border-neon-gold p-5 shadow-lg relative overflow-hidden">
        {/* Background texture hint */}
        <div className="absolute right-[-20px] top-[-20px] w-24 h-24 bg-white/5 rounded-full blur-xl" />

        <div className="grid grid-cols-1 gap-4 relative z-10">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-gray-800 pb-3 mb-1">
                <span className="text-[10px] font-cyber text-gray-500 uppercase tracking-[0.2em]">Boarding Pass</span>
                <span className="text-[10px] font-mono text-neon-gold">VIP-ACCESS</span>
            </div>

            {/* Details */}
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <CalendarDays className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-tech text-white tracking-wide">{COPY.EVENT_DATE}</span>
                </div>
                
                <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-tech text-white tracking-wide">{COPY.EVENT_TIME}</span>
                </div>

                <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-tech text-green-400 font-medium tracking-wide">{COPY.EVENT_LOCATION}</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalTicket;