import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'About Us | Marketing Agency India',
  description: 'Learn about One Bridge Marketing, an innovative agency based in India specializing in visual identities, captivating graphics, and immersive experiences.',
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HEADER SECTION */}
      <section className="bg-blue-600 border-b-[1.5px] border-gray-900 overflow-hidden relative">
        {/* Background elements */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-orange-500 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
        
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10 text-center">
            <h1 className="font-fjalla text-5xl md:text-7xl lg:text-9xl text-white uppercase tracking-tight mb-6">
                We Are <br className="md:hidden" /> OneBridge.
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-medium leading-relaxed">
              OneBridge Marketing is a done-for-you digital growth agency built specifically for small and medium-sized businesses.
            </p>
        </div>
      </section>

      {/* CORE MESSAGE */}
      <section className="bg-white py-24 px-6 md:px-12 max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="font-fjalla text-4xl md:text-5xl text-gray-900 uppercase mb-8 leading-[1.1]">
                    What <span className="text-orange-500">"OneBridge"</span> Means.
                </h2>
                <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                        We bridge the gap between where your business is now, and where you want it to be online. No missing pieces. No broken links.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                        We provide exactly what you need to grow effectively, all expertly managed under one roof as your dedicated extension team.
                    </p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                    { title: "Strategy First", desc: "No guesswork. Data-driven plans." },
                    { title: "Full Execution", desc: "We build, deploy, and manage it all." },
                    { title: "One Roof", desc: "Your entire marketing team, consolidated." },
                    { title: "Long-Term Partner", desc: "We scale alongside your business." }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white p-6 border-[1.5px] border-gray-900 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] rounded-2xl">
                        <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mb-4 font-fjalla text-xl">
                            0{idx + 1}
                        </div>
                        <h4 className="font-bold text-xl mb-2 text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 text-sm font-medium">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* FOUNDATION (Values) */}
      <section className="bg-[#F3EFE6] border-y-[1.5px] border-gray-900 w-full py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-4 flex flex-col justify-between">
                <div>
                    <h3 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Our Foundation</h3>
                    <h2 className="font-fjalla text-5xl md:text-6xl text-gray-900 uppercase leading-[0.9] mb-8">
                        Vision, Mission & Core Values
                    </h2>
                    <p className="text-lg text-gray-700 font-medium mb-12">
                        We exist to simplify growth. By taking the weight of digital marketing off the shoulders of business owners, we empower them to focus entirely on their craft.
                    </p>
                </div>
                
                <div className="bg-[#1a1a1a] text-white p-8 rounded-3xl border border-gray-900">
                    <h4 className="font-fjalla text-2xl uppercase mb-4 text-orange-500">The Vision</h4>
                    <p className="text-gray-300 font-medium leading-relaxed">
                        To become the definitive digital growth partner for service-based businesses, fundamentally eliminating the stress of client acquisition.
                    </p>
                </div>
            </div>

            <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                        { title: "Integrity", desc: "Honest advice, transparent reporting, and real results. We build trust by delivering on our promises." },
                        { title: "Growth", desc: "We are obsessed with progression—for our clients, for our agency, and for ourselves." },
                        { title: "Simplicity", desc: "We cut through the noise. We implement clear, effective systems without overwhelming our partners." },
                        { title: "Ownership", desc: "We treat your business like our own. Total accountability from strategy to execution." }
                    ].map((value, i) => (
                        <div key={i} className="group p-8 md:p-10 bg-white border-[1.5px] border-gray-900 rounded-3xl hover:-translate-y-2 transition-transform duration-300 shadow-[6px_6px_0px_0px_rgba(26,26,26,1)]">
                            <h4 className="font-fjalla text-4xl text-blue-100 group-hover:text-blue-600 transition-colors uppercase mb-4">
                                0{i + 1}
                            </h4>
                            <h5 className="font-bold text-2xl mb-4 text-gray-900">{value.title}</h5>
                            <p className="text-gray-600 leading-relaxed font-medium">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F3EFE6] py-24 text-center px-6">
        <h2 className="font-fjalla text-5xl md:text-7xl uppercase text-gray-900 mb-8 max-w-3xl mx-auto">
            Ready to Build Your Bridge?
        </h2>
        <Link href="/contact" className="inline-block bg-orange-500 text-white font-bold py-4 px-12 rounded-full text-lg border-[1.5px] border-gray-900 shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] transition-all">
            Get Your Free Audit
        </Link>
      </section>
    </div>
  );
}
