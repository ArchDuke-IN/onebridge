import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import * as motion from 'framer-motion/client';
import { db } from '@/db';
import { portfolioItems, services as servicesTable, testimonials as testimonialsTable } from '@/db/schema';
import { asc, eq } from 'drizzle-orm';
import { getPageContent } from '@/lib/content';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Our Work & Results | One Bridge Marketing',
  description: 'View our case studies and the results we bring to our clients.',
  alternates: { canonical: `${siteConfig.url}/projects` },
};

const parseTags = (tags: string) => {
  try {
    const parsed = JSON.parse(tags);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return tags ? tags.split(',').map(tag => tag.trim()).filter(Boolean) : [];
  }
};

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" }, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } };

export default async function WorkPage() {
  const c = await getPageContent('projects');
  const [caseStudies, services, testimonials] = await Promise.all([
    db.select().from(portfolioItems).where(eq(portfolioItems.published, true)).orderBy(asc(portfolioItems.order)),
    db.select().from(servicesTable).where(eq(servicesTable.published, true)).orderBy(asc(servicesTable.order)),
    db.select().from(testimonialsTable).where(eq(testimonialsTable.published, true)).orderBy(asc(testimonialsTable.order)),
  ]);

  const metrics = [
    { val: c['metrics.stat_1_val'] ?? '300%', label: c['metrics.stat_1_label'] ?? 'Avg Reach Increase' },
    { val: c['metrics.stat_2_val'] ?? '5x', label: c['metrics.stat_2_label'] ?? 'Lead Flow Growth' },
    { val: c['metrics.stat_3_val'] ?? '40+', label: c['metrics.stat_3_label'] ?? 'Active Campaigns' },
    { val: c['metrics.stat_4_val'] ?? '100%', label: c['metrics.stat_4_label'] ?? 'Done-For-You' },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--navy)] via-[#234d7f] to-[var(--navy)] py-20 md:py-32 px-6 md:px-12">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="1200" height="600" fill="url(#dots)" />
          </svg>
        </div>

        <div className="absolute top-10 right-20 w-32 h-32 bg-[var(--orange)] rounded-3xl opacity-20 transform -rotate-12"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#08D9D6] rounded-full opacity-15"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 border-4 border-[var(--orange)] opacity-20 transform rotate-45"></div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 flex items-center gap-3">
              <div className="w-2 h-2 bg-[var(--orange)] rounded-full"></div>
              <span className="text-[var(--orange)] font-bold text-sm uppercase tracking-widest">{c['hero.label'] ?? "Our Portfolio"}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              {c['hero.title'] ?? "Real Results from Real Campaigns"}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed mb-10">
              {c['hero.description'] ?? "Our clients don't just get prettier content. They get stronger businesses. Here's the proof."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* KEY METRICS */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-12 border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {metrics.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-4xl md:text-5xl text-[var(--orange)] font-bold mb-2">{m.val}</div>
                <div className="text-xs md:text-sm text-[var(--text)] uppercase tracking-widest font-semibold">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES - FEATURED */}
      <section className="bg-white py-20 md:py-32 px-6 md:px-12 relative">
        <div className="max-w-[1200px] mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--navy)] mb-4">{c['case_studies.title'] ?? "Featured Case Studies"}</h2>
            <p className="text-lg text-[var(--text)]">{c['case_studies.subtitle'] ?? "Deep dives into our best work. Real numbers. Real impact."}</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group overflow-hidden rounded-2xl border-2 border-[var(--border)] hover:border-[var(--orange)] transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 bg-gradient-to-br from-[var(--navy)] to-[#234d7f] p-8 md:p-12 flex flex-col justify-between min-h-[300px] md:min-h-[280px] relative overflow-hidden">
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-[var(--orange)]/20 rounded-full"></div>
                    <div className="absolute bottom-10 left-4 w-20 h-20 border-4 border-white/20"></div>

                    <div className="relative z-10">
                      <span className="inline-block text-xs text-white/70 uppercase tracking-widest mb-3 font-semibold">{cs.label}</span>
                      {cs.image ? (
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 mb-6 bg-white/10">
                          <img
                            src={cs.image}
                            alt={cs.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="relative w-full aspect-[4/3] rounded-2xl border border-white/20 mb-6 bg-white/10 flex flex-col items-center justify-center text-white/60 text-sm gap-2">
                          <span className="text-4xl">{cs.imageEmoji || '🖼️'}</span>
                          <span>Add portfolio image in Admin</span>
                        </div>
                      )}
                      <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">{cs.title}</h3>
                    </div>

                    <div className="relative z-10">
                      <div className="inline-block bg-[var(--orange)] text-white text-sm md:text-base font-bold py-2.5 px-6 rounded-full">{cs.result}</div>
                    </div>
                  </div>

                  <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {parseTags(cs.tags).map((t) => (
                          <span key={t} className="text-xs uppercase tracking-wider font-semibold bg-[var(--orange)]/10 text-[var(--navy)] px-3 py-1.5 rounded-full border border-[var(--orange)]/20">
                            {t}
                          </span>
                        ))}
                      </div>
                        <h4 className="text-2xl md:text-3xl text-[var(--navy)] font-bold mb-4">{cs.subtitle}</h4>
                        <p className="text-base md:text-lg text-[var(--text)] leading-relaxed mb-6">{cs.description}</p>
                    </div>
                    <div>
                        {cs.slug ? (
                        <Link href={`/case-studies/${cs.slug}`} className="inline-flex items-center gap-2 bg-[var(--navy)] text-white font-bold py-3 px-6 rounded-full hover:bg-[#233558] transition-all group-hover:translate-x-1 duration-200">
                          Read Full Case Study <span>→</span>
                        </Link>
                      ) : (
                        <span className="inline-block text-sm text-gray-400 border border-dashed border-gray-300 px-4 py-2.5 rounded-full cursor-default">Coming Soon</span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES WE SHOWCASE */}
      <section className="bg-gradient-to-br from-[var(--navy)]/5 to-[var(--orange)]/5 py-20 md:py-32 px-6 md:px-12 relative">
        <div className="absolute -top-20 right-10 w-48 h-48 bg-[var(--orange)]/10 rounded-full blur-3xl"></div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div {...fadeUp} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--navy)] mb-4">{c['services.title'] ?? "Services Behind Our Success"}</h2>
            <p className="text-lg text-[var(--text)] max-w-2xl">{c['services.subtitle'] ?? "We don't just execute individual services. We orchestrate them into a unified growth engine for your business."}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-8 border-2 border-[var(--border)] hover:border-[var(--orange)] hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{svc.emoji || '⭐'}</div>
                <h3 className="text-xl font-bold text-[var(--navy)] mb-3">{svc.title}</h3>
                <p className="text-sm text-[var(--text)] leading-relaxed">
                  {svc.description || 'Expert-level execution integrated into your overall strategy.'}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-[var(--orange)] font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  Learn more <span>→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - SOCIAL PROOF */}
      <section id="testimonials" className="bg-white py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--navy)] mb-4">{c['testimonials.title'] ?? "What Our Clients Say"}</h2>
            <p className="text-lg text-[var(--text)] max-w-2xl mx-auto">{c['testimonials.subtitle'] ?? "Real feedback from real clients about their experience working with One Bridge."}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-[var(--navy)]/5 to-[var(--orange)]/5 rounded-2xl p-8 border border-[var(--border)] hover:border-[var(--orange)] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-5xl mb-6">{t.avatar || '💬'}</div>
                <div className="text-3xl text-[var(--orange)] mb-4">★★★★★</div>
                <p className="text-[var(--text)] leading-relaxed mb-8 text-lg italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-[var(--border)] pt-6">
                  <div className="font-bold text-[var(--navy)] text-base">{t.name}</div>
                  <div className="text-sm text-[var(--text)]">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[var(--orange)] to-[#FF9F43] py-20 md:py-32 px-6 md:px-12">
        <div className="absolute top-10 right-20 w-32 h-32 bg-white/10 rounded-3xl transform rotate-12"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-24 bg-white/10 transform -rotate-12"></div>

        <div className="max-w-[1200px] mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{c['cta.title'] ?? "Ready to Build Your Success Story?"}</h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              {c['cta.description'] ?? "Let's audit your current strategy, identify what's holding you back, and show you the exact roadmap to growth."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-block bg-white text-[var(--orange)] font-bold py-4 px-10 rounded-full hover:bg-white/90 transition-all shadow-lg">
                {c['cta.button_1'] ?? "Schedule Your Free Audit"}
              </Link>
              <Link href="/services" className="inline-block bg-white/20 border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white/30 transition-all">
                {c['cta.button_2'] ?? "Explore Our Services"}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
