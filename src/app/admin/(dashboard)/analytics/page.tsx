import { auth } from '@/auth';
import { db } from '@/db';
import { pageViews } from '@/db/schema';
import { redirect } from 'next/navigation';
import { sql } from 'drizzle-orm';
import { BarChart3, TrendingUp, Calendar } from 'lucide-react';

export default async function AdminAnalyticsPage() {
  const session = await auth();
  if (!session?.user) redirect('/admin/login');

  const [viewsRow, pagesRow, todayRow, topPages, last14Days] = await Promise.all([
    db.select({ value: sql<number>`COALESCE(SUM(${pageViews.count}), 0)` }).from(pageViews),
    db.select({ value: sql<number>`COUNT(DISTINCT ${pageViews.path})` }).from(pageViews),
    db.select({ value: sql<number>`COALESCE(SUM(${pageViews.count}), 0)` }).from(pageViews).where(sql`date = ${new Date().toISOString().slice(0, 10)}`),
    db.select({
      path: pageViews.path,
      total: sql<number>`SUM(${pageViews.count})`,
    }).from(pageViews).groupBy(pageViews.path).orderBy(sql`SUM(${pageViews.count}) DESC`).limit(10),
    db.select({
      date: pageViews.date,
      total: sql<number>`SUM(${pageViews.count})`,
    }).from(pageViews).groupBy(pageViews.date).orderBy(sql`${pageViews.date} DESC`).limit(14),
  ]);
  const totalViews = viewsRow[0]?.value ?? 0;
  const uniquePages = pagesRow[0]?.value ?? 0;
  const todayViews = todayRow[0]?.value ?? 0;
  const chartData = last14Days.reverse();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
            <BarChart3 className="w-5 h-5" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{totalViews}</p>
          <p className="text-sm text-gray-500 mt-1">Total Page Views</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center mb-4">
            <TrendingUp className="w-5 h-5" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{uniquePages}</p>
          <p className="text-sm text-gray-500 mt-1">Unique Pages</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
            <Calendar className="w-5 h-5" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{todayViews}</p>
          <p className="text-sm text-gray-500 mt-1">Today's Views</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Last 14 Days</h2>
          {chartData.length === 0 ? (
            <p className="text-gray-500 text-sm">No data yet.</p>
          ) : (
            <div className="space-y-2">
              {chartData.map((d) => (
                <div key={d.date} className="flex items-center gap-4">
                  <span className="text-xs text-gray-500 w-24 shrink-0">{d.date}</span>
                  <div className="flex-1 h-5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: `${Math.min(100, (d.total / Math.max(...chartData.map(x => x.total))) * 100)}%` }} />
                  </div>
                  <span className="text-xs font-medium text-gray-600 w-10 text-right">{d.total}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Pages</h2>
          {topPages.length === 0 ? (
            <p className="text-gray-500 text-sm">No data yet.</p>
          ) : (
            <div className="space-y-3">
              {topPages.map((p, i) => (
                <div key={p.path} className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-gray-400 w-5">{i + 1}</span>
                    <span className="text-sm text-gray-700">{p.path}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{p.total}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
