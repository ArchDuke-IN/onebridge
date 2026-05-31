import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import * as motion from 'framer-motion/client';
import { Icons } from '@/components/icons';
import { db } from '@/db';
import { siteImages } from '@/db/schema';
import { asc } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Our Work & Results | One Bridge Marketing',
  description: 'View our case studies, testimonials, and the undeniable results we bring to our clients.',
  alternates: { canonical: `${siteConfig.url}/projects` },
};

const caseStudies = [
  {
    slug: 'gridmaster',
    label: 'B2B SaaS',
    title: 'GridMaster',
    subtitle: 'B2B SaaS Growth Strategy',
    result: '+480% Lead Flow',
    tags: ['SEO', 'Paid Ads', 'UI/UX'],
    bg: 'bg-blue-600',
    accent: 'bg-orange-500',
    desc: 'Scaled organic traffic by 350% in 6 months and rebuilt the entire conversion funnel.',
  },
  {
    slug: null,
    label: 'DTC Brand',
    title: 'E-Commerce Elite',
    subtitle: 'DTC Brand Scale',
    result: '4.2x ROAS',
    tags: ['Meta Ads', 'Email', 'Branding'],
    bg: 'bg-orange-500',
    accent: 'bg-blue-600',
    desc: 'Achieved a 4.2x return on ad spend through aggressive paid social and email automation.',
  },
  {
    slug: null,
    label: 'Local Services',
    title: 'ServicePro',
    subtitle: 'Local Business Growth',
    result: '3x Lead Volume',
    tags: ['Social Media', 'Content', 'SEO'],
    bg: 'bg-[#1a2744]',
    accent: 'bg-orange-500',
    desc: 'Tripled inbound leads in 4 months through a data-driven social media and local SEO strategy.',
  },
];

const testimonials = [
  { quote: 'Working with OneBridge completely changed how we view marketing. They actually cared about ROI, not just pretty pictures.', name: 'Sarah J.', role: 'Founder, TechFlow', accent: 'border-blue-500 shadow-[6px_6px_0px_0px_rgba(59,130,246,1)]' },
  { quote: 'The reporting is so transparent, and the results have been phenomenal. Our lead volume has tripled in 4 months.', name: 'Michael T.', role: 'CEO, ServicePro', accent: 'border-orange-500 shadow-[6px_6px_0px_0px_rgba(249,115,22,1)]' },
  { quote: 'Finally, an agency that doesn\'t just promise the world and disappear. We\'ve scaled our ad spend with total confidence.', name: 'Elena R.', role: 'Marketing Director, RetailHQ', accent: 'border-blue-500 shadow-[6px_6px_0px_0px_rgba(59,130,246,1)]' },
];

const serviceDefaults = [
  { key: 'project_social_media', name: 'Social Media Management', icon: <Icons.Phone className="w-6 h-6" />, color: 'bg-blue-600 text-white' },
  { key: 'project_content_creation', name: 'Content Creation', icon: <Icons.Video className="w-6 h-6" />, color: 'bg-orange-500 text-white' },
  { key: 'project_branding', name: 'Branding & Identity', icon: <Icons.Palette className="w-6 h-6" />, color: 'bg-[#1a2744] text-white' },
  { key: 'project_web_dev', name: 'Website Development', icon: <Icons.Laptop className="w-6 h-6" />, color: 'bg-[#F3EFE6] text-gray-900' },
  { key: 'project_digital_marketing', name: 'Digital Marketing', icon: <Icons.BarChart className="w-6 h-6" />, color: 'bg-orange-500 text-white' },
  { key: 'project_influencer', name: 'Influencer Marketing', icon: <Icons.Handshake className="w-6 h-6" />, color: 'bg-blue-600 text-white' },
];

