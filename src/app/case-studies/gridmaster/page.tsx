import { Metadata } from 'next';
import Link from 'next/link';
import * as motion from 'framer-motion/client';

export const metadata: Metadata = {
  title: 'GridMaster Case Study | One Bridge Marketing',
  description: 'How One Bridge Marketing scaled GridMaster\'s lead flow by 480% in 6 months through a full-funnel digital strategy.',
};

const timeline = [
  { month: 'Month 1', title: 'Discovery & Audit', desc: 'Full website and ad account audit. Identified $4k/mo in wasted ad spend. Zero conversion tracking in place.' },
  { month: 'Month 2', title: 'Foundation Build', desc: 'Rebuilt landing pages, set up complete attribution, redesigned brand identity and messaging framework.' },
  { month: 'Month 3', title: 'Campaigns Live', desc: 'Launched aggressive Meta and Google campaigns. New content pipeline producing 3x per week.' },
  { month: 'Month 4–6', title: 'Scale & Optimize', desc: 'Doubled ad budget as ROAS stabilized. Organic traffic compounding. Lead volume at 5x baseline.' },
];

const metrics = [
  { val: '+480%', label: 'Lead Flow Increase', color: 'text-orange-500' },
  { val: '350%', label: 'Organic Traffic Growth', color: 'text-blue-600' },
  { val: '4.2x', label: 'Return on Ad Spend', color: 'text-orange-500' },
  { val: '6mo', label: 'Time to Results', color: 'text-blue-600' },
];

