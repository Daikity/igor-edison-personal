export const locales = ['ru', 'en', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ru';

export const localeNames: Record<Locale, string> = {
  ru: 'RU',
  en: 'EN',
  de: 'DE',
};

export const ogLocales: Record<Locale, string> = {
  ru: 'ru_RU',
  en: 'en_US',
  de: 'de_DE',
};

export const SITE_URL = 'https://igor-edison-personal.ru';

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

/** Путь без префикса для ru, с префиксом для en/de */
export function localePath(locale: Locale, path = '/'): string {
  const normalized = path === '/' ? '/' : path.endsWith('/') ? path : `${path}/`;
  if (locale === defaultLocale) {
    return normalized;
  }
  if (normalized === '/') {
    return `/${locale}/`;
  }
  return `/${locale}${normalized}`;
}
