'use client'

import "./scss/modal-menu.scss";

interface Menu {
  isActive: boolean
  name: string
  link: string
}

interface ModalMenuProps {
  isOpen: boolean,
  options: Menu[],
  onChangeMenu: (index: number) => void
}

export default function ModalMenu({ isOpen, options, onChangeMenu }: ModalMenuProps) {
  return (
    <div className={`modal-menu ${isOpen ? 'open' : ''}`}>
      <ul>
      {options.map((menuItem, i) => (
        <li
          key={i}
          onClick={() => onChangeMenu(i)}
          className={menuItem.isActive ? 'bg-blue-800': ''}>
          <a href={menuItem.link}>{menuItem.name}</a>
        </li>
      ))}
      </ul>
    </div>
  )
}
