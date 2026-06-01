'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { InferSelectModel } from 'drizzle-orm';
import type { portfolioItems as portfolioItemsTable } from '@/db/schema';

const toTagsInput = (tags: string) => {
  try {
    const parsed = JSON.parse(tags);
    return Array.isArray(parsed) ? parsed.join(', ') : tags;
  } catch {
    return tags;
  }
};

const toTagsJson = (value: string) => {
  const tags = value.split(',').map(tag => tag.trim()).filter(Boolean);
  return JSON.stringify(tags);
};

type PortfolioItem = InferSelectModel<typeof portfolioItemsTable> & { tagsInput: string };

export function PortfolioEditor({ items: initial }: { items: InferSelectModel<typeof portfolioItemsTable>[] }) {
  const router = useRouter();
  const [items, setItems] = useState<PortfolioItem[]>(
    initial.map(item => ({ ...item, tagsInput: toTagsInput(item.tags) }))
  );
  const [savingId, setSavingId] = useState<number | null>(null);
  const [adding, setAdding] = useState(false);

  function update(id: number, field: keyof PortfolioItem, value: string | number | boolean) {
    setItems(prev => prev.map(item => (item.id === id ? { ...item, [field]: value } : item)));
  }

  async function save(item: PortfolioItem) {
    setSavingId(item.id);
    await fetch('/api/admin/portfolio', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: item.id,
        slug: item.slug,
        label: item.label,
        title: item.title,
        subtitle: item.subtitle,
        description: item.description,
        result: item.result,
        image: item.image,
        imageEmoji: item.imageEmoji,
        tags: toTagsJson(item.tagsInput),
        order: item.order,
        published: item.published,
      }),
    });
    setSavingId(null);
    router.refresh();
  }

  async function addItem() {
    setAdding(true);
    await fetch('/api/admin/portfolio', { method: 'POST' });
    setAdding(false);
    router.refresh();
  }

  async function removeItem(id: number) {
    await fetch('/api/admin/portfolio', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setItems(prev => prev.filter(item => item.id !== id));
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">Manage portfolio cards, images, tags, and results.</p>
        <button
          onClick={addItem}
          disabled={adding}
          className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {adding ? 'Adding...' : 'Add Portfolio Item'}
        </button>
      </div>

      {items.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <p className="text-gray-500">No portfolio items yet. Add one to get started.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {items.map(item => (
            <div key={item.id} className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{item.title || 'Untitled Portfolio Item'}</h3>
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      checked={item.published}
                      onChange={e => update(item.id, 'published', e.target.checked)}
                      className="rounded border-gray-300"
                    />
                    Published
                  </label>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-xs text-red-600 hover:text-red-700 font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Title">
                  <input
                    value={item.title}
                    onChange={e => update(item.id, 'title', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </Field>
                <Field label="Subtitle">
                  <input
                    value={item.subtitle}
                    onChange={e => update(item.id, 'subtitle', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </Field>
                <Field label="Label">
                  <input
                    value={item.label}
                    onChange={e => update(item.id, 'label', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </Field>
                <Field label="Result">
                  <input
                    value={item.result}
                    onChange={e => update(item.id, 'result', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </Field>
                <Field label="Slug (optional)">
                  <input
                    value={item.slug}
                    onChange={e => update(item.id, 'slug', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </Field>
                <Field label="Order">
                  <input
                    type="number"
                    value={item.order}
                    onChange={e => update(item.id, 'order', Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </Field>
              </div>

              <Field label="Tags (comma separated)">
                <input
                  value={item.tagsInput}
                  onChange={e => update(item.id, 'tagsInput', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </Field>

              <Field label="Description">
                <textarea
                  value={item.description}
                  onChange={e => update(item.id, 'description', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </Field>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Image URL">
                  <input
                    value={item.image}
                    onChange={e => update(item.id, 'image', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </Field>
                <Field label="Emoji (optional)">
                  <input
                    value={item.imageEmoji}
                    onChange={e => update(item.id, 'imageEmoji', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </Field>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => save(item)}
                  disabled={savingId === item.id}
                  className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {savingId === item.id ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block text-sm text-gray-600">
      <span className="block text-xs font-semibold text-gray-500 mb-1">{label}</span>
      {children}
    </label>
  );
}
