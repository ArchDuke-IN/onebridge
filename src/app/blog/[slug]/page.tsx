import { notFound } from 'next/navigation';
import Link from 'next/link';
import { db } from '@/db';
import { posts } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { Metadata } from 'next';
import * as motion from 'framer-motion/client';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const rows = await db.select().from(posts).where(eq(posts.slug, slug));
  const post = rows[0];
  if (!post) return { title: 'Not Found' };
    return { title: `${post.title} | OneBridge Marketing` };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const rows = await db.select().from(posts).where(eq(posts.slug, slug));
  const post = rows[0];
  if (!post || !post.published) notFound();

  return (
    <div className="flex flex-col w-full">
      <section className="max-w-[1200px] mx-auto px-6 pt-20 md:pt-28 pb-16 md:pb-24 w-full">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-[var(--text)] hover:text-[var(--navy)] transition-colors mb-6 group cursor-pointer">
            <span className="group-hover:-translate-x-0.5 transition-transform">&larr;</span> Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-[var(--navy)] leading-[1.15] mb-4">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-[var(--text)] text-lg">{post.excerpt}</p>
          )}
          <p className="text-sm text-[var(--text)] mt-4">{post.createdAt?.slice(0, 10)}</p>
        </motion.div>
      </section>

      <section className="border-t border-[var(--border)]">
        <div className="max-w-[800px] mx-auto px-6 py-16">
          <div className="prose prose-gray max-w-none prose-headings:font-[var(--font-satoshi)] prose-headings:text-[var(--navy)] prose-a:text-[var(--navy)] prose-a:no-underline hover:prose-a:underline">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </section>
    </div>
  );
}
