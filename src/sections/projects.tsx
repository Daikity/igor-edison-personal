import Link from 'next/link';
import './scss/projects.scss';
import type { Dictionary } from '@/i18n/types';
import type { WorkCase } from '@/content/work';
import { localePath, type Locale } from '@/i18n/config';

type ProjectsProps = {
  locale: Locale;
  labels: Dictionary['projects'];
  cases: WorkCase[];
};

export default function Projects({ locale, labels, cases }: ProjectsProps) {
  return (
    <section className="projects" id="projects" aria-labelledby="projects-title">
      <div className="projects__container">
        <div className="projects__intro">
          <h2 id="projects-title">{labels.title}</h2>
          <p>{labels.subtitle}</p>
        </div>

        <ul className="projects__list">
          {cases.map((item) => (
            <li key={item.slug} className="projects__card">
              <div className="projects__card-top">
                <h3>{item.title}</h3>
                <span className="projects__status">{labels.statusOnline}</span>
              </div>
              <p className="projects__summary">{item.summary}</p>
              <ul className="projects__stack">
                {item.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="projects__actions">
                <Link
                  className="projects__link projects__link--primary"
                  href={localePath(locale, `/work/${item.slug}`)}
                >
                  {labels.openCase}
                </Link>
                <a className="projects__link" href={`${item.demoBase}/`}>
                  {labels.openDemo}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
