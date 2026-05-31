import Link from 'next/link';
import { db } from '@/db';
import { posts } from '@/db/schema';
import { desc, eq } from 'drizzle-orm';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | One Bridge Marketing',
  description: 'Insights, strategies, and stories from the team at One Bridge Marketing.',
};

export default async function BlogPage() {
  const allPosts = db.select().from(posts).where(eq(posts.published, true)).orderBy(desc(posts.createdAt)).all();

  return (
    <div className="flex flex-col w-full">
      <section className="bg-[#1a2744] py-28 px-6 md:px-12 border-b-[1.5px] border-gray-900">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="font-fjalla text-6xl md:text-8xl text-white uppercase leading-[0.88] mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-blue-200 font-medium max-w-2xl mx-auto">
            Insights, strategies, and stories from the team.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 px-6 md:px-12 max-w-[1200px] mx-auto w-full">
        {allPosts.length === 0 ? (
          <p className="text-gray-500 text-center py-20">No posts yet. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border-[1.5px] border-gray-900 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] overflow-hidden hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] transition-all"
              >
                <div className="p-6">
                  <p className="text-xs text-gray-400 mb-2">{post.createdAt?.slice(0, 10)}</p>
                  <h3 className="font-fjalla text-xl uppercase text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
