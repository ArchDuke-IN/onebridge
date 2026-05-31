'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Block {
  id: number;
  page: string;
  section: string;
  key: string;
  value: string;
}

export function ContentEditor({ block }: { block: Block }) {
  const router = useRouter();
  const [value, setValue] = useState(block.value);
  const [saving, setSaving] = useState(false);

  async function handleSave() {
    setSaving(true);
    await fetch('/api/admin/content', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: block.id, value }),
    });
    setSaving(false);
    router.refresh();
  }

  return (
    <div className="px-6 py-4">
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-medium text-gray-700">
          {block.section}.{block.key}
        </label>
        <button onClick={handleSave} disabled={saving}
          className="text-xs text-blue-600 hover:text-blue-700 font-medium disabled:opacity-50 flex items-center gap-1"
        >
          {saving ? 'Saving...' : 'Save'}
        </button>
      </div>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={2}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
      />
    </div>
  );
}
