'use client'

import Experience from '@/sections/experience';
import Main from '@/sections/main';
import { useRef } from 'react';

export default function Home() {
  const mainSection = useRef(null)
  const experience = useRef(null)

  return (
    <>
      <div className="h-full min-h-[30rem] home">
        <Main ref={mainSection} />
      </div>
      <Experience ref={experience} />
    </>
  );
}
