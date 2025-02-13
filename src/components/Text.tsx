'use client'

import { useEffect, useState } from 'react';

interface TextProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  text?: string;
  className?: 'body' | 'body-s' | 'overline' | 'button';
  html?: string;
}

export default function Text({ type, text, html, className }: TextProps) {
  const [mounted, setMounted] = useState(false);
  const Component = type;

  useEffect(() => {
    setMounted(true);
  }, []);

  const processHtml = (content: string) => {
    return { __html: content };
  };

  if (!mounted) {
    return <Component className={className}>{text || ''}</Component>;
  }

  if (html) {
    return <div className={className} dangerouslySetInnerHTML={processHtml(html)} />;
  }

  return <Component className={className}>{text}</Component>;
}
