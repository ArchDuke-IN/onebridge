import { auth } from '@/auth';
import { db } from '@/db';
import { pageContent } from '@/db/schema';
import { redirect } from 'next/navigation';
import { ContentEditor } from './editor';

export default async function AdminContentPage() {
  const session = await auth();
  if (!session?.user) redirect('/admin/login');

  const content = await db.select().from(pageContent).orderBy(pageContent.page, pageContent.section);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Site Content</h1>
      </div>

      {content.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <p className="text-gray-500">No content blocks found. Run the seed script to populate defaults.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {['home', 'about', 'services'].map((page) => {
            const blocks = content.filter((c) => c.page === page);
            if (blocks.length === 0) return null;
            return (
              <div key={page} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                  <h2 className="text-lg font-semibold text-gray-900 capitalize">{page} Page</h2>
                </div>
                <div className="divide-y divide-gray-100">
                  {blocks.map((block) => (
                    <ContentEditor key={block.id} block={block} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
