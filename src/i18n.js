// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationJA from './locales/ja/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
  ja: { translation: translationJA },
  en: { translation: translationEN },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ja',
    supportedLngs: ['ja', 'en'],
    debug: true,
    interpolation: { escapeValue: false },
    detection: {
      order: ['path', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie'],
      lookupFromPathIndex: 0,
    },
    lng: 'ja',
    parseLng: (lng) => (lng.startsWith('ja') ? 'ja' : 'en'),
  });

export default i18n;


















// // src/i18n.js
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import translationJA from './locales/ja/translation.json';
// import translationEN from './locales/en/translation.json';

// const resources = {
//   ja: { translation: translationJA },
//   en: { translation: translationEN },
// };

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     resources,
//     fallbackLng: 'ja',
//     supportedLngs: ['ja', 'en'],
//     debug: true,
//     interpolation: { escapeValue: false },
//     detection: {
//       order: ['path', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
//       caches: ['cookie'],
//       lookupFromPathIndex: 0,
//     },
//     lng: 'ja',
//     parseLng: (lng) => (lng.startsWith('ja') ? 'ja' : 'en'),
//   });

// export default i18n;





















// // // src/i18n.js
// // import i18n from 'i18next';
// // import { initReactI18next } from 'react-i18next';
// // import LanguageDetector from 'i18next-browser-languagedetector';
// // import translationJA from './locales/ja/translation.json';
// // import translationEN from './locales/en/translation.json';

// // const resources = {
// //   ja: { translation: translationJA },
// //   en: { translation: translationEN },
// // };

// // i18n
// //   .use(LanguageDetector)
// //   .use(initReactI18next)
// //   .init({
// //     resources,
// //     fallbackLng: 'ja', // Default Japanese
// //     debug: true,
// //     interpolation: { escapeValue: false },
// //     detection: {
// //       order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
// //       caches: ['cookie'],
// //     },
// //   });

// // export default i18n;