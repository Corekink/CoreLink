import React from 'react';

// ==========================================
// PURE AUTHENTIC VECTOR BRAND MARKS & CRESTS
// ==========================================

// 1. ICP UAE (Federal Authority for Identity, Citizenship, Customs and Port Security)
export const ICPLogo: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="icpGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FCEBB6" />
        <stop offset="35%" stopColor="#D4AF37" />
        <stop offset="70%" stopColor="#A47B1E" />
        <stop offset="100%" stopColor="#755207" />
      </linearGradient>
      <linearGradient id="icpShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#F3F4F6" />
      </linearGradient>
    </defs>
    
    {/* Federal Falcon Wings */}
    <path
      d="M50 10C42 14 28 22 18 38C12 48 10 60 12 72C16 68 22 64 28 62C24 70 22 78 24 86C30 80 38 76 46 74C42 82 40 90 42 96C45 90 50 84 50 80C50 84 55 90 58 96C60 90 58 82 54 74C62 76 70 80 76 86C78 78 76 70 72 62C78 64 84 68 88 72C90 60 88 48 82 38C72 22 58 14 50 10Z"
      fill="url(#icpGoldGrad)"
      stroke="#755207"
      strokeWidth="1"
    />
    {/* Falcon Head */}
    <path
      d="M50 7C47 10 46 14 47 17C45 17 43 19 43 21C43 24 46 26 49 27C49 29 51 29 51 27C54 26 57 24 57 21C57 19 55 17 53 17C54 14 53 10 50 7Z"
      fill="#FCEBB6"
      stroke="#755207"
      strokeWidth="0.8"
    />
    <circle cx="47.5" cy="19" r="1" fill="#111827" />
    <circle cx="52.5" cy="19" r="1" fill="#111827" />

    {/* Center Shield with 7 Stars */}
    <circle cx="50" cy="48" r="20" fill="url(#icpShieldGrad)" stroke="#D4AF37" strokeWidth="2.5" />
    
    {/* 7 Golden Stars */}
    {[0, 51.4, 102.8, 154.2, 205.7, 257.1, 308.5].map((deg, idx) => {
      const rad = (deg * Math.PI) / 180;
      const x = 50 + 17.5 * Math.sin(rad);
      const y = 48 - 17.5 * Math.cos(rad);
      return (
        <polygon
          key={idx}
          points={`${x},${y - 1.2} ${x + 0.9},${y + 1} ${x - 1.2},${y - 0.3} ${x + 1.2},${y - 0.3} ${x - 0.9},${y + 1}`}
          fill="#D4AF37"
        />
      );
    })}

    {/* UAE Flag inside Shield */}
    <g transform="translate(38, 36) scale(0.6)">
      <rect x="0" y="0" width="10" height="40" fill="#FF0000" />
      <rect x="10" y="0" width="30" height="13.3" fill="#00732F" />
      <rect x="10" y="13.3" width="30" height="13.3" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="0.5" />
      <rect x="10" y="26.6" width="30" height="13.4" fill="#000000" />
    </g>

    {/* UAE Golden Base Banner */}
    <path
      d="M30 86C38 83 62 83 70 86L68 92C60 90 40 90 32 92L30 86Z"
      fill="url(#icpGoldGrad)"
      stroke="#755207"
      strokeWidth="0.8"
    />
  </svg>
);

// 2. GDRFA Dubai (General Directorate of Residency and Foreigners Affairs / Government of Dubai Crest)
export const GDRFALogo: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Outer Dubai Government Red Ring */}
    <circle cx="50" cy="50" r="46" fill="#FFFFFF" stroke="#C4161C" strokeWidth="3" />
    <circle cx="50" cy="50" r="41" stroke="#C4161C" strokeWidth="0.8" strokeDasharray="2 2" />

    {/* Traditional Dhow Boat & Palm Tree in Official Red */}
    <g transform="translate(50, 46)">
      {/* Palm Tree */}
      <path d="M-3 4C-3 1 -2 -7 0 -15C2 -7 3 1 3 4H-3Z" fill="#C4161C" />
      <path d="M0 -15C-6 -22 -14 -20 -18 -15C-11 -15 -5 -12 0 -12" fill="#C4161C" />
      <path d="M0 -15C6 -22 14 -20 18 -15C11 -15 5 -12 0 -12" fill="#C4161C" />
      <path d="M0 -15C-10 -17 -16 -10 -18 -5C-13 -7 -6 -8 0 -10" fill="#C4161C" />
      <path d="M0 -15C10 -17 16 -10 18 -5C13 -7 6 -8 0 -10" fill="#C4161C" />
      
      {/* Dhow Hull */}
      <path d="M-20 8C-14 15 14 15 20 8L16 3H-16L-20 8Z" fill="#C4161C" />
      {/* Ocean waves */}
      <path d="M-24 13C-16 16 -8 13 0 15C8 13 16 16 24 13" stroke="#C4161C" strokeWidth="2" strokeLinecap="round" />
    </g>

    {/* Arabic Header: حكومة دبي */}
    <text x="50" y="20" textAnchor="middle" fill="#C4161C" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="9">
      حكومة دبي
    </text>

    {/* English Footer: GDRFA · DUBAI */}
    <text x="50" y="82" textAnchor="middle" fill="#C4161C" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="6.5" letterSpacing="0.8">
      GDRFA · DUBAI
    </text>
  </svg>
);

