import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ChevronRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BRAND } from '@/lib/constants';
import { getTireSizesByUse } from '@/data/tireSizes';

export const metadata: Metadata = {
  title: 'Tire Sizes Sacramento | Find Your Size, Specs & Fitment | Tire Geeks',
  description:
    'Browse common tire sizes for cars, SUVs, and trucks. Each size page decodes the dimensions, lists vehicles that use it, shows safe alternative sizes, and prices at Tire Geeks Sacramento.',
  alternates: { canonical: 'https://tiregeeks.com/tire-sizes' },
  openGraph: {
    title: 'Tire Sizes Sacramento | Tire Geeks',
    description: 'Decode any tire size, see which vehicles use it, find safe alternatives, and get pricing at Tire Geeks Sacramento.',
    url: 'https://tiregeeks.com/tire-sizes',
    siteName: 'Tire Geeks',
    type: 'website',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tiregeeks.com' },
    { '@type': 'ListItem', position: 2, name: 'Tire Sizes', item: 'https://tiregeeks.com/tire-sizes' },
  ],
};

export default function TireSizesHubPage() {
  const groups = getTireSizesByUse();

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Tire Sizes — Tire Geeks Sacramento',
    description: 'Index of common car, SUV, and truck tire sizes with decoded specs and fitment.',
    url: 'https://tiregeeks.com/tire-sizes',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <Navbar />

      <main>
        {/* Breadcrumb */}
        <div style={{ background: '#0A0A0A', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-3">
            <nav className="flex items-center gap-2 font-nav text-[12px] uppercase tracking-wider">
              <Link href="/" className="text-[#6B7280] hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-[#6B7280]" />
              <span className="text-[#D42B2B]">Tire Sizes</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="relative flex items-center justify-center text-center" style={{ minHeight: '320px', padding: '64px 0', background: 'linear-gradient(to bottom, rgba(10,10,10,0.8), rgba(10,10,10,0.95)), #111' }}>
          <div className="px-6 max-w-[760px]">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>Fitment Guide</span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h1 className="font-display uppercase text-white mb-4" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.05 }}>Tire Sizes</h1>
            <p className="font-body text-[#AAAAAA] text-lg">
              Pick your size to decode exactly what it means, see which vehicles run it, compare safe alternative sizes, and get Sacramento pricing. Not sure what you need? Call us and we&apos;ll confirm your fitment.
            </p>
          </div>
        </section>

        {/* Groups */}
        <section style={{ background: '#0A0A0A', padding: '72px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 space-y-14">
            {groups.map((group) => (
              <div key={group.use}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
                  <h2 className="font-display text-white uppercase" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: 1.1 }}>{group.use}</h2>
                  <span className="font-nav text-[12px] text-[#6B7280] uppercase tracking-wider">{group.sizes.length} sizes</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {group.sizes.map((t) => (
                    <Link
                      key={t.slug}
                      href={`/tire-sizes/${t.slug}`}
                      className="flex items-center justify-between gap-2 bg-[#1A1A1A] border border-white/5 rounded-xl px-4 py-4 hover:border-[#D42B2B]/50 transition-all group"
                    >
                      <div>
                        <div className="font-heading text-white text-[15px] group-hover:text-[#D42B2B] transition-colors">{t.size}</div>
                        <div className="font-body text-[#6B7280] text-[12px] mt-0.5">~{t.overallIn.toFixed(1)}&quot; · {t.wheelIn}&quot; wheel</div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#6B7280] group-hover:text-[#D42B2B] transition-colors flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#111111', padding: '72px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
            <h2 className="font-display text-white uppercase mb-4" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.1 }}>Can&apos;t Find Your Size?</h2>
            <p className="font-body text-[#AAAAAA] text-[16px] max-w-[640px] mx-auto mb-8">
              We stock and order hundreds of sizes for every car, truck, and SUV. Tires from $79 per set of four installed, with no-credit-needed financing. Call either Sacramento location and we&apos;ll match the right tire to your vehicle and budget.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href={`tel:${BRAND.locations[0].phoneRaw}`} className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center justify-center gap-2" style={{ textDecoration: 'none' }}>
                <Phone className="w-4 h-4" /> {BRAND.locations[0].phone}
              </a>
              <Link href="/services/tires-sacramento" className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-block" style={{ textDecoration: 'none' }}>Tire Services</Link>
              <Link href="/financing" className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-block" style={{ textDecoration: 'none' }}>Financing</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
