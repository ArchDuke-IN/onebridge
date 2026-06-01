import Image from "next/image";
import Link from "next/link";
import * as motion from "framer-motion/client";
import { getPageContent } from "@/lib/content";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const BridgeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 22 L16 8 L28 22" stroke="#F97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default async function Home() {
  const c = await getPageContent('home');

  const statItems = [
    { val: c['hero.stat_1_val'] ?? "100+", label: c['hero.stat_1_label'] ?? "Projects Delivered" },
    { val: c['hero.stat_2_val'] ?? "99%", label: c['hero.stat_2_label'] ?? "Client Satisfaction" },
  ];

  const problemCards = [
    { title: c['problem.card_1_title'] ?? "No Time", desc: c['problem.card_1_desc'] ?? "10-14 hour days leave zero room for marketing." },
    { title: c['problem.card_2_title'] ?? "No Strategy", desc: c['problem.card_2_desc'] ?? "Posting without a plan is just noise." },
    { title: c['problem.card_3_title'] ?? "No Team", desc: c['problem.card_3_desc'] ?? "Hiring specialists is expensive and complex." },
    { title: c['problem.card_4_title'] ?? "No Results", desc: c['problem.card_4_desc'] ?? "Money spent without accountability is wasted." },
  ];

  const impactStats = [
    { val: c['impact.stat_1_val'] ?? "300%", label: c['impact.stat_1_label'] ?? "Avg reach increase" },
    { val: c['impact.stat_2_val'] ?? "5x", label: c['impact.stat_2_label'] ?? "Lead flow growth" },
    { val: c['impact.stat_3_val'] ?? "12+", label: c['impact.stat_3_label'] ?? "Hours saved per week" },
    { val: c['impact.stat_4_val'] ?? "100%", label: c['impact.stat_4_label'] ?? "Done-for-you" },
  ];

  const serviceCards = [
    { name: c['services.card_1_name'] ?? "Social Media", outline: c['services.card_1_desc'] ?? "Strategy, content, posting & engagement." },
    { name: c['services.card_2_name'] ?? "Content Creation", outline: c['services.card_2_desc'] ?? "Reels, videos, graphics & branded posts." },
    { name: c['services.card_3_name'] ?? "Branding & Identity", outline: c['services.card_3_desc'] ?? "Logos, positioning & visual identity." },
    { name: c['services.card_4_name'] ?? "Web Development", outline: c['services.card_4_desc'] ?? "Fast, conversion-focused websites." },
  ];

  const auditChecks = [
    { label: c['final_cta.check_1'] ?? "SEO & Website Performance", desc: c['final_cta.check_1_desc'] ?? "Find out why visitors leave and how to keep them." },
    { label: c['final_cta.check_2'] ?? "Social Media Presence", desc: c['final_cta.check_2_desc'] ?? "See where your brand stands vs. competitors." },
    { label: c['final_cta.check_3'] ?? "Competitor Benchmarking", desc: c['final_cta.check_3_desc'] ?? "Know exactly what they're doing that you're not." },
  ];

  return (
    <div className="flex flex-col w-full">

      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-[var(--background)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24 lg:py-32 w-full relative">

          <svg className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 text-[var(--navy)]/3 pointer-events-none" viewBox="0 0 400 400" fill="none">
            <path d="M40 360 L200 40 L360 360" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.15"/>
            <path d="M80 360 L200 80 L320 360" stroke="#F97316" strokeWidth="3" strokeLinecap="round" opacity="0.12"/>
          </svg>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo.jpeg" alt="" className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover border-2 border-[var(--navy)]" />
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[var(--text)] font-bold">OneBridge Marketing</span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-[var(--orange)]"></div>
                    <span className="text-[10px] text-[var(--orange)] font-bold uppercase tracking-wider">Growth Agency</span>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-[var(--font-satoshi)] text-[var(--navy)] leading-[1.05] tracking-tighter mb-6">
                We build the{' '}
                <span className="text-[var(--orange)] relative">
                  bridge
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
                    <path d="M0 8 L100 0 L200 8" stroke="#F97316" strokeWidth="2" opacity="0.5"/>
                  </svg>
                </span>{' '}
                between your brand and growth.
              </h1>

              <p className="text-[var(--text)] text-base md:text-lg leading-relaxed max-w-lg mb-8">
                {c['hero.tagline'] ?? "One team handling your entire digital presence. Strategy, execution, results — delivered end-to-end."}
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link href="/contact" className="bg-[var(--navy)] text-white text-sm font-bold py-3 px-6 hover:bg-[#233558] transition-all active:scale-[0.97]">
                  {c['hero.cta'] ?? "Get Started"}
                </Link>
                <Link href="/projects" className="text-[var(--navy)] text-sm font-bold py-3 px-6 bg-white hover:bg-[var(--navy)] hover:text-white transition-all active:scale-[0.97]">
                  View Our Work
                </Link>
              </div>

              <div className="flex items-center gap-8 mt-10 pt-8 border-t border-[var(--border)]">
                {statItems.map((s) => (
                  <div key={s.val} className="flex flex-col">
                    <span className="text-2xl md:text-3xl text-[var(--orange)] font-bold leading-none font-[var(--font-satoshi)]">{s.val}</span>
                    <span className="text-[11px] text-[var(--text)] uppercase tracking-widest mt-1 font-bold">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 w-full max-w-[420px] md:max-w-none"
            >
              <div className="relative">
                <div className="aspect-square relative overflow-hidden bg-[var(--navy)]/5">
                  <Image
                    src="/images/hero-illustration.png"
                    alt=""
                    fill
                    priority
                    sizes="(max-width: 768px) 420px, 480px"
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      <main className="flex flex-col w-full">

        {/* Problem */}
        <section className="bg-white">
          <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-24 w-full">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20">
              <motion.div {...fadeUp} className="md:w-2/5 md:sticky md:top-24 md:self-start">
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--orange)] font-bold mb-3 block">The Problem</span>
                <h2 className="text-2xl md:text-4xl text-[var(--navy)] leading-[1.1] tracking-tighter mb-4">
                  {c['problem.title'] ?? "Marketing is the first thing to slip."}
                </h2>
                <p className="text-[var(--text)] leading-relaxed text-sm">
                  {c['problem.description'] ?? "Small businesses don't ignore their online presence by choice. They're too busy running the business to do it right."}
                </p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="md:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {problemCards.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
                    }}
                    className="group p-6 bg-[var(--bg)] hover:bg-[var(--navy)] transition-all cursor-default"
                  >
                    <div className="w-10 h-10 rounded-full bg-[var(--orange)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--orange)]/20 transition-colors">
                      <span className="text-[var(--orange)] text-base font-bold">{i + 1}</span>
                    </div>
                    <div className="font-bold text-[var(--navy)] mb-1.5 group-hover:text-white transition-colors">{item.title}</div>
                    <p className="text-sm text-[var(--text)] leading-relaxed group-hover:text-white/70 transition-colors">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Transition */}
        <section className="bg-[var(--navy)] relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 w-full relative">
            <motion.div {...fadeUp} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-xl md:text-3xl text-white font-bold tracking-tight mb-2">
                  {c['transition.title'] ?? "OneBridge solves every single one of these."}
                </h2>
                <p className="text-white/70 text-sm font-bold">{c['transition.subtitle'] ?? "That's what we were built for."}</p>
              </div>
              <Link href="/about" className="bg-white text-[var(--navy)] text-sm font-bold py-2.5 px-5 hover:bg-white/90 transition-all active:scale-[0.97] whitespace-nowrap shrink-0">
                {c['transition.cta'] ?? "How We Do It"}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Impact */}
        <section className="bg-[var(--background)]">
          <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-24 w-full">
            <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-end justify-between mb-14">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--orange)] font-bold mb-3 block">The Impact</span>
                <h2 className="text-2xl md:text-4xl text-[var(--navy)] leading-[1.1] tracking-tighter mb-2">
                  {c['impact.title'] ?? "Growth Impact"}
                </h2>
                <p className="text-[var(--text)] font-medium">{c['impact.subtitle'] ?? "Real metrics from real campaigns."}</p>
              </div>
              <div className="hidden md:block">
                <BridgeIcon />
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {impactStats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center p-8 bg-white hover:bg-[var(--navy)] group transition-all cursor-default"
                >
                  <div className="text-3xl md:text-5xl text-[var(--orange)] font-bold mb-2 tracking-tighter group-hover:text-white transition-colors">{s.val}</div>
                  <div className="text-xs md:text-sm text-[var(--text)] uppercase tracking-wider font-bold group-hover:text-white/70 transition-colors">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-white">
          <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-24 w-full">
            <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-end justify-between mb-14">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--orange)] font-bold mb-3 block">Services</span>
                <h2 className="text-2xl md:text-4xl text-[var(--navy)] leading-[1.1] tracking-tighter mb-2">
                  {c['services.title'] ?? "Everything You Need."}
                </h2>
                <p className="text-[var(--text)] leading-relaxed max-w-xl font-medium">
                  {c['services.description'] ?? "All services customised to your goals and delivered end-to-end by one dedicated team."}
                </p>
              </div>
              <Link href="/services" className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-[var(--navy)] hover:text-[var(--orange)] transition-colors group">
                {c['services.cta'] ?? "View All Services"}
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {serviceCards.map((srv, i) => {
                const serviceIcons = [
                  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><path d="M8 8h8v8H8z"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>,
                  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="4"/><circle cx="12" cy="12" r="3"/><circle cx="18" cy="6" r="1.5" fill="#F97316"/></svg>,
                  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
                  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h7v7H3z"/><path d="M14 3h7v7h-7z"/><path d="M14 14h7v7h-7z"/><path d="M3 14h7v7H3z"/></svg>,
                ];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="group p-6 bg-[var(--bg)] hover:bg-[var(--orange)] transition-all cursor-default"
                  >
                    <div className="mb-5 w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      {serviceIcons[i]}
                    </div>
                    <div className="font-bold text-[var(--navy)] mb-1.5 group-hover:text-white transition-colors">{srv.name}</div>
                    <p className="text-sm text-[var(--text)] leading-relaxed group-hover:text-white/80 transition-colors">{srv.outline}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div {...fadeUp} className="mt-8 text-center md:hidden">
              <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--navy)] hover:text-[var(--orange)] transition-colors">
                {c['services.cta'] ?? "View All Services"}
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[var(--background)]">
          <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-24 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <motion.div {...fadeUp}>
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--orange)] font-bold mb-3 block">Free Audit</span>
                <h2 className="text-2xl md:text-4xl text-[var(--navy)] leading-[1.1] tracking-tighter mb-4">
                  {c['final_cta.title'] ?? "Ready to Build Your Bridge?"}
                </h2>
                <p className="text-[var(--text)] leading-relaxed text-sm font-medium mb-8">
                  {c['final_cta.description'] ?? "Start with a free digital audit. We'll analyze your current footprint and show you exactly where the gaps are."}
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[var(--navy)] text-white text-sm font-bold py-3 px-6 hover:bg-[#233558] transition-all active:scale-[0.97]">
                  {c['final_cta.cta'] ?? "Get Your Free Audit"}
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-3"
              >
                {auditChecks.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start p-5 bg-white">
                    <div className="w-6 h-6 bg-[var(--orange)] flex items-center justify-center text-white text-xs shrink-0 mt-0.5">
                      <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none"><path d="M2.5 6l2.5 2.5 4.5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[var(--navy)]">{item.label}</div>
                      <p className="text-xs text-[var(--text)] mt-0.5 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}
