'use client';

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X, ChevronDown, LayoutGrid, MessageSquare, BookOpen } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import * as motion from "framer-motion/client";

function OBMLogo({ white = false }: { white?: boolean }) {
  const textNavy = white ? "#ffffff" : "#1a2744";
  const textOrange = "#F97316";
  const cableColor = white ? "rgba(255,255,255,0.6)" : "#9ca3af";
  const arcColor = "#F97316";
  return (
    <svg viewBox="0 0 220 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
      {/* Orange arc / semicircle */}
      <path d="M52 34 A 32 32 0 0 1 108 34" stroke={arcColor} strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      {/* Cable lines left */}
      <line x1="80" y1="6" x2="38" y2="42" stroke={cableColor} strokeWidth="0.9"/>
      <line x1="80" y1="12" x2="50" y2="42" stroke={cableColor} strokeWidth="0.9"/>
      <line x1="80" y1="18" x2="62" y2="42" stroke={cableColor} strokeWidth="0.9"/>
      {/* Cable lines right */}
      <line x1="80" y1="6" x2="122" y2="42" stroke={cableColor} strokeWidth="0.9"/>
      <line x1="80" y1="12" x2="110" y2="42" stroke={cableColor} strokeWidth="0.9"/>
      <line x1="80" y1="18" x2="98" y2="42" stroke={cableColor} strokeWidth="0.9"/>
      {/* Orange 3D pylon */}
      <polygon points="77,4 83,4 86,42 74,42" fill={textOrange}/>
      {/* Dark navy bridge deck */}
      <path d="M28 43 Q80 36 132 43" stroke={textNavy === "#ffffff" ? "rgba(255,255,255,0.85)" : "#1a2744"} strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Wordmark */}
      <text x="144" y="26" fontFamily="'Fjalla One', Impact, sans-serif" fontSize="18" fontWeight="700" fill={textNavy} letterSpacing="0.5">ONE</text>
      <text x="144" y="26" fontFamily="'Fjalla One', Impact, sans-serif" fontSize="18" fontWeight="700" fill={textOrange} letterSpacing="0.5" dx="38">BRIDGE</text>
      {/* Orange dashes */}
      <line x1="144" y1="33" x2="154" y2="33" stroke={textOrange} strokeWidth="1.5"/>
      <line x1="210" y1="33" x2="220" y2="33" stroke={textOrange} strokeWidth="1.5"/>
      <text x="156" y="40" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="400" fill={white ? "rgba(255,255,255,0.8)" : "#6b7280"} letterSpacing="2.5">MARKETING</text>
    </svg>
  );
}

const workLinks = [
  { href: '/projects', label: 'Portfolio', icon: LayoutGrid, desc: 'See our client results & case studies' },
  { href: '/projects#testimonials', label: 'Testimonials', icon: MessageSquare, desc: 'What our clients say about us' },
  { href: '/case-studies/gridmaster', label: 'Case Studies', icon: BookOpen, desc: 'Deep-dive into our work' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setWorkOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const mainLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
  ];

  return (
    <nav className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled
        ? "bg-[#1a2744] shadow-[0_4px_24px_rgba(0,0,0,0.18)]"
        : "bg-[#1a2744]"
    )}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-[70px]">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" aria-label="One Bridge Marketing">
          <OBMLogo white />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-orange-400 transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}

          {/* Our Work Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setWorkOpen(!workOpen)}
              className="flex items-center gap-1 text-white/80 hover:text-orange-400 transition-colors duration-150"
              aria-expanded={workOpen}
            >
              Our Work
              <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", workOpen && "rotate-180")} />
            </button>

            {workOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-full right-0 mt-3 w-72 bg-white rounded-2xl border-[1.5px] border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden z-50"
              >
                <div className="p-2">
                  {workLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setWorkOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-orange-50 group transition-colors"
                      >
                        <div className="w-9 h-9 rounded-lg bg-orange-100 group-hover:bg-orange-200 flex items-center justify-center shrink-0 transition-colors">
                          <Icon className="w-4 h-4 text-orange-500" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{item.label}</div>
                          <div className="text-gray-500 text-xs mt-0.5">{item.desc}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="border-t border-gray-100 p-3">
                  <Link
                    href="/contact"
                    onClick={() => setWorkOpen(false)}
                    className="flex items-center justify-center gap-2 bg-orange-500 text-white font-bold text-sm py-2.5 px-4 rounded-xl hover:bg-orange-600 transition-colors"
                  >
                    Start a Project →
                  </Link>
                </div>
              </motion.div>
            )}
          </div>

          <Link
            href="/contact"
            className="bg-orange-500 text-white font-bold py-2 px-5 rounded-full border-[1.5px] border-orange-400 shadow-[3px_3px_0px_0px_rgba(26,26,26,0.4)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(26,26,26,0.4)] transition-all text-sm"
          >
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#1a2744] border-t border-white/10 px-6 py-6 flex flex-col gap-5"
        >
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-bold text-white hover:text-orange-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-white/10 pt-4">
            <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Our Work</div>
            {workLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-white/80 hover:text-orange-400 py-2 font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-orange-500 text-white font-bold py-3 px-8 rounded-full text-center border-[1.5px] border-orange-400"
          >
            Start a Project
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
