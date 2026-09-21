import type { Lang } from './routes';

export const UI: Record<
  Lang,
  {
    nav: {
      home: string;
      house: string;
      area: string;
      story: string;
      availability: string;
      faq: string;
      contact: string;
    };
    footer: { tagline: string; rights: string };
    common: { checkAvailability: string };
  }
> = {
  nl: {
    nav: {
      home: 'Home',
      house: 'Het Huis',
      area: 'Omgeving',
      story: 'Ons Verhaal',
      availability: 'Prijzen & Beschikbaarheid',
      faq: 'FAQ',
      contact: 'Contact',
    },
    footer: {
      tagline: 'Een vakantiehuis met privézwembad in Hondón de las Nieves, Alicante.',
      rights: 'Alle rechten voorbehouden.',
    },
    common: { checkAvailability: 'Bekijk beschikbaarheid' },
  },
  es: {
    nav: {
      home: 'Inicio',
      house: 'La Casa',
      area: 'La Zona',
      story: 'Nuestra Historia',
      availability: 'Precios y Disponibilidad',
      faq: 'FAQ',
      contact: 'Contacto',
    },
    footer: {
      tagline: 'Una casa de vacaciones con piscina privada en Hondón de las Nieves, Alicante.',
      rights: 'Todos los derechos reservados.',
    },
    common: { checkAvailability: 'Consultar disponibilidad' },
  },
  en: {
    nav: {
      home: 'Home',
      house: 'The House',
      area: 'The Area',
      story: 'Our Story',
      availability: 'Pricing & Availability',
      faq: 'FAQ',
      contact: 'Contact',
    },
    footer: {
      tagline: 'A holiday home with a private pool in Hondón de las Nieves, Alicante.',
      rights: 'All rights reserved.',
    },
    common: { checkAvailability: 'Check availability' },
  },
  fr: {
    nav: {
      home: 'Accueil',
      house: 'La Maison',
      area: 'La Région',
      story: 'Notre Histoire',
      availability: 'Tarifs & Disponibilité',
      faq: 'FAQ',
      contact: 'Contact',
    },
    footer: {
      tagline: 'Une maison de vacances avec piscine privée à Hondón de las Nieves, Alicante.',
      rights: 'Tous droits réservés.',
    },
    common: { checkAvailability: 'Voir les disponibilités' },
  },
};
