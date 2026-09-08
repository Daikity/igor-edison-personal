# Igor Edison — персональный портфолио-лендинг

Сайт-визитка фронтенд-разработчика. Рантайм в проде — **только Docker Compose** из корня `portfolio/` (Next `standalone` за nginx-прокси).

Стек: **Next.js 15** (App Router / RSC), React 19, TypeScript, MongoDB, Tailwind + SCSS.  
Локали: **ru** (дефолт, без префикса), **en**, **de**. Домен: `https://igor-edison-personal.ru`.

## Возможности

- SSR-секции: hero, опыт, философия, проекты, навыки, контакты
- Кейсы `/work/flowcrm`, `/work/shopadmin` (+ `/en/...`, `/de/...`)
- SEO: `generateMetadata`, canonical, hreflang, sitemap, robots, JSON-LD
- API в Next: контакты → Mongo + Telegram; реестр проектов; admin requests
- Живые демо: `/demos/flowcrm/`, `/demos/shopadmin/` (через корневой proxy)

## Структура

```
src/
  app/[locale]/     # страницы и layout локали
  app/api/           # Route Handlers
  content/           # словари ru / en / de
  i18n/              # конфиг локалей + SITE_URL
  lib/               # db, telegram, validators, projects
  sections/          # серверные секции
  components/        # UI (client-островки)
  middleware.ts
```

## API

| Метод | Путь | Доступ |
|-------|------|--------|
| POST | `/api/send-message` | публичный (honeypot + валидация) |
| GET | `/api/projects` | публичный (`portfolio.project.json`) |
| GET | `/api/requests` | заголовок `x-admin-secret` |

Старый `igor_edison_back` удалён (API в Next).

## Env

См. `.env.example`: `MONGO_URI`, `MONGO_DB`, `BOT_TOKEN`, `CHAT_ID`, `ADMIN_SECRET`, `PROJECTS_ROOT`.

## Запуск (рекомендуемый — Docker)

Из корня `portfolio-stack/`:

```bash
cp .env.example .env
node scripts/portfolio-sync.mjs
docker compose up -d --build
```

Открыть [http://localhost](http://localhost). Подробности: [корневой README](../README.md).

## Локальная разработка без Docker

```bash
cp .env.example .env.local
npm install
# нужен MongoDB
npm run dev
```

[http://localhost:3000](http://localhost:3000) · `npm run build` → standalone.

## CI

GitHub Actions: только `npm ci` + `npm run build` (без static `out/` deploy).

## Дальше

- Карточки Kwork / Upwork (заказ через биржи)
