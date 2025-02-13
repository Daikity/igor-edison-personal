'use client'

import './scss/input.scss';
import { texts } from '@/app/i18n';
import Text from '@/components/Text'

export default function Main({
  label, name, type, placeholder}:
  {label?: string, name: string, type: 'text' | 'textarea' | 'email' | 'password' | 'number',
    placeholder?: string}
) {
  const { } = texts.en;

  return (
    <div className="input-container">
      <label>
        {label ? <Text type='span' text={label} /> : null}
        {
          type != 'textarea' ?
          <input type={type} name={name} placeholder={placeholder} /> :
          <textarea name={name} placeholder={placeholder} />
        }
      </label>
    </div>
  );
}
