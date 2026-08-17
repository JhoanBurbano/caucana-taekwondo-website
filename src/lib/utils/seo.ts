import type { FAQItem } from '../types';

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateProgramSchema(program: {
  name: string;
  description: string;
  provider: string;
  price: { amount: number; currency: string };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: program.name,
    description: program.description,
    provider: {
      '@type': 'SportsActivityLocation',
      name: program.provider,
    },
    offers: {
      '@type': 'Offer',
      price: program.price.amount,
      priceCurrency: program.price.currency,
    },
  };
}
