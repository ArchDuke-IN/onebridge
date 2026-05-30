import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GridMaster Case Study',
  description: 'How One Bridge Marketing scaled a brand by 5x with complete UI/UX redesign, aggressive Meta ad funnel, and automated email sequences.',
  alternates: {
    canonical: `${siteConfig.url}/case-studies/gridmaster`,
  },
};

export default function GridMasterCaseStudy() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-surface-base py-24 px-6 md:px-12 border-b border-text-tertiary/20">
        <div className="max-w-[1200px] mx-auto w-full">
          <Link href="/" className="text-text-tertiary hover:text-surface-raised transition-colors motion-duration-fast text-sm mb-8 inline-block">&larr; Back to Home</Link>
          <h1 className="font-fjalla text-6xl md:text-8xl text-text-secondary uppercase leading-[0.9] mb-6">GridMaster Campaign</h1>
          <p className="text-xl text-text-tertiary max-w-2xl font-medium">How we scaled a brand&apos;s lead flow by 480% through complete digital transformation.</p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-fjalla text-3xl text-text-secondary uppercase mb-4">The Challenge</h2>
            <p className="text-text-tertiary leading-relaxed font-medium">
              A premier service provider was spending $4k/mo on ads with zero attribution and a messy visual identity. They needed a cohesive growth engine, not scattered gigs.
            </p>
          </div>
          <div>
            <h2 className="font-fjalla text-3xl text-text-secondary uppercase mb-4">The Result</h2>
            <p className="text-text-tertiary leading-relaxed font-medium">
              +480% lead flow within 90 days. Complete brand transformation. A predictable, scalable acquisition system running on autopilot.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
