import { notFound } from 'next/navigation';
import { db } from '@/db';
import { posts } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { EditPostForm } from './form';

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const rows = await db.select().from(posts).where(eq(posts.id, Number(id)));
  const post = rows[0];
  if (!post) notFound();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Edit Post</h1>
      </div>
      <EditPostForm post={post} />
    </div>
  );
}
