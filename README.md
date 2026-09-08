# Igor Edison — персональный портфолио-лендинг

Сайт-визитка фронтенд-разработчика на **Next.js 15** (App Router) с SSR, SEO и локализацией **ru / en / de** (дефолт — `ru`).

## Возможности

- Серверные секции (RSC): hero, опыт, философия, **проекты**, навыки, контакты
- Кейсы `/work/flowcrm`, `/work/shopadmin` (ru/en/de) + SEO metadata/hreflang/JSON-LD
- Локали: `/` (ru), `/en/`, `/de/` + переключатель языка
- SEO: metadata, canonical, hreflang, `sitemap.xml`, `robots.txt`, JSON-LD
- API внутри Next: контакты → MongoDB + Telegram, список проектов, защищённый просмотр заявок
- `output: 'standalone'` — готовность к Docker

## Стек

- Next.js 15, React 19, TypeScript
- MongoDB + Mongoose
- Tailwind CSS + SCSS

## Структура

```
src/
  app/[locale]/     # страницы и layout локали
  app/api/           # Route Handlers
  content/           # словари ru / en / de
  i18n/              # конфиг локалей
  lib/               # db, telegram, validators, projects
  sections/          # серверные секции
  components/        # UI
  middleware.ts
```

## API

| Метод | Путь | Доступ |
|-------|------|--------|
| POST | `/api/send-message` | публичный (honeypot + валидация) |
| GET | `/api/projects` | публичный (читает `portfolio.project.json`) |
| GET | `/api/requests` | только с заголовком `x-admin-secret` |

## Запуск

```bash
cp .env.example .env.local
# заполнить MONGO_URI, при необходимости BOT_TOKEN / CHAT_ID / ADMIN_SECRET

npm install
# MongoDB должна быть доступна
npm run dev
```

Открыть [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Домен

Прод: `https://igor-edison-personal.ru`

## Дальше по плану

- Docker Compose и демо `/demos/<id>/`
- Карточки Kwork / Upwork (заказ через биржи)
