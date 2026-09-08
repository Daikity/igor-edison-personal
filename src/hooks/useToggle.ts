import { useCallback, useState } from 'react';

export type UseToggleReturn = [
  boolean,
  (value?: boolean) => void,
  () => void,
  () => void,
  React.Dispatch<React.SetStateAction<boolean>>
];

export default function useToggle(initialValue = false): UseToggleReturn {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback((next?: boolean) => {
    setValue(prev => (typeof next === 'boolean' ? next : !prev));
  }, []);

  const setOn = useCallback(() => setValue(true), []);
  const setOff = useCallback(() => setValue(false), []);

  return [value, toggle, setOn, setOff, setValue];
}

