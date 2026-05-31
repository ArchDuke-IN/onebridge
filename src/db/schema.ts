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
