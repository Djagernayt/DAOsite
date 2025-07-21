
import i18next, { i18n } from 'i18next';
import { initReactI18next } from 'react-i18next';
import FsBackend from 'i18next-fs-backend';
import HttpBackend from 'i18next-http-backend';
import path from 'path';

export async function initI18n(locale: string): Promise<i18n> {
  if (i18next.isInitialized) return i18next;

  await i18next
    .use(FsBackend)        // SSR
    .use(HttpBackend)      // client
    .use(initReactI18next) // hook bridge
    .init({
      lng: locale,
      fallbackLng: 'ru',
      preload: ['ru', 'en'],
      backend: {
        loadPath: path.resolve('./public/locales/{{lng}}/{{ns}}.json'),
      },
      ns: ['common'],
      defaultNS: 'common',
      react: { useSuspense: false },
    });

  return i18next;
}
