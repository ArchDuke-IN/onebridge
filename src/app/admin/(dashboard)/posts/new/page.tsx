'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function NewPostPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setError('');

    const form = new FormData(e.currentTarget);
    const title = form.get('title') as string;
    const slug = (form.get('slug') as string) || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const content = form.get('content') as string;
    const excerpt = form.get('excerpt') as string;
    const published = form.has('published');

    const res = await fetch('/api/admin/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, slug, content, excerpt, published }),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || 'Failed to create post');
      setSaving(false);
      return;
    }

    router.push('/admin/posts');
    router.refresh();
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">New Post</h1>
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1.5">Title</label>
            <input id="title" name="title" type="text" required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1.5">Slug (leave blank to auto-generate)</label>
            <input id="slug" name="slug" type="text"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1.5">Excerpt (short summary)</label>
            <textarea id="excerpt" name="excerpt" rows={2}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1.5">Content (HTML)</label>
            <textarea id="content" name="content" rows={16}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-y font-mono text-sm"
              placeholder="<h1>Your content here...</h1>"
            />
          </div>

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="published" defaultChecked className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <span className="text-sm font-medium text-gray-700">Publish immediately</span>
          </label>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 text-sm px-4 py-2.5 rounded-lg border border-red-200">{error}</div>
        )}

        <div className="flex items-center gap-4">
          <button type="submit" disabled={saving}
            className="bg-blue-600 text-white font-medium py-2.5 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {saving ? 'Saving...' : 'Create Post'}
          </button>
          <button type="button" onClick={() => router.back()}
            className="text-gray-600 font-medium py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
