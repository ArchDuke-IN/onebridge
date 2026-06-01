'use client';

import { useState } from 'react';
import type { InferSelectModel } from 'drizzle-orm';
import type { siteImages as siteImagesTable } from '@/db/schema';

type SiteImage = InferSelectModel<typeof siteImagesTable>;

interface Props {
  images: SiteImage[];
}

export function ImageManager({ images: initial }: Props) {
  const [images, setImages] = useState(initial);
  const [saving, setSaving] = useState<Record<number, boolean>>({});
  const [adding, setAdding] = useState(false);
  const [newUrl, setNewUrl] = useState('');
  const [newAlt, setNewAlt] = useState('');

  async function addImage() {
    if (!newUrl.trim()) return;
    setAdding(true);
    const res = await fetch('/api/admin/images', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: newUrl.trim(), alt: newAlt.trim() }),
    });
    if (res.ok) {
      const img = await res.json();
      setImages(prev => [...prev, img]);
      setNewUrl('');
      setNewAlt('');
    }
    setAdding(false);
  }

  async function save(img: SiteImage) {
    setSaving(p => ({ ...p, [img.id]: true }));
    await fetch('/api/admin/images', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: img.id, url: img.url, alt: img.alt }),
    });
    setSaving(p => ({ ...p, [img.id]: false }));
  }

  function update(id: number, field: 'url' | 'alt', value: string) {
    setImages(prev => prev.map(i => i.id === id ? { ...i, [field]: value } : i));
  }

  return (
    <div className="space-y-6">
      <div className="p-4 bg-white rounded-xl border border-gray-200">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Add Image URL</h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <input type="text" value={newUrl} onChange={e => setNewUrl(e.target.value)}
            placeholder="Paste image URL..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          <input type="text" value={newAlt} onChange={e => setNewAlt(e.target.value)}
            placeholder="Alt text (optional)"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          <button onClick={addImage} disabled={adding || !newUrl.trim()}
            className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors whitespace-nowrap"
          >
            {adding ? 'Adding...' : 'Add Image'}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map(img => (
          <div key={img.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="aspect-video bg-gray-100 relative overflow-hidden">
              {img.url ? (
                <img src={img.url} alt={img.alt}
                  className="w-full h-full object-cover"
                  onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400 text-sm">No image set</div>
              )}
            </div>
            <div className="p-4 space-y-3">
              <div className="text-xs font-mono text-gray-400 truncate">{img.key}</div>
              <div>
                <label className="text-xs font-medium text-gray-500">Image URL</label>
                <input type="text" value={img.url}
                  onChange={e => update(img.id, 'url', e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-500">Alt Text</label>
                <input type="text" value={img.alt}
                  onChange={e => update(img.id, 'alt', e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <button onClick={() => save(img)} disabled={saving[img.id]}
                className="w-full bg-blue-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                {saving[img.id] ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
