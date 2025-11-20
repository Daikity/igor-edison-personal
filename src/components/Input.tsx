'use client'

import './scss/input.scss';
import Text from '@/components/Text';

interface InputProps {
  label?: string;
  name: string;
  type: 'text' | 'textarea' | 'email' | 'password' | 'number';
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default ({label, name, type, placeholder, value, onChange}: InputProps) => (
  <div className="input-container">
    <label>
      {label && <Text type="span" text={label}/>}
      {type !== 'textarea' ? (
        <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}/>
      ) : (
        <textarea name={name} placeholder={placeholder} value={value} onChange={onChange}/>
      )}
    </label>
  </div>
)
