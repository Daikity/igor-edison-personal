'use client'

import Experience from '@/sections/experience';
import Main from '@/sections/main';
import Philosophy from '@/sections/philosophy';
import SkillSet from '@/sections/skillSet';
import Contacts from '@/sections/contacts'

import { useRef } from 'react';

export default function Home() {
  const mainSection = useRef(null)
  const experience = useRef(null)
  const philosophy = useRef(null)
  const skillSet = useRef(null)
  const contacts = useRef(null)

  return (
    <>
      <div className="home">
        <Main ref={mainSection} />
      </div>
      <Experience ref={experience} />
      <Philosophy ref={philosophy} />
      <SkillSet ref={skillSet} />
      <Contacts ref={contacts} />
    </>
  );
}
