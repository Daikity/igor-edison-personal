'use client'

import './scss/button.scss';
import Text from '@/components/Text'
import Icon from './Icon';
import {ButtonProps} from "@/app/types";

export default function Button({
  text, iconLeft, iconRight, color, type, disabled}: ButtonProps
) {
  return (
    <button
      className='button'
      type={type || 'submit'}
      disabled={disabled}
      style={{backgroundColor: color || 'var(--color-primary)'}}
    >
      {iconLeft ? <Icon name={iconLeft} isImage={false} /> : null }
      <Text type='span' text={text} />
      {iconRight ? <Icon name={iconRight} isImage={false} /> : null }
    </button>
  );
}
