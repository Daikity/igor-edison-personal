'use client'

import Exp from '@/components/exp';
import Text from '@/components/Text';

import '@/sections/scss/experience.scss'
import { RefObject } from "react";
import { texts } from "@/app/i18n";

export default function Experience({ref}: {ref: RefObject<null>}) {
  const { experience } = texts.en;
  return (
    <div ref={ref} className="experience">
      <div className="exp__container">
        <Text type='h2' text={experience.title} />
        <Text type='h3' text={experience.subtitle} />
        <div className='exp-list'>
          {experience.data.map((item, index) => (
            <Exp key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}
