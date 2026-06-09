import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, MapPin, Clock, ChevronRight, Ruler, ArrowUpCircle, Bolt, Gauge, BookOpen } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BRAND } from '@/lib/constants';
import { fitments, getFitmentBySlug, isFitmentComplete, fitmentSizes, type Fitment } from '@/data/fitments';
import { tireSizes } from '@/data/tireSizes';
import { wheelSizes } from '@/data/wheelSizes';
import { getPostBySlug } from '@/data/blogPosts';

export function generateStaticParams() {
  return fitments.map((f) => ({ slug: f.slug }));
}

/* size "265/70R17" -> slug "265-70r17"; only link if we have a page for it */
const tireSlugSet = new Set(tireSizes.map((t) => t.slug));
function sizeToSlug(size: string): string | null {
  const slug = size.toLowerCase().replace('/', '-');
  return tireSlugSet.has(slug) ? slug : null;
}
const wheelSlugByDia = new Map(wheelSizes.map((w) => [w.diameter, w.slug]));

function intro(f: Fitment): string {
  switch (f.type) {
    case 'EV':
      return `Your ${f.make} ${f.model} is heavier and torquier than a comparable gas car, and that wears tires faster. Running the right EV-rated size and load rating protects both your range and your tread life. Here are the factory sizes, fitment specs, and the tires we recommend for Sacramento ${f.make} ${f.model} owners.`;
    case 'Truck':
      return `Whether your ${f.make} ${f.model} tows, hauls, hits the trail, or just commutes, the right tire and wheel setup makes a real difference. Below are the factory sizes, bolt pattern, common upgrade sizes and what they need to clear, plus the tires we recommend for how Sacramento owners actually use the ${f.model}.`;
    case 'SUV':
      return `The ${f.make} ${f.model} pulls double duty as a family hauler and a weekend trip vehicle around Sacramento. Here are its factory tire sizes, bolt pattern and wheel fitment, upgrade options, and the tires we recommend for everything from wet commutes to Sierra snow.`;
    default:
      return `Choosing tires for your ${f.make} ${f.model} comes down to wet-weather safety, ride comfort, and tread life for Sacramento driving. Below are the factory sizes, bolt pattern, wheel fitment, and the tires we recommend — with honest, no-pressure advice at either location.`;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const f = getFitmentBySlug(slug);
  if (!f) return {};
  const url = `https://tiregeeks.com/fitment/${f.slug}`;
  const title = `${f.make} ${f.model} Tires & Wheels in Sacramento | Fitment Guide | Tire Geeks`;
  const sizePart = f.factoryTireSizes ? ` Factory sizes ${f.factoryTireSizes.join(', ')}.` : '';
  const description = `${f.make} ${f.model} tire and wheel fitment for Sacramento drivers.${sizePart} Recommended tires, upgrade sizes, bolt pattern, and pricing from $79 a set at Tire Geeks.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: isFitmentComplete(f) ? undefined : { index: false, follow: true },
    openGraph: { title, description, url, siteName: 'Tire Geeks', type: 'website', images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }] },
  };
}

export default async function FitmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = getFitmentBySlug(slug);
  if (!f) notFound();

  const blog = f.relatedBlogSlug ? getPostBySlug(f.relatedBlogSlug) : undefined;
  const linkedTireSizes = Array.from(new Set(fitmentSizes(f)))
    .map((s) => ({ size: s, slug: sizeToSlug(s) }))
    .filter((x) => x.slug);
  const linkedWheels = f.typicalWheelDiameters.map((d) => ({ d, slug: wheelSlugByDia.get(d) })).filter((x) => x.slug);
  const url = `https://tiregeeks.com/fitment/${f.slug}`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tiregeeks.com' },
      { '@type': 'ListItem', position: 2, name: 'Fitment', item: 'https://tiregeeks.com/fitment' },
      { '@type': 'ListItem', position: 3, name: `${f.make} ${f.model}`, item: url },
    ],
  };
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${f.make} ${f.model} Tire & Wheel Fitment Sacramento`,
    description: `Tires, custom wheels, and fitment for the ${f.make} ${f.model} at Tire Geeks in Sacramento, CA.${f.boltPattern ? ` Bolt pattern ${f.boltPattern}.` : ''}`,
    provider: { '@type': 'LocalBusiness', name: 'Tire Geeks', url: 'https://tiregeeks.com' },
    areaServed: { '@type': 'City', name: 'Sacramento' },
    serviceType: 'Tire & Wheel Sales and Installation',
    offers: { '@type': 'Offer', priceCurrency: 'USD', price: '79', description: 'Tires from $79 per set of four installed' },
  };

  const SectionHead = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => (
    <div className="flex items-center gap-3 mb-4">
      <span style={{ color: '#D42B2B' }}>{icon}</span>
      <h2 className="font-display text-white uppercase" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: 1.1 }}>{children}</h2>
    </div>
  );

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
              <Link href="/fitment" className="text-[#6B7280] hover:text-white transition-colors">Fitment</Link>
              <ChevronRight className="w-3 h-3 text-[#6B7280]" />
              <span className="text-[#D42B2B]">{f.make} {f.model}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="relative flex items-center justify-center text-center" style={{ minHeight: '340px', padding: '64px 0', background: 'linear-gradient(to bottom, rgba(10,10,10,0.8), rgba(10,10,10,0.95)), #111' }}>
          <div className="px-6 max-w-[820px]">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>{f.type} Fitment</span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h1 className="font-display uppercase text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)', lineHeight: 1.05 }}>
              {f.make} {f.model} Tires and Wheels in Sacramento
            </h1>
            <p className="font-body text-[#AAAAAA] text-lg">{intro(f)}</p>
          </div>
        </section>

        {/* Main */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-10">

                {/* Factory sizes */}
                {f.factoryTireSizes && (
                  <div>
                    <SectionHead icon={<Ruler className="w-5 h-5" />}>Factory Tire Sizes</SectionHead>
                    <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-5">
                      Common factory tire sizes across {f.make} {f.model} trims and model years. Tap a size to decode its specs and alternatives:
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {f.factoryTireSizes.map((s) => {
                        const sl = sizeToSlug(s);
                        return sl ? (
                          <Link key={s} href={`/tire-sizes/${sl}`} className="font-heading text-white text-[15px] bg-[#1A1A1A] border border-white/5 rounded-xl px-5 py-3 hover:border-[#D42B2B]/50 hover:text-[#D42B2B] transition-all">{s}</Link>
                        ) : (
                          <span key={s} className="font-heading text-white text-[15px] bg-[#1A1A1A] border border-white/5 rounded-xl px-5 py-3">{s}</span>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Upgrade sizes */}
                {f.commonUpgradeSizes && (
                  <div>
                    <SectionHead icon={<ArrowUpCircle className="w-5 h-5" />}>Common Upgrade Sizes</SectionHead>
                    <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-5">
                      Popular larger sizes Sacramento {f.model} owners run, and what they typically need to clear. We test-fit your specific trim before any install:
                    </p>
                    <div className="space-y-3">
                      {f.commonUpgradeSizes.map((u) => {
                        const sl = sizeToSlug(u.size);
                        return (
                          <div key={u.size} className="flex items-start justify-between gap-4 bg-[#1A1A1A] border border-white/5 rounded-xl px-5 py-4">
                            <div>
                              {sl ? (
                                <Link href={`/tire-sizes/${sl}`} className="font-heading text-white text-[16px] hover:text-[#D42B2B] transition-colors">{u.size}</Link>
                              ) : (
                                <span className="font-heading text-white text-[16px]">{u.size}</span>
                              )}
                              {u.note && <div className="font-body text-[#9E9E9E] text-[13px] mt-1">{u.note}</div>}
                            </div>
                            {(u.needsLift || u.needsLevel) && (
                              <span className="font-nav text-[11px] uppercase tracking-wider px-3 py-1 rounded-full flex-shrink-0" style={{ background: 'rgba(212,43,43,0.12)', color: '#D42B2B' }}>
                                {u.needsLift ? 'Needs lift' : 'Needs level'}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Bolt pattern + wheel diameters */}
                {(f.boltPattern || f.typicalWheelDiameters.length > 0) && (
                  <div>
                    <SectionHead icon={<Bolt className="w-5 h-5" />}>Wheel Fitment</SectionHead>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {f.boltPattern && (
                        <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-5">
                          <div className="font-nav text-[11px] uppercase tracking-wider text-[#6B7280] mb-1">Bolt pattern</div>
                          <div className="font-display text-white text-2xl">{f.boltPattern}</div>
                        </div>
                      )}
                      {f.typicalWheelDiameters.length > 0 && (
                        <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-5">
                          <div className="font-nav text-[11px] uppercase tracking-wider text-[#6B7280] mb-2">Typical wheel diameters</div>
                          <div className="flex flex-wrap gap-2">
                            {f.typicalWheelDiameters.map((d) => {
                              const sl = wheelSlugByDia.get(d);
                              return sl ? (
                                <Link key={d} href={`/wheel-sizes/${sl}`} className="font-heading text-white text-[14px] bg-[#242424] rounded-lg px-3 py-1.5 hover:text-[#D42B2B] transition-colors">{d}&quot;</Link>
                              ) : (
                                <span key={d} className="font-heading text-white text-[14px] bg-[#242424] rounded-lg px-3 py-1.5">{d}&quot;</span>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Recommended tire type */}
                <div>
                  <SectionHead icon={<Gauge className="w-5 h-5" />}>What We Recommend</SectionHead>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">{f.recommendedTireType}.</p>
                  {blog && (
                    <Link href={`/blog/${f.relatedBlogSlug}`} className="inline-flex items-center gap-2 mt-4 font-nav text-[13px] uppercase tracking-wider text-[#D42B2B] hover:underline">
                      <BookOpen className="w-4 h-4" /> {blog.title}
                    </Link>
                  )}
                </div>

                {/* Sacramento note */}
                {f.sacramentoNote && (
                  <div className="bg-[#111111] border-l-2 border-[#D42B2B] rounded-r-xl p-5">
                    <div className="font-nav text-[11px] uppercase tracking-wider text-[#D42B2B] mb-2">Sacramento note</div>
                    <p className="font-body text-[#E5E5E5] text-[15px] leading-relaxed">{f.sacramentoNote}</p>
                  </div>
                )}

                {/* Cross-link loop */}
                {(linkedTireSizes.length > 0 || linkedWheels.length > 0) && (
                  <div>
                    <h2 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide mb-4">Explore This Vehicle&apos;s Fitment</h2>
                    {linkedTireSizes.length > 0 && (
                      <div className="mb-5">
                        <div className="font-nav text-[12px] uppercase tracking-wider text-[#6B7280] mb-3">Tire sizes</div>
                        <div className="flex flex-wrap gap-2">
                          {linkedTireSizes.map((t) => (
                            <Link key={t.size} href={`/tire-sizes/${t.slug}`} className="font-heading text-white text-[14px] bg-[#1A1A1A] border border-white/5 rounded-lg px-4 py-2 hover:border-[#D42B2B]/50 hover:text-[#D42B2B] transition-all">{t.size}</Link>
                          ))}
                        </div>
                      </div>
                    )}
                    {linkedWheels.length > 0 && (
                      <div>
                        <div className="font-nav text-[12px] uppercase tracking-wider text-[#6B7280] mb-3">Wheel sizes</div>
                        <div className="flex flex-wrap gap-2">
                          {linkedWheels.map((w) => (
                            <Link key={w.d} href={`/wheel-sizes/${w.slug}`} className="font-heading text-white text-[14px] bg-[#1A1A1A] border border-white/5 rounded-lg px-4 py-2 hover:border-[#D42B2B]/50 hover:text-[#D42B2B] transition-all">{w.d}&quot; wheels</Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-lg uppercase tracking-wide mb-4">{f.model} Pricing</h3>
                  <div className="space-y-3 mb-6">
                    {[
                      { label: 'Tires (set of 4)', price: 'From $79' },
                      { label: 'Mounting & Balancing', price: 'Included' },
                      { label: 'TPMS Service', price: 'Included' },
                      { label: 'Wheel & Tire Packages', price: 'Quoted' },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between items-center py-2 border-b border-white/5">
                        <span className="font-body text-[#AAAAAA] text-[14px]">{row.label}</span>
                        <span className="font-heading text-white text-[14px]">{row.price}</span>
                      </div>
                    ))}
                  </div>
                  <a href={`tel:${BRAND.locations[0].phoneRaw}`} className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center justify-center gap-2 w-full" style={{ textDecoration: 'none' }}>
                    <Phone className="w-4 h-4" /> CHECK FITMENT
                  </a>
                  <Link href="/financing" className="btn-ghost font-nav text-[13px] font-bold uppercase tracking-[0.1em] px-8 py-3 rounded inline-block w-full text-center mt-3" style={{ textDecoration: 'none' }}>
                    Finance — No Credit Needed
                  </Link>
                </div>
                <Link href="/fitment" className="block bg-[#1A1A1A] border border-white/5 rounded-xl p-6 text-center hover:border-[#D42B2B]/50 transition-all group">
                  <span className="font-heading text-white text-[15px] uppercase tracking-wide group-hover:text-[#D42B2B] transition-colors">&larr; All Vehicles</span>
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
            <h2 className="font-display text-white uppercase mb-10" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.1 }}>Get Your {f.make} {f.model} Set Up</h2>
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
