'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Field {
  id: number;
  key: string;
  value: string;
}

function labelFromKey(key: string): string {
  return key
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function isLongText(key: string): boolean {
  const longKeys = ['description', 'desc', 'message', 'para_1', 'para_2', 'body'];
  return longKeys.some((lk) => key.endsWith(lk) || key.includes(lk));
}

export function PageContentEditor({ page, section, fields }: { page: string; section: string; fields: Field[] }) {
  const router = useRouter();
  const [values, setValues] = useState<Record<string, string>>(() => {
    const map: Record<string, string> = {};
    for (const f of fields) map[`${f.key}`] = f.value;
    return map;
  });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  async function handleSave() {
    setSaving(true);
    setMessage('');

    const blocks = Object.entries(values).map(([key, value]) => ({
      section,
      key,
      value,
    }));

    try {
      const res = await fetch('/api/admin/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page, blocks }),
      });

      if (res.ok) {
        setMessage('Saved');
        setTimeout(() => setMessage(''), 2000);
        router.refresh();
      } else {
        setMessage('Error saving');
      }
    } catch {
      setMessage('Error saving');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="px-6 py-5">
      <div className="space-y-5">
        {fields.map((f) => (
          <div key={f.key}>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              {labelFromKey(f.key)}
            </label>
            {isLongText(f.key) ? (
              <textarea
                value={values[f.key] ?? ''}
                onChange={(e) => setValues((prev) => ({ ...prev, [f.key]: e.target.value }))}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none resize-none transition-colors"
              />
            ) : (
              <input
                type="text"
                value={values[f.key] ?? ''}
                onChange={(e) => setValues((prev) => ({ ...prev, [f.key]: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100">
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-4 py-2 bg-[var(--orange)] text-white text-sm font-medium rounded-lg hover:bg-orange-600 disabled:opacity-50 transition-colors"
        >
          {saving ? 'Saving...' : `Save ${section.replace(/_/g, ' ')}`}
        </button>
        {message && (
          <span className={`text-sm font-medium ${message === 'Saved' ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </span>
        )}
      </div>
    </div>
  );
}
