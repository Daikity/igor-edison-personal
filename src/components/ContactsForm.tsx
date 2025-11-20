'use client'

import {useState} from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Toast from "@/components/Toast";
import {message_fields_validation} from "@/libs";
import {sendRequest} from "@/hooks/useFetch";
import {FormData, ValidateFields} from "@/app/types";
import {texts} from "@/app/i18n";

export default function ContactsForm() {
  const { contacts } = texts.en;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    telegram: "",
    message: "",
  });

  const [toast, setToast] = useState<{message: string; type: 'success' | 'error'; isVisible: boolean}>({
    message: '',
    type: 'success',
    isVisible: false
  });
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  const sendMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true)
    const fields: string[] = Object.keys(formData)

    for (let i = 0; i < fields.length; i++) {
      const value = Object.values(formData)[i]
      const validation = message_fields_validation(fields[i], value)
      if (!validation.isValid) {
        showToast(validation.message, 'error');
        setLoading(false)
        return;
      }
    }

    try {
      const data: ValidateFields = await sendRequest('/send-message', {
        method: 'POST',
        body: formData,
      })

      if (data.code >= 200 && data.code < 400) {
        showToast(data.message || texts.en.base_texts.message_success, 'success');
        setFormData({ name: "", email: "", telegram: "", message: "" });
      } else {
        showToast(data.message || 'Произошла ошибка при отправке сообщения.', 'error');
      }
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || 'Произошла ошибка при отправке сообщения. Попробуйте позже.';
      showToast(errorMessage, 'error');
    } finally {
      setLoading(false)
    }
  };

  return (
    <>
      <form onSubmit={sendMessage}>
        <Input label={contacts.form.name} name="name" value={formData.name} type="text" placeholder={contacts.form.placeholders.name} onChange={handleChange} />
        <Input name="email" label={contacts.form.email} value={formData.email} type="text" placeholder={contacts.form.placeholders.email} onChange={handleChange} />
        <Input name="telegram" label={contacts.form.telegram} value={formData.telegram} type="text" placeholder={contacts.form.placeholders.telegram} onChange={handleChange} />
        <Input name="message" label={contacts.form.message} value={formData.message} type="textarea" placeholder={contacts.form.placeholders.message} onChange={handleChange} />
        <Button disabled={isLoading} text={isLoading ? 'Отправка...' : contacts.form.button} type="submit" />
      </form>
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </>
  )
}
