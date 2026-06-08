import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, Clock, Check, ChevronRight, Navigation } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tire Shop Land Park Sacramento | Lifts, Wheels & Tires | Tire Geeks',
  description:
    'Lift kits, lowering, custom wheels & tires from $279 for Land Park drivers. Tire Geeks on Florin Road, 5 min from Land Park. Walk in Mon-Sat 9AM-6PM. Call (916) 800-8786.',
  openGraph: {
    title: 'Tire Shop Land Park Sacramento | Lifts, Wheels & Tires | Tire Geeks',
    description:
      'Lift kits, lowering, custom wheel packages, and tires from $279 for Land Park, Sacramento. Walk in Mon-Sat 9AM-6PM. Call (916) 800-8786.',
    url: 'https://tiregeeks.com/neighborhoods/land-park',
    images: [{ url: '/images/store-front-florin.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://tiregeeks.com/neighborhoods/land-park' },
};

export default function LandParkPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tiregeeks.com' },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://tiregeeks.com/neighborhoods' },
      { '@type': 'ListItem', position: 3, name: 'Land Park', item: 'https://tiregeeks.com/neighborhoods/land-park' },
    ],
  };

  const serviceGraphSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Lift Kit Installation in Land Park, Sacramento',
        description:
          'Leveling kits, body lifts, and 3-6 inch suspension lifts for trucks, Jeeps, and SUVs from Land Park, Sacramento. Rough Country, ReadyLIFT, BDS, Bilstein, Teraflex. Post-lift four-wheel alignment included. Pricing varies by vehicle and kit.',
        provider: { '@type': 'LocalBusiness', name: 'Tire Geeks', url: 'https://tiregeeks.com' },
        areaServed: { '@type': 'Place', name: 'Land Park, Sacramento' },
        serviceType: 'Lift Kit Installation',
      },
      {
        '@type': 'Service',
        name: 'Car Lowering & Coilover Installation in Land Park, Sacramento',
        description:
          'Lowering springs, coilovers, and air ride installation for cars and trucks from Land Park. BC Racing, KW, Tein, Eibach, H&R, Air Lift Performance. CVC 24008 compliant. Post-install four-wheel alignment included. Pricing varies by vehicle and setup.',
        provider: { '@type': 'LocalBusiness', name: 'Tire Geeks', url: 'https://tiregeeks.com' },
        areaServed: { '@type': 'Place', name: 'Land Park, Sacramento' },
        serviceType: 'Lowering Kit Installation',
      },
      {
        '@type': 'Service',
        name: 'Custom Wheels & Fitment in Land Park, Sacramento',
        description:
          'Aftermarket wheels with verified fitment for Land Park drivers. Fuel, Method, KMC, Moto Metal, XD, American Force, Black Rhino in stock. Backspacing, offset, and caliper clearance measured in person before install. Pricing varies by brand and size.',
        provider: { '@type': 'LocalBusiness', name: 'Tire Geeks', url: 'https://tiregeeks.com' },
        areaServed: { '@type': 'Place', name: 'Land Park, Sacramento' },
        serviceType: 'Custom Wheels',
      },
      {
        '@type': 'Service',
        name: 'Tires & Installation in Land Park, Sacramento',
        description:
          'New tire sales and installation for Land Park drivers. Mounting, balancing, valve stems, TPMS reset, and out-the-door pricing. All major brands in stock — Nitto, Toyo, BFGoodrich, Falken, Cooper, Hankook, Michelin.',
        provider: { '@type': 'LocalBusiness', name: 'Tire Geeks', url: 'https://tiregeeks.com' },
        areaServed: { '@type': 'Place', name: 'Land Park, Sacramento' },
        serviceType: 'Tire Sales & Installation',
        offers: { '@type': 'Offer', priceCurrency: 'USD', price: '279', description: 'Tires from $279 per set of four' },
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
    areaServed: { '@type': 'Place', name: 'Land Park, Sacramento' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does a lift kit installation take in your shop?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Leveling kits go in under two hours. A 4-inch suspension lift on a Tacoma, 4Runner, or F-150 runs about half a day, post-lift alignment included. Bigger 6-inch builds with brake-line extensions and driveshaft work take a full day. Walk in or call (916) 800-8786 for an exact estimate on your truck.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you do alignments after lift kits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Every lift, leveling kit, lowering kit, and coilover install at Tire Geeks includes a post-install four-wheel alignment at no extra charge. A lift without an alignment shreds new tires in weeks — there is no version of this job that ends without us putting it on the rack.',
        },
      },
      {
        '@type': 'Question',
        name: 'What custom wheel sizes work on a stock 4Runner?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A fifth-generation 4Runner runs 17x7 with +4 offset from the factory. For a sportier look without rubbing, 17x8.5 or 18x9 with 0 to -12 offset works on stock suspension. Add a leveling kit and you can step up to 17x9 with -12 to -19. We measure and verify before you commit.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you keep tires in stock or do I have to wait?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hundreds of tires on the floor across both Sacramento locations — Nitto, Toyo, BFGoodrich, Falken, Cooper, Hankook, Michelin, and more. Most popular truck, SUV, and car sizes are in stock for same-day install. Special-order sizes usually arrive next day.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I drop my truck off in the morning?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Walk in any morning Monday through Saturday starting at 9 AM. Most lift, lowering, or wheel-and-tire jobs are done by close. We will text you when it is ready for pickup.',
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
              <span className="text-[#F2F2F2]">Land Park</span>
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
                Land Park, Sacramento
              </span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h1
              className="font-display uppercase text-white mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.05 }}
            >
              Tire Shop for<br />Land Park Sacramento
            </h1>
            <p className="font-body text-[#CFCFCF] text-lg max-w-[760px] mx-auto mb-8">
              Land Park drivers don&apos;t have to cross town for custom truck builds, lowered cars, or
              fitment-correct wheel work. Tire Geeks on Florin Road handles lifts and leveling kits,
              lowering work, custom wheel packages, and tires starting at $279 — five minutes from
              Land Park via Sutterville Road. Walk in Mon&ndash;Sat 9AM&ndash;6PM. Call (916) 800-8786.
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

        {/* Why Land Park drivers choose Tire Geeks */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                Why Land Park
              </span>
            </div>
            <h2
              className="font-display text-white uppercase mb-10"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', lineHeight: 1.1 }}
            >
              Why Land Park Drivers Choose Tire Geeks
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                <h3 className="font-heading text-white text-lg uppercase mb-3">
                  Custom Work the Chains Won&apos;t Touch
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Most chain tire shops on Florin or Stockton won&apos;t touch a lift kit, a coilover
                  install, or a fender-rolled flush wheel setup. They run on a database lookup &mdash;
                  type in the year, make, and model, hand you whatever fits stock, send you on your way.
                  The moment your build gets interesting, they&apos;re out. We do all of it, every day.
                  Lift kits 2&ndash;6&quot;+, leveling kits, coilovers, air ride, lowering springs,
                  custom wheel fitment, post-lift and post-drop alignment. Walk in with a stock truck
                  and drive out with a complete build.
                </p>
              </div>

              <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                <h3 className="font-heading text-white text-lg uppercase mb-3">
                  Real Fitment Knowledge, Every Major Brand
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Looking for someone who actually knows fitment? We carry every major brand and we
                  know what fits what &mdash; Nitto Ridge Grappler, Toyo Open Country, BFGoodrich
                  KO2, and Falken Wildpeak for the trucks; Michelin Pilot Sport, Continental
                  ExtremeContact, and Falken Azenis for the cars. Wheels from Fuel, Method, KMC,
                  Moto Metal, XD, American Force, and Black Rhino. Stock setup got nothing? We
                  measure backspacing, verify the bolt pattern, and check caliper clearance before
                  anything goes on. No guesswork, no scratched wheels, no come-back trips.
                </p>
              </div>

              <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                <h3 className="font-heading text-white text-lg uppercase mb-3">
                  Walk In Any Day &mdash; No Appointment Lottery
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  No appointment needed. Mon&ndash;Sat, 9 AM to 6 PM. Roll up, get a quote in person,
                  most jobs go in the same day. Tires and alignments usually finish in under two hours.
                  Lift kits and coilover installs same-day. We don&apos;t book you out two weeks like
                  the dealership and we don&apos;t make you reserve a slot weeks ahead like the chain
                  shops. Walk in today &mdash; we&apos;ll get you a quote on the spot and most builds
                  rolled out the same shift.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Land Park vehicles */}
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
              Services for Land Park Vehicles
            </h2>
            <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-10 max-w-[900px]">
              Land Park brings a mix of vehicles to our shop &mdash; lifted Tacomas headed up to Tahoe,
              Civics and Camaros sitting on coilovers, daily-driven Camrys and F-150s due for tires.
              We build across the whole spectrum, from a daily set of all-seasons to a full
              lift-and-wheel build. Here&apos;s what most Land Park drivers come in for:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/services/lift-kits-sacramento"
                className="block bg-[#1A1A1A] border border-white/5 rounded-xl p-8 transition-all hover:border-[#D42B2B]/50 group"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-heading text-white text-xl uppercase group-hover:text-[#D42B2B] transition-colors">
                    Lift &amp; Leveling Kits
                  </h3>
                  <span className="font-heading text-[#D42B2B] text-sm uppercase tracking-wider">
                    Priced per vehicle
                  </span>
                </div>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-3">
                  Leveling kits to full 6-inch suspension lifts on F-150, Silverado, RAM, Tacoma,
                  4Runner, and Wrangler. Rough Country, ReadyLIFT, BDS, Bilstein, Teraflex.
                  Post-lift four-wheel alignment included on every install.
                </p>
                <span className="font-nav text-[12px] uppercase tracking-wider text-[#D42B2B]">
                  Lift Kit Installation Sacramento &rarr;
                </span>
              </Link>

              <Link
                href="/services/lowering-sacramento"
                className="block bg-[#1A1A1A] border border-white/5 rounded-xl p-8 transition-all hover:border-[#D42B2B]/50 group"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-heading text-white text-xl uppercase group-hover:text-[#D42B2B] transition-colors">
                    Lowering
                  </h3>
                  <span className="font-heading text-[#D42B2B] text-sm uppercase tracking-wider">
                    Priced per setup
                  </span>
                </div>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-3">
                  Lowering springs, coilovers, and air ride. BC Racing, KW, Tein, Eibach, H&amp;R,
                  Air Lift Performance. CVC 24008 compliant &mdash; frame stays above the rim.
                  Low is a lifestyle.
                </p>
                <span className="font-nav text-[12px] uppercase tracking-wider text-[#D42B2B]">
                  Lowering Services Sacramento &rarr;
                </span>
              </Link>

              <Link
                href="/services/wheels-sacramento"
                className="block bg-[#1A1A1A] border border-white/5 rounded-xl p-8 transition-all hover:border-[#D42B2B]/50 group"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-heading text-white text-xl uppercase group-hover:text-[#D42B2B] transition-colors">
                    Custom Wheels
                  </h3>
                  <span className="font-heading text-[#D42B2B] text-sm uppercase tracking-wider">
                    By brand &amp; size
                  </span>
                </div>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-3">
                  Fitment dialed in with hub-centric rings, exact offset, and verified caliper
                  clearance. Fuel, Method, KMC, Moto Metal, XD, American Force, Black Rhino in
                  stock across the wall.
                </p>
                <span className="font-nav text-[12px] uppercase tracking-wider text-[#D42B2B]">
                  Custom Wheels Sacramento &rarr;
                </span>
              </Link>

              <Link
                href="/services/tires-sacramento"
                className="block bg-[#1A1A1A] border border-white/5 rounded-xl p-8 transition-all hover:border-[#D42B2B]/50 group"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-heading text-white text-xl uppercase group-hover:text-[#D42B2B] transition-colors">
                    Tires
                  </h3>
                  <span className="font-heading text-[#D42B2B] text-sm uppercase tracking-wider">
                    From $279 / set of 4
                  </span>
                </div>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-3">
                  Every major brand in stock. Mounted, balanced, valve-stemmed, TPMS reset, and
                  out-the-door pricing &mdash; the price you see is the price you pay.
                </p>
                <span className="font-nav text-[12px] uppercase tracking-wider text-[#D42B2B]">
                  Tires in Sacramento &rarr;
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Drive directions from Land Park */}
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
                  Drive From Land Park to Florin Road
                </h2>
                <div className="space-y-5">
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                    From Land Park to our Florin Road shop is a straight five to ten minutes
                    depending on traffic. Easiest route: take Sutterville Road east to Riverside
                    Boulevard, jog south to Florin Road, then east to 3020 Florin Road on your
                    right. Or hop on Highway 99 south at 12th Avenue, exit at Florin Road, and head
                    west &mdash; the shop is about a mile from the off-ramp on the south side of
                    the street.
                  </p>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                    Coming from the north end of Land Park near William Land Regional Park?
                    Freeport Boulevard south to Florin Road is the most direct shot, no freeway
                    needed. Plenty of off-street parking. Pull around back if the shop bays are
                    full and we&apos;ll get you checked in.
                  </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://www.google.com/maps/dir/Land+Park,+Sacramento,+CA/3020+Florin+Rd,+Sacramento,+CA+95822"
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
                    Drive time from Land Park: <span className="text-white font-semibold">5&ndash;10 minutes</span>
                  </p>
                  <p className="font-body text-[#9E9E9E] text-[14px] leading-relaxed">
                    Routes: Sutterville Rd &rarr; Riverside Blvd &rarr; Florin Rd, or Highway 99 South to Florin Rd exit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Land Park scenarios */}
        <section style={{ background: '#111111', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                Real Builds
              </span>
            </div>
            <h2
              className="font-display text-white uppercase mb-10"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', lineHeight: 1.1 }}
            >
              Real Land Park Scenarios
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                <h3 className="font-heading text-white text-lg uppercase mb-4">
                  The 4Runner With a Stock Setup That&apos;s Got Nothing
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  You&apos;re a Land Park truck owner running a fifth-gen 4Runner or a Tacoma TRD
                  Off-Road, and the factory rake is bugging you. You want a 4-inch lift, 33s on a
                  17x9 wheel with -12 offset, and the truck dialed in for Sierra trips. We build
                  that all day. Rough Country, ReadyLIFT, BDS, or Bilstein on the lift; Method or
                  Fuel for wheels; Nitto Ridge Grappler or Toyo Open Country for rubber. Half-day
                  install, post-lift four-wheel alignment included. You drive out ready for
                  Foresthill, Georgetown, or the Rubicon.
                </p>
              </div>

              <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                <h3 className="font-heading text-white text-lg uppercase mb-4">
                  The Slammed Civic That Doesn&apos;t Want to Scrub or Rub
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  You&apos;ve got a 10th-gen Civic Si or an SS Camaro on coilovers and you need a
                  wheel package that sits flush without rolling fenders or spacing the wheels off
                  the hub. Bring it in. We measure caliper clearance, verify backspacing, and spec
                  a setup with proper offset &mdash; usually a 19x9.5 with the right ET for your
                  drop. BC Racing, KW, or Tein on the suspension; the wheel-and-tire package
                  matched to clear without setback issues. Low is a lifestyle, but it has to fit
                  right.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Land Park FAQ */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                Land Park FAQ
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
              Tire Geeks &mdash; 3020 Florin Road, Sacramento. Five minutes from Land Park.
              Walk in Mon&ndash;Sat, 9 AM to 6 PM. Acima financing approves up to $5,000 in seconds,
              no credit needed, 100 days no interest.
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
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#D42B2B]" /> Same-Day Install</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#D42B2B]" /> Acima Financing</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
