export const BRANDING = {
  name: 'CORE LINK',
  fullName: 'CORE LINK Administrative Services',
  tagline: 'VISA | TYPING | LICENSING | TICKETING',
  subtext: 'UAE Authorized Executive Government Liaison & Corporate Typing',
  logoUrl: '/core_link_logo.webp',
  telephone: '068055093',
  telephoneFormatted: '+971 6 805 5093',
  landline: '068055093',
  landlineFormatted: '06 805 5093',
  landlineTelUrl: 'tel:+97168055093',
  mobile: '0568055093',
  mobileFormatted: '+971 56 805 5093',
  telUrl: 'tel:+97168055093',
  mobileTelUrl: 'tel:+971568055093',
  whatsappNumber: '971568055093',
  whatsappBaseUrl: 'https://wa.me/971568055093',
  whatsappUrl: 'https://wa.me/971568055093?text=Hello%20CORE%20LINK%20Administrative%20Services,%20I%20would%20like%20to%20make%20an%20inquiry.',
  emails: {
    info: 'info@corelinkservices.ae',
    admin: 'admin@corelinkservices.ae',
    support: 'support@corelinkservices.ae',
    sales: 'sales@corelinkservices.ae'
  },
  locations: [
    {
      name: 'Ajman Executive Office',
      address: 'Shop No. 9, Liwara 1, CC8V+4WG - Al Bustan',
      city: 'Ajman, United Arab Emirates',
      badge: 'Main Administrative Center & DED Lic. 140290',
      phone: '06 805 5093',
      mobile: '056 805 5093'
    },
    {
      name: 'Dubai Executive Liaison Desk',
      city: 'Dubai, UAE',
      badge: 'Mainland & Golden Visa Desk',
      mobile: '056 805 5093'
    }
  ]
};

/**
 * Returns a standardized WhatsApp link with appropriate pre-filled messages
 * matching official company guidelines.
 */
export const getWhatsAppUrl = (topic?: string): string => {
  if (!topic || topic.trim() === '' || topic === 'general') {
    return `https://wa.me/${BRANDING.whatsappNumber}?text=${encodeURIComponent('Hello CORE LINK Administrative Services, I would like to make an inquiry.')}`;
  }
  const lower = topic.toLowerCase();
  if (lower.includes('visa') || lower.includes('residency') || lower.includes('golden') || lower.includes('schengen') || lower.includes('immigration')) {
    return `https://wa.me/${BRANDING.whatsappNumber}?text=${encodeURIComponent('Hello CORE LINK Administrative Services, I need assistance with UAE visa services.')}`;
  }
  if (lower.includes('typing') || lower.includes('tasheel') || lower.includes('amer') || lower.includes('medical') || lower.includes('emirates id') || lower.includes('salem')) {
    return `https://wa.me/${BRANDING.whatsappNumber}?text=${encodeURIComponent('Hello CORE LINK Administrative Services, I need typing service assistance.')}`;
  }
  if (lower.includes('business') || lower.includes('license') || lower.includes('licensing') || lower.includes('company') || lower.includes('corporate') || lower.includes('llc') || lower.includes('ded') || lower.includes('pro')) {
    return `https://wa.me/${BRANDING.whatsappNumber}?text=${encodeURIComponent('Hello CORE LINK Administrative Services, I need business service assistance.')}`;
  }
  if (lower.includes('manpower') || lower.includes('talent') || lower.includes('recruitment') || lower.includes('workforce') || lower.includes('labor')) {
    return `https://wa.me/${BRANDING.whatsappNumber}?text=${encodeURIComponent('Hello CORE LINK Administrative Services, I need manpower service assistance.')}`;
  }
  if (lower.includes('ticket') || lower.includes('ticketing') || lower.includes('flight') || lower.includes('hotel') || lower.includes('travel')) {
    return `https://wa.me/${BRANDING.whatsappNumber}?text=${encodeURIComponent('Hello CORE LINK Administrative Services, I need ticketing service assistance.')}`;
  }
  return `https://wa.me/${BRANDING.whatsappNumber}?text=${encodeURIComponent(`Hello CORE LINK Administrative Services, I need assistance with ${topic}.`)}`;
};

