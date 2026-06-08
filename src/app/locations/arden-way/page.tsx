import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Clock, Navigation, Star, Check, ChevronRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BRAND } from '@/lib/constants';

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: 'Tire Shop on Arden Way, Sacramento | Tire Geeks Arden-Arcade',
  description:
    'Visit Tire Geeks at 2245 Arden Way, Sacramento CA 95825. Tires, custom wheels, alignment, lift kits, lowering, brakes & suspension. Walk-ins welcome Mon-Sat 9AM-6PM. Call (916) 913-8786.',
  openGraph: {
    title: 'Tire Shop on Arden Way, Sacramento | Tire Geeks Arden-Arcade',
    description:
      'Visit Tire Geeks at 2245 Arden Way, Sacramento CA 95825. Tires, custom wheels, alignment, lift kits, lowering, brakes & suspension. Walk-ins welcome Mon-Sat 9AM-6PM.',
    url: 'https://tiregeeks.com/locations/arden-way',
    type: 'website',
  },
  alternates: { canonical: 'https://tiregeeks.com/locations/arden-way' },
};

/* ------------------------------------------------------------------ */
/*  Structured Data                                                    */
/* ------------------------------------------------------------------ */

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tiregeeks.com' },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://tiregeeks.com/locations' },
    { '@type': 'ListItem', position: 3, name: 'Arden Way', item: 'https://tiregeeks.com/locations/arden-way' },
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'TireShop',
  name: 'Tire Geeks - Arden Way',
  image: 'https://tiregeeks.com/images/store-front-arden.jpg',
  url: 'https://tiregeeks.com/locations/arden-way',
  telephone: '(916) 913-8786',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2245 Arden Way',
    addressLocality: 'Sacramento',
    addressRegion: 'CA',
    postalCode: '95825',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 38.59663750191987,
    longitude: -121.41249393169178,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  priceRange: '$$',
  paymentAccepted: 'Cash, Credit Card, Debit Card, Acima Leasing',
  sameAs: [
    'https://www.facebook.com/p/Tire-Geeks-61573900123725/',
    'https://www.instagram.com/tire.geeks',
  ],
  areaServed: [
    { '@type': 'Place', name: 'Arden-Arcade, Sacramento' },
    { '@type': 'City', name: 'Carmichael' },
    { '@type': 'City', name: 'Citrus Heights' },
    { '@type': 'Place', name: 'Fair Oaks' },
    { '@type': 'City', name: 'Rancho Cordova' },
    { '@type': 'City', name: 'Roseville' },
    { '@type': 'Place', name: 'North Highlands' },
    { '@type': 'Place', name: 'Natomas, Sacramento' },
    { '@type': 'Place', name: 'Midtown, Sacramento' },
    { '@type': 'Place', name: 'East Sacramento' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tire Geeks Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tire Sales & Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Wheels & Fitment' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '4-Wheel Alignment' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lift & Leveling Kits' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lowering Kits' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brakes & Suspension' } },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is the best tire shop near Arden-Arcade?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tire Geeks on Arden Way is the top-rated tire shop serving the Arden-Arcade community. Located at 2245 Arden Way, Sacramento CA 95825, we are just minutes from Arden Fair Mall and easily accessible from Business 80, Howe Avenue, and Watt Avenue. Walk-ins are welcome Monday through Saturday, 9AM to 6PM.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need an appointment at Tire Geeks Arden Way?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No appointment is needed for most services at our Arden Way location. We welcome walk-ins Monday through Saturday from 9AM to 6PM. For larger projects like lift kit installations, suspension builds, or full wheel-and-tire packages, calling ahead at (916) 913-8786 is recommended so we can reserve time and have your parts ready.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services does Tire Geeks Arden Way offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tire Geeks on Arden Way offers a full range of automotive services including new tire sales and installation, custom aftermarket wheels, 4-wheel alignment, lift and leveling kits for trucks and SUVs, lowering kits and coilovers, and complete brake and suspension service. We carry top brands like Nitto, Toyo, Fuel, Moto Metal, and many more.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Tire Geeks near Arden Fair Mall offer financing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Tire Geeks partners with Acima to offer lease-to-own financing with no credit needed, no down payment required, and no interest for 100 days. You can get approved for up to $5,000 in seconds. Apply online or visit us in-store at our Arden Way location, just minutes from Arden Fair Mall.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get to Tire Geeks from Citrus Heights?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From Citrus Heights, take Business 80 West (Capital City Freeway) and exit at Arden Way. Head west on Arden Way and our shop is located at 2245 Arden Way between Howe Avenue and Ethan Way. The drive takes approximately 10-15 minutes. You can also take Watt Avenue south to Arden Way and head west.',
      },
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const SERVICES_LIST = [
  { label: 'Tires', href: '/services/tires-sacramento', desc: 'New tire sales, mounting, balancing, flat repair, and TPMS service.' },
  { label: 'Custom Wheels', href: '/services/wheels-sacramento', desc: 'Aftermarket wheels from Fuel, Moto Metal, XD Series, and more.' },
  { label: '4-Wheel Alignment', href: '/services/alignment-sacramento', desc: 'Precision alignment with before-and-after printout included.' },
  { label: 'Lift & Leveling Kits', href: '/services/lift-kits-sacramento', desc: 'Body lifts, suspension lifts, and leveling kits for trucks and SUVs.' },
  { label: 'Lowering Kits', href: '/services/lowering-sacramento', desc: 'Coilovers, lowering springs, and air-ride suspension systems.' },
  { label: 'Brakes & Suspension', href: '/services/brakes-sacramento', desc: 'Brake pads, rotors, calipers, struts, shocks, and control arms.' },
];

