/**
 * Debounce utility function
 * Delays the execution of a callback until specified time has elapsed since the last call
 * @param callback - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function that accepts the same parameters as callback
 */
export function debounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      callback(...args);
      timeoutId = null;
    }, delay);
  };
}

/**
 * Throttle utility function
 * Limits the execution of a callback to at most once every specified time period
 * @param callback - Function to throttle
 * @param limit - Time limit in milliseconds
 * @returns Throttled function that accepts the same parameters as callback
 */
export function throttle<T extends (...args: any[]) => any>(
  callback: T,
  limit: number
): (...args: Parameters<T>) => void {
  let lastRun = 0;
  let timeoutId: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    const now = Date.now();

    if (now - lastRun >= limit) {
      callback(...args);
      lastRun = now;
    } else {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        callback(...args);
        lastRun = Date.now();
        timeoutId = null;
      }, limit - (now - lastRun));
    }
  };
}
