import { NextResponse } from 'next/server';
import { db } from '@/db';
import { siteImages } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { auth } from '@/auth';

export async function GET() {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const rows = await db.select().from(siteImages).orderBy(siteImages.key);
  return NextResponse.json(rows);
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const { url, alt } = body;

  if (!url) return NextResponse.json({ error: 'url required' }, { status: 400 });

  const now = new Date().toISOString();
  const key = `upload-${Date.now()}`;

  const [img] = await db.insert(siteImages)
    .values({ key, url, alt: alt || '', updatedAt: now })
    .returning();

  return NextResponse.json(img, { status: 201 });
}

export async function PUT(req: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const { id, url, alt } = body;

  if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 });

  await db.update(siteImages)
    .set({ url, alt, updatedAt: new Date().toISOString() })
    .where(eq(siteImages.id, id));

  return NextResponse.json({ ok: true });
}
