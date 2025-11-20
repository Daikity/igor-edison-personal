'use client'

import './scss/contacts.scss'
import React, { RefObject } from 'react'
import { texts } from '@/app/i18n'
import Text from '@/components/Text'
import ContactsForm from "@/components/ContactsForm";

export default function Contacts({ref}: {ref: RefObject<null>}) {
  const { contacts } = texts.en;

  return (
    <div className="contacts" ref={ref} id='contact'>
      <div className="contacts__container">
        <div className="title">
          <Text type='h3' text={contacts.title} />
          <Text type='p' text={contacts.description} />
        </div>
        <ContactsForm />
      </div>
    </div>
  );
}
