import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Link from "next/link";
import * as motion from 'framer-motion/client';
import { getPageContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About Us | OneBridge Marketing',
  description: 'We build functional, high-earning marketing systems. You run your business.',
  alternates: { canonical: `${siteConfig.url}/about` },
};

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" }, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } };

export default async function AboutPage() {
  const c = await getPageContent('about');

  const values = [
    { num: '01', title: c['values.card_1_title'] ?? "Radical Honesty", desc: c['values.card_1_desc'] ?? "No vanity metrics. No hiding behind impressions. If a campaign fails, we say so and pivot." },
    { num: '02', title: c['values.card_2_title'] ?? "Speed Over Polish", desc: c['values.card_2_desc'] ?? "Perfection belongs in galleries. In marketing, quick iterations win." },
    { num: '03', title: c['values.card_3_title'] ?? "Context Is King", desc: c['values.card_3_desc'] ?? "A great tactic fails if it doesn't fit your market. We learn your business first." },
    { num: '04', title: c['values.card_4_title'] ?? "Skin in the Game", desc: c['values.card_4_desc'] ?? "We act as your internal team. No finger-pointing. We own the results." },
  ];

  const methodCards = [
    { label: c['method.card_1_label'] ?? "Direct Alignment", body: c['method.card_1_desc'] ?? "If you don't make money, neither do we. The incentives are aligned." },
    { label: c['method.card_2_label'] ?? "Action Bias", body: c['method.card_2_desc'] ?? "Less meetings, more shipping. We get campaigns into the market fast." },
    { label: c['method.card_3_label'] ?? "Single Hub", body: c['method.card_3_desc'] ?? "No more juggling five freelancers. We manage the entire pipeline." },
    { label: c['method.card_4_label'] ?? "Measured Growth", body: c['method.card_4_desc'] ?? "Every dollar spent is tracked, measured, and reported plainly." },
  ];

  return (
    <div className="flex flex-col w-full">

      <section className="max-w-[1200px] mx-auto px-6 pt-20 md:pt-28 pb-16 md:pb-24 w-full">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[var(--navy)] leading-[1.15] mb-6">{c['hero.title'] ?? "Less Talk. More Work."}</h1>
          <p className="text-lg md:text-xl text-[var(--text)] leading-relaxed max-w-2xl">
            {c['hero.description'] ?? "We build functional, high-earning marketing systems. You run your business. That's the deal."}
          </p>
        </motion.div>
      </section>

      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl text-[var(--navy)] mb-4">{c['method.title'] ?? "The Method."}</h2>
              <p className="text-[var(--text)] leading-relaxed mb-4">
                {c['method.para_1'] ?? "Most marketing sounds like magic. It isn't. It's testing, iterating, and scaling what works until the math makes sense."}
              </p>
              <p className="text-[var(--text)] leading-relaxed">
                {c['method.para_2'] ?? "We don't sell vanity metrics. We act as your external growth arm so you don't have to hire an entire department."}
              </p>
            </motion.div>

            <div className="space-y-4">
              {methodCards.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-5 rounded-lg border border-[var(--border)] bg-white cursor-default">
                  <div className="font-medium text-[var(--navy)] mb-1">{item.label}</div>
                  <p className="text-sm text-[var(--text)]">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 w-full">
          <motion.div {...fadeUp} className="mb-12">
            <h2 className="text-2xl md:text-3xl text-[var(--navy)] mb-2">{c['values.title'] ?? "The Rules We Play By"}</h2>
            <p className="text-[var(--text)]">{c['values.subtitle'] ?? "Good business is simple. Do what you say, don't hide behind jargon."}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 rounded-lg border border-[var(--border)] bg-white cursor-default">
                <div className="text-lg text-[var(--orange)] font-semibold mb-1 font-[var(--font-satoshi)]">{v.title}</div>
                <p className="text-sm text-[var(--text)]">{v.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-10 p-8 md:p-10 rounded-lg bg-[var(--navy)]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div>
                <h3 className="text-xl md:text-2xl text-white font-bold mb-1.5">{c['cta.title'] ?? "The Goal"}</h3>
                <p className="text-white/80 text-sm font-medium">{c['cta.description'] ?? "Replace agency fluff with measurable revenue systems that run quietly and effectively."}</p>
              </div>
              <Link href="/contact" className="border border-white/30 text-white text-sm font-medium py-2.5 px-5 rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap cursor-pointer shrink-0">
                {c['cta.button'] ?? "Get Your Free Audit"}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
