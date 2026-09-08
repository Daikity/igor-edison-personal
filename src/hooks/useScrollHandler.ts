import { useEffect, useMemo, useRef, useCallback, useState } from 'react';
import { throttle } from '@/utils/debounce';

interface MenuItem {
  link: string;
}

interface UseScrollHandlerProps {
  menuList: MenuItem[];
  activateMenuItem: (index: number) => void;
  clearActiveMenuItem?: () => void;
  setIsFillBackground: (fill: boolean) => void;
  isMenuOpen: boolean;
  scrollY: number;
  scrollThrottleDelay?: number;
  /** На внутренних страницах (кейсы) scroll-spy отключаем */
  enabled?: boolean;
}

const SCROLL_THRESHOLD = 80;
const BOTTOM_THRESHOLD = 2;
const DEFAULT_THROTTLE_DELAY = 150;

export function useScrollHandler({
  menuList,
  activateMenuItem,
  clearActiveMenuItem,
  setIsFillBackground,
  isMenuOpen,
  scrollY,
  scrollThrottleDelay = DEFAULT_THROTTLE_DELAY,
  enabled = true,
}: UseScrollHandlerProps) {
  const prevActiveIndexRef = useRef<number>(-1);
  const prevBackgroundStateRef = useRef<boolean | null>(null);

  const [sectionOffsets, setSectionOffsets] = useState<(number | null)[]>([]);

  useEffect(() => {
    if (!enabled) {
      setSectionOffsets([]);
      return;
    }

    setSectionOffsets(
      menuList.map((item) => {
        const id = item.link.replace('#', '');
        if (id === 'home') return 0;
        const el = document.getElementById(id);
        return el?.offsetTop ?? null;
      })
    );
  }, [menuList, enabled]);

  useEffect(() => {
    if (!enabled) {
      clearActiveMenuItem?.();
      prevActiveIndexRef.current = -1;
      setIsFillBackground(true);
      prevBackgroundStateRef.current = true;
    }
  }, [enabled, clearActiveMenuItem, setIsFillBackground]);

  const calculateCurrentIndex = useCallback(
    (currentScrollY: number): number => {
      let currentIndex = sectionOffsets.findIndex((offset, i) => {
        if (offset === null) return false;
        const nextOffset = sectionOffsets[i + 1] ?? Infinity;
        return (
          currentScrollY >= offset - SCROLL_THRESHOLD &&
          currentScrollY < nextOffset - SCROLL_THRESHOLD
        );
      });

      const hasLandingSections = sectionOffsets.some((offset, i) => i > 0 && offset !== null);
      if (
        hasLandingSections &&
        window.innerHeight + currentScrollY >= document.body.offsetHeight - BOTTOM_THRESHOLD
      ) {
        for (let i = sectionOffsets.length - 1; i >= 0; i -= 1) {
          if (sectionOffsets[i] !== null) {
            currentIndex = i;
            break;
          }
        }
      }

      return currentIndex;
    },
    [sectionOffsets]
  );

  const updateBackgroundState = useCallback(
    (currentScrollY: number): void => {
      if (!enabled) {
        if (prevBackgroundStateRef.current !== true) {
          setIsFillBackground(true);
          prevBackgroundStateRef.current = true;
        }
        return;
      }

      let shouldFillBackground = false;

      switch (window.location.hash) {
        case '#home':
          shouldFillBackground = false;
          break;
        case '#contact':
          shouldFillBackground = true;
          break;
        default:
          shouldFillBackground = currentScrollY > SCROLL_THRESHOLD;
          break;
      }

      if (prevBackgroundStateRef.current !== shouldFillBackground) {
        setIsFillBackground(shouldFillBackground);
        prevBackgroundStateRef.current = shouldFillBackground;
      }
    },
    [enabled, setIsFillBackground]
  );

  const throttledScrollHandler = useMemo(() => {
    return throttle((currentScrollY: number) => {
      updateBackgroundState(currentScrollY);

      if (!enabled) return;

      const currentIndex = calculateCurrentIndex(currentScrollY);
      if (currentIndex !== -1 && currentIndex !== prevActiveIndexRef.current) {
        activateMenuItem(currentIndex);
        prevActiveIndexRef.current = currentIndex;
      }
    }, scrollThrottleDelay);
  }, [
    scrollThrottleDelay,
    updateBackgroundState,
    calculateCurrentIndex,
    activateMenuItem,
    enabled,
  ]);

  useEffect(() => {
    if (isMenuOpen || !enabled) {
      return;
    }

    throttledScrollHandler(scrollY);
  }, [scrollY, isMenuOpen, throttledScrollHandler, enabled]);

  useEffect(() => {
    if (isMenuOpen) {
      prevBackgroundStateRef.current = null;
    } else {
      updateBackgroundState(scrollY);
    }
  }, [isMenuOpen, scrollY, updateBackgroundState]);
}
