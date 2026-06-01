import { pgTable, serial, text, integer, boolean } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  role: text('role').notNull().default('admin'),
  createdAt: text('created_at').notNull().default('2025-01-01T00:00:00.000Z'),
});

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  content: text('content').notNull().default(''),
  excerpt: text('excerpt').notNull().default(''),
  published: boolean('published').notNull().default(false),
  image: text('image'),
  authorId: integer('author_id').references(() => users.id),
  createdAt: text('created_at').notNull().default('2025-01-01T00:00:00.000Z'),
  updatedAt: text('updated_at').notNull().default('2025-01-01T00:00:00.000Z'),
});

export const pageContent = pgTable('page_content', {
  id: serial('id').primaryKey(),
  page: text('page').notNull(),
  section: text('section').notNull(),
  key: text('key').notNull(),
  value: text('value').notNull().default(''),
  updatedAt: text('updated_at').notNull().default('2025-01-01T00:00:00.000Z'),
});

export const pageViews = pgTable('page_views', {
  id: serial('id').primaryKey(),
  path: text('path').notNull(),
  date: text('date').notNull(),
  count: integer('count').notNull().default(1),
});

export const siteImages = pgTable('site_images', {
  id: serial('id').primaryKey(),
  key: text('key').notNull().unique(),
  url: text('url').notNull().default(''),
  alt: text('alt').notNull().default(''),
  updatedAt: text('updated_at').notNull().default('2025-01-01T00:00:00.000Z'),
});

// Portfolio & Case Studies
export const portfolioItems = pgTable('portfolio_items', {
  id: serial('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  label: text('label').notNull(),
  title: text('title').notNull(),
  subtitle: text('subtitle').notNull(),
  description: text('description').notNull().default(''),
  result: text('result').notNull(),
  image: text('image').notNull().default(''),
  imageEmoji: text('image_emoji').notNull().default(''),
  tags: text('tags').notNull().default(''), // JSON stringified array
  order: integer('order').notNull().default(0),
  published: boolean('published').notNull().default(true),
  createdAt: text('created_at').notNull().default('2025-01-01T00:00:00.000Z'),
  updatedAt: text('updated_at').notNull().default('2025-01-01T00:00:00.000Z'),
});

// Inquiries (contact form submissions)
export const inquiries = pgTable('inquiries', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  company: text('company'),
  email: text('email').notNull(),
  phone: text('phone'),
  message: text('message').notNull(),
  createdAt: text('created_at').notNull().default('2025-01-01T00:00:00.000Z'),
});

// Services
export const services = pgTable('services', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull().default(''),
  emoji: text('emoji').notNull().default(''),
  color: text('color').notNull().default(''),
  order: integer('order').notNull().default(0),
  published: boolean('published').notNull().default(true),
  createdAt: text('created_at').notNull().default('2025-01-01T00:00:00.000Z'),
  updatedAt: text('updated_at').notNull().default('2025-01-01T00:00:00.000Z'),
});

// Testimonials
export const testimonials = pgTable('testimonials', {
  id: serial('id').primaryKey(),
  quote: text('quote').notNull(),
  name: text('name').notNull(),
  role: text('role').notNull(),
  avatar: text('avatar').notNull().default(''),
  order: integer('order').notNull().default(0),
  published: boolean('published').notNull().default(true),
  createdAt: text('created_at').notNull().default('2025-01-01T00:00:00.000Z'),
  updatedAt: text('updated_at').notNull().default('2025-01-01T00:00:00.000Z'),
});
