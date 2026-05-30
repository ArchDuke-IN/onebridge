'use client';

import { siteConfig } from '@/config/site';
import { FormEvent, useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      <section className="bg-orange-500 py-32 px-6 md:px-12 text-center border-b-[1.5px] border-gray-900 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-10 mix-blend-overlay">
          <span className="font-fjalla text-[20vw] leading-none block whitespace-nowrap">LET'S GROW</span>
        </div>

        <div className="max-w-[800px] mx-auto relative z-10">
          <h3 className="font-bold tracking-widest uppercase text-sm mb-6 text-orange-100">Let's Grow Together</h3>
          <h1 className="font-fjalla text-6xl md:text-8xl text-white uppercase leading-[0.9] mb-8 drop-shadow-sm">
            Ready For Real <br /> Digital Impact?
          </h1>
          <p className="text-xl text-orange-50 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you need a complete overhaul or just a strategic partner to handle the daily execution, we are here to bridge the gap.
          </p>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
          <div className="p-12 md:p-24 bg-[#F3EFE6] border-b lg:border-b-0 lg:border-r border-gray-900 flex flex-col justify-center">
            <div className="bg-white p-10 rounded-3xl border-[1.5px] border-gray-900 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] mb-12 relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-100 rounded-full group-hover:scale-150 transition-transform motion-duration-normal"></div>
              <h3 className="font-fjalla text-3xl uppercase text-gray-900 mb-4 relative z-10">Claim Your Free Audit</h3>
              <p className="text-gray-700 font-medium mb-8 relative z-10">
                Not sure where to start? We offer a comprehensive digital audit for businesses completely free of charge. We analyze your current footprint and show you exactly where the gaps are.
              </p>
              <ul className="space-y-4 relative z-10 font-medium text-gray-800">
                <li className="flex items-center gap-3">
                  <span className="text-orange-500 text-xl">✓</span> SEO & Website Performance
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-orange-500 text-xl">✓</span> Social Media Presence
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-orange-500 text-xl">✓</span> Competitor Benchmarking
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-gray-900 uppercase tracking-widest text-sm">Direct Contact</h4>
              <div>
                <a href={`mailto:${siteConfig.contact.email}`} className="font-fjalla text-3xl md:text-4xl text-blue-600 hover:text-orange-500 transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>

          <div className="p-12 md:p-24 bg-white flex flex-col justify-center">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-blue-600 text-3xl">✓</span>
                </div>
                <h2 className="font-fjalla text-3xl uppercase text-gray-900 mb-4">Thank You</h2>
                <p className="text-gray-600">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <>
                <h2 className="font-fjalla text-4xl md:text-5xl uppercase text-gray-900 mb-8">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="name" className="font-bold text-xs uppercase tracking-widest text-gray-500">Full Name</label>
                      <input type="text" id="name" required className="p-4 rounded-xl border-[1.5px] border-gray-300 bg-gray-50 focus:bg-white focus:border-blue-600 focus:outline-none transition-colors" placeholder="Jane Doe" />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="company" className="font-bold text-xs uppercase tracking-widest text-gray-500">Company</label>
                      <input type="text" id="company" className="p-4 rounded-xl border-[1.5px] border-gray-300 bg-gray-50 focus:bg-white focus:border-blue-600 focus:outline-none transition-colors" placeholder="Acme Corp" />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label htmlFor="email" className="font-bold text-xs uppercase tracking-widest text-gray-500">Email Address</label>
                    <input type="email" id="email" required className="p-4 rounded-xl border-[1.5px] border-gray-300 bg-gray-50 focus:bg-white focus:border-blue-600 focus:outline-none transition-colors" placeholder="jane@company.com" />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label htmlFor="message" className="font-bold text-xs uppercase tracking-widest text-gray-500">How can we help?</label>
                    <textarea id="message" required rows={6} className="p-4 rounded-xl border-[1.5px] border-gray-300 bg-gray-50 focus:bg-white focus:border-blue-600 focus:outline-none transition-colors resize-none" placeholder="Tell us about your business goals..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-blue-600 text-white font-bold py-5 px-8 rounded-xl border-[1.5px] border-gray-900 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] transition-all text-lg mt-4 uppercase tracking-wider">
                    Submit Inquiry
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
