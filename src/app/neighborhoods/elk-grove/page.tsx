import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, Clock, Check, ChevronRight, Navigation } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tire Shop Elk Grove | Tire Financing No Credit Check | Tire Geeks',
  description:
    'Tires from $279 with Acima financing — 0% for 100 days, soft credit pull, up to $5,000 approved in seconds. Tire Geeks on Florin Road, 10–15 min from Elk Grove. Walk in Mon–Sat 9AM–6PM. Call (916) 800-8786.',
  openGraph: {
    title: 'Tire Shop Elk Grove | Tire Financing No Credit Check | Tire Geeks',
    description:
      'Tires from $279 plus Acima financing for Elk Grove drivers — no credit needed, 100 days no interest. Walk in Mon–Sat 9AM–6PM. Call (916) 800-8786.',
    url: 'https://tiregeeks.com/neighborhoods/elk-grove',
    images: [{ url: '/images/store-front-florin.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://tiregeeks.com/neighborhoods/elk-grove' },
};

export default function ElkGrovePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tiregeeks.com' },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://tiregeeks.com/neighborhoods' },
      { '@type': 'ListItem', position: 3, name: 'Elk Grove', item: 'https://tiregeeks.com/neighborhoods/elk-grove' },
    ],
  };

  const serviceGraphSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Tires & Installation in Elk Grove, Sacramento',
        description:
          'New tire sales and installation for Elk Grove drivers. Mounting, balancing, valve stems, TPMS reset, and out-the-door pricing. Cooper, Goodyear, Hankook, Falken, BFGoodrich, Toyo, Nitto in stock.',
        provider: { '@type': 'LocalBusiness', name: 'Tire Geeks', url: 'https://tiregeeks.com' },
        areaServed: { '@type': 'Place', name: 'Elk Grove' },
        serviceType: 'Tire Sales & Installation',
        offers: { '@type': 'Offer', priceCurrency: 'USD', price: '279', description: 'Tires from $279 per set of four' },
      },
      {
        '@type': 'Service',
        name: 'Tire Financing in Elk Grove',
        description:
          'Acima Leasing for tires, wheels, and service work for Elk Grove drivers. Soft credit pull, no hard inquiry. Approval up to $5,000 in seconds. 100 days no interest. Drive out the same day.',
        provider: { '@type': 'LocalBusiness', name: 'Tire Geeks', url: 'https://tiregeeks.com' },
        areaServed: { '@type': 'Place', name: 'Elk Grove' },
        serviceType: 'Tire Financing',
      },
      {
        '@type': 'Service',
        name: 'Wheel Alignment in Elk Grove',
        description:
          'Four-wheel alignment for Elk Grove drivers. Hunter rack, factory specs, printed before-and-after. Done same day on most cars, trucks, and SUVs.',
        provider: { '@type': 'LocalBusiness', name: 'Tire Geeks', url: 'https://tiregeeks.com' },
        areaServed: { '@type': 'Place', name: 'Elk Grove' },
        serviceType: 'Wheel Alignment',
        offers: { '@type': 'Offer', priceCurrency: 'USD', price: '79', description: 'Four-wheel alignment from $79' },
      },
      {
        '@type': 'Service',
        name: 'Brake Service in Elk Grove',
        description:
          'Brake pad and rotor replacement for Elk Grove drivers. Front, rear, or full sets. Pricing varies by vehicle and parts. Walk-ins welcome.',
        provider: { '@type': 'LocalBusiness', name: 'Tire Geeks', url: 'https://tiregeeks.com' },
        areaServed: { '@type': 'Place', name: 'Elk Grove' },
        serviceType: 'Brake Service',
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'TireShop',
    '@id': 'https://tiregeeks.com/locations/florin-road#tireshop',
    name: 'Tire Geeks - Florin Road',
    image: 'https://tiregeeks.com/images/store-front-florin.jpg',
    url: 'https://tiregeeks.com/locations/florin-road',
    telephone: '(916) 800-8786',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3020 Florin Road',
      addressLocality: 'Sacramento',
      addressRegion: 'CA',
      postalCode: '95822',
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 38.4955604117297, longitude: -121.47168528748884 },
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
    areaServed: { '@type': 'Place', name: 'Elk Grove' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can I get tires today if I have bad credit or no credit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Acima Leasing runs a soft credit pull — no hard inquiry, no impact on your score. Most Elk Grove customers are approved up to $5,000 in seconds, and you drive out the same day on new tires. If no one would approve you somewhere else, run the Acima check on your phone in our shop and see what comes back. 100 days no interest if you pay it off in that window.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does it cost to put 4 tires on my car?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sets of four start at $279 out the door — mounting, balancing, valve stems, and TPMS reset included. Final price depends on size and brand. Stock tire sizes for the Camry, Civic, Altima, RAV4, CR-V, F-150, and Silverado are on the floor right now. Walk in or call (916) 800-8786 for an exact quote on your year, make, and model.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Acima financing actually work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Apply on your phone in about two minutes. Soft pull only, no hard inquiry. Approval decision is instant. If approved, you sign the lease at our counter, pay a small initial payment, and drive out on new tires today. Pay it off within 100 days and you owe zero interest. Beyond that, payments stretch out — but you walked in needing tires today, and you walked out with tires today.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long is the drive from Elk Grove to your shop?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ten to fifteen minutes from most Elk Grove addresses, longer at rush hour. Highway 99 north, exit Florin Road, head west — we are about a mile from the off-ramp on the south side of Florin Road at 3020. Plenty of parking, walk in any morning starting at 9 AM.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need an appointment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No appointment. Walk in Monday through Saturday, 9 AM to 6 PM. Most tire installs and alignments finish in under two hours. If you want to drop off in the morning before work, that is fine too — we will text you when it is ready.',
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
              <span className="text-[#F2F2F2]">Elk Grove</span>
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
                Elk Grove, Sacramento
              </span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h1
              className="font-display uppercase text-white mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.05 }}
            >
              Tire Shop for<br />Elk Grove Drivers
            </h1>
            <p className="font-body text-[#CFCFCF] text-lg max-w-[760px] mx-auto mb-8">
              Need tires today, can&apos;t wait til payday? Tire Geeks on Florin Road is 10&ndash;15 minutes
              up Highway 99 from Elk Grove. Tires starting at $279 out the door, Acima financing approves
              up to $5,000 in seconds with a soft credit pull &mdash; no hard inquiry. Walk in Mon&ndash;Sat
              9AM&ndash;6PM. Call (916) 800-8786.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19168008786"
                className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center gap-2"
                style={{ textDecoration: 'none' }}
              >
                <Phone className="w-4 h-4" />
                CALL (916) 800-8786
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

        {/* Why Elk Grove drivers choose Tire Geeks */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                Why Elk Grove
              </span>
            </div>
            <h2
              className="font-display text-white uppercase mb-10"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', lineHeight: 1.1 }}
            >
              Why Elk Grove Drivers Choose Tire Geeks
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                <h3 className="font-heading text-white text-lg uppercase mb-3">
                  Financing That Actually Approves People
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Acima runs a soft credit pull &mdash; not a hard inquiry &mdash; so applying does not
                  ding your score. Most folks who walked into a chain shop and got told no walk out of
                  Tire Geeks with a same-day approval. Up to $5,000, decision in seconds, 100 days no
                  interest if you pay it off in that window. Working bad-credit, no-credit, or rebuilding
                  after a rough stretch is fine. Run the check on your phone at our counter and see what
                  comes back.{' '}
                  <Link href="/financing" className="text-[#D42B2B] hover:underline">
                    See how Acima works
                  </Link>
                  .
                </p>
              </div>

              <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                <h3 className="font-heading text-white text-lg uppercase mb-3">
                  Real Tires, Real Pricing, No Bait-and-Switch
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  $279 starting price means $279 out the door &mdash; mount, balance, valve stems, and
                  TPMS reset all included. No surprise add-ons at checkout. Cooper, Goodyear, Hankook,
                  Falken, BFGoodrich, Toyo, and Nitto on the floor at both Sacramento locations. Stock
                  sizes for the Camry, Civic, Altima, F-150, Silverado, and RAV4 ready to mount today.
                  We give you the price before we touch your car.
                </p>
              </div>

              <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                <h3 className="font-heading text-white text-lg uppercase mb-3">
                  No Judgment at the Counter
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Walk in needing four tires before a road trip when payday is still a week out &mdash;
                  that is most of who comes through our doors. We do not lecture, we do not push you to
                  the most expensive set on the rack, and we do not run hard credit checks behind your
                  back. Soft pull, real options, real numbers. Stop scrolling. Start rolling. Roll up
                  Mon&ndash;Sat 9AM&ndash;6PM and we will get you sorted.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Elk Grove vehicles */}
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
              Services for Elk Grove Vehicles
            </h2>
            <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-10 max-w-[900px]">
              Most Elk Grove drivers come in for the same things: a fresh set of tires before the next
              road trip, an alignment because the wheel pulls, brake pads getting thin, or a financing
              option that actually approves them. Here&apos;s what we handle every day:
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
                  Cooper, Goodyear, Hankook, Falken, BFGoodrich, Toyo, Nitto on the floor. Mount,
                  balance, valve stems, and TPMS reset included &mdash; the price you see is the price
                  you pay.
                </p>
                <span className="font-nav text-[12px] uppercase tracking-wider text-[#D42B2B]">
                  Tires in Sacramento &rarr;
                </span>
              </Link>

              <Link
                href="/financing"
                className="block bg-[#1A1A1A] border border-white/5 rounded-xl p-8 transition-all hover:border-[#D42B2B]/50 group"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-heading text-white text-xl uppercase group-hover:text-[#D42B2B] transition-colors">
                    Financing
                  </h3>
                  <span className="font-heading text-[#D42B2B] text-sm uppercase tracking-wider">
                    Up to $5,000
                  </span>
                </div>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-3">
                  Acima Leasing &mdash; soft credit pull, no hard inquiry. 100 days no interest if you
                  pay it off in that window. Apply on your phone in two minutes, approval in seconds.
                </p>
                <span className="font-nav text-[12px] uppercase tracking-wider text-[#D42B2B]">
                  Apply for Financing &rarr;
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
                  Hunter rack, four-wheel alignment to factory specs. Printed before-and-after report.
                  Most cars and SUVs done same day &mdash; usually under an hour.
                </p>
                <span className="font-nav text-[12px] uppercase tracking-wider text-[#D42B2B]">
                  Alignment Service &rarr;
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
                  Pad and rotor replacement, front, rear, or full set. Quality pads and rotors stocked
                  for the Camry, Civic, F-150, Silverado, RAV4, and most daily drivers. Acima covers
                  brake jobs the same as tires.
                </p>
                <span className="font-nav text-[12px] uppercase tracking-wider text-[#D42B2B]">
                  Brake Service &rarr;
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Drive directions from Elk Grove */}
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
                  Drive From Elk Grove to Florin Road
                </h2>
                <div className="space-y-5">
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                    Easiest route from Elk Grove is straight up Highway 99 north. From central Elk
                    Grove (Elk Grove Blvd), it is roughly 10 miles. Hop on 99 north, take exit 290 for
                    Florin Road, head west off the ramp, and the shop is about a mile down on the south
                    side of the street at 3020 Florin Road. Ten to fifteen minutes outside of rush
                    hour, twenty if you hit traffic into downtown.
                  </p>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                    Coming from the east side of Elk Grove near Sheldon Road or Wilton? Stockton
                    Boulevard north straight into Florin is a flatter, light-by-light alternative if 99
                    is backed up. Plenty of parking on site. Pull around back if the front bays are
                    full and we will get you checked in.
                  </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://www.google.com/maps/dir/Elk+Grove,+CA/3020+Florin+Rd,+Sacramento,+CA+95822"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center justify-center gap-2"
                    style={{ textDecoration: 'none' }}
                  >
                    <Navigation className="w-4 h-4" />
                    GET DIRECTIONS
                  </a>
                  <a
                    href="tel:+19168008786"
                    className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center justify-center gap-2"
                    style={{ textDecoration: 'none' }}
                  >
                    <Phone className="w-4 h-4" />
                    CALL (916) 800-8786
                  </a>
                </div>
              </div>
              <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                <h3 className="font-heading text-white text-lg uppercase mb-5">
                  Tire Geeks &mdash; Florin Road
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#D42B2B' }} />
                    <span className="font-body text-[#CFCFCF] text-[15px]">
                      3020 Florin Road, Sacramento, CA 95822
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 flex-shrink-0" style={{ color: '#D42B2B' }} />
                    <a
                      href="tel:+19168008786"
                      className="font-body text-[#CFCFCF] text-[15px] hover:text-[#D42B2B] transition-colors"
                    >
                      (916) 800-8786
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 flex-shrink-0" style={{ color: '#D42B2B' }} />
                    <span className="font-body text-[#CFCFCF] text-[15px]">Mon&ndash;Sat: 9AM&ndash;6PM</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/5">
                  <p className="font-body text-[#9E9E9E] text-[14px] leading-relaxed mb-3">
                    Drive time from Elk Grove: <span className="text-white font-semibold">10&ndash;15 minutes</span>
                  </p>
                  <p className="font-body text-[#9E9E9E] text-[14px] leading-relaxed">
                    Route: Highway 99 North &rarr; Exit 290 Florin Rd &rarr; West to 3020 Florin Rd.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Elk Grove scenarios */}
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
              Real Elk Grove Scenarios
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                <h3 className="font-heading text-white text-lg uppercase mb-4">
                  Family Road Trip and the Tires Are Cooked
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Your RAV4 or Highlander needs four tires before next weekend&apos;s road trip and the
                  dealership wants $1,200 with no financing options if your credit is rough. You drive
                  ten minutes up 99 to Florin Road, pull out your phone, run Acima at our counter
                  &mdash; soft pull, no hard inquiry &mdash; and approval comes back in seconds. New
                  set on, alignment checked, kids in the back, gone before lunch. 100 days no interest
                  if you knock it out by then.
                </p>
              </div>

              <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                <h3 className="font-heading text-white text-lg uppercase mb-4">
                  Single Parent, Two Tires Needed, Payday Is 10 Days Out
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  The Civic or Camry needs two tires now and an alignment because the wheel pulls
                  hard. You cannot wait til payday and no one would approve you somewhere else. Acima
                  handles two tires, alignment, valve stems, and balance the same way it handles a
                  full set. Soft pull approval, you sign the lease at our counter, drive out today.
                  We do not lecture, we do not upsell, we get you back on the road safe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Elk Grove FAQ */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                Elk Grove FAQ
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
              Ride Now. Pay Later.
            </h2>
            <p className="font-body text-[#CFCFCF] text-lg mb-3 leading-relaxed">
              Tire Geeks &mdash; 3020 Florin Road, Sacramento. Ten to fifteen minutes from Elk Grove
              up Highway 99. Walk in Mon&ndash;Sat, 9 AM to 6 PM. Acima approves up to $5,000 in
              seconds, no credit needed, soft pull only, 100 days no interest.
            </p>
            <p className="font-body text-[#9E9E9E] text-[15px] mb-8 italic">
              Don&apos;t trust a nerd for your needs &mdash; go with the geeks.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19168008786"
                className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center gap-2"
                style={{ textDecoration: 'none' }}
              >
                <Phone className="w-5 h-5" />
                CALL (916) 800-8786
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
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#D42B2B]" /> Same-Day Approval</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#D42B2B]" /> Soft Credit Pull</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
