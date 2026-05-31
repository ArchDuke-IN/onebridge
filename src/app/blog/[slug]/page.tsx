import { notFound } from 'next/navigation';
import Link from 'next/link';
import { db } from '@/db';
import { posts } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const rows = await db.select().from(posts).where(eq(posts.slug, slug));
  const post = rows[0];
  if (!post) return { title: 'Not Found' };
  return { title: `${post.title} | One Bridge Marketing` };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const rows = await db.select().from(posts).where(eq(posts.slug, slug));
  const post = rows[0];
  if (!post || !post.published) notFound();

  return (
    <div className="flex flex-col w-full">
      <section className="bg-[#1a2744] py-28 px-6 md:px-12 border-b-[1.5px] border-gray-900">
        <div className="max-w-[800px] mx-auto">
          <Link href="/blog" className="text-blue-300 hover:text-orange-400 text-sm font-medium mb-6 inline-block transition-colors">
            &larr; Back to Blog
          </Link>
          <h1 className="font-fjalla text-5xl md:text-7xl text-white uppercase leading-[0.9] mb-4">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-lg text-blue-200 font-medium">{post.excerpt}</p>
          )}
          <p className="text-sm text-blue-300/70 mt-4">{post.createdAt?.slice(0, 10)}</p>
        </div>
      </section>

      <section className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-[800px] mx-auto prose prose-lg prose-gray">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </section>
    </div>
  );
}
