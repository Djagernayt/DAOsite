import '@/app/globals.css'
import { Header } from '@/shared/ui/header/header'
import type { Metadata } from 'next'
import { NextIntlClientProvider, useMessages } from 'next-intl'

// export const metadata: Metadata = { title: 'ITS DAO', description: '…' }

// // export default function RootLayout({ children }: { children: React.ReactNode }) {
// //   return (
// //     <html lang="ru">
// //       <body className="flex min-h-screen flex-col">
// //         <Header />
// //         <main className="flex-1 pt-16 lg:pt-32">{children}</main>
// //       </body>
// //     </html>
// //   )
// // }

export default function RootLayout({ children, params }: any) {
  // ① получаем server‑side переводы
  const messages = useMessages()

  return (
    <html lang={params.locale}>
      <body className="flex min-h-screen flex-col">
        {/* ② оборачиваем в провайдер */}
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Header />
          <main className="flex-1 pt-16 lg:pt-32">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
