'use client';

import './scss/top-menu.scss';
import LogoText from './LogoText';
import ModalMenu from './ModalMenu';
import BurgerButton from './BurgerButton';
import LanguageSwitcher from './LanguageSwitcher';
import { useState, useEffect, useCallback, useMemo, memo } from 'react';
import useScrollPosition from '@react-hook/window-scroll';
import useToggle from '../hooks/useToggle';
import { useScrollHandler } from '@/hooks/useScrollHandler';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/types';

interface MenuItem {
  isActive: boolean;
  name: string;
  link: string;
}

type TopMenuProps = {
  locale: Locale;
  menuLabels: Dictionary['menu'];
};

function TopMenuContent({ locale, menuLabels }: TopMenuProps) {
  const initialMenu = useMemo<MenuItem[]>(
    () => [
      { isActive: true, name: menuLabels.home, link: '#home' },
      { isActive: false, name: menuLabels.experience, link: '#experience' },
      { isActive: false, name: menuLabels.skillset, link: '#skillset' },
      { isActive: false, name: menuLabels.contacts, link: '#contact' },
    ],
    [menuLabels]
  );

  const scrollY: number = useScrollPosition();
  const [isFillBackground, setIsFillBackground] = useState(false);
  const [isMenuOpen, toggleMenu] = useToggle(false);
  const [menuList, setMenuList] = useState<MenuItem[]>(initialMenu);

  useEffect(() => {
    setMenuList(initialMenu);
  }, [initialMenu]);

  const activateMenuItem = useCallback((index: number) => {
    setMenuList((prevState) =>
      prevState.map((item, i) => ({
        ...item,
        isActive: i === index,
      }))
    );
  }, []);

  useScrollHandler({
    menuList,
    activateMenuItem,
    setIsFillBackground,
    isMenuOpen,
    scrollY,
    scrollThrottleDelay: 150,
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

  const onChangeMenu = useCallback(
    (index: number) => {
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
      toggleMenu(false);
    },
    [menuList, activateMenuItem, toggleMenu]
  );

  const menuItems = useMemo(
    () =>
      menuList.map((menuItem, i) => (
        <li
          key={menuItem.link}
          onClick={() => onChangeMenu(i)}
          className={menuItem.isActive ? 'bg-blue-800' : ''}
        >
          <a href={menuItem.link}>{menuItem.name}</a>
        </li>
      )),
    [menuList, onChangeMenu]
  );

  return (
    <>
      <div className={`top-menu ${isFillBackground ? 'bg-black' : 'bg-transparent'}`}>
        <div className="header__container">
          <LogoText size="m" />
          <div className="header__nav flex items-center gap-6">
            <LanguageSwitcher locale={locale} />
            <BurgerButton setActive={toggleMenu} isActiveBtn={isMenuOpen} />
            <ul className="flex">{menuItems}</ul>
          </div>
        </div>
      </div>
      <ModalMenu isOpen={isMenuOpen} options={menuList} onChangeMenu={onChangeMenu} />
    </>
  );
}

export default memo(TopMenuContent);
