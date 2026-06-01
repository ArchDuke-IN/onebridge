import { auth } from '@/auth';
import { db } from '@/db';

export default async function AdminInquiriesPage() {
  const session = await auth();

  let rows: any[] = [];
  try {
    const { inquiries } = await import('@/db/schema');
    rows = await db.select().from(inquiries).orderBy(inquiries.createdAt);
  } catch {
    // Table may not exist yet
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Inquiries</h1>
      </div>

      {rows.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <p className="text-gray-500">No inquiries yet.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-6 py-3 font-semibold text-gray-700">Date</th>
                <th className="text-left px-6 py-3 font-semibold text-gray-700">Name</th>
                <th className="text-left px-6 py-3 font-semibold text-gray-700">Company</th>
                <th className="text-left px-6 py-3 font-semibold text-gray-700">Email</th>
                <th className="text-left px-6 py-3 font-semibold text-gray-700">Phone</th>
                <th className="text-left px-6 py-3 font-semibold text-gray-700">Message</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row: any) => (
                <tr key={row.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-500 whitespace-nowrap">{row.createdAt?.slice(0, 10)}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{row.name}</td>
                  <td className="px-6 py-4 text-gray-600">{row.company || '-'}</td>
                  <td className="px-6 py-4">
                    <a href={`mailto:${row.email}`} className="text-blue-600 hover:underline">{row.email}</a>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{row.phone || '-'}</td>
                  <td className="px-6 py-4 text-gray-600 max-w-[250px] truncate">{row.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
