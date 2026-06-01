import { getPageContent } from '@/lib/content';
import { ContactForm } from './contact-form';

export default async function ContactPage() {
  const c = await getPageContent('contact');

  return (
    <div className="flex flex-col w-full">

      <section className="max-w-[1200px] mx-auto px-6 pt-20 md:pt-28 pb-16 md:pb-24 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[var(--navy)] leading-[1.15] mb-6">
            {c['hero.title'] ?? "Ready for Real Digital Impact?"}
          </h1>
          <p className="text-lg md:text-xl text-[var(--text)] leading-relaxed max-w-2xl">
            {c['hero.description'] ?? "Whether you need a complete overhaul or just a strategic partner, we are here to bridge the gap."}
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            <div>
              <div className="border border-[var(--border)] bg-white rounded-lg p-8 mb-10">
                <h3 className="text-xl text-[var(--navy)] font-[var(--font-satoshi)] mb-3">
                  {c['audit.title'] ?? "Claim Your Free Audit"}
                </h3>
                <p className="text-sm text-[var(--text)] mb-6">
                  {c['audit.description'] ?? "Not sure where to start? We offer a comprehensive digital audit for businesses — completely free. We analyze your current footprint and show you exactly where the gaps are."}
                </p>
                <ul className="space-y-3 text-sm text-[var(--text)]">
                  <li className="flex items-center gap-2"><span className="text-[var(--orange)]">&#10003;</span> {c['audit.check_1'] ?? "SEO & Website Performance"}</li>
                  <li className="flex items-center gap-2"><span className="text-[var(--orange)]">&#10003;</span> {c['audit.check_2'] ?? "Social Media Presence"}</li>
                  <li className="flex items-center gap-2"><span className="text-[var(--orange)]">&#10003;</span> {c['audit.check_3'] ?? "Competitor Benchmarking"}</li>
                </ul>
              </div>
            </div>

            <ContactForm content={c} />

          </div>
        </div>
      </section>

    </div>
  );
}
