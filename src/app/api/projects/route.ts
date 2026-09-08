import { NextResponse } from 'next/server';
import { listPortfolioProjects } from '@/lib/projects';

export const runtime = 'nodejs';

export async function GET() {
  const projects = await listPortfolioProjects();
  return NextResponse.json({ code: 200, data: projects });
}
