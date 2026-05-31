import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  role: text('role').notNull().default('admin'),
  createdAt: text('created_at').notNull().default('2025-01-01T00:00:00.000Z'),
});

export const posts = sqliteTable('posts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  content: text('content').notNull().default(''),
  excerpt: text('excerpt').notNull().default(''),
  published: integer('published', { mode: 'boolean' }).notNull().default(false),
  image: text('image'),
  authorId: integer('author_id').references(() => users.id),
  createdAt: text('created_at').notNull().default('2025-01-01T00:00:00.000Z'),
  updatedAt: text('updated_at').notNull().default('2025-01-01T00:00:00.000Z'),
});

export const pageContent = sqliteTable('page_content', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  page: text('page').notNull(),
  section: text('section').notNull(),
  key: text('key').notNull(),
  value: text('value').notNull().default(''),
  updatedAt: text('updated_at').notNull().default('2025-01-01T00:00:00.000Z'),
});

export const pageViews = sqliteTable('page_views', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  path: text('path').notNull(),
  date: text('date').notNull(),
  count: integer('count').notNull().default(1),
});
