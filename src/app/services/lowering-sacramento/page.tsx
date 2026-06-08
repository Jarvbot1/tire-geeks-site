import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Phone, MapPin, Clock, ArrowDownUp, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Car Lowering Sacramento | Coilovers, Springs & Air Ride | Tire Geeks',
  description:
    'Professional car lowering in Sacramento. Coilovers, lowering springs & air suspension installation. BC Racing, KW, Eibach, Air Lift Performance. Custom stance, fender rolling, post-drop alignment included.',
  openGraph: {
    title: 'Car Lowering Sacramento | Coilovers, Springs & Air Ride | Tire Geeks',
    description:
      'Professional car lowering in Sacramento. Coilovers, lowering springs & air suspension. Custom stance, fender rolling, alignment included.',
    url: 'https://tiregeeks.com/services/lowering-sacramento',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://tiregeeks.com/services/lowering-sacramento' },
};

export default function LoweringSacramentoPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tiregeeks.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://tiregeeks.com/services' },
      { '@type': 'ListItem', position: 3, name: 'Car Lowering Sacramento', item: 'https://tiregeeks.com/services/lowering-sacramento' },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Car Lowering Sacramento',
    description:
      'Professional car lowering services in Sacramento. Coilover installation, lowering springs, and air suspension systems with custom stance consulting and post-drop alignment included.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Tire Geeks',
      url: 'https://tiregeeks.com',
    },
    areaServed: { '@type': 'City', name: 'Sacramento' },
    serviceType: 'Vehicle Lowering & Suspension',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '400',
      description: 'Lowering springs from $400',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does it cost to lower a car in Sacramento?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lowering spring installation at Tire Geeks typically costs $400-$800 including parts and labor. Coilover installation ranges from $800-$2,000+ depending on the brand and vehicle. Air suspension systems start around $2,500-$5,000+ installed. Every installation includes a 4-wheel alignment at no extra charge.',
        },
      },
      {
        '@type': 'Question',
        name: "What's the difference between coilovers and lowering springs?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lowering springs replace your factory springs on your existing struts/shocks and provide a fixed drop, typically 1-2 inches. They are more affordable but offer no adjustability. Coilovers are a complete shock-and-spring assembly that replaces the entire strut. They allow you to adjust ride height, and many offer damping adjustment for fine-tuning the ride. Coilovers cost more but provide superior performance and flexibility.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I lower my truck?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Trucks can be lowered using drop spindles, lowering springs, flip kits, or air suspension. We regularly lower Silverados, Sierras, F-150s, and RAM trucks at both Sacramento locations. Truck lowering is popular in the Sacramento scene for street builds and show trucks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does lowering a car void the warranty?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Under the Magnuson-Moss Warranty Act, a dealer cannot void your entire warranty simply because you lowered your car. However, they can deny warranty claims that are directly related to the modification. For example, if a lowered car develops a suspension issue, the dealer may deny that specific claim. Unrelated components like your engine or transmission warranty remain intact.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need an alignment after lowering my car?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, absolutely. Lowering your vehicle changes the suspension geometry, which throws camber, caster, and toe out of spec. Driving on a lowered car without an alignment will cause rapid, uneven tire wear and poor handling. At Tire Geeks, every lowering installation includes a 4-wheel alignment at no extra charge.',
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
              <span className="text-[#F2F2F2]">Car Lowering</span>
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
                Lowering Services
              </span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h1
              className="font-display uppercase text-white mb-4"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.05 }}
            >
              Car Lowering Sacramento
            </h1>
            <p className="font-body text-[#AAAAAA] text-lg max-w-[700px] mx-auto mb-8">
              Coilovers, lowering springs, and air suspension for cars, trucks, and SUVs. Custom stance consulting, fender rolling, and post-drop alignment included.
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
                { value: '1,800+', label: 'Cars Lowered' },
                { value: '6+', label: 'Premium Brands' },
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
                    Sacramento&apos;s Lowering Specialists
                  </h2>
                  <div className="space-y-5">
                    <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                      Low is a lifestyle, and Sacramento&apos;s car scene is thriving. From the weekly meets at local lots to major shows across Northern California, lowered cars are everywhere &mdash; and Tire Geeks is where they get built. We&apos;ve lowered over 1,800 vehicles across our two Sacramento locations, from subtle 1.5-inch drops on daily drivers to fully slammed show cars sitting on air. Whether you drive a Honda Civic, BMW 3 Series, Infiniti G37, or a Chevy Silverado, we have the parts, tools, and expertise to get your car exactly where you want it.
                    </p>
                    <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                      Sacramento&apos;s flat, well-paved roads make it one of the best cities in California for driving a lowered vehicle. Unlike San Francisco&apos;s steep hills or Los Angeles&apos;s torn-up freeways, Sacramento&apos;s grid system and smooth highways mean you can actually enjoy your drop without constantly worrying about scraping. Our technicians understand the local conditions and will help you find the perfect balance between aggressive looks and daily drivability.
                    </p>
                  </div>
                </div>

                {/* Lowering Methods */}
                <div>
                  <h3 className="font-heading text-white text-xl uppercase tracking-wide mb-4">
                    Lowering Methods We Offer
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        title: 'Lowering Springs',
                        drop: '1"–2.5"',
                        desc: 'Replace factory springs on your existing struts/shocks. Fixed drop with a firmer, sportier ride. Most affordable option with a clean, subtle look.',
                        price: 'From $400',
                      },
                      {
                        title: 'Coilovers',
                        drop: '1"–4"+',
                        desc: 'Complete strut replacement with adjustable ride height and often adjustable damping. The gold standard for enthusiasts who want control over their setup.',
                        price: 'From $800',
                      },
                      {
                        title: 'Air Suspension',
                        drop: 'Stock to Slammed',
                        desc: 'Adjustable air bags replace springs, controlled by a management system. Drive at stock height, park on the ground. The ultimate in versatility.',
                        price: 'From $2,500',
                      },
                    ].map((method) => (
                      <div
                        key={method.title}
                        className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8"
                      >
                        <ArrowDownUp className="w-6 h-6 mb-3" style={{ color: '#D42B2B' }} />
                        <h4 className="font-heading text-white text-lg uppercase mb-1">{method.title}</h4>
                        <span className="font-nav text-[12px] uppercase tracking-wider text-[#D42B2B] block mb-3">
                          {method.drop}
                        </span>
                        <p className="font-body text-[#9E9E9E] text-[14px] leading-relaxed mb-4">
                          {method.desc}
                        </p>
                        <span className="font-heading text-white text-sm uppercase">{method.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div>
                  <h3 className="font-heading text-white text-xl uppercase tracking-wide mb-4">
                    Lowering Brands We Install
                  </h3>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-4">
                    We work exclusively with respected brands that deliver predictable ride quality, precise height adjustment, and long-term durability. From BC Racing&apos;s adjustable coilovers to Air Lift Performance&apos;s 3P management systems, we stock and install the products that the enthusiast community trusts.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['BC Racing', 'KW Suspension', 'Eibach', 'H&R Springs', 'Tein', 'Air Lift Performance'].map(
                      (brand) => (
                        <div key={brand} className="flex items-center gap-3 bg-[#1A1A1A] border border-white/5 rounded-lg px-4 py-3">
                          <Check className="w-4 h-4 flex-shrink-0" style={{ color: '#D42B2B' }} />
                          <span className="font-body text-white text-[14px]">{brand}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* What Different Drops Look Like */}
                <div>
                  <h3 className="font-heading text-white text-xl uppercase tracking-wide mb-4">
                    What Different Drops Look Like
                  </h3>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-4">
                    One of the most common questions we get is &ldquo;how low should I go?&rdquo; The answer depends on your goals, daily driving needs, and how much you are willing to adjust your driving habits. Here is what to expect at each level:
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        drop: '1"–1.5" Drop',
                        look: 'Subtle & Clean',
                        desc: 'Closes most of the fender gap without changing drivability. Great for a factory-plus look. You can clear speed bumps and driveways without thinking about it.',
                      },
                      {
                        drop: '2"–2.5" Drop',
                        look: 'Noticeable & Sporty',
                        desc: 'The sweet spot for most enthusiasts. Your car looks intentionally lowered, handles significantly better, and is still practical for daily driving. Minor driveway awareness needed.',
                      },
                      {
                        drop: '3"–4"+ Drop',
                        look: 'Aggressive & Slammed',
                        desc: 'Show-car territory. Requires careful route planning, possible fender modification, and often air suspension for practical use. Maximum visual impact.',
                      },
                    ].map((level) => (
                      <div key={level.drop} className="bg-[#1A1A1A] border border-white/5 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-heading text-white text-[15px] font-semibold">{level.drop}</span>
                          <span className="font-nav text-[11px] uppercase tracking-wider px-2 py-0.5 rounded" style={{ background: 'rgba(212,43,43,0.15)', color: '#D42B2B' }}>
                            {level.look}
                          </span>
                        </div>
                        <p className="font-body text-[#9E9E9E] text-[14px] leading-relaxed">{level.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What's Included */}
                <div>
                  <h3 className="font-heading text-white text-xl uppercase tracking-wide mb-4">
                    What&apos;s Included in Every Lowering Install
                  </h3>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-4">
                    Lowering your car affects steering geometry, CV axle angles, bump travel, and exhaust clearance. Our technicians check every detail to ensure your car is safe, comfortable, and looks exactly the way you envisioned. Here is what every installation includes:
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Professional suspension installation by experienced technicians',
                      'Post-drop 4-wheel alignment (camber, caster, toe)',
                      'Bump stop clearance check and adjustment',
                      'CV axle angle verification',
                      'Exhaust clearance inspection',
                      'Test drive and ride quality assessment',
                      'Height measurement and documentation',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#D42B2B' }} />
                        <span className="font-body text-white text-[15px]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Fender Rolling */}
                <div>
                  <h3 className="font-heading text-white text-xl uppercase tracking-wide mb-4">
                    Fender Rolling &amp; Custom Fitment
                  </h3>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                    Going low often means your tires get closer to the fender lip &mdash; especially with aggressive wheel offsets. Tire Geeks offers professional fender rolling to prevent tire rub and give you the clearance you need without compromising the body lines of your car. We also provide custom fitment consulting for wheel and tire setups &mdash; whether you want flush, poke, or tucked, we can calculate the exact offset, width, and tire stretch to achieve your desired look. Our team has built everything from subtle OEM+ setups to full show cars, and we bring that experience to every build.
                  </p>
                </div>

                {/* Sacramento Car Culture */}
                <div>
                  <h3 className="font-heading text-white text-xl uppercase tracking-wide mb-4">
                    Sacramento Car Culture &amp; Events
                  </h3>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                    Sacramento has one of the most active car scenes in Northern California. From weekly cruise nights to annual shows like Hot Rod Nats at Cal Expo, the community is vibrant and growing. Tire Geeks is proud to be part of that culture &mdash; we host and sponsor car meets, support local car clubs, and our shop regularly features customer builds from the Sacramento stance and VIP scene. When you build with Tire Geeks, you are not just getting a service &mdash; you are joining a community. Our customers regularly bring their cars back to show off new wheels, share photos from events, and plan their next modification. That is the Tire Geeks difference.
                  </p>
                </div>

                {/* Lowering Trucks */}
                <div>
                  <h3 className="font-heading text-white text-xl uppercase tracking-wide mb-4">
                    Lowering Trucks in Sacramento
                  </h3>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                    Truck lowering is a huge part of Sacramento&apos;s automotive culture. Whether you are building a street truck on a Silverado, a slammed Tacoma, or a bagged RAM, we have the experience and parts to make it happen. We install drop spindles, lowering shackles, flip kits, and air suspension for all major truck platforms. A lowered truck with the right wheel and tire combination turns heads everywhere you go &mdash; and Sacramento&apos;s car meet scene is the perfect place to show it off. Visit us today &mdash; no appointment needed for consultations or quotes.
                  </p>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="space-y-6">
                {/* Pricing Card */}
                <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-lg uppercase mb-4">Lowering Pricing</h3>
                  <div className="space-y-4">
                    {[
                      { service: 'Lowering Springs', price: 'From $400' },
                      { service: 'Coilover Install', price: 'From $800' },
                      { service: 'Air Suspension', price: 'From $2,500' },
                      { service: 'Fender Rolling', price: 'From $150' },
                      { service: 'Post-Drop Alignment', price: 'Included' },
                    ].map((item) => (
                      <div key={item.service} className="flex justify-between items-center border-b border-white/5 pb-3">
                        <span className="font-body text-[#AAAAAA] text-[14px]">{item.service}</span>
                        <span className="font-heading text-white text-[14px] uppercase">{item.price}</span>
                      </div>
                    ))}
                  </div>
                  <p className="font-body text-[#6B7280] text-[12px] mt-4">
                    Prices vary by vehicle, brand, and drop height. Walk in or call for an exact quote.
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
                      { label: 'Custom Wheels', href: '/services#wheels' },
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
                  q: 'How much does it cost to lower a car in Sacramento?',
                  a: 'Lowering springs run $400-$800 installed. Coilovers range from $800-$2,000+ depending on brand and vehicle. Air suspension systems start around $2,500 installed. Every install includes a 4-wheel alignment at no extra charge.',
                },
                {
                  q: "What's the difference between coilovers and lowering springs?",
                  a: 'Lowering springs are a fixed-drop replacement for your factory springs. Coilovers are a complete shock-and-spring assembly with adjustable ride height. Coilovers cost more but offer superior performance, adjustability, and often include damping control.',
                },
                {
                  q: 'Can I lower my truck?',
                  a: 'Absolutely. We lower trucks regularly using drop spindles, lowering springs, flip kits, and air suspension. Silverados, Sierras, F-150s, Tacomas, and RAMs are all popular platforms at our shop.',
                },
                {
                  q: 'Does lowering a car void the warranty?',
                  a: 'Not entirely. Under the Magnuson-Moss Warranty Act, a dealer cannot void your whole warranty for a suspension modification. They can only deny claims directly related to the modification itself.',
                },
                {
                  q: 'Do I need an alignment after lowering my car?',
                  a: 'Yes, it is mandatory. Lowering changes your suspension geometry and throws alignment angles out of spec. Skipping the alignment will cause rapid tire wear and poor handling. We include alignment with every lowering install.',
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
                { title: 'Lowering Your Car: Complete Guide', href: '/blog/lowering-your-car-guide' },
                { title: 'Custom Wheels Sacramento', href: '/blog/custom-wheels-sacramento' },
                { title: 'Wheel Offset Explained', href: '/blog/wheel-offset-explained' },
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
              Ready to Drop Your Ride?
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
