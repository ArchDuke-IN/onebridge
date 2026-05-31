import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, company, email, phone, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message required' }, { status: 400 });
  }

  try {
    const databaseUrl = process.env.NEON_DB_URL || process.env.POSTGRES_URL || process.env.DATABASE_URL;
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

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'One Bridge Marketing <onboarding@resend.dev>',
        to: 'contact@onebridgemarketing.com',
        subject: `New Inquiry from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px">
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Company</td><td style="padding:8px;border:1px solid #ddd">${company || '-'}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd">${phone || '-'}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Message</td><td style="padding:8px;border:1px solid #ddd">${message}</td></tr>
          </table>
        `,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[inquiry] error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
