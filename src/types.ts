export interface CarServicePackage {
  id: string;
  name: string;
  priceFormatted: string;
  priceValue: number;
  highlighted?: boolean;
  tag?: string;
  description: string;
  includes: string[];
}

export type QuoteItemCategory = 'tapices' | 'inmuebles';

export interface QuoteItem {
  id: string;
  category: QuoteItemCategory;
  name: string;
  unitLabel: string;
  price: number;
  type: 'unit' | 'sqm';
  variableRateNote?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
