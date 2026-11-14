export type PageId = 'home' | 'services' | 'about' | 'contact';

export interface OnboardingStage {
  stage: string;
  title: string;
  description: string;
  borderColor: string;
  textColor: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  features: string[];
  accentColor: 'sky' | 'purple' | 'blue' | 'emerald';
  inquiryLabel: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface FAQItem {
  keywords: string[];
  answer: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}