import { useEffect } from 'react';

interface MenuItem {
  link: string;
}

interface UseScrollHandlerProps {
  menuList: MenuItem[];
  activateMenuItem: (index: number) => void;
  setIsFillBackground: (fill: boolean) => void;
  isMenuOpen: boolean;
  scrollY: number;
}

export function useScrollHandler({
  menuList,
  activateMenuItem,
  setIsFillBackground,
  isMenuOpen,
  scrollY,
}: UseScrollHandlerProps) {
  useEffect(() => {
    switch (window.location.hash) {
      case '#home':
        setIsFillBackground(false);
        break;
      case '#contacts':
        setIsFillBackground(true);
        break;
      default:
        scrollY > 80 ? setIsFillBackground(true) : setIsFillBackground(false);
        break;
    }

    const sectionOffsets = menuList.map(item => {
      const id = item.link.replace('#', '');
      if (id === 'home') return 0;
      const el = document.getElementById(id);
      return el?.offsetTop ?? null;
    });
    let currentIndex = sectionOffsets.findIndex((offset, i) => {
      if (offset === null) return false;
      const nextOffset = sectionOffsets[i + 1] ?? Infinity;
      return scrollY >= offset - 80 && scrollY < nextOffset - 80;
    });

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
      currentIndex = menuList.length - 1;
    }
    if (currentIndex !== -1) {
      activateMenuItem(currentIndex);
    }
  }, [scrollY, isMenuOpen]);
}
