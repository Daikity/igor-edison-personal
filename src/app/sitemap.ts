import type { MetadataRoute } from 'next';
import { SITE_URL, localePath, locales } from '@/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.map((locale) => ({
    url: `${SITE_URL}${localePath(locale)}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: locale === 'ru' ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        locales.map((loc) => [loc, `${SITE_URL}${localePath(loc)}`])
      ),
    },
  }));
}
