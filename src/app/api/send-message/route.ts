import { NextResponse } from 'next/server';
import { connectDb } from '@/lib/db';
import { RequestModel } from '@/lib/models/Request';
import { validateContactRequest } from '@/lib/validators/request';
import { escapeHtml, sendTelegramMessage } from '@/lib/telegram';

export const runtime = 'nodejs';

interface SendMessageBody {
  name?: string;
  email?: string;
  message?: string;
  telegram?: string;
  company?: string;
}

export async function POST(request: Request) {
  let body: SendMessageBody;

  try {
    body = (await request.json()) as SendMessageBody;
  } catch {
    return NextResponse.json(
      { code: 400, message: 'Некорректный JSON' },
      { status: 400 }
    );
  }

  // Honeypot: боты заполняют скрытое поле
  if (body.company) {
    return NextResponse.json({ code: 200, message: 'Сообщение успешно отправлено' });
  }

  const name = body.name?.trim() ?? '';
  const email = body.email?.trim() ?? '';
  const message = body.message?.trim() ?? '';
  const telegram = body.telegram?.trim() ?? '';

  if (!name) {
    return NextResponse.json(
      { fieldName: 'name', code: 400, message: 'Введите пожалуйста имя' },
      { status: 400 }
    );
  }
  if (!email) {
    return NextResponse.json(
      { fieldName: 'email', code: 400, message: 'Введите пожалуйста email' },
      { status: 400 }
    );
  }
  if (!message) {
    return NextResponse.json(
      { fieldName: 'message', code: 400, message: 'Введите пожалуйста сообщение' },
      { status: 400 }
    );
  }

  try {
    await connectDb();

    const validation = await validateContactRequest(name, email, message, telegram);
    if (!validation.isValid) {
      return NextResponse.json(
        { code: 400, message: validation.reason || 'Запрос не прошел валидацию' },
        { status: 400 }
      );
    }

    await RequestModel.create({
      name,
      email: email.toLowerCase(),
      telegram: telegram || undefined,
      message,
    });

    await sendTelegramMessage(
      [
        '<b>Запрос из портфолио:</b>',
        `Имя: <b>${escapeHtml(name)}</b>`,
        `Email: <b>${escapeHtml(email)}</b>`,
        `TG: <b>${escapeHtml(telegram || 'не указан')}</b>`,
        `Сообщение: <b>${escapeHtml(message)}</b>`,
      ].join('\n')
    );

    return NextResponse.json({ code: 200, message: 'Сообщение успешно отправлено' });
  } catch (error) {
    console.error('Ошибка при сохранении заявки:', error);
    return NextResponse.json(
      { code: 500, message: 'Ошибка при отправке сообщения' },
      { status: 500 }
    );
  }
}
