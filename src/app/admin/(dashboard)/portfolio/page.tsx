import { db } from '@/db';
import { portfolioItems } from '@/db/schema';
import { asc } from 'drizzle-orm';
import { PortfolioEditor } from './portfolio-editor';

export default async function AdminPortfolioPage() {
  const items = await db.select().from(portfolioItems).orderBy(asc(portfolioItems.order));

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Portfolio</h1>
      </div>
      <PortfolioEditor items={items} />
    </div>
  );
}
