
import Link from "next/link";
import * as motion from "framer-motion/client";
import { AnimatedArrow } from "@/components/layout/animated-arrow";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION (Giant Statement Hero) */}
      <main className="relative min-h-[90vh] px-6 md:px-12 py-12 flex flex-col justify-center max-w-[1600px] mx-auto w-full">
        
        {/* Large Background Text Top Left */}
        <div className="absolute top-10 left-6 md:left-12 z-0 pointer-events-none opacity-20">
            <h1 className="font-fjalla text-[clamp(4rem,12vw,10rem)] leading-[0.8] tracking-tight text-blue-600">ONE</h1>
        </div>

        {/* Large Background Text Bottom Right */}
        <div className="absolute bottom-10 right-6 md:right-12 z-0 pointer-events-none text-right opacity-20">
            <h1 className="font-fjalla text-[clamp(4rem,12vw,10rem)] leading-[0.8] tracking-tight text-orange-500">BRIDGE</h1>
        </div>

        {/* Playful Neo-brutalist Floating Accents & Creative Elements */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="hidden lg:grid grid-cols-3 grid-rows-3 gap-2 absolute top-24 right-48 z-0 opacity-80"
          aria-hidden="true"
        >
            {[...Array(9)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-orange-200 rounded-full border-[1.5px] border-gray-900 shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]"></div>
            ))}
        </motion.div>

        {/* Wireframe Grid */}
        <div className="absolute top-12 left-1/3 w-40 h-40 border-[1px] border-blue-500/10 grid grid-cols-4 grid-rows-4 pointer-events-none z-0" aria-hidden="true">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="border-[0.5px] border-blue-500/5"></div>
            ))}
        </div>

        {/* Large Arc */}
        <svg className="absolute right-12 top-1/3 w-64 h-64 text-orange-500/10 pointer-events-none z-0" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" aria-hidden="true">
            <circle cx="100" cy="0" r="80" />
        </svg>

        {/* Star Sparkles */}
        <motion.svg 
          animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute top-32 left-1/4 w-8 h-8 text-blue-600/30 pointer-events-none z-0" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1"
          aria-hidden="true"
        >
            <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
        </motion.svg>

        <motion.svg 
          animate={{ y: [0, 8, 0], rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute bottom-32 right-1/4 w-10 h-10 text-orange-500/30 pointer-events-none z-0" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          aria-hidden="true"
        >
            <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
        </motion.svg>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute bottom-24 left-1/4 z-0 hidden lg:flex items-end gap-2 rotate-[-5deg]"
        >
            <div className="w-8 h-16 bg-orange-500 border-[1.5px] border-gray-900"></div>
            <div className="w-8 h-24 bg-blue-500 border-[1.5px] border-gray-900"></div>
            <div className="w-16 h-16 bg-[#FFE1A8] rounded-full border-[1.5px] border-gray-900"></div>
        </motion.div>

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mt-20 lg:mt-32">
            
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col space-y-12 max-w-sm"
            >
                <p className="text-sm md:text-base text-gray-800 leading-relaxed font-medium">
                  We are your complete digital growth partner that handles everything online so you can focus on running your business.
                </p>
                <Link href="/contact" className="bg-orange-500 text-center text-white font-bold py-4 px-10 rounded-full w-max border-[1.5px] border-gray-900 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] transition-all">
                  Start Your Growth
                </Link>
                <div className="pt-8 flex space-x-12">
                  <motion.div whileHover={{ scale: 1.05 }} className="cursor-default">
                      <div className="text-3xl md:text-4xl font-fjalla text-blue-600 mb-1">100%</div>
                      <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">Done-For-You</div>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="cursor-default">
                      <div className="text-3xl md:text-4xl font-fjalla text-orange-500 mb-1">24/7</div>
                      <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">Digital Outreach</div>
                  </motion.div>
              </div>
            </motion.div>

            {/* Center Column (Illustration Placeholder) */}
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.7 }}
               className="flex justify-center items-center min-h-[400px] pointer-events-none xl:-mx-16"
            >
                <div className="w-full max-w-[500px] aspect-square flex flex-col items-center justify-center relative">
                    <img src="/grid_bg.jpg" alt="Hero Grid Graphic" className="absolute inset-0 w-full h-full object-contain -z-10 mix-blend-multiply opacity-50 block md:hidden" />
                    <div className="relative z-10 hidden md:block">
                        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="400" height="400" rx="32" fill="#EBF5FF"/>
                            <rect x="20" y="20" width="360" height="360" rx="20" fill="white"/>
                            
                            {/* Graphic Elements matching user reference 1 - The split door concept */}
                            <path d="M200 40 L200 360" stroke="#3B82F6" strokeWidth="4" strokeDasharray="10 10"/>
                            
                            <g transform="translate(60, 60)">
                                {/* Digital Representation */}
                                <rect x="0" y="0" width="120" height="180" rx="8" fill="#F4F4F5" stroke="#1F2937" strokeWidth="3"/>
                                <rect x="10" y="10" width="100" height="80" rx="4" fill="#3B82F6"/>
                                <rect x="10" y="100" width="40" height="10" rx="5" fill="#D1D5DB"/>
                                <rect x="10" y="120" width="80" height="10" rx="5" fill="#D1D5DB"/>
                                <rect x="10" y="140" width="60" height="10" rx="5" fill="#D1D5DB"/>
                                
                                {/* User Interaction Lines */}
                                <path d="M-20 90 Q 60 -10 140 90" stroke="#F97316" strokeWidth="3" fill="none"/>
                            </g>

                            <g transform="translate(220, 140)">
                                {/* Physical Representation */}
                                <circle cx="60" cy="60" r="50" fill="#FFF7ED" stroke="#1F2937" strokeWidth="3"/>
                                <path d="M40 60 L80 60 M60 40 L60 80" stroke="#F97316" strokeWidth="4" strokeLinecap="round"/>
                                
                                {/* Result Lines */}
                                <path d="M20 20 L40 40 M100 20 L80 40 M20 100 L40 80 M100 100 L80 80" stroke="#1F2937" strokeWidth="3" strokeLinecap="round"/>
                            </g>

                            {/* Connecting Nodes/Bridge */}
                            <g transform="translate(180, 140)">
                                <circle cx="0" cy="50" r="8" fill="#3B82F6"/>
                                <circle cx="40" cy="50" r="8" fill="#F97316"/>
                                <path d="M8 50 L32 50" stroke="#1F2937" strokeWidth="3" strokeDasharray="4 4"/>
                                <rect x="10" y="42" width="20" height="16" fill="white" stroke="#1F2937" strokeWidth="2"/>
                            </g>
                        </svg>
                    </div>
                </div>
            </motion.div>

            {/* Right Column */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="flex flex-col justify-start h-full pt-10 lg:pt-0"
            >
                <p className="text-sm md:text-base text-gray-800 leading-relaxed font-medium text-right max-w-sm ml-auto">
                  Your business deserves to be seen. We customize strategies for your goals and deliver end-to-end solutions.
                </p>
            </motion.div>
        </div>

        {/* Scroll-down animated arrow indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400">
          <AnimatedArrow />
        </div>
      </main>

      {/* CONTINUOUS MARQUEE SECTION (Trust Signal / Brand Identity) */}
      <section className="w-full bg-blue-600 border-y-[1.5px] border-gray-900 border-b-none py-4 overflow-hidden relative rotate-[-1deg] shadow-[0px_4px_0px_0px_rgba(26,26,26,1)] z-20">
        <div className="flex w-max whitespace-nowrap animate-marquee">
          {Array(8).fill(null).map((_, i) => (
             <div key={i} className="flex items-center text-white px-8">
               <span className="font-fjalla text-xl md:text-3xl uppercase tracking-widest drop-shadow-md">Data-Driven Growth</span>
               <span className="mx-8 text-orange-400 text-3xl">✦</span>
               <span className="font-fjalla text-xl md:text-3xl uppercase tracking-widest drop-shadow-md">Creative Excellence</span>
               <span className="mx-8 text-orange-400 text-3xl">✦</span>
             </div>
          ))}
        </div>
      </section>

      {/* 2. THE PROBLEM SECTION (Strict modular bento rhythm) */}
      <section className="bg-white border-y-[1.5px] border-gray-900 w-full relative z-10 pt-16">
        <div className="px-6 md:px-12 py-24 max-w-[1600px] mx-auto w-full">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             className="mb-16 max-w-3xl"
          >
            <h3 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">The Problem</h3>
            <h2 className="font-fjalla text-4xl md:text-6xl text-gray-900 leading-tight uppercase">
              Why Most Small Businesses Struggle Online
            </h2>
            <p className="mt-6 text-lg text-gray-600 font-medium">
              It&apos;s not that small businesses don&apos;t care about their online presence. They are simply too busy running their business to do it right.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "No Time", desc: "Business owners spend 10-14 hours a day running operations. Digital falls to the bottom of the list." },
              { title: "No Strategy", desc: "Posting without a strategy is just noise. Most don't have clear positioning or a target audience." },
              { title: "No Team", desc: "Hiring a full marketing team is expensive and complex. You can't juggle 4 different specialists." },
              { title: "No Results", desc: "Money spent on random freelancers with no clear accountability leads to frustration and wasted budget." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#F3EFE6] p-8 rounded-2xl border-[1.5px] border-gray-900 relative overflow-hidden group hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 z-0"></div>
                <div className="relative z-10 w-12 h-12 bg-orange-500 text-white flex items-center justify-center font-fjalla text-xl rounded-full mb-6 border border-gray-900 shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
                  {i + 1}
                </div>
                <h4 className="relative z-10 font-bold text-xl mb-3 text-gray-900">{item.title}</h4>
                <p className="relative z-10 text-gray-700 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="mt-16 bg-blue-600 text-white p-8 md:p-12 rounded-3xl border-[1.5px] border-gray-900 flex flex-col md:flex-row items-center justify-between shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] hover:shadow-[12px_12px_0px_0px_rgba(26,26,26,1)] transition-shadow duration-300"
          >
            <h3 className="font-fjalla text-2xl md:text-3xl uppercase tracking-wide max-w-xl mb-6 md:mb-0">
              OneBridge solves every single one of these. That&apos;s what we were built for.
            </h3>
            <Link href="/about" className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap border-[1.5px] border-gray-900">
              Learn How We Do It
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2.5 REAL CASE STUDY SECTION (Newly Inspired by GrowthHackers) */}
      <section className="px-6 md:px-12 py-24 max-w-[1600px] mx-auto w-full bg-white border-y-[1.5px] border-gray-900">
        <div className="max-w-4xl mb-16">
           <h3 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">Case Study</h3>
           <h2 className="font-fjalla text-4xl md:text-6xl text-gray-900 leading-tight uppercase relative inline-block">
              How We Scaled A Brand By 5x
             <div className="absolute -bottom-4 left-0 w-1/3 h-1 bg-blue-500 rounded-full"></div>
           </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual Portfolio Component */}
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative w-full aspect-video bg-gray-800 border-[1.5px] border-gray-700 rounded-2xl overflow-hidden group cursor-pointer"
            >
                <div className="absolute inset-0 z-0">
                    <svg width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                        <rect width="800" height="600" fill="#1F2937"/>
                        {/* Interactive UI Mockup BG */}
                        <g transform="translate(100, 100)">
                            <rect width="600" height="400" rx="16" fill="#111827" stroke="#374151" strokeWidth="2"/>
                            {/* Dashboard Elements */}
                            <path d="M50 150 Q 200 50 350 200 T 550 100" stroke="#3B82F6" strokeWidth="4" fill="none"/>
                            <path d="M50 200 Q 200 100 350 250 T 550 150" stroke="#8B5CF6" strokeWidth="4" fill="none" opacity="0.5"/>
                            <path d="M50 300 Q 200 200 350 350 T 550 250" stroke="#F97316" strokeWidth="4" fill="none"/>
                            
                            {/* Bar Chart */}
                            <rect x="100" y="300" width="30" height="50" fill="#3B82F6" rx="4"/>
                            <rect x="150" y="250" width="30" height="100" fill="#3B82F6" rx="4"/>
                            <rect x="200" y="200" width="30" height="150" fill="#3B82F6" rx="4"/>
                            <rect x="250" y="100" width="30" height="250" fill="#3B82F6" rx="4"/>
                            
                            <rect x="350" y="320" width="30" height="30" fill="#F97316" rx="4"/>
                            <rect x="400" y="280" width="30" height="70" fill="#F97316" rx="4"/>
                            <rect x="450" y="150" width="30" height="200" fill="#F97316" rx="4"/>
                        </g>
                    </svg>
                </div>
                <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-transparent transition-colors z-10 backdrop-blur-[2px] group-hover:backdrop-blur-none duration-500"></div>
                
                <div className="w-full h-full flex flex-col items-center justify-center z-10 relative opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
                    <span className="text-2xl mb-2 text-white font-fjalla uppercase drop-shadow-xl bg-gray-900/60 px-6 py-2 rounded-lg border border-gray-700 backdrop-blur-md">GridMaster Campaign Vis</span>
                </div>
                {/* Floating metric badge */}
                <div className="absolute bottom-6 right-6 bg-orange-500 text-white font-bold py-3 px-6 rounded-full text-base shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] z-20 transition-transform group-hover:scale-110 duration-300">
                    +480% Lead Flow
                </div>
            </motion.div>

            {/* Context & Conversion */}
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex flex-col space-y-8"
            >
                <div>
                   <h4 className="text-2xl font-bold mb-4 text-gray-900">The Challenge</h4>
                   <p className="text-gray-600 leading-relaxed font-medium">
                     A premier service provider was spending $4k/mo on ads with zero attribution and a messy visual identity. They needed a cohesive growth engine, not scattered gigs.
                   </p>
                </div>
                <div>
                   <h4 className="text-2xl font-bold mb-4 text-gray-900">The OneBridge Execution</h4>
                   <ul className="space-y-4 text-gray-700 font-medium">
                       <li className="flex items-start gap-3"><span className="text-blue-500">✓</span> Complete UI/UX Redesign built for conversion.</li>
                       <li className="flex items-start gap-3"><span className="text-blue-500">✓</span> Aggressive Meta Ad funnel capturing low-hanging leads.</li>
                       <li className="flex items-start gap-3"><span className="text-blue-500">✓</span> Automated Email Sequences replacing manual outreach.</li>
                   </ul>
                </div>
                <Link href="/case-studies/gridmaster" className="mt-4 font-bold bg-orange-500 text-white px-10 py-4 rounded-full w-max border-[1.5px] border-gray-900 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] transition-all text-lg flex items-center space-x-2">
                   <span>Read Full Case Study</span>
                   <span>&rarr;</span>
                </Link>
            </motion.div>
        </div>
      </section>

      {/* 3. CORE SERVICES PREVIEW (Off-Grid Editorial Layout) */}
      <section className="bg-white px-6 md:px-12 py-32 max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h3 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">Our Services</h3>
            <h2 className="font-fjalla text-5xl text-gray-900 leading-[0.9] uppercase mb-8">
              Everything You Need.<br/>Under One Roof.
            </h2>
            <p className="text-lg text-gray-700 font-medium mb-10">
              All services are customised to your business goals and delivered end-to-end. One Team. One Strategy.
            </p>
            <Link href="/services" className="font-bold border-b-2 border-gray-900 pb-1 w-max hover:text-blue-600 hover:border-blue-600 transition-colors text-lg flex items-center space-x-2">
              <span>View All Services</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { id: "01", name: "Social Media Management", outline: "Strategy, content, posting & engagement across all platforms." },
              { id: "02", name: "Content Creation", outline: "Reels, videos, carousels, graphics & branded posts that stop the scroll." },
              { id: "03", name: "Branding & Identity", outline: "Logos, visual identity, profile optimisation & brand positioning." },
              { id: "04", name: "Website Development", outline: "Fast, clean, conversion-focused websites working 24/7 for you." }
            ].map((srv, i) => (
              <motion.div 
                key={srv.id} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group p-8 rounded-2xl bg-white border-[1.5px] border-gray-900 shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 z-0"></div>
                <div className="relative z-10">
                  <span className="text-blue-600 font-fjalla text-2xl mb-4 block opacity-50">{srv.id}</span>
                  <h4 className="font-bold text-2xl mb-3 text-gray-900 uppercase tracking-tight group-hover:text-blue-600 transition-colors">{srv.name}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{srv.outline}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GROWTH IMPACT SECTION (Metrics / Social Proof) */}
      <section className="bg-[#F3EFE6] w-full border-t-[1.5px] border-gray-900">
        <div className="px-6 md:px-12 py-24 max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
                <h3 className="text-orange-500 font-bold tracking-widest uppercase text-sm">Growth Impact</h3>
                <h2 className="font-fjalla text-4xl md:text-6xl text-gray-900 leading-tight uppercase">
                    What Growth <span className="text-blue-500">Looks Like.</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-lg">
                    Real metrics that show how our &apos;Done-For-You&apos; digital strategy translates into tangible business results.
                </p>
            </div>
            
            <div className="grid grid-cols-2 gap-px bg-gray-300 border-[1.5px] border-gray-900 rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(26,26,26,0.15)]">
                <div className="bg-white p-8 flex flex-col justify-center">
                    <div className="font-fjalla text-5xl md:text-7xl text-orange-500 mb-2">300%</div>
                    <div className="text-sm md:text-base text-gray-700 font-bold uppercase tracking-wide">Increase in overall digital reach</div>
                </div>
                <div className="bg-white p-8 flex flex-col justify-center">
                    <div className="font-fjalla text-5xl md:text-7xl text-blue-500 mb-2">5x</div>
                    <div className="text-sm md:text-base text-gray-700 font-bold uppercase tracking-wide">Growth in consistent lead flow</div>
                </div>
                <div className="bg-white p-8 flex flex-col justify-center">
                    <div className="font-fjalla text-5xl md:text-7xl text-blue-500 mb-2">12+</div>
                    <div className="text-sm md:text-base text-gray-700 font-bold uppercase tracking-wide">Hours saved per week for owners</div>
                </div>
                <div className="bg-white p-8 flex flex-col justify-center">
                    <div className="font-fjalla text-5xl md:text-7xl text-orange-500 mb-2">100%</div>
                    <div className="text-sm md:text-base text-gray-700 font-bold uppercase tracking-wide">Done-for-you execution</div>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
}
