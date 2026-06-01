import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import * as motion from 'framer-motion/client';
import { db } from '@/db';
import { portfolioItems, testimonials as testimonialsTable } from '@/db/schema';
import { asc, eq } from 'drizzle-orm';
import { getPageContent } from '@/lib/content';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Our Work & Results | One Bridge Marketing',
  description: 'View our case studies and the results we bring to our clients.',
  alternates: { canonical: `${siteConfig.url}/projects` },
};

const defaults = [
  { slug: 'project-one', label: 'Branding', title: 'Project One', subtitle: 'Brand identity', description: '', result: 'Coming Soon', image: '', imageEmoji: '🎯', tags: '[]' },
  { slug: 'project-two', label: 'Social Media', title: 'Project Two', subtitle: 'Social strategy', description: '', result: 'Coming Soon', image: '', imageEmoji: '📱', tags: '[]' },
  { slug: 'project-three', label: 'Web Dev', title: 'Project Three', subtitle: 'Web development', description: '', result: 'Coming Soon', image: '', imageEmoji: '🌐', tags: '[]' },
  { slug: 'project-four', label: 'Marketing', title: 'Project Four', subtitle: 'Marketing campaign', description: '', result: 'Coming Soon', image: '', imageEmoji: '📊', tags: '[]' },
  { slug: 'project-five', label: 'Content', title: 'Project Five', subtitle: 'Content strategy', description: '', result: 'Coming Soon', image: '', imageEmoji: '🎬', tags: '[]' },
];

const defaultTestimonials = [
  { quote: 'Your testimonial here — edit in admin.', name: 'Client Name', role: 'Business Owner' },
  { quote: 'Real feedback from real clients goes here.', name: 'Client Name', role: 'CEO' },
  { quote: 'Share your success story with the world.', name: 'Client Name', role: 'Founder' },
];

export default async function WorkPage() {
  const c = await getPageContent('projects');
  let dbItems = await db.select().from(portfolioItems).where(eq(portfolioItems.published, true)).orderBy(asc(portfolioItems.order));
  let dbTestimonials = await db.select().from(testimonialsTable).where(eq(testimonialsTable.published, true)).orderBy(asc(testimonialsTable.order));

  if (!dbItems.length) {
    const now = new Date().toISOString();
    await db.insert(portfolioItems).values(defaults.map((d, i) => ({ ...d, order: i, published: true, createdAt: now, updatedAt: now })));
    dbItems = await db.select().from(portfolioItems).where(eq(portfolioItems.published, true)).orderBy(asc(portfolioItems.order));
  }

  if (!dbTestimonials.length) {
    const now = new Date().toISOString();
    await db.insert(testimonialsTable).values(defaultTestimonials.map((d, i) => ({ ...d, avatar: '', order: i, published: true, createdAt: now, updatedAt: now })));
    dbTestimonials = await db.select().from(testimonialsTable).where(eq(testimonialsTable.published, true)).orderBy(asc(testimonialsTable.order));
  }

  const caseStudies = dbItems;
  const testimonials = dbTestimonials;

  return (
    <div className="flex flex-col w-full bg-[var(--background)]">

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-6 pt-20 md:pt-28 pb-16 w-full">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[var(--navy)] leading-[1.15] mb-4">
            {c['hero.title'] ?? "Our Work"}
          </h1>
          <p className="text-lg md:text-xl text-[var(--text)] leading-relaxed max-w-2xl">
            {c['hero.description'] ?? "Real campaigns. Real results. Built by us, grown by you."}
          </p>
        </motion.div>
      </section>

      {/* Portfolio Sections - full width */}
      {caseStudies.map((cs, i) => (
        <motion.div
          key={cs.id}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-[var(--border)]"
        >
          {cs.slug ? (
            <Link href={`/case-studies/${cs.slug}`} className="block group">
              <ProjectSection item={cs} />
            </Link>
          ) : (
            <ProjectSection item={cs} />
          )}
        </motion.div>
      ))}

      {/* Testimonials */}
      <section id="testimonials" className="border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl text-[var(--navy)] mb-2">{c['testimonials.title'] ?? "What Our Clients Say"}</h2>
            <p className="text-[var(--text)]">{c['testimonials.subtitle'] ?? "Real feedback from real clients."}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-lg border border-[var(--border)] bg-white"
              >
                <div className="text-xl text-[var(--orange)] mb-3">{'★★★★★'}</div>
                <p className="text-sm text-[var(--text)] leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-[var(--border)] pt-4">
                  <div className="font-medium text-[var(--navy)] text-sm">{t.name}</div>
                  <div className="text-xs text-[var(--text)]">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--navy)]">
        <div className="max-w-[1200px] mx-auto px-6 py-14 md:py-16 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-xl md:text-2xl text-white font-bold mb-2">{c['cta.title'] ?? "Ready to Build Your Success Story?"}</h2>
            <p className="text-white/80 text-sm mb-6 max-w-xl mx-auto">
              {c['cta.description'] ?? "Let's talk about what you need and how we can help."}
            </p>
            <Link href="/contact" className="inline-block bg-white text-[var(--navy)] text-sm font-medium py-2.5 px-5 rounded-lg hover:bg-white/90 transition-colors">
              {c['cta.button_1'] ?? "Get in Touch"}
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

function ProjectSection({ item }: { item: { image: string; imageEmoji: string; label: string; title: string; slug: string | null } }) {
  return (
    <div className="w-full">
      <div className="aspect-[1.84/1] relative overflow-hidden bg-[var(--navy)]/5">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-[var(--navy)]">
            <span className="text-5xl md:text-6xl">{item.imageEmoji || '🖼️'}</span>
            <span className="text-xs uppercase tracking-widest text-[var(--text)]">{item.label}</span>
            <span className="text-sm font-medium">{item.title}</span>
          </div>
        )}
        {item.image && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--navy)]/0 group-hover:bg-[var(--navy)]/50 transition-colors duration-500">
            <span className="text-white text-xs uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.label}</span>
            <span className="text-white text-lg md:text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">{item.title}</span>
          </div>
        )}
      </div>
    </div>
  );
}
