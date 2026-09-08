# Igor Edison — персональный портфолио-лендинг

Сайт-визитка фронтенд-разработчика на **Next.js 15** (App Router) с SSR, SEO и локализацией **ru / en / de** (дефолт — `ru`).

## Возможности

- Серверные секции (RSC): hero, опыт, философия, навыки, контакты
- Локали: `/` (ru), `/en/`, `/de/` + переключатель языка
- SEO: metadata, canonical, hreflang, `sitemap.xml`, `robots.txt`, JSON-LD (Person, WebSite)
- Контактная форма с honeypot и опциональным Telegram (API бэка — этап 2 перенесёт внутрь Next)

## Стек

- Next.js 15, React 19, TypeScript
- Tailwind CSS + SCSS modules/sections
- Axios (форма)

## Структура

```
src/
  app/[locale]/     # страницы и layout локали
  content/           # словари ru / en / de
  i18n/              # конфиг локалей, getDictionary
  sections/          # серверные секции лендинга
  components/        # UI (client только где нужно)
  middleware.ts      # rewrite ru без префикса
```

## Запуск

```bash
npm install
npm run dev
```

Открыть [http://localhost:3000](http://localhost:3000) (русский), `/en/`, `/de/`.

```bash
npm run build
npm start
```

## Переменные окружения

На этапе 1 форма ходит на внешний API (`localhost:5001` в dev).  
Полный `.env` появится на этапе переноса API в Next.

## Домен

Прод: `https://igor-edison-personal.ru`

## Дальше по плану

- API контактов внутри Next + Mongo/Telegram
- Витрина проектов и кейсы `/work/[slug]`
- Docker Compose и демо `/demos/<id>/`
