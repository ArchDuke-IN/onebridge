import { auth } from '@/auth';
import { db } from '@/db';
import { pageContent } from '@/db/schema';
import { eq, and } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export async function GET() {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const all = await db.select().from(pageContent).orderBy(pageContent.page, pageContent.section, pageContent.key);
  return NextResponse.json(all);
}

export async function PUT(req: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();

  if (body.page && Array.isArray(body.blocks)) {
    for (const block of body.blocks) {
      const existing = await db
        .select()
        .from(pageContent)
        .where(and(eq(pageContent.page, body.page), eq(pageContent.section, block.section), eq(pageContent.key, block.key)))
        .limit(1);

      if (existing.length > 0) {
        await db
          .update(pageContent)
          .set({ value: block.value, updatedAt: new Date().toISOString() })
          .where(eq(pageContent.id, existing[0].id));
      } else {
        await db.insert(pageContent).values({
          page: body.page,
          section: block.section,
          key: block.key,
          value: block.value,
          updatedAt: new Date().toISOString(),
        });
      }
    }
    return NextResponse.json({ ok: true });
  }

  const { id, value } = body;
  if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

  await db.update(pageContent).set({ value, updatedAt: new Date().toISOString() }).where(eq(pageContent.id, id));
  return NextResponse.json({ ok: true });
}
