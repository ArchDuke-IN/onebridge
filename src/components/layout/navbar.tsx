'use client';

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import * as motion from "framer-motion/client";
import { usePathname } from "next/navigation";

const workLinks = [
  { href: '/projects', label: 'Portfolio', desc: 'See our client results' },
  { href: '/projects#testimonials', label: 'Testimonials', desc: 'What clients say' },
  { href: '/case-studies/gridmaster', label: 'Case Studies', desc: 'Deep-dive into our work' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const el = document.querySelector('nav');
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setScrolled(!e.isIntersecting),
      { rootMargin: '-10px 0px 0px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
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
      "sticky top-0 z-50 w-full transition-all duration-300 bg-white border-b-2 border-[var(--border)]",
      scrolled && "shadow-[var(--brutal-shadow-sm)]"
    )}>
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-14 md:h-16">

        <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="OneBridge Marketing">
          <img src="/logo.jpeg" alt="OneBridge Marketing" className="h-8 w-8 rounded-full object-cover border-2 border-[var(--navy)]" />
          <span className="font-[var(--font-satoshi)] text-lg text-[var(--navy)] font-bold tracking-tight">OneBridge</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150 text-[var(--text)] hover:text-[var(--navy)]",
                isActive(link.href) && "text-[var(--navy)] font-semibold"
              )}
            >
              {link.label}
            </Link>
          ))}

          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setWorkOpen(!workOpen)}
              className={cn(
                "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150 text-[var(--text)] hover:text-[var(--navy)] cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--navy)] focus-visible:outline-offset-2",
                workOpen && "text-[var(--navy)]"
              )}
              aria-expanded={workOpen}
            >
              Work
              <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", workOpen && "rotate-180")} />
            </button>

            {workOpen && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-full right-0 mt-1 w-56 bg-white border-2 border-[var(--navy)] shadow-[var(--brutal-shadow)] overflow-hidden z-50"
              >
                <div className="p-1.5">
                  {workLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setWorkOpen(false)}
                      className="flex flex-col gap-0.5 p-3 rounded-lg hover:bg-orange-50 group transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--navy)] focus-visible:outline-offset-2"
                    >
                      <div className="font-medium text-[var(--navy)] text-sm">{item.label}</div>
                      <div className="text-[var(--text)] text-xs">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <Link
            href="/contact"
            className="ml-4 bg-[var(--navy)] text-white text-sm font-bold py-2.5 px-5 shadow-[var(--brutal-shadow-sm)] hover:shadow-[var(--brutal-shadow)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 transition-all"
          >
            Contact
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[var(--navy)] hover:text-[var(--orange)] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--navy)] focus-visible:outline-offset-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-[var(--border)] px-6 py-6 flex flex-col gap-1"
        >
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-base font-medium py-2.5 px-4 rounded-lg transition-all text-[var(--text)] hover:text-[var(--navy)] hover:bg-gray-50",
                isActive(link.href) && "text-[var(--navy)] font-semibold bg-gray-50"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-[var(--border)] pt-3 mt-2">
            <div className="text-xs font-medium text-[var(--text)] mb-1 px-4">Work</div>
            {workLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-[var(--text)] hover:text-[var(--navy)] py-2.5 px-4 rounded-lg hover:bg-gray-50 text-sm transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 px-4">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block bg-[var(--navy)] text-white text-sm font-bold py-2.5 px-5 text-center hover:bg-[#233558] transition-colors border-2 border-[var(--navy)]"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
