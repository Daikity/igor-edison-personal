'use client'

import '@/sections/scss/home.scss';
import Image from "next/image";
import PhotoImg from '@/assets/image/i_edison.jpg'
import { RefObject } from 'react';
import { texts } from '@/app/i18n';

export default function Main({ref}: {ref: RefObject<null>}) {
  const { main } = texts.en;

  return (
    <div className="title" ref={ref}>
      <div className="photo-container">
        <Image src='/image/i_edison.jpg' width={100} height={100} priority={true} alt="I.EDISON" />
        <div className='photo-gradient' />
      </div>
      <div className="title-text">
        <h1>
          {main.name} <br />
          {main.role} <br />
          <span style={{ color: '#6b7280' }}>{main.location}</span>
        </h1>
        <p>
          {main.description1} <br />
          {main.description2}
        </p>
      </div>
    </div>
  );
}
