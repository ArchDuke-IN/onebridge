import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { CapabilitiesCarousel } from '@/components/services/capabilities-carousel';

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
      <section className="bg-white py-16 md:py-24 px-6 md:px-12 relative overflow-hidden border-b-[1.5px] border-gray-900">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-100 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
            <div className="max-w-2xl">
                <h3 className="text-orange-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-4 md:mb-6">Our Services</h3>
                <h1 className="font-fjalla text-4xl md:text-7xl lg:text-8xl leading-[0.9] uppercase text-gray-900 mb-4 md:mb-6">
                    Everything You Need.<br className="hidden md:block"/> Under One Roof.
                </h1>
                <p className="text-lg md:text-xl text-gray-600 font-medium max-w-xl">
                    All services are customised to your business goals and delivered end-to-end. One Team. One Strategy.
                </p>
            </div>
            <div className="pb-0 md:pb-4">
                <Link href="/contact" className="inline-block bg-blue-600 text-white font-bold py-3 md:py-4 px-8 md:px-10 rounded-full text-base md:text-lg border-[1.5px] border-gray-900 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] transition-all">
                    Start a Project
                </Link>
            </div>
        </div>
      </section>

      <CapabilitiesCarousel />

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
