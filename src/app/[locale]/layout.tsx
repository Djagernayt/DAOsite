import {NextIntlClientProvider, useMessages} from 'next-intl'
import {Header} from '@/shared/ui/header/header'

export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode
  params: {locale: string}
}) {
  const messages = useMessages()
  return (
    <html lang={locale}>
      <body className="flex min-h-screen flex-col">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          <main className="flex-1 pt-16 lg:pt-32">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}