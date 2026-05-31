import { hash } from 'bcryptjs';
import Database from 'better-sqlite3';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const dataDir = join(__dirname, '..', 'data');
if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true });

const sqlite = new Database(join(dataDir, 'sqlite.db'));
sqlite.pragma('journal_mode = WAL');

async function seed() {
  sqlite.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'admin',
      created_at TEXT NOT NULL DEFAULT '2025-01-01T00:00:00.000Z'
    );
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      content TEXT NOT NULL DEFAULT '',
      excerpt TEXT NOT NULL DEFAULT '',
      published INTEGER NOT NULL DEFAULT 0,
      image TEXT,
      author_id INTEGER REFERENCES users(id),
      created_at TEXT NOT NULL DEFAULT '2025-01-01T00:00:00.000Z',
      updated_at TEXT NOT NULL DEFAULT '2025-01-01T00:00:00.000Z'
    );
    CREATE TABLE IF NOT EXISTS page_content (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      page TEXT NOT NULL,
      section TEXT NOT NULL,
      key TEXT NOT NULL,
      value TEXT NOT NULL DEFAULT '',
      updated_at TEXT NOT NULL DEFAULT '2025-01-01T00:00:00.000Z'
    );
    CREATE TABLE IF NOT EXISTS page_views (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      path TEXT NOT NULL,
      date TEXT NOT NULL,
      count INTEGER NOT NULL DEFAULT 1
    );
  `);

  const existing = sqlite.prepare('SELECT id FROM users WHERE email = ?').get('admin@onebridge.com');
  if (!existing) {
    const password = await hash('admin123', 10);
    sqlite.prepare('INSERT INTO users (name, email, password, role, created_at) VALUES (?, ?, ?, ?, ?)').run(
      'Admin', 'admin@onebridge.com', password, 'admin', new Date().toISOString()
    );
    console.log('Admin user created: admin@onebridge.com / admin123');
  }

  const contentCount = (sqlite.prepare('SELECT COUNT(*) as c FROM page_content').get() as { c: number }).c;
  if (contentCount === 0) {
    const insert = sqlite.prepare('INSERT INTO page_content (page, section, key, value, updated_at) VALUES (?, ?, ?, ?, ?)');
    const now = new Date().toISOString();
    const defaults = [
      ['home', 'hero', 'headline', 'Your Complete Digital Growth Partner', now],
      ['home', 'hero', 'subtitle', 'We handle everything online so you can focus on running your business.', now],
      ['home', 'services', 'headline', 'Everything You Need. Under One Roof.', now],
      ['home', 'services', 'subtitle', 'All services are customised to your business goals and delivered end-to-end.', now],
      ['about', 'header', 'headline', 'Less Talk. More Work.', now],
      ['about', 'mission', 'body', 'We build functional, high-earning marketing systems. You run your business.', now],
      ['services', 'header', 'headline', 'Full-Service Digital Marketing', now],
    ];
    for (const d of defaults) {
      insert.run(...d);
    }
    console.log(`Seeded ${defaults.length} content blocks.`);
  }

  console.log('Database seeded successfully.');
  process.exit(0);
}

seed().catch(console.error);
