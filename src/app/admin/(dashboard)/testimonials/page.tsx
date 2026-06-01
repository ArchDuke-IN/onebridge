import { db } from '@/db';
import { testimonials } from '@/db/schema';
import { asc } from 'drizzle-orm';
import { TestimonialsEditor } from './testimonials-editor';

export default async function AdminTestimonialsPage() {
  const items = await db.select().from(testimonials).orderBy(asc(testimonials.order));

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Testimonials</h1>
      </div>
      <TestimonialsEditor items={items} />
    </div>
  );
}
