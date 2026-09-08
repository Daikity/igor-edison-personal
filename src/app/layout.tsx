import type { ReactNode } from 'react';

/** Корневой layout: html/body живут в [locale]/layout */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
