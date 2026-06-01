'use client';

import { siteConfig } from '@/config/site';
import { FormEvent, useState } from 'react';
import * as motion from 'framer-motion/client';

interface Props {
  content: Record<string, string>;
}

export function ContactForm({ content: c }: Props) {
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

  if (submitted) {
    return (
      <div className="border border-[var(--border)] bg-white rounded-lg p-12 text-center">
        <div className="w-12 h-12 bg-[var(--navy)] rounded-lg flex items-center justify-center mx-auto mb-4 text-white text-xl">&#10003;</div>
        <h2 className="text-xl text-[var(--navy)] font-[var(--font-satoshi)] mb-2">{c['form.thank_you_title'] ?? "Thank You"}</h2>
        <p className="text-sm text-[var(--text)]">{c['form.thank_you_message'] ?? "We'll be in touch within 24 hours."}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-[var(--text)] mb-2">{c['direct_contact.label'] ?? "Direct Contact"}</div>
      <a href={`mailto:${siteConfig.contact.email}`} className="text-lg text-[var(--navy)] hover:text-[var(--orange)] transition-colors block mb-6">
        {siteConfig.contact.email}
      </a>

      <div className="border border-[var(--border)] bg-white rounded-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="text-xs font-medium text-[var(--navy)] block mb-1">{c['form.label_name'] ?? "Name"} <span className="text-red-400">*</span></label>
              <input type="text" id="name" name="name" required className="w-full p-2.5 border border-[var(--border)] rounded text-sm bg-white focus:outline-none focus:border-[var(--navy)] transition-colors" />
            </div>
            <div>
              <label htmlFor="company" className="text-xs font-medium text-[var(--navy)] block mb-1">{c['form.label_company'] ?? "Company"} <span className="text-red-400">*</span></label>
              <input type="text" id="company" name="company" required className="w-full p-2.5 border border-[var(--border)] rounded text-sm bg-white focus:outline-none focus:border-[var(--navy)] transition-colors" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="text-xs font-medium text-[var(--navy)] block mb-1">{c['form.label_email'] ?? "Email"} <span className="text-red-400">*</span></label>
              <input type="email" id="email" name="email" required className="w-full p-2.5 border border-[var(--border)] rounded text-sm bg-white focus:outline-none focus:border-[var(--navy)] transition-colors" />
            </div>
            <div>
              <label htmlFor="number" className="text-xs font-medium text-[var(--navy)] block mb-1">{c['form.label_phone'] ?? "Phone"} <span className="text-red-400">*</span></label>
              <input type="tel" id="number" name="number" required className="w-full p-2.5 border border-[var(--border)] rounded text-sm bg-white focus:outline-none focus:border-[var(--navy)] transition-colors" />
            </div>
          </div>
          <div>
            <textarea id="message" name="message" required rows={4} className="w-full p-3 border border-[var(--border)] rounded text-sm bg-white focus:outline-none focus:border-[var(--navy)] transition-colors resize-none" placeholder={c['form.placeholder'] ?? "Describe your project..."}></textarea>
          </div>
          <button type="submit" disabled={sending} className="bg-[var(--navy)] text-white text-sm font-medium py-2.5 px-5 rounded-lg hover:bg-[#233558] transition-colors w-full sm:w-auto disabled:opacity-50 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--navy)]">
            {sending ? (c['form.sending_text'] ?? 'Sending...') : (c['form.submit_text'] ?? 'Send Message')}
          </button>
        </form>
      </div>
    </div>
  );
}
