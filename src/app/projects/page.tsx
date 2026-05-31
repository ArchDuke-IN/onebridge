import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import * as motion from 'framer-motion/client';
import { db } from '@/db';
import { siteImages } from '@/db/schema';
import { asc } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Our Work & Results | One Bridge Marketing',
  description: 'View our case studies and the results we bring to our clients.',
  alternates: { canonical: `${siteConfig.url}/projects` },
};

const caseStudies = [
  {
    slug: 'gridmaster',
    label: 'B2B SaaS',
    title: 'GridMaster',
    subtitle: 'B2B SaaS Growth Strategy',
    result: '+480% Lead Flow',
    tags: ['SEO', 'Paid Ads', 'UI/UX'],
    desc: 'Scaled organic traffic by 350% in 6 months and rebuilt the entire conversion funnel.',
  },
  {
    slug: null,
    label: 'DTC Brand',
    title: 'E-Commerce Elite',
    subtitle: 'DTC Brand Scale',
    result: '4.2x ROAS',
    tags: ['Meta Ads', 'Email', 'Branding'],
    desc: 'Achieved a 4.2x return on ad spend through aggressive paid social and email automation.',
  },
  {
    slug: null,
    label: 'Local Services',
    title: 'ServicePro',
    subtitle: 'Local Business Growth',
    result: '3x Lead Volume',
    tags: ['Social Media', 'Content', 'SEO'],
    desc: 'Tripled inbound leads in 4 months through a data-driven social media and local SEO strategy.',
  },
];

const testimonials = [
  { quote: 'Working with OneBridge completely changed how we view marketing. They actually cared about ROI, not just pretty pictures.', name: 'Sarah J.', role: 'Founder, TechFlow' },
  { quote: 'The reporting is so transparent. Our lead volume has tripled in 4 months.', name: 'Michael T.', role: 'CEO, ServicePro' },
  { quote: 'Finally, an agency that doesn\'t just promise the world and disappear.', name: 'Elena R.', role: 'Marketing Director, RetailHQ' },
];

const serviceDefaults = [
  { key: 'project_social_media', name: 'Social Media Management' },
  { key: 'project_content_creation', name: 'Content Creation' },
  { key: 'project_branding', name: 'Branding & Identity' },
  { key: 'project_web_dev', name: 'Website Development' },
  { key: 'project_digital_marketing', name: 'Digital Marketing' },
  { key: 'project_influencer', name: 'Influencer Marketing' },
];

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" }, transition: { duration: 0.5 } };

export default async function WorkPage() {
  const imageRows = await db.select().from(siteImages).orderBy(asc(siteImages.key));
  const imgMap = new Map(imageRows.map(r => [r.key, r.url]));
  const services = serviceDefaults.map(s => ({ ...s, img: imgMap.get(s.key) || '' }));

  return (
    <div className="flex flex-col w-full">

      <section className="max-w-[1200px] mx-auto px-6 pt-20 md:pt-28 pb-16 md:pb-24 w-full">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[var(--navy)] leading-[1.15] mb-6">Case Studies &amp; Work</h1>
          <p className="text-lg md:text-xl text-[var(--text)] leading-relaxed max-w-2xl">
            We believe in earning your business through transparent, undeniable results.
          </p>
        </motion.div>
      </section>

      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 py-12 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: '300%', label: 'Avg Reach Increase' },
              { val: '5x', label: 'Lead Flow Growth' },
              { val: '40+', label: 'Campaigns Launched' },
              { val: '100%', label: 'Done-For-You' },
            ].map((m, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl text-[var(--orange)] font-semibold font-[var(--font-playfair)] mb-1">{m.val}</div>
                <div className="text-xs text-[var(--text)] uppercase tracking-wider">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 w-full">
          <motion.div {...fadeUp} className="mb-12">
            <h2 className="text-2xl md:text-3xl text-[var(--navy)] mb-2">Select Case Studies</h2>
            <p className="text-[var(--text)]">Deep-dives into our best work, with real numbers and honest reporting.</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {caseStudies.map((cs, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-lg border border-[var(--border)] bg-white overflow-hidden"
              >
                <div className="bg-[var(--navy)] p-8 md:p-10 flex flex-col justify-between min-h-[260px]">
                  <div>
                    <span className="inline-block text-xs text-white/60 uppercase tracking-widest mb-3">{cs.label}</span>
                    <h3 className="text-3xl md:text-4xl text-white font-[var(--font-playfair)] leading-tight">{cs.title}</h3>
                  </div>
                  <div className="mt-6">
                    <span className="inline-block bg-[var(--orange)] text-white text-sm font-medium py-1.5 px-4 rounded">{cs.result}</span>
                  </div>
                </div>

                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cs.tags.map(t => (
                        <span key={t} className="text-xs uppercase tracking-wider bg-[var(--border)] text-[var(--text)] px-2.5 py-1 rounded">{t}</span>
                      ))}
                    </div>
                    <h4 className="text-lg text-[var(--navy)] font-medium mb-2">{cs.subtitle}</h4>
                    <p className="text-sm text-[var(--text)]">{cs.desc}</p>
                  </div>
                  <div className="mt-6">
                    {cs.slug ? (
                      <Link href={`/case-studies/${cs.slug}`} className="bg-[var(--navy)] text-white text-sm font-medium py-2.5 px-5 rounded-lg hover:opacity-90 transition-opacity inline-block">
                        Read Case Study &rarr;
                      </Link>
                    ) : (
                      <span className="text-sm text-gray-400 border border-dashed border-gray-300 px-3 py-1.5 rounded">Coming Soon</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl text-[var(--navy)] mb-4">Services We Deliver</h2>
              <p className="text-[var(--text)]">Full-service digital marketing delivered end-to-end by one dedicated team.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.filter(s => s.img).map((svc, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="rounded-lg border border-[var(--border)] bg-white overflow-hidden"
                >
                  <div className="h-32 bg-[var(--navy)] flex items-center justify-center text-white/30 text-xs">
                    {svc.name}
                  </div>
                  <div className="p-3.5">
                    <div className="text-sm text-[var(--navy)] font-medium">{svc.name}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 w-full">
          <motion.div {...fadeUp} className="mb-12">
            <h2 className="text-2xl md:text-3xl text-[var(--navy)] mb-2">What Our Clients Say</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="border border-[var(--border)] bg-white rounded-lg p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[var(--orange)] text-2xl mb-2 font-[var(--font-playfair)]">&ldquo;</div>
                  <p className="text-sm text-[var(--text)] leading-relaxed mb-6">{t.quote}</p>
                </div>
                <div>
                  <div className="text-sm text-[var(--navy)] font-medium">{t.name}</div>
                  <div className="text-xs text-[var(--text)]">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--navy)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 text-center w-full">
          <h2 className="text-2xl md:text-3xl text-white mb-4 font-[var(--font-playfair)]">Ready to Build Your Bridge?</h2>
          <p className="text-white/60 text-sm mb-8">Start with a free digital audit. No commitment, just clarity.</p>
          <Link href="/contact" className="border border-white/30 text-white text-sm font-medium py-2.5 px-5 rounded-lg hover:bg-white/10 transition-colors inline-block">
            Get Your Free Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
