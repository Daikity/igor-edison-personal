'use client'

import './scss/button.scss';
import { texts } from '@/app/i18n';
import Text from '@/components/Text'
import Icon from './Icon';

export default function Button({
  text, iconLeft, iconRight, color, type}:
  {text?: string, iconLeft?: string, iconRight?: string, color?: string, type?: 'submit' | 'reset' | 'button'}
) {
  const { } = texts.en;

  return (
    <button
      className='button'
      type={type || 'submit'}
      style={{backgroundColor: color || 'var(--color-primary)'}}
    >
      {iconLeft ? <Icon name={iconLeft} isImage={false} /> : null }
      <Text type='span' text={text} />
      {iconRight ? <Icon name={iconRight} isImage={false} /> : null }
    </button>
  );
}
