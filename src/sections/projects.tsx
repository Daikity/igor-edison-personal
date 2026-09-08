import Link from 'next/link';
import './scss/projects.scss';
import type { Dictionary } from '@/i18n/types';
import type { PortfolioProject } from '@/lib/projects';
import { projectHasCase } from '@/lib/projects';
import { localePath, type Locale } from '@/i18n/config';

type ProjectsProps = {
  locale: Locale;
  labels: Dictionary['projects'];
  projects: PortfolioProject[];
};

export default function Projects({ locale, labels, projects }: ProjectsProps) {
  return (
    <section className="projects" id="projects" aria-labelledby="projects-title">
      <div className="projects__container">
        <div className="projects__intro">
          <h2 id="projects-title">{labels.title}</h2>
          <p>{labels.subtitle}</p>
        </div>

        <ul className="projects__list">
          {projects.map((item) => {
            const hasCase = projectHasCase(item, locale);

            return (
              <li key={item.id} className="projects__card">
                <div className="projects__card-top">
                  <h3>{item.title}</h3>
                  <span className="projects__status">{labels.statusOnline}</span>
                </div>
                <p className="projects__summary">{item.summary}</p>
                <ul className="projects__stack">
                  {(item.stack ?? []).map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="projects__actions">
                  {hasCase ? (
                    <Link
                      className="projects__link projects__link--primary"
                      href={localePath(locale, `/work/${item.id}`)}
                    >
                      {labels.openCase}
                    </Link>
                  ) : null}
                  <a
                    className={`projects__link${hasCase ? '' : ' projects__link--primary'}`}
                    href={`${item.demoBase}/`}
                  >
                    {labels.openDemo}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
