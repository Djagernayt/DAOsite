
import { NextResponse, NextRequest } from 'next/server';

const locales = ['ru', 'en'];
const defaultLocale = 'ru';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // / -> /ru
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  // /abc -> 404 (без префикса)
  const locale = pathname.split('/')[1];
  if (!locales.includes(locale)) {
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
  }

  // положим язык в cookie, пригодится на клиенте
  request.headers.set('x-language', locale);
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};
