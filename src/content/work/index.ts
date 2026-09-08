import type { Locale } from '@/i18n/config';

export interface WorkCase {
  slug: string;
  demoBase: string;
  stack: string[];
  title: string;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  metaTitle: string;
  metaDescription: string;
  demoCta: string;
  contactCta: string;
  backLabel: string;
  problemLabel: string;
  solutionLabel: string;
  resultLabel: string;
}

const cases: Record<string, Record<Locale, WorkCase>> = {
  flowcrm: {
    ru: {
      slug: 'flowcrm',
      demoBase: '/demos/flowcrm',
      stack: ['React', 'TypeScript', 'Vite', 'Redux Toolkit', 'MSW', 'i18next'],
      title: 'FlowCRM',
      summary: 'B2B CRM для управления продажами: клиенты, сделки, задачи и аналитика.',
      problem:
        'Нужна была демонстрационная CRM с понятной воронкой, KPI и CRUD без реального бэкенда — чтобы быстро показать продуктовый фронтенд.',
      solution:
        'Собрал приложение на Feature-Sliced Design: dashboard, клиенты и сделки, RTK Query + MSW как mock API, формы на Zod, графики и i18n (en/ru/de/fr).',
      result:
        'Готовое демо с loading/error/empty состояниями, URL-фильтрами и проверяемым стеком — удобно открывать рекрутеру и обсуждать архитектуру.',
      metaTitle: 'FlowCRM — кейс CRM на React',
      metaDescription:
        'Кейс FlowCRM: B2B CRM на React, Redux Toolkit и MSW. Воронка продаж, клиенты, сделки и аналитика.',
      demoCta: 'Открыть демо',
      contactCta: 'Обсудить похожий проект',
      backLabel: 'Все проекты',
      problemLabel: 'Задача',
      solutionLabel: 'Решение',
      resultLabel: 'Результат',
    },
    en: {
      slug: 'flowcrm',
      demoBase: '/demos/flowcrm',
      stack: ['React', 'TypeScript', 'Vite', 'Redux Toolkit', 'MSW', 'i18next'],
      title: 'FlowCRM',
      summary: 'B2B CRM for sales: customers, deals, tasks, and analytics.',
      problem:
        'I needed a demo CRM with a clear pipeline, KPIs, and CRUD without a real backend — to showcase product frontend skills quickly.',
      solution:
        'Built with Feature-Sliced Design: dashboard, customers and deals, RTK Query + MSW as a mock API, Zod forms, charts, and i18n (en/ru/de/fr).',
      result:
        'A complete demo with loading/error/empty states, URL filters, and a reviewable stack — easy to open for recruiters and discuss architecture.',
      metaTitle: 'FlowCRM — React CRM case study',
      metaDescription:
        'FlowCRM case: B2B CRM on React, Redux Toolkit, and MSW. Sales pipeline, customers, deals, and analytics.',
      demoCta: 'Open demo',
      contactCta: 'Discuss a similar project',
      backLabel: 'All projects',
      problemLabel: 'Problem',
      solutionLabel: 'Solution',
      resultLabel: 'Result',
    },
    de: {
      slug: 'flowcrm',
      demoBase: '/demos/flowcrm',
      stack: ['React', 'TypeScript', 'Vite', 'Redux Toolkit', 'MSW', 'i18next'],
      title: 'FlowCRM',
      summary: 'B2B-CRM für Vertrieb: Kunden, Deals, Aufgaben und Analytics.',
      problem:
        'Gesucht war eine Demo-CRM mit klarer Pipeline, KPIs und CRUD ohne echtes Backend — um Produkt-Frontend schnell zu zeigen.',
      solution:
        'Umgesetzt mit Feature-Sliced Design: Dashboard, Kunden und Deals, RTK Query + MSW als Mock-API, Zod-Formulare, Charts und i18n (en/ru/de/fr).',
      result:
        'Fertige Demo mit loading/error/empty States, URL-Filtern und nachvollziehbarem Stack — ideal für Reviews und Architektur-Gespräche.',
      metaTitle: 'FlowCRM — React CRM Case Study',
      metaDescription:
        'FlowCRM Case: B2B-CRM mit React, Redux Toolkit und MSW. Pipeline, Kunden, Deals und Analytics.',
      demoCta: 'Demo öffnen',
      contactCta: 'Ähnliches Projekt besprechen',
      backLabel: 'Alle Projekte',
      problemLabel: 'Aufgabe',
      solutionLabel: 'Lösung',
      resultLabel: 'Ergebnis',
    },
  },
  shopadmin: {
    ru: {
      slug: 'shopadmin',
      demoBase: '/demos/shopadmin',
      stack: ['React', 'TypeScript', 'Vite', 'Redux Toolkit', 'MSW', 'RBAC'],
      title: 'ShopAdmin',
      summary: 'Админ-панель e-commerce: каталог, заказы, роли и журнал аудита.',
      problem:
        'Нужна была production-like админка с таблицами, фильтрами, RBAC и audit log — без поднятия полноценного сервера.',
      solution:
        'FSD-архитектура, RTK Query + MSW, роли и права, DataTable/ConfirmDialog/QueryState, i18n и CI-проверка typecheck/lint/test/build.',
      result:
        'Демонстрация админского фронтенда «как в бою»: права режут действия, состояния запросов явные, сценарии покрыты тестами.',
      metaTitle: 'ShopAdmin — кейс e-commerce админки',
      metaDescription:
        'Кейс ShopAdmin: админ-панель на React с RBAC, MSW и audit log. Товары, заказы, роли.',
      demoCta: 'Открыть демо',
      contactCta: 'Обсудить похожий проект',
      backLabel: 'Все проекты',
      problemLabel: 'Задача',
      solutionLabel: 'Решение',
      resultLabel: 'Результат',
    },
    en: {
      slug: 'shopadmin',
      demoBase: '/demos/shopadmin',
      stack: ['React', 'TypeScript', 'Vite', 'Redux Toolkit', 'MSW', 'RBAC'],
      title: 'ShopAdmin',
      summary: 'E-commerce admin panel: catalog, orders, roles, and audit log.',
      problem:
        'I needed a production-like admin with tables, filters, RBAC, and an audit log — without standing up a full backend.',
      solution:
        'FSD architecture, RTK Query + MSW, roles and permissions, DataTable/ConfirmDialog/QueryState, i18n, and CI for typecheck/lint/test/build.',
      result:
        'A realistic admin frontend demo: permissions gate actions, query states are explicit, and flows are covered by tests.',
      metaTitle: 'ShopAdmin — e-commerce admin case study',
      metaDescription:
        'ShopAdmin case: React admin panel with RBAC, MSW, and audit log. Products, orders, roles.',
      demoCta: 'Open demo',
      contactCta: 'Discuss a similar project',
      backLabel: 'All projects',
      problemLabel: 'Problem',
      solutionLabel: 'Solution',
      resultLabel: 'Result',
    },
    de: {
      slug: 'shopadmin',
      demoBase: '/demos/shopadmin',
      stack: ['React', 'TypeScript', 'Vite', 'Redux Toolkit', 'MSW', 'RBAC'],
      title: 'ShopAdmin',
      summary: 'E-Commerce-Admin: Katalog, Bestellungen, Rollen und Audit-Log.',
      problem:
        'Gesucht war ein production-like Admin mit Tabellen, Filtern, RBAC und Audit-Log — ohne volles Backend.',
      solution:
        'FSD-Architektur, RTK Query + MSW, Rollen und Rechte, DataTable/ConfirmDialog/QueryState, i18n und CI für typecheck/lint/test/build.',
      result:
        'Realistische Admin-Demo: Rechte steuern Aktionen, Query-States sind klar, Szenarien sind getestet.',
      metaTitle: 'ShopAdmin — E-Commerce Admin Case Study',
      metaDescription:
        'ShopAdmin Case: React-Admin mit RBAC, MSW und Audit-Log. Produkte, Bestellungen, Rollen.',
      demoCta: 'Demo öffnen',
      contactCta: 'Ähnliches Projekt besprechen',
      backLabel: 'Alle Projekte',
      problemLabel: 'Aufgabe',
      solutionLabel: 'Lösung',
      resultLabel: 'Ergebnis',
    },
  },
};

export const workSlugs = Object.keys(cases);

export function getWorkCase(slug: string, locale: Locale): WorkCase | null {
  return cases[slug]?.[locale] ?? null;
}

export function listWorkCases(locale: Locale): WorkCase[] {
  return workSlugs
    .map((slug) => getWorkCase(slug, locale))
    .filter((item): item is WorkCase => Boolean(item));
}
