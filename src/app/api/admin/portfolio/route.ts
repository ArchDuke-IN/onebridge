import { auth } from '@/auth';
import { db } from '@/db';
import { portfolioItems } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export async function GET() {
  const all = await db.select().from(portfolioItems);
  return NextResponse.json(all);
}

export async function POST() {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const slug = `portfolio-${Date.now()}`;
  const now = new Date().toISOString();

  const [item] = await db
    .insert(portfolioItems)
    .values({
      slug,
      label: 'New Client',
      title: 'New Project',
      subtitle: 'Project subtitle',
      description: 'Add a short project summary.',
      result: 'Result KPI',
      image: '',
      imageEmoji: '',
      tags: JSON.stringify(['Growth', 'Strategy']),
      order: 0,
      published: true,
      createdAt: now,
      updatedAt: now,
    })
    .returning();

  return NextResponse.json(item);
}

export async function PUT(req: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const { id, ...payload } = body;
  if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

  await db
    .update(portfolioItems)
    .set({ ...payload, updatedAt: new Date().toISOString() })
    .where(eq(portfolioItems.id, id));

  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const { id } = body;
  if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

  await db.delete(portfolioItems).where(eq(portfolioItems.id, id));
  return NextResponse.json({ ok: true });
}
