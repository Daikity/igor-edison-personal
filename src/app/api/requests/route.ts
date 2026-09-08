import { NextResponse } from 'next/server';
import { connectDb } from '@/lib/db';
import { RequestModel } from '@/lib/models/Request';

export const runtime = 'nodejs';

export async function GET(request: Request) {
  const secret = process.env.ADMIN_SECRET;
  const provided = request.headers.get('x-admin-secret');

  if (!secret || !provided || provided !== secret) {
    return NextResponse.json({ code: 401, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDb();
    const requests = await RequestModel.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ code: 200, data: requests });
  } catch (error) {
    console.error('Ошибка при получении заявок:', error);
    return NextResponse.json(
      { code: 500, message: 'Ошибка при получении заявок' },
      { status: 500 }
    );
  }
}
