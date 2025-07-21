import { initI18nServer } from '@/lib/i18n.server'
import ClientProviders from '@/shared/ui/client-providers'
import {Header} from '@/shared/ui/header/header'
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  await initI18nServer(locale);
  
  return (
    <html lang={locale}>
      <body className="flex min-h-screen flex-col">
        <ClientProviders locale={locale}>
          <Header />
          <main className="flex-1 pt-20">{children}</main>
        </ClientProviders>
      </body>
    </html>
  );
}

