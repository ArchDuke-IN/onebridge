'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  published: boolean;
  image: string | null;
}

export function EditPostForm({ post }: { post: Post }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setError('');

    const form = new FormData(e.currentTarget);
    const data = {
      title: form.get('title') as string,
      slug: form.get('slug') as string,
      content: form.get('content') as string,
      excerpt: form.get('excerpt') as string,
      published: form.has('published'),
    };

    const res = await fetch(`/api/admin/posts`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: post.id, ...data }),
    });

    if (!res.ok) {
      const err = await res.json();
      setError(err.error || 'Failed to update');
      setSaving(false);
      return;
    }

    router.push('/admin/posts');
    router.refresh();
  }

  async function handleDelete() {
    if (!confirm('Delete this post permanently?')) return;
    setSaving(true);
    const res = await fetch('/api/admin/posts', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: post.id }),
    });
    if (res.ok) {
      router.push('/admin/posts');
      router.refresh();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1.5">Title</label>
          <input id="title" name="title" type="text" required defaultValue={post.title}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1.5">Slug</label>
          <input id="slug" name="slug" type="text" required defaultValue={post.slug}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1.5">Excerpt</label>
          <textarea id="excerpt" name="excerpt" rows={2} defaultValue={post.excerpt}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1.5">Content (HTML)</label>
          <textarea id="content" name="content" rows={16} defaultValue={post.content}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-y font-mono text-sm"
          />
        </div>

        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" name="published" defaultChecked={post.published} className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <span className="text-sm font-medium text-gray-700">Published</span>
        </label>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 text-sm px-4 py-2.5 rounded-lg border border-red-200">{error}</div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button type="submit" disabled={saving}
            className="bg-blue-600 text-white font-medium py-2.5 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
          <button type="button" onClick={() => router.back()}
            className="text-gray-600 font-medium py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
        </div>
        <button type="button" onClick={handleDelete}
          className="text-red-600 font-medium py-2.5 px-6 rounded-lg hover:bg-red-50 transition-colors"
        >
          Delete
        </button>
      </div>
    </form>
  );
}
