import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import * as motion from 'framer-motion/client';
import { db } from '@/db';
import { services as servicesTable } from '@/db/schema';
import { asc, eq } from 'drizzle-orm';
import { getPageContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Our Services | Digital Marketing & Branding',
  description: 'Explore the creative and marketing services we offer, including Social Media Management, Content Creation, Branding, Website Development, and more.',
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
};

const serviceDefaults = [
  {
    id: "01",
    title: "Social Media Management",
    desc: "Strategy, content calendar, posting & community engagement across Instagram, LinkedIn, TikTok & Twitter.",
    color: "bg-[#08D9D6]",
  },
  {
    id: "02",
    title: "Content Creation",
    desc: "Reels, video production, carousels, graphics, copywriting & branded posts that actually convert.",
    color: "bg-[#FF66C4]",
  },
  {
    id: "03",
    title: "Branding & Identity",
    desc: "Logo design, brand guidelines, visual identity systems, color palettes & complete brand positioning.",
    color: "bg-[#FFE135]",
  },
  {
    id: "04",
    title: "Website Development",
    desc: "Fast, mobile-optimized, conversion-focused websites built with modern tech. SEO-ready from day one.",
    color: "bg-white",
    textColor: "text-gray-900",
  },
  {
    id: "05",
    title: "Digital Marketing",
    desc: "Paid Ads (Meta & Google), SEO strategy, email marketing, retargeting & complete marketing automation.",
    color: "bg-[#A05CFF]",
  },
  {
    id: "06",
    title: "Influencer & PR",
    desc: "Creator partnerships, press releases, media outreach, brand collaborations & reputation management.",
    color: "bg-[#52FFC2]",
  }
];

