'use client'

import '@/assets/scss/home.scss';
import Image from "next/image";
import PhotoImg from '@/assets/image/i_edison.jpg'
import { RefObject } from 'react';

export default function Main({ref}: {ref: RefObject<null>}) {
  return (
    <div className="title" ref={ref}>
      <div className="photo-container">
        <Image src={PhotoImg} priority={true} alt="I.EDISON" />
        <div className='photo-gradient' />
      </div>
      <div className="title-text">
        <h1>
          {`I'm Igor Edison.`} <br />
          A web-developer <br />
          <span style={{ color: '#6b7280' }}>based in Russia.</span>
        </h1>
        <p>
          {`I'm one of the most active web developers you have ever worked
          with.`} <br />
          {`If you have a great project that requires professional skills,
          then I'm your guy.`}
        </p>
      </div>
    </div>
  );
}
