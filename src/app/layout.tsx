import type { Metadata } from 'next';
import { Bebas_Neue, Oswald, Inter, Barlow_Condensed } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/animations/SmoothScroll';
import PageTransition from '@/components/animations/PageTransition';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  preload: true,
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-nav',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tiregeeks.com'),
  title: 'Tire Geeks | Sacramento Tires, Wheels, Alignment & Suspension',
  description: "Sacramento's premier tire and wheel shop. Custom wheels, lift kits, lowering kits, alignment, and more. Two locations — no appointment needed. Financing with no credit check.",
  keywords: 'tires sacramento, wheels sacramento, alignment sacramento, lift kits, lowering kits, tire shop near me, custom wheels, tire geeks',
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/android-chrome-192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/android-chrome-512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Tire Geeks | Sacramento Tires, Wheels & Custom Builds',
    description: 'Premium tires, custom wheels, and expert fitment in Sacramento. Walk-in service, financing available.',
    url: 'https://tiregeeks.com',
    siteName: 'Tire Geeks',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Tire Geeks Sacramento' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tire Geeks | Sacramento Tires & Wheels',
    description: 'Custom wheels, tires, lifts, and more. Two Sacramento locations.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://tiregeeks.com' },
};

const schemaFlorin = {
  "@context": "https://schema.org",
  "@type": "TireShop",
  "name": "Tire Geeks - Florin Road",
  "image": "https://tiregeeks.com/images/tg-brand/logo.png",
  "url": "https://tiregeeks.com",
  "telephone": "(916) 800-8786",
  "address": { "@type": "PostalAddress", "streetAddress": "3020 Florin Road", "addressLocality": "Sacramento", "addressRegion": "CA", "postalCode": "95822", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": 38.4960, "longitude": -121.4930 },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "09:00", "closes": "19:00" }
  ],
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card, Debit Card, Acima Leasing",
  "areaServed": { "@type": "City", "name": "Sacramento" }
};

const schemaArden = {
  "@context": "https://schema.org",
  "@type": "TireShop",
  "name": "Tire Geeks - Arden Way",
  "image": "https://tiregeeks.com/images/tg-brand/logo.png",
  "url": "https://tiregeeks.com",
  "telephone": "(916) 913-8786",
  "address": { "@type": "PostalAddress", "streetAddress": "2245 Arden Way", "addressLocality": "Sacramento", "addressRegion": "CA", "postalCode": "95825", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": 38.6010, "longitude": -121.4090 },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "09:00", "closes": "19:00" }
  ],
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card, Debit Card, Acima Leasing",
  "areaServed": { "@type": "City", "name": "Sacramento" }
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tire Geeks",
  "url": "https://tiregeeks.com",
  "logo": "https://tiregeeks.com/images/tg-brand/logo.png",
  "sameAs": ["https://www.facebook.com/TireGeeks", "https://www.instagram.com/tiregeeks"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFlorin) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArden) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      </head>
      <body
        className={`${bebasNeue.variable} ${oswald.variable} ${barlowCondensed.variable} ${inter.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-red-600 focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        <SmoothScroll>
          <PageTransition>{children}</PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
