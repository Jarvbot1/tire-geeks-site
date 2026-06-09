import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, MapPin, Clock, ChevronRight, Disc3, Car, Tag, ArrowUpDown } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BRAND } from '@/lib/constants';
import {
  wheelSizes,
  getWheelSizeBySlug,
  getTireSizesForWheel,
  shouldIndexWheelSize,
} from '@/data/wheelSizes';
import { getVehiclesForWheelDiameter } from '@/data/fitments';
import { getPostBySlug } from '@/data/blogPosts';

export function generateStaticParams() {
  return wheelSizes.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const w = getWheelSizeBySlug(slug);
  if (!w) return {};
  const url = `https://tiregeeks.com/wheel-sizes/${w.slug}`;
  const title = `${w.label} Wheels & Tires in Sacramento | Fitment & Prices | Tire Geeks`;
  const description = `${w.label} wheels: ${w.tagline} See the tire sizes that fit, vehicles that run ${w.label} wheels, brands we stock, and custom wheel-and-tire packages at Tire Geeks Sacramento.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: shouldIndexWheelSize(w) ? undefined : { index: false, follow: true },
    openGraph: { title, description, url, siteName: 'Tire Geeks', type: 'website', images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }] },
  };
}

export default async function WheelSizePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const w = getWheelSizeBySlug(slug);
  if (!w) notFound();

  const tirePairs = getTireSizesForWheel(w.diameter);
  const vehicles = getVehiclesForWheelDiameter(w.diameter);
  const plusPost = getPostBySlug('plus-sizing-wheels-explained');
  const wheelsPost = getPostBySlug('custom-wheels-sacramento');
  const url = `https://tiregeeks.com/wheel-sizes/${w.slug}`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tiregeeks.com' },
      { '@type': 'ListItem', position: 2, name: 'Wheel Sizes', item: 'https://tiregeeks.com/wheel-sizes' },
      { '@type': 'ListItem', position: 3, name: `${w.label} Wheels`, item: url },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${w.label} Wheels & Tire Packages Sacramento`,
    description: `${w.label} custom wheels and wheel-and-tire packages with professional mounting and balancing at Tire Geeks in Sacramento, CA. ${w.goodFor}`,
    provider: { '@type': 'LocalBusiness', name: 'Tire Geeks', url: 'https://tiregeeks.com' },
    areaServed: { '@type': 'City', name: 'Sacramento' },
    serviceType: 'Custom Wheel & Tire Sales and Installation',
    offers: { '@type': 'Offer', priceCurrency: 'USD', price: '79', description: 'Tires from $79 per set of four installed; custom wheel-and-tire packages available' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />

      <main>
        {/* Breadcrumb */}
        <div style={{ background: '#0A0A0A', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-3">
            <nav className="flex items-center gap-2 font-nav text-[12px] uppercase tracking-wider">
              <Link href="/" className="text-[#6B7280] hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-[#6B7280]" />
              <Link href="/wheel-sizes" className="text-[#6B7280] hover:text-white transition-colors">Wheel Sizes</Link>
              <ChevronRight className="w-3 h-3 text-[#6B7280]" />
              <span className="text-[#D42B2B]">{w.label}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="relative flex items-center justify-center text-center" style={{ minHeight: '340px', padding: '64px 0', background: 'linear-gradient(to bottom, rgba(10,10,10,0.8), rgba(10,10,10,0.95)), #111' }}>
          <div className="px-6 max-w-[820px]">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>{w.category} Wheel</span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h1 className="font-display uppercase text-white mb-4" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.05 }}>
              {w.label} Wheels in Sacramento
            </h1>
            <p className="font-body text-[#AAAAAA] text-lg">{w.tagline}</p>
          </div>
        </section>

        {/* Main content */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-10">

                {/* What it's good for */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Disc3 className="w-5 h-5" style={{ color: '#D42B2B' }} />
                    <h2 className="font-display text-white uppercase" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: 1.1 }}>What {w.label} Wheels Are Good For</h2>
                  </div>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-5">{w.goodFor}</p>
                  <div className="bg-[#111111] border-l-2 border-[#D42B2B] rounded-r-xl p-5 mb-5">
                    <div className="font-nav text-[11px] uppercase tracking-wider text-[#D42B2B] mb-2">The honest tradeoffs</div>
                    <p className="font-body text-[#E5E5E5] text-[15px] leading-relaxed">{w.tradeoffs}</p>
                  </div>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                    <strong className="text-white">Typically runs on:</strong> {w.idealFor}
                  </p>
                </div>

                {/* Tire sizes that pair */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <ArrowUpDown className="w-5 h-5" style={{ color: '#D42B2B' }} />
                    <h2 className="font-display text-white uppercase" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: 1.1 }}>Tire Sizes That Fit {w.label} Wheels</h2>
                  </div>
                  {tirePairs.length > 0 ? (
                    <>
                      <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-5">
                        These common sizes all mount on a {w.diameter}&quot; wheel. Tap any size to decode its specs, fitment, and alternatives:
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {tirePairs.map((t) => (
                          <Link key={t.slug} href={`/tire-sizes/${t.slug}`} className="flex items-center justify-between gap-2 bg-[#1A1A1A] border border-white/5 rounded-xl px-4 py-3 hover:border-[#D42B2B]/50 transition-all group">
                            <div>
                              <div className="font-heading text-white text-[15px] group-hover:text-[#D42B2B] transition-colors">{t.size}</div>
                              <div className="font-body text-[#6B7280] text-[12px] mt-0.5">{t.use.split(' / ')[0]}</div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-[#6B7280] group-hover:text-[#D42B2B] transition-colors flex-shrink-0" />
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                      {w.label} wheels run specialized low-profile tires that we source per build rather than stock in standard sizes. Bring your vehicle in and we&apos;ll spec the exact tire to clear your suspension and fenders correctly.
                    </p>
                  )}
                </div>

                {/* Vehicles that run this diameter */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Car className="w-5 h-5" style={{ color: '#D42B2B' }} />
                    <h2 className="font-display text-white uppercase" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: 1.1 }}>Vehicles That Run {w.label} Wheels</h2>
                  </div>
                  {vehicles.length > 0 ? (
                    <>
                      <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-5">
                        These vehicles come with or commonly run {w.label} wheels. Tap any to see its full fitment guide:
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {vehicles.map((v) => (
                          <Link key={v.slug} href={`/fitment/${v.slug}`} className="bg-[#1A1A1A] border border-white/5 rounded-xl px-4 py-3 hover:border-[#D42B2B]/50 transition-all group block">
                            <div className="font-heading text-white text-[14px] group-hover:text-[#D42B2B] transition-colors">{v.make} {v.model}</div>
                            <div className="font-body text-[#9E9E9E] text-[12px] mt-0.5">{v.type}</div>
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                      {w.label} is most often a custom upgrade rather than a factory size. We build {w.label} packages to order — call us with your vehicle and we&apos;ll confirm clearance and the right offset.
                    </p>
                  )}
                </div>

                {/* Brands */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Tag className="w-5 h-5" style={{ color: '#D42B2B' }} />
                    <h2 className="font-display text-white uppercase" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: 1.1 }}>{w.label} Brands We Stock</h2>
                  </div>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-5">
                    Popular {w.label} wheel and tire brands we carry and order for Sacramento builds:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {w.brands.map((b) => (
                      <span key={b} className="font-heading text-white text-[14px] bg-[#1A1A1A] border border-white/5 rounded-full px-5 py-2">{b}</span>
                    ))}
                  </div>
                </div>

                {/* Plus-sizing note */}
                <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-6">
                  <h3 className="font-heading text-white text-lg uppercase tracking-wide mb-3">Thinking About Plus-Sizing?</h3>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-4">
                    Going up to {w.label} from a smaller wheel means a shorter tire sidewall to keep your overall diameter close to stock — that preserves speedometer accuracy and clearance while changing the look and feel. Done right it&apos;s a clean upgrade; done wrong it wrecks ride quality and risks pothole damage.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {plusPost && (
                      <Link href={`/blog/${'plus-sizing-wheels-explained'}`} className="font-nav text-[13px] uppercase tracking-wider text-[#D42B2B] hover:underline">
                        {plusPost.title} &rarr;
                      </Link>
                    )}
                    {wheelsPost && (
                      <Link href={`/blog/${'custom-wheels-sacramento'}`} className="font-nav text-[13px] uppercase tracking-wider text-[#6B7280] hover:text-white transition-colors">
                        Custom Wheels Guide &rarr;
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-lg uppercase tracking-wide mb-4">{w.label} Packages</h3>
                  <div className="space-y-3 mb-6">
                    {[
                      { label: 'Tires (set of 4)', price: 'From $79' },
                      { label: 'Wheel & Tire Packages', price: 'Quoted per build' },
                      { label: 'Mounting & Balancing', price: 'Included' },
                      { label: 'TPMS Service', price: 'Included' },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between items-center py-2 border-b border-white/5">
                        <span className="font-body text-[#AAAAAA] text-[14px]">{row.label}</span>
                        <span className="font-heading text-white text-[14px]">{row.price}</span>
                      </div>
                    ))}
                  </div>
                  <a href={`tel:${BRAND.locations[0].phoneRaw}`} className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center justify-center gap-2 w-full" style={{ textDecoration: 'none' }}>
                    <Phone className="w-4 h-4" /> GET A QUOTE
                  </a>
                  <Link href="/financing" className="btn-ghost font-nav text-[13px] font-bold uppercase tracking-[0.1em] px-8 py-3 rounded inline-block w-full text-center mt-3" style={{ textDecoration: 'none' }}>
                    Finance — No Credit Needed
                  </Link>
                </div>

                <Link href="/services/wheels-sacramento" className="block bg-[#1A1A1A] border border-white/5 rounded-xl p-6 text-center hover:border-[#D42B2B]/50 transition-all group">
                  <span className="font-heading text-white text-[15px] uppercase tracking-wide group-hover:text-[#D42B2B] transition-colors">Custom Wheel Services &rarr;</span>
                </Link>
                <Link href="/wheel-sizes" className="block bg-[#1A1A1A] border border-white/5 rounded-xl p-6 text-center hover:border-[#D42B2B]/50 transition-all group">
                  <span className="font-heading text-white text-[15px] uppercase tracking-wide group-hover:text-[#D42B2B] transition-colors">&larr; All Wheel Sizes</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Both locations */}
        <section style={{ background: '#111111', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>Visit Us</span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h2 className="font-display text-white uppercase mb-10" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.1 }}>Get {w.label} Wheels in Sacramento</h2>
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
                    <a href={`tel:${location.phoneRaw}`} className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center justify-center gap-2" style={{ textDecoration: 'none' }}><Phone className="w-4 h-4" /> CALL</a>
                    <a href={location.mapUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center justify-center gap-2" style={{ textDecoration: 'none' }}><MapPin className="w-4 h-4" /> DIRECTIONS</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
