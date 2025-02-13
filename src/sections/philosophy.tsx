'use client'

import Text from '@/components/Text';
import '@/sections/scss/philosophy.scss'
import { RefObject } from "react";
import { texts } from "@/app/i18n";
import philosophyImg from '@/assets/image/philosophy.png'

export default function Philosophy({ref}: {ref: RefObject<null>}) {
  const { experience } = texts.en;
  return (
    <div ref={ref} className="philosophy">
      <div className="text__container">
        <Text type='p' html={experience.philosophy} />
      </div>
      <img src={philosophyImg.src} alt="" />
    </div>
  )
}
