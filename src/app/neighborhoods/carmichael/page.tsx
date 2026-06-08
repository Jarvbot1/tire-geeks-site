import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, Clock, Check, ChevronRight, Navigation } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tire Shop Carmichael | Lift Kits, Custom Wheels & Tires | Tire Geeks',
  description:
    'Lift kits, leveling, custom wheels, and tires from $279 for Carmichael trucks and SUVs. Tire Geeks on Arden Way, ~10 minutes via Fair Oaks Blvd. Walk in Mon–Sat 9AM–6PM. Call (916) 913-8786.',
  openGraph: {
    title: 'Tire Shop Carmichael | Lift Kits, Custom Wheels & Tires | Tire Geeks',
    description:
      'Lift kits, custom wheels, and tires for Carmichael trucks and SUVs. Tacoma, F-150, 4Runner, Tundra builds. Walk in Mon–Sat 9AM–6PM. Call (916) 913-8786.',
    url: 'https://tiregeeks.com/neighborhoods/carmichael',
    images: [{ url: '/images/store-front-arden.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://tiregeeks.com/neighborhoods/carmichael' },
};

export default function CarmichaelPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tiregeeks.com' },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://tiregeeks.com/neighborhoods' },
      { '@type': 'ListItem', position: 3, name: 'Carmichael', item: 'https://tiregeeks.com/neighborhoods/carmichael' },
    ],
  };

  const serviceGraphSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Lift Kit Installation in Carmichael',
        description:
          'Leveling kits, body lifts, and 3-6 inch suspension lifts for Carmichael trucks, Jeeps, and SUVs. Rough Country, ReadyLIFT, BDS, Bilstein, Teraflex. Post-lift four-wheel alignment included. Pricing varies by vehicle and kit.',
        provider: { '@type': 'LocalBusiness', name: 'Tire Geeks', url: 'https://tiregeeks.com' },
        areaServed: { '@type': 'City', name: 'Carmichael' },
        serviceType: 'Lift Kit Installation',
      },
      {
        '@type': 'Service',
        name: 'Custom Wheels & Fitment in Carmichael',
        description:
          'Aftermarket wheels with verified fitment for Carmichael drivers. Fuel, Method, KMC, Moto Metal, XD, American Force, Black Rhino in stock. Backspacing, offset, and caliper clearance measured in person before install. Pricing varies by brand and size.',
        provider: { '@type': 'LocalBusiness', name: 'Tire Geeks', url: 'https://tiregeeks.com' },
        areaServed: { '@type': 'City', name: 'Carmichael' },
        serviceType: 'Custom Wheels',
      },
      {
        '@type': 'Service',
        name: 'Tires & Installation in Carmichael',
        description:
          'New tire sales and installation for Carmichael drivers. Mounting, balancing, valve stems, TPMS reset, and out-the-door pricing. Nitto, Toyo, BFGoodrich, Falken, Cooper, Hankook, Michelin in stock.',
        provider: { '@type': 'LocalBusiness', name: 'Tire Geeks', url: 'https://tiregeeks.com' },
        areaServed: { '@type': 'City', name: 'Carmichael' },
        serviceType: 'Tire Sales & Installation',
        offers: { '@type': 'Offer', priceCurrency: 'USD', price: '279', description: 'Tires from $279 per set of four' },
      },
      {
        '@type': 'Service',
        name: 'Car Lowering & Coilover Installation in Carmichael',
        description:
          'Lowering springs, coilovers, and air ride installation for Carmichael cars and trucks. BC Racing, KW, Tein, Eibach, H&R, Air Lift Performance. CVC 24008 compliant. Post-install four-wheel alignment included. Pricing varies by vehicle and setup.',
        provider: { '@type': 'LocalBusiness', name: 'Tire Geeks', url: 'https://tiregeeks.com' },
        areaServed: { '@type': 'City', name: 'Carmichael' },
        serviceType: 'Lowering Kit Installation',
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
    areaServed: { '@type': 'City', name: 'Carmichael' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What size tires fit a Tacoma or F-150 with a 3-inch leveling kit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A 3rd-gen Tacoma with a 3-inch leveling kit usually clears 285/70R17 (about 33s) on a stock-width or 17x8.5 wheel with 0 to -12 offset. A late-model F-150 with a 2 to 2.5-inch level can run 285/75R18 or 295/70R18 with the right offset, no rubbing on a flush setup. We measure, verify clearance on lock-to-lock, and check rubbing before you drive out.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you do post-lift alignments on every install?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Every lift, leveling kit, lowering kit, and coilover install at Tire Geeks includes a post-install four-wheel alignment at no extra charge. A lift without an alignment shreds new tires in weeks — there is no version of this job that ends without us putting it on the rack.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a leveling kit or lift take in your shop?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Leveling kits go in under two hours. A 4-inch suspension lift on a Tacoma, 4Runner, F-150, or Silverado runs about half a day, post-lift alignment included. Bigger 6-inch builds with brake-line extensions and driveshaft work take a full day. Walk in or call (916) 913-8786 for an exact estimate on your truck.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long is the drive from Carmichael?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'About 10 minutes from most Carmichael addresses. Easiest route is Fair Oaks Boulevard west to Arden Way, then a short jog to 2245 Arden Way. From the north end near Madison or El Camino, hop on Watt Avenue south and turn west on Arden Way. Plenty of parking on site.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you do staggered fitment on a Mustang or Camaro?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Staggered setups on the S550 Mustang, the 6th-gen Camaro, and the 5th-gen Camaro SS are common — usually a 19x9 or 20x9 front and 19x10.5 or 20x11 rear with the right offset. We measure poke and tuck, check inner-fender clearance, and spec the tire size to clear without rubbing on coilovers or stock suspension.',
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
              <span className="text-[#F2F2F2]">Carmichael</span>
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
                Carmichael, Sacramento County
              </span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h1
              className="font-display uppercase text-white mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.05 }}
            >
              Tire Shop for<br />Carmichael Trucks &amp; SUVs
            </h1>
            <p className="font-body text-[#CFCFCF] text-lg max-w-[760px] mx-auto mb-8">
              Sacramento is truck country and Carmichael is full of Tacomas, F-150s, 4Runners, and
              Tundras that deserve more than a stock setup. Tire Geeks on Arden Way handles lifts,
              leveling kits, custom wheels, lowering, and tires starting at $279 &mdash; about 10
              minutes from Carmichael via Fair Oaks Boulevard. Walk in Mon&ndash;Sat 9AM&ndash;6PM.
              Call (916) 913-8786.
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
                href="/services/lift-kits-sacramento"
                className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-block"
                style={{ textDecoration: 'none' }}
              >
                LIFT KITS &amp; LEVELING
              </Link>
            </div>
          </div>
        </section>

        {/* Why Carmichael drivers choose Tire Geeks */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                Why Carmichael
              </span>
            </div>
            <h2
              className="font-display text-white uppercase mb-10"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', lineHeight: 1.1 }}
            >
              Why Carmichael Drivers Choose Tire Geeks
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                <h3 className="font-heading text-white text-lg uppercase mb-3">
                  Someone Who Actually Knows Fitment
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Looking for someone who actually knows fitment? Most chain shops type your truck
                  into a database and hand back whatever fits stock. The moment you mention a 3-inch
                  level, 33s, or a -12 offset wheel, they are out. We do this work every day. We
                  measure backspacing, verify offset, check caliper and inner-fender clearance, and
                  walk you through the math before any wheel goes on. No guesswork, no rubbing, no
                  scratched barrels.
                </p>
              </div>

              <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                <h3 className="font-heading text-white text-lg uppercase mb-3">
                  Lift Kits, Wheels, and Tires Under One Roof
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Stock setup got nothing. We carry Rough Country, ReadyLIFT, BDS, Bilstein, and
                  Teraflex on the shelf for lifts and leveling kits, plus a full wall of Fuel,
                  Method, KMC, Moto Metal, XD, American Force, and Black Rhino for wheels. Tires
                  from Nitto, Toyo, BFGoodrich, Falken, Cooper, Hankook, and Michelin on the floor.
                  Build the whole thing in one shop &mdash; lift, wheels, tires, post-lift alignment
                  &mdash; and drive out done.
                </p>
              </div>

              <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                <h3 className="font-heading text-white text-lg uppercase mb-3">
                  Build Is Finally Coming Together
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Whether you are leveling a daily-driver F-150, going 4 inches on a Tacoma TRD
                  Off-Road, dropping a Camaro on coilovers, or bolting staggered wheels onto a
                  Mustang, we sweat the details. Half-day lifts, same-day wheel-and-tire packages,
                  post-install four-wheel alignment included. No 2-week appointment lottery, no
                  dealership-grade markup. Walk in Mon&ndash;Sat 9AM&ndash;6PM and get a quote on
                  the spot.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Carmichael vehicles */}
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
              Services for Carmichael Vehicles
            </h2>
            <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-10 max-w-[900px]">
              Carmichael runs heavy on trucks and SUVs &mdash; lifted Tacomas heading up to Tahoe,
              F-150s and Tundras pulling boats out to Folsom Lake, 4Runners on the way to the trail,
              and a steady mix of Mustangs and Camaros from the project-car crowd. Here&apos;s what
              we build:
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
                  4Runner, Tundra, and Wrangler. Rough Country, ReadyLIFT, BDS, Bilstein, Teraflex.
                  Post-lift four-wheel alignment included on every install.
                </p>
                <span className="font-nav text-[12px] uppercase tracking-wider text-[#D42B2B]">
                  Lift Kits Sacramento &rarr;
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
                  Fitment dialed in with verified backspacing, offset, and caliper clearance. Fuel,
                  Method, KMC, Moto Metal, XD, American Force, Black Rhino in stock across the
                  wall.
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
                    starting at $279
                  </span>
                </div>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-3">
                  Nitto Ridge Grappler, Toyo Open Country, BFGoodrich KO2, Falken Wildpeak for the
                  trucks; Michelin, Cooper, Hankook for daily drivers. Mounted, balanced, valve
                  stems, and TPMS reset included.
                </p>
                <span className="font-nav text-[12px] uppercase tracking-wider text-[#D42B2B]">
                  Tires in Sacramento &rarr;
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
                  Lowering springs, coilovers, and air ride for the project-car crowd. BC Racing,
                  KW, Tein, Eibach, H&amp;R, Air Lift Performance. CVC 24008 compliant. Low is a
                  lifestyle.
                </p>
                <span className="font-nav text-[12px] uppercase tracking-wider text-[#D42B2B]">
                  Lowering Services &rarr;
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Drive directions from Carmichael */}
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
                  Drive From Carmichael to Arden Way
                </h2>
                <div className="space-y-5">
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                    From most Carmichael addresses to 2245 Arden Way is about 10 minutes. Easiest
                    route: Fair Oaks Boulevard west, jog onto Arden Way, and the shop is between
                    Howe Avenue and Watt Avenue. From the north end near Madison or El Camino,
                    drop south on Watt Avenue and turn west on Arden Way &mdash; you will hit us
                    inside of 10 minutes outside rush hour.
                  </p>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                    Coming from the south side near Garfield or Marconi? Eastern Avenue south to
                    Arden Way is the most direct shot, no freeway needed. Plenty of parking on
                    site, with bay space for trucks and lifted rigs.
                  </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://www.google.com/maps/dir/Carmichael,+CA/2245+Arden+Way,+Sacramento,+CA+95825"
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
                    Drive time from Carmichael: <span className="text-white font-semibold">~10 minutes</span>
                  </p>
                  <p className="font-body text-[#9E9E9E] text-[14px] leading-relaxed">
                    Route: Fair Oaks Blvd &rarr; Arden Way, or Watt Ave south &rarr; Arden Way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Carmichael scenarios */}
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
              Real Carmichael Scenarios
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                <h3 className="font-heading text-white text-lg uppercase mb-4">
                  Tacoma or F-150 With a 3-Inch Level on 33s
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  You are running a 3rd-gen Tacoma TRD Off-Road or a late-model F-150 and the
                  factory rake is bugging you. You want a 3-inch leveling kit, 33s on a 17x8.5 with
                  a -12 offset, and the truck dialed back in so the daily commute does not eat
                  tires. Half-day install: Rough Country, ReadyLIFT, or Bilstein on the level;
                  Method or Fuel for the wheels; Nitto Ridge Grappler or Toyo Open Country for
                  rubber; post-lift four-wheel alignment included. Drive out ready for Tahoe.
                </p>
              </div>

              <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                <h3 className="font-heading text-white text-lg uppercase mb-4">
                  Mustang or Camaro Project Car, Staggered Fitment
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  You have an S550 Mustang or a Camaro SS sitting on stock or coilovers, and the
                  build is finally coming together. You want a staggered wheel-and-tire package
                  &mdash; usually a 19x9.5 or 20x9.5 front with a 19x10.5 or 20x11 rear, ET dialed
                  to clear without rubbing on the inner fenders. We measure poke and tuck, spec
                  the right tire size for your suspension setup, and mount, balance, and torque
                  it on the same visit. Low is a lifestyle, but it has to fit right.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Carmichael FAQ */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                Carmichael FAQ
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
              Sacramento Is Truck Country.
            </h2>
            <p className="font-body text-[#CFCFCF] text-lg mb-3 leading-relaxed">
              Tire Geeks &mdash; 2245 Arden Way, Sacramento. About 10 minutes from Carmichael via
              Fair Oaks Boulevard. Walk in Mon&ndash;Sat, 9 AM to 6 PM. Lift kits, custom wheels,
              tires from $279, post-install alignment included on every build. Acima financing
              available on the spot.
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
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#D42B2B]" /> Post-Lift Alignment Included</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
