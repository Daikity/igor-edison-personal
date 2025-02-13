'use client'

import './scss/contacts.scss'
import { RefObject } from 'react'
import { texts } from '@/app/i18n'
import Text from '@/components/Text'
import Input from '@/components/Input'
import Button from '@/components/Button'

export default function Contacts({ref}: {ref: RefObject<null>}) {
  const { contacts } = texts.en;

  return (
    <div className="contacts" ref={ref}>
      <div className="contacts__container">
        <div className="title">
          <Text type='h3' text={contacts.title} />
          <Text type='p' text={contacts.description} />
        </div>
        <form>
          <Input name='name' label={contacts.form.name} type='text' />
          <Input name='email' label={contacts.form.email} type='email' />
          <Input name='message' label={contacts.form.message} type='textarea' />
          <Button text={contacts.form.button} />
        </form>
      </div>
    </div>
  );
}
