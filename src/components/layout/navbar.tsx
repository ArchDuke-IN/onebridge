'use client';

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, LayoutGrid, MessageSquare, BookOpen } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import * as motion from "framer-motion/client";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

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

  const isActive = (href: string) => pathname === href;

  return (
    <nav className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled
        ? "bg-blue-600 shadow-[0_4px_24px_rgba(0,0,0,0.18)]"
        : "bg-blue-600/95 backdrop-blur-sm"
    )}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-[72px]">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" aria-label="One Bridge Marketing">
          <div className="bg-white w-[64px] h-[64px] rounded-xl border-[2px] border-gray-900 shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] overflow-hidden">
            <Image
              src="/logo.jpeg"
              alt="One Bridge Marketing"
              width={64}
              height={64}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150",
                isActive(link.href)
                  ? "text-orange-400 bg-orange-500/10"
                  : "text-white/80 hover:text-orange-400 hover:bg-white/5"
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Our Work Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setWorkOpen(!workOpen)}
              className={cn(
                "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150",
                workOpen ? "text-orange-400 bg-orange-500/10" : "text-white/80 hover:text-orange-400 hover:bg-white/5"
              )}
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
                className="absolute top-full right-0 mt-2 w-72 bg-white rounded-2xl border-[1.5px] border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden z-50"
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

          <div className="ml-4">
            <Link
              href="/contact"
              className="bg-orange-500 text-white font-bold py-2.5 px-6 rounded-full border-[1.5px] border-orange-400 shadow-[3px_3px_0px_0px_rgba(26,26,26,0.4)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(26,26,26,0.4)] transition-all text-sm"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:text-orange-400 transition-colors"
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
          className="md:hidden bg-blue-600 border-t border-white/10 px-6 py-8 flex flex-col gap-2"
        >
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-bold py-2.5 px-4 rounded-xl transition-all",
                isActive(link.href)
                  ? "text-orange-400 bg-orange-500/10"
                  : "text-white hover:text-orange-400 hover:bg-white/5"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-white/10 pt-4 mt-2">
            <div className="text-xs font-bold uppercase tracking-widest text-orange-400/60 mb-2 px-4">Our Work</div>
            {workLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-white/80 hover:text-orange-400 py-2.5 px-4 rounded-lg hover:bg-white/5 font-medium transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 px-4">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block bg-orange-500 text-white font-bold py-3.5 px-8 rounded-full text-center border-[1.5px] border-orange-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] transition-all text-base"
            >
              Start a Project
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
