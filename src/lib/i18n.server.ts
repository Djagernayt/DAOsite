import i18next from 'i18next';
import FsBackend from 'i18next-fs-backend';

// one singleton instance for the whole node process
let isInit = false;

export async function initI18nServer(locale: string) {
  if (!isInit) {
    await i18next
      .use(FsBackend)                                    // ⬅ no react‑i18next here
      .init({
        lng: locale,
        fallbackLng: 'ru',
        preload: ['ru', 'en'],
        ns: ['common'],
        defaultNS: 'common',
        backend: {
          loadPath: `${process.cwd()}/public/locales/{{lng}}/{{ns}}.json`,
        },
      });
    isInit = true;
  } else {
    i18next.changeLanguage(locale);
  }
  return i18next;
}
