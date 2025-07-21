'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export function LangToggle() {
  const { i18n }   = useTranslation();
  const router      = useRouter();
  const pathname    = usePathname();

  const next = i18n.language === 'ru' ? 'en' : 'ru';

  function switchLang() {
    // /ru/abc  -> /en/abc
    const newPath = pathname.replace(/^\/(ru|en)/, `/${next}`);
    router.replace(newPath);
    i18n.changeLanguage(next);          // клиентское состояние
  }

  return (
    <button
      onClick={switchLang}
      className="rounded bg-primary px-3 py-1 text-sm text-white"
    >
      {next.toUpperCase()}
    </button>
  );
}
