import { db } from '@/db';
import { posts, pageViews, pageContent } from '@/db/schema';
import { count, eq, sql } from 'drizzle-orm';
import { FileText, Eye, Layout, BarChart3 } from 'lucide-react';

export default async function AdminDashboard() {
  const postCount = db.select({ value: count() }).from(posts).get()?.value ?? 0;
  const publishedCount = db.select({ value: count() }).from(posts).where(eq(posts.published, true)).get()?.value ?? 0;
  const contentCount = db.select({ value: count() }).from(pageContent).get()?.value ?? 0;
  const totalViews = db.select({ value: sql<number>`SUM(${pageViews.count})` }).from(pageViews).get()?.value ?? 0;

  const recentPosts = db.select({ title: posts.title, createdAt: posts.createdAt, published: posts.published })
    .from(posts).orderBy(sql`${posts.createdAt} DESC`).limit(5).all();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard icon={FileText} label="Total Posts" value={postCount} color="blue" />
        <StatCard icon={Eye} label="Published" value={publishedCount} color="green" />
        <StatCard icon={Layout} label="Content Blocks" value={contentCount} color="purple" />
        <StatCard icon={BarChart3} label="Page Views" value={totalViews} color="orange" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h2>
        {recentPosts.length === 0 ? (
          <p className="text-gray-500 text-sm">No posts yet.</p>
        ) : (
          <div className="space-y-3">
            {recentPosts.map((post, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <span className="text-sm font-medium text-gray-800">{post.title}</span>
                <div className="flex items-center gap-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${post.published ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                    {post.published ? 'Published' : 'Draft'}
                  </span>
                  <span className="text-xs text-gray-400">{post.createdAt?.slice(0, 10)}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, color }: { icon: any; label: string; value: number | string; color: string }) {
  const colors: Record<string, string> = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
    orange: 'bg-orange-50 text-orange-600',
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className={`w-10 h-10 rounded-lg ${colors[color]} flex items-center justify-center mb-4`}>
        <Icon className="w-5 h-5" />
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
  );
}
