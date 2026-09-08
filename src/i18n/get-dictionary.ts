import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/types';

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  ru: () => import('@/content/ru').then((m) => m.default),
  en: () => import('@/content/en').then((m) => m.default),
  de: () => import('@/content/de').then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
