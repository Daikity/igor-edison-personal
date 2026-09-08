import { useEffect, useMemo, useRef, useCallback, useState } from 'react';
import { throttle } from '@/utils/debounce';

interface MenuItem {
  link: string;
}

interface UseScrollHandlerProps {
  menuList: MenuItem[];
  activateMenuItem: (index: number) => void;
  setIsFillBackground: (fill: boolean) => void;
  isMenuOpen: boolean;
  scrollY: number;
  scrollThrottleDelay?: number; // Throttle delay in ms, default 150ms
}

const SCROLL_THRESHOLD = 80;
const BOTTOM_THRESHOLD = 2;
const DEFAULT_THROTTLE_DELAY = 150;

/**
 * Optimized scroll handler hook
 * - Caches DOM element offsets with useMemo
 * - Throttles scroll event processing
 * - Uses refs to avoid redundant state updates
 * - Reduces re-renders during scrolling
 */
export function useScrollHandler({
  menuList,
  activateMenuItem,
  setIsFillBackground,
  isMenuOpen,
  scrollY,
  scrollThrottleDelay = DEFAULT_THROTTLE_DELAY,
}: UseScrollHandlerProps) {
  const prevActiveIndexRef = useRef<number>(-1);
  const prevBackgroundStateRef = useRef<boolean | null>(null);

  const [sectionOffsets, setSectionOffsets] = useState<(number | null)[]>([]);

  // Cache section offsets after the component mounts in the browser.
  useEffect(() => {
    setSectionOffsets(menuList.map(item => {
      const id = item.link.replace('#', '');
      if (id === 'home') return 0;
      const el = document.getElementById(id);
      return el?.offsetTop ?? null;
    }));
  }, [menuList]);

  // Memoized function to calculate current section index
  const calculateCurrentIndex = useCallback((currentScrollY: number): number => {
    let currentIndex = sectionOffsets.findIndex((offset, i) => {
      if (offset === null) return false;
      const nextOffset = sectionOffsets[i + 1] ?? Infinity;
      return currentScrollY >= offset - SCROLL_THRESHOLD &&
             currentScrollY < nextOffset - SCROLL_THRESHOLD;
    });

    // Check if user is at the bottom of page
    if ((window.innerHeight + currentScrollY) >= document.body.offsetHeight - BOTTOM_THRESHOLD) {
      currentIndex = menuList.length - 1;
    }

    return currentIndex;
  }, [sectionOffsets, menuList.length]);

  // Memoized function to update background state
  const updateBackgroundState = useCallback((currentScrollY: number): void => {
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

    // Only update if state actually changed
    if (prevBackgroundStateRef.current !== shouldFillBackground) {
      setIsFillBackground(shouldFillBackground);
      prevBackgroundStateRef.current = shouldFillBackground;
    }
  }, [setIsFillBackground]);

  // Throttled scroll handler to process scroll events efficiently
  const throttledScrollHandler = useMemo(() => {
    return throttle((currentScrollY: number) => {
      // Update background state
      updateBackgroundState(currentScrollY);

      // Update active menu item only if it changed
      const currentIndex = calculateCurrentIndex(currentScrollY);
      if (currentIndex !== -1 && currentIndex !== prevActiveIndexRef.current) {
        activateMenuItem(currentIndex);
        prevActiveIndexRef.current = currentIndex;
      }
    }, scrollThrottleDelay);
  }, [scrollThrottleDelay, updateBackgroundState, calculateCurrentIndex, activateMenuItem]);

  useEffect(() => {
    // Don't process scroll events if menu is open
    if (isMenuOpen) {
      return;
    }

    throttledScrollHandler(scrollY);
  }, [scrollY, isMenuOpen, throttledScrollHandler]);

  // Handle menu open state changes
  useEffect(() => {
    if (isMenuOpen) {
      // Reset background state when menu opens
      prevBackgroundStateRef.current = null;
    } else {
      // Re-evaluate background state when menu closes
      updateBackgroundState(scrollY);
    }
  }, [isMenuOpen, scrollY, updateBackgroundState]);
}
