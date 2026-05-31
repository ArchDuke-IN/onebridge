import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Link from "next/link";
import * as motion from 'framer-motion/client';

export const metadata: Metadata = {
  title: 'About Us | One Bridge Marketing',
  description: 'One Bridge Marketing is a growth partner for businesses that want clear, measurable marketing systems without the jargon.',
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

const values = [
  { num: '01', title: 'Radical Honesty', desc: 'No vanity metrics. No hiding behind impressions. If a campaign fails, we say so, pivot, and move forward.' },
  { num: '02', title: 'Speed Over Polish', desc: 'Perfection belongs in art galleries. In marketing, speed to market and quick iterations win every time.' },
  { num: '03', title: 'Context is King', desc: 'A great tactic fails if it doesn\'t fit your market. We learn your specific business before spending a cent.' },
  { num: '04', title: 'Skin in the Game', desc: 'We act as your dedicated internal team. No finger-pointing. We own the results end-to-end.' },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">

      {/* HEADER — Full-bleed with wireframe grid + arc + stars */}
      <section className="bg-[#1a2744] border-b-[1.5px] border-gray-900 overflow-hidden relative min-h-[520px] flex items-center">
        {/* Wireframe Grid */}
        <div className="absolute top-8 left-12 w-56 h-56 border-[1px] border-white/10 grid grid-cols-5 grid-rows-5 pointer-events-none z-0" aria-hidden="true">
          {[...Array(25)].map((_, i) => <div key={i} className="border-[0.5px] border-white/5" />)}
        </div>
        {/* Arc */}
        <svg className="absolute -right-20 bottom-0 w-80 h-80 text-orange-500/20 pointer-events-none z-0" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" aria-hidden="true">
          <circle cx="100" cy="100" r="80" />
          <circle cx="100" cy="100" r="55" />
        </svg>
        {/* Stars */}
        <svg className="absolute top-20 right-1/4 w-8 h-8 text-orange-400/50 pointer-events-none z-0 animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
          <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
        </svg>
        <svg className="absolute bottom-16 left-1/3 w-10 h-10 text-white/20 pointer-events-none z-0 animate-float" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
        </svg>
        {/* Dot grid */}
        <div className="hidden lg:grid grid-cols-3 grid-rows-3 gap-3 absolute top-12 right-16 z-0 opacity-60 animate-float" aria-hidden="true">
          {[...Array(9)].map((_, i) => <div key={i} className="w-4 h-4 bg-orange-400 rounded-full border-[1.5px] border-orange-300 shadow-[2px_2px_0px_0px_rgba(26,26,26,0.3)]" />)}
        </div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="font-fjalla text-5xl md:text-7xl lg:text-9xl text-white uppercase tracking-tight mb-6 leading-[0.88]">
              Less Talk.<br /> More Work.
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-2xl font-medium leading-relaxed">
              We build functional, high-earning marketing systems. You run your business. That&apos;s the deal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE MESSAGE — Split layout with large quote + method cards */}
      <section className="bg-white py-24 px-6 md:px-12 border-b-[1.5px] border-gray-900">
        <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          {/* Left: big pulled quote */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="font-fjalla text-[6rem] leading-none text-orange-500/20 mb-0 select-none">&ldquo;</div>
              <h2 className="font-fjalla text-3xl md:text-4xl text-gray-900 uppercase leading-tight -mt-8">
                The <span className="text-orange-500">Method.</span>
              </h2>
              <p className="mt-6 text-lg text-gray-600 font-medium leading-relaxed max-w-xs">
                Most marketing sounds like magic. It isn&apos;t. It&apos;s testing, iterating, and scaling what works until the math makes sense.
              </p>
              <p className="mt-4 text-lg text-gray-600 font-medium leading-relaxed max-w-xs">
                We don&apos;t sell vanity metrics. We act as your external growth arm so you don&apos;t have to hire an entire department.
              </p>
            </div>
          </div>

          {/* Right: creative value tiles instead of generic cards */}
          <div className="lg:col-span-3 grid grid-cols-1 gap-0 border-[1.5px] border-gray-900 rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]">
            {[
              { icon: '⚡', label: 'Direct Alignment', body: 'If you don\'t make money, we lose a client. The incentives are aligned.', accent: 'bg-orange-500', textAccent: 'text-white' },
              { icon: '🚀', label: 'Action Bias', body: 'Less meetings, more shipping. We get campaigns into the market fast.', accent: 'bg-blue-600', textAccent: 'text-white' },
              { icon: '🎯', label: 'Single Hub', body: 'No more juggling five freelancers. We manage the entire pipeline.', accent: 'bg-[#F3EFE6]', textAccent: 'text-gray-900' },
              { icon: '📈', label: 'Measured Growth', body: 'Every dollar spent is tracked, measured, and reported plainly.', accent: 'bg-gray-900', textAccent: 'text-white' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center gap-6 p-8 border-b-[1.5px] border-gray-900 last:border-b-0 ${item.accent} group hover:scale-[1.01] transition-transform`}
              >
                <div className={`w-14 h-14 rounded-2xl border-[1.5px] border-gray-900 flex items-center justify-center text-2xl shrink-0 bg-white shadow-[3px_3px_0px_0px_rgba(26,26,26,1)]`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className={`font-fjalla text-2xl uppercase mb-1 ${item.textAccent}`}>{item.label}</h4>
                  <p className={`font-medium text-sm leading-relaxed ${item.textAccent === 'text-white' ? 'text-white/80' : 'text-gray-600'}`}>{item.body}</p>
                </div>
                <div className={`ml-auto font-fjalla text-5xl opacity-20 ${item.textAccent}`}>{String(i + 1).padStart(2, '0')}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES — Timeline / diagonal layout */}
      <section className="bg-[#F3EFE6] border-y-[1.5px] border-gray-900 w-full py-24 overflow-hidden relative">
        {/* Wireframe accent */}
        <div className="absolute top-0 right-12 w-48 h-48 border-[1px] border-orange-300/30 grid grid-cols-4 grid-rows-4 pointer-events-none z-0" aria-hidden="true">
          {[...Array(16)].map((_, i) => <div key={i} className="border-[0.5px] border-orange-300/15" />)}
        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full">
          <div className="mb-16">
            <h2 className="font-fjalla text-5xl md:text-6xl text-gray-900 uppercase leading-[0.9]">
              The Rules <br />We Play By
            </h2>
            <p className="text-lg text-gray-600 font-medium mt-4 max-w-sm">
              Good business is simple. Do what you say, and don&apos;t hide behind jargon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`p-8 md:p-10 rounded-3xl border-[1.5px] border-gray-900 shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] hover:-translate-y-1 transition-transform group relative overflow-hidden ${i % 3 === 0 ? 'bg-blue-600 text-white' : i % 3 === 1 ? 'bg-white' : i % 3 === 2 ? 'bg-orange-500 text-white' : 'bg-white'}`}
              >
                <div className="font-fjalla text-[5rem] leading-none opacity-10 absolute -right-4 -bottom-4 select-none">
                  {value.num}
                </div>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl border-[1.5px] mb-6 font-fjalla text-xl shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] ${i % 3 === 0 || i % 3 === 2 ? 'bg-white text-gray-900 border-white/40' : 'bg-orange-500 text-white border-orange-400'}`}>
                  {value.num}
                </div>
                <h4 className={`font-fjalla text-3xl uppercase mb-4 ${i % 3 === 0 || i % 3 === 2 ? 'text-white' : 'text-gray-900'}`}>{value.title}</h4>
                <p className={`leading-relaxed font-medium ${i % 3 === 0 || i % 3 === 2 ? 'text-white/80' : 'text-gray-600'}`}>{value.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Big goal card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-8 bg-gray-900 text-white p-10 md:p-14 rounded-3xl border-[1.5px] border-gray-900 shadow-[8px_8px_0px_0px_rgba(249,115,22,1)] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <div className="relative z-10">
              <div className="text-orange-400 font-bold text-sm uppercase tracking-widest mb-3">The Goal</div>
              <h3 className="font-fjalla text-3xl md:text-4xl uppercase max-w-2xl leading-tight">
                Replace agency fluff with measurable revenue systems that run quietly and effectively.
              </h3>
            </div>
            <Link href="/contact" className="relative z-10 shrink-0 bg-orange-500 text-white font-bold py-4 px-8 rounded-full border-[1.5px] border-orange-400 shadow-[4px_4px_0px_0px_rgba(249,115,22,0.4)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(249,115,22,0.4)] transition-all whitespace-nowrap">
              Get Your Free Audit
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
