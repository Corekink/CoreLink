import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { ServiceItem, LanguageCode } from '../types';
import { SERVICES_LIST, CATEGORIES_DATA } from '../data/servicesData';
import { PROMOTIONAL_ADS } from '../data/promosData';
import { PromoBanner } from './PromoBanner';

interface ServicesGridProps {
  onSelectService: (serviceTitle: string) => void;
  currentLang: LanguageCode;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService, currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [clickedCardId, setClickedCardId] = useState<string | null>(null);

  // Multilingual helper labels for easy understanding
  const helperTexts: Record<LanguageCode, { heading: string; subheading: string; clickHelper: string; searchPlaceholder: string }> = {
    en: {
      heading: 'Our 28 Government & VIP Liaison Services',
      subheading: 'Select any graphic tile below for instant 24h fast-track clearance.',
      clickHelper: 'Click to Apply VIP',
      searchPlaceholder: 'Search visa, Emirates ID, Amer, Tasheel...'
    },
    ar: {
      heading: 'خدماتنا الـ 28 الحكومية وتخليص المعاملات VIP',
      subheading: 'اختر أي خدمة أدناه للإنجاز السريع والمعتمد خلال 24 ساعة.',
      clickHelper: 'اضغط للتقديم السريع',
      searchPlaceholder: 'ابحث عن تأشيرة، هوية إماراتية، آمر، تسهيل...'
    },
    ur: {
      heading: 'ہمارے 28 سرکاری اور وی آئی پی خدمات',
      subheading: 'فوری 24 گھنٹے کی منظوری کے لیے نیچے کسی بھی سروس پر کلک کریں۔',
      clickHelper: 'وی آئی پی درخواست کے لیے کلک کریں',
      searchPlaceholder: 'ویزا، ایمریٹس آئی ڈی، آمر تلاش کریں...'
    },
    ru: {
      heading: 'Наши 28 государственных и VIP услуг',
      subheading: 'Выберите любую графическую карточку для экспресс-оформления за 24 часа.',
      clickHelper: 'Нажмите для VIP заявки',
      searchPlaceholder: 'Поиск визы, Emirates ID, бизнес...'
    },
    zh: {
      heading: '我们的28项阿联酋政府与VIP贵宾服务',
      subheading: '点击下方任意图标卡片，享受24小时加急极速办理。',
      clickHelper: '点击申请 VIP 加急',
      searchPlaceholder: '搜索签证、阿联酋身份证、公司注册...'
    }
  };

