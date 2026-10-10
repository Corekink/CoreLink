// High-resolution authentic photo assets for CORE LINK Administrative Services
// Every image is curated for direct relevance to UAE government, corporate PRO, and administrative procedures.

export interface ServiceCategoryImages {
  consultation: string;
  documentReview: string;
  applicationPreparation: string;
  submissionFiling: string;
  statusUpdates: string;
  doorstepCompletion: string;
  visaProcessing: string;
  corporatePRO: string;
  businessSetup: string;
  manpower: string;
  typing: string;
  ticketing: string;
  medical: string;
  licensing: string;
  attestation: string;
  ejari: string;
  govtSystems: string;
}

/**
 * Comprehensive serviceImages constant exporting high-quality, professional image URLs
 * for all core UAE administrative, government liaison, and corporate services.
 */
export const serviceImages: ServiceCategoryImages = {
  // 1. Consultation - Professional client advisory & executive government liaison briefing
  consultation: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=85',

  // 2. Document Review - Careful verification of passports, legal documentation, and attestations
  documentReview: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=85',

  // 3. Application Preparation - Precision typing and legal draft preparation in certified Arabic & English
  applicationPreparation: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85',

  // 4. Submission & Filing - Official lodgement at GDRFA, MOHRE, ICP, and DED government counters
  submissionFiling: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85',

  // 5. Status Updates - Live PRO application tracking, digital clearances, and milestone notifications
  statusUpdates: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85',

  // 6. Doorstep Completion - Stamped passports, approved residency visas, and executive courier delivery
  doorstepCompletion: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=1200&q=85',

  // 7. Visa Processing - UAE Golden Visa, investor, employment, and family residence clearances
  visaProcessing: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85',

  // 8. Corporate PRO - Ministerial representations, chamber of commerce endorsements, and corporate compliance
  corporatePRO: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=85',

  // 9. Business Setup - Mainland LLC formation, Freezone registrations, and corporate structuring in UAE
  businessSetup: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',

  // 10. Manpower - MOHRE quota approvals, work permits, labor card issuances, and workforce mobilization
  manpower: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',

  // 11. Typing - Authorized Tasheel, Amer, Tawjeeh, and ICP smart digital form processing
  typing: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85',

  // 12. Ticketing - International airline reservations, OK-to-Board updates, and transit visas
  ticketing: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85',

  // 13. Medical - DHA / MOHAP Salem VIP medical fitness screening, appointments, and blood diagnostics
  medical: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85',

  // 14. Licensing - DED commercial trade license renewals, amendments, and initial government approvals
  licensing: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=85',

  // 15. Attestation - MOFA diplomatic stamps, embassy consular apostilles, and degree legalizations
  attestation: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=85',

  // 16. Ejari - Dubai Land Department tenancy contract attestations and commercial lease approvals
  ejari: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85',

  // 17. Govt Systems - ICP, GDRFA, MOHRE, DET, and TAMM electronic clearing and smart governance portals
  govtSystems: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=85'
};

// Explicit category collection alias
export const SERVICE_CATEGORIES: ServiceCategoryImages = serviceImages;

/**
 * Full image registry maintaining compatibility with legacy components and UI sections
 */
export const IMAGES = {
  // Service category definitions
  ...serviceImages,

  // Specialized Documentation & Identity Services
  emiratesId: 'https://images.unsplash.com/photo-1556742049-0a67d55fe023?auto=format&fit=crop&w=1000&q=85',
  bankAccount: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=85',
  familyVisa: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=1000&q=85',
  goldenVisa: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85',
  visaCancellation: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=1000&q=85',
  legalTranslation: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=85',
  creditCard: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=85',
  courtNotary: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=85',
  rtaTransport: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85',
  policeClearance: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=1000&q=85',

  // Government Systems Desk Thumbnails & Channels
  icpGovThumbnail: 'https://images.unsplash.com/photo-1556742049-0a67d55fe023?auto=format&fit=crop&w=600&q=80',
  gdrfaGovThumbnail: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
  mohreGovThumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
  detGovThumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
  mofaGovThumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80',
  uaePassGovThumbnail: 'https://images.unsplash.com/photo-1556742049-0a67d5574f73?auto=format&fit=crop&w=600&q=80',
  dhaGovThumbnail: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
  ejariGovThumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
  rtaGovThumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
  dmGovThumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
  tamGovThumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',

  // Hero & Skyline
  dubaiSkylineNight: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=85',
  dubaiSkylineSunset: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1600&q=85',
  dubaiBusinessBay: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=85',
  worldNetworkMap: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80',

  // Real Business Services
  visaApplicationDesk: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85',
  visaProcessingDossier: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=85',
  startYourBusiness: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
  companyFormation: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
  tradeLicense: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=85',
  licenseRenewal: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=85',
  businessSetupTurnkey: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
  proGovernmentServices: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=85',
  documentClearingDesk: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=85',
  governmentApplications: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=85',
  corporateDocumentation: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85',
  typingCenterServices: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85',
  manpowerWorkforce: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',

  // Desks and Workspaces
  uaePassportDesk: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85',
  documentReviewDesk: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=85',
  legalWomanDesk: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=85',
  typingCenterOffice: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85',

  // Executive and Corporate Consultations
  executiveAtDesk: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
  arabExecutiveDesk: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=85',
  corporateTeam: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=85',
  labourTeam: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',
  businessMeetingBg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85',
  contractSigning: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=85',

  // Real Government Work & Authority Channels
  icpEmiratesIdWork: 'https://images.unsplash.com/photo-1556742049-0a67d55fe023?auto=format&fit=crop&w=1000&q=85',
  gdrfaResidencyWork: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85',
  mohreLabourWork: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85',
  detBusinessWork: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85',
  mofaAttestationWork: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=85',
  uaePassDigitalWork: 'https://images.unsplash.com/photo-1556742049-0a67d5574f73?auto=format&fit=crop&w=1000&q=85',
  dhaMedicalFitnessWork: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85',
  isoComplianceWork: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=85',

  // Travel & Airport VIP
  airportTraveler: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=85',
  airlineTicketDesk: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85',

  // Global Destinations (International Visas)
  parisEiffel: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
  berlinBrandenburg: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=80',
  romeColosseum: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80',
  barcelonaSagrada: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=800&q=80',
  switzerlandAlps: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
  amsterdamCanal: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=800&q=80',
  santoriniGreece: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
  lisbonPortugal: 'https://images.unsplash.com/photo-1509803874385-db7c23652552?auto=format&fit=crop&w=800&q=80',
  londonBigBen: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
  torontoSkyline: 'https://images.unsplash.com/photo-1507992781348-310259076fa0?auto=format&fit=crop&w=800&q=80',
  sydneyOpera: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
  nycSkyline: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80',
  schengenCollage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80',

  // Government References
  dubaiGovBuilding: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
  emiratesIdTypingDesk: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=85',
  governmentFacade: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85',
  transportRta: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85',

  // Social Media & Community Photos
  socialInstagramPost1: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=85',
  socialInstagramPost2: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=85',
  socialInstagramPost3: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=85',
  socialInstagramPost4: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=85',
  socialInstagramPost5: 'https://images.unsplash.com/photo-1556742049-0a67d55fe023?auto=format&fit=crop&w=800&q=85',
  socialInstagramPost6: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=85',

  // Before / After Process
  scatteredPaperwork: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=1200&q=85',
  approvedPassportStamped: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85',

  // Corporate & Notary Work
  notaryContractWork: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=85',
  legalContractWork: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=85',
  realEstateDocument: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85',
  manpowerSiteEngineers: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85'
};

export default serviceImages;
