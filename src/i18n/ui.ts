import type { Lang } from './routes';

export const UI: Record<
  Lang,
  {
    nav: { home: string; house: string; area: string; availability: string; contact: string };
    footer: { tagline: string; rights: string };
    common: { checkAvailability: string };
  }
> = {
  nl: {
    nav: {
      home: 'Home',
      house: 'Het Huis',
      area: 'De Omgeving',
      availability: 'Beschikbaarheid',
      contact: 'Contact',
    },
    footer: {
      tagline: 'Een klein vakantiehuis met zwembad in Hondón de las Nieves, Alicante.',
      rights: 'Alle rechten voorbehouden.',
    },
    common: { checkAvailability: 'Bekijk beschikbaarheid' },
  },
  es: {
    nav: {
      home: 'Inicio',
      house: 'La Casa',
      area: 'La Zona',
      availability: 'Disponibilidad',
      contact: 'Contacto',
    },
    footer: {
      tagline: 'Una pequeña casa de vacaciones con piscina en Hondón de las Nieves, Alicante.',
      rights: 'Todos los derechos reservados.',
    },
    common: { checkAvailability: 'Consultar disponibilidad' },
  },
  en: {
    nav: {
      home: 'Home',
      house: 'The House',
      area: 'The Area',
      availability: 'Availability',
      contact: 'Contact',
    },
    footer: {
      tagline: 'A small holiday home with a pool in Hondón de las Nieves, Alicante.',
      rights: 'All rights reserved.',
    },
    common: { checkAvailability: 'Check availability' },
  },
  fr: {
    nav: {
      home: 'Accueil',
      house: 'La Maison',
      area: 'La Région',
      availability: 'Disponibilité',
      contact: 'Contact',
    },
    footer: {
      tagline: 'Une petite maison de vacances avec piscine à Hondón de las Nieves, Alicante.',
      rights: 'Tous droits réservés.',
    },
    common: { checkAvailability: 'Voir les disponibilités' },
  },
};
