'use client';

import './scss/top-menu.scss';
import LogoText from './LogoText';
import ModalMenu from './ModalMenu';
import BurgerButton from './BurgerButton';
import LanguageSwitcher from './LanguageSwitcher';
import { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import useScrollPosition from '@react-hook/window-scroll';
import useToggle from '../hooks/useToggle';
import { useScrollHandler } from '@/hooks/useScrollHandler';
import { localePath, type Locale } from '@/i18n/config';
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
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = !pathname.includes('/work');

  const initialMenu = useMemo<MenuItem[]>(
    () => [
      { isActive: isHomePage, name: menuLabels.home, link: '#home' },
      { isActive: false, name: menuLabels.experience, link: '#experience' },
      { isActive: !isHomePage, name: menuLabels.projects, link: '#projects' },
      { isActive: false, name: menuLabels.skillset, link: '#skillset' },
      { isActive: false, name: menuLabels.contacts, link: '#contact' },
    ],
    [menuLabels, isHomePage]
  );

  const scrollY: number = useScrollPosition();
  const [isFillBackground, setIsFillBackground] = useState(!isHomePage);
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

  const clearActiveMenuItem = useCallback(() => {
    setMenuList((prevState) =>
      prevState.map((item) => ({
        ...item,
        // На кейсах подсвечиваем «Проекты»
        isActive: item.link === '#projects',
      }))
    );
  }, []);

  useScrollHandler({
    menuList,
    activateMenuItem,
    clearActiveMenuItem,
    setIsFillBackground,
    isMenuOpen,
    scrollY,
    scrollThrottleDelay: 150,
    enabled: isHomePage,
  });

  useEffect(() => {
    if (isMenuOpen) {
      setIsFillBackground(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsFillBackground(isHomePage ? scrollY > 50 : true);
      document.body.style.overflow = '';
    }
  }, [isMenuOpen, scrollY, isHomePage]);

  const onChangeMenu = useCallback(
    (index: number) => {
      const sectionId = menuList[index].link.replace('#', '');
      const homeBase = localePath(locale);
      const href =
        sectionId === 'home'
          ? homeBase
          : homeBase === '/'
            ? `/#${sectionId}`
            : `${homeBase}#${sectionId}`;

      if (!isHomePage) {
        router.push(href);
        toggleMenu(false);
        return;
      }

      activateMenuItem(index);

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
    [menuList, activateMenuItem, toggleMenu, isHomePage, locale, router]
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
