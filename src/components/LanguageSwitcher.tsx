'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { localeNames, localePath, locales, type Locale } from '@/i18n/config';
import './scss/language-switcher.scss';

type LanguageSwitcherProps = {
  locale: Locale;
};

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  let pathWithoutLocale = pathname;
  for (const loc of locales) {
    if (pathname === `/${loc}` || pathname === `/${loc}/`) {
      pathWithoutLocale = '/';
      break;
    }
    if (pathname.startsWith(`/${loc}/`)) {
      pathWithoutLocale = pathname.slice(loc.length + 1);
      if (!pathWithoutLocale.startsWith('/')) {
        pathWithoutLocale = `/${pathWithoutLocale}`;
      }
      break;
    }
  }

  if (pathWithoutLocale !== '/' && !pathWithoutLocale.endsWith('/')) {
    pathWithoutLocale = `${pathWithoutLocale}/`;
  }

  const otherLocales = locales.filter((loc) => loc !== locale);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div className="language-switcher" ref={rootRef}>
      <button
        type="button"
        className="language-switcher__trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language"
        onClick={() => setOpen((value) => !value)}
      >
        {localeNames[locale]}
      </button>

      {open ? (
        <ul className="language-switcher__menu" role="listbox">
          {otherLocales.map((loc) => (
            <li key={loc} role="option">
              <Link
                href={localePath(loc, pathWithoutLocale)}
                hrefLang={loc}
                onClick={() => setOpen(false)}
              >
                {localeNames[loc]}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
