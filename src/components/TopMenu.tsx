'use client'

import "./scss/top-menu.scss";
import LogoText from "./LogoText";
import ModalMenu from "./ModalMenu";
import BurgerButton from "./BurgerButton";
import { useState, useEffect } from "react";
import useScrollPosition from '@react-hook/window-scroll'
import useToggle from "../hooks/useToggle";
import { useScrollHandler } from '@/hooks/useScrollHandler';

interface Menu {
  isActive: boolean
  name: string
  link: string
}

export default function TopMenu() {
  const scrollY: number = useScrollPosition(),
        [isFillBackground, setIsFillBackground] = useState<boolean>(false),
        [isMenuOpen, toggleMenu] = useToggle(false),
        [menuList, setMenuList] = useState<Menu[]>([
          { isActive: true, name: 'Home', link: '#home' },
          { isActive: false, name: 'Experience', link: '#experience' },
          { isActive: false, name: 'Skillset', link: '#skillset' },
          { isActive: false, name: 'Contacts', link: '#contact' },
        ])

  const activateMenuItem = (index: number) => {
    setMenuList(prevState =>
      prevState.map((item, i) => ({
        ...item,
        isActive: i === index
      }))
    );
  };

  useScrollHandler({
    menuList,
    activateMenuItem,
    setIsFillBackground,
    isMenuOpen,
    scrollY,
  });

  useEffect(() => {
    if (isMenuOpen) {
      setIsFillBackground(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsFillBackground(scrollY > 50);
      document.body.style.overflow = '';
    }
  }, [isMenuOpen, scrollY]);

  const onChangeMenu = (index: number) => {
    activateMenuItem(index);
    const sectionId = menuList[index].link.replace('#', '');
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    toggleMenu(false)
  }

  return (
    <>
      <div className={`top-menu ${isFillBackground ? 'bg-black':'bg-transparent'}`}>
        <div className="header__container">
          <LogoText size="m" />
          <BurgerButton setActive={toggleMenu} isActiveBtn={isMenuOpen} />
          <ul className="flex">
            {menuList.map((menuItem, i) => (
              <li
                key={i}
                onClick={() => onChangeMenu(i)}
                className={menuItem.isActive ? 'bg-blue-800': ''}>
                <a>{menuItem.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ModalMenu isOpen={isMenuOpen} options={menuList} onChangeMenu={onChangeMenu}  />
    </>
  );
}
