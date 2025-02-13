'use client'

import '@/components/scss/burger-btn.scss'
import React, { useEffect, useState } from 'react'

interface BurgerBtnProps {
  setActive: (isActive: boolean) => void,
  isActiveBtn?: boolean
}

const BurgerButton = React.memo(function BurgerButton({setActive, isActiveBtn = false}: BurgerBtnProps) {
  const [isActive, setIsActive] = useState(isActiveBtn)

  useEffect(() => {
    setIsActive(isActiveBtn)
  }, [isActiveBtn])

  const onSetActive = (): void => {
    const newState = !isActive
    setActive(newState)
    setIsActive(newState)
  }

  return (
    <button
      onClick={onSetActive}
      className={`burger-button ${isActive ? 'active' : ''}`.trim()}
      aria-label="Меню"
      aria-expanded={isActive}
    >
      <span />
    </button>
  )
})

export default BurgerButton;
