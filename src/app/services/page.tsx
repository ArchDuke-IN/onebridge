import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services | Digital Marketing & Branding',
  description: 'Explore the creative and marketing services we offer, including Social Media Management, Content Creation, Branding, Website Development, and more.',
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HEADER SECTION */}
      <section className="bg-white py-24 px-6 md:px-12 relative overflow-hidden border-b-[1.5px] border-gray-900">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-100 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-2xl">
                <h3 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-6">Our Services</h3>
                <h1 className="font-fjalla text-5xl md:text-7xl lg:text-8xl leading-[0.9] uppercase text-gray-900 mb-6">
                    Everything You Need.<br className="hidden md:block"/> Under One Roof.
                </h1>
                <p className="text-xl text-gray-600 font-medium max-w-xl">
                    All services are customised to your business goals and delivered end-to-end. One Team. One Strategy.
                </p>
            </div>
            <div className="pb-4">
                <Link href="/contact" className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-lg border-[1.5px] border-gray-900 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] transition-all">
                    Start a Project
                </Link>
            </div>
        </div>
      </section>

      {/* SERVICES CAROUSEL */}
      <section className="bg-[#F3EFE6] w-full border-t-[1.5px] border-gray-900 overflow-hidden py-24">
        <div className="px-6 md:px-12 max-w-[1600px] mx-auto w-full mb-12 flex justify-between items-end">
            <h2 className="font-fjalla text-4xl md:text-6xl text-gray-900 uppercase">Core Capabilities</h2>
            <div className="hidden md:flex gap-4">
                {/* Visual indicator arrows for the horizontal scroll */}
                <div className="w-12 h-12 rounded-full border-[2px] border-gray-900 flex items-center justify-center hover:bg-white cursor-pointer shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] transition-colors">
                    <span className="font-bold text-xl select-none" aria-hidden="true">&larr;</span>
                </div>
                <div className="w-12 h-12 rounded-full border-[2px] border-gray-900 flex items-center justify-center hover:bg-white cursor-pointer shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] transition-colors">
                    <span className="font-bold text-xl select-none" aria-hidden="true">&rarr;</span>
                </div>
            </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto gap-8 px-6 md:px-12 pb-12 w-full snap-x snap-mandatory scroll-smooth hide-scrollbar" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {[
                {
                    id: "01",
                    title: "Social Media Management",
                desc: "Strategy, content, posting & engagement across all platforms.",
                bg: "bg-[#08D9D6]" // Cyan from contacts page
            },
            {
                id: "02",
                title: "Content Creation",
                desc: "Reels, videos, carousels, graphics & branded posts that stop the scroll.",
                bg: "bg-[#FF66C4]" // Magenta
            },
            {
                id: "03",
                title: "Branding & Identity",
                desc: "Logos, visual identity, profile optimisation & brand positioning.",
                bg: "bg-[#FFE135]" // Yellow
            },
            {
                id: "04",
                title: "Website Development",
                desc: "Fast, clean, conversion-focused websites working 24/7 for you.",
                bg: "bg-white"
            },
            {
                id: "05",
                title: "Digital Marketing",
                desc: "Paid Ads (Meta, Google), SEO, Email Marketing & automation setups.",
                bg: "bg-[#A05CFF]" // Purple
            },
            {
                id: "06",
                title: "Influencer Marketing",
                desc: "Identifying, outreach, and managing campaigns with local creators.",
                bg: "bg-[#52FFC2]" // Lime
            }].map((s, i) => (
                <div key={i} className={`group min-w-[85vw] sm:min-w-[400px] h-[500px] p-8 md:p-10 rounded-[2rem] border-[3px] border-gray-900 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(26,26,26,1)] transition-all flex flex-col justify-between snap-center shrink-0 ${s.bg} relative overflow-hidden`} style={{
                    backgroundImage: i % 2 !== 0 ? "linear-gradient(rgba(26, 26, 26, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 26, 26, 0.1) 1px, transparent 1px)" : "none",
                    backgroundSize: "20px 20px"
                }}>
                    
                    {/* Decorative Background Shape */}
                    {(i % 2 === 0) && (
                        <svg className="absolute -top-10 -right-10 w-48 h-48 opacity-20 text-gray-900 rotate-12" viewBox="0 0 100 100" fill="currentColor">
                           <polygon points="50,0 100,25 100,75 50,100 0,75 0,25"/>
                        </svg>
                    )}
                    
                    <div className="flex justify-between items-start mb-16 relative z-10 w-full">
                        <span className="font-fjalla text-5xl text-gray-900 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]" style={{ WebkitTextStroke: "1px #1a1a1a" }}>{s.id}</span>
                        <div className="w-14 h-14 bg-white rounded-full border-[2px] border-gray-900 flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] text-xl font-bold shrink-0">
                            &rarr;
                        </div>
                    </div>
                    
                    <div className="relative z-10 bg-white/95 p-6 rounded-2xl border-[2px] border-gray-900 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] group-hover:-translate-y-1 transition-transform">
                        <h3 className="font-fjalla text-4xl mb-3 text-gray-900 uppercase leading-[0.95] drop-shadow-sm">{s.title}</h3>
                        <p className="text-lg font-bold leading-relaxed text-gray-800">
                            {s.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="bg-white border-t-[1.5px] border-gray-900 overflow-hidden w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 md:p-24 border-b-[1.5px] lg:border-b-0 lg:border-r-[1.5px] border-gray-900 flex flex-col justify-center bg-blue-600 text-white">
                <h3 className="font-bold tracking-widest uppercase text-sm mb-4 text-blue-200">Our Process</h3>
                <h2 className="font-fjalla text-5xl md:text-7xl uppercase leading-[0.9] mb-8">
                    From Discovery <br/> To Consistent<br/> Growth.
                </h2>
                <p className="text-xl text-blue-100 font-medium">
                    We've standardized the path to digital success. It's a simple, proven methodology applied uniquely to every single client.
                </p>
            </div>
            
            <div className="p-12 md:p-24 flex flex-col gap-12 bg-[#F3EFE6]">
                {[
                    { step: "01", title: "Discovery", desc: "We deep dive into your business, your goals, and your audience." },
                    { step: "02", title: "Strategy", desc: "We map out a custom digital strategy designed explicitly for ROI." },
                    { step: "03", title: "Creation", desc: "Our team generates high-quality assets, copy, and campaigns." },
                    { step: "04", title: "Execution", desc: "We launch, monitor, report and optimize. You focus on running your business." }
                ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 relative group">
                        <div className="w-16 h-16 shrink-0 bg-white border-[1.5px] border-gray-900 rounded-full flex items-center justify-center font-fjalla text-2xl text-blue-600 z-10 relative shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] group-hover:scale-110 transition-transform">
                            {item.step}
                        </div>
                        <div className="flex-1 pt-2">
                            <h4 className="font-fjalla text-2xl uppercase text-gray-900 mb-2">{item.title}</h4>
                            <p className="text-gray-700 font-medium">{item.desc}</p>
                        </div>
                        {/* Connecting Line */}
                        {idx !== 3 && (
                            <div className="absolute top-16 left-8 w-[1.5px] h-[calc(100%+16px)] bg-gray-300 -ml-px z-0"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
