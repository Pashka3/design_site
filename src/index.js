import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'animate.css';

import 'flag-icons/css/flag-icons.min.css';
import App from './App';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    
    supportedLngs: ['en', 'pl'],
     // lng: 'en', if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    detection: {
      order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      caches:['cookie']
    },
    backend:{
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react:{useSuspense: false},
    
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


