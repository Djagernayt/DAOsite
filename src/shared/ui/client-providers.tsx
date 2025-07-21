'use client';

import { useEffect } from 'react';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

export default function ClientProviders({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  // runs only in the browser bundle
  useEffect(() => {
    if (!i18next.isInitialized) {
      i18next
        .use(HttpBackend)
        .use(initReactI18next)         // safe in the browser
        .init({
          lng: locale,
          fallbackLng: 'ru',
          ns: ['common'],
          defaultNS: 'common',
          backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
          react: { useSuspense: false },
        });
    } else {
      i18next.changeLanguage(locale);
    }
  }, [locale]);

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}
