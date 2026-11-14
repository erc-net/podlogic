import type { FAQItem, OnboardingStage, ServiceItem } from '../types';

export const ONBOARDING_STAGES: OnboardingStage[] = [
  {
    stage: 'STAGE 01',
    title: 'Discovery',
    description: 'Your operation, volumes, systems, and service expectations fully documented.',
    borderColor: 'border-l-sky-500',
    textColor: 'text-sky-700',
  },
  {
    stage: 'STAGE 02',
    title: 'Process Mapping',
    description: 'A written process document that both sides review and agree is 100% correct.',
    borderColor: 'border-l-blue-600',
    textColor: 'text-blue-700',
  },
  {
    stage: 'STAGE 03',
    title: 'Agent Training',
    description: 'A dedicated team trained to master your product and quality standards before going live.',
    borderColor: 'border-l-purple-600',
    textColor: 'text-purple-700',
  },
  {
    stage: 'STAGE 04',
    title: 'Pilot Phase',
    description: 'A tested process, specifically created so problems surface while volume is still low.',
    borderColor: 'border-l-amber-500',
    textColor: 'text-amber-700',
  },
  {
    stage: 'STAGE 05',
    title: 'Quality Monitoring',
    description: 'Consistent operational output, actively verified and audited rather than assumed.',
    borderColor: 'border-l-emerald-600',
    textColor: 'text-emerald-700',
  },
  {
    stage: 'STAGE 06',
    title: 'Reporting & Optimisation',
    description: 'Full visibility of your outsourced operation and a continuous route to improving it.',
    borderColor: 'border-l-pink-600',
    textColor: 'text-pink-700',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    number: 'SERVICE / 01',
    title: 'Back-Office Administration Support',
    description:
      'Complete management of heavy administrative workloads. From documentation and records management to daily routine operational tasks.',
    features: [
      'Accurate documentation and record updates',
      'CRM maintenance and database cleansing',
      'Daily routine operational task execution',
    ],
    accentColor: 'sky',
    inquiryLabel: 'Inquire about Admin Support',
  },
  {
    number: 'SERVICE / 02',
    title: 'Tenant & Real Estate Management Support',
    description:
      'Tailored administration for real estate agencies, property managers, and commercial landlords across the UK, EU, and US.',
    features: [
      'Tenant intake, onboarding, and inquiry administration',
      'Lease record updates and compliance logging',
      'Maintenance ticket dispatch and tracking',
    ],
    accentColor: 'purple',
    inquiryLabel: 'Inquire about Real Estate Support',
  },
  {
    number: 'SERVICE / 03',
    title: 'Order Processing & Claims Admin',
    description:
      'Rapid and accurate processing of commercial orders, claims documentation, and transactional workflows.',
    features: [
      'Order verification, processing, and system entry',
      'Insurance and service claims administration',
      'Exception handling and customer log tracking',
    ],
    accentColor: 'blue',
    inquiryLabel: 'Inquire about Claims & Orders',
  },
  {
    number: 'SERVICE / 04',
    title: 'Process Automation & Operations Consulting',
    description:
      'Modernize corporate workflows with intelligent back-office automation tools and expert operational guidance.',
    features: [
      'Intelligent workflow and process mapping',
      'Graduate-level employee operational integration',
      'Data management and decision-support analytics',
    ],
    accentColor: 'emerald',
    inquiryLabel: 'Inquire about Operations Consulting',
  },
];

export const FAQ_DATABASE: FAQItem[] = [
  {
    keywords: ['service', 'services', 'offer', 'what do you do', 'support'],
    answer:
      'PodLogic provides back-office administration support, including documentation, CRM updates, record management, order processing, tenant & real estate admin, claims administration, and process automation.',
  },
  {
    keywords: ['onboarding', 'how long', 'start', 'get live', '6 stage', 'six stage', 'steps'],
    answer:
      'Our 6-stage onboarding model includes: 1) Discovery, 2) Process mapping, 3) Agent training, 4) Pilot phase, 5) Quality monitoring, and 6) Reporting & optimisation. Typical onboarding takes 2 to 4 weeks.',
  },
  {
    keywords: ['bulawayo', 'hub', 'location', 'zimbabwe', 'where', 'advantage'],
    answer:
      'PodLogic delivers operational services from Bulawayo, Zimbabwe. We provide aligned time zones with UK/EU, top-tier English-speaking university graduates, and a high commercial cost advantage compared to local teams.',
  },
  {
    keywords: ['contact', 'phone', 'email', 'call', 'number', 'enquiry'],
    answer:
      'You can contact PodLogic via phone at +44 7307276303 or email us directly at hub@podlogic.info. Enquiries are handled Monday to Friday with 24/7 client delivery support.',
  },
  {
    keywords: ['linkedin', 'social', 'facebook', 'instagram', 'twitter', 'x'],
    answer:
      'PodLogic maintains an official presence exclusively on LinkedIn. You can follow our corporate network page via the footer link.',
  },
];

export const QUICK_FAQ_QUESTIONS: string[] = [
  'What services does PodLogic offer?',
  'How long does onboarding take?',
  'Why choose the Bulawayo hub?',
  'How do I contact sales or support?',
];