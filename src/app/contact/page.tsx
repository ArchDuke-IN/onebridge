'use client';

import { siteConfig } from '@/config/site';
import { FormEvent, useState } from 'react';
import * as motion from 'framer-motion/client';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = new FormData(e.currentTarget);
    try {
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.get('name'),
          company: form.get('company'),
          email: form.get('email'),
          phone: form.get('number'),
          message: form.get('message'),
        }),
      });
    } catch {}
    setSubmitted(true);
    setSending(false);
  };

  return (
    <div className="flex flex-col w-full">

      <section className="max-w-[1200px] mx-auto px-6 pt-20 md:pt-28 pb-16 md:pb-24 w-full">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[var(--navy)] leading-[1.15] mb-6">Ready for Real Digital Impact?</h1>
          <p className="text-lg md:text-xl text-[var(--text)] leading-relaxed max-w-2xl">
            Whether you need a complete overhaul or just a strategic partner, we are here to bridge the gap.
          </p>
        </motion.div>
      </section>

      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="border border-[var(--border)] bg-white rounded-lg p-8 mb-10">
                <h3 className="text-xl text-[var(--navy)] font-[var(--font-playfair)] mb-3">Claim Your Free Audit</h3>
                <p className="text-sm text-[var(--text)] mb-6">
                  Not sure where to start? We offer a comprehensive digital audit for businesses — completely free. We analyze your current footprint and show you exactly where the gaps are.
                </p>
                <ul className="space-y-3 text-sm text-[var(--text)]">
                  <li className="flex items-center gap-2"><span className="text-[var(--orange)]">&#10003;</span> SEO &amp; Website Performance</li>
                  <li className="flex items-center gap-2"><span className="text-[var(--orange)]">&#10003;</span> Social Media Presence</li>
                  <li className="flex items-center gap-2"><span className="text-[var(--orange)]">&#10003;</span> Competitor Benchmarking</li>
                </ul>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wider text-[var(--text)] mb-2">Direct Contact</div>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-lg text-[var(--navy)] hover:text-[var(--orange)] transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
            </motion.div>

            <div>
              {submitted ? (
                <div className="border border-[var(--border)] bg-white rounded-lg p-12 text-center">
                  <div className="w-12 h-12 bg-[var(--navy)] rounded-lg flex items-center justify-center mx-auto mb-4 text-white text-xl">&#10003;</div>
                  <h2 className="text-xl text-[var(--navy)] font-[var(--font-playfair)] mb-2">Thank You</h2>
                  <p className="text-sm text-[var(--text)]">We&apos;ll be in touch within 24 hours.</p>
                </div>
              ) : (
                <div className="border border-[var(--border)] bg-white rounded-lg p-8">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="text-xs font-medium text-[var(--navy)] block mb-1">Name <span className="text-red-400">*</span></label>
                        <input type="text" id="name" required className="w-full p-2.5 border border-[var(--border)] rounded text-sm bg-[var(--background)] focus:outline-none focus:border-[var(--navy)] transition-colors" />
                      </div>
                      <div>
                        <label htmlFor="company" className="text-xs font-medium text-[var(--navy)] block mb-1">Company <span className="text-red-400">*</span></label>
                        <input type="text" id="company" required className="w-full p-2.5 border border-[var(--border)] rounded text-sm bg-[var(--background)] focus:outline-none focus:border-[var(--navy)] transition-colors" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="text-xs font-medium text-[var(--navy)] block mb-1">Email <span className="text-red-400">*</span></label>
                        <input type="email" id="email" required className="w-full p-2.5 border border-[var(--border)] rounded text-sm bg-[var(--background)] focus:outline-none focus:border-[var(--navy)] transition-colors" />
                      </div>
                      <div>
                        <label htmlFor="number" className="text-xs font-medium text-[var(--navy)] block mb-1">Phone <span className="text-red-400">*</span></label>
                        <input type="tel" id="number" required className="w-full p-2.5 border border-[var(--border)] rounded text-sm bg-[var(--background)] focus:outline-none focus:border-[var(--navy)] transition-colors" />
                      </div>
                    </div>
                    <div>
                      <textarea id="message" required rows={4} className="w-full p-3 border border-[var(--border)] rounded text-sm bg-[var(--background)] focus:outline-none focus:border-[var(--navy)] transition-colors resize-none" placeholder="Describe your project..."></textarea>
                    </div>
                    <button type="submit" disabled={sending} className="bg-[var(--navy)] text-white text-sm font-medium py-2.5 px-5 rounded-lg hover:opacity-90 transition-opacity w-full sm:w-auto disabled:opacity-50">
                      {sending ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
