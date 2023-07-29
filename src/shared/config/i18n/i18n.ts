import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
i18n
    // подключение плагинов
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru', // язык по умолчанию
        debug: __IS_DEV__, // спам в консоль информации (подгрузка переводов, отсутствующие ключи и т д)

        interpolation: {
            escapeValue: false,
        }
    });


export default i18n;