// 3. MOHRE UAE (Ministry of Human Resources & Emiratisation / TASHEEL)
export const MOHRELogo: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* MOHRE Official Forest Green Shield */}
    <rect x="6" y="6" width="88" height="88" rx="22" fill="#005A36" stroke="#008751" strokeWidth="2" />
    <circle cx="50" cy="46" r="30" fill="#004529" />
    
    {/* Inner Golden UAE Falcon */}
    <g transform="translate(50, 44) scale(0.6)">
      <g transform="translate(-50, -50)">
        <ICPLogo className="w-[100px] h-[100px]" />
      </g>
    </g>

    {/* Tasheel Banner */}
    <text x="50" y="84" textAnchor="middle" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="10" letterSpacing="1">
      MOHRE · تسهيل
    </text>
  </svg>
);

// 4. DET Dubai (Department of Economy & Tourism / Dubai DED)
export const DETLogo: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="6" y="6" width="88" height="88" rx="22" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />

    {/* Dubai Economy Official Monogram & Calligraphy */}
    <g transform="translate(24, 18)">
      {/* Red Curved 'D' Geometric Logo */}
      <path
        d="M26 6C14 6 6 15 6 26C6 37 14 46 28 46H44V6H26Z"
        fill="#C4161C"
      />
      <circle cx="32" cy="22" r="6" fill="#FFFFFF" />
      <path d="M44 16H50V46H44V16Z" fill="#D4AF37" />
    </g>

    {/* Text: DET DUBAI */}
    <text x="50" y="78" textAnchor="middle" fill="#0F172A" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="9.5" letterSpacing="0.8">
      DET DUBAI
    </text>
    <text x="50" y="87" textAnchor="middle" fill="#C4161C" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="6.5">
      اقتصاد وسياحة دبي
    </text>
  </svg>
);

// 5. MOFA UAE (Ministry of Foreign Affairs)
export const MOFALogo: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Ministry of Foreign Affairs Navy & Globe Background */}
    <circle cx="50" cy="50" r="44" fill="#0A192F" stroke="#38BDF8" strokeWidth="2" />
    
    {/* Global Longitude & Latitude Rings */}
    <circle cx="50" cy="50" r="34" stroke="#38BDF8" strokeWidth="0.8" strokeOpacity="0.4" />
    <ellipse cx="50" cy="50" rx="16" ry="34" stroke="#38BDF8" strokeWidth="0.8" strokeOpacity="0.4" />
    <line x1="16" y1="50" x2="84" y2="50" stroke="#38BDF8" strokeWidth="0.8" strokeOpacity="0.4" />

    {/* Golden UAE Federal Falcon */}
    <g transform="translate(50, 48) scale(0.68)">
      <g transform="translate(-50, -50)">
        <ICPLogo className="w-[100px] h-[100px]" />
      </g>
    </g>
  </svg>
);

// 6. UAE PASS (Authentic National Digital Identity Swirl)
export const UAEPassLogo: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="6" y="6" width="88" height="88" rx="22" fill="#042F2E" stroke="#14B8A6" strokeWidth="2" />

    {/* UAE PASS Biometric Fingerprint Swirl */}
    <g transform="translate(50, 44)">
      {/* Teal Outer Loop */}
      <path
        d="M-22 0C-22 -14 -12 -24 0 -24C12 -24 22 -14 22 0C22 13 14 22 3 24C-7 26 -17 18 -19 9"
        stroke="#2DD4BF"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Red & Green UAE Accent */}
      <path
        d="M-14 0C-14 -9 -8 -16 0 -16C8 -16 14 -9 14 0C14 8 8 14 0 14C-6 14 -10 10 -10 4"
        stroke="#EF4444"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Core Center Biometric Point */}
      <circle cx="0" cy="0" r="4.5" fill="#5EEAD4" />
    </g>

    {/* UAE PASS Text */}
    <text x="50" y="82" textAnchor="middle" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="9.5" letterSpacing="1">
      UAE PASS
    </text>
  </svg>
);

// 7. DHA / Salem VIP Medical Fitness (Dubai Health Authority & Salem)
export const DHASalemLogo: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="6" y="6" width="88" height="88" rx="22" fill="#881337" stroke="#FB7185" strokeWidth="2" />

    {/* Vital Healthcare Pulse & Crescent */}
    <g transform="translate(50, 44)">
      <circle cx="0" cy="0" r="24" fill="#9F1239" stroke="#FDA4AF" strokeWidth="1.5" />
      {/* Vital Pulse */}
      <path
        d="M-18 0H-9L-4 -12L2 14L7 -8L11 4L14 0H18"
        stroke="#FFFFFF"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* VIP Gold Crown Star */}
      <polygon points="0,-16 3,-10 9,-10 4,-6 6,0 0,-3 -6,0 -4,-6 -9,-10 -3,-10" fill="#FACC15" />
    </g>

    {/* Text: DHA SALEM */}
    <text x="50" y="82" textAnchor="middle" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="9" letterSpacing="0.8">
      DHA · SALEM
    </text>
  </svg>
);

// 8. ISO 9001:2015 Quality Accredited Certification Seal
export const ISO9001Logo: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Outer Sawtooth Gold Badge */}
    <circle cx="50" cy="50" r="46" fill="#1C1917" stroke="#EAB308" strokeWidth="2.5" />
    <circle cx="50" cy="50" r="38" fill="#292524" stroke="#FDE047" strokeWidth="1.5" strokeDasharray="3 2" />
    
    {/* ISO 9001 Certified Typography */}
    <text x="50" y="42" textAnchor="middle" fill="#FACC15" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="15" letterSpacing="1">
      ISO
    </text>
    <text x="50" y="56" textAnchor="middle" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="9" letterSpacing="0.5">
      9001:2015
    </text>
    <text x="50" y="69" textAnchor="middle" fill="#D4AF37" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="6.5" letterSpacing="1">
      CERTIFIED
    </text>
  </svg>
);
