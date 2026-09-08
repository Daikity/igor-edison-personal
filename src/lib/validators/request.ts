import { RequestModel } from '@/lib/models/Request';

export interface ValidationResult {
  isValid: boolean;
  reason?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_NAME_LENGTH = 2;
const MIN_MESSAGE_LENGTH = 10;
const MAX_NAME_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 2000;

const SPAM_PATTERNS = [
  /(viagra|cialis|casino|poker|crypto\s*giveaway)/i,
  /(купить\s*подпис|быстрый\s*заработок|кредит\s*онлайн)/i,
  /(click here|buy now|limited time offer)/i,
];

const TEMP_EMAIL_DOMAINS = [
  '10minutemail.com',
  'tempmail.com',
  'guerrillamail.com',
  'mailinator.com',
  'throwaway.email',
];

const isValidEmail = (email: string): boolean => {
  if (!EMAIL_REGEX.test(email)) return false;
  const domain = email.split('@')[1]?.toLowerCase() ?? '';
  return !TEMP_EMAIL_DOMAINS.some((temp) => domain.includes(temp));
};

const containsSpam = (text: string): boolean =>
  SPAM_PATTERNS.some((pattern) => pattern.test(text));

const hasRepeatingChars = (text: string): boolean => /(.)\1{4,}/u.test(text);

/** Имя без букв (любой алфавит через Unicode) — некорректно */
const hasNoLetters = (text: string): boolean => !/\p{L}/u.test(text.trim());

export async function validateContactRequest(
  name: string,
  email: string,
  message: string,
  telegram?: string
): Promise<ValidationResult> {
  const trimmedName = name.trim();
  const trimmedMessage = message.trim();
  const trimmedTelegram = telegram?.trim();

  if (trimmedName.length < MIN_NAME_LENGTH) {
    return { isValid: false, reason: 'Имя слишком короткое' };
  }
  if (trimmedName.length > MAX_NAME_LENGTH) {
    return { isValid: false, reason: 'Имя слишком длинное' };
  }
  if (hasNoLetters(trimmedName)) {
    return { isValid: false, reason: 'Некорректное имя' };
  }
  if (hasRepeatingChars(trimmedName)) {
    return { isValid: false, reason: 'Подозрительное имя' };
  }

  if (!isValidEmail(email)) {
    return { isValid: false, reason: 'Некорректный email адрес' };
  }

  if (trimmedMessage.length < MIN_MESSAGE_LENGTH) {
    return { isValid: false, reason: 'Сообщение слишком короткое' };
  }
  if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
    return { isValid: false, reason: 'Сообщение слишком длинное' };
  }
  if (containsSpam(trimmedMessage)) {
    return { isValid: false, reason: 'Сообщение содержит спам' };
  }
  if (hasRepeatingChars(trimmedMessage)) {
    return { isValid: false, reason: 'Подозрительное сообщение' };
  }

  if (trimmedTelegram && (!trimmedTelegram.startsWith('@') || trimmedTelegram.length < 2)) {
    return { isValid: false, reason: 'Некорректный Telegram' };
  }

  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const duplicate = await RequestModel.findOne({
    email: email.toLowerCase().trim(),
    message: trimmedMessage,
    createdAt: { $gte: oneDayAgo },
  }).lean();

  if (duplicate) {
    return { isValid: false, reason: 'Дубликат запроса' };
  }

  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
  const recentRequests = await RequestModel.countDocuments({
    email: email.toLowerCase().trim(),
    createdAt: { $gte: oneHourAgo },
  });

  if (recentRequests >= 5) {
    return { isValid: false, reason: 'Слишком много запросов' };
  }

  return { isValid: true };
}
