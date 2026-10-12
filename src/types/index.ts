export interface ServiceItem {
  id: string;
  number: string;
  category: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  topics: string[];
  badge: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SectorItem {
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}