
'use client'

import './scss/skillSet.scss';
import { texts } from '@/app/i18n';
import Icon from '@/components/Icon';
import Text from '@/components/Text';
import { Skills } from '@/app/types';
import { RefObject } from 'react';

export default function SkillSet({ref}: {ref: RefObject<null>}) {
  const { experience } = texts.en;
  const { skillSet } = experience;

  return (
    <div ref={ref} className='skill-set'>
      <div className="skill-set__container">
        <div className='skills-title'>
          <Text type='h3' text={skillSet.title} />
          <Text type='p' text={skillSet.description} />
        </div>
        <div className='skill-list'>
          {
            skillSet.skillList.map((skill: Skills, i) => (
              <div className="skill-item" key={i}>
                <Icon name={skill.icon} isImage={false} />
                <Text type='h4' text={skill.name} />
                <Text type='p' text={skill.description} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
