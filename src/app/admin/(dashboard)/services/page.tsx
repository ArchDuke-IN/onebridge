import { db } from '@/db';
import { services } from '@/db/schema';
import { asc } from 'drizzle-orm';
import { ServicesEditor } from './services-editor';

export default async function AdminServicesPage() {
  const items = await db.select().from(services).orderBy(asc(services.order));

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Services</h1>
      </div>
      <ServicesEditor items={items} />
    </div>
  );
}
