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
  title: 'Tire Geeks | #1 Tire & Wheel Shop in Sacramento, CA — Walk-Ins Welcome',
  description: "Sacramento's top-rated tire & wheel shop. Tires, custom wheels, alignment, lift kits, lowering kits, brakes & suspension at two locations. No appointment needed. Financing with no credit check via Acima.",
  keywords: 'tire shop sacramento, best tire shop sacramento, wheels sacramento, alignment sacramento, lift kits sacramento, lowering kits, tire financing no credit check, custom wheels sacramento, brakes sacramento, tire geeks',
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
    title: 'Tire Geeks | #1 Tire & Wheel Shop in Sacramento, CA',
    description: 'Tires, custom wheels, alignment, lift kits, lowering, brakes & suspension. Two Sacramento locations, walk-ins welcome, Acima financing.',
    url: 'https://tiregeeks.com',
    siteName: 'Tire Geeks',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Tire Geeks Sacramento' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tire Geeks | #1 Tire & Wheel Shop in Sacramento, CA',
    description: 'Tires, wheels, alignment, lifts, lowering, brakes. Two Sacramento locations, walk-ins welcome.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://tiregeeks.com' },
  verification: {
    google: 'waDuc9mu7ZvQhEjBc7bIrABSG5qTCF7XW4Ev9Cg1dIE',
  },
};

const schemaFlorin = {
  "@context": "https://schema.org",
  "@type": "TireShop",
  "name": "Tire Geeks - Florin Road",
  "image": "https://tiregeeks.com/images/store-front-florin.jpg",
  "url": "https://tiregeeks.com",
  "telephone": "(916) 800-8786",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3020 Florin Road",
    "addressLocality": "Sacramento",
    "addressRegion": "CA",
    "postalCode": "95822",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 38.4955604117297, "longitude": -121.47168528748884 },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card, Debit Card, Acima Leasing",
  "sameAs": [
    "https://www.facebook.com/p/Tire-Geeks-61573900123725/",
    "https://www.instagram.com/tire.geeks"
  ],
  "areaServed": [
    { "@type": "City", "name": "Sacramento" },
    { "@type": "Place", "name": "Pocket, Sacramento" },
    { "@type": "Place", "name": "Land Park, Sacramento" },
    { "@type": "Place", "name": "Meadowview, Sacramento" },
    { "@type": "Place", "name": "South Sacramento" },
    { "@type": "City", "name": "Elk Grove" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Tire Geeks Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tire Sales & Installation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Wheels & Fitment" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "4-Wheel Alignment" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lift & Leveling Kits" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lowering Kits" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brakes & Suspension" } }
    ]
  }
};

const schemaArden = {
  "@context": "https://schema.org",
  "@type": "TireShop",
  "name": "Tire Geeks - Arden Way",
  "image": "https://tiregeeks.com/images/store-front-arden.jpg",
  "url": "https://tiregeeks.com",
  "telephone": "(916) 913-8786",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2245 Arden Way",
    "addressLocality": "Sacramento",
    "addressRegion": "CA",
    "postalCode": "95825",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 38.59663750191987, "longitude": -121.41249393169178 },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card, Debit Card, Acima Leasing",
  "sameAs": [
    "https://www.facebook.com/p/Tire-Geeks-61573900123725/",
    "https://www.instagram.com/tire.geeks"
  ],
  "areaServed": [
    { "@type": "Place", "name": "Arden-Arcade, Sacramento" },
    { "@type": "City", "name": "Carmichael" },
    { "@type": "City", "name": "Citrus Heights" },
    { "@type": "Place", "name": "Fair Oaks" },
    { "@type": "City", "name": "Rancho Cordova" },
    { "@type": "City", "name": "Roseville" },
    { "@type": "Place", "name": "North Highlands" },
    { "@type": "Place", "name": "Natomas, Sacramento" },
    { "@type": "Place", "name": "Midtown, Sacramento" },
    { "@type": "Place", "name": "East Sacramento" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Tire Geeks Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tire Sales & Installation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Wheels & Fitment" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "4-Wheel Alignment" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lift & Leveling Kits" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lowering Kits" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brakes & Suspension" } }
    ]
  }
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tire Geeks",
  "url": "https://tiregeeks.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://tiregeeks.com/images/logo.png"
  },
  "sameAs": [
    "https://www.facebook.com/p/Tire-Geeks-61573900123725/",
    "https://www.instagram.com/tire.geeks"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "(916) 800-8786",
      "contactType": "customer service",
      "areaServed": "Sacramento",
      "availableLanguage": ["English", "Spanish"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "(916) 913-8786",
      "contactType": "customer service",
      "areaServed": "Sacramento",
      "availableLanguage": ["English", "Spanish"]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="waDuc9mu7ZvQhEjBc7bIrABSG5qTCF7XW4Ev9Cg1dIE" />
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
