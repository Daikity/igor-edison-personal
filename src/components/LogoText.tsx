'use client'

import './scss/logo-text.scss';

type propsType = {
  size: 'l' | 'm'
}

export default function LogoText({size}: propsType ) {
  return <h1 className={`logo-txt ${size}`}>Igor.E</h1>
}
