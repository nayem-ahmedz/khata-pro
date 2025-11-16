import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// language json file
import en from './en/translation.json';
import bn from './bn/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
        en: { translation: en },
        bn: { translation: bn }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;