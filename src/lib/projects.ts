import { promises as fs } from 'node:fs';
import path from 'node:path';

export interface PortfolioProject {
  id: string;
  title: string;
  demoBase: string;
  folder: string;
  stack: string[];
  summary: string;
  featured?: boolean;
  status?: 'online' | 'offline' | 'maintenance';
}

function getProjectsRoot(): string {
  return process.env.PROJECTS_ROOT ?? path.resolve(process.cwd(), '..');
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

/** Читает portfolio.project.json из соседних папок (или PROJECTS_ROOT) */
export async function listPortfolioProjects(): Promise<PortfolioProject[]> {
  const root = getProjectsRoot();

  try {
    const entries = await fs.readdir(root, { withFileTypes: true });
    const projects: PortfolioProject[] = [];

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;

      const project = await readManifest(path.join(root, entry.name));
      if (project) {
        projects.push(project);
      }
    }

    return projects.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
  } catch (error) {
    console.error('Не удалось прочитать проекты:', error);
    return [];
  }
}
