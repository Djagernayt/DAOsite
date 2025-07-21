import { initI18n } from '@/lib/i18n'
import ClientProviders from '@/shared/ui/client-providers'
import {Header} from '@/shared/ui/header/header'

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  /*  ① initialise i18n on the server (loads JSON from /public/locales)  */
  const i18n = await initI18n(locale)

  /*  ② wrap children in the CLIENT provider  */
  return (
    <html lang={locale}>
      <body className="flex min-h-screen flex-col">
        <ClientProviders i18n={i18n}>
          <Header />
          <main className="flex-1 pt-20">{children}</main>
        </ClientProviders>
      </body>
    </html>
  )
}
