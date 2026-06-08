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
  title: 'Tire Shop on Florin Road, Sacramento | Tire Geeks South Sacramento',
  description:
    'Visit Tire Geeks at 3020 Florin Road, Sacramento CA 95822. Tires, custom wheels, alignment, lift kits, lowering, brakes & suspension. Walk-ins welcome Mon-Sat 9AM-6PM. Call (916) 800-8786.',
  openGraph: {
    title: 'Tire Shop on Florin Road, Sacramento | Tire Geeks South Sacramento',
    description:
      'Visit Tire Geeks at 3020 Florin Road, Sacramento CA 95822. Tires, custom wheels, alignment, lift kits, lowering, brakes & suspension. Walk-ins welcome Mon-Sat 9AM-6PM.',
    url: 'https://tiregeeks.com/locations/florin-road',
    type: 'website',
  },
  alternates: { canonical: 'https://tiregeeks.com/locations/florin-road' },
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
    { '@type': 'ListItem', position: 3, name: 'Florin Road', item: 'https://tiregeeks.com/locations/florin-road' },
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'TireShop',
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
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 38.4955604117297,
    longitude: -121.47168528748884,
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
    { '@type': 'City', name: 'Sacramento' },
    { '@type': 'Place', name: 'Pocket, Sacramento' },
    { '@type': 'Place', name: 'Land Park, Sacramento' },
    { '@type': 'Place', name: 'Meadowview, Sacramento' },
    { '@type': 'Place', name: 'South Sacramento' },
    { '@type': 'City', name: 'Elk Grove' },
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
      name: 'Where is the best tire shop near Pocket Sacramento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tire Geeks on Florin Road is the top-rated tire shop serving Pocket, Land Park, and all of South Sacramento. Located at 3020 Florin Road, Sacramento CA 95822, we are just minutes from the Pocket neighborhood via Freeport Blvd or I-5. Walk-ins are welcome Monday through Saturday, 9AM to 6PM.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need an appointment at Tire Geeks Florin Road?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No appointment is needed for most services. Tire Geeks on Florin Road welcomes walk-ins Monday through Saturday from 9AM to 6PM. For larger jobs like lift kit installations or full suspension builds, calling ahead at (916) 800-8786 is recommended so we can reserve the time and parts.',
      },
    },
    {
      '@type': 'Question',
      name: 'What tire brands does Tire Geeks on Florin Road carry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We carry a wide selection of tire brands including Nitto, Toyo, Falken, BFGoodrich, Cooper, Hankook, Continental, and many more. Whether you need all-terrain tires for your truck, performance tires for your car, or budget-friendly options, we have something for every vehicle and price range.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Tire Geeks on Florin Road offer financing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Tire Geeks partners with Acima to offer lease-to-own financing with no credit needed, no down payment required, and no interest for 100 days. You can get approved for up to $5,000 in seconds. Apply online or in-store at our Florin Road location.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get to Tire Geeks from Elk Grove?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From Elk Grove, take Highway 99 North to the Florin Road exit. Head west on Florin Road and our shop is located at 3020 Florin Road on the south side of the street. The drive takes approximately 10-15 minutes depending on traffic. You can also take Franklin Blvd north to Florin Road.',
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
    name: 'Marcus T.',
    area: 'Pocket, Sacramento',
    rating: 5,
    text: "Best tire shop I've been to in South Sac. I needed new tires and an alignment for my Ram 1500 and the guys at Tire Geeks had me in and out in under two hours. Price was way better than the chain shops on Florin. Highly recommend.",
  },
  {
    name: 'Diana R.',
    area: 'Meadowview, Sacramento',
    rating: 5,
    text: "I got a full set of wheels and tires for my Honda Civic and the fitment is perfect. The staff actually listened to what I wanted and helped me pick the right setup for my budget. Plus the financing through Acima made it super easy. I'll be back for sure.",
  },
  {
    name: 'Chris L.',
    area: 'Elk Grove',
    rating: 5,
    text: "Drove up from Elk Grove to get a leveling kit installed on my Silverado and it was worth the trip. They got it done same-day, aligned it afterward, and the truck looks and drives amazing. These guys know what they're doing.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function FlorinRoadPage() {
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
              SOUTH SACRAMENTO
            </span>
            <h1
              className="font-display text-[36px] md:text-[52px] leading-[1.05] uppercase text-white mb-4"
            >
              TIRE GEEKS ON<br />FLORIN ROAD
            </h1>
            <p className="font-body text-[#AAAAAA] text-lg max-w-[600px] mx-auto mb-8">
              Your neighborhood tire and wheel shop at 3020 Florin Road, Sacramento CA 95822. Walk-ins welcome.
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
              <a
                href="https://maps.google.com/?q=3020+Florin+Road+Sacramento+CA+95822"
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
              <span className="text-[#F2F2F2]">Florin Road</span>
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
                  src="https://www.google.com/maps?q=3020+Florin+Road+Sacramento+CA+95822&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height={400}
                  style={{ border: 0, borderRadius: 12 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  sandbox="allow-scripts allow-same-origin"
                  title="Tire Geeks Florin Road location map"
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
                    Tire Geeks &mdash; Florin Road
                  </h2>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Navigation size={18} className="mt-1 flex-shrink-0 text-[#9E9E9E]" />
                    <p className="font-body text-[16px] text-[#9E9E9E]">3020 Florin Road, Sacramento, CA 95822</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="flex-shrink-0 text-[#9E9E9E]" />
                    <a href="tel:+19168008786" className="font-body font-medium text-[18px] text-[#F2F2F2] hover:opacity-80 transition-colors">
                      (916) 800-8786
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
                    href="tel:+19168008786"
                    className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center justify-center gap-2"
                    style={{ textDecoration: 'none' }}
                  >
                    <Phone className="w-4 h-4" />
                    CALL NOW
                  </a>
                  <a
                    href="https://maps.google.com/?q=3020+Florin+Road+Sacramento+CA+95822"
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
              Your Trusted Tire Shop in South Sacramento
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <div className="space-y-5">
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Tire Geeks on Florin Road has been serving the South Sacramento community with expert tire, wheel, and suspension services since day one. Located at 3020 Florin Road in the heart of the Florin Mall area, our shop is the go-to destination for drivers across Pocket, Meadowview, Land Park, Fruitridge, and the greater South Sacramento area who want quality work at honest prices.
                </p>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Our Florin Road location sits at the crossroads of two of Sacramento&apos;s busiest corridors. We&apos;re just minutes from both Interstate 5 and Highway 99, making us easy to reach whether you&apos;re commuting from Elk Grove to the south or heading over from the Pocket neighborhood along Freeport Boulevard. Drivers coming up Franklin Blvd from the Elk Grove area will find us right on their route, and the quick access from both freeways means you can drop your vehicle off on your way to work and pick it up on the way home.
                </p>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  The neighborhoods surrounding our shop are home to a diverse mix of vehicles. We see everything from lifted trucks and Jeeps headed to the trails, to lowered cars cruising Franklin Blvd, to daily-driven sedans and SUVs that just need a reliable set of tires and an alignment. Whatever you drive, our techs have seen it before and know how to get the job done right.
                </p>
              </div>
              <div className="space-y-5">
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  The Meadowview and Fruitridge communities have long needed a trustworthy, no-nonsense tire shop that puts customer service first. That&apos;s exactly what Tire Geeks delivers. We don&apos;t upsell services you don&apos;t need, and we don&apos;t keep you waiting. Most tire installations and alignments are completed the same day, and walk-ins are always welcome during our Monday through Saturday hours from 9AM to 6PM.
                </p>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  If you live in the Land Park area and have been driving across town for tire work, there&apos;s no need to go that far. Our Florin Road location is a quick straight shot down Freeport Blvd or a short hop on I-5. And for Elk Grove residents tired of limited local options, the drive north on Highway 99 takes less than 15 minutes and gives you access to a much wider selection of tires, wheels, and services than you&apos;ll find at the typical chain store.
                </p>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  We&apos;re proud to be part of the South Sacramento community, and we treat every customer like a neighbor. From budget-friendly tire packages to fully built show trucks, Tire Geeks on Florin Road is where Sacramento comes to get it done right. Stop by, give us a call at{' '}
                  <a href="tel:+19168008786" className="text-[#D42B2B] hover:underline">(916) 800-8786</a>, or check out our{' '}
                  <Link href="/locations/arden-way" className="text-[#D42B2B] hover:underline">Arden Way location</Link>{' '}
                  if you&apos;re closer to North Sacramento.
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
              Services at Florin Road
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
              What South Sac Drivers Say
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
                href="tel:+19168008786"
                className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center gap-2"
                style={{ textDecoration: 'none' }}
              >
                <Phone className="w-5 h-5" />
                CALL (916) 800-8786
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
                { title: 'Tire Geeks on Arden Way', href: '/locations/arden-way' },
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
