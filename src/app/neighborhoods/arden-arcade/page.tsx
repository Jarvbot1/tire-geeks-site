import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, Clock, Check, ChevronRight, Navigation } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tire Shop Arden-Arcade Sacramento | Tires, Wheels & Alignment | Tire Geeks',
  description:
    'Arden-Arcade tire shop on Arden Way — tires from $279, alignment from $79, custom wheels, brakes, and Acima financing. 2245 Arden Way, walk in Mon–Sat 9AM–6PM. Call (916) 913-8786.',
  openGraph: {
    title: 'Tire Shop Arden-Arcade Sacramento | Tires, Wheels & Alignment | Tire Geeks',
    description:
      'Tire Geeks at 2245 Arden Way — local Arden-Arcade tire and wheel shop. Tires from $279, alignment from $79, packages from $999. Walk in Mon–Sat 9AM–6PM.',
    url: 'https://tiregeeks.com/neighborhoods/arden-arcade',
    images: [{ url: '/images/store-front-arden.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://tiregeeks.com/neighborhoods/arden-arcade' },
};

export default function ArdenArcadePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tiregeeks.com' },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://tiregeeks.com/neighborhoods' },
      { '@type': 'ListItem', position: 3, name: 'Arden-Arcade', item: 'https://tiregeeks.com/neighborhoods/arden-arcade' },
    ],
  };

  const serviceGraphSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Tires & Installation in Arden-Arcade, Sacramento',
        description:
          'New tire sales and installation for Arden-Arcade drivers at 2245 Arden Way. Mounting, balancing, valve stems, TPMS reset, and out-the-door pricing. Michelin, BFGoodrich, Toyo, Nitto, Falken, Cooper, Hankook in stock.',
        provider: { '@type': 'LocalBusiness', name: 'Tire Geeks', url: 'https://tiregeeks.com' },
        areaServed: { '@type': 'Place', name: 'Arden-Arcade, Sacramento' },
        serviceType: 'Tire Sales & Installation',
        offers: { '@type': 'Offer', priceCurrency: 'USD', price: '279', description: 'Tires from $279 per set of four' },
      },
      {
        '@type': 'Service',
        name: 'Wheel Alignment in Arden-Arcade, Sacramento',
        description:
          'Four-wheel alignment for Arden-Arcade drivers. Hunter rack, factory specs, printed before-and-after report. Same-day on most cars, trucks, and SUVs.',
        provider: { '@type': 'LocalBusiness', name: 'Tire Geeks', url: 'https://tiregeeks.com' },
        areaServed: { '@type': 'Place', name: 'Arden-Arcade, Sacramento' },
        serviceType: 'Wheel Alignment',
        offers: { '@type': 'Offer', priceCurrency: 'USD', price: '79', description: 'Four-wheel alignment from $79' },
      },
      {
        '@type': 'Service',
        name: 'Tire & Wheel Packages in Arden-Arcade, Sacramento',
        description:
          'Mounted, balanced, and torqued wheel-and-tire packages for Arden-Arcade drivers. Verified fitment before install. Fuel, Method, KMC, Moto Metal, XD, American Force, Black Rhino in stock.',
        provider: { '@type': 'LocalBusiness', name: 'Tire Geeks', url: 'https://tiregeeks.com' },
        areaServed: { '@type': 'Place', name: 'Arden-Arcade, Sacramento' },
        serviceType: 'Tire & Wheel Packages',
        offers: { '@type': 'Offer', priceCurrency: 'USD', price: '999', description: 'Tire and wheel packages from $999' },
      },
      {
        '@type': 'Service',
        name: 'Brake Service in Arden-Arcade, Sacramento',
        description:
          'Brake pad and rotor replacement for Arden-Arcade drivers. Front, rear, or full sets on cars, trucks, and SUVs. Pricing varies by vehicle and parts.',
        provider: { '@type': 'LocalBusiness', name: 'Tire Geeks', url: 'https://tiregeeks.com' },
        areaServed: { '@type': 'Place', name: 'Arden-Arcade, Sacramento' },
        serviceType: 'Brake Service',
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'TireShop',
    '@id': 'https://tiregeeks.com/locations/arden-way#tireshop',
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
    geo: { '@type': 'GeoCoordinates', latitude: 38.59663750191987, longitude: -121.41249393169178 },
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
    areaServed: { '@type': 'Place', name: 'Arden-Arcade, Sacramento' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where exactly is Tire Geeks in Arden-Arcade?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are at 2245 Arden Way, Sacramento CA 95825 — right in the heart of Arden-Arcade between Howe Avenue and Watt Avenue, minutes from Arden Fair Mall and Cal Expo. Most Arden-Arcade addresses are within 2 to 5 minutes of the shop. Walk in Monday through Saturday, 9 AM to 6 PM. Call (916) 913-8786.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I drop my car off in the morning before work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Drop off any morning starting at 9 AM, walk or grab a ride to the office, and we will text you when it is ready. Tires and alignments usually finish in under two hours; full wheel-and-tire packages or brake jobs are a few hours. Pickup any time before 6 PM.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much for a set of four tires?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sets of four start at $279 out the door — mount, balance, valve stems, and TPMS reset included. Final number depends on size and brand. Stock sizes for the Camry, Civic, Accord, Altima, RAV4, CR-V, F-150, and Silverado are on the floor. Walk in or call (916) 913-8786 for an exact quote.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you do custom wheels and fitment locally?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — full wall of Fuel, Method, KMC, Moto Metal, XD, American Force, and Black Rhino on display at the Arden Way shop. Tire-and-wheel packages start at $999. We measure backspacing, verify offset, and check caliper clearance in person before anything goes on. No guesswork, no scratched wheels.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer financing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Acima Leasing — soft credit pull, no hard inquiry. Approval up to $5,000 in seconds. 100 days no interest if you pay it off in that window. Apply on your phone in two minutes at our counter and drive out the same day.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceGraphSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main>
        {/* Breadcrumb Navigation */}
        <div style={{ background: '#0A0A0A', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-3">
            <nav className="flex items-center gap-2 font-nav text-[12px] uppercase tracking-[0.1em]">
              <Link href="/" className="text-[#6B7280] hover:text-[#D42B2B] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-[#6B7280]" />
              <Link href="/locations" className="text-[#6B7280] hover:text-[#D42B2B] transition-colors">
                Service Areas
              </Link>
              <ChevronRight className="w-3 h-3 text-[#6B7280]" />
              <span className="text-[#F2F2F2]">Arden-Arcade</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section
          className="relative flex items-center justify-center text-center"
          style={{
            minHeight: '360px',
            background: 'linear-gradient(to bottom, rgba(10,10,10,0.82), rgba(10,10,10,0.96)), #111',
          }}
        >
          <div className="px-6 py-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                Arden-Arcade, Sacramento
              </span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h1
              className="font-display uppercase text-white mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.05 }}
            >
              Tire Shop on<br />Arden Way
            </h1>
            <p className="font-body text-[#CFCFCF] text-lg max-w-[760px] mx-auto mb-8">
              Tire Geeks is right in the neighborhood at 2245 Arden Way &mdash; most Arden-Arcade
              addresses are 2 to 5 minutes from the shop. Tires starting at $279, alignment from $79,
              tire-and-wheel packages from $999, plus brakes and Acima financing on the spot. Walk in
              Mon&ndash;Sat 9AM&ndash;6PM. Call (916) 913-8786.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19169138786"
                className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center gap-2"
                style={{ textDecoration: 'none' }}
              >
                <Phone className="w-4 h-4" />
                CALL (916) 913-8786
              </a>
              <Link
                href="/financing"
                className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-block"
                style={{ textDecoration: 'none' }}
              >
                APPLY FOR FINANCING
              </Link>
            </div>
          </div>
        </section>

        {/* Why Arden-Arcade drivers choose Tire Geeks */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                Why Arden-Arcade
              </span>
            </div>
            <h2
              className="font-display text-white uppercase mb-10"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', lineHeight: 1.1 }}
            >
              Why Arden-Arcade Drivers Choose Tire Geeks
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                <h3 className="font-heading text-white text-lg uppercase mb-3">
                  Right in the Neighborhood
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  2245 Arden Way is the address. From most homes off Watt Avenue, Howe Avenue, El
                  Camino, Eastern, or Fulton, you are 2 to 5 minutes door-to-door. No freeway, no
                  cross-town drive, no losing the morning. Drop the car off on the way to work, swing
                  back at lunch, or grab a coffee at one of the spots up the block while we knock it
                  out. Walk in Mon&ndash;Sat 9AM&ndash;6PM &mdash; no appointment needed for tires,
                  alignment, or brakes.
                </p>
              </div>

              <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                <h3 className="font-heading text-white text-lg uppercase mb-3">
                  Tires, Wheels, and Alignment Under One Roof
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Most chain shops handle tires only and send you elsewhere for wheels or any custom
                  fitment. Our Arden Way shop carries Michelin, BFGoodrich, Toyo, Nitto, Falken,
                  Cooper, and Hankook on the floor, plus a full wall of Fuel, Method, KMC, Moto
                  Metal, XD, American Force, and Black Rhino. Tires from $279, alignment from $79,
                  full wheel-and-tire packages from $999. One stop, one bill, one shop that knows
                  what fits what.
                </p>
              </div>

              <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                <h3 className="font-heading text-white text-lg uppercase mb-3">
                  Walk-In Friendly. Financing on the Spot.
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  No appointment lottery. Roll up Mon&ndash;Sat, get a quote in person, most jobs go
                  in the same day. Need to spread the cost? Acima Leasing runs a soft credit pull
                  &mdash; no hard inquiry &mdash; and approves up to $5,000 in seconds. 100 days no
                  interest if you pay it off in that window. Stop scrolling. Start rolling.{' '}
                  <Link href="/financing" className="text-[#D42B2B] hover:underline">
                    See how Acima works
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Arden-Arcade vehicles */}
        <section style={{ background: '#111111', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                Services
              </span>
            </div>
            <h2
              className="font-display text-white uppercase mb-6"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', lineHeight: 1.1 }}
            >
              Services for Arden-Arcade Vehicles
            </h2>
            <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-10 max-w-[900px]">
              Arden-Arcade brings every kind of vehicle to our shop &mdash; daily-driven Camrys and
              CR-Vs, F-150s and Tundras off Watt, lifted Tacomas headed up to Tahoe, and lowered
              Civics and Camaros from the meet crowd. Here&apos;s what most neighbors come in for:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/services/tires-sacramento"
                className="block bg-[#1A1A1A] border border-white/5 rounded-xl p-8 transition-all hover:border-[#D42B2B]/50 group"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-heading text-white text-xl uppercase group-hover:text-[#D42B2B] transition-colors">
                    Tires
                  </h3>
                  <span className="font-heading text-[#D42B2B] text-sm uppercase tracking-wider">
                    starting at $279
                  </span>
                </div>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-3">
                  Every major brand on the floor &mdash; Michelin, BFGoodrich, Toyo, Nitto, Falken,
                  Cooper, Hankook. Mounted, balanced, valve stems, TPMS reset, and out-the-door
                  pricing.
                </p>
                <span className="font-nav text-[12px] uppercase tracking-wider text-[#D42B2B]">
                  Tires in Sacramento &rarr;
                </span>
              </Link>

              <Link
                href="/services/alignment-sacramento"
                className="block bg-[#1A1A1A] border border-white/5 rounded-xl p-8 transition-all hover:border-[#D42B2B]/50 group"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-heading text-white text-xl uppercase group-hover:text-[#D42B2B] transition-colors">
                    Wheel Alignment
                  </h3>
                  <span className="font-heading text-[#D42B2B] text-sm uppercase tracking-wider">
                    starting at $79
                  </span>
                </div>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-3">
                  Hunter rack four-wheel alignment to factory specs. Printed before-and-after.
                  Same-day on most cars and SUVs &mdash; usually under an hour.
                </p>
                <span className="font-nav text-[12px] uppercase tracking-wider text-[#D42B2B]">
                  Alignment Service &rarr;
                </span>
              </Link>

              <Link
                href="/services/tires-and-wheels-sacramento"
                className="block bg-[#1A1A1A] border border-white/5 rounded-xl p-8 transition-all hover:border-[#D42B2B]/50 group"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-heading text-white text-xl uppercase group-hover:text-[#D42B2B] transition-colors">
                    Tire &amp; Wheel Packages
                  </h3>
                  <span className="font-heading text-[#D42B2B] text-sm uppercase tracking-wider">
                    starting at $999
                  </span>
                </div>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-3">
                  Wheels and tires bundled, mounted, balanced, and torqued. Verified backspacing,
                  offset, and caliper clearance before install. Fuel, Method, KMC, Moto Metal, XD,
                  American Force, Black Rhino in stock.
                </p>
                <span className="font-nav text-[12px] uppercase tracking-wider text-[#D42B2B]">
                  Tire &amp; Wheel Packages &rarr;
                </span>
              </Link>

              <Link
                href="/services/brakes-sacramento"
                className="block bg-[#1A1A1A] border border-white/5 rounded-xl p-8 transition-all hover:border-[#D42B2B]/50 group"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-heading text-white text-xl uppercase group-hover:text-[#D42B2B] transition-colors">
                    Brakes
                  </h3>
                  <span className="font-heading text-[#D42B2B] text-sm uppercase tracking-wider">
                    Priced per vehicle
                  </span>
                </div>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-3">
                  Pad and rotor replacement, front, rear, or full sets. Quality pads and rotors
                  stocked for daily drivers, trucks, and SUVs. Walk in for an inspection and a
                  number before any work starts.
                </p>
                <span className="font-nav text-[12px] uppercase tracking-wider text-[#D42B2B]">
                  Brake Service &rarr;
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Drive directions from Arden-Arcade */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
                  <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                    Directions
                  </span>
                </div>
                <h2
                  className="font-display text-white uppercase mb-6"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', lineHeight: 1.1 }}
                >
                  Find the Arden Way Shop
                </h2>
                <div className="space-y-5">
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                    The shop sits on Arden Way between Howe Avenue and Watt Avenue, a few blocks from
                    Arden Fair Mall and Cal Expo. Most Arden-Arcade addresses are within 2 to 5
                    minutes of 2245 Arden Way. From the south side off Business 80, exit Howe Avenue
                    or Watt Avenue and head north to Arden Way. From the north end near Whitney or
                    Marconi, drop south on Watt or Eastern and turn onto Arden Way.
                  </p>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                    Plenty of parking on site. Walk in any day Mon&ndash;Sat starting at 9 AM. If
                    the front bays are full, pull around back and we will get you checked in and
                    quoted on the spot.
                  </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://www.google.com/maps/dir//2245+Arden+Way,+Sacramento,+CA+95825"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center justify-center gap-2"
                    style={{ textDecoration: 'none' }}
                  >
                    <Navigation className="w-4 h-4" />
                    GET DIRECTIONS
                  </a>
                  <a
                    href="tel:+19169138786"
                    className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center justify-center gap-2"
                    style={{ textDecoration: 'none' }}
                  >
                    <Phone className="w-4 h-4" />
                    CALL (916) 913-8786
                  </a>
                </div>
              </div>
              <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                <h3 className="font-heading text-white text-lg uppercase mb-5">
                  Tire Geeks &mdash; Arden Way
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#D42B2B' }} />
                    <span className="font-body text-[#CFCFCF] text-[15px]">
                      2245 Arden Way, Sacramento, CA 95825
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 flex-shrink-0" style={{ color: '#D42B2B' }} />
                    <a
                      href="tel:+19169138786"
                      className="font-body text-[#CFCFCF] text-[15px] hover:text-[#D42B2B] transition-colors"
                    >
                      (916) 913-8786
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 flex-shrink-0" style={{ color: '#D42B2B' }} />
                    <span className="font-body text-[#CFCFCF] text-[15px]">Mon&ndash;Sat: 9AM&ndash;6PM</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/5">
                  <p className="font-body text-[#9E9E9E] text-[14px] leading-relaxed mb-3">
                    Drive time from most Arden-Arcade addresses: <span className="text-white font-semibold">2&ndash;5 minutes</span>
                  </p>
                  <p className="font-body text-[#9E9E9E] text-[14px] leading-relaxed">
                    Cross streets: Arden Way between Howe Ave and Watt Ave. Minutes from Arden Fair Mall.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Arden-Arcade scenarios */}
        <section style={{ background: '#111111', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                Real Customers
              </span>
            </div>
            <h2
              className="font-display text-white uppercase mb-10"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', lineHeight: 1.1 }}
            >
              Real Arden-Arcade Scenarios
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                <h3 className="font-heading text-white text-lg uppercase mb-4">
                  Drop Off Before Work, Pick Up After
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  You live off Eastern, Watt, or Fulton, and your daily driver needs four tires and
                  an alignment. You are at our counter at 9 AM, leave the car, walk or grab a ride to
                  the office, and we text you mid-morning when it is done. Tires from $279, alignment
                  from $79, both knocked out before lunch. Pickup any time before 6 PM &mdash; the
                  shop is two minutes from your driveway.
                </p>
              </div>

              <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                <h3 className="font-heading text-white text-lg uppercase mb-4">
                  Brakes and Tires Before a Vacation
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  You have a road trip coming up and the SUV pulls left, the brakes squeak, and the
                  rear tires are showing wear bars. Walk in, we inspect everything in front of you,
                  give you the number for tires + alignment + brake pads and rotors as one package,
                  and you decide. Acima covers all of it on a soft pull if you want to spread it out.
                  One shop, one bill, no run-around.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Arden-Arcade FAQ */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                Arden-Arcade FAQ
              </span>
            </div>
            <h2
              className="font-display text-white uppercase mb-10"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', lineHeight: 1.1 }}
            >
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 max-w-[920px]">
              {faqSchema.mainEntity.map((faq) => (
                <div
                  key={faq.name}
                  className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8"
                >
                  <h3 className="font-heading text-white text-[17px] font-semibold mb-3">{faq.name}</h3>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Close */}
        <section className="text-center" style={{ background: '#111111', padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <div className="w-12 h-[3px] mx-auto mb-4" style={{ background: '#D42B2B' }} />
            <h2
              className="font-display text-white uppercase mb-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', lineHeight: 1.1 }}
            >
              Stop Scrolling. Start Rolling.
            </h2>
            <p className="font-body text-[#CFCFCF] text-lg mb-3 leading-relaxed">
              Tire Geeks &mdash; 2245 Arden Way, Sacramento. Right in the Arden-Arcade neighborhood.
              Walk in Mon&ndash;Sat, 9 AM to 6 PM. Tires from $279, alignment from $79, packages
              from $999, plus Acima financing on the spot.
            </p>
            <p className="font-body text-[#9E9E9E] text-[15px] mb-8 italic">
              Don&apos;t trust a nerd for your needs &mdash; go with the geeks.
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
              <Link
                href="/financing"
                className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-block"
                style={{ textDecoration: 'none' }}
              >
                APPLY FOR FINANCING
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-[#9E9E9E] font-nav text-[12px] uppercase tracking-wider">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#D42B2B]" /> Walk-Ins Welcome</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#D42B2B]" /> Same-Day Install</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#D42B2B]" /> Acima Financing</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
