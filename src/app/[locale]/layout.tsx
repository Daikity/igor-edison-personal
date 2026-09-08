import type { Metadata } from 'next';
import { Manrope, Teko } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.scss';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { getDictionary } from '@/i18n/get-dictionary';
import {
  SITE_URL,
  isLocale,
  localePath,
  locales,
  ogLocales,
  type Locale,
} from '@/i18n/config';

// Manrope с кириллицей; CSS-переменная сохранена как --font-sen для совместимости стилей
const senFont = Manrope({
  variable: '--font-sen',
  subsets: ['latin', 'cyrillic'],
});

const tekoFont = Teko({
  variable: '--font-teko',
  subsets: ['latin'],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    return {};
  }
  const locale = localeParam;
  const dict = await getDictionary(locale);
  const canonical = `${SITE_URL}${localePath(locale)}`;

  const languages: Record<string, string> = {
    'x-default': `${SITE_URL}/`,
  };
  for (const loc of locales) {
    languages[loc] = `${SITE_URL}${localePath(loc)}`;
  }

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    keywords: dict.metadata.keywords,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      url: canonical,
      siteName: 'Igor Edison',
      images: [
        {
          url: '/image/i_edison.jpg',
          width: 1200,
          height: 630,
          alt: 'Igor Edison',
        },
      ],
      locale: ogLocales[locale],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.metadata.title,
      description: dict.metadata.description,
      images: ['/image/i_edison.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Igor Edison',
    url: SITE_URL,
    jobTitle: 'Frontend Developer',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'RU',
    },
    sameAs: [
      'https://t.me/Edison_io',
      'https://github.com/Daikity',
    ],
  };

  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Igor Edison',
    url: SITE_URL,
    inLanguage: locales,
  };

  return (
    <html lang={locale}>
      <body className={`${senFont.variable} ${tekoFont.variable} antialiased`}>
        <JsonLd data={[personLd, websiteLd]} />
        <header className="relative">
          <TopMenu locale={locale} menuLabels={dict.menu} />
        </header>
        <main>{children}</main>
        <Footer locale={locale} footer={dict.footer} menu={dict.menu} />
      </body>
    </html>
  );
}
