import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        'Welcome to React': 'Welcome to React and react-i18next',
      },
    },
    gujarati: {
      translation: {
        'welcome to react': 'પ્રતિક્રિયા આપવા માટે આપનું સ્વાગત છે',
        'simple portal': 'સરળ પોર્ટલ',
        'dashboard ': 'ડેશબોર્ડ',
        'add ': 'ઉમેરો',
        'Login ': 'પ્રવેશ કરો',
        'Signup ': 'સાઇનઅપ',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
