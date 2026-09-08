'use client';

import './scss/button.scss';
import Icon from './Icon';
import type { ButtonProps } from '@/app/types';

export default function Button({
  text,
  iconLeft,
  iconRight,
  color,
  type,
  disabled,
}: ButtonProps) {
  return (
    <button
      className="button"
      type={type || 'submit'}
      disabled={disabled}
      style={{ backgroundColor: color || 'var(--color-primary)' }}
    >
      {iconLeft ? <Icon name={iconLeft} isImage={false} /> : null}
      {text ? <span>{text}</span> : null}
      {iconRight ? <Icon name={iconRight} isImage={false} /> : null}
    </button>
  );
}
