'use client';

import { BRAND } from '@/lib/constants';

export default function PriceMatchBanner() {
  return (
    <section
      className="w-full px-6 py-16 md:px-20 md:py-20 relative overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 15% 20%, rgba(212,43,43,0.18) 0%, transparent 55%)',
          pointerEvents: 'none',
        }}
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <div
          className="mx-auto mb-6"
          style={{ width: 48, height: 3, background: '#D42B2B' }}
        />

        <h2
          className="font-display uppercase"
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
            color: '#FFFFFF',
            lineHeight: 1.05,
            marginBottom: '20px',
          }}
        >
          WE BEAT <span style={{ color: '#D42B2B' }}>COSTCO&rsquo;S</span> OUT-THE-DOOR PRICE.
        </h2>

        <p
          className="font-body mx-auto mb-8 md:mb-10"
          style={{
            fontSize: 'clamp(16px, 3vw, 20px)',
            color: '#9E9E9E',
            maxWidth: '680px',
            lineHeight: 1.6,
          }}
        >
          No membership. No appointment. No waiting a week for an install bay. Bring us any
          written quote from Costco, America&rsquo;s Tire, or any Sacramento shop &mdash; we&rsquo;ll beat it.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
          {BRAND.locations.map((loc) => (
            <a
              key={loc.name}
              href={`tel:${loc.phoneRaw}`}
              className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded no-underline w-full sm:w-auto text-center"
              style={{ textDecoration: 'none' }}
            >
              {loc.name} &mdash; {loc.phone}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
