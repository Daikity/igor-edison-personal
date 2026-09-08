import type { MetadataRoute } from 'next';
import { SITE_URL, localePath, locales } from '@/i18n/config';
import { listWorkSlugs } from '@/lib/projects';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const workSlugs = await listWorkSlugs();

  const homeEntries = locales.map((locale) => ({
    url: `${SITE_URL}${localePath(locale)}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: locale === 'ru' ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        locales.map((loc) => [loc, `${SITE_URL}${localePath(loc)}`])
      ),
    },
  }));

  const workEntries = workSlugs.flatMap((slug) =>
    locales.map((locale) => ({
      url: `${SITE_URL}${localePath(locale, `/work/${slug}`)}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((loc) => [loc, `${SITE_URL}${localePath(loc, `/work/${slug}`)}`])
        ),
      },
    }))
  );

  return [...homeEntries, ...workEntries];
}
