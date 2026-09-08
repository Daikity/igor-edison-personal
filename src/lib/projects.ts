import { promises as fs } from 'node:fs';
import path from 'node:path';
import type { Locale } from '@/i18n/config';

/** Локализованный текст кейса — лежит в portfolio.project.json */
export interface PortfolioCaseLocale {
  summary: string;
  problem: string;
  solution: string;
  result: string;
  metaTitle: string;
  metaDescription: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  demoBase: string;
  folder: string;
  stack: string[];
  summary: string;
  /** false — скрыть карточку на лендинге; по умолчанию true */
  show?: boolean;
  featured?: boolean;
  status?: 'online' | 'offline' | 'maintenance';
  /** Опционально: тексты страницы /work/<id> */
  case?: Partial<Record<Locale, PortfolioCaseLocale>>;
}

/** Собранный кейс для UI (манифест + подписи лендинга) */
export interface WorkCaseView {
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
}

export type WorkCaseLabels = {
  demoCta: string;
  contactCta: string;
  backLabel: string;
  problemLabel: string;
  solutionLabel: string;
  resultLabel: string;
};

function getProjectsRoot(): string {
  return process.env.PROJECTS_ROOT ?? path.resolve(process.cwd(), '..');
}

function isCaseComplete(value: PortfolioCaseLocale | undefined): value is PortfolioCaseLocale {
  return Boolean(
    value?.summary &&
      value.problem &&
      value.solution &&
      value.result &&
      value.metaTitle &&
      value.metaDescription
  );
}

export function projectHasCase(project: PortfolioProject, locale: Locale): boolean {
  return isCaseComplete(project.case?.[locale] ?? project.case?.ru);
}

export function resolveCaseLocale(
  project: PortfolioProject,
  locale: Locale
): PortfolioCaseLocale | null {
  const localized = project.case?.[locale];
  if (isCaseComplete(localized)) return localized;
  if (locale !== 'ru' && isCaseComplete(project.case?.ru)) return project.case!.ru!;
  return null;
}

async function readManifest(dir: string): Promise<PortfolioProject | null> {
  const manifestPath = path.join(dir, 'portfolio.project.json');
  try {
    const raw = await fs.readFile(manifestPath, 'utf8');
    const data = JSON.parse(raw) as PortfolioProject;
    if (!data.id || !data.title || !data.demoBase) {
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

/** Все видимые проекты из PROJECTS_ROOT */
export async function listPortfolioProjects(): Promise<PortfolioProject[]> {
  const root = getProjectsRoot();

  try {
    const entries = await fs.readdir(root, { withFileTypes: true });
    const projects: PortfolioProject[] = [];

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;

      const project = await readManifest(path.join(root, entry.name));
      if (project && project.show !== false) {
        projects.push(project);
      }
    }

    return projects.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
  } catch (error) {
    console.error('Не удалось прочитать проекты:', error);
    return [];
  }
}

export async function getPortfolioProject(id: string): Promise<PortfolioProject | null> {
  const projects = await listPortfolioProjects();
  return projects.find((p) => p.id === id) ?? null;
}

export async function listWorkSlugs(): Promise<string[]> {
  const projects = await listPortfolioProjects();
  return projects.filter((p) => projectHasCase(p, 'ru')).map((p) => p.id);
}

export async function getWorkCaseView(
  slug: string,
  locale: Locale
): Promise<WorkCaseView | null> {
  const project = await getPortfolioProject(slug);
  if (!project) return null;

  const caseLocale = resolveCaseLocale(project, locale);
  if (!caseLocale) return null;

  return {
    slug: project.id,
    demoBase: project.demoBase,
    stack: project.stack ?? [],
    title: project.title,
    summary: caseLocale.summary,
    problem: caseLocale.problem,
    solution: caseLocale.solution,
    result: caseLocale.result,
    metaTitle: caseLocale.metaTitle,
    metaDescription: caseLocale.metaDescription,
  };
}