export default function GridmasterCaseStudy() {
  return (
    <div className="flex flex-col w-full">

      {/* HERO */}
      <section className="bg-[#1a2744] relative overflow-hidden border-b-[1.5px] border-gray-900">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <svg className="absolute top-12 right-12 w-32 h-32 text-orange-500/20 animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /></svg>

        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-28 md:py-36 relative z-10">
          <Link href="/projects" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium mb-10 group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Our Work
          </Link>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex flex-wrap gap-2 mb-6">
              {['B2B SaaS', 'SEO', 'Paid Ads', 'UI/UX Redesign'].map(t => (
                <span key={t} className="text-xs font-bold uppercase tracking-widest text-orange-300 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
            <h1 className="font-fjalla text-5xl md:text-7xl lg:text-8xl text-white uppercase leading-[0.9] mb-6">
              GridMaster<br /><span className="text-orange-500">Case Study</span>
            </h1>
            <p className="text-xl text-blue-200 font-medium max-w-2xl leading-relaxed">
              How we turned a stagnant B2B SaaS platform into a lead-generating machine, growing their pipeline by 480% in 6 months.
            </p>
          </motion.div>
        </div>
      </section>

      {/* METRICS */}
      <section className="bg-orange-500 border-b-[1.5px] border-gray-900 py-10 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="font-fjalla text-4xl md:text-5xl text-white mb-1">{m.val}</div>
              <div className="text-orange-100 font-bold text-xs uppercase tracking-wider">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-white py-24 px-6 md:px-12 border-b-[1.5px] border-gray-900">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-24 space-y-8">
              <div className="bg-[#F3EFE6] p-6 rounded-2xl border-[1.5px] border-gray-900 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Client</div>
                <div className="font-fjalla text-2xl text-gray-900 uppercase">GridMaster</div>
                <div className="text-gray-600 text-sm mt-1">B2B SaaS Platform</div>
              </div>
              <div className="bg-[#F3EFE6] p-6 rounded-2xl border-[1.5px] border-gray-900 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Duration</div>
                <div className="font-fjalla text-2xl text-gray-900 uppercase">6 Months</div>
              </div>
              <div className="bg-blue-600 p-6 rounded-2xl border-[1.5px] border-gray-900 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
                <div className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-4">Services Used</div>
                <ul className="space-y-2 text-white font-medium text-sm">
                  {['UI/UX Redesign', 'Meta Ads', 'Google Ads', 'SEO', 'Email Automation', 'Brand Identity'].map(s => (
                    <li key={s} className="flex items-center gap-2"><span className="text-orange-400">✓</span>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Body */}
          <div className="lg:col-span-9 space-y-16">

            {/* Challenge */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-orange-500 rounded-full border-[1.5px] border-gray-900 flex items-center justify-center text-white font-bold shadow-[3px_3px_0px_0px_rgba(26,26,26,1)]">01</div>
                <h2 className="font-fjalla text-3xl md:text-4xl uppercase text-gray-900">The Challenge</h2>
              </div>
              <div className="pl-14 space-y-4 text-gray-700 font-medium text-lg leading-relaxed">
                <p>GridMaster was a promising B2B SaaS platform with a solid product but an invisible online presence. They were spending $4,000 per month on ads with zero attribution in place, meaning they had no idea which channels were working or why.</p>
                <p>Their website had a 78% bounce rate and a less than 1% conversion rate. The visual identity felt inconsistent and unpolished, undermining trust with enterprise buyers.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                  {[
                    { stat: '78%', label: 'Bounce Rate on Entry', bad: true },
                    { stat: '$4k', label: 'Monthly Ad Spend, Untracked', bad: true },
                    { stat: '<1%', label: 'Conversion Rate', bad: true },
                  ].map((s, i) => (
                    <div key={i} className="bg-red-50 border-[1.5px] border-red-200 rounded-2xl p-5 text-center">
                      <div className="font-fjalla text-3xl text-red-500 mb-1">{s.stat}</div>
                      <div className="text-red-700 text-xs font-bold uppercase tracking-wide">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Approach */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-full border-[1.5px] border-gray-900 flex items-center justify-center text-white font-bold shadow-[3px_3px_0px_0px_rgba(26,26,26,1)]">02</div>
                <h2 className="font-fjalla text-3xl md:text-4xl uppercase text-gray-900">The OneBridge Approach</h2>
              </div>
              <div className="pl-14 space-y-6">
                {[
                  { title: 'Complete UI/UX Overhaul', desc: 'Rebuilt the website from the ground up, focused on conversion. New messaging, cleaner flow, and a trust-first design language that resonated with B2B buyers.' },
                  { title: 'Attribution & Tracking Setup', desc: 'Implemented GA4, Meta Pixel, and UTM frameworks. Finally, GridMaster could see exactly where every lead came from and what it cost.' },
                  { title: 'Aggressive Paid Funnel', desc: 'Launched top-of-funnel Meta campaigns for awareness and bottom-of-funnel Google campaigns for high-intent searches. A/B tested creatives weekly.' },
                  { title: 'Email Automation', desc: 'Built a 7-step welcome and nurture sequence that replaced manual outreach, adding a consistent 30% of monthly pipeline on autopilot.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start bg-[#F3EFE6] p-6 rounded-2xl border-[1.5px] border-gray-900">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">{i + 1}</div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 bg-orange-500 rounded-full border-[1.5px] border-gray-900 flex items-center justify-center text-white font-bold shadow-[3px_3px_0px_0px_rgba(26,26,26,1)]">03</div>
                <h2 className="font-fjalla text-3xl md:text-4xl uppercase text-gray-900">The Timeline</h2>
              </div>
              <div className="pl-14 space-y-0 border-[1.5px] border-gray-900 rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(26,26,26,1)]">
                {timeline.map((t, i) => (
                  <div key={i} className={`p-6 border-b-[1.5px] border-gray-900 last:border-b-0 flex gap-6 items-start ${i % 2 === 0 ? 'bg-white' : 'bg-[#F3EFE6]'}`}>
                    <div className="shrink-0 font-bold text-xs uppercase tracking-widest text-orange-500 bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-full whitespace-nowrap">{t.month}</div>
                    <div>
                      <h4 className="font-fjalla text-xl uppercase text-gray-900 mb-1">{t.title}</h4>
                      <p className="text-gray-600 font-medium leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Results */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-full border-[1.5px] border-gray-900 flex items-center justify-center text-white font-bold shadow-[3px_3px_0px_0px_rgba(26,26,26,1)]">04</div>
                <h2 className="font-fjalla text-3xl md:text-4xl uppercase text-gray-900">The Results</h2>
              </div>
              <div className="pl-14">
                <div className="grid grid-cols-2 gap-px bg-gray-900 border-[1.5px] border-gray-900 rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(26,26,26,1)]">
                  {[
                    { val: '+480%', label: 'Lead Flow Increase', color: 'text-orange-500' },
                    { val: '350%', label: 'Organic Traffic Growth', color: 'text-blue-600' },
                    { val: '4.2x', label: 'Return on Ad Spend', color: 'text-orange-500' },
                    { val: '12%', label: 'New Landing Page CVR', color: 'text-blue-600' },
                  ].map((r, i) => (
                    <div key={i} className="bg-white p-8 text-center">
                      <div className={`font-fjalla text-5xl md:text-6xl mb-2 ${r.color}`}>{r.val}</div>
                      <div className="text-gray-600 font-bold text-sm uppercase tracking-wide">{r.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-[#1a2744] text-white p-8 rounded-2xl border-[1.5px] border-gray-900 shadow-[6px_6px_0px_0px_rgba(249,115,22,1)]">
                  <div className="text-orange-400 text-3xl font-fjalla mb-3">&ldquo;</div>
                  <p className="text-blue-100 font-medium text-lg leading-relaxed mb-6">
                    OneBridge didn&apos;t just run ads for us. They rebuilt our entire digital presence from the ground up. The results speak for themselves.
                  </p>
                  <div>
                    <div className="font-bold text-white uppercase tracking-widest text-sm">James K.</div>
                    <div className="text-blue-300 text-sm">CEO, GridMaster</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-24 text-center px-6 border-t-[1.5px] border-gray-900">
        <h2 className="font-fjalla text-5xl md:text-6xl uppercase text-white mb-4 max-w-2xl mx-auto">
          Want Results Like This?
        </h2>
        <p className="text-orange-100 font-medium text-lg mb-10">Start with a free digital audit. No commitment, just clarity.</p>
        <Link href="/contact" className="inline-block bg-white text-gray-900 font-bold py-4 px-12 rounded-full text-lg border-[1.5px] border-gray-900 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] transition-all">
          Get Your Free Audit
        </Link>
      </section>
    </div>
  );
}
