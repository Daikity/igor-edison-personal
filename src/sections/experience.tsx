'use client'

import Exp from '@/components/exp';
import '@/sections/scss/experience.scss'
import { RefObject } from "react";

export default function Experience({ref}: {ref: RefObject<null>}) {
  return (
    <div ref={ref} className="experience">
      <div className="exp__container">
        <h2>work experience</h2>
        <h3>Companies I have worked for in the past</h3>
        <div className='exp-list'>
          <Exp
            roleInCompany="Middle+ Frontend Developer"
            companyName="Kiwitaxi"
            shortDescriptionWork={`Our team has been
              rebranding the company's website. My
              role was to develop uikit and the homepage.`}
            counter="01"
            companyColor="#fdba74"
          />
          <Exp
            roleInCompany="Expert Developer"
            companyName="Sciener"
            shortDescriptionWork={`My project was RusAgro.
              I migrated the app from SAPUI5 to VUE.js in
              order to provide greater performance.`}
            counter="02"
            companyColor="#ef4444"
          />
          <Exp
            roleInCompany="Frontend Developer"
            companyName="Molga"
            shortDescriptionWork={`I was involved in the
              support and implementation of projects on
              SAPUI5. We worked for the companies
              Norilsk Nickel, Severstal, and MVideo on the HR module`}
            counter="03"
            companyColor="#3b82f6"
          />
        </div>
      </div>
    </div>
  )
}