export default async function WorkPage() {
  const imageRows = await db.select().from(siteImages).orderBy(asc(siteImages.key));
  const imgMap = new Map(imageRows.map(r => [r.key, r.url]));
  const services = serviceDefaults.map(s => ({ ...s, img: imgMap.get(s.key) || '' }));
  return (
    <div className="flex flex-col w-full">

      {/* HEADER */}
      <section className="bg-[#1a2744] py-28 px-6 md:px-12 border-b-[1.5px] border-gray-900 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <svg className="hidden md:block absolute top-12 right-24 w-12 h-12 text-orange-500/60 animate-spin-slow" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.5 8.5L23 11l-8.5 2.5L12 22l-2.5-8.5L1 11l8.5-2.5z" /></svg>
        <svg className="hidden md:block absolute bottom-16 left-16 w-16 h-16 text-white/10 animate-float" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5"><circle cx="50" cy="50" r="45" /><circle cx="50" cy="50" r="30" /></svg>

        <div className="max-w-[1200px] mx-auto relative z-10 text-center w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-fjalla text-6xl md:text-8xl lg:text-9xl leading-[0.88] uppercase text-white mb-8">
              Case Studies<br /><span className="text-orange-500">&amp; Work</span>
            </h1>
            <p className="text-xl text-blue-200 font-medium max-w-2xl mx-auto">
              We believe in earning your business through transparent, undeniable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* METRICS STRIP */}
      <section className="bg-orange-500 border-b-[1.5px] border-gray-900 py-8 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: '300%', label: 'Avg Reach Increase' },
            { val: '5x', label: 'Lead Flow Growth' },
            { val: '40+', label: 'Campaigns Launched' },
            { val: '100%', label: 'Done-For-You' },
          ].map((m, i) => (
            <div key={i}>
              <div className="font-fjalla text-4xl md:text-5xl text-white mb-1">{m.val}</div>
              <div className="text-orange-100 font-bold text-xs uppercase tracking-wider">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section className="bg-white py-24 px-6 md:px-12 w-full border-b-[1.5px] border-gray-900">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="font-fjalla text-5xl md:text-6xl text-gray-900 uppercase mb-3">Select Case Studies</h2>
          <p className="text-gray-600 font-medium mb-16 max-w-xl">Deep-dives into our best work, with real numbers and honest reporting.</p>

          <div className="grid grid-cols-1 gap-12">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl border-[2px] border-gray-900 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] overflow-hidden group ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                {/* Visual panel */}
                <div className={`${cs.bg} p-12 md:p-16 flex flex-col justify-between min-h-[360px] relative overflow-hidden`}>
                  <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                  <div className="relative z-10">
                    <span className="inline-block border border-white/30 text-white/80 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">{cs.label}</span>
                    <h3 className="font-fjalla text-6xl md:text-7xl text-white uppercase leading-none mb-4">{cs.title}</h3>
                  </div>
                  <div className={`relative z-10 ${cs.accent} text-white font-bold py-3 px-6 rounded-full w-max border-[1.5px] border-white/20 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] group-hover:scale-105 transition-transform text-lg`}>
                    {cs.result}
                  </div>
                </div>

                {/* Content panel */}
                <div className="bg-white p-12 md:p-16 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {cs.tags.map(t => (
                        <span key={t} className="text-xs font-bold uppercase tracking-widest bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full border border-gray-200">{t}</span>
                      ))}
                    </div>
                    <h4 className="font-fjalla text-3xl md:text-4xl uppercase text-gray-900 mb-4">{cs.subtitle}</h4>
                    <p className="text-gray-600 font-medium leading-relaxed text-lg">{cs.desc}</p>
                  </div>
                  <div className="mt-10">
                    {cs.slug ? (
                      <Link href={`/case-studies/${cs.slug}`} className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold py-4 px-8 rounded-full border-[1.5px] border-gray-900 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] transition-all">
                        Read Case Study <span>→</span>
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-gray-400 font-medium text-sm border border-dashed border-gray-300 px-4 py-2 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES WE OFFER VISUALLY (Fruitbowl-inspired) */}
      <section className="bg-[#F3EFE6] py-24 px-6 md:px-12 w-full border-b-[1.5px] border-gray-900 relative overflow-hidden">
        <div className="absolute top-8 right-8 w-48 h-48 border-[1px] border-orange-300/30 grid grid-cols-4 grid-rows-4 pointer-events-none z-0" aria-hidden="true">
          {[...Array(16)].map((_, i) => <div key={i} className="border-[0.5px] border-orange-300/15" />)}
        </div>

        <div className="max-w-[1600px] mx-auto">
          <div className="mb-16">
            <h2 className="font-fjalla text-5xl md:text-6xl text-gray-900 uppercase">What We Do</h2>
            <p className="text-gray-600 font-medium mt-4 max-w-md">Full-service digital marketing delivered end-to-end by one dedicated team.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-2xl border-[1.5px] border-gray-900 shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] overflow-hidden hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(26,26,26,1)] transition-all"
              >
                {/* Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={svc.img}
                  alt={svc.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Label bar */}
                <div className={`${svc.color} p-5 flex items-center justify-between`}>
                  <h4 className="font-fjalla text-xl uppercase">{svc.name}</h4>
                  <span className="[&svg]:w-6 [&svg]:h-6">{svc.icon}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 bg-[#1a2744] text-white font-bold py-4 px-10 rounded-full border-[1.5px] border-gray-900 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] transition-all text-lg">
              View All Services <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-white py-24 px-6 md:px-12 w-full border-t-[1.5px] border-gray-900">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="font-fjalla text-5xl md:text-6xl text-gray-900 uppercase mb-3">Client Love</h2>
          <p className="text-gray-600 font-medium mb-16">Don&apos;t just take our word for it.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white p-8 rounded-2xl border-[2px] border-gray-900 ${t.accent} hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 flex flex-col justify-between`}
              >
                <div>
                  <div className="text-orange-500 text-4xl font-fjalla mb-4">&ldquo;</div>
                  <p className="text-gray-700 font-medium text-lg leading-relaxed mb-8">{t.quote}</p>
                </div>
                <div>
                  <div className="font-bold text-gray-900 uppercase tracking-widest text-sm">{t.name}</div>
                  <div className="text-gray-500 text-sm mt-1">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-24 text-center px-6 border-t-[1.5px] border-gray-900">
        <h2 className="font-fjalla text-5xl md:text-7xl uppercase text-white mb-8 max-w-3xl mx-auto drop-shadow-sm">
          Ready to Build Your Bridge?
        </h2>
        <Link href="/contact" className="inline-block bg-white text-gray-900 font-bold py-4 px-12 rounded-full text-lg border-[1.5px] border-gray-900 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] transition-all">
          Get Your Free Audit
        </Link>
      </section>
    </div>
  );
}
