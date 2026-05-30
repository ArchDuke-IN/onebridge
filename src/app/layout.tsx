import type { Metadata } from 'next';
import { Roboto, Fjalla_One } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'], variable: '--font-roboto' });
const fjallaOne = Fjalla_One({ weight: '400', subsets: ['latin'], variable: '--font-fjalla' });

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
  creator: siteConfig.name,
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["https://onebridgemarketing.in/og.jpg"],
    creator: "@onebridgemktg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    "name": siteConfig.name,
    "image": siteConfig.ogImage,
    "url": siteConfig.url,
    "email": siteConfig.contact.email,
    "telephone": siteConfig.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "description": siteConfig.description,
    "priceRange": "$$$"
  };

  return (
    <html lang="en" className={`${roboto.variable} ${fjallaOne.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased overflow-x-hidden bg-background text-foreground">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
