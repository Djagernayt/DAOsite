import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['ru', 'en'],
  defaultLocale: 'ru',          // fallback
  localePrefix: 'as-needed'     // /ru/page, а для defaultLocale — без префикса
})

export const config = {
  matcher: ['/((?!api|_next|favicon.ico).*)']
}