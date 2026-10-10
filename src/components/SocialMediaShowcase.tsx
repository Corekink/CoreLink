import React from 'react';
import * as Icons from 'lucide-react';
import { IMAGES } from '../data/images';
import { BRANDING, getWhatsAppUrl } from '../data/branding';

export const SocialMediaShowcase: React.FC = () => {
  const posts = [
    {
      id: 1,
      image: IMAGES.socialInstagramPost1,
      tag: 'DUBAI VIP',
      caption: 'Direct 10-Year Golden Visa nomination clearances approved this week.',
      likes: '1,420',
      comments: '68',
      platform: 'instagram'
    },
    {
      id: 2,
      image: IMAGES.socialInstagramPost2,
      tag: 'RESIDENCY STAMP',
      caption: 'Express 24h Emirates ID & Residency stamping for global investors.',
      likes: '985',
      comments: '42',
      platform: 'instagram'
    },
    {
      id: 3,
      image: IMAGES.socialInstagramPost3,
      tag: 'BUSINESS SETUP',
      caption: 'Mainland DED Trade License issued in under 24 hours for corporate clients.',
      likes: '2,130',
      comments: '114',
      platform: 'instagram'
    },
    {
      id: 4,
      image: IMAGES.socialInstagramPost4,
      tag: 'SCHENGEN VISA',
      caption: 'Seamless multi-entry Europe visa approvals processed for UAE residents.',
      likes: '1,890',
      comments: '93',
      platform: 'instagram'
    },
    {
      id: 5,
      image: IMAGES.socialInstagramPost5,
      tag: 'SMART IDENTITY',
      caption: 'VIP biometrics assistance and Salem 2-hour express medical typing.',
      likes: '870',
      comments: '35',
      platform: 'instagram'
    },
    {
      id: 6,
      image: IMAGES.socialInstagramPost6,
      tag: 'WORLDWIDE TRAVEL',
      caption: 'Corporate flight ticketing and executive lounge clearances arranged.',
      likes: '1,640',
      comments: '77',
      platform: 'instagram'
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-[#050B14] text-white border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-radial from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none opacity-40" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-[11px] font-mono font-bold uppercase tracking-wider mb-3">
              <Icons.Camera className="w-3.5 h-3.5" />
              SOCIAL MEDIA & DAILY CLEARANCES
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white font-sans">
              Follow Us on Social Media
            </h2>
            <p className="text-sm text-slate-300 mt-2 max-w-xl">
              Stay connected with daily client approvals, UAE visa policy changes, and exclusive commercial updates across our official social channels.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-500 hover:to-rose-400 text-white font-bold text-xs shadow-lg transition-all hover:scale-105"
            >
              <Icons.Instagram className="w-4 h-4" />
              <span>@corelink.ae</span>
            </a>

            <a
              href={getWhatsAppUrl('social')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-all hover:scale-105"
            >
              <Icons.MessageSquare className="w-4 h-4" />
              <span>WhatsApp Channel</span>
            </a>
          </div>
        </div>

        {/* 6-Photo Social Media Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 aspect-square cursor-pointer shadow-lg hover:shadow-2xl hover:border-[#D4AF37]/80 transition-all duration-300 hover:-translate-y-1.5"
            >
              <img
                src={post.image}
                alt={post.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 group-hover:from-black/90 transition-colors" />

              {/* Top Tag */}
              <div className="absolute top-2.5 left-2.5 z-10">
                <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-[#D4AF37]/40 text-[8.5px] font-mono font-bold text-[#D4AF37] tracking-wider uppercase">
                  {post.tag}
                </span>
              </div>

              {/* Bottom Caption & Stats */}
              <div className="absolute bottom-0 inset-x-0 p-3 z-10 space-y-1">
                <p className="text-[10.5px] text-white font-medium line-clamp-2 leading-tight">
                  {post.caption}
                </p>
                <div className="flex items-center gap-3 pt-1 text-[9.5px] text-slate-300 font-mono">
                  <span className="flex items-center gap-1">
                    <Icons.Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icons.MessageCircle className="w-3 h-3 text-slate-400" />
                    {post.comments}
                  </span>
                </div>
              </div>

              {/* Hover Instagram Icon Glint */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px] z-20">
                <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 transform scale-75 group-hover:scale-100 transition-transform">
                  <Icons.Instagram className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
