// src/features/hero/hero.tsx
'use client';

import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-bold">{t('hero_title')}</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        {t('hero_subtitle')}
      </p>
    </section>
  );
}