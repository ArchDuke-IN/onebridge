import { hash } from 'bcryptjs';
import { neon } from '@neondatabase/serverless';

const databaseUrl = process.env.POSTGRES_URL || process.env.DATABASE_URL;
if (!databaseUrl) { console.error('Missing POSTGRES_URL or DATABASE_URL'); process.exit(1); }
const sql = neon(databaseUrl);

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

  await sql`CREATE TABLE IF NOT EXISTS site_images (
    id SERIAL PRIMARY KEY,
    key TEXT NOT NULL UNIQUE,
    url TEXT NOT NULL DEFAULT '',
    alt TEXT NOT NULL DEFAULT '',
    updated_at TEXT NOT NULL DEFAULT '2025-01-01T00:00:00.000Z'
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

  const imgCount = await sql`SELECT COUNT(*) as c FROM site_images`;
  const imgCountVal = Number(imgCount[0]?.c);
  if (imgCountVal === 0) {
    const defaultImages = [
      { key: 'logo', url: '/logo.jpeg', alt: 'One Bridge Marketing' },
      { key: 'service_social_media', url: 'https://picsum.photos/seed/social-media-mgmt/800/1000', alt: 'Social media management' },
      { key: 'service_content_creation', url: 'https://picsum.photos/seed/content-creation/800/1000', alt: 'Content creation' },
      { key: 'service_branding', url: 'https://picsum.photos/seed/brand-identity/800/1000', alt: 'Branding and identity' },
      { key: 'service_web_dev', url: 'https://picsum.photos/seed/web-dev/800/1000', alt: 'Website development' },
      { key: 'service_digital_marketing', url: 'https://picsum.photos/seed/digital-marketing/800/1000', alt: 'Digital marketing' },
      { key: 'service_influencer', url: 'https://picsum.photos/seed/influencer-mktg/800/1000', alt: 'Influencer marketing' },
      { key: 'project_social_media', url: 'https://picsum.photos/seed/social-media-phone/600/400', alt: 'Social media on phone' },
      { key: 'project_content_creation', url: 'https://picsum.photos/seed/video-content-studio/600/400', alt: 'Video content studio' },
      { key: 'project_branding', url: 'https://picsum.photos/seed/brand-design-agency/600/400', alt: 'Brand design agency' },
      { key: 'project_web_dev', url: 'https://picsum.photos/seed/web-development-laptop/600/400', alt: 'Web development laptop' },
      { key: 'project_digital_marketing', url: 'https://picsum.photos/seed/digital-marketing-data/600/400', alt: 'Digital marketing data' },
      { key: 'project_influencer', url: 'https://picsum.photos/seed/influencer-collab/600/400', alt: 'Influencer collaboration' },
    ];
    for (const img of defaultImages) {
      await sql`INSERT INTO site_images (key, url, alt) VALUES (${img.key}, ${img.url}, ${img.alt})`;
    }
    console.log(`Seeded ${defaultImages.length} site images.`);
  }

  console.log('Database seeded successfully.');
  process.exit(0);
}

seed().catch((err) => { console.error(err); process.exit(1); });
