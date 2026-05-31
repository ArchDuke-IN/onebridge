import { auth } from '@/auth';
import { db } from '@/db';
import { posts } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const { title, slug, content, excerpt, published } = body;

  if (!title || !slug) return NextResponse.json({ error: 'Title and slug required' }, { status: 400 });

  const existing = db.select().from(posts).where(eq(posts.slug, slug)).get();
  if (existing) return NextResponse.json({ error: 'Slug already exists' }, { status: 409 });

  const id = db.insert(posts).values({
    title,
    slug,
    content: content || '',
    excerpt: excerpt || '',
    published: published || false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }).returning({ id: posts.id }).get();

  return NextResponse.json({ id });
}

export async function PUT(req: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const { id, title, slug, content, excerpt, published } = body;

  if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

  db.update(posts).set({
    title,
    slug,
    content: content || '',
    excerpt: excerpt || '',
    published: published || false,
    updatedAt: new Date().toISOString(),
  }).where(eq(posts.id, id)).run();

  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  db.delete(posts).where(eq(posts.id, body.id)).run();

  return NextResponse.json({ ok: true });
}
