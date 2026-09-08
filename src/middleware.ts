import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, locales } from '@/i18n/config';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/icons') ||
    pathname.startsWith('/image') ||
    pathname.startsWith('/favicon') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // /ru и /ru/... → канонический URL без префикса
  if (pathname === '/ru' || pathname === '/ru/' || pathname.startsWith('/ru/')) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/ru/, '') || '/';
    return NextResponse.redirect(url);
  }

  const hasLocalePrefix = locales.some(
    (locale) =>
      pathname === `/${locale}` ||
      pathname === `/${locale}/` ||
      pathname.startsWith(`/${locale}/`)
  );

  if (hasLocalePrefix) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  const suffix = pathname === '/' ? '' : pathname;
  url.pathname = `/${defaultLocale}${suffix}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
};
