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
    { name: c['services.card_1_name'] ?? "Social Media Management", outline: c['services.card_1_desc'] ?? "Strategy, content, posting & engagement." },
    { name: c['services.card_2_name'] ?? "Content Creation", outline: c['services.card_2_desc'] ?? "Reels, videos, graphics & branded posts." },
    { name: c['services.card_3_name'] ?? "Branding & Identity", outline: c['services.card_3_desc'] ?? "Logos, positioning & visual identity." },
    { name: c['services.card_4_name'] ?? "Website Development", outline: c['services.card_4_desc'] ?? "Fast, conversion-focused websites." },
  ];

  const auditChecks = [
    { label: c['final_cta.check_1'] ?? "SEO & Website Performance", desc: c['final_cta.check_1_desc'] ?? "Find out why visitors leave and how to keep them." },
    { label: c['final_cta.check_2'] ?? "Social Media Presence", desc: c['final_cta.check_2_desc'] ?? "See where your brand stands vs. competitors." },
    { label: c['final_cta.check_3'] ?? "Competitor Benchmarking", desc: c['final_cta.check_3_desc'] ?? "Know exactly what they're doing that you're not." },
  ];

  return (
    <div className="flex flex-col w-full">

      {/* Mobile hero */}
      <section className="block md:hidden relative w-full overflow-hidden bg-[var(--background)] pt-12 pb-10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-5">
          <div className="relative">
            <span className="text-[2.5rem] font-[var(--font-satoshi)] text-[var(--navy)] leading-[0.85] font-bold tracking-tight block">
              ONE
            </span>
          </div>

          <p className="text-[var(--text)] text-[15px] leading-relaxed">
            {c['hero.tagline'] ?? "We build functional, high-earning marketing systems. You run your business."}
          </p>

          <Link href="/contact" className="bg-[var(--navy)] text-white text-sm font-medium py-3 px-6 rounded-lg hover:bg-[#233558] transition-colors cursor-pointer w-fit">
            {c['hero.cta'] ?? "Get Started"}
          </Link>

          <div className="w-full max-w-[220px] aspect-square relative mx-auto my-2">
            <Image src="/images/hero-illustration.png" alt="Two figures representing brand and business collaboration" fill priority sizes="220px" className="object-contain" />
          </div>

          <div className="flex items-center gap-5">
            {statItems.map((s) => (
              <div key={s.val} className="flex flex-col">
                <span className="text-xl font-[var(--font-satoshi)] text-[var(--orange)] font-semibold leading-none">{s.val}</span>
                <span className="text-[11px] text-[var(--text)] uppercase tracking-widest mt-1">{s.label}</span>
              </div>
            ))}
          </div>

          <span className="text-[2rem] font-[var(--font-satoshi)] text-[var(--orange)] leading-[0.85] font-bold tracking-tight block">
            BRIDGE
          </span>
        </div>
      </section>

      {/* Desktop hero */}
      <section className="hidden md:block relative w-full min-h-[85vh] overflow-hidden bg-[var(--background)]">
        <div className="max-w-[1200px] mx-auto px-6 w-full h-full relative" style={{ minHeight: '85vh' }}>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-12 left-12 pointer-events-none select-none z-0"
          >
            <span className="text-[clamp(5rem,14vw,12rem)] font-[var(--font-satoshi)] text-[var(--navy)] leading-[0.85] block font-bold tracking-tight">
              ONE
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-12 right-12 pointer-events-none select-none z-0"
          >
            <span className="text-[clamp(3rem,10vw,10rem)] font-[var(--font-satoshi)] text-[var(--orange)] leading-[0.85] block font-bold tracking-tight">
              BRIDGE
            </span>
          </motion.div>

          <div className="relative z-[2] flex flex-col items-center justify-center h-full min-h-[85vh] py-16 lg:py-0 lg:static lg:inset-auto lg:block lg:min-h-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[320px] text-center lg:text-left lg:absolute lg:top-1/2 lg:left-12 lg:-translate-y-1/2"
            >
              <p className="text-[var(--text)] text-lg leading-relaxed mb-6">
                {c['hero.tagline'] ?? "We build functional, high-earning marketing systems. You run your business."}
              </p>
              <Link
                href="/contact"
                className="bg-[var(--navy)] text-white text-sm font-medium py-2.5 px-5 rounded-lg hover:bg-[#233558] transition-colors inline-block cursor-pointer"
              >
                {c['hero.cta'] ?? "Get Started"}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[350px] lg:max-w-[480px] aspect-square relative pointer-events-none my-10 lg:my-0 lg:absolute lg:inset-0 lg:mx-auto lg:flex lg:items-center lg:justify-center"
            >
              <Image
                src="/images/hero-illustration.png"
                alt="Two figures representing brand and business collaboration"
                fill
                priority
                sizes="480px"
                className="object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block lg:absolute lg:top-1/3 lg:right-12 lg:max-w-[220px]"
            >
              <p className="text-sm text-[var(--text)] leading-relaxed">
                {c['hero.mission'] ?? "One team handling your entire digital presence. Strategy, execution, results — delivered end-to-end."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block lg:absolute lg:bottom-6 lg:left-12"
            >
              <div className="flex items-center gap-8">
                {statItems.map((s) => (
                  <div key={s.val} className="flex flex-col">
                    <span className="text-3xl font-[var(--font-satoshi)] text-[var(--orange)] font-semibold leading-none">{s.val}</span>
                    <span className="text-[11px] text-[var(--text)] uppercase tracking-widest mt-1">{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      <main className="flex flex-col w-full">

        <section className="border-t border-[var(--border)]">
          <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 w-full">
            <motion.div {...fadeUp} className="max-w-2xl mb-16">
              <h2 className="text-2xl md:text-3xl text-[var(--navy)] mb-4">{c['problem.title'] ?? "The Problem"}</h2>
              <p className="text-[var(--text)] leading-relaxed">
                {c['problem.description'] ?? "Small businesses don't ignore their online presence by choice. They're too busy running the business to do it right — and hiring a full team is expensive."}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {problemCards.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 rounded-lg border border-[var(--border)] bg-white cursor-default">
                  <div className="text-xl text-[var(--orange)] font-semibold mb-2 font-[var(--font-satoshi)]">{item.title}</div>
                  <p className="text-sm text-[var(--text)] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--navy)]">
          <div className="max-w-[1200px] mx-auto px-6 py-14 md:py-16 w-full">
            <motion.div {...fadeUp} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div>
                <h2 className="text-xl md:text-2xl text-white font-bold mb-1.5">{c['transition.title'] ?? "One Bridge solves every single one of these."}</h2>
                <p className="text-white/80 text-sm font-medium">{c['transition.subtitle'] ?? "That's what we were built for."}</p>
              </div>
              <Link href="/about" className="border border-white/30 text-white text-sm font-medium py-2.5 px-5 rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap shrink-0">
                {c['transition.cta'] ?? "How We Do It"}
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-[var(--border)]">
          <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 w-full">
            <motion.div {...fadeUp} className="mb-12">
              <h2 className="text-2xl md:text-3xl text-[var(--navy)] mb-2">{c['impact.title'] ?? "Growth Impact"}</h2>
              <p className="text-[var(--text)]">{c['impact.subtitle'] ?? "Real metrics from real campaigns."}</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {impactStats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="text-center cursor-default">
                  <div className="text-3xl md:text-4xl text-[var(--orange)] font-semibold mb-1 font-[var(--font-satoshi)]">{s.val}</div>
                  <div className="text-xs md:text-[13px] text-[var(--text)] uppercase tracking-wider">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--border)]">
          <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <motion.div {...fadeUp}>
                <h2 className="text-2xl md:text-3xl text-[var(--navy)] mb-4">{c['services.title'] ?? "Everything You Need. Under One Roof."}</h2>
                <p className="text-[var(--text)] leading-relaxed mb-6">
                  {c['services.description'] ?? "All services customised to your goals and delivered end-to-end by one dedicated team."}
                </p>
                <Link href="/services" className="bg-[var(--navy)] text-white text-sm font-medium py-2.5 px-5 rounded-lg hover:bg-[#233558] transition-colors inline-block">
                  {c['services.cta'] ?? "View All Services"}
                </Link>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {serviceCards.map((srv, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-5 rounded-lg border border-[var(--border)] bg-white hover:border-[var(--navy)] transition-colors cursor-pointer">
                  <div className="font-medium text-[var(--navy)] mb-1.5">{srv.name}</div>
                  <p className="text-sm text-[var(--text)]">{srv.outline}</p>
                </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--border)]">
          <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeUp}>
                <h2 className="text-2xl md:text-3xl text-[var(--navy)] mb-4">{c['final_cta.title'] ?? "Ready to Build Your Bridge?"}</h2>
                <p className="text-[var(--text)] leading-relaxed mb-6">
                  {c['final_cta.description'] ?? "Start with a free digital audit. We'll analyze your current footprint and show you exactly where the gaps are — no commitment, just clarity."}
                </p>
                <Link href="/contact" className="bg-[var(--navy)] text-white text-sm font-medium py-2.5 px-5 rounded-lg hover:bg-[#233558] transition-colors inline-block">
                  {c['final_cta.cta'] ?? "Get Your Free Audit"}
                </Link>
              </motion.div>

              <motion.div {...fadeUp} className="space-y-4">
                {auditChecks.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                    <div className="w-5 h-5 bg-[var(--orange)] rounded flex items-center justify-center text-white text-xs shrink-0 mt-0.5">&#10003;</div>
                    <div>
                      <div className="text-sm font-medium text-[var(--navy)]">{item.label}</div>
                      <p className="text-xs text-[var(--text)] mt-0.5">{item.desc}</p>
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
