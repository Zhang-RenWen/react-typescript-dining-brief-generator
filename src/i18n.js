import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './assets/i18n/locales/en.json';
import zhHant from './assets/i18n/locales/zh-hant.json';

// const savedLanguage = JSON.parse(localStorage.getItem('lang') || 'zhHant');

const resources = {
  en: {
    translation: en
  },
  zhHant: {
    translation: zhHant
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'zhHant',
  keyseparator: false,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
