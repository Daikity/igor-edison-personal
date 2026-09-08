import './scss/footer.scss';
import LogoText from './LogoText';
import Icon from './Icon';
import type { Dictionary } from '@/i18n/types';
import { localePath, type Locale } from '@/i18n/config';

type FooterProps = {
  locale: Locale;
  footer: Dictionary['footer'];
  menu: Dictionary['menu'];
};

function sectionHref(locale: Locale, hash: string): string {
  const base = localePath(locale);
  return base === '/' ? `/#${hash}` : `${base}#${hash}`;
}

export default function Footer({ locale, footer, menu }: FooterProps) {
  const navItems = [
    { label: menu.experience, href: sectionHref(locale, 'experience') },
    { label: menu.projects, href: sectionHref(locale, 'projects') },
    { label: menu.skillset, href: sectionHref(locale, 'skillset') },
    { label: menu.contacts, href: sectionHref(locale, 'contact') },
  ];

  return (
    <footer>
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <LogoText size="l" />
            <p className="footer__tagline">{footer.tagline}</p>
            <p className="footer__skills">{footer.skills}</p>
          </div>

          <div className="footer__columns">
            <nav className="footer__nav" aria-label={footer.navLabel}>
              <p className="footer__heading">{footer.navLabel}</p>
              <ul>
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="footer__social">
              <p className="footer__heading">{footer.socialLabel}</p>
              <div className="footer__social-links">
                <a
                  href="https://t.me/Edison_io"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Telegram"
                >
                  <Icon name="telegram" isImage={true} />
                  <span>Telegram</span>
                </a>
                <a
                  href="https://github.com/Daikity"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <Icon name="github" isImage={true} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="footer__copyright">{footer.copyright}</p>
      </div>
    </footer>
  );
}
