import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-soft mt-24">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <img src="/logo.jpeg" alt="OneBridge Marketing" className="h-7 w-7 rounded-full object-cover" />
              <span className="font-[var(--font-satoshi)] text-lg text-[var(--navy)] font-bold">OneBridge</span>
            </Link>
            <p className="text-sm text-[var(--text)] leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--navy)] mb-4">Links</h4>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-sm text-[var(--text)] hover:text-[var(--navy)] transition-colors">Home</Link>
              <Link href="/about" className="text-sm text-[var(--text)] hover:text-[var(--navy)] transition-colors">About</Link>
              <Link href="/services" className="text-sm text-[var(--text)] hover:text-[var(--navy)] transition-colors">Services</Link>
              <Link href="/projects" className="text-sm text-[var(--text)] hover:text-[var(--navy)] transition-colors">Projects</Link>
              <Link href="/contact" className="text-sm text-[var(--text)] hover:text-[var(--navy)] transition-colors">Contact</Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--navy)] mb-4">Contact</h4>
            <div className="flex flex-col space-y-3 text-sm text-[var(--text)]">
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[var(--navy)] transition-colors">{siteConfig.contact.email}</a>
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-[var(--navy)] transition-colors">{siteConfig.contact.phone}</a>
              <span>{siteConfig.location}</span>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--text)] hover:text-[var(--navy)] transition-colors" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" className="text-[var(--text)] hover:text-[var(--navy)] transition-colors" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <circle cx="17.5" cy="6.5" r="1.5"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border)] mt-12 pt-8 text-center text-xs text-[var(--text)]">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
