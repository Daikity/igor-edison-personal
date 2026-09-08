import './scss/skillSet.scss';
import Icon from '@/components/Icon';
import type { Dictionary } from '@/i18n/types';
import type { Skills } from '@/app/types';

type SkillSetProps = {
  content: Dictionary['skillSet'];
};

export default function SkillSet({ content }: SkillSetProps) {
  return (
    <section className="skill-set" id="skillset" aria-labelledby="skillset-title">
      <h2 className="hidden" id="skillset-title">
        {content.title}
      </h2>
      <div className="skill-set__container">
        <div className="skills-title">
          <h3>{content.title}</h3>
          <p>{content.description}</p>
        </div>
        <div className="skill-list">
          {content.skillList.map((skill: Skills) => (
            <div className="skill-item" key={skill.name}>
              <Icon name={skill.icon} isImage={false} />
              <h4>{skill.name}</h4>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
