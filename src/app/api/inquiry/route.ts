import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, company, email, phone, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message required' }, { status: 400 });
  }

  try {
    const databaseUrl = process.env.POSTGRES_URL || process.env.DATABASE_URL;
    if (!databaseUrl) return NextResponse.json({ error: 'Database not configured' }, { status: 500 });
    const sql = neon(databaseUrl);
    const now = new Date().toISOString();

    await sql`
      CREATE TABLE IF NOT EXISTS inquiries (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        company TEXT,
        email TEXT NOT NULL,
        phone TEXT,
        message TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT ${now}
      )
    `;

    await sql`
      INSERT INTO inquiries (name, company, email, phone, message, created_at)
      VALUES (${name}, ${company || ''}, ${email}, ${phone || ''}, ${message}, ${now})
    `;

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[inquiry] error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
