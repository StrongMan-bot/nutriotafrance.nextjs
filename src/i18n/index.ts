import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import fr from './locales/fr.json';
import en from './locales/en.json';
import fr_products from './locales/fr_products.json';
import en_products from './locales/en_products.json';
import fr_news from './locales/fr_news.json';
import en_news from './locales/en_news.json';
import fr_news0 from './locales/fr_news0.json';
import en_news0 from './locales/en_news0.json';
import fr_news1 from './locales/fr_news1.json';
import en_news1 from './locales/en_news1.json';
import fr_news2 from './locales/fr_news2.json';
import en_news2 from './locales/en_news2.json';
import fr_news3 from './locales/fr_news3.json';
import en_news3 from './locales/en_news3.json';
import fr_news4 from './locales/fr_news4.json';
import en_news4 from './locales/en_news4.json';
import fr_news5 from './locales/fr_news5.json';
import en_news5 from './locales/en_news5.json';
import fr_news6 from './locales/fr_news6.json';
import en_news6 from './locales/en_news6.json';
import fr_testimonial from './locales/fr_testimonial.json';
import en_testimonial from './locales/en_testimonial.json';
import fr_learnnews from './locales/fr_learnnews.json';
import en_learnnews from './locales/en_learnnews.json';

// Import product translation files
import fr_product1 from './locales/fr_product1.json';
import en_product1 from './locales/en_product1.json';
import fr_product2 from './locales/fr_product2.json';
import en_product2 from './locales/en_product2.json';
import fr_product3 from './locales/fr_product3.json';
import en_product3 from './locales/en_product3.json';

const resources = {
  fr: {
    translation: fr,
    products: fr_products,
    news: fr_news,
    news0: fr_news0,
    news1: fr_news1,
    news2: fr_news2,
    news3: fr_news3,
    news4: fr_news4,
    news5: fr_news5,
    news6: fr_news6,
    testimonial: fr_testimonial,
    learnnews: fr_learnnews,
    product1: fr_product1,
    product2: fr_product2,
    product3: fr_product3
  },
  en: {
    translation: en,
    products: en_products,
    news: en_news,
    news0: en_news0,
    news1: en_news1,
    news2: en_news2,
    news3: en_news3,
    news4: en_news4,
    news5: en_news5,
    news6: en_news6,
    testimonial: en_testimonial,
    learnnews: en_learnnews,
    product1: en_product1,
    product2: en_product2,
    product3: en_product3
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // English fallback
    lng: 'fr', // Explicitly set French as default
    debug: false,
    
    // Ensure synchronous loading for react-snap
    initImmediate: false,
    react: {
      useSuspense: false // Disable Suspense for react-snap compatibility
    },
    
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;