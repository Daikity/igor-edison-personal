import { texts } from "@/app/i18n";
import {ValidateFields} from "@/app/types";
const { base_texts } = texts.en;

export const message_fields_validation = (fieldName: string, message: string, status?: number): ValidateFields => {
  if (status && status >= 400) {
    return {
      isValid: false,
      field: fieldName,
      message: message,
      code: status,
    }
  }

  switch(fieldName) {
    case 'name':
      if (message.length < 2 || message.length > 50) {
        return {
          isValid: false,
          field: fieldName,
          message: base_texts.message_error.name,
          code: 500,
        }
      }
      return {
        isValid: true,
        field: fieldName,
        message: base_texts.message_success,
        code: 200,
      };
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(message)) {
        return {
          isValid: false,
          field: fieldName,
          message: base_texts.message_error.email,
          code: 500,
        }
      }
      return {
        isValid: true,
        field: fieldName,
        message: base_texts.message_success,
        code: 200,
      };
    case 'message':
      if (message.length < 10 || message.length > 1000) {
        return {
          isValid: false,
          field: fieldName,
          message: base_texts.message_error.message,
          code: 500,
        }
      }
      return {
        isValid: true,
        field: fieldName,
        message: base_texts.message_success,
        code: 200,
      };
    case 'telegram':
      if (!message.startsWith('@')) {
        return {
          isValid: false,
          field: fieldName,
          message: base_texts.message_error.telegram,
          code: 500,
        }
      }
      return {
        isValid: true,
        field: fieldName,
        message: base_texts.message_success,
        code: 200,
      };
    default:
      return {
        isValid: true,
        field: fieldName,
        message: base_texts.message_success,
        code: 200,
      };
  }
}
