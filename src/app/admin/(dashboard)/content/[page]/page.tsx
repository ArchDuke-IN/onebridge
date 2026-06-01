import { auth } from '@/auth';
import { db } from '@/db';
import { pageContent } from '@/db/schema';
import { eq, asc } from 'drizzle-orm';
import { redirect } from 'next/navigation';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageContentEditor } from './editor';
import { ArrowLeft } from 'lucide-react';

const pageMeta: Record<string, string> = {
  home: 'Home Page',
  about: 'About Us',
  services: 'Services',
  contact: 'Contact',
  projects: 'Our Work',
};

export default async function AdminContentPageEditor({ params }: { params: Promise<{ page: string }> }) {
  const session = await auth();
  if (!session?.user) redirect('/admin/login');

  const { page } = await params;
  const label = pageMeta[page] || page.charAt(0).toUpperCase() + page.slice(1);

  const blocks = await db
    .select()
    .from(pageContent)
    .where(eq(pageContent.page, page))
    .orderBy(asc(pageContent.section), asc(pageContent.key));

  if (blocks.length === 0 && !pageMeta[page]) {
    notFound();
  }

  const sections = groupBySection(blocks);

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/content" className="text-gray-400 hover:text-gray-600 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{label}</h1>
          <p className="text-sm text-gray-500 mt-1">Edit content for each section below</p>
        </div>
      </div>

      {Object.keys(sections).length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <p className="text-gray-500">No content fields found for this page.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(sections).map(([section, fields]) => (
            <SectionEditor key={section} page={page} section={section} fields={fields} />
          ))}
        </div>
      )}
    </div>
  );
}

function groupBySection(blocks: Array<{ id: number; page: string; section: string; key: string; value: string }>) {
  const groups: Record<string, Array<{ id: number; key: string; value: string }>> = {};
  for (const b of blocks) {
    if (!groups[b.section]) groups[b.section] = [];
    groups[b.section].push({ id: b.id, key: b.key, value: b.value });
  }
  return groups;
}

function SectionEditor({ page, section, fields }: { page: string; section: string; fields: Array<{ id: number; key: string; value: string }> }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden" id={`section-${section}`}>
      <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-900 capitalize">{section.replace(/_/g, ' ')}</h2>
      </div>
      <PageContentEditor page={page} section={section} fields={fields} />
    </div>
  );
}
