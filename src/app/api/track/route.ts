import { NextResponse } from 'next/server';
import { db } from '@/db';
import { pageViews } from '@/db/schema';
import { eq, and, sql } from 'drizzle-orm';

export async function POST(req: Request) {
  const { path } = await req.json();
  if (!path) return NextResponse.json({ error: 'Path required' }, { status: 400 });

  const today = new Date().toISOString().slice(0, 10);
  const existing = db.select().from(pageViews).where(and(eq(pageViews.path, path), eq(pageViews.date, today))).get();

  if (existing) {
    db.update(pageViews).set({ count: existing.count + 1 }).where(eq(pageViews.id, existing.id)).run();
  } else {
    db.insert(pageViews).values({ path, date: today, count: 1 }).run();
  }

  return NextResponse.json({ ok: true });
}
