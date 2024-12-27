'use client'

import '@/components/scss/burger-btn.scss'
import { useEffect, useState } from 'react'

interface BurgerBtnProps {
  setActive: (isActive: boolean) => void,
  isActiveBtn?: boolean
}

export default function BurgerButton({setActive, isActiveBtn}: BurgerBtnProps) {
  const [isActive, setIsActive] = useState(isActiveBtn)

  useEffect(() => {
    setIsActive(isActiveBtn)
  }, [isActiveBtn])

  const onSetActive = (): void => {
    setActive(!isActive)
    setIsActive(!isActive)
  }

  return <button onClick={onSetActive} className={`burger-button ${isActive ? 'active' : ''} `}><span /></button>
}
