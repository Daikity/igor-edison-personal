import '@/components/scss/exp.scss';
import type { ExperienceData } from '@/app/types';

export default function Exp({
  roleInCompany,
  companyName,
  companyColor = '#fff',
  shortDescriptionWork,
  counter,
}: ExperienceData) {
  return (
    <article className="exp">
      <span className="counter">{counter}</span>
      <h4>
        <span style={{ color: companyColor }}>{companyName}</span>
        {', '}
        {roleInCompany}
      </h4>
      <p>{shortDescriptionWork}</p>
    </article>
  );
}
