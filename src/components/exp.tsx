'use client'

import '@/components/scss/exp.scss'
import Text from '@/components/Text';
import { ExperienceData } from '@/app/types';
import React from 'react';

// Оптимизируем с помощью React.memo для предотвращения ненужных ререндеров
const Exp = React.memo(function Exp(
  {
    roleInCompany,
    companyName,
    companyColor = '#fff',
    shortDescriptionWork,
    counter
  }: ExperienceData
) {

  return (
    <div className="exp">
      <span className="counter">
        {counter}
      </span>
      <h4>
        <span style={{ color: companyColor }}>{companyName}</span>
        {', '}
        {roleInCompany}
      </h4>
      <Text type='p' text={shortDescriptionWork} />
    </div>
  )
})

export default Exp;
