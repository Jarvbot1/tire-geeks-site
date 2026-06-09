import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ChevronRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BRAND } from '@/lib/constants';
import { getWheelSizesByCategory } from '@/data/wheelSizes';

export const metadata: Metadata = {
  title: 'Wheel Sizes Sacramento | 15" to 24" Fitment Guide | Tire Geeks',
  description:
    'Compare wheel diameters from 15" to 24" — what each size is good for, the tradeoffs, tire sizes that fit, vehicles that run them, and brands we stock. Custom wheel-and-tire packages at Tire Geeks Sacramento.',
  alternates: { canonical: 'https://tiregeeks.com/wheel-sizes' },
  openGraph: {
    title: 'Wheel Sizes Sacramento | Tire Geeks',
    description: 'From 15" economy to 24" show builds — pick a diameter to see fitment, tradeoffs, tire pairings, and pricing at Tire Geeks Sacramento.',
    url: 'https://tiregeeks.com/wheel-sizes',
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
    { '@type': 'ListItem', position: 2, name: 'Wheel Sizes', item: 'https://tiregeeks.com/wheel-sizes' },
  ],
};

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Wheel Sizes — Tire Geeks Sacramento',
  description: 'Index of wheel diameters from 15 to 24 inches with fitment, tradeoffs, and tire pairings.',
  url: 'https://tiregeeks.com/wheel-sizes',
};

export default function WheelSizesHubPage() {
  const groups = getWheelSizesByCategory();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <Navbar />

      <main>
        <div style={{ background: '#0A0A0A', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-3">
            <nav className="flex items-center gap-2 font-nav text-[12px] uppercase tracking-wider">
              <Link href="/" className="text-[#6B7280] hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-[#6B7280]" />
              <span className="text-[#D42B2B]">Wheel Sizes</span>
            </nav>
          </div>
        </div>

        <section className="relative flex items-center justify-center text-center" style={{ minHeight: '320px', padding: '64px 0', background: 'linear-gradient(to bottom, rgba(10,10,10,0.8), rgba(10,10,10,0.95)), #111' }}>
          <div className="px-6 max-w-[760px]">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>Fitment Guide</span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h1 className="font-display uppercase text-white mb-4" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.05 }}>Wheel Sizes</h1>
            <p className="font-body text-[#AAAAAA] text-lg">
              Bigger isn&apos;t always better. Each diameter trades ride comfort, looks, cost, and capability differently. Pick a size to see what it&apos;s good for, which tires fit, which vehicles run it, and what we stock.
            </p>
          </div>
        </section>

        <section style={{ background: '#0A0A0A', padding: '72px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 space-y-14">
            {groups.map((group) => (
              <div key={group.category}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
                  <h2 className="font-display text-white uppercase" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: 1.1 }}>{group.category}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {group.sizes.map((w) => (
                    <Link key={w.slug} href={`/wheel-sizes/${w.slug}`} className="flex items-start justify-between gap-4 bg-[#1A1A1A] border border-white/5 rounded-xl px-6 py-5 hover:border-[#D42B2B]/50 transition-all group">
                      <div>
                        <div className="font-display text-white text-2xl group-hover:text-[#D42B2B] transition-colors mb-1">{w.label}</div>
                        <div className="font-body text-[#9E9E9E] text-[14px] leading-snug">{w.tagline}</div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-[#6B7280] group-hover:text-[#D42B2B] transition-colors flex-shrink-0 mt-1" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: '#111111', padding: '72px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
            <h2 className="font-display text-white uppercase mb-4" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.1 }}>Build a Wheel &amp; Tire Package</h2>
            <p className="font-body text-[#AAAAAA] text-[16px] max-w-[640px] mx-auto mb-8">
              We build complete wheel-and-tire packages for every diameter, mounted and balanced, with no-credit-needed financing. Tell us your vehicle and the look you&apos;re after and we&apos;ll dial in the fitment.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href={`tel:${BRAND.locations[0].phoneRaw}`} className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center justify-center gap-2" style={{ textDecoration: 'none' }}>
                <Phone className="w-4 h-4" /> {BRAND.locations[0].phone}
              </a>
              <Link href="/services/wheels-sacramento" className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-block" style={{ textDecoration: 'none' }}>Wheel Services</Link>
              <Link href="/tire-sizes" className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-block" style={{ textDecoration: 'none' }}>Tire Sizes</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
