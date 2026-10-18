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
    footer: { tagline: string; rights: string; terms: string; privacy: string };
    common: { checkAvailability: string };
    cookies: {
      message: string;
      acceptAll: string;
      rejectAll: string;
      customize: string;
      settingsTitle: string;
      settingsIntro: string;
      necessaryTitle: string;
      necessaryText: string;
      analyticsTitle: string;
      analyticsText: string;
      marketingTitle: string;
      marketingText: string;
      save: string;
      alwaysOn: string;
      privacyLink: string;
    };
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
      terms: 'Algemene voorwaarden',
      privacy: 'Privacyverklaring',
    },
    common: { checkAvailability: 'Bekijk beschikbaarheid' },
    cookies: {
      message:
        'We gebruiken strikt noodzakelijke cookies. Met jouw toestemming gebruiken we ook analytische cookies om de site te verbeteren, en tonen we de Google Maps-kaart op de contactpagina.',
      acceptAll: 'Alles accepteren',
      rejectAll: 'Weigeren',
      customize: 'Instellingen',
      settingsTitle: 'Cookie-instellingen',
      settingsIntro: 'Kies welke categorieën cookies je toestaat. Je kan dit later altijd aanpassen.',
      necessaryTitle: 'Strikt noodzakelijk',
      necessaryText: 'Nodig om de site goed te laten werken. Kan niet uitgeschakeld worden.',
      analyticsTitle: 'Analytisch',
      analyticsText: 'Google Analytics helpt ons begrijpen hoe bezoekers de site gebruiken.',
      marketingTitle: 'Marketing',
      marketingText: 'Voor externe diensten zoals de Google Maps-kaart op de contactpagina.',
      save: 'Voorkeuren opslaan',
      alwaysOn: 'Altijd aan',
      privacyLink: 'Privacyverklaring',
    },
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
      terms: 'Condiciones generales',
      privacy: 'Política de privacidad',
    },
    common: { checkAvailability: 'Consultar disponibilidad' },
    cookies: {
      message:
        'Utilizamos cookies estrictamente necesarias. Con tu consentimiento, usamos también cookies analíticas para mejorar la web y mostramos el mapa de Google Maps en la página de contacto.',
      acceptAll: 'Aceptar todo',
      rejectAll: 'Rechazar',
      customize: 'Configurar',
      settingsTitle: 'Configuración de cookies',
      settingsIntro: 'Elige qué categorías de cookies permites. Puedes cambiarlo más adelante.',
      necessaryTitle: 'Estrictamente necesarias',
      necessaryText: 'Necesarias para que la web funcione correctamente. No se pueden desactivar.',
      analyticsTitle: 'Analíticas',
      analyticsText: 'Google Analytics nos ayuda a entender cómo se usa la web.',
      marketingTitle: 'Marketing',
      marketingText: 'Para servicios externos como el mapa de Google Maps en la página de contacto.',
      save: 'Guardar preferencias',
      alwaysOn: 'Siempre activas',
      privacyLink: 'Política de privacidad',
    },
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
      terms: 'Terms & Conditions',
      privacy: 'Privacy Policy',
    },
    common: { checkAvailability: 'Check availability' },
    cookies: {
      message:
        'We use strictly necessary cookies. With your consent, we also use analytics cookies to improve the site and show the Google Maps map on the contact page.',
      acceptAll: 'Accept all',
      rejectAll: 'Reject',
      customize: 'Settings',
      settingsTitle: 'Cookie settings',
      settingsIntro: "Choose which cookie categories you allow. You can change this later at any time.",
      necessaryTitle: 'Strictly necessary',
      necessaryText: "Required for the site to work properly. Can't be switched off.",
      analyticsTitle: 'Analytics',
      analyticsText: 'Google Analytics helps us understand how visitors use the site.',
      marketingTitle: 'Marketing',
      marketingText: 'For external services such as the Google Maps map on the contact page.',
      save: 'Save preferences',
      alwaysOn: 'Always on',
      privacyLink: 'Privacy Policy',
    },
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
      terms: 'Conditions générales',
      privacy: 'Politique de confidentialité',
    },
    common: { checkAvailability: 'Voir les disponibilités' },
    cookies: {
      message:
        "Nous utilisons des cookies strictement nécessaires. Avec votre consentement, nous utilisons aussi des cookies analytiques pour améliorer le site et affichons la carte Google Maps sur la page de contact.",
      acceptAll: 'Tout accepter',
      rejectAll: 'Refuser',
      customize: 'Paramètres',
      settingsTitle: 'Paramètres des cookies',
      settingsIntro: 'Choisissez les catégories de cookies que vous autorisez. Vous pourrez modifier ce choix plus tard.',
      necessaryTitle: 'Strictement nécessaires',
      necessaryText: 'Indispensables au bon fonctionnement du site. Ne peuvent pas être désactivés.',
      analyticsTitle: 'Analytiques',
      analyticsText: 'Google Analytics nous aide à comprendre comment le site est utilisé.',
      marketingTitle: 'Marketing',
      marketingText: 'Pour des services externes comme la carte Google Maps sur la page de contact.',
      save: 'Enregistrer les préférences',
      alwaysOn: 'Toujours actifs',
      privacyLink: 'Politique de confidentialité',
    },
  },
};
