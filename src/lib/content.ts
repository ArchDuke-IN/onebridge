import { db } from '@/db';
import { pageContent } from '@/db/schema';
import { eq } from 'drizzle-orm';

export type ContentMap = Record<string, string>;

let cache: Record<string, Promise<ContentMap> | undefined> = {};

export async function getPageContent(page: string): Promise<ContentMap> {
  if (!cache[page]) {
    cache[page] = (async () => {
      const rows = await db
        .select()
        .from(pageContent)
        .where(eq(pageContent.page, page));
      const map: ContentMap = {};
      for (const row of rows) {
        map[`${row.section}.${row.key}`] = row.value;
      }
      return map;
    })();
  }
  return cache[page]!;
}

export function clearContentCache() {
  cache = {};
}
