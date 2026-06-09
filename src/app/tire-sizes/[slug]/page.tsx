import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, MapPin, Clock, ChevronRight, Ruler, Car, ArrowLeftRight, Check } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BRAND } from '@/lib/constants';
import {
  tireSizes,
  getTireSizeBySlug,
  getAlternativeSizes,
  type TireSize,
} from '@/data/tireSizes';
import { getVehiclesForTireSize } from '@/data/fitments';
import { getPostBySlug } from '@/data/blogPosts';

/* ------------------------------------------------------------------ */
/*  Static params                                                      */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return tireSizes.map((t) => ({ slug: t.slug }));
}

/* ------------------------------------------------------------------ */
/*  Per-aspect content — keeps intros and driving notes unique         */
/* ------------------------------------------------------------------ */

type Band = 'ultraLow' | 'low' | 'mid' | 'tall' | 'xtall';

function band(aspect: number): Band {
  if (aspect <= 40) return 'ultraLow';
  if (aspect <= 50) return 'low';
  if (aspect <= 60) return 'mid';
  if (aspect <= 70) return 'tall';
  return 'xtall';
}

/** 2–3 sentence intro that references this size's actual character + numbers. */
function intro(t: TireSize): string {
  const b = band(t.aspect);
  const dia = t.overallIn.toFixed(1);
  switch (b) {
    case 'ultraLow':
      return `The ${t.size} is an ultra-low-profile performance size, built around a short ${t.sidewallIn}" sidewall wrapped on a large ${t.wheelIn}" wheel. That short sidewall is what gives cars on this size their sharp, immediate steering — but it also means there's very little rubber between your ${t.wheelIn}" rim and a Sacramento pothole. At roughly ${dia}" tall, it's a size you'll find on sport sedans, coupes, and performance trims.`;
    case 'low':
      return `The ${t.size} is a low-profile sport-touring size — a ${t.sectionIn}" wide tread on a ${t.wheelIn}" wheel with a fairly short ${t.sidewallIn}" sidewall. It splits the difference between crisp handling and everyday livability, which is why it's so common on upper-trim sedans and crossovers. Overall height comes in around ${dia}".`;
    case 'mid':
      return `The ${t.size} is a balanced mid-profile size with a ${t.sidewallIn}" sidewall on a ${t.wheelIn}" wheel and a ${t.sectionIn}" tread width. That extra sidewall over a low-profile tire soaks up Sacramento's rougher streets and freeway expansion joints while still steering tidily. At about ${dia}" tall, it suits sedans and crossovers that prioritize ride comfort.`;
    case 'tall':
      return `The ${t.size} is a tall-sidewall size — ${t.sidewallIn}" of sidewall over a ${t.wheelIn}" wheel — that prioritizes comfort and durability. The deep sidewall cushions impacts and shrugs off curbs and potholes far better than a low-profile tire, which makes it a favorite on crossovers, SUVs, and light trucks. Overall diameter is roughly ${dia}".`;
    case 'xtall':
      return `The ${t.size} is a tall, rugged size standing about ${dia}" tall on a ${t.wheelIn}" wheel, with a deep ${t.sidewallIn}" sidewall. That tall sidewall is exactly what you want for off-road work and load-carrying — it can be aired down for trail grip and absorbs sharp hits without damaging the wheel. It's a classic truck and off-road fitment.`;
  }
}

/** One-line "what this means for your driving." */
function drivingNote(t: TireSize): string {
  switch (band(t.aspect)) {
    case 'ultraLow':
      return 'Expect sharp turn-in and strong grip, a firmer ride, and more vulnerability to pothole and curb damage — keep an eye on pressures and consider road-hazard coverage.';
    case 'low':
      return 'You get responsive steering with most of the comfort of a taller tire — a sensible all-rounder for Sacramento daily driving.';
    case 'mid':
      return 'A comfortable, quiet ride with predictable handling — the easiest size to live with on Sacramento’s mixed pavement.';
    case 'tall':
      return 'Comfort and impact resistance come first here, with a softer ride and more sidewall flex in hard cornering — ideal for family SUVs and trucks.';
    case 'xtall':
      return 'Maximum sidewall protection and off-road capability, at the cost of a softer on-road feel and slightly slower steering — re-check your speedometer and gearing if you size up from stock.';
  }
}

