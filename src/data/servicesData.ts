import { ServiceItem } from '../types';
import { IMAGES } from './images';

export const SERVICES_LIST: ServiceItem[] = [
  // VISAS & PERMITS
  {
    id: 'visit-visa',
    title: 'Visit Visa',
    category: 'visas',
    iconName: 'Plane',
    imageUrl: IMAGES.visaProcessing,
    badge: 'Express 24h',
    shortSentence: 'Fast-track 30 and 60-day Dubai visit visas with instant entry approval.'
  },
  {
    id: 'tourist-visa',
    title: 'Tourist Visa',
    category: 'visas',
    iconName: 'Compass',
    imageUrl: IMAGES.airportTraveler,
    badge: 'Multiple Entry',
    shortSentence: 'Seamless UAE tourist visa issuance for worldwide travelers and VIP guests.'
  },
  {
    id: 'employment-visa',
    title: 'Employment Visa',
    category: 'visas',
    iconName: 'Briefcase',
    imageUrl: IMAGES.mohreGovThumbnail,
    badge: 'MOHRE Fast-Track',
    shortSentence: 'Complete corporate work permit typing, quota approval, and labour stamping.'
  },
  {
    id: 'residence-visa',
    title: 'Residence Visa',
    category: 'visas',
    iconName: 'Home',
    imageUrl: IMAGES.gdrfaGovThumbnail,
    badge: 'VIP Typing',
    shortSentence: 'End-to-end 2 and 3-year UAE residency visa processing and stamping.'
  },
  {
    id: 'family-visa',
    title: 'Family Visa',
    category: 'visas',
    iconName: 'Users',
    imageUrl: IMAGES.familyVisa,
    badge: 'Sponsor Package',
    shortSentence: 'Sponsor your spouse, children, and parents with zero administrative hassle.'
  },
  {
    id: 'golden-visa',
    title: 'Golden Visa',
    category: 'visas',
    iconName: 'Crown',
    imageUrl: IMAGES.goldenVisa,
    badge: '10-Year VIP',
    shortSentence: 'Exclusive 10-year Golden Visa nomination for investors, doctors, and talents.'
  },
  {
    id: 'entry-permit',
    title: 'Entry Permit',
    category: 'visas',
    iconName: 'FileCheck',
    imageUrl: IMAGES.uaePassportDesk,
    shortSentence: 'Instant GDRFA electronic entry permits for employment and residence.'
  },
  {
    id: 'visa-renewal',
    title: 'Visa Renewal',
    category: 'visas',
    iconName: 'RefreshCw',
    imageUrl: IMAGES.documentReview,
    shortSentence: 'Same-day residence visa renewal with integrated medical and Emirates ID typing.'
  },
  {
    id: 'visa-cancellation',
    title: 'Visa Cancellation',
    category: 'visas',
    iconName: 'XCircle',
    imageUrl: IMAGES.visaCancellation,
    shortSentence: 'Swift official visa cancellation and immigration exit clearance paperwork.'
  },

  // GOVERNMENT TYPING & ID
  {
    id: 'emirates-id',
    title: 'Emirates ID',
    category: 'gov',
    iconName: 'CreditCard',
    imageUrl: IMAGES.emiratesId,
    badge: 'Biometrics Liaison',
    shortSentence: 'Federal Emirates ID application typing and VIP biometric appointment booking.'
  },
  {
    id: 'medical-typing',
    title: 'Medical',
    category: 'gov',
    iconName: 'Activity',
    imageUrl: IMAGES.medical,
    badge: 'VIP Center Booking',
    shortSentence: 'DHA and MOHAP VIP medical fitness typing with 2-hour express results.'
  },
  {
    id: 'mohre',
    title: 'MOHRE',
    category: 'gov',
    iconName: 'Scale',
    imageUrl: IMAGES.mohreLabourWork,
    badge: 'Labour Services',
    shortSentence: 'Official Ministry of Human Resources labour contracts, offers, and quotas.'
  },
  {
    id: 'icp',
    title: 'ICP',
    category: 'gov',
    iconName: 'ShieldCheck',
    imageUrl: IMAGES.icpGovThumbnail,
    badge: 'Federal Immigration',
    shortSentence: 'Federal Authority for Identity, Citizenship, Customs and Port Security typing.'
  },
  {
    id: 'gdrfa',
    title: 'GDRFA',
    category: 'gov',
    iconName: 'Stamp',
    imageUrl: IMAGES.gdrfaGovThumbnail,
    badge: 'Dubai Immigration',
    shortSentence: 'Direct Dubai General Directorate of Residency and Foreigners Affairs clearance.'
  },
  {
    id: 'amer',
    title: 'Amer',
    category: 'gov',
    iconName: 'Landmark',
    imageUrl: IMAGES.typing,
    badge: 'Authorized Typing',
    shortSentence: 'Authorized Amer center VIP documentation services and visa file modifications.'
  },
  {
    id: 'tasheel',
    title: 'Tasheel',
    category: 'gov',
    iconName: 'FileText',
    imageUrl: IMAGES.applicationPreparation,
    shortSentence: 'Tasheel authorized typing for employer permits, wage protection, and disputes.'
  },
  {
    id: 'tawjeeh',
    title: 'Tawjeeh',
    category: 'gov',
    iconName: 'BookOpen',
    imageUrl: IMAGES.consultation,
    shortSentence: 'Mandatory UAE labour law guidance and employee orientation certificate booking.'
  },
  {
    id: 'dubai-police',
    title: 'Dubai Police',
    category: 'gov',
    iconName: 'BadgeAlert',
    imageUrl: IMAGES.policeClearance,
    badge: 'Good Conduct',
    shortSentence: 'Official Police Clearance Certificates (PCC) and accident report typing desk.'
  },
  {
    id: 'dubai-courts',
    title: 'Dubai Courts',
    category: 'gov',
    iconName: 'Gavel',
    imageUrl: IMAGES.courtNotary,
    shortSentence: 'Notary public paperwork, power of attorney typing, and court case liaison.'
  },
  {
    id: 'rta',
    title: 'RTA',
    category: 'gov',
    iconName: 'Car',
    imageUrl: IMAGES.rtaTransport,
    badge: 'Licensing & Vehicles',
    shortSentence: 'Dubai Roads & Transport Authority vehicle registration and licensing clearance.'
  },

  // BUSINESS & PRO SERVICES
  {
    id: 'business-setup',
    title: 'Business Setup',
    category: 'business',
    iconName: 'Building2',
    imageUrl: IMAGES.businessSetup,
    badge: '100% Ownership',
    shortSentence: 'Turnkey Dubai Mainland and Freezone company incorporation in under 24 hours.'
  },
  {
    id: 'trade-license',
    title: 'Trade License',
    category: 'business',
    iconName: 'Scroll',
    imageUrl: IMAGES.licensing,
    badge: 'New & Amend',
    shortSentence: 'Instant trade license issuance, activity additions, and DED partner amendments.'
  },
  {
    id: 'pro-services',
    title: 'PRO Services',
    category: 'business',
    iconName: 'UserCheck',
    imageUrl: IMAGES.corporatePRO,
    badge: 'Corporate Contract',
    shortSentence: 'Dedicated corporate PRO executive desk managing all annual government renewals.'
  },

  // BANKING, LEGAL & TRANSLATION
  {
    id: 'bank-account',
    title: 'Bank Account',
    category: 'banking_legal',
    iconName: 'Building',
    imageUrl: IMAGES.bankAccount,
    badge: 'VIP Liaison',
    shortSentence: 'Guaranteed corporate and personal UAE bank account opening assistance.'
  },
  {
    id: 'credit-card',
    title: 'Credit Card',
    category: 'banking_legal',
    iconName: 'Wallet',
    imageUrl: IMAGES.creditCard,
    shortSentence: 'Fast-track premium UAE credit card applications with premier banking partners.'
  },
  {
    id: 'legal-translation',
    title: 'Translation',
    category: 'banking_legal',
    iconName: 'Languages',
    imageUrl: IMAGES.legalTranslation,
    badge: 'MOJ Certified',
    shortSentence: 'Ministry of Justice certified multi-language legal document translation desk.'
  },
  {
    id: 'document-typing',
    title: 'Typing',
    category: 'banking_legal',
    iconName: 'Keyboard',
    imageUrl: IMAGES.typing,
    badge: '100% Accurate',
    shortSentence: 'Flawless Arabic and English typing for memoranda, contracts, and petitions.'
  },
  {
    id: 'attestation',
    title: 'Attestation',
    category: 'banking_legal',
    iconName: 'CheckCircle2',
    imageUrl: IMAGES.attestation,
    badge: 'MOFA & Embassies',
    shortSentence: 'Global certificate verification, MOFA attestation, and embassy stamping desk.'
  }
];

export const CATEGORIES_DATA = [
  { id: 'all', label: 'All Services (28)' },
  { id: 'visas', label: 'Visas & Permits (9)' },
  { id: 'gov', label: 'Gov Typing & ID (11)' },
  { id: 'business', label: 'Business & PRO (3)' },
  { id: 'banking_legal', label: 'Banking & Legal (5)' },
];
