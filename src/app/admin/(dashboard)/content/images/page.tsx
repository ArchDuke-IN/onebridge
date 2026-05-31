import { db } from '@/db';
import { siteImages } from '@/db/schema';
import { asc } from 'drizzle-orm';
import { ImageManager } from './manager';

export const dynamic = 'force-dynamic';

export default async function AdminImagesPage() {
  const images = await db.select().from(siteImages).orderBy(asc(siteImages.key));

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Site Images</h1>
          <p className="text-gray-500 text-sm mt-1">Manage all images used across the site. Update URLs and alt text.</p>
        </div>
      </div>
      <ImageManager images={images} />
    </div>
  );
}
