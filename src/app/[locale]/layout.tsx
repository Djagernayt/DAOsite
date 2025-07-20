import {NextIntlClientProvider, useMessages} from 'next-intl'
import {Header} from '@/shared/ui/header/header'

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{locale: string}>  
}

export default async function LocaleLayout({children, params}: LayoutProps) {
  const {locale} = await params        
  const messages = useMessages()       

  return (
    <html lang={locale}>
      <body className="flex min-h-screen flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="flex-1 pt-16 lg:pt-32">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}