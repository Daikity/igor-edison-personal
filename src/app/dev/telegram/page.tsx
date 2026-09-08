export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

type TelegramChat = {
  id: number;
  type: string;
  title?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
};

type TelegramUser = {
  id: number;
  username?: string;
  first_name?: string;
  last_name?: string;
};

type TelegramMessage = {
  message_id: number;
  date: number;
  text?: string;
  chat: TelegramChat;
  from?: TelegramUser;
};

type TelegramUpdate = {
  update_id: number;
  message?: TelegramMessage;
  edited_message?: TelegramMessage;
  channel_post?: TelegramMessage;
};

type GetUpdatesResponse = {
  ok: boolean;
  description?: string;
  result?: TelegramUpdate[];
};

function describeChat(chat: TelegramChat): string {
  return (
    chat.title ||
    [chat.first_name, chat.last_name].filter(Boolean).join(' ') ||
    chat.username ||
    String(chat.id)
  );
}

export default async function TelegramDebugPage({
  searchParams,
}: {
  searchParams: Promise<{ secret?: string }>;
}) {
  const params = await searchParams;
  const isDev = process.env.NODE_ENV === 'development';
  const adminSecret = process.env.ADMIN_SECRET;
  const allowed =
    isDev || (Boolean(adminSecret) && params.secret === adminSecret);

  if (!allowed) {
    return (
      <main style={{ fontFamily: 'system-ui', padding: 24 }}>
        <h1>Telegram debug</h1>
        <p>
          Доступ запрещён. В production открой с <code>?secret=ADMIN_SECRET</code>.
        </p>
      </main>
    );
  }

  const token = process.env.BOT_TOKEN;
  if (!token) {
    return (
      <main style={{ fontFamily: 'system-ui', padding: 24 }}>
        <h1>Telegram debug</h1>
        <p>BOT_TOKEN не задан в .env.local</p>
      </main>
    );
  }

  const response = await fetch(
    `https://api.telegram.org/bot${token}/getUpdates?limit=20`,
    { cache: 'no-store' }
  );
  const data = (await response.json()) as GetUpdatesResponse;

  if (!data.ok) {
    return (
      <main style={{ fontFamily: 'system-ui', padding: 24, maxWidth: 720 }}>
        <h1>Telegram debug</h1>
        <p style={{ color: 'crimson' }}>Ошибка API: {data.description ?? response.status}</p>
        <p>
          Если бот раньше использовал polling — останови старый процесс и подожди минуту, затем
          обнови страницу.
        </p>
      </main>
    );
  }

  const updates = data.result ?? [];
  const chats = new Map<number, { chat: TelegramChat; lastText?: string; from?: string }>();

  for (const update of updates) {
    const message = update.message || update.edited_message || update.channel_post;
    if (!message?.chat) continue;
    chats.set(message.chat.id, {
      chat: message.chat,
      lastText: message.text,
      from: message.from
        ? [message.from.first_name, message.from.last_name, message.from.username]
            .filter(Boolean)
            .join(' ')
        : undefined,
    });
  }

  const chatList = Array.from(chats.values());

  return (
    <main style={{ fontFamily: 'system-ui', padding: 24, maxWidth: 900, lineHeight: 1.45 }}>
      <h1>Telegram debug — CHAT_ID</h1>
      <ol>
        <li>
          Открой бота в Telegram и напиши ему любое сообщение (например: <code>hi</code>).
        </li>
        <li>Обнови эту страницу.</li>
        <li>
          Скопируй <strong>CHAT_ID</strong> — пришли мне, добавлю в <code>.env.local</code>.
        </li>
      </ol>

      <h2>Найденные чаты ({chatList.length})</h2>
      {chatList.length === 0 ? (
        <p style={{ color: '#666' }}>
          Пока пусто. Напиши боту в Telegram и нажми обновление страницы.
        </p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {chatList.map(({ chat, lastText, from }) => (
            <li
              key={chat.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: 8,
                padding: 16,
                marginBottom: 12,
              }}
            >
              <div>
                <strong>CHAT_ID:</strong>{' '}
                <code style={{ fontSize: 18, background: '#f4f4f4', padding: '2px 8px' }}>
                  {chat.id}
                </code>
              </div>
              <div>
                Чат: {describeChat(chat)} ({chat.type})
              </div>
              {from ? <div>От кого: {from}</div> : null}
              {lastText ? <div>Текст: {lastText}</div> : null}
            </li>
          ))}
        </ul>
      )}

      <h2>Сырые updates ({updates.length})</h2>
      <pre
        style={{
          background: '#111',
          color: '#eee',
          padding: 16,
          overflow: 'auto',
          fontSize: 12,
          borderRadius: 8,
        }}
      >
        {JSON.stringify(updates, null, 2)}
      </pre>
    </main>
  );
}
