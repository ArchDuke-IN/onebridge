import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { siteConfig } from '@/config/site';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });
const satoshi = localFont({
  src: [
    { path: '../../public/fonts/satoshi/Satoshi-Variable.woff2', weight: '300 900', style: 'normal' },
    { path: '../../public/fonts/satoshi/Satoshi-VariableItalic.woff2', weight: '300 900', style: 'italic' },
  ],
  variable: '--font-satoshi',
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Creative Agency India`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "Marketing Agency India",
    "Digital Marketing",
    "Creative Agency",
    "Visual Identity",
    "Brand Design",
    "SEO Optimization",
    "One Bridge Marketing"
  ],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    }
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${satoshi.variable}`}>
      <body className="min-h-screen flex flex-col antialiased overflow-x-hidden bg-soft text-[#4B5563]">
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
