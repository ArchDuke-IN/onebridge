'use client';

import { useRef } from 'react';
import Image from 'next/image';

const defaultServices = [
  { id: "01", key: 'service_social_media', title: "Social Media Management", desc: "Strategy, content, posting & engagement across all platforms.", bg: "bg-[#08D9D6]" },
  { id: "02", key: 'service_content_creation', title: "Content Creation", desc: "Reels, videos, carousels, graphics & branded posts that stop the scroll.", bg: "bg-[#FF66C4]" },
  { id: "03", key: 'service_branding', title: "Branding & Identity", desc: "Logos, visual identity, profile optimisation & brand positioning.", bg: "bg-[#FFE135]" },
  { id: "04", key: 'service_web_dev', title: "Website Development", desc: "Fast, clean, conversion-focused websites working 24/7 for you.", bg: "bg-white" },
  { id: "05", key: 'service_digital_marketing', title: "Digital Marketing", desc: "Paid Ads (Meta, Google), SEO, Email Marketing & automation setups.", bg: "bg-[#A05CFF]" },
  { id: "06", key: 'service_influencer', title: "Influencer Marketing", desc: "Identifying, outreach, and managing campaigns with local creators.", bg: "bg-[#52FFC2]" },
];

interface Props {
  images?: Record<string, string>;
}

export function CapabilitiesCarousel({ images = {} }: Props) {
  const services = defaultServices.map(s => ({ ...s, img: images[s.key] }));
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = direction === 'left' ? -360 : 360;
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section className="bg-[#F3EFE6] w-full border-t-[1.5px] border-gray-900 overflow-hidden py-16 md:py-24">
      <div className="px-6 md:px-12 max-w-[1600px] mx-auto w-full mb-8 md:mb-12 flex justify-between items-end">
        <h2 className="font-fjalla text-3xl md:text-6xl text-gray-900 uppercase">Core Capabilities</h2>
        <div className="hidden md:flex gap-4">
          <button
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border-[2px] border-gray-900 flex items-center justify-center hover:bg-white cursor-pointer shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(26,26,26,1)]"
            aria-label="Scroll left"
          >
            <span className="font-bold text-xl select-none">&larr;</span>
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border-[2px] border-gray-900 flex items-center justify-center hover:bg-white cursor-pointer shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(26,26,26,1)]"
            aria-label="Scroll right"
          >
            <span className="font-bold text-xl select-none">&rarr;</span>
          </button>
        </div>
      </div>

      <div className="md:hidden px-6 mb-6">
        <p className="text-sm text-gray-500 font-medium">Swipe to browse all services &rarr;</p>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 md:gap-8 px-6 md:px-12 pb-6 md:pb-12 w-full snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {services.map((s, i) => (
          <div
            key={i}
            className="group min-w-[75vw] md:min-w-[400px] h-[420px] md:h-[500px] rounded-[2rem] border-[3px] border-gray-900 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(26,26,26,1)] transition-all flex flex-col justify-between snap-center shrink-0 relative overflow-hidden"
          >
            <Image
              src={s.img}
              alt={s.title}
              fill
              sizes="(max-width: 768px) 75vw, 400px"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-[1]" />

            {(i % 2 === 0) && (
              <svg className="absolute -top-10 -right-10 w-48 h-48 opacity-10 text-white rotate-12 z-[2]" viewBox="0 0 100 100" fill="currentColor">
                <polygon points="50,0 100,25 100,75 50,100 0,75 0,25"/>
              </svg>
            )}

            <div className="flex justify-between items-start p-6 md:p-10 relative z-10 w-full">
              <span className="font-fjalla text-4xl md:text-5xl text-white/80 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
                {s.id}
              </span>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white/90 rounded-full border-[2px] border-gray-900 flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] text-lg md:text-xl font-bold shrink-0">
                &rarr;
              </div>
            </div>

            <div className="relative z-10 bg-white/95 p-5 md:p-6 mx-6 md:mx-10 mb-6 md:mb-10 rounded-2xl border-[2px] border-gray-900 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] group-hover:-translate-y-1 transition-transform backdrop-blur-sm">
              <h3 className="font-fjalla text-2xl md:text-4xl mb-2 md:mb-3 text-gray-900 uppercase leading-[0.95] drop-shadow-sm">
                {s.title}
              </h3>
              <p className="text-base md:text-lg font-bold leading-relaxed text-gray-800">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
