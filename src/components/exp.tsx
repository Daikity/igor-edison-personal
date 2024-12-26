'use client'

import '@/components/scss/exp.scss'

interface Props {
  roleInCompany: string,
  companyName: string,
  shortDescriptionWork: string,
  counter: string | number,
  companyColor?: string
}

export default function Exp({roleInCompany, companyName, companyColor, shortDescriptionWork, counter}: Props) {
  return (
    <div className="exp">
      <span className="counter">
        {counter}
      </span>
      <h4><span style={{ color: companyColor || '#fff' }}>{companyName}</span>, {roleInCompany}</h4>
      <p>{shortDescriptionWork}</p>
    </div>
  )
}
