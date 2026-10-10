import React from 'react';
import { IMAGES } from '../data/images';

interface GovReferencesProps {
  onSelectEntity: (entityName: string) => void;
}

export const GovReferences: React.FC<GovReferencesProps> = ({ onSelectEntity }) => {
  const entities = [
    {
      name: 'ICP',
      desc: 'Identity, residency & citizenship services.',
      image: IMAGES.icpGovThumbnail,
    },
    {
      name: 'GDRFA',
      desc: 'Dubai entry, residency & visa services.',
      image: IMAGES.gdrfaGovThumbnail,
    },
    {
      name: 'MOHRE',
      desc: 'Labour, employment & workforce services.',
      image: IMAGES.mohreGovThumbnail,
    },
    {
      name: 'DET',
      desc: 'Business licensing & economic services.',
      image: IMAGES.detGovThumbnail,
    },
    {
      name: 'UAE PASS',
      desc: 'National digital identity & authentication.',
      image: IMAGES.uaePassGovThumbnail,
    },
    {
      name: 'RTA',
      desc: 'Transport, licensing & vehicle services.',
      image: IMAGES.rtaGovThumbnail,
    },
    {
      name: 'Dubai Municipality',
      desc: 'Permits, environment & municipal services.',
      image: IMAGES.dmGovThumbnail,
    },
    {
      name: 'Federal & Local',
      desc: 'Various federal and local government services.',
      image: IMAGES.tamGovThumbnail,
    },
  ];

  return (
    <section className="bg-[#F8F9FA] py-12 lg:py-16 relative text-slate-900 border-t border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-3 text-xs font-mono font-bold tracking-[0.25em] text-[#D4AF37] uppercase mb-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
            SERVICE REFERENCES
            <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 font-sans">
            Government Service References
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            We assist with applications across these UAE government entities. CORE LINK is an independent administrative service provider and is not affiliated with any government body.
          </p>
        </div>

        {/* 8 Government Entity Cards Grid matching screenshot 11 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {entities.map((ent, idx) => (
            <div
              key={idx}
              onClick={() => onSelectEntity(ent.name)}
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all cursor-pointer bg-slate-900 h-[260px] sm:h-[280px] flex flex-col justify-end p-6"
            >
              <img
                src={ent.image}
                alt={ent.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

              {/* Top Service Reference Tag */}
              <div className="relative z-10 space-y-1">
                <span className="text-[9.5px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold block">
                  SERVICE REFERENCE
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white font-sans tracking-tight">
                  {ent.name}
                </h3>
                <p className="text-xs text-slate-300 font-normal leading-tight pt-1">
                  {ent.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
