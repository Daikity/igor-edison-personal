'use client';

import { useState } from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Toast from '@/components/Toast';
import { message_fields_validation } from '@/libs';
import { sendRequest } from '@/hooks/useFetch';
import type { FormData, ValidateFields } from '@/app/types';
import type { Dictionary } from '@/i18n/types';

type ContactsFormProps = {
  form: Dictionary['contacts']['form'];
  messages: Dictionary['base_texts'];
};

export default function ContactsForm({ form, messages }: ContactsFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    telegram: '',
    message: '',
  });

  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error';
    isVisible: boolean;
  }>({
    message: '',
    type: 'success',
    isVisible: false,
  });
  const [isLoading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  const sendMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const honeypot = (event.target as HTMLFormElement).elements.namedItem(
      'company'
    ) as HTMLInputElement | null;
    if (honeypot?.value) {
      setLoading(false);
      showToast(messages.message_success, 'success');
      return;
    }

    const fields: Array<keyof FormData> = ['name', 'email', 'telegram', 'message'];

    for (const field of fields) {
      const validation = message_fields_validation(field, formData[field], undefined, messages);
      if (!validation.isValid) {
        showToast(validation.message, 'error');
        setLoading(false);
        return;
      }
    }

    try {
      const data: ValidateFields = await sendRequest('/send-message', {
        method: 'POST',
        body: formData,
      });

      if (data.code >= 200 && data.code < 400) {
        showToast(data.message || messages.message_success, 'success');
        setFormData({ name: '', email: '', telegram: '', message: '' });
      } else {
        showToast(data.message || messages.message_error.generic, 'error');
      }
    } catch (error: unknown) {
      const err = error as { response?: { data?: { message?: string } } };
      const errorMessage =
        err?.response?.data?.message || messages.message_error.generic_retry;
      showToast(errorMessage, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute opacity-0 h-0 w-0 overflow-hidden"
        />
        <Input
          label={form.name}
          name="name"
          value={formData.name}
          type="text"
          placeholder={form.placeholders.name}
          onChange={handleChange}
        />
        <Input
          name="email"
          label={form.email}
          value={formData.email}
          type="email"
          placeholder={form.placeholders.email}
          onChange={handleChange}
        />
        <Input
          name="telegram"
          label={form.telegram}
          value={formData.telegram}
          type="text"
          placeholder={form.placeholders.telegram}
          onChange={handleChange}
        />
        <Input
          name="message"
          label={form.message}
          value={formData.message}
          type="textarea"
          placeholder={form.placeholders.message}
          onChange={handleChange}
        />
        <Button disabled={isLoading} text={isLoading ? form.sending : form.button} type="submit" />
      </form>
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </>
  );
}
