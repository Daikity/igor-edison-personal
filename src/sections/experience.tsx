import Exp from '@/components/exp';
import '@/sections/scss/experience.scss';
import type { Dictionary } from '@/i18n/types';

type ExperienceProps = {
  content: Dictionary['experience'];
};

export default function Experience({ content }: ExperienceProps) {
  return (
    <section className="experience" id="experience" aria-labelledby="experience-title">
      <div className="exp__container">
        <h2 id="experience-title">{content.title}</h2>
        <h3>{content.subtitle}</h3>
        <div className="exp-list">
          {content.data.map((item) => (
            <Exp key={item.counter} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
