import '@/sections/scss/home.scss';
import Image from 'next/image';
import type { Dictionary } from '@/i18n/types';

type MainProps = {
  content: Dictionary['main'];
};

export default function Main({ content }: MainProps) {
  return (
    <section className="title" id="home" aria-label={content.name}>
      <div className="photo-container">
        <Image
          src="/image/i_edison.jpg"
          width={480}
          height={480}
          priority
          alt={content.photoAlt}
        />
        <div className="photo-gradient" />
      </div>
      <div className="title-text">
        <h1>
          {content.name} <br />
          {content.role} <br />
          <span style={{ color: '#6b7280' }}>{content.location}</span>
        </h1>
        <p>
          {content.description1} <br />
          {content.description2}
        </p>
      </div>
    </section>
  );
}
