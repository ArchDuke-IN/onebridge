import { NextResponse } from 'next/server';
import { db } from '@/db';
import { pageViews } from '@/db/schema';
import { eq, and } from 'drizzle-orm';

export async function POST(req: Request) {
  const { path } = await req.json();
  if (!path) return NextResponse.json({ error: 'Path required' }, { status: 400 });

  const today = new Date().toISOString().slice(0, 10);
  const existingRows = await db.select().from(pageViews).where(and(eq(pageViews.path, path), eq(pageViews.date, today)));

  if (existingRows[0]) {
    await db.update(pageViews).set({ count: existingRows[0].count + 1 }).where(eq(pageViews.id, existingRows[0].id));
  } else {
    await db.insert(pageViews).values({ path, date: today, count: 1 });
  }

  return NextResponse.json({ ok: true });
}
