import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Phone, MapPin, Clock, ChevronRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BRAND } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Tire & Wheel Shop in Sacramento, CA | Best Packages | Tire Geeks',
  description:
    "Sacramento's #1 tire and wheel shop. Custom wheel and tire packages with expert fitment. Walk in today — no appointment needed. Financing available, no credit check.",
  alternates: { canonical: 'https://tiregeeks.com/services/tires-and-wheels-sacramento' },
  openGraph: {
    title: 'Tire & Wheel Shop in Sacramento, CA | Best Packages | Tire Geeks',
    description: "Sacramento's #1 tire and wheel shop. Custom wheel and tire packages with expert fitment. Walk in today — no appointment needed.",
    url: 'https://tiregeeks.com/services/tires-and-wheels-sacramento',
    siteName: 'Tire Geeks',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tiregeeks.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://tiregeeks.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Tires & Wheels Sacramento', item: 'https://tiregeeks.com/services/tires-and-wheels-sacramento' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Tire & Wheel Packages Sacramento',
  description: 'Custom tire and wheel package sales with expert fitment, professional mounting, computer balancing, and TPMS service in Sacramento, CA.',
  provider: { '@type': 'LocalBusiness', name: 'Tire Geeks', url: 'https://tiregeeks.com' },
  areaServed: { '@type': 'City', name: 'Sacramento' },
  serviceType: 'Tire & Wheel Package Sales & Installation',
  offers: { '@type': 'Offer', priceCurrency: 'USD', price: '599', description: 'Tire & wheel packages from $599' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a tire and wheel package cost in Sacramento?',
      acceptedAnswer: { '@type': 'Answer', text: 'At Tire Geeks, tire and wheel package deals start at $599 for budget-friendly options. Mid-range packages with name-brand wheels and tires run $1,200-$2,500, and premium packages with forged wheels can exceed $3,000+. Every package includes professional mounting, computer balancing, hub-centric rings, lug nuts, and TPMS reset at no extra charge.' },
    },
    {
      '@type': 'Question',
      name: 'Where is the best tire and wheel shop near me in Sacramento?',
      acceptedAnswer: { '@type': 'Answer', text: 'Tire Geeks has two Sacramento locations: 3020 Florin Road (South Sacramento, near Pocket and Land Park) and 2245 Arden Way (near Arden-Arcade and Carmichael). Both locations carry a massive selection of wheels and tires with same-day installation available. Walk-ins are welcome Monday through Saturday, 9AM to 6PM.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need an appointment for tire and wheel installation at Tire Geeks?',
      acceptedAnswer: { '@type': 'Answer', text: 'No appointment is needed. Tire Geeks operates on a walk-in basis at both Sacramento locations. Most tire and wheel package installations are completed the same day, typically in 1 to 2 hours depending on the complexity of the fitment.' },
    },
    {
      '@type': 'Question',
      name: 'What wheel brands does Tire Geeks carry?',
      acceptedAnswer: { '@type': 'Answer', text: 'Tire Geeks carries hundreds of wheel styles from Fuel Off-Road, Method Race Wheels, KMC, American Force, Moto Metal, XD Series, Black Rhino, Hostile, Vision, Lexani, Motiv, and many more. We stock wheels for trucks, SUVs, Jeeps, and cars in sizes from 17 to 26 inches.' },
    },
    {
      '@type': 'Question',
      name: 'Does Tire Geeks offer financing for tires and wheels?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Tire Geeks partners with Acima to offer lease-to-own financing with no credit check required. Get approved for up to $5,000 in minutes with no down payment and no interest for the first 100 days. Apply in-store or online.' },
    },
    {
      '@type': 'Question',
      name: 'How long does tire and wheel installation take?',
      acceptedAnswer: { '@type': 'Answer', text: 'A complete tire and wheel package installation typically takes 1 to 2 hours. This includes test-fitting the wheels, mounting and balancing the tires, installing hub-centric rings, torquing lug nuts to spec, and resetting the TPMS sensors. More complex fitments involving spacers or fender modifications may take longer.' },
    },
    {
      '@type': 'Question',
      name: 'Can I buy tires and wheels separately at Tire Geeks?',
      acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. While our tire and wheel packages offer the best value, you can purchase tires or wheels individually. Visit our tires page or wheels page for details on standalone options. Buying a package saves you money and ensures perfect compatibility between your wheels and tires.' },
    },
  ],
};

export default function TiresAndWheelsSacramentoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <main>
        {/* BREADCRUMB */}
        <div style={{ background: '#0A0A0A', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-3">
            <nav className="flex items-center gap-2 font-nav text-[12px] uppercase tracking-wider">
              <Link href="/" className="text-[#6B7280] hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-[#6B7280]" />
              <Link href="/services" className="text-[#6B7280] hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3 text-[#6B7280]" />
              <span className="text-[#D42B2B]">Tires &amp; Wheels Sacramento</span>
            </nav>
          </div>
        </div>

        {/* HERO */}
        <section className="relative flex items-center justify-center text-center" style={{ height: '340px', background: 'linear-gradient(to bottom, rgba(10,10,10,0.8), rgba(10,10,10,0.95)), #111' }}>
          <div className="px-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>Tire &amp; Wheel Shop</span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h1 className="font-display uppercase text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.05 }}>
              Tire &amp; Wheel Shop in Sacramento
            </h1>
            <p className="font-body text-[#AAAAAA] text-lg max-w-[700px] mx-auto">
              Custom wheel and tire packages with expert fitment at two Sacramento locations. Walk in today &mdash; no appointment needed.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
              <div className="lg:col-span-2 space-y-6">
                <div className="w-12 h-[3px] mb-3" style={{ background: '#D42B2B' }} />
                <h2 className="font-display text-white uppercase" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.1 }}>
                  Sacramento&apos;s Best Tire &amp; Wheel Shop
                </h2>

                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Tire Geeks is the best tire and wheel shop in Sacramento for drivers who want expert fitment, competitive pricing, and same-day installation. With two locations and a massive inventory of wheels and tires from the top brands, we make it easy to transform your ride in a single visit &mdash; no appointment needed.
                </p>

                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  What sets Tire Geeks apart from other Sacramento tire and wheel shops? It starts with our team. Every technician on our floor lives and breathes wheels and tires. We know bolt patterns, offsets, backspacing, hub bores, and brake clearances inside and out. That means your new setup fits perfectly the first time &mdash; no rubbing, no vibration, no comeback issues. We carry deep inventory across both locations so you can walk in and drive out with a complete setup the same day. And with <Link href="/financing" className="text-[#D42B2B] hover:underline">tire financing with no credit check</Link> through Acima, budget is never a barrier.
                </p>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Tire &amp; Wheel Package Deals
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Buying tires and wheels together is the smartest way to upgrade your vehicle. Our tire and wheel packages save you money compared to buying separately, and we guarantee compatibility between your wheels and tires. Packages start at <strong className="text-white">$599</strong> for budget-friendly setups and scale up to premium forged wheel and performance tire combinations. Every package includes professional mounting, computer spin-balancing, hub-centric rings, new lug nuts, valve stems, and a full TPMS reset &mdash; everything you need to roll out of the shop with confidence.
                </p>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  For truck owners, our most popular packages pair aggressive off-road wheels from Fuel or Method Race Wheels with Nitto Ridge Grapplers or Toyo Open Country A/T III tires. For car and sedan owners, we build clean street packages with Lexani, Motiv, or Black Rhino wheels paired with Falken or Hankook performance tires. Whatever your style, we will build the perfect package for your vehicle and your budget.
                </p>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Tire Brands We Carry
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Tire Geeks stocks tires from <strong className="text-white">Nitto, Toyo, BFGoodrich, Falken, Cooper, Hankook, Kumho, Nexen, Ironman, Lexani, Atturo, Vercelli, VenomPower, Predator</strong>, and many more. We carry all-season, all-terrain, mud-terrain, performance, and highway tires for every vehicle type. If we do not have your exact size in stock, we can typically source it within 24 to 48 hours.
                </p>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Wheel Brands We Carry
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Our wheel selection includes hundreds of styles from the industry&apos;s top manufacturers: <strong className="text-white">Fuel Off-Road, Method Race Wheels, KMC, American Force, Moto Metal, XD Series, Black Rhino, Hostile, Vision, Lexani, Motiv, Zenith, Force Off-Road</strong>, and many more. We stock wheels from 17 inches up to 26 inches in chrome, gloss black, matte black, bronze, machined, and custom finishes. Our team will help you find the perfect wheel to match your vehicle&apos;s bolt pattern and your personal style.
                </p>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Expert Fitment &amp; Installation
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Fitment is everything when it comes to wheels and tires. Our team verifies every bolt pattern, offset, hub bore, and brake clearance before anything goes on your vehicle. We run test-fits and use hub-centric rings where needed so you get zero vibration and a factory-smooth feel. Every installation includes professional tire mounting, computer spin-balancing, new valve stems, lug nut torquing to spec, and a complete TPMS sensor reset. If your new setup requires spacers, adapters, or fender modifications, we handle that too.
                </p>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Financing Available &mdash; No Credit Needed
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Do not let budget hold you back from the wheels and tires you want. Tire Geeks partners with <Link href="/financing" className="text-[#D42B2B] hover:underline">Acima and other financing providers</Link> to offer lease-to-own options with no credit check required. Get approved for up to $5,000 in minutes with no down payment and no interest for the first 100 days. Apply in-store or online before your visit.
                </p>

                <h3 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide pt-4">
                  Serving All Sacramento Neighborhoods
                </h3>
                <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                  Tire Geeks proudly serves drivers from every corner of the Sacramento metro area. Our Florin Road shop is convenient for residents of Pocket, Land Park, Meadowview, South Sacramento, and Elk Grove. Our Arden Way location is ideal for drivers in Arden-Arcade, Carmichael, Citrus Heights, Fair Oaks, and Rancho Cordova. We also regularly serve customers from Roseville, North Highlands, Natomas, Midtown, and East Sacramento. No matter where you are in the Sacramento area, there is a Tire Geeks near you.
                </p>
              </div>

              {/* SIDEBAR */}
              <div className="space-y-6">
                <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-lg uppercase tracking-wide mb-4">Package Pricing</h3>
                  <div className="space-y-3 mb-6">
                    {[
                      { label: 'Tire & Wheel Packages', price: 'From $599' },
                      { label: 'Tires Only', price: 'From $79/set of 4' },
                      { label: 'Wheels Only', price: 'From $150/wheel' },
                      { label: 'Mounting & Balancing', price: 'Included' },
                      { label: 'Hub-Centric Rings', price: 'Included' },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between items-center py-2 border-b border-white/5">
                        <span className="font-body text-[#AAAAAA] text-[14px]">{row.label}</span>
                        <span className="font-heading text-white text-[14px]">{row.price}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/financing" className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-block w-full text-center" style={{ textDecoration: 'none' }}>
                    APPLY FOR FINANCING
                  </Link>
                </div>

                <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-lg uppercase tracking-wide mb-4">By the Numbers</h3>
                  <div className="space-y-4">
                    {[
                      { stat: '500+', desc: 'Wheel styles available' },
                      { stat: '1–2 hrs', desc: 'Average package install' },
                      { stat: '2', desc: 'Sacramento locations' },
                      { stat: '$0', desc: 'Down payment with financing' },
                    ].map((item) => (
                      <div key={item.desc} className="flex items-center gap-4">
                        <span className="font-display text-[#D42B2B] text-2xl" style={{ minWidth: '70px' }}>{item.stat}</span>
                        <span className="font-body text-[#AAAAAA] text-[14px]">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8 text-center">
                  <h3 className="font-heading text-white text-lg uppercase tracking-wide mb-3">Walk-Ins Welcome</h3>
                  <p className="font-body text-[#AAAAAA] text-[14px] mb-6">No appointment needed. Roll up and get your new wheels and tires installed the same day.</p>
                  <a href={`tel:${BRAND.locations[0].phoneRaw}`} className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center justify-center gap-2 w-full" style={{ textDecoration: 'none' }}>
                    <Phone className="w-4 h-4" /> CALL NOW
                  </a>
                </div>

                <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-lg uppercase tracking-wide mb-4">Related Services</h3>
                  <div className="space-y-3">
                    {[
                      { href: '/services/tires-sacramento', label: 'Tires in Sacramento' },
                      { href: '/services/wheels-sacramento', label: 'Custom Wheels Sacramento' },
                      { href: '/services/alignment-sacramento', label: 'Wheel Alignment Sacramento' },
                      { href: '/services/lift-kits-sacramento', label: 'Lift Kit Installation' },
                    ].map((link) => (
                      <Link key={link.href} href={link.href} className="block font-body text-[#AAAAAA] text-[14px] hover:text-[#D42B2B] transition-colors">
                        {link.label} &rarr;
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: '#111111', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>Common Questions</span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h2 className="font-display text-white uppercase mb-10" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.1 }}>Frequently Asked Questions</h2>
            <div className="space-y-6 max-w-[900px]">
              {[
                { q: 'How much does a tire and wheel package cost in Sacramento?', a: 'At Tire Geeks, tire and wheel package deals start at $599. Mid-range packages with name-brand wheels and all-terrain tires typically run $1,200-$2,500, and premium packages with forged wheels can exceed $3,000+. Every package includes professional mounting, computer balancing, hub-centric rings, lug nuts, and TPMS reset at no extra charge.' },
                { q: 'Where is the best tire and wheel shop near me in Sacramento?', a: 'Tire Geeks has two Sacramento locations: 3020 Florin Road (South Sacramento, near Pocket and Land Park) and 2245 Arden Way (near Arden-Arcade and Carmichael). Both locations carry a massive selection with same-day installation available.' },
                { q: 'Do I need an appointment for tire and wheel installation at Tire Geeks?', a: 'No appointment is needed. Tire Geeks operates on a walk-in basis at both Sacramento locations. Most tire and wheel package installations are completed the same day, typically in 1 to 2 hours.' },
                { q: 'What wheel brands does Tire Geeks carry?', a: 'We carry hundreds of styles from Fuel Off-Road, Method Race Wheels, KMC, American Force, Moto Metal, XD Series, Black Rhino, Hostile, Vision, Lexani, Motiv, and many more in sizes from 17 to 26 inches.' },
                { q: 'Does Tire Geeks offer financing for tires and wheels?', a: 'Yes. We partner with Acima to offer lease-to-own financing with no credit check required. Get approved for up to $5,000 in minutes with no down payment and no interest for the first 100 days.' },
                { q: 'How long does tire and wheel installation take?', a: 'A complete tire and wheel package installation typically takes 1 to 2 hours. This includes test-fitting, mounting, balancing, hub-centric rings, lug nut torquing, and TPMS reset.' },
                { q: 'Can I buy tires and wheels separately?', a: 'Absolutely. While our packages offer the best value, you can purchase tires or wheels individually. Buying a package saves you money and ensures perfect compatibility.' },
              ].map((faq) => (
                <div key={faq.q} className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-[16px] uppercase tracking-wide mb-3">{faq.q}</h3>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCATIONS */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>Visit Us</span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h2 className="font-display text-white uppercase mb-10" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.1 }}>Both Sacramento Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BRAND.locations.map((location) => (
                <div key={location.name} className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-xl uppercase tracking-wide mb-4">Tire Geeks &mdash; {location.name}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3"><MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#D42B2B' }} /><span className="font-body text-[#AAAAAA] text-[15px]">{location.address}</span></div>
                    <div className="flex items-start gap-3"><Phone className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#D42B2B' }} /><a href={`tel:${location.phoneRaw}`} className="font-body text-white text-[15px] hover:text-[#D42B2B] transition-colors">{location.phone}</a></div>
                    <div className="flex items-start gap-3"><Clock className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#D42B2B' }} /><span className="font-body text-[#AAAAAA] text-[15px]">{location.hours}</span></div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`tel:${location.phoneRaw}`} className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center justify-center gap-2" style={{ textDecoration: 'none' }}><Phone className="w-4 h-4" />CALL</a>
                    <a href={location.mapUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center justify-center gap-2" style={{ textDecoration: 'none' }}><MapPin className="w-4 h-4" />DIRECTIONS</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section style={{ background: '#111111', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>Explore More</span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h2 className="font-display text-white uppercase mb-10" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.1 }}>Related Services &amp; Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Tires in Sacramento', href: '/services/tires-sacramento' },
                { title: 'Custom Wheels Sacramento', href: '/services/wheels-sacramento' },
                { title: 'Wheel Alignment Sacramento', href: '/services/alignment-sacramento' },
                { title: 'Wheels & Tires Package Deals', href: '/blog/new-wheels-and-tires-package-deals' },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="block p-5 rounded-xl transition-all hover:border-[#D42B2B]/50 group" style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span className="font-heading text-[16px] font-semibold text-[#F2F2F2] group-hover:text-[#D42B2B] transition-colors leading-snug block mb-2">{article.title}</span>
                  <span className="font-nav text-[12px] uppercase tracking-wider text-[#D42B2B]">Learn More &rarr;</span>
                </Link>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services" className="font-nav text-[13px] uppercase tracking-wider text-[#D42B2B] hover:underline">All Services &rarr;</Link>
              <Link href="/locations/florin-road" className="font-nav text-[13px] uppercase tracking-wider text-[#6B7280] hover:text-white transition-colors">Florin Road Location &rarr;</Link>
              <Link href="/locations/arden-way" className="font-nav text-[13px] uppercase tracking-wider text-[#6B7280] hover:text-white transition-colors">Arden Way Location &rarr;</Link>
              <Link href="/contact" className="font-nav text-[13px] uppercase tracking-wider text-[#6B7280] hover:text-white transition-colors">Contact Us &rarr;</Link>
              <Link href="/financing" className="font-nav text-[13px] uppercase tracking-wider text-[#6B7280] hover:text-white transition-colors">Financing &rarr;</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
