import Link from "next/link";
import * as motion from "framer-motion/client";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-6 pt-20 md:pt-28 pb-16 md:pb-24 w-full">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[var(--navy)] leading-[1.15] mb-6">
            Your Complete Digital Growth Partner
          </h1>
          <p className="text-lg md:text-xl text-[var(--text)] leading-relaxed mb-8 max-w-2xl">
            We handle everything online so you can focus on running your business. Strategy, execution, results — one team, one mission.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-[var(--navy)] text-white text-sm font-medium py-2.5 px-5 rounded-lg hover:opacity-90 transition-opacity">
              Start Your Growth
            </Link>
            <Link href="/projects" className="bg-[var(--navy)] text-white text-sm font-medium py-2.5 px-5 rounded-lg hover:opacity-90 transition-opacity">
              View Our Work
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Problem + Solution flow */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 w-full">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <h2 className="text-2xl md:text-3xl text-[var(--navy)] mb-4">
              The Problem
            </h2>
            <p className="text-[var(--text)] leading-relaxed">
              Small businesses don&apos;t ignore their online presence by choice. They&apos;re too busy running the business to do it right — and hiring a full team is expensive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              { title: "No Time", desc: "10-14 hour days leave zero room for marketing." },
              { title: "No Strategy", desc: "Posting without a plan is just noise." },
              { title: "No Team", desc: "Hiring specialists is expensive and complex." },
              { title: "No Results", desc: "Money spent without accountability is wasted." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 rounded-lg border border-[var(--border)] bg-white">
                <div className="text-xl text-[var(--orange)] font-semibold mb-2 font-[var(--font-playfair)]">{item.title}</div>
                <p className="text-sm text-[var(--text)] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="p-8 md:p-10 rounded-lg border border-[var(--border)] bg-[var(--navy)] text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl md:text-2xl text-white mb-2">One Bridge solves every single one of these.</h3>
                <p className="text-white/70 text-sm">That&apos;s what we were built for.</p>
              </div>
              <Link href="/about" className="border border-white/30 text-white text-sm font-medium py-2.5 px-5 rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap">
                How We Do It
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 w-full">
          <motion.div {...fadeUp} className="mb-12">
            <h2 className="text-2xl md:text-3xl text-[var(--navy)] mb-2">Growth Impact</h2>
            <p className="text-[var(--text)]">Real metrics from real campaigns.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { val: "300%", label: "Avg reach increase" },
              { val: "5x", label: "Lead flow growth" },
              { val: "12+", label: "Hours saved per week" },
              { val: "100%", label: "Done-for-you" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 rounded-lg border border-[var(--border)] bg-white text-center">
                <div className="text-3xl md:text-4xl text-[var(--orange)] font-semibold mb-1 font-[var(--font-playfair)]">{s.val}</div>
                <div className="text-xs text-[var(--text)]">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl text-[var(--navy)] mb-4">Everything You Need. Under One Roof.</h2>
              <p className="text-[var(--text)] leading-relaxed mb-6">
                All services customised to your goals and delivered end-to-end by one dedicated team.
              </p>
              <Link href="/services" className="bg-[var(--navy)] text-white text-sm font-medium py-2.5 px-5 rounded-lg hover:opacity-90 transition-opacity inline-block">
                View All Services
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Social Media Management", outline: "Strategy, content, posting & engagement." },
                { name: "Content Creation", outline: "Reels, videos, graphics & branded posts." },
                { name: "Branding & Identity", outline: "Logos, positioning & visual identity." },
                { name: "Website Development", outline: "Fast, conversion-focused websites." },
              ].map((srv, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-5 rounded-lg border border-[var(--border)] bg-white hover:border-[var(--navy)] transition-colors">
                  <div className="font-medium text-[var(--navy)] mb-1.5">{srv.name}</div>
                  <p className="text-sm text-[var(--text)]">{srv.outline}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 w-full text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl text-[var(--navy)] mb-4">Ready to Build Your Bridge?</h2>
            <p className="text-[var(--text)] mb-8 max-w-md mx-auto">Let&apos;s talk about what your business needs and how we can help.</p>
            <Link href="/contact" className="bg-[var(--navy)] text-white text-sm font-medium py-2.5 px-5 rounded-lg hover:opacity-90 transition-opacity inline-block">
              Get Your Free Audit
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
