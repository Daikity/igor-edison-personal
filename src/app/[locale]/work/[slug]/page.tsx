import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import { getDictionary } from '@/i18n/get-dictionary';
import { getWorkCaseView } from '@/lib/projects';
import {
  SITE_URL,
  isLocale,
  localePath,
  locales,
  ogLocales,
  type Locale,
} from '@/i18n/config';
import './work.scss';

// Кейсы читаются из манифестов проектов в рантайме
export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return {};

  const work = await getWorkCaseView(slug, localeParam);
  if (!work) return {};

  const canonical = `${SITE_URL}${localePath(localeParam, `/work/${slug}`)}`;
  const languages = Object.fromEntries(
    locales.map((loc) => [loc, `${SITE_URL}${localePath(loc, `/work/${slug}`)}`])
  );
  languages['x-default'] = `${SITE_URL}${localePath('ru', `/work/${slug}`)}`;

  return {
    title: work.metaTitle,
    description: work.metaDescription,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title: work.metaTitle,
      description: work.metaDescription,
      url: canonical,
      locale: ogLocales[localeParam],
      type: 'article',
    },
  };
}

export default async function WorkCasePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const work = await getWorkCaseView(slug, locale);
  if (!work) notFound();

  const dict = await getDictionary(locale);
  const labels = dict.workCase;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: work.title,
    description: work.summary,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: `${SITE_URL}${localePath(locale, `/work/${slug}`)}`,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  const contactHref = `${localePath(locale)}#contact`;

  return (
    <article className="work-case">
      <JsonLd data={jsonLd} />
      <div className="work-case__container">
        <Link className="work-case__back" href={`${localePath(locale)}#projects`}>
          ← {labels.backLabel}
        </Link>

        <header className="work-case__header">
          <h1>{work.title}</h1>
          <p className="work-case__summary">{work.summary}</p>
          <ul className="work-case__stack">
            {work.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </header>

        <section className="work-case__block">
          <h2>{labels.problemLabel}</h2>
          <p>{work.problem}</p>
        </section>
        <section className="work-case__block">
          <h2>{labels.solutionLabel}</h2>
          <p>{work.solution}</p>
        </section>
        <section className="work-case__block">
          <h2>{labels.resultLabel}</h2>
          <p>{work.result}</p>
        </section>

        <div className="work-case__actions">
          <a className="work-case__btn work-case__btn--primary" href={`${work.demoBase}/`}>
            {labels.demoCta}
          </a>
          <Link className="work-case__btn" href={contactHref}>
            {labels.contactCta}
          </Link>
        </div>
      </div>
    </article>
  );
}
