import './scss/contacts.scss';
import ContactsForm from '@/components/ContactsForm';
import type { Dictionary } from '@/i18n/types';

type ContactsProps = {
  content: Dictionary['contacts'];
  messages: Dictionary['base_texts'];
};

export default function Contacts({ content, messages }: ContactsProps) {
  return (
    <section className="contacts" id="contact" aria-labelledby="contact-title">
      <div className="contacts__container">
        <div className="title">
          <h3 id="contact-title">{content.title}</h3>
          <p>{content.description}</p>
        </div>
        <ContactsForm form={content.form} messages={messages} />
      </div>
    </section>
  );
}