export default async function ServicesPage() {
  const c = await getPageContent('services');
  const serviceRows = await db.select().from(servicesTable).where(eq(servicesTable.published, true)).orderBy(asc(servicesTable.order));
  const services = serviceRows.length
    ? serviceRows.map((s, idx) => ({
        id: String(idx + 1).padStart(2, '0'),
        title: s.title,
        desc: s.description,
        color: s.color || 'bg-white',
        textColor: s.color ? 'text-gray-900' : 'text-gray-900',
      }))
    : serviceDefaults;

  const processSteps = [
    { step: "01", title: c['process.step_1_title'] ?? "Discovery", desc: c['process.step_1_desc'] ?? "We audit your brand, competitors & current performance. No guesswork." },
    { step: "02", title: c['process.step_2_title'] ?? "Strategy", desc: c['process.step_2_desc'] ?? "Custom roadmap designed specifically for your KPIs and target audience." },
    { step: "03", title: c['process.step_3_title'] ?? "Creation", desc: c['process.step_3_desc'] ?? "Our team produces all assets, campaigns, and content in-house." },
    { step: "04", title: c['process.step_4_title'] ?? "Launch & Optimize", desc: c['process.step_4_desc'] ?? "We manage everything, provide weekly reports, and continuously improve." },
  ];

  const resultsStats = [
    { value: c['results.stat_1_val'] ?? "300%", label: c['results.stat_1_label'] ?? "Average Reach Increase" },
    { value: c['results.stat_2_val'] ?? "5x", label: c['results.stat_2_label'] ?? "Lead Flow Growth" },
    { value: c['results.stat_3_val'] ?? "40+", label: c['results.stat_3_label'] ?? "Active Campaigns" },
    { value: c['results.stat_4_val'] ?? "100%", label: c['results.stat_4_label'] ?? "Done-For-You Service" },
  ];

  const whyUsItems = [
    c['why_us.item_1'] ?? "Dedicated team working exclusively on your goals",
    c['why_us.item_2'] ?? "Transparent reporting & weekly performance updates",
    c['why_us.item_3'] ?? "Data-driven strategy with proven ROI focus",
    c['why_us.item_4'] ?? "One point of contact (no agency chaos)",
    c['why_us.item_5'] ?? "Flexible services tailored to your budget",
    c['why_us.item_6'] ?? "On-demand scaling as you grow",
  ];

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--navy)] via-[#234d7f] to-[var(--navy)] py-20 md:py-32 px-6 md:px-12">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="1200" height="600" fill="url(#grid)" />
          </svg>
        </div>

        <div className="absolute top-10 right-20 w-32 h-32 bg-[var(--orange)] rounded-3xl opacity-20 transform -rotate-12"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#08D9D6] rounded-full opacity-15 transform rotate-45"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 border-4 border-[var(--orange)] opacity-20"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 flex items-center gap-3">
              <div className="w-2 h-2 bg-[var(--orange)] rounded-full"></div>
              <span className="text-[var(--orange)] font-bold text-sm uppercase tracking-widest">{c['hero.label'] ?? "Our Services"}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              {c['hero.title'] ?? "Everything You Need to Dominate Digital."}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed mb-10">
              {c['hero.description'] ?? "Customized, end-to-end services designed to grow your business. One dedicated team. One unified strategy."}
            </p>
            <Link href="/contact" className="inline-block bg-[var(--orange)] text-white font-bold py-3.5 px-10 rounded-full text-lg hover:scale-105 hover:shadow-lg transition-all duration-200 shadow-lg">
              {c['hero.cta'] ?? "Get Started Today"}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-white py-20 md:py-32 px-6 md:px-12 relative">
        <div className="absolute top-20 left-1/4 w-48 h-48 bg-[var(--orange)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-[var(--navy)]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--navy)] mb-4">{c['capabilities.title'] ?? "Core Capabilities"}</h2>
            <p className="text-lg text-[var(--text)] max-w-2xl">{c['capabilities.subtitle'] ?? "Full-service digital solutions covering every aspect of modern marketing"}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`${service.color} ${service.textColor || 'text-gray-900'} p-8 md:p-10 hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden`}
              >
                {idx % 2 === 0 && (
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/20 rounded-full"></div>
                )}
                {idx % 3 === 0 && (
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-white/30"></div>
                )}
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center text-white font-bold text-lg mb-4">{service.id}</div>
                  <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${service.textColor || 'text-gray-900'}`}>{service.title}</h3>
                  <p className={`text-base md:text-lg leading-relaxed mb-6 ${service.textColor ? 'text-gray-900/80' : 'text-gray-800'}`}>{service.desc}</p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More <span>→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="bg-[var(--navy)] py-20 md:py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 border-4 border-[var(--orange)]/30 rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-[var(--orange)]/10 rounded-full"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{c['process.title'] ?? "Our Process"}</h2>
            <p className="text-lg text-white/70">{c['process.subtitle'] ?? "Proven, repeatable methodology applied uniquely to every client"}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--orange)] text-white font-bold text-2xl rounded-2xl mb-6 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.desc}</p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-1 bg-[var(--orange)] transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="bg-white py-20 md:py-32 px-6 md:px-12 relative">
        <div className="absolute top-20 left-1/4 w-48 h-48 bg-[var(--orange)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-[var(--navy)]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--navy)] mb-4">{c['results.title'] ?? "Results Our Clients See"}</h2>
            <p className="text-lg text-[var(--text)] max-w-2xl">{c['results.subtitle'] ?? "Transparent metrics. Real growth. Delivered consistently."}</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {resultsStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gradient-to-br from-[var(--navy)]/10 to-[var(--orange)]/10 rounded-2xl p-6 md:p-8 text-center border border-[var(--border)] hover:border-[var(--orange)]/50 transition-all"
              >
                <div className="text-4xl md:text-5xl font-bold text-[var(--orange)] mb-2">{stat.value}</div>
                <div className="text-sm md:text-base font-semibold text-[var(--navy)] uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gradient-to-r from-[var(--orange)] to-[#FF9F43] py-20 md:py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-10 right-20 w-32 h-32 bg-white/10 rounded-3xl transform rotate-12"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-24 bg-white/10 transform -rotate-12"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">{c['why_us.title'] ?? "Why Choose OneBridge?"}</h2>
              <ul className="space-y-6">
                {whyUsItems.map((item, idx) => (
                  <motion.li key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="flex gap-4 text-lg text-white/90">
                    <span className="text-white font-bold text-2xl">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white rounded-3xl p-10 md:p-12 shadow-2xl">
              <h3 className="text-2xl font-bold text-[var(--navy)] mb-6">{c['cta_level_up.title'] ?? "Ready to Level Up?"}</h3>
              <p className="text-[var(--text)] mb-8 leading-relaxed">
                {c['cta_level_up.description'] ?? "Book a free consultation. We'll audit your current strategy, identify gaps, and show you exactly how we can help. No sales pitch, just strategy."}
              </p>
              <Link href="/contact" className="inline-block w-full text-center bg-[var(--navy)] text-white font-bold py-3.5 px-8 rounded-full hover:bg-[#233558] transition-colors duration-200">
                {c['cta_level_up.button'] ?? "Schedule Your Free Audit"}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">{c['cta_final.title'] ?? "Let's Build Your Bridge"}</h2>
          <p className="text-lg text-[var(--text)] mb-8">{c['cta_final.description'] ?? "Stop spinning your wheels. Start seeing real growth."}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-[var(--navy)] text-white font-bold py-3.5 px-8 rounded-full hover:bg-[#233558] transition-colors">
              {c['cta_final.button_1'] ?? "Get Started"}
            </Link>
            <Link href="/projects" className="inline-block bg-white border-2 border-[var(--navy)] text-[var(--navy)] font-bold py-3.5 px-8 rounded-full hover:bg-[var(--navy)] hover:text-white transition-all">
              {c['cta_final.button_2'] ?? "See Our Work"}
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
