import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslation from './locales/en/translation.json';
import bnTranslation from './locales/bn/translation.json';

const resources = {
  en: {
    translation: enTranslation
  },
  bn: {
    translation: bnTranslation
  }
};

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en', // Default language

    // Configure language detector
    detection: {
      // Order and from where user language should be detected
      order: ['localStorage', 'navigator'],

      // Keys or params to lookup language from
      lookupLocalStorage: 'i18nextLng',

      // Cache user language on
      caches: ['localStorage'],

      // Optional expire and domain for set cookie
      cookieMinutes: 10080, // 7 days
    },

    interpolation: {
      escapeValue: false // React already safes from xss
    },

    // Allow keys to be phrases having `:`, `.`
    nsSeparator: false,
    keySeparator: '.',

    // Enable debug mode in development
    debug: false,

    react: {
      useSuspense: false
    }
  });

export default i18n;
