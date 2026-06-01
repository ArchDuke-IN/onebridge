import { auth } from '@/auth';
import { db } from '@/db';
import { testimonials } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export async function GET() {
  const all = await db.select().from(testimonials);
  return NextResponse.json(all);
}

export async function POST() {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const now = new Date().toISOString();
  const [item] = await db
    .insert(testimonials)
    .values({
      quote: 'Add a client quote here.',
      name: 'Client Name',
      role: 'Role, Company',
      avatar: '💬',
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
    .update(testimonials)
    .set({ ...payload, updatedAt: new Date().toISOString() })
    .where(eq(testimonials.id, id));

  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const { id } = body;
  if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

  await db.delete(testimonials).where(eq(testimonials.id, id));
  return NextResponse.json({ ok: true });
}
