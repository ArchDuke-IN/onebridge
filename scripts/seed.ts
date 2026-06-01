import { hash } from 'bcryptjs';
import { neon } from '@neondatabase/serverless';

const databaseUrl = process.env.NEON_DB_URL || process.env.POSTGRES_URL || process.env.DATABASE_URL;
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

  await sql`CREATE TABLE IF NOT EXISTS portfolio_items (
    id SERIAL PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    label TEXT NOT NULL,
    title TEXT NOT NULL,
    subtitle TEXT NOT NULL,
    description TEXT NOT NULL DEFAULT '',
    result TEXT NOT NULL,
    image TEXT NOT NULL DEFAULT '',
    image_emoji TEXT NOT NULL DEFAULT '',
    tags TEXT NOT NULL DEFAULT '',
    order INTEGER NOT NULL DEFAULT 0,
    published BOOLEAN NOT NULL DEFAULT true,
    created_at TEXT NOT NULL DEFAULT '2025-01-01T00:00:00.000Z',
    updated_at TEXT NOT NULL DEFAULT '2025-01-01T00:00:00.000Z'
  )`;

  await sql`CREATE TABLE IF NOT EXISTS services (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL DEFAULT '',
    emoji TEXT NOT NULL DEFAULT '',
    color TEXT NOT NULL DEFAULT '',
    order INTEGER NOT NULL DEFAULT 0,
    published BOOLEAN NOT NULL DEFAULT true,
    created_at TEXT NOT NULL DEFAULT '2025-01-01T00:00:00.000Z',
    updated_at TEXT NOT NULL DEFAULT '2025-01-01T00:00:00.000Z'
  )`;

  await sql`CREATE TABLE IF NOT EXISTS testimonials (
    id SERIAL PRIMARY KEY,
    quote TEXT NOT NULL,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    avatar TEXT NOT NULL DEFAULT '',
    order INTEGER NOT NULL DEFAULT 0,
    published BOOLEAN NOT NULL DEFAULT true,
    created_at TEXT NOT NULL DEFAULT '2025-01-01T00:00:00.000Z',
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
      { key: 'logo', url: '/logo.jpeg', alt: 'OneBridge Marketing' },
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

  const portfolioCount = await sql`SELECT COUNT(*) as c FROM portfolio_items`;
  if (Number(portfolioCount[0]?.c) === 0) {
    const defaults = [
      {
        slug: 'gridmaster',
        label: 'B2B SaaS',
        title: 'GridMaster',
        subtitle: 'B2B SaaS Growth Strategy',
        description: 'Scaled organic traffic by 350% in 6 months and rebuilt the entire conversion funnel with strategic content mapping.',
        result: '+480% Lead Flow',
        image: 'https://picsum.photos/seed/gridmaster/900/700',
        image_emoji: '🚀',
        tags: JSON.stringify(['SEO', 'Paid Ads', 'Funnel Optimization']),
        order: 1,
      },
      {
        slug: 'ecommerce-elite',
        label: 'DTC Brand',
        title: 'E-Commerce Elite',
        subtitle: 'DTC Brand Scale',
        description: 'Achieved a 4.2x return on ad spend through aggressive paid social campaigns and email automation sequences.',
        result: '4.2x ROAS',
        image: 'https://picsum.photos/seed/ecommerce-elite/900/700',
        image_emoji: '💎',
        tags: JSON.stringify(['Meta Ads', 'Email Marketing', 'Branding']),
        order: 2,
      },
      {
        slug: 'servicepro',
        label: 'Local Services',
        title: 'ServicePro',
        subtitle: 'Local Business Growth',
        description: 'Tripled inbound leads in 4 months through data-driven social media strategy and hyper-local SEO optimization.',
        result: '3x Lead Volume',
        image: 'https://picsum.photos/seed/servicepro/900/700',
        image_emoji: '📈',
        tags: JSON.stringify(['Social Strategy', 'Content Creation', 'Local SEO']),
        order: 3,
      },
    ];

    for (const item of defaults) {
      await sql`INSERT INTO portfolio_items (slug, label, title, subtitle, description, result, image, image_emoji, tags, order)
        VALUES (${item.slug}, ${item.label}, ${item.title}, ${item.subtitle}, ${item.description}, ${item.result}, ${item.image}, ${item.image_emoji}, ${item.tags}, ${item.order})`;
    }
    console.log(`Seeded ${defaults.length} portfolio items.`);
  }

  const servicesCount = await sql`SELECT COUNT(*) as c FROM services`;
  if (Number(servicesCount[0]?.c) === 0) {
    const defaults = [
      { title: 'Social Media Management', description: 'Strategy, content calendar, posting & community engagement across Instagram, LinkedIn, TikTok & Twitter.', emoji: '📱', color: 'bg-[#08D9D6]', order: 1 },
      { title: 'Content Creation', description: 'Reels, video production, carousels, graphics, copywriting & branded posts that actually convert.', emoji: '🎬', color: 'bg-[#FF66C4]', order: 2 },
      { title: 'Branding & Identity', description: 'Logo design, brand guidelines, visual identity systems, color palettes & complete brand positioning.', emoji: '🎨', color: 'bg-[#FFE135]', order: 3 },
      { title: 'Website Development', description: 'Fast, mobile-optimized, conversion-focused websites built with modern tech. SEO-ready from day one.', emoji: '💻', color: 'bg-white', order: 4 },
      { title: 'Digital Marketing', description: 'Paid Ads (Meta & Google), SEO strategy, email marketing, retargeting & complete marketing automation.', emoji: '📊', color: 'bg-[#A05CFF]', order: 5 },
      { title: 'Influencer & PR', description: 'Creator partnerships, press releases, media outreach, brand collaborations & reputation management.', emoji: '⭐', color: 'bg-[#52FFC2]', order: 6 },
    ];

    for (const item of defaults) {
      await sql`INSERT INTO services (title, description, emoji, color, order)
        VALUES (${item.title}, ${item.description}, ${item.emoji}, ${item.color}, ${item.order})`;
    }
    console.log(`Seeded ${defaults.length} services.`);
  }

  const testimonialsCount = await sql`SELECT COUNT(*) as c FROM testimonials`;
  if (Number(testimonialsCount[0]?.c) === 0) {
    const defaults = [
      { quote: 'Working with OneBridge completely changed how we view marketing. They actually cared about ROI, not just pretty pictures.', name: 'Sarah J.', role: 'Founder, TechFlow', avatar: '👩‍💼', order: 1 },
      { quote: 'The reporting is so transparent. Our lead volume has tripled in 4 months. We finally have a marketing partner we trust.', name: 'Michael T.', role: 'CEO, ServicePro', avatar: '👨‍💼', order: 2 },
      { quote: 'Finally, an agency that doesn\'t just promise the world and disappear. They deliver week after week.', name: 'Elena R.', role: 'Marketing Director, RetailHQ', avatar: '👩‍💼', order: 3 },
    ];

    for (const item of defaults) {
      await sql`INSERT INTO testimonials (quote, name, role, avatar, order)
        VALUES (${item.quote}, ${item.name}, ${item.role}, ${item.avatar}, ${item.order})`;
    }
    console.log(`Seeded ${defaults.length} testimonials.`);
  }

  console.log('Database seeded successfully.');
  process.exit(0);
}

seed().catch((err) => { console.error(err); process.exit(1); });
