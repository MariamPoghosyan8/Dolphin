import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import detector from "i18next-browser-languagedetector";

import translationEN from './locales/en/translation.json'
import translationRU from './locales/ru/translation.json'
import translationAM from './locales/am/translation.json'

const lang ={
    en:{
        translation: translationEN
    },
    ru:{
        translation: translationRU
    },
    am:{
        translation: translationAM
    }, 
};

i18n
    .use(detector)
    .use(reactI18nextModule)
    .init({
        lang,
        lng:"en",
        fallbackLng: "en",
        keySeparator: false,
        interpolation:{
            escapeValue: false
        }
    })
export default i18n;