const TESTIMONIALS = [
  {
    name: 'Jason M.',
    area: 'Arden-Arcade, Sacramento',
    rating: 5,
    text: "I've been going to tire shops around Arden for years and Tire Geeks is hands down the best. Got a set of Nitto Ridge Grapplers for my Tacoma and the price beat everywhere else I checked. The alignment was spot on too. This is my new go-to shop.",
  },
  {
    name: 'Sarah K.',
    area: 'Carmichael',
    rating: 5,
    text: "Needed new tires and brakes before a road trip and the team at Arden Way got everything done in one visit. They were upfront about pricing, didn't try to sell me anything I didn't need, and the work was done faster than they quoted. Really impressed.",
  },
  {
    name: 'Andre P.',
    area: 'Citrus Heights',
    rating: 5,
    text: "Had coilovers installed on my WRX and these guys nailed it. The car sits perfect, the alignment is dialed, and they even helped me pick the right spring rate for daily driving. Way better experience than the last shop I tried in Roseville.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function ArdenWayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <main>
        {/* ====== HERO ====== */}
        <section
          className="relative w-full flex items-center justify-center"
          style={{
            minHeight: 340,
            background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)',
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(212,43,43,0.08) 0%, transparent 70%)',
            }}
          />
          <div className="relative text-center z-10 px-6 py-16">
            <span
              className="font-nav text-[13px] font-bold tracking-[0.2em] uppercase mb-4 block"
              style={{ color: BRAND.colors.red }}
            >
              ARDEN-ARCADE
            </span>
            <h1
              className="font-display text-[36px] md:text-[52px] leading-[1.05] uppercase text-white mb-4"
            >
              TIRE GEEKS ON<br />ARDEN WAY
            </h1>
            <p className="font-body text-[#AAAAAA] text-lg max-w-[600px] mx-auto mb-8">
              Your neighborhood tire and wheel shop at 2245 Arden Way, Sacramento CA 95825. Walk-ins welcome.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19169138786"
                className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center gap-2"
                style={{ textDecoration: 'none' }}
              >
                <Phone className="w-5 h-5" />
                CALL (916) 913-8786
              </a>
              <a
                href="https://maps.google.com/?q=2245+Arden+Way+Sacramento+CA+95825"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center gap-2"
                style={{ textDecoration: 'none' }}
              >
                <Navigation className="w-5 h-5" />
                GET DIRECTIONS
              </a>
            </div>
          </div>
        </section>

        {/* ====== BREADCRUMBS ====== */}
        <div style={{ background: '#111111', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-3">
            <nav className="flex items-center gap-2 font-body text-[13px]">
              <Link href="/" className="text-[#6B7280] hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-[#6B7280]" />
              <Link href="/locations" className="text-[#6B7280] hover:text-white transition-colors">Locations</Link>
              <ChevronRight className="w-3 h-3 text-[#6B7280]" />
              <span className="text-[#F2F2F2]">Arden Way</span>
            </nav>
          </div>
        </div>

        {/* ====== MAP + CONTACT INFO ====== */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Map */}
              <div className="w-full overflow-hidden" style={{ borderRadius: 12 }}>
                <iframe
                  src="https://www.google.com/maps?q=2245+Arden+Way+Sacramento+CA+95825&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height={400}
                  style={{ border: 0, borderRadius: 12 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  sandbox="allow-scripts allow-same-origin"
                  title="Tire Geeks Arden Way location map"
                />
              </div>

              {/* Contact Card */}
              <div
                style={{
                  background: BRAND.colors.bgCard,
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 12,
                  padding: '40px',
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <MapPin size={28} color={BRAND.colors.red} />
                  <h2 className="font-heading font-bold uppercase text-[#F2F2F2]" style={{ fontSize: 24 }}>
                    Tire Geeks &mdash; Arden Way
                  </h2>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Navigation size={18} className="mt-1 flex-shrink-0 text-[#9E9E9E]" />
                    <p className="font-body text-[16px] text-[#9E9E9E]">2245 Arden Way, Sacramento, CA 95825</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="flex-shrink-0 text-[#9E9E9E]" />
                    <a href="tel:+19169138786" className="font-body font-medium text-[18px] text-[#F2F2F2] hover:opacity-80 transition-colors">
                      (916) 913-8786
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="mt-1 flex-shrink-0 text-[#9E9E9E]" />
                    <div>
                      <p className="font-body text-[16px] text-[#9E9E9E]">Mon&ndash;Sat: 9AM&ndash;6PM</p>
                      <p className="font-body text-[16px] text-[#6B7280]">Sun: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+19169138786"
                    className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center justify-center gap-2"
                    style={{ textDecoration: 'none' }}
                  >
                    <Phone className="w-4 h-4" />
                    CALL NOW
                  </a>
                  <a
                    href="https://maps.google.com/?q=2245+Arden+Way+Sacramento+CA+95825"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center justify-center gap-2"
                    style={{ textDecoration: 'none' }}
                  >
                    <Navigation className="w-4 h-4" />
                    GET DIRECTIONS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== ABOUT THIS LOCATION ====== */}
        <section style={{ background: '#111111', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                About This Location
              </span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h2
              className="font-display text-white uppercase mb-8"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.1 }}
            >
              Your Trusted Tire Shop in Arden-Arcade
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <div className="space-y-5">
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Tire Geeks on Arden Way is the premier tire, wheel, and suspension shop serving the Arden-Arcade community and all of North Sacramento. Our shop at 2245 Arden Way is located in one of Sacramento&apos;s busiest commercial corridors, just minutes from Arden Fair Mall, making it easy to drop off your vehicle and handle errands while we take care of the work.
                </p>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Getting to our Arden Way location is simple no matter which direction you&apos;re coming from. We sit right off Business 80 (the Capital City Freeway), between Howe Avenue and Ethan Way. Drivers from Carmichael can take Fair Oaks Boulevard to Howe Avenue and be at our door in under 10 minutes. Coming from Citrus Heights or North Highlands? Take Watt Avenue south to Arden Way or hop on Business 80 for a quick freeway route. Even drivers from as far as Roseville and Fair Oaks find the trip worthwhile for the selection and service they get at Tire Geeks.
                </p>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  The Arden-Arcade area is one of Sacramento&apos;s most diverse neighborhoods when it comes to the vehicles on the road. We see everything from commuter cars and family SUVs to modified trucks, lowered imports, and weekend off-road rigs. Our technicians are trained to handle all of it, from a straightforward tire swap on a Honda Accord to a full suspension overhaul on a lifted Jeep Wrangler.
                </p>
              </div>
              <div className="space-y-5">
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Carmichael and Fair Oaks residents have long needed a high-quality tire shop that doesn&apos;t require a long drive into downtown Sacramento or out to the suburbs. Tire Geeks on Arden Way fills that gap perfectly. We&apos;re centrally located, easy to get to from Howe Avenue or Watt Avenue, and we keep a deep inventory so most jobs can be completed same-day with no appointment.
                </p>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  For drivers in North Sacramento and North Highlands, our Arden Way shop is a straight shot down Watt Avenue or a quick ride on Business 80 South. You&apos;ll get the same expert service and competitive pricing that would cost you more at a dealership or big-box chain. And unlike those places, we actually know your name and remember your vehicle when you come back.
                </p>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Whether you&apos;re shopping for a budget-friendly set of commuter tires, a set of aggressive off-road wheels, or a complete stance build with coilovers and custom fitment, Tire Geeks on Arden Way has you covered. Walk in any Monday through Saturday between 9AM and 6PM, give us a call at{' '}
                  <a href="tel:+19169138786" className="text-[#D42B2B] hover:underline">(916) 913-8786</a>, or visit our{' '}
                  <Link href="/locations/florin-road" className="text-[#D42B2B] hover:underline">Florin Road location</Link>{' '}
                  if you&apos;re closer to South Sacramento. We&apos;re here to earn your business and keep you coming back.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ====== SERVICES ====== */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                What We Do
              </span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h2
              className="font-display text-white uppercase mb-10"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.1 }}
            >
              Services at Arden Way
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES_LIST.map((svc) => (
                <Link
                  key={svc.label}
                  href={svc.href}
                  className="block p-6 rounded-xl transition-all hover:border-[#D42B2B]/50 group"
                  style={{
                    background: '#1A1A1A',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Check className="w-5 h-5" style={{ color: '#D42B2B' }} />
                    <span className="font-heading text-[18px] font-semibold text-[#F2F2F2] group-hover:text-[#D42B2B] transition-colors">
                      {svc.label}
                    </span>
                  </div>
                  <p className="font-body text-[14px] text-[#9E9E9E] leading-relaxed mb-3">
                    {svc.desc}
                  </p>
                  <span className="font-nav text-[12px] uppercase tracking-wider text-[#D42B2B]">
                    Learn More &rarr;
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/services"
                className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-block"
                style={{ textDecoration: 'none' }}
              >
                VIEW ALL SERVICES
              </Link>
            </div>
          </div>
        </section>

        {/* ====== TESTIMONIALS ====== */}
        <section style={{ background: '#111111', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                Customer Reviews
              </span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h2
              className="font-display text-white uppercase mb-10"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.1 }}
            >
              What Arden-Area Drivers Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  className="p-6 rounded-xl"
                  style={{
                    background: '#1A1A1A',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D42B2B] text-[#D42B2B]" />
                    ))}
                  </div>
                  <p className="font-body text-[15px] text-[#AAAAAA] leading-relaxed mb-4">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <p className="font-heading font-semibold text-[#F2F2F2] text-[15px]">{t.name}</p>
                    <p className="font-body text-[13px] text-[#6B7280]">{t.area}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== FAQ ====== */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                FAQ
              </span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h2
              className="font-display text-white uppercase mb-10"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.1 }}
            >
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 max-w-[900px]">
              {faqSchema.mainEntity.map((faq) => (
                <div
                  key={faq.name}
                  className="p-6 rounded-xl"
                  style={{
                    background: '#1A1A1A',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <h3 className="font-heading font-bold text-[#F2F2F2] text-[17px] mb-3">{faq.name}</h3>
                  <p className="font-body text-[15px] text-[#AAAAAA] leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== FINANCING CTA ====== */}
        <section style={{ background: '#111111', padding: '80px 0' }}>
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <div className="w-12 h-[3px] mx-auto mb-4" style={{ background: '#D42B2B' }} />
            <h2
              className="font-display text-white uppercase mb-4"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.1 }}
            >
              Need Financing?
            </h2>
            <p className="font-body text-[#AAAAAA] text-lg mb-8">
              Get approved for up to $5,000 with no credit needed and no down payment. Apply in seconds through Acima and drive away with new tires and wheels today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/financing"
                className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-block"
                style={{ textDecoration: 'none' }}
              >
                APPLY FOR FINANCING
              </Link>
              <a
                href="tel:+19169138786"
                className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center gap-2"
                style={{ textDecoration: 'none' }}
              >
                <Phone className="w-5 h-5" />
                CALL (916) 913-8786
              </a>
            </div>
          </div>
        </section>

        {/* ====== RELATED LINKS ====== */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                Helpful Resources
              </span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h2
              className="font-display text-white uppercase mb-10"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.1 }}
            >
              Learn More
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Best Tire Shop in Sacramento', href: '/blog/best-tire-shop-sacramento' },
                { title: 'Tire Financing with No Credit Check', href: '/blog/tire-financing-no-credit-check-sacramento' },
                { title: 'Tire Geeks on Florin Road', href: '/locations/florin-road' },
                { title: 'All Services', href: '/services' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block p-5 rounded-xl transition-all hover:border-[#D42B2B]/50 group"
                  style={{
                    background: '#1A1A1A',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <span className="font-heading text-[16px] font-semibold text-[#F2F2F2] group-hover:text-[#D42B2B] transition-colors leading-snug block mb-2">
                    {link.title}
                  </span>
                  <span className="font-nav text-[12px] uppercase tracking-wider text-[#D42B2B]">
                    View &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
