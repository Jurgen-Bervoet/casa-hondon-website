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
        'We gebruiken enkel strikt noodzakelijke cookies. Met jouw toestemming kunnen we in de toekomst ook analytische cookies gebruiken om de site te verbeteren.',
      acceptAll: 'Alles accepteren',
      rejectAll: 'Weigeren',
      customize: 'Instellingen',
      settingsTitle: 'Cookie-instellingen',
      settingsIntro: 'Kies welke categorieën cookies je toestaat. Je kan dit later altijd aanpassen.',
      necessaryTitle: 'Strikt noodzakelijk',
      necessaryText: 'Nodig om de site goed te laten werken. Kan niet uitgeschakeld worden.',
      analyticsTitle: 'Analytisch',
      analyticsText: 'Helpt ons begrijpen hoe bezoekers de site gebruiken. Momenteel niet actief.',
      marketingTitle: 'Marketing',
      marketingText: 'Voor gepersonaliseerde advertenties. Momenteel niet actief.',
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
        'Solo utilizamos cookies estrictamente necesarias. Con tu consentimiento, en el futuro podremos usar también cookies analíticas para mejorar la web.',
      acceptAll: 'Aceptar todo',
      rejectAll: 'Rechazar',
      customize: 'Configurar',
      settingsTitle: 'Configuración de cookies',
      settingsIntro: 'Elige qué categorías de cookies permites. Puedes cambiarlo más adelante.',
      necessaryTitle: 'Estrictamente necesarias',
      necessaryText: 'Necesarias para que la web funcione correctamente. No se pueden desactivar.',
      analyticsTitle: 'Analíticas',
      analyticsText: 'Nos ayudan a entender cómo se usa la web. Actualmente inactivas.',
      marketingTitle: 'Marketing',
      marketingText: 'Para anuncios personalizados. Actualmente inactivas.',
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
        "We only use strictly necessary cookies. With your consent, we may use analytics cookies in the future to improve the site.",
      acceptAll: 'Accept all',
      rejectAll: 'Reject',
      customize: 'Settings',
      settingsTitle: 'Cookie settings',
      settingsIntro: "Choose which cookie categories you allow. You can change this later at any time.",
      necessaryTitle: 'Strictly necessary',
      necessaryText: "Required for the site to work properly. Can't be switched off.",
      analyticsTitle: 'Analytics',
      analyticsText: 'Helps us understand how visitors use the site. Currently not active.',
      marketingTitle: 'Marketing',
      marketingText: 'For personalised ads. Currently not active.',
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
        "Nous utilisons uniquement des cookies strictement nécessaires. Avec votre consentement, nous pourrions utiliser à l'avenir des cookies analytiques pour améliorer le site.",
      acceptAll: 'Tout accepter',
      rejectAll: 'Refuser',
      customize: 'Paramètres',
      settingsTitle: 'Paramètres des cookies',
      settingsIntro: 'Choisissez les catégories de cookies que vous autorisez. Vous pourrez modifier ce choix plus tard.',
      necessaryTitle: 'Strictement nécessaires',
      necessaryText: 'Indispensables au bon fonctionnement du site. Ne peuvent pas être désactivés.',
      analyticsTitle: 'Analytiques',
      analyticsText: "Nous aident à comprendre comment le site est utilisé. Actuellement inactifs.",
      marketingTitle: 'Marketing',
      marketingText: 'Pour des publicités personnalisées. Actuellement inactifs.',
      save: 'Enregistrer les préférences',
      alwaysOn: 'Toujours actifs',
      privacyLink: 'Politique de confidentialité',
    },
  },
};
