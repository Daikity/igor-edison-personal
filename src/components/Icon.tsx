'use client'

import '@/assets/scss/global/_icons.scss'
import Image from "next/image";
import React from 'react';

const Icon = React.memo(function Icon({ name, isImage }: { name: string, isImage: boolean }) {
  if (isImage) {
    return <Image src={`/icons/${name}.svg`} width={32} height={32} priority={true} alt={name} />
  }
  return <i className={`icon icon-${name}`} />
})

export default Icon;
