'use client';

import { siteConfig } from '@/config/site';
import { FormEvent, useState } from 'react';
import * as motion from 'framer-motion/client';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      <section className="bg-orange-500 py-32 px-6 md:px-12 text-center border-b-[1.5px] border-gray-900 overflow-hidden relative">
  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,var(--foreground)_10px,var(--foreground)_11px)] opacity-20 pointer-events-none" />
  <svg className="absolute top-0 left-0 w-48 h-48 text-blue-600 animate-spin-slow opacity-30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M0,50 Q50,0 100,50" />
  </svg>
  <div className="absolute bottom-10 right-10 flex space-x-2">
    <span className="text-2xl text-blue-600 animate-float opacity-70">★</span>
    <span className="text-2xl text-orange-500 animate-float opacity-70" style={{ animationDelay: "0.3s" }}>✶</span>
    <span className="text-2xl text-gray-900 animate-float opacity-70" style={{ animationDelay: "0.6s" }}>✦</span>
  </div>
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-10 mix-blend-overlay">
    <span className="font-fjalla text-[20vw] leading-none block whitespace-nowrap">LET&apos;S GROW</span>
  </div>
        

        <div className="max-w-[800px] mx-auto relative z-10">
          <h3 className="font-bold tracking-widest uppercase text-sm mb-6 text-orange-100">Let&apos;s Grow Together</h3>
          <h1 className="font-fjalla text-6xl md:text-8xl text-white uppercase leading-[0.9] mb-8 drop-shadow-sm">
            Ready For Real <br /> Digital Impact?
          </h1>
          <p className="text-xl text-orange-50 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you need a complete overhaul or just a strategic partner to handle the daily execution, we are here to bridge the gap.
          </p>
        </div>
      </section>

      <section className="w-full border-t-[1.5px] border-gray-900">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:min-h-[700px]">
          <div className="p-8 md:p-16 lg:p-24 bg-[#F3EFE6] border-b-[1.5px] lg:border-b-0 lg:border-r-[1.5px] border-gray-900 flex flex-col justify-center w-full">
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

          <div className="p-8 md:p-16 lg:p-24 bg-blue-600 relative flex flex-col items-center justify-center w-full z-0 overflow-hidden">
            {/* Background Decorations */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="hidden lg:grid grid-cols-3 grid-rows-3 gap-2 absolute top-12 left-12 z-0" 
              aria-hidden="true"
            >
                {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-[#FFE1A8] rounded-full border-[2px] border-gray-900 shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]"></div>
                ))}
            </motion.div>
            
            {/* Shapes bottom right */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-8 right-8 z-0 hidden lg:flex items-end gap-2"
            >
                <div className="w-12 h-24 bg-orange-500 border-[2px] border-gray-900"></div>
                <div className="w-12 h-32 bg-orange-500 border-[2px] border-gray-900"></div>
                <div className="w-24 h-24 bg-[#FFE1A8] rounded-full border-[2px] border-gray-900 relative">
                    <div className="w-8 h-8 rounded-full border-[2px] border-gray-900 absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-400"></div>
                </div>
                <svg className="absolute -top-16 -left-12 w-12 h-12 text-orange-500" viewBox="0 0 24 24" fill="currentColor" stroke="black" strokeWidth="1.5">
                    <path d="M12 0l2 9 9 2-9 2-2 9-2-9-9-2 9-2z"/>
                </svg>
            </motion.div>
            
            {/* Zigzag top right */}
            <svg className="absolute top-0 right-0 w-32 h-32 hidden lg:block" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M100 0 L50 25 L100 50 L50 75 L100 100 L100 0 Z" fill="#FFE1A8" stroke="black" strokeWidth="2"/>
            </svg>

            <div className="text-center relative z-10 w-full max-w-2xl mb-12">
                <h2 className="font-fjalla text-6xl md:text-7xl uppercase text-white mb-4 drop-shadow-[3px_3px_0_rgba(26,26,26,1)]" style={{ WebkitTextStroke: "2px #1a1a1a" }}>
                  LETS TALK!
                </h2>
                <p className="text-white font-medium text-lg md:text-xl">Get in touch with us and let&apos;s make magic happen!</p>
            </div>
            
            {submitted ? (
              <div className="text-center py-16 bg-white w-full max-w-xl rounded-3xl border-[3px] border-gray-900 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] relative z-10">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl border-[2px] border-gray-900 flex items-center justify-center mx-auto mb-6 shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
                  <span className="text-white text-3xl font-bold">✓</span>
                </div>
                <h2 className="font-fjalla text-3xl uppercase text-gray-900 mb-4">Thank You</h2>
                <p className="text-gray-600 font-medium">We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <div className="relative w-full max-w-xl mx-auto z-10">
                {/* Tablet Frame */}
                <div className="bg-gray-300 w-full rounded-[2rem] border-[3px] border-gray-900 p-3 shadow-[12px_12px_0px_0px_rgba(26,26,26,1)] relative">
                    <div className="absolute left-0 top-1/2 -my-6 h-12 w-1.5 bg-gray-500 rounded-r-md"></div>
                    <div className="bg-white w-full rounded-[1.5rem] border-[2px] border-gray-900 p-8 md:p-10">
                        <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="flex flex-col space-y-1.5">
                                <label htmlFor="name" className="font-bold text-sm uppercase text-gray-800">Name <span className="text-red-500">*</span></label>
                                <input type="text" id="name" required className="p-3 rounded-2xl border-[2px] border-gray-900 bg-gray-100 focus:bg-white focus:outline-none transition-colors" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <label htmlFor="company" className="font-bold text-sm uppercase text-gray-800">Company <span className="text-red-500">*</span></label>
                                <input type="text" id="company" required className="p-3 rounded-2xl border-[2px] border-gray-900 bg-gray-100 focus:bg-white focus:outline-none transition-colors" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="flex flex-col space-y-1.5">
                                <label htmlFor="email" className="font-bold text-sm uppercase text-gray-800">Email Address <span className="text-red-500">*</span></label>
                                <input type="email" id="email" required className="p-3 rounded-2xl border-[2px] border-gray-900 bg-gray-100 focus:bg-white focus:outline-none transition-colors" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <label htmlFor="number" className="font-bold text-sm uppercase text-gray-800">Number <span className="text-red-500">*</span></label>
                                <input type="tel" id="number" required className="p-3 rounded-2xl border-[2px] border-gray-900 bg-gray-100 focus:bg-white focus:outline-none transition-colors" />
                            </div>
                        </div>

                        <div className="flex flex-col space-y-1.5 pt-2">
                            <textarea id="message" required rows={4} className="p-4 rounded-2xl border-[2px] border-gray-900 bg-gray-100 focus:bg-white focus:outline-none transition-colors resize-none font-medium placeholder:text-gray-400" placeholder="DESCRIBE YOUR PROJECT TO US"></textarea>
                        </div>

                        <div className="flex justify-center pt-6">
                            <button type="submit" className="bg-orange-500 text-white font-fjalla text-xl py-3 px-12 rounded-lg border-[3px] border-gray-900 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] transition-all uppercase tracking-wider relative group">
                                SEND
                                <span className="absolute -right-4 top-1/2 w-4 h-1 bg-white hidden group-hover:block transition-all"></span>
                            </button>
                        </div>
                        </form>
                    </div>
                    {/* Pen decoration */}
                    <motion.div 
                      animate={{ y: [0, -6, 0], rotate: [-30, -28, -30] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      className="absolute -right-12 bottom-24 w-32 h-2 bg-white border-[1.5px] border-gray-900 rounded-full rotate-[-30deg] z-20 hidden md:block origin-left"
                    >
                        <div className="absolute right-0 top-0 w-3 h-2 bg-yellow-400 border-l-[1.5px] border-gray-900 rounded-r-full"></div>
                    </motion.div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
