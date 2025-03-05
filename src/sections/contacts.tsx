'use client'

import './scss/contacts.scss'
import { RefObject, useState } from 'react'
import { texts } from '@/app/i18n'
import Text from '@/components/Text'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { FormData } from '@/app/types'

export default function Contacts({ref}: {ref: RefObject<null>}) {
  const { contacts } = texts.en;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const sendMessage = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Отправленные данные:", formData);

    fetch('http://localhost:5000/send-message', { method: 'POST', body: JSON.stringify(formData) });

    setFormData({ name: "", email: "", message: "" }); // Очистка формы
  };

  return (
    <div className="contacts" ref={ref}>
      <div className="contacts__container">
        <div className="title">
          <Text type='h3' text={contacts.title} />
          <Text type='p' text={contacts.description} />
        </div>
        <form onSubmit={sendMessage}>
          <Input name="name" label={contacts.form.name} type="text" value={formData.name} onChange={handleChange} />
          <Input name="email" label={contacts.form.email} type="email" value={formData.email} onChange={handleChange} />
          <Input name="message" label={contacts.form.message} type="textarea" value={formData.message} onChange={handleChange} />
          <Button text={contacts.form.button} type="submit" />
        </form>
      </div>
    </div>
  );
}
