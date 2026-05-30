import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing & Packages | One Bridge Marketing',
  description: 'View our transparent Month-to-Month packages for done-for-you digital marketing execution. No trapped clauses, just results.',
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
};

export default function PricingPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HEADER */}
      <section className="bg-white py-24 px-6 md:px-12 border-b-[1.5px] border-gray-900 overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto text-center relative z-10 w-full">
            <h3 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-6">Let's Grow Together</h3>
            <h1 className="font-fjalla text-6xl md:text-8xl lg:text-9xl leading-[0.9] uppercase text-gray-900 mb-8">
                Clear Pricing.<br/>No Traps.
            </h1>
            <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
                Month-to-month contracts. We believe in earning your business every 30 days through transparent, undeniable results.
            </p>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section className="bg-[#F3EFE6] py-24 px-6 md:px-12 max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Foundation */}
            <div className="bg-white p-10 rounded-3xl border-[1.5px] border-gray-900 flex flex-col relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-8">
                    <h3 className="font-fjalla text-3xl uppercase text-gray-900 mb-2">Foundation</h3>
                    <p className="text-gray-500 font-medium text-sm">Perfect for establishing your baseline.</p>
                </div>
                <div className="mb-8">
                    <span className="font-fjalla text-6xl text-blue-600">$1,000</span>
                    <span className="text-gray-500 font-bold uppercase tracking-wider text-sm ml-2">/ month</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow font-medium text-gray-700 text-sm">
                    <li className="flex items-start gap-3">
                        <span className="text-orange-500 mt-0.5">■</span>
                        Social Media Management
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-orange-500 mt-0.5">■</span>
                        Basic Content Creation
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-orange-500 mt-0.5">■</span>
                        Monthly Reporting
                    </li>
                </ul>
                <Link href="/contact" className="text-center w-full bg-white text-gray-900 font-bold py-4 rounded-xl border-[1.5px] border-gray-900 hover:bg-gray-50 transition-colors uppercase tracking-widest text-sm">
                    Select Plan
                </Link>
            </div>

            {/* Growth (Highlighted) */}
            <div className="bg-[#1a1a1a] text-white p-10 rounded-3xl border-[1.5px] border-gray-900 flex flex-col relative shadow-[8px_8px_0px_0px_rgba(249,115,22,1)] lg:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white font-bold text-xs uppercase tracking-widest py-1.5 px-4 rounded-full border border-gray-900">
                    Most Popular
                </div>
                <div className="mb-8">
                    <h3 className="font-fjalla text-3xl uppercase text-white mb-2">Growth</h3>
                    <p className="text-gray-400 font-medium text-sm">Designed to actively generate new leads.</p>
                </div>
                <div className="mb-8">
                    <span className="font-fjalla text-6xl text-orange-500">$2,500</span>
                    <span className="text-gray-400 font-bold uppercase tracking-wider text-sm ml-2">/ month</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow font-medium text-gray-300 text-sm">
                    <li className="flex items-start gap-3">
                        <span className="text-blue-500 mt-0.5">■</span>
                        Advanced Management
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-blue-500 mt-0.5">■</span>
                        Full Content Suite (Video & Photo)
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-blue-500 mt-0.5">■</span>
                        Paid Ads Management
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-blue-500 mt-0.5">■</span>
                        Bi-Weekly Strategy Calls
                    </li>
                </ul>
                <Link href="/contact" className="text-center w-full bg-orange-500 text-white font-bold py-4 rounded-xl border-[1.5px] border-gray-900 hover:bg-orange-600 transition-colors uppercase tracking-widest text-sm shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]">
                    Select Plan
                </Link>
            </div>

            {/* Scale */}
            <div className="bg-white p-10 rounded-3xl border-[1.5px] border-gray-900 flex flex-col relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-8">
                    <h3 className="font-fjalla text-3xl uppercase text-gray-900 mb-2">Scale</h3>
                    <p className="text-gray-500 font-medium text-sm">For businesses ready to dominate their market.</p>
                </div>
                <div className="mb-8">
                    <span className="font-fjalla text-6xl text-blue-600">Custom</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow font-medium text-gray-700 text-sm">
                    <li className="flex items-start gap-3">
                        <span className="text-orange-500 mt-0.5">■</span>
                        Enterprise Level Management
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-orange-500 mt-0.5">■</span>
                        Complete Funnel Builds
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-orange-500 mt-0.5">■</span>
                        Custom Website Dev
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-orange-500 mt-0.5">■</span>
                        Dedicated Growth Manager
                    </li>
                </ul>
                <Link href="/contact" className="text-center w-full bg-white text-gray-900 font-bold py-4 rounded-xl border-[1.5px] border-gray-900 hover:bg-gray-50 transition-colors uppercase tracking-widest text-sm">
                    Let's Talk
                </Link>
            </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="bg-white py-24 px-6 md:px-12 max-w-[1200px] mx-auto w-full text-center">
        <h3 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">Our Partners</h3>
        <h2 className="font-fjalla text-4xl md:text-6xl text-gray-900 uppercase leading-tight mb-8">
            Who We Work With
        </h2>
        <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto mb-16">
            We partner with passionate business owners who are ready to scale but lack the time or internal team to execute a modern digital strategy.
        </p>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {['E-Commerce', 'Local Services', 'B2B Tech', 'Healthcare'].map((ind, i) => (
                <div key={i} className="py-8 px-4 bg-white border-[1.5px] border-gray-200 rounded-2xl font-fjalla text-2xl text-blue-600 uppercase">
                    {ind}
                </div>
            ))}
        </div>
      </section>
    </div>
  );
}
