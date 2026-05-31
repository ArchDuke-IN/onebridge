import { hash } from 'bcryptjs';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.POSTGRES_URL!);

async function seed() {
  await sql`CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'admin',
    created_at TEXT NOT NULL DEFAULT '2025-01-01T00:00:00.000Z'
  )`;

  await sql`CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    content TEXT NOT NULL DEFAULT '',
    excerpt TEXT NOT NULL DEFAULT '',
    published BOOLEAN NOT NULL DEFAULT false,
    image TEXT,
    author_id INTEGER REFERENCES users(id),
    created_at TEXT NOT NULL DEFAULT '2025-01-01T00:00:00.000Z',
    updated_at TEXT NOT NULL DEFAULT '2025-01-01T00:00:00.000Z'
  )`;

  await sql`CREATE TABLE IF NOT EXISTS page_content (
    id SERIAL PRIMARY KEY,
    page TEXT NOT NULL,
    section TEXT NOT NULL,
    key TEXT NOT NULL,
    value TEXT NOT NULL DEFAULT '',
    updated_at TEXT NOT NULL DEFAULT '2025-01-01T00:00:00.000Z'
  )`;

  await sql`CREATE TABLE IF NOT EXISTS page_views (
    id SERIAL PRIMARY KEY,
    path TEXT NOT NULL,
    date TEXT NOT NULL,
    count INTEGER NOT NULL DEFAULT 1
  )`;

  const existing = await sql`SELECT id FROM users WHERE email = ${'admin@onebridge.com'}`;
  if (existing.length === 0) {
    const password = await hash('admin123', 10);
    await sql`INSERT INTO users (name, email, password, role, created_at) VALUES (${'Admin'}, ${'admin@onebridge.com'}, ${password}, ${'admin'}, ${new Date().toISOString()})`;
    console.log('Admin user created: admin@onebridge.com / admin123');
  }

  const contentCount = await sql`SELECT COUNT(*) as c FROM page_content`;
  if (contentCount[0]?.c === 0 || Number(contentCount[0]?.c) === 0) {
    const defaults = [
      { page: 'home', section: 'hero', key: 'headline', value: 'Your Complete Digital Growth Partner' },
      { page: 'home', section: 'hero', key: 'subtitle', value: 'We handle everything online so you can focus on running your business.' },
      { page: 'home', section: 'services', key: 'headline', value: 'Everything You Need. Under One Roof.' },
      { page: 'home', section: 'services', key: 'subtitle', value: 'All services are customised to your business goals and delivered end-to-end.' },
      { page: 'about', section: 'header', key: 'headline', value: 'Less Talk. More Work.' },
      { page: 'about', section: 'mission', key: 'body', value: 'We build functional, high-earning marketing systems. You run your business.' },
      { page: 'services', section: 'header', key: 'headline', value: 'Full-Service Digital Marketing' },
    ];
    for (const d of defaults) {
      await sql`INSERT INTO page_content (page, section, key, value) VALUES (${d.page}, ${d.section}, ${d.key}, ${d.value})`;
    }
    console.log(`Seeded ${defaults.length} content blocks.`);
  }

  console.log('Database seeded successfully.');
  process.exit(0);
}

seed().catch((err) => { console.error(err); process.exit(1); });