  const filteredServices = SERVICES_LIST.filter(s => {
    const matchesCat = selectedCategory === 'all' || s.category === selectedCategory;
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleCardClick = (service: ServiceItem) => {
    setClickedCardId(service.id);
    setTimeout(() => {
      setClickedCardId(null);
      onSelectService(service.title);
    }, 400);
  };

  // Helper to dynamically render Lucide Icon safely
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName] || Icons.FileText;
    return <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-[#D4AF37] group-hover:scale-110 group-hover:text-white transition-all duration-300" />;
  };

  return (
    <section className="py-24 bg-[#06090F] relative z-20" id="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono uppercase font-semibold mb-4 tracking-widest">
            <span>CORE LINK GRAPHIC SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            {helperTexts[currentLang].heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light">
            {helperTexts[currentLang].subheading}
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-[#0E1420]/80 p-3 sm:p-4 rounded-3xl border border-slate-800 backdrop-blur-xl sticky top-20 z-30 shadow-2xl">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES_DATA.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-[#D4AF37] via-[#D4AF37] to-[#1E2E4A] text-[#080B11] shadow-lg shadow-[#D4AF37]/20 scale-105'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Icons.Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={helperTexts[currentLang].searchPlaceholder}
              className="w-full pl-11 pr-4 py-2.5 bg-slate-950/90 border border-slate-800 rounded-2xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] transition-colors shadow-inner"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white">
                <Icons.X className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

        {/* SERVICES GRID WITH INTERSPERSED LUXURY ADS */}
        <div className="space-y-12">
          
          {/* Chunk services to insert ads */}
          {filteredServices.length === 0 ? (
            <div className="text-center py-20 bg-[#0E1420] rounded-3xl border border-slate-800">
              <Icons.AlertCircle className="w-12 h-12 text-[#D4AF37] mx-auto mb-3 opacity-60" />
              <h3 className="text-lg font-bold text-white">No service matching "{searchQuery}"</h3>
              <p className="text-xs text-slate-400 mt-1">Try selecting 'All Services' or click below to chat with our AI concierge.</p>
              <button onClick={() => setSelectedCategory('all')} className="mt-4 px-5 py-2 bg-[#D4AF37] text-black font-bold text-xs rounded-xl">
                Reset Filter
              </button>
            </div>
          ) : (
            <>
              {/* Chunk 1: Items 0-4 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                {filteredServices.slice(0, 4).map(service => (
                  <ServiceCard key={service.id} service={service} isClicked={clickedCardId === service.id} onClick={() => handleCardClick(service)} renderIcon={renderIcon} clickHelper={helperTexts[currentLang].clickHelper} />
                ))}
              </div>
              {selectedCategory === 'all' && filteredServices.length > 4 && <PromoBanner promo={PROMOTIONAL_ADS[0]} onOpenInquiry={onSelectService} />}

              {/* Chunk 2: Items 4-8 */}
              {filteredServices.length > 4 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                  {filteredServices.slice(4, 8).map(service => (
                    <ServiceCard key={service.id} service={service} isClicked={clickedCardId === service.id} onClick={() => handleCardClick(service)} renderIcon={renderIcon} clickHelper={helperTexts[currentLang].clickHelper} />
                  ))}
                </div>
              )}
              {selectedCategory === 'all' && filteredServices.length > 8 && <PromoBanner promo={PROMOTIONAL_ADS[1]} onOpenInquiry={onSelectService} />}

              {/* Chunk 3: Items 8-12 */}
              {filteredServices.length > 8 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                  {filteredServices.slice(8, 12).map(service => (
                    <ServiceCard key={service.id} service={service} isClicked={clickedCardId === service.id} onClick={() => handleCardClick(service)} renderIcon={renderIcon} clickHelper={helperTexts[currentLang].clickHelper} />
                  ))}
                </div>
              )}
              {selectedCategory === 'all' && filteredServices.length > 12 && <PromoBanner promo={PROMOTIONAL_ADS[2]} onOpenInquiry={onSelectService} />}

              {/* Chunk 4: Items 12-16 */}
              {filteredServices.length > 12 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                  {filteredServices.slice(12, 16).map(service => (
                    <ServiceCard key={service.id} service={service} isClicked={clickedCardId === service.id} onClick={() => handleCardClick(service)} renderIcon={renderIcon} clickHelper={helperTexts[currentLang].clickHelper} />
                  ))}
                </div>
              )}
              {selectedCategory === 'all' && filteredServices.length > 16 && <PromoBanner promo={PROMOTIONAL_ADS[3]} onOpenInquiry={onSelectService} />}

              {/* Chunk 5: Items 16-20 */}
              {filteredServices.length > 16 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                  {filteredServices.slice(16, 20).map(service => (
                    <ServiceCard key={service.id} service={service} isClicked={clickedCardId === service.id} onClick={() => handleCardClick(service)} renderIcon={renderIcon} clickHelper={helperTexts[currentLang].clickHelper} />
                  ))}
                </div>
              )}
              {selectedCategory === 'all' && filteredServices.length > 20 && <PromoBanner promo={PROMOTIONAL_ADS[4]} onOpenInquiry={onSelectService} />}

              {/* Chunk 6: Items 20-24 */}
              {filteredServices.length > 20 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                  {filteredServices.slice(20, 24).map(service => (
                    <ServiceCard key={service.id} service={service} isClicked={clickedCardId === service.id} onClick={() => handleCardClick(service)} renderIcon={renderIcon} clickHelper={helperTexts[currentLang].clickHelper} />
                  ))}
                </div>
              )}
              {selectedCategory === 'all' && filteredServices.length > 24 && <PromoBanner promo={PROMOTIONAL_ADS[5]} onOpenInquiry={onSelectService} />}

              {/* Chunk 7: Items 24+ */}
              {filteredServices.length > 24 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                  {filteredServices.slice(24).map(service => (
                    <ServiceCard key={service.id} service={service} isClicked={clickedCardId === service.id} onClick={() => handleCardClick(service)} renderIcon={renderIcon} clickHelper={helperTexts[currentLang].clickHelper} />
                  ))}
                </div>
              )}
              {selectedCategory === 'all' && <PromoBanner promo={PROMOTIONAL_ADS[6]} onOpenInquiry={onSelectService} />}
            </>
          )}

        </div>

      </div>
    </section>
  );
};

// Sub-component for individual Image Card
interface ServiceCardProps {
  service: ServiceItem;
  isClicked: boolean;
  onClick: () => void;
  renderIcon: (name: string) => React.ReactNode;
  clickHelper: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isClicked, onClick, renderIcon, clickHelper }) => {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-3xl overflow-hidden bg-[#071A2E] border border-slate-800/80 group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D4AF37]/20 hover:border-[#D4AF37]/60 flex flex-col justify-between h-[360px] ${
        isClicked ? 'scale-95 ring-4 ring-[#D4AF37] animate-pulse brightness-125' : ''
      }`}
    >
      {/* High Quality Image Container with Zoom Animation */}
      <div className="absolute inset-0 z-0">
        <img
          src={service.imageUrl}
          alt={service.title}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-50"
        />
        {/* Dark Navy & Black Glass Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A2E] via-[#071A2E]/80 to-transparent"></div>
      </div>

      {/* Card Header (Badge & Icon) */}
      <div className="relative z-10 p-6 flex items-start justify-between">
        <div className="p-3.5 rounded-2xl bg-[#05070B]/80 backdrop-blur-md border border-[#D4AF37]/40 shadow-xl group-hover:bg-[#D4AF37] group-hover:border-white group-hover:text-black transition-all duration-300 text-[#D4AF37]">
          {renderIcon(service.iconName)}
        </div>
        {service.badge && (
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 backdrop-blur-md shadow-lg">
            {service.badge}
          </span>
        )}
      </div>

      {/* Card Footer (Small Title + One Short Sentence Only) */}
      <div className="relative z-10 p-6 pt-0">
        <span className="text-[10px] font-mono uppercase text-[#D4AF37] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 mb-1 font-bold">
          <span>{clickHelper}</span>
          <Icons.ArrowRight className="w-3 h-3" />
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug drop-shadow-lg group-hover:text-[#D4AF37] transition-colors">
          {service.title}
        </h3>
        {service.shortSentence && (
          <p className="text-xs text-slate-200 font-light mt-1.5 line-clamp-2 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
            {service.shortSentence}
          </p>
        )}
      </div>

      {/* Luxury Glass Hover Border Glint */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4AF37]/50 rounded-3xl pointer-events-none transition-all duration-500"></div>
    </div>
  );
};
