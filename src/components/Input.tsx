'use client';

import './scss/input.scss';

interface InputProps {
  label?: string;
  name: string;
  type: 'text' | 'textarea' | 'email' | 'password' | 'number';
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function Input({ label, name, type, placeholder, value, onChange }: InputProps) {
  return (
    <div className="input-container">
      <label>
        {label && <span>{label}</span>}
        {type !== 'textarea' ? (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        ) : (
          <textarea name={name} placeholder={placeholder} value={value} onChange={onChange} />
        )}
      </label>
    </div>
  );
}
