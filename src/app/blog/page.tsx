import Link from 'next/link';
import { db } from '@/db';
import { posts } from '@/db/schema';
import { desc, eq } from 'drizzle-orm';
import { Metadata } from 'next';
import * as motion from 'framer-motion/client';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Blog | OneBridge Marketing',
  description: 'Insights, strategies, and stories from the team at OneBridge Marketing.',
};

export default async function BlogPage() {
  const allPosts = await db.select().from(posts).where(eq(posts.published, true)).orderBy(desc(posts.createdAt));

  return (
    <div className="flex flex-col w-full">
      <section className="max-w-[1200px] mx-auto px-6 pt-20 md:pt-28 pb-16 md:pb-24 w-full">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[var(--navy)] leading-[1.15] mb-6">Our Blog</h1>
          <p className="text-lg md:text-xl text-[var(--text)] leading-relaxed max-w-2xl">
            Insights, strategies, and stories from the team.
          </p>
        </motion.div>
      </section>

      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 w-full">
          {allPosts.length === 0 ? (
            <p className="text-[var(--text)] text-center py-20">No posts yet. Check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {allPosts.map((post, i) => (
                <motion.div key={post.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                  <Link href={`/blog/${post.slug}`}
                    className="block border border-[var(--border)] bg-white rounded-lg p-6 hover:border-[var(--navy)] transition-colors h-full cursor-pointer"
                  >
                    <p className="text-xs text-[var(--text)] mb-2">{post.createdAt?.slice(0, 10)}</p>
                    <h3 className="text-lg text-[var(--navy)] font-[var(--font-satoshi)] mb-2 leading-snug">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-sm text-[var(--text)] leading-relaxed">{post.excerpt}</p>
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
