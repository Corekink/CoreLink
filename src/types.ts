export interface ServiceItem {
  id: string;
  title: string;
  category: 'visas' | 'gov' | 'business' | 'banking_legal';
  iconName: string;
  imageUrl: string;
  badge?: string;
  shortSentence: string;
}

export interface PromoAd {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  imageUrl: string;
  accentColor: 'gold' | 'emerald' | 'blue' | 'purple';
  badge: string;
}

export interface InquiryFormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  serviceRequired: string;
  message: string;
  uploadedFiles: { name: string; size: string; status: 'uploading' | 'complete' }[];
}

export type LanguageCode = 'en' | 'ar' | 'ur' | 'ru' | 'zh';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
  isThinking?: boolean;
}
