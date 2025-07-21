import { initI18nServer }    from '@/lib/i18n.server'
import ClientProviders        from '@/shared/ui/client-providers'
import {Header}                 from '@/shared/ui/header/header'

export default async function LocaleLayout(
  props: {
    children: React.ReactNode
    params: { locale: string }              // ⬅ тип остаётся, НО:
  }
) {
  /* ①  ЖДЁМ promise‑params, потом деструктурируем  */
  const { locale } = await props.params     // ← ключевая строка

  /* ②  Инициализируем i18n только на сервере */
  await initI18nServer(locale)

  /* ③  Оборачиваем в клиентский провайдер */
  return (
    <html lang={locale}>
      <body className="flex min-h-screen flex-col">
        <ClientProviders locale={locale}>
          <Header />
          <main className="flex-1 pt-20">{props.children}</main>
        </ClientProviders>
      </body>
    </html>
  )
}