/** 3 blog slugs to link, chosen by use + profile (titles resolved at render). */
function relatedSlugs(t: TireSize): string[] {
  const base = ['how-to-read-tire-size'];
  if (t.use.startsWith('Truck')) {
    return [...base, 'best-tires-for-trucks-sacramento', 'tire-fitment-guide-lifted-trucks'];
  }
  if (t.use.startsWith('SUV')) {
    return [...base, 'best-tires-for-sacramento-weather', 'all-season-vs-all-terrain-vs-mud-terrain'];
  }
  // car / sedan
  return [...base, 'best-tires-for-sacramento-weather', t.aspect <= 50 ? 'plus-sizing-wheels-explained' : 'wheel-offset-explained'];
}

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = getTireSizeBySlug(slug);
  if (!t) return {};
  const url = `https://tiregeeks.com/tire-sizes/${t.slug}`;
  const title = `${t.size} Tires in Sacramento | Specs, Fitment & Prices | Tire Geeks`;
  const description = `${t.size} tire specs and fitment: ${t.sectionIn}" tread, ${t.sidewallIn}" sidewall, ~${t.overallIn.toFixed(1)}" overall diameter on a ${t.wheelIn}" wheel. See which vehicles use it, safe alternative sizes, and prices at Tire Geeks Sacramento.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: 'Tire Geeks', type: 'website', images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }] },
  };
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function TireSizePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = getTireSizeBySlug(slug);
  if (!t) notFound();

  const alternatives = getAlternativeSizes(t.slug);
  const vehicles = getVehiclesForTireSize(t.size);
  const related = relatedSlugs(t)
    .map((s) => { const p = getPostBySlug(s); return p ? { slug: s, title: p.title } : null; })
    .filter((x): x is { slug: string; title: string } => x !== null);
  const url = `https://tiregeeks.com/tire-sizes/${t.slug}`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tiregeeks.com' },
      { '@type': 'ListItem', position: 2, name: 'Tire Sizes', item: 'https://tiregeeks.com/tire-sizes' },
      { '@type': 'ListItem', position: 3, name: `${t.size} Tires`, item: url },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${t.size} Tire Sales & Installation Sacramento`,
    description: `New ${t.size} tires with professional mounting, computer balancing, and TPMS service at Tire Geeks in Sacramento, CA. Overall diameter approximately ${t.overallIn.toFixed(1)} inches on a ${t.wheelIn}-inch wheel.`,
    provider: { '@type': 'LocalBusiness', name: 'Tire Geeks', url: 'https://tiregeeks.com' },
    areaServed: { '@type': 'City', name: 'Sacramento' },
    serviceType: 'Tire Sales & Installation',
    offers: { '@type': 'Offer', priceCurrency: 'USD', price: '79', description: `${t.size} tires from $79 per set of four installed` },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What does ${t.size} mean?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${t.size} breaks down as a ${t.widthMm} mm (${t.sectionIn}") section width, a ${t.aspect}% aspect ratio that gives a ${t.sidewallIn}" sidewall, and an R${t.wheelIn} radial construction for a ${t.wheelIn}" wheel. Together that works out to an overall diameter of about ${t.overallIn.toFixed(1)} inches.`,
        },
      },
      {
        '@type': 'Question',
        name: `What size wheel does a ${t.size} tire fit?`,
        acceptedAnswer: { '@type': 'Answer', text: `A ${t.size} tire mounts on a ${t.wheelIn}-inch diameter wheel. The ideal wheel width depends on the application, and the Tire Geeks team can confirm the correct width for your vehicle at either Sacramento location.` },
      },
      {
        '@type': 'Question',
        name: `How much do ${t.size} tires cost at Tire Geeks?`,
        acceptedAnswer: { '@type': 'Answer', text: `${t.size} tires start at $79 per set of four installed at Tire Geeks, with mid-range and premium options available. Every set includes mounting, computer balancing, valve stems, and TPMS reset. No-credit-needed financing through Acima is available.` },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <main>
        {/* ====== BREADCRUMB ====== */}
        <div style={{ background: '#0A0A0A', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-3">
            <nav className="flex items-center gap-2 font-nav text-[12px] uppercase tracking-wider">
              <Link href="/" className="text-[#6B7280] hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-[#6B7280]" />
              <Link href="/tire-sizes" className="text-[#6B7280] hover:text-white transition-colors">Tire Sizes</Link>
              <ChevronRight className="w-3 h-3 text-[#6B7280]" />
              <span className="text-[#D42B2B]">{t.size}</span>
            </nav>
          </div>
        </div>

        {/* ====== HERO ====== */}
        <section className="relative flex items-center justify-center text-center" style={{ minHeight: '340px', padding: '64px 0', background: 'linear-gradient(to bottom, rgba(10,10,10,0.8), rgba(10,10,10,0.95)), #111' }}>
          <div className="px-6 max-w-[820px]">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>{t.use}</span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h1 className="font-display uppercase text-white mb-4" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.05 }}>
              {t.size} Tires in Sacramento
            </h1>
            <p className="font-body text-[#AAAAAA] text-lg">{intro(t)}</p>
          </div>
        </section>

        {/* ====== MAIN CONTENT ====== */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-10">

                {/* Decoded dimensions */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Ruler className="w-5 h-5" style={{ color: '#D42B2B' }} />
                    <h2 className="font-display text-white uppercase" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: 1.1 }}>What {t.size} Means</h2>
                  </div>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-6">
                    Every number on the sidewall describes a real dimension. Here is exactly what the {t.size} works out to:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { label: 'Section width', value: `${t.widthMm} mm (${t.sectionIn}")`, note: 'Tread width across the tire' },
                      { label: 'Aspect ratio', value: `${t.aspect}%`, note: `Sidewall is ${t.aspect}% of the width` },
                      { label: 'Sidewall height', value: `${t.sidewallIn}"`, note: 'Rubber between rim and road' },
                      { label: 'Wheel diameter', value: `${t.wheelIn}"`, note: 'Rim size this tire mounts on' },
                      { label: 'Overall diameter', value: `~${t.overallIn.toFixed(1)}"`, note: 'Full height of the tire' },
                      { label: 'Best suited for', value: t.use, note: 'Typical vehicle category' },
                    ].map((row) => (
                      <div key={row.label} className="bg-[#1A1A1A] border border-white/5 rounded-xl p-5">
                        <div className="font-nav text-[11px] uppercase tracking-wider text-[#6B7280] mb-1">{row.label}</div>
                        <div className="font-display text-white text-2xl mb-1">{row.value}</div>
                        <div className="font-body text-[#9E9E9E] text-[13px]">{row.note}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 bg-[#111111] border-l-2 border-[#D42B2B] rounded-r-xl p-5">
                    <div className="font-nav text-[11px] uppercase tracking-wider text-[#D42B2B] mb-2">What this means for your driving</div>
                    <p className="font-body text-[#E5E5E5] text-[15px] leading-relaxed">{drivingNote(t)}</p>
                  </div>
                </div>

                {/* Vehicles that use this size */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Car className="w-5 h-5" style={{ color: '#D42B2B' }} />
                    <h2 className="font-display text-white uppercase" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: 1.1 }}>Vehicles That Use {t.size}</h2>
                  </div>
                  {vehicles.length > 0 ? (
                    <>
                      <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-5">
                        These vehicles run the {t.size} as a factory size or a common upgrade. Tap any to see its full fitment guide:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {vehicles.map((v) => (
                          <Link key={v.slug} href={`/fitment/${v.slug}`} className="flex items-center justify-between gap-3 bg-[#1A1A1A] border border-white/5 rounded-xl px-5 py-4 hover:border-[#D42B2B]/50 transition-all group">
                            <div className="font-heading text-white text-[15px] group-hover:text-[#D42B2B] transition-colors">{v.make} {v.model}</div>
                            <span className="font-nav text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full flex-shrink-0" style={{ background: v.isFactory ? 'rgba(212,43,43,0.12)' : 'rgba(255,255,255,0.06)', color: v.isFactory ? '#D42B2B' : '#9E9E9E' }}>
                              {v.isFactory ? 'Factory' : 'Upgrade'}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                      The {t.size} is a common {t.use.toLowerCase()} size used across many makes and trims. Bring your vehicle to either Sacramento location and we&apos;ll confirm exact factory fitment and the best options for how you drive.
                    </p>
                  )}
                </div>

                {/* Alternative sizes */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <ArrowLeftRight className="w-5 h-5" style={{ color: '#D42B2B' }} />
                    <h2 className="font-display text-white uppercase" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: 1.1 }}>Comparable &amp; Alternative Sizes</h2>
                  </div>
                  {alternatives.length > 0 ? (
                    <>
                      <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-5">
                        These sizes keep overall diameter within about 3% of the {t.size} (~{t.overallIn.toFixed(1)}&quot;), so they stay close on speedometer reading and clearance. <strong className="text-white">Always confirm fitment before swapping</strong> &mdash; diameter is only part of the story.
                      </p>
                      <div className="space-y-3">
                        {alternatives.map((a) => (
                          <Link
                            key={a.size.slug}
                            href={`/tire-sizes/${a.size.slug}`}
                            className="flex items-center justify-between gap-4 bg-[#1A1A1A] border border-white/5 rounded-xl px-5 py-4 hover:border-[#D42B2B]/50 transition-all group"
                          >
                            <div>
                              <div className="font-heading text-white text-[16px] group-hover:text-[#D42B2B] transition-colors">{a.size.size}</div>
                              <div className="font-body text-[#9E9E9E] text-[13px] mt-0.5">
                                ~{a.size.overallIn.toFixed(1)}&quot; overall &middot; {a.diffPct >= 0 ? '+' : ''}{a.diffPct.toFixed(1)}% vs current &middot;{' '}
                                {a.sameWheel
                                  ? `direct swap on ${t.wheelIn}" wheels`
                                  : `needs ${a.size.wheelIn}" wheels (plus/minus size)`}
                              </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-[#6B7280] group-hover:text-[#D42B2B] transition-colors flex-shrink-0" />
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                      The {t.size} sits in its own size band among the fitments we list. For a precise plus or minus size on your vehicle, our team can calculate the closest safe alternatives in person.
                    </p>
                  )}
                </div>

                {/* Internal links to guides */}
                {related.length > 0 && (
                  <div>
                    <h2 className="font-heading text-[#F2F2F2] text-xl uppercase tracking-wide mb-4">Related Guides</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {related.map((r) => (
                        <Link key={r.slug} href={`/blog/${r.slug}`} className="block p-5 rounded-xl bg-[#1A1A1A] border border-white/5 hover:border-[#D42B2B]/50 transition-all group">
                          <span className="font-heading text-[15px] font-semibold text-[#F2F2F2] group-hover:text-[#D42B2B] transition-colors leading-snug block mb-2">{r.title}</span>
                          <span className="font-nav text-[12px] uppercase tracking-wider text-[#D42B2B]">Read Guide &rarr;</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-lg uppercase tracking-wide mb-4">{t.size} Pricing</h3>
                  <div className="space-y-3 mb-6">
                    {[
                      { label: 'Tires (set of 4)', price: 'From $79' },
                      { label: 'Mounting & Balancing', price: 'Included' },
                      { label: 'Valve Stems & TPMS Reset', price: 'Included' },
                      { label: 'Old Tire Disposal', price: 'Included' },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between items-center py-2 border-b border-white/5">
                        <span className="font-body text-[#AAAAAA] text-[14px]">{row.label}</span>
                        <span className="font-heading text-white text-[14px]">{row.price}</span>
                      </div>
                    ))}
                  </div>
                  <a href={`tel:${BRAND.locations[0].phoneRaw}`} className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center justify-center gap-2 w-full" style={{ textDecoration: 'none' }}>
                    <Phone className="w-4 h-4" /> CHECK STOCK
                  </a>
                  <Link href="/financing" className="btn-ghost font-nav text-[13px] font-bold uppercase tracking-[0.1em] px-8 py-3 rounded inline-block w-full text-center mt-3" style={{ textDecoration: 'none' }}>
                    Finance — No Credit Needed
                  </Link>
                </div>

                <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-lg uppercase tracking-wide mb-4">Why Tire Geeks</h3>
                  <ul className="space-y-3">
                    {['Same-day install on in-stock sizes', 'Computer spin-balancing standard', 'Two Sacramento locations', 'Walk-ins welcome Mon–Sat'].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#D42B2B' }} />
                        <span className="font-body text-white text-[14px]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/tire-sizes" className="block bg-[#1A1A1A] border border-white/5 rounded-xl p-6 text-center hover:border-[#D42B2B]/50 transition-all group">
                  <span className="font-heading text-white text-[15px] uppercase tracking-wide group-hover:text-[#D42B2B] transition-colors">&larr; All Tire Sizes</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ====== BOTH LOCATIONS ====== */}
        <section style={{ background: '#111111', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>Visit Us</span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h2 className="font-display text-white uppercase mb-10" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.1 }}>Get {t.size} Tires in Sacramento</h2>
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
