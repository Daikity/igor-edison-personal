'use client'

import "./scss/top-menu.scss";
import LogoText from "./LogoText";
import ModalMenu from "./ModalMenu";
import BurgerButton from "./BurgerButton";
import { useEffect, useState } from "react";
import useScrollPosition from '@react-hook/window-scroll'

interface Menu {
  isActive: boolean
  name: string
  link: string
}

export default function TopMenu() {

  const scrollY: number = useScrollPosition(60),
        [isFillBackground, setIsFillBackground] = useState<boolean>(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false),
        [menuList, setMenuList] = useState<Menu[]>([
          { isActive: false, name: 'Experience', link: '#experience' },
          { isActive: false, name: 'Work', link: '#work' },
          { isActive: false, name: 'Photography', link: '#photography' },
          { isActive: false, name: 'Contacts', link: '#contact' },
        ])

  const openMenu = (isActive: boolean): void => {
    setIsMenuOpen(isActive)
  }

  useEffect(() => {
    switch (true) {
      case isMenuOpen:
        setIsFillBackground(true)
        break;
      default:
        scrollY > 80 ? setIsFillBackground(true) : setIsFillBackground(false);
        break;
    }
  });

  const onChangeMenu = (index: number) => {
    setMenuList(prevState =>
      prevState.map((item, i) => ({
        ...item,
        isActive: i === index
      }))
    )
    openMenu(false)
  }

  return (
    <>
      <div className={`top-menu ${isFillBackground ? 'bg-black':'bg-transparent'}`}>
        <div className="header__container">
          <LogoText size="m" />
          <BurgerButton setActive={openMenu} isActiveBtn={isMenuOpen} />
          <ul className="flex">
            {menuList.map((menuItem, i) => (
              <li
                key={i}
                onClick={() => onChangeMenu(i)}
                className={menuItem.isActive ? 'bg-blue-800': ''}>
                <a href={menuItem.link}>{menuItem.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ModalMenu isOpen={isMenuOpen} options={menuList} onChangeMenu={onChangeMenu}  />
    </>
  );
}
