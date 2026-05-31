import { auth } from '@/auth';
import { db } from '@/db';
import { pageContent } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export async function GET() {
  const all = await db.select().from(pageContent);
  return NextResponse.json(all);
}

export async function PUT(req: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const { id, value } = body;

  if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

  await db.update(pageContent).set({ value, updatedAt: new Date().toISOString() }).where(eq(pageContent.id, id));
  return NextResponse.json({ ok: true });
}
