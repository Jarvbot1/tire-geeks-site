import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Phone, MapPin, Clock, ArrowUpDown, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Lift Kit Installation Sacramento | Trucks & Jeeps | Tire Geeks',
  description:
    'Professional lift kit installation in Sacramento. Body lifts, suspension lifts & leveling kits for trucks, Jeeps & SUVs. Rough Country, ReadyLIFT, BDS & more. Starting at $299 installed. Post-lift alignment included.',
  openGraph: {
    title: 'Lift Kit Installation Sacramento | Trucks & Jeeps | Tire Geeks',
    description:
      'Professional lift kit installation in Sacramento. Body lifts, suspension lifts & leveling kits for trucks, Jeeps & SUVs. Starting at $299 installed.',
    url: 'https://tiregeeks.com/services/lift-kits-sacramento',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://tiregeeks.com/services/lift-kits-sacramento' },
};

export default function LiftKitsSacramentoPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tiregeeks.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://tiregeeks.com/services' },
      { '@type': 'ListItem', position: 3, name: 'Lift Kit Installation Sacramento', item: 'https://tiregeeks.com/services/lift-kits-sacramento' },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Lift Kit Installation Sacramento',
    description:
      'Professional lift kit installation for trucks, Jeeps, and SUVs in Sacramento. Body lifts, suspension lifts, and leveling kits with post-lift alignment included.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Tire Geeks',
      url: 'https://tiregeeks.com',
    },
    areaServed: { '@type': 'City', name: 'Sacramento' },
    serviceType: 'Lift Kit Installation',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '299',
      description: 'Lift kit installation from $299',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does it cost to lift a truck in Sacramento?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lift kit installation at Tire Geeks starts at $299 installed. A basic 2-inch leveling kit typically costs $299-$500 installed. Suspension lifts range from $800-$2,500+ depending on the height and brand. Body lifts generally run $400-$1,200 installed. Every installation includes a post-lift 4-wheel alignment at no extra charge.',
        },
      },
      {
        '@type': 'Question',
        name: 'What size lift kit do I need?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The right lift size depends on your goals. A 2-inch leveling kit eliminates factory rake and fits slightly larger tires. A 3-4 inch lift is the sweet spot for most truck owners — it provides meaningful ground clearance and fits 33-35 inch tires. A 6-inch or larger suspension lift is ideal for serious off-roading and fitting 37-inch or larger tires. Our techs can help you choose based on your vehicle, tire goals, and budget.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Tire Geeks install lift kits on Jeeps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We install lift kits on all Jeep models including Wrangler JK and JL, Gladiator, Cherokee, and Grand Cherokee. We carry Jeep-specific kits from Rough Country, ReadyLIFT, BDS, and Teraflex. Sacramento Jeep owners love our turnkey builds — lift, wheels, tires, and alignment all in one visit.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is a leveling kit worth it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A leveling kit is one of the best value modifications for any truck. For $299-$500 installed, you eliminate the factory nose-down rake, gain a more aggressive stance, and can fit tires 1-2 sizes larger. Installation typically takes under two hours and does not significantly alter ride quality. It is the most popular lift modification we perform at Tire Geeks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need new tires after a lift kit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You do not have to replace your tires immediately after a lift, but most customers choose to upgrade. A lift kit creates clearance for larger, more aggressive tires that would rub on a stock vehicle. For example, a 3-inch lift on a Silverado lets you run 33-inch tires, and a 6-inch lift opens the door for 35s or 37s. Tire Geeks can coordinate your lift and tire upgrade in a single visit.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        {/* Breadcrumb Navigation */}
        <div style={{ background: '#0A0A0A', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-3">
            <nav className="flex items-center gap-2 font-nav text-[12px] uppercase tracking-[0.1em]">
              <Link href="/" className="text-[#6B7280] hover:text-[#D42B2B] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-[#6B7280]" />
              <Link href="/services" className="text-[#6B7280] hover:text-[#D42B2B] transition-colors">
                Services
              </Link>
              <ChevronRight className="w-3 h-3 text-[#6B7280]" />
              <span className="text-[#F2F2F2]">Lift Kit Installation</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section
          className="relative flex items-center justify-center text-center"
          style={{
            minHeight: '340px',
            background: 'linear-gradient(to bottom, rgba(10,10,10,0.8), rgba(10,10,10,0.95)), #111',
          }}
        >
          <div className="px-6 py-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                Lift Kit Installation
              </span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h1
              className="font-display uppercase text-white mb-4"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.05 }}
            >
              Lift Kit Installation Sacramento
            </h1>
            <p className="font-body text-[#AAAAAA] text-lg max-w-[700px] mx-auto mb-8">
              Body lifts, suspension lifts, and leveling kits for trucks, Jeeps, and SUVs. Starting at $299 installed with post-lift alignment included.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-block"
                style={{ textDecoration: 'none' }}
              >
                GET A QUOTE
              </Link>
              <a
                href="tel:+19168008786"
                className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center gap-2"
                style={{ textDecoration: 'none' }}
              >
                <Phone className="w-4 h-4" />
                CALL (916) 800-8786
              </a>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section style={{ background: '#111111', borderTop: '1px solid rgba(212,43,43,0.2)', borderBottom: '1px solid rgba(212,43,43,0.2)' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: '2,500+', label: 'Lifts Installed' },
                { value: '$299', label: 'Starting Price' },
                { value: '2', label: 'Sacramento Locations' },
                { value: '4.9/5', label: 'Google Rating' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-[28px] md:text-[36px] uppercase" style={{ color: '#D42B2B' }}>
                    {stat.value}
                  </div>
                  <div className="font-nav text-[12px] uppercase tracking-[0.15em] text-[#9E9E9E]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left: Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <div className="w-12 h-[3px] mb-3" style={{ background: '#D42B2B' }} />
                  <h2
                    className="font-display text-white uppercase mb-6"
                    style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.1 }}
                  >
                    Sacramento&apos;s Trusted Lift Kit Shop
                  </h2>
                  <div className="space-y-5">
                    <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                      Sacramento is truck country. With the Rubicon Trail just two hours east, Prairie City SVRA 30 minutes away, and Georgetown&apos;s rock crawling trails within easy reach, there&apos;s no shortage of reasons to lift your truck or Jeep. At Tire Geeks, we&apos;ve installed over 2,500 lift kits across two Sacramento locations, making us one of the most experienced lift shops in the region. Whether you&apos;re building a weekend trail rig or just want a taller stance for your daily driver, we have the parts, expertise, and equipment to get it done right.
                    </p>
                    <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                      Every lift kit installation at Tire Geeks is more than just bolting on parts. Our technicians perform a comprehensive pre-installation inspection, verify fitment for your specific year and model, and handle every detail from brake line extensions to driveshaft angle checks. When the install is complete, we include a full 4-wheel alignment at no additional cost &mdash; because a lift without a proper alignment will destroy your new tires in a matter of weeks.
                    </p>
                  </div>
                </div>

                {/* Types of Lifts */}
                <div>
                  <h3 className="font-heading text-white text-xl uppercase tracking-wide mb-4">
                    Types of Lift Kits We Install
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        title: 'Leveling Kit',
                        range: '1.5"–2.5"',
                        desc: 'Eliminates factory rake, fits larger tires. Most installs under 2 hours. Perfect for daily drivers who want a subtle improvement without changing ride quality.',
                        price: 'From $299',
                      },
                      {
                        title: 'Body Lift',
                        range: '1"–3"',
                        desc: 'Raises the body off the frame using spacers. Budget-friendly option that creates tire clearance without altering suspension geometry or ride height.',
                        price: 'From $400',
                      },
                      {
                        title: 'Suspension Lift',
                        range: '3"–6"+',
                        desc: 'Complete suspension overhaul with new shocks, springs, or coilovers. Maximum ground clearance and the ability to run 35" to 37"+ tires.',
                        price: 'From $800',
                      },
                    ].map((type) => (
                      <div
                        key={type.title}
                        className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8"
                      >
                        <ArrowUpDown className="w-6 h-6 mb-3" style={{ color: '#D42B2B' }} />
                        <h4 className="font-heading text-white text-lg uppercase mb-1">{type.title}</h4>
                        <span className="font-nav text-[12px] uppercase tracking-wider text-[#D42B2B] block mb-3">
                          {type.range}
                        </span>
                        <p className="font-body text-[#9E9E9E] text-[14px] leading-relaxed mb-4">
                          {type.desc}
                        </p>
                        <span className="font-heading text-white text-sm uppercase">{type.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div>
                  <h3 className="font-heading text-white text-xl uppercase tracking-wide mb-4">
                    Lift Kit Brands We Carry
                  </h3>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-4">
                    We stock and install lift kits from the industry&apos;s most trusted manufacturers. Each brand brings its own strengths &mdash; from Rough Country&apos;s unbeatable value to BDS&apos;s premium long-travel performance. Our team can help you choose the right kit for your vehicle, driving style, and budget.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Rough Country', 'ReadyLIFT', 'Superlift', 'BDS Suspension', 'Zone Offroad', 'Teraflex'].map(
                      (brand) => (
                        <div key={brand} className="flex items-center gap-3 bg-[#1A1A1A] border border-white/5 rounded-lg px-4 py-3">
                          <Check className="w-4 h-4 flex-shrink-0" style={{ color: '#D42B2B' }} />
                          <span className="font-body text-white text-[14px]">{brand}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Popular Vehicles */}
                <div>
                  <h3 className="font-heading text-white text-xl uppercase tracking-wide mb-4">
                    Most Popular Trucks to Lift in Sacramento
                  </h3>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-4">
                    While we can lift virtually any truck, Jeep, or SUV, these are the vehicles we see most often at our Sacramento shops. Each platform has its own quirks, and our technicians know them inside and out.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { vehicle: 'Ford F-150', note: '2"–6" lifts, most popular platform we service' },
                      { vehicle: 'Chevrolet Silverado 1500', note: 'Leveling kits to 6" suspensions' },
                      { vehicle: 'RAM 1500', note: 'Air suspension and coil spring lifts' },
                      { vehicle: 'Toyota Tacoma', note: '2"–3" lifts, excellent trail capability' },
                      { vehicle: 'Jeep Wrangler JK/JL', note: '2.5"–4.5" lifts, Rubicon Trail ready' },
                      { vehicle: 'Jeep Gladiator', note: 'Overlanding and trail builds' },
                    ].map((v) => (
                      <div key={v.vehicle} className="flex items-start gap-3">
                        <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#D42B2B' }} />
                        <div>
                          <span className="font-body text-white text-[15px] font-semibold">{v.vehicle}</span>
                          <span className="font-body text-[#9E9E9E] text-[14px]"> &mdash; {v.note}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What's Included */}
                <div>
                  <h3 className="font-heading text-white text-xl uppercase tracking-wide mb-4">
                    What&apos;s Included in Every Lift Kit Installation
                  </h3>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-4">
                    At Tire Geeks, we don&apos;t cut corners. A lift kit affects nearly every system on your vehicle &mdash; steering, braking, driveline, and suspension. That&apos;s why every installation includes a complete safety inspection and post-lift alignment. Here is what you get when you choose Tire Geeks for your lift:
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Professional lift kit installation by experienced technicians',
                      'Post-lift 4-wheel alignment (camber, caster, toe)',
                      'Brake line inspection and extension if required',
                      'Driveshaft angle check and adjustment',
                      'Steering geometry inspection',
                      'Test drive and quality assurance',
                      'Torque re-check recommendation at 500 miles',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#D42B2B' }} />
                        <span className="font-body text-white text-[15px]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tire Upgrades */}
                <div>
                  <h3 className="font-heading text-white text-xl uppercase tracking-wide mb-4">
                    Tire Upgrades After Lifting
                  </h3>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                    One of the biggest benefits of lifting your truck is the ability to run larger, more aggressive tires. A 2-inch leveling kit opens the door for 32&ndash;33-inch tires on most trucks. A 4-inch suspension lift comfortably fits 33&ndash;35-inch tires, and 6-inch lifts accommodate 35&ndash;37-inch rubber. Popular choices among Sacramento off-roaders include the Nitto Ridge Grappler, BFGoodrich KO2, Toyo Open Country, and Falken Wildpeak. At Tire Geeks, we can coordinate your lift, new wheels, and tires into a single visit &mdash; walk in with a stock truck and drive out with a complete build. We carry hundreds of wheel and tire combinations in stock for same-day installation.
                  </p>
                </div>

                {/* Sacramento Context */}
                <div>
                  <h3 className="font-heading text-white text-xl uppercase tracking-wide mb-4">
                    Sacramento Off-Road Access
                  </h3>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                    Sacramento sits at the gateway to some of California&apos;s best off-road terrain. The legendary Rubicon Trail &mdash; consistently ranked among the top 10 most challenging 4x4 trails in the world &mdash; is less than two hours from our Florin Road location. Prairie City State Vehicular Recreation Area offers over 800 acres of trails just 25 minutes east, perfect for testing your new setup. Georgetown and Foresthill OHV areas provide hundreds of miles of forest roads and technical terrain. Our technicians don&apos;t just install lifts &mdash; many of them wheel on these trails themselves, so they understand exactly what your vehicle needs to perform when the pavement ends.
                  </p>
                </div>

                {/* Complete Build */}
                <div>
                  <h3 className="font-heading text-white text-xl uppercase tracking-wide mb-4">
                    Complete Build Coordination
                  </h3>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                    Building out your dream truck or Jeep? Tire Geeks handles the entire project. We coordinate your lift kit, wheels, tires, fender modifications, and alignment into a single visit. No bouncing between shops, no waiting weeks for parts. We keep deep inventory across both Sacramento locations so most builds can be completed the same day. Walk-in consultations are always free &mdash; bring your truck, tell us your vision, and we will put together a build plan and quote on the spot. Visit us today &mdash; no appointment needed.
                  </p>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="space-y-6">
                {/* Pricing Card */}
                <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-lg uppercase mb-4">Lift Kit Pricing</h3>
                  <div className="space-y-4">
                    {[
                      { service: 'Leveling Kit Install', price: 'From $299' },
                      { service: 'Body Lift (1"–3")', price: 'From $400' },
                      { service: 'Suspension Lift (3"–4")', price: 'From $800' },
                      { service: 'Suspension Lift (6"+)', price: 'From $1,500' },
                      { service: 'Post-Lift Alignment', price: 'Included' },
                    ].map((item) => (
                      <div key={item.service} className="flex justify-between items-center border-b border-white/5 pb-3">
                        <span className="font-body text-[#AAAAAA] text-[14px]">{item.service}</span>
                        <span className="font-heading text-white text-[14px] uppercase">{item.price}</span>
                      </div>
                    ))}
                  </div>
                  <p className="font-body text-[#6B7280] text-[12px] mt-4">
                    Prices vary by vehicle and kit. Walk in or call for an exact quote.
                  </p>
                  <div className="mt-6 space-y-3">
                    <Link
                      href="/contact"
                      className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded block text-center"
                      style={{ textDecoration: 'none' }}
                    >
                      GET A QUOTE
                    </Link>
                    <Link
                      href="/financing"
                      className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded block text-center"
                      style={{ textDecoration: 'none' }}
                    >
                      FINANCING OPTIONS
                    </Link>
                  </div>
                </div>

                {/* Walk-In CTA */}
                <div
                  className="rounded-xl p-8 text-center"
                  style={{ background: 'rgba(212,43,43,0.08)', border: '1px solid rgba(212,43,43,0.25)' }}
                >
                  <h3 className="font-heading text-white text-lg uppercase mb-2">Walk-Ins Welcome</h3>
                  <p className="font-body text-[#AAAAAA] text-[14px] mb-4">
                    Visit us today &mdash; no appointment needed. Free consultations and same-day installs available.
                  </p>
                  <p className="font-nav text-[12px] uppercase tracking-wider text-[#9E9E9E]">
                    Mon&ndash;Sat: 9AM&ndash;6PM
                  </p>
                </div>

                {/* Related Services */}
                <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-lg uppercase mb-4">Related Services</h3>
                  <ul className="space-y-3">
                    {[
                      { label: 'Wheel Alignment', href: '/services#alignment' },
                      { label: 'Tires & Wheels', href: '/services#tires' },
                      { label: 'Brakes & Suspension', href: '/services/brakes-sacramento' },
                      { label: 'All Services', href: '/services' },
                    ].map((svc) => (
                      <li key={svc.label}>
                        <Link
                          href={svc.href}
                          className="font-body text-[#AAAAAA] text-[14px] hover:text-[#D42B2B] transition-colors"
                        >
                          {svc.label} &rarr;
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ background: '#111111', padding: '80px 0' }}>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: 'How much does it cost to lift a truck in Sacramento?',
                  a: 'Lift kit installation at Tire Geeks starts at $299 installed for a leveling kit. Suspension lifts range from $800 to $2,500+ depending on the kit, brand, and vehicle. Every installation includes a post-lift 4-wheel alignment at no extra charge.',
                },
                {
                  q: 'What size lift kit do I need?',
                  a: 'It depends on your goals. A 2-inch leveling kit is ideal for eliminating factory rake and fitting slightly larger tires. A 3-4 inch lift is the most popular choice for fitting 33-35 inch tires. 6+ inch lifts are for serious off-road builds running 37-inch or larger tires.',
                },
                {
                  q: 'Does Tire Geeks install lift kits on Jeeps?',
                  a: 'Yes. We install lift kits on all Jeep models including Wrangler JK/JL, Gladiator, Cherokee, and Grand Cherokee. We carry Jeep-specific kits from Rough Country, ReadyLIFT, BDS, and Teraflex.',
                },
                {
                  q: 'Is a leveling kit worth it?',
                  a: 'Absolutely. For $299-$500 installed, a leveling kit eliminates factory rake, improves your truck\'s stance, and allows you to fit tires 1-2 sizes larger. Most installs are completed in under 2 hours with no change to ride quality.',
                },
                {
                  q: 'Do I need new tires after a lift kit?',
                  a: 'Not immediately, but most customers choose to upgrade. A lift creates clearance for larger, more capable tires. We can coordinate your lift and tire upgrade into a single visit for maximum convenience.',
                },
              ].map((faq) => (
                <div key={faq.q} className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-[16px] font-semibold mb-3">{faq.q}</h3>
                  <p className="font-body text-[#AAAAAA] text-[14px] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Both Locations */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                Two Locations
              </span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h2
              className="font-display text-white uppercase mb-10"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.1 }}
            >
              Visit Either Sacramento Location
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Florin Road',
                  address: '3020 Florin Road, Sacramento, CA 95822',
                  phone: '(916) 800-8786',
                  phoneRaw: '+19168008786',
                  hours: 'Mon-Sat: 9AM-6PM',
                  mapUrl: 'https://maps.google.com/?q=3020+Florin+Road+Sacramento+CA+95822',
                  locationPage: '/locations/florin-road',
                },
                {
                  name: 'Arden Way',
                  address: '2245 Arden Way, Sacramento, CA 95825',
                  phone: '(916) 913-8786',
                  phoneRaw: '+19169138786',
                  hours: 'Mon-Sat: 9AM-6PM',
                  mapUrl: 'https://maps.google.com/?q=2245+Arden+Way+Sacramento+CA+95825',
                  locationPage: '/locations/arden-way',
                },
              ].map((loc) => (
                <div key={loc.name} className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-lg uppercase mb-4">Tire Geeks &mdash; {loc.name}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#D42B2B' }} />
                      <span className="font-body text-[#AAAAAA] text-[15px]">{loc.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 flex-shrink-0" style={{ color: '#D42B2B' }} />
                      <a href={`tel:${loc.phoneRaw}`} className="font-body text-[#AAAAAA] text-[15px] hover:text-[#D42B2B] transition-colors">
                        {loc.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 flex-shrink-0" style={{ color: '#D42B2B' }} />
                      <span className="font-body text-[#AAAAAA] text-[15px]">{loc.hours}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`tel:${loc.phoneRaw}`}
                      className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-6 py-3 rounded text-center"
                      style={{ textDecoration: 'none' }}
                    >
                      CALL NOW
                    </a>
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-6 py-3 rounded text-center"
                      style={{ textDecoration: 'none' }}
                    >
                      DIRECTIONS
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section style={{ background: '#111111', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                From Our Blog
              </span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h2
              className="font-display text-white uppercase mb-10"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.1 }}
            >
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Lift Kit Installation Guide', href: '/blog/lift-kit-installation-sacramento' },
                { title: 'Tire Fitment Guide for Lifted Trucks', href: '/blog/complete-tire-fitment-guide-lifted-trucks' },
                { title: 'Ultimate Truck Tire Guide', href: '/blog/ultimate-truck-tire-guide' },
                { title: 'Wheel Alignment: Signs You Need One', href: '/blog/wheel-alignment-sacramento' },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="block p-5 rounded-xl transition-all hover:border-[#D42B2B]/50 group"
                  style={{
                    background: '#1A1A1A',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <span className="font-heading text-[16px] font-semibold text-[#F2F2F2] group-hover:text-[#D42B2B] transition-colors leading-snug block mb-2">
                    {article.title}
                  </span>
                  <span className="font-nav text-[12px] uppercase tracking-wider text-[#D42B2B]">
                    Read Article &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="text-center" style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[800px] mx-auto px-6">
            <div className="w-12 h-[3px] mx-auto mb-4" style={{ background: '#D42B2B' }} />
            <h2
              className="font-display text-white uppercase mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
            >
              Ready to Lift Your Truck?
            </h2>
            <p className="font-body text-[#AAAAAA] text-lg mb-8">
              Walk in today for a free consultation. No appointment needed. Same-day installs available at both Sacramento locations.
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
                href="/contact"
                className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-block"
                style={{ textDecoration: 'none' }}
              >
                GET A QUOTE
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
