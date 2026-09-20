export type Lang = 'nl' | 'es' | 'en' | 'fr';

export const LANGS: Lang[] = ['nl', 'es', 'en', 'fr'];

export const LANG_LABELS: Record<Lang, string> = {
  nl: 'NL',
  es: 'ES',
  en: 'EN',
  fr: 'FR',
};

// Each entry maps a "page group" to its path per language.
// NL has no prefix (default locale), ES/EN/FR are prefixed.
export const ROUTES = {
  home: { nl: '/', es: '/es/', en: '/en/', fr: '/fr/' },
  house: {
    nl: '/het-huis/',
    es: '/es/la-casa/',
    en: '/en/the-house/',
    fr: '/fr/la-maison/',
  },
  area: {
    nl: '/de-omgeving/',
    es: '/es/la-zona/',
    en: '/en/the-area/',
    fr: '/fr/la-region/',
  },
  availability: {
    nl: '/beschikbaarheid/',
    es: '/es/disponibilidad/',
    en: '/en/availability/',
    fr: '/fr/disponibilite/',
  },
  contact: {
    nl: '/contact/',
    es: '/es/contacto/',
    en: '/en/contact/',
    fr: '/fr/contact/',
  },
} as const;

export type PageGroup = keyof typeof ROUTES;
