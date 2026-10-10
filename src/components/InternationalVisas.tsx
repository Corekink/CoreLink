import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { IMAGES } from '../data/images';
import {
  VIEWPORT_CONFIG,
  headingLabelVariant,
  headingTitleVariant,
  headingDescVariant,
  staggerContainer,
  cardEntrance,
  CARD_HOVER,
} from '@/lib/animations';

interface InternationalVisasProps {
  onSelectCountry: (countryName: string) => void;
}

export const InternationalVisas: React.FC<InternationalVisasProps> = ({ onSelectCountry }) => {
  const shouldReduceMotion = useReducedMotion();

  const destinations = [
    {
      country: 'France',
      city: 'Paris',
      badge: 'SCHENGEN VISA',
      image: IMAGES.parisEiffel,
    },
    {
      country: 'Germany',
      city: 'Berlin',
      badge: 'SCHENGEN VISA',
      image: IMAGES.berlinBrandenburg,
    },
    {
      country: 'Italy',
      city: 'Rome',
      badge: 'SCHENGEN VISA',
      image: IMAGES.romeColosseum,
    },
    {
      country: 'Spain',
      city: 'Barcelona',
      badge: 'SCHENGEN VISA',
      image: IMAGES.barcelonaSagrada,
    },
    {
      country: 'Switzerland',
      city: 'Lucerne',
      badge: 'SCHENGEN VISA',
      image: IMAGES.switzerlandAlps,
    },
    {
      country: 'Netherlands',
      city: 'Amsterdam',
      badge: 'SCHENGEN VISA',
      image: IMAGES.amsterdamCanal,
    },
    {
      country: 'Greece',
      city: 'Santorini',
      badge: 'SCHENGEN VISA',
      image: IMAGES.santoriniGreece,
    },
    {
      country: 'Portugal',
      city: 'Lisbon',
      badge: 'SCHENGEN VISA',
      image: IMAGES.lisbonPortugal,
    },
    {
      country: 'United Kingdom',
      city: 'London',
      badge: 'UK VISA',
      image: IMAGES.londonBigBen,
    },
    {
      country: 'Canada',
      city: 'Toronto',
      badge: 'VISITOR VISA',
      image: IMAGES.torontoSkyline,
    },
    {
      country: 'Australia',
      city: 'Sydney',
      badge: 'TOURIST VISA',
      image: IMAGES.sydneyOpera,
    },
    {
      country: 'United States',
      city: 'New York',
      badge: 'B1/B2 VISA',
      image: IMAGES.nycSkyline,
    },
  ];

  return (
    <section id="international-visa" className="bg-white py-16 lg:py-24 relative text-slate-900 border-t border-slate-200 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header with Sequential Stagger */}
        <motion.div
          initial={shouldReduceMotion ? {} : 'hidden'}
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.14 } },
          }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.div
            variants={headingLabelVariant}
            className="flex items-center justify-center gap-3 text-xs font-mono font-bold tracking-[0.25em] text-[#D4AF37] uppercase mb-3"
          >
            <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
            GLOBAL TRAVEL
            <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
          </motion.div>
          <motion.h2
            variants={headingTitleVariant}
            className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 font-sans"
          >
            International Visa Assistance
          </motion.h2>
          <motion.p
            variants={headingDescVariant}
            className="mt-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Document preparation and guidance for popular travel destinations. Approvals are subject to each country's embassy and are not guaranteed.
          </motion.p>
        </motion.div>

        {/* Destination Cards Grid with Stagger & Rich Hover */}
        <motion.div
          id="europe-visa"
          initial={shouldReduceMotion ? {} : 'hidden'}
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          variants={staggerContainer(0.08, 0.04)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {destinations.map((dest, idx) => (
            <motion.div
              key={idx}
              variants={cardEntrance}
              whileHover={CARD_HOVER}
              onClick={() => onSelectCountry(`${dest.country} Visa (${dest.city})`)}
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500 cursor-pointer bg-slate-900 h-[260px] sm:h-[290px] flex flex-col justify-end p-6"
            >
              <img
                src={dest.image}
                alt={`${dest.country} ${dest.city}`}
                loading="lazy"
                decoding="async"
                width={400}
                height={300}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-80 group-hover:opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-85" />

              <div className="relative z-10">
                <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold block mb-1">
                  {dest.badge}
                </span>
                <h3 className="text-xl font-bold text-white font-sans tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                  {dest.country}
                </h3>
                <span className="text-xs text-slate-300 font-medium">
                  {dest.city}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default InternationalVisas;
