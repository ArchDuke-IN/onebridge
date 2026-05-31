import { Metadata } from 'next';
import Link from 'next/link';
import * as motion from 'framer-motion/client';

export const metadata: Metadata = {
  title: 'GridMaster Case Study | One Bridge Marketing',
  description: 'How One Bridge Marketing scaled GridMaster\'s lead flow by 480% in 6 months.',
};

const timeline = [
  { month: 'Month 1', title: 'Discovery & Audit', desc: 'Full website and ad account audit. Identified $4k/mo in wasted ad spend. Zero conversion tracking in place.' },
  { month: 'Month 2', title: 'Foundation Build', desc: 'Rebuilt landing pages, set up complete attribution, redesigned brand identity and messaging framework.' },
  { month: 'Month 3', title: 'Campaigns Live', desc: 'Launched aggressive Meta and Google campaigns. New content pipeline producing 3x per week.' },
  { month: 'Month 4–6', title: 'Scale & Optimize', desc: 'Doubled ad budget as ROAS stabilized. Organic traffic compounding. Lead volume at 5x baseline.' },
];

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" }, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } };

export default function GridmasterCaseStudy() {
  return (
    <div className="flex flex-col w-full">

      <section className="max-w-[1200px] mx-auto px-6 pt-20 md:pt-28 pb-16 md:pb-24 w-full">
        <Link href="/projects" className="inline-flex items-center gap-1 text-sm text-[var(--text)] hover:text-[var(--navy)] transition-colors mb-8 group cursor-pointer">
          <span className="group-hover:-translate-x-0.5 transition-transform">&larr;</span> Back to Our Work
        </Link>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex flex-wrap gap-2 mb-4">
            {['B2B SaaS', 'SEO', 'Paid Ads', 'UI/UX Redesign'].map(t => (
              <span key={t} className="text-xs uppercase tracking-wider bg-[var(--border)] text-[var(--text)] px-2.5 py-1 rounded">{t}</span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[var(--navy)] leading-[1.15] mb-6">GridMaster Case Study</h1>
          <p className="text-lg md:text-xl text-[var(--text)] leading-relaxed max-w-2xl">
            How we turned a stagnant B2B SaaS platform into a lead-generating machine, growing their pipeline by 480% in 6 months.
          </p>
        </motion.div>
      </section>

      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 py-12 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: '+480%', label: 'Lead Flow Increase' },
              { val: '350%', label: 'Organic Traffic Growth' },
              { val: '4.2x', label: 'Return on Ad Spend' },
              { val: '6mo', label: 'Time to Results' },
            ].map((m, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl text-[var(--orange)] font-semibold font-[var(--font-satoshi)] mb-1">{m.val}</div>
                <div className="text-xs md:text-[13px] text-[var(--text)] uppercase tracking-wider">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            <aside className="lg:col-span-3">
              <div className="lg:sticky top-24 space-y-4">
                <div className="border border-[var(--border)] bg-white rounded-lg p-5">
                  <div className="text-xs uppercase tracking-wider text-[var(--text)] mb-2">Client</div>
                  <div className="text-lg text-[var(--navy)] font-[var(--font-satoshi)]">GridMaster</div>
                  <div className="text-sm text-[var(--text)]">B2B SaaS Platform</div>
                </div>
                <div className="border border-[var(--border)] bg-white rounded-lg p-5">
                  <div className="text-xs uppercase tracking-wider text-[var(--text)] mb-2">Duration</div>
                  <div className="text-lg text-[var(--navy)] font-[var(--font-satoshi)]">6 Months</div>
                </div>
                <div className="bg-[var(--navy)] rounded-lg p-5">
                  <div className="text-xs uppercase tracking-wider text-white/70 mb-2">Services Used</div>
                  <ul className="space-y-1.5 text-sm">
                    {['UI/UX Redesign', 'Meta Ads', 'Google Ads', 'SEO', 'Email Automation', 'Brand Identity'].map(s => (
                      <li key={s} className="flex items-center gap-2"><span className="text-[var(--orange)]">&#10003;</span>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-9 space-y-12">

              <motion.div {...fadeUp}>
                <h2 className="text-xl md:text-2xl text-[var(--navy)] mb-4">The Challenge</h2>
                <div className="space-y-4 text-sm text-[var(--text)] leading-relaxed">
                  <p>GridMaster was a promising B2B SaaS platform with a solid product but an invisible online presence. They were spending $4,000 per month on ads with zero attribution in place — they had no idea which channels were working or why.</p>
                  <p>Their website had a 78% bounce rate and a less than 1% conversion rate. The visual identity felt inconsistent and unpolished, undermining trust with enterprise buyers.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  {[
                    { stat: '78%', label: 'Bounce Rate' },
                    { stat: '$4k/mo', label: 'Untracked Ad Spend' },
                    { stat: '<1%', label: 'Conversion Rate' },
                  ].map((s, i) => (
                    <div key={i} className="border border-red-200 bg-red-50 rounded-lg p-4 text-center cursor-default">
                      <div className="text-xl text-red-500 font-semibold font-[var(--font-satoshi)] mb-0.5">{s.stat}</div>
                      <div className="text-xs md:text-[13px] text-red-700 uppercase tracking-wider">{s.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeUp}>
                <h2 className="text-xl md:text-2xl text-[var(--navy)] mb-4">The OneBridge Approach</h2>
                <div className="space-y-4">
                  {[
                    { title: 'Complete UI/UX Overhaul', desc: 'Rebuilt the website from the ground up, focused on conversion. New messaging, cleaner flow, and a trust-first design language that resonated with B2B buyers.' },
                    { title: 'Attribution & Tracking Setup', desc: 'Implemented GA4, Meta Pixel, and UTM frameworks. GridMaster could finally see where every lead came from and what it cost.' },
                    { title: 'Aggressive Paid Funnel', desc: 'Launched top-of-funnel Meta campaigns for awareness and bottom-of-funnel Google campaigns for high-intent searches.' },
                    { title: 'Email Automation', desc: 'Built a 7-step welcome and nurture sequence that replaced manual outreach, adding 30% of monthly pipeline on autopilot.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start border border-[var(--border)] bg-white rounded-lg p-5 cursor-default">
                      <div className="w-7 h-7 bg-[var(--orange)] rounded flex items-center justify-center text-white text-xs font-medium shrink-0">{i + 1}</div>
                      <div>
                        <h4 className="text-sm text-[var(--navy)] font-medium mb-0.5">{item.title}</h4>
                        <p className="text-sm text-[var(--text)]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeUp}>
                <h2 className="text-xl md:text-2xl text-[var(--navy)] mb-4">The Timeline</h2>
                <div className="border border-[var(--border)] rounded-lg overflow-hidden">
                  {timeline.map((t, i) => (
                    <div key={i} className={`p-5 border-b border-[var(--border)] last:border-b-0 ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--background)]'}`}>
                      <div className="text-xs uppercase tracking-wider text-[var(--orange)] font-medium mb-1">{t.month}</div>
                      <h4 className="text-sm text-[var(--navy)] font-medium mb-0.5">{t.title}</h4>
                      <p className="text-sm text-[var(--text)]">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeUp}>
                <h2 className="text-xl md:text-2xl text-[var(--navy)] mb-4">The Results</h2>
                <div className="grid grid-cols-2 gap-px bg-[var(--border)] rounded-lg overflow-hidden border border-[var(--border)] mb-6">
                  {[
                    { val: '+480%', label: 'Lead Flow Increase' },
                    { val: '350%', label: 'Organic Traffic Growth' },
                    { val: '4.2x', label: 'Return on Ad Spend' },
                    { val: '12%', label: 'New Landing Page CVR' },
                  ].map((r, i) => (
                    <div key={i} className="bg-white p-6 text-center">
                      <div className="text-3xl md:text-4xl text-[var(--orange)] font-semibold font-[var(--font-satoshi)] mb-1">{r.val}</div>
                      <div className="text-xs md:text-[13px] text-[var(--text)] uppercase tracking-wider">{r.label}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-[var(--navy)] rounded-lg p-6">
                  <div className="text-[var(--orange)] text-2xl mb-2">&ldquo;</div>
                  <p className="text-sm text-white/80 font-medium leading-relaxed mb-4">
                    OneBridge didn&apos;t just run ads for us. They rebuilt our entire digital presence from the ground up. The results speak for themselves.
                  </p>
                  <div>
                    <div className="text-sm text-white font-semibold">James K.</div>
                    <div className="text-xs text-white/60">CEO, GridMaster</div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--navy)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 text-center w-full">
          <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">Want Results Like This?</h2>
          <p className="text-white/80 text-sm font-medium mb-8">Start with a free digital audit. No commitment, just clarity.</p>
          <Link href="/contact" className="border border-white/30 text-white text-sm font-medium py-2.5 px-5 rounded-lg hover:bg-white/10 transition-colors inline-block cursor-pointer">
            Get Your Free Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
