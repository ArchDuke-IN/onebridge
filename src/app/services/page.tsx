import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import * as motion from 'framer-motion/client';

export const metadata: Metadata = {
  title: 'Our Services | Digital Marketing & Branding',
  description: 'Social Media Management, Content Creation, Branding, Website Development, and more.',
  alternates: { canonical: `${siteConfig.url}/services` },
};

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" }, transition: { duration: 0.5 } };

const services = [
  { title: "Social Media Management", desc: "Strategy, content, posting & engagement across all platforms." },
  { title: "Content Creation", desc: "Reels, videos, carousels, graphics & branded posts." },
  { title: "Branding & Identity", desc: "Logos, visual identity, profile optimisation & brand positioning." },
  { title: "Website Development", desc: "Fast, clean, conversion-focused websites working 24/7." },
  { title: "Digital Marketing", desc: "Paid Ads, SEO, Email Marketing & automation setups." },
  { title: "Influencer Marketing", desc: "Identifying, outreach, and managing campaigns with local creators." },
];

const process = [
  { step: "01", title: "Discovery", desc: "We deep dive into your business, your goals, and your audience." },
  { step: "02", title: "Strategy", desc: "We map out a custom digital strategy designed for ROI." },
  { step: "03", title: "Creation", desc: "Our team generates high-quality assets, copy, and campaigns." },
  { step: "04", title: "Execution", desc: "We launch, monitor, report and optimize." },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">

      <section className="max-w-[1200px] mx-auto px-6 pt-20 md:pt-28 pb-16 md:pb-24 w-full">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[var(--navy)] leading-[1.15] mb-6">Everything You Need. Under One Roof.</h1>
          <p className="text-lg md:text-xl text-[var(--text)] leading-relaxed max-w-2xl mb-8">
            All services customised to your business goals and delivered end-to-end. One team, one strategy.
          </p>
          <Link href="/contact" className="bg-[var(--navy)] text-white text-sm font-medium py-2.5 px-5 rounded-lg hover:opacity-90 transition-opacity inline-block">
            Start a Project
          </Link>
        </motion.div>
      </section>

      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 w-full">
          <motion.div {...fadeUp} className="mb-12">
            <h2 className="text-2xl md:text-3xl text-[var(--navy)] mb-2">Core Capabilities</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="p-6 rounded-lg border border-[var(--border)] bg-white">
                <div className="text-lg text-[var(--orange)] font-semibold mb-1.5 font-[var(--font-playfair)]">{s.title}</div>
                <p className="text-sm text-[var(--text)]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl text-[var(--navy)] mb-4">From Discovery to Consistent Growth.</h2>
              <p className="text-[var(--text)] leading-relaxed">
                We&apos;ve standardized the path to digital success. A simple, proven methodology applied uniquely to every client.
              </p>
            </motion.div>

            <div className="space-y-6">
              {process.map((item, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} className="flex gap-4">
                  <div className="text-lg text-[var(--orange)] font-semibold font-[var(--font-playfair)] shrink-0 w-10">{item.step}</div>
                  <div>
                    <div className="font-medium text-[var(--navy)] mb-0.5">{item.title}</div>
                    <p className="text-sm text-[var(--text)]">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
