import React from 'react';
import { useOutletContext } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { BRANDING, getWhatsAppUrl } from '@/data/branding';
import { PageMeta } from '@/components/PageMeta';

interface LayoutContext {
  onOpenInquiry: (serviceName?: string) => void;
}

const Ticketing: React.FC = () => {
  const { onOpenInquiry } = useOutletContext<LayoutContext>();

  const travelServices = [
    { title: 'Flight Bookings & Itineraries', desc: 'Real-time dummy flight tickets for visa applications and confirmed flight bookings globally.' },
    { title: 'Hotel Voucher Reservations', desc: 'Compliant embassy hotel reservation vouchers with active confirmation codes.' },
    { title: 'Global Travel Insurance', desc: 'Worldwide international travel and health coverage meeting Schengen, US, and UK criteria.' },
    { title: 'Airport Transfers & Meet/Greet', desc: 'VIP concierge airport facilitation across UAE international airports.' },
  ];

  return (
    <div className="bg-[#050B14] text-white">
      <PageMeta
        title="Flight Ticketing & Embassy Travel Itineraries"
        description="Worldwide airline flight reservations, verified embassy hotel booking vouchers, and international travel insurance."
      />
      {/* Header Banner */}
      <section className="pt-24 pb-12 px-4 text-center border-b border-white/5 bg-gradient-to-b from-[#0B1528] to-[#050B14]">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3 text-xs font-mono font-bold tracking-[0.25em] text-[#D4AF37] uppercase">
            <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
            FLIGHTS & TRAVEL LOGISTICS
            <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight font-sans">
            Ticketing & Travel Assistance
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Verified flight reservations, hotel vouchers, and travel protection for visa processing and executive travel.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {travelServices.map((svc, idx) => (
            <div
              key={idx}
              onClick={() => onOpenInquiry(`Ticketing: ${svc.title}`)}
              className="p-8 rounded-3xl bg-[#0B1528] border border-white/10 hover:border-[#D4AF37] transition-all cursor-pointer group shadow-xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center font-bold text-lg mb-6">
                <Icons.Plane className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{svc.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{svc.desc}</p>
              <span className="text-xs font-bold text-[#D4AF37] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Inquire Rates →
              </span>
            </div>
          ))}
        </div>

        {/* WhatsApp Direct */}
        <div className="text-center p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-2">Need Immediate Travel Documents?</h3>
          <p className="text-slate-400 text-sm mb-6">Instant generation of flight and hotel reservations for embassy appointments.</p>
          <a
            href={getWhatsAppUrl('ticketing')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-xl transition-all"
          >
            <Icons.MessageSquare className="w-5 h-5" />
            Chat with Ticketing Desk
          </a>
        </div>
      </section>
    </div>
  );
};

export default Ticketing;
