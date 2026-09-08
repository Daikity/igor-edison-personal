import type { ValidateFields } from '@/app/types';
import type { Dictionary } from '@/i18n/types';

export const message_fields_validation = (
  fieldName: string,
  value: string,
  status?: number,
  messages?: Dictionary['base_texts']
): ValidateFields => {
  const errors = messages?.message_error;
  const success = messages?.message_success ?? 'OK';

  if (status && status >= 400) {
    return {
      isValid: false,
      field: fieldName,
      message: value,
      code: status,
    };
  }

  switch (fieldName) {
    case 'name':
      if (value.length < 2 || value.length > 50) {
        return {
          isValid: false,
          field: fieldName,
          message: errors?.name ?? 'Invalid name',
          code: 400,
        };
      }
      return { isValid: true, field: fieldName, message: success, code: 200 };
    case 'email': {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return {
          isValid: false,
          field: fieldName,
          message: errors?.email ?? 'Invalid email',
          code: 400,
        };
      }
      return { isValid: true, field: fieldName, message: success, code: 200 };
    }
    case 'message':
      if (value.length < 10 || value.length > 1000) {
        return {
          isValid: false,
          field: fieldName,
          message: errors?.message ?? 'Invalid message',
          code: 400,
        };
      }
      return { isValid: true, field: fieldName, message: success, code: 200 };
    case 'telegram':
      // Telegram опционален
      if (!value.trim()) {
        return { isValid: true, field: fieldName, message: success, code: 200 };
      }
      if (!value.startsWith('@') || value.length < 2) {
        return {
          isValid: false,
          field: fieldName,
          message: errors?.telegram ?? 'Invalid telegram',
          code: 400,
        };
      }
      return { isValid: true, field: fieldName, message: success, code: 200 };
    default:
      return { isValid: true, field: fieldName, message: success, code: 200 };
  }
};
