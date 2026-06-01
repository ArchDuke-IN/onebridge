import { auth } from '@/auth';
import { db } from '@/db';
import { pageContent } from '@/db/schema';
import { count } from 'drizzle-orm';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { FileText, Layout, Megaphone, Users, Briefcase } from 'lucide-react';

const pageMeta: Record<string, { label: string; icon: any; description: string }> = {
  home: { label: 'Home Page', icon: Layout, description: 'Hero, problem, services, CTA sections' },
  about: { label: 'About Us', icon: Users, description: 'Method, values, team philosophy' },
  services: { label: 'Services', icon: Megaphone, description: 'Capabilities, process, results, CTAs' },
  contact: { label: 'Contact', icon: FileText, description: 'Hero, audit info, form labels & text' },
  projects: { label: 'Our Work', icon: Briefcase, description: 'Portfolio page hero, testimonials, CTA' },
};

export default async function AdminContentPage() {
  const session = await auth();
  if (!session?.user) redirect('/admin/login');

  const rows = await db
    .select({ page: pageContent.page, count: count() })
    .from(pageContent)
    .groupBy(pageContent.page);

  const pageCounts = Object.fromEntries(rows.map((r) => [r.page, r.count]));

  const pageNames = [...new Set([...Object.keys(pageMeta), ...rows.map((r) => r.page)])].sort();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Site Content</h1>
          <p className="text-sm text-gray-500 mt-1">Select a page to edit its content</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {pageNames.map((name) => {
          const meta = pageMeta[name];
          const Icon = meta?.icon || FileText;
          const count = pageCounts[name] || 0;
          return (
            <Link
              key={name}
              href={`/admin/content/${name}`}
              className="block bg-white rounded-xl border border-gray-200 p-6 hover:border-[var(--orange)] hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-orange-50 text-[var(--orange)] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 group-hover:text-[var(--orange)] transition-colors">
                    {meta?.label || name.charAt(0).toUpperCase() + name.slice(1)}
                  </h3>
                  <p className="text-xs text-gray-500">{count} content {count === 1 ? 'field' : 'fields'}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{meta?.description || 'Edit page content'}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
