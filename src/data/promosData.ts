import { PromoAd } from '../types';
import { IMAGES } from './images';

export const PROMOTIONAL_ADS: PromoAd[] = [
  {
    id: 'fast-visa',
    title: 'Fast Visa Processing',
    subtitle: 'Express 24-hour VIP visa stamping and immigration entry clearance.',
    ctaText: 'Apply Fast-Track',
    imageUrl: IMAGES.visaProcessing,
    accentColor: 'gold',
    badge: '✔ Express 24h Approval'
  },
  {
    id: 'golden-visa',
    title: 'Golden Visa',
    subtitle: 'Exclusive 10-year residency nomination and priority VIP processing.',
    ctaText: 'Check Eligibility',
    imageUrl: IMAGES.goldenVisa,
    accentColor: 'gold',
    badge: '✔ 10-Year VIP Residency'
  },
  {
    id: 'business-setup',
    title: 'Business Setup',
    subtitle: 'Turnkey 100% foreign ownership Dubai Mainland & Freezone company incorporation.',
    ctaText: 'Start Your Company',
    imageUrl: IMAGES.businessSetup,
    accentColor: 'emerald',
    badge: '✔ Mainland & Freezone'
  },
  {
    id: 'medical-typing',
    title: 'Medical',
    subtitle: 'Express 2-hour VIP medical fitness test typing and biometric booking.',
    ctaText: 'Book VIP Medical',
    imageUrl: IMAGES.medical,
    accentColor: 'emerald',
    badge: '✔ Express 2-Hour Results'
  },
  {
    id: 'family-visa',
    title: 'Family Visa',
    subtitle: 'Seamless family sponsorship guarantee for spouse, children, and parents.',
    ctaText: 'Sponsor Family',
    imageUrl: IMAGES.familyVisa,
    accentColor: 'purple',
    badge: '✔ Priority Sponsorship'
  },
  {
    id: 'trade-license',
    title: 'Trade License',
    subtitle: 'Instant trade license issuance, activity additions, and partner amendments.',
    ctaText: 'Get Trade License',
    imageUrl: IMAGES.licensing,
    accentColor: 'blue',
    badge: '✔ DED Authorized'
  },
  {
    id: 'emirates-id',
    title: 'Emirates ID',
    subtitle: 'Federal ICP Emirates ID typing and VIP biometric center appointment liaison.',
    ctaText: 'Type Emirates ID',
    imageUrl: IMAGES.emiratesId,
    accentColor: 'gold',
    badge: '✔ Federal Liaison'
  },
  {
    id: 'bank-account',
    title: 'Bank Account',
    subtitle: 'Guaranteed corporate and personal UAE bank account opening assistance.',
    ctaText: 'Open Bank Account',
    imageUrl: IMAGES.bankAccount,
    accentColor: 'emerald',
    badge: '✔ Premier Banking Partners'
  }
];
