import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

const url = process.env.POSTGRES_URL;
const sql = url ? neon(url) : null;

export const db = sql
  ? drizzle(sql, { schema })
  : (null as unknown as ReturnType<typeof drizzle<typeof schema>>);
