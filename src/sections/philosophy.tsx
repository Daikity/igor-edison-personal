import Image from 'next/image';
import '@/sections/scss/philosophy.scss';
import type { Dictionary } from '@/i18n/types';

type PhilosophyProps = {
  content: Dictionary['philosophy'];
};

export default function Philosophy({ content }: PhilosophyProps) {
  return (
    <section className="philosophy" id="philosophy" aria-labelledby="philosophy-title">
      <div className="text__container">
        <h3 id="philosophy-title" style={{ color: 'var(--color-dark-grey)' }}>
          {content.title}
        </h3>
        <p style={{ color: 'var(--color-dark-grey)' }}>{content.lead}</p>
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} style={{ color: 'var(--color-dark-grey)' }}>
            {paragraph}
          </p>
        ))}
      </div>
      <Image
        src="/image/philosophy.png"
        width={640}
        height={640}
        alt={content.imageAlt}
      />
    </section>
  );
}
