'use client';

import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import { BRAND } from '@/lib/constants';

const MAP_EMBEDS = [
  'https://maps.google.com/maps?q=3020+Florin+Road+Sacramento+CA+95822&t=&z=15&ie=UTF8&iwloc=&output=embed',
  'https://maps.google.com/maps?q=2245+Arden+Way+Sacramento+CA+95825&t=&z=15&ie=UTF8&iwloc=&output=embed',
];

const SERVICES = [
  'Tires',
  'Wheels',
  'Alignment',
  'Suspension',
  'Lift Kits',
  'Lowering Kits',
  'Brakes',
];

const DIRECTIONS_INFO = [
  'Conveniently located off I-5 and Highway 99 — take the Florin Road exit and head east. Our shop is on the south side of Florin Road with easy access from both freeways and ample parking.',
  "Just minutes from US-50 and Business 80 — exit at Arden Way and head west. We're situated on Arden Way between Howe Avenue and Ethan Way, easily accessible from all major Sacramento corridors.",
];

const STOREFRONT_IMAGES = [
  '/images/store-front-florin.jpg',
  '/images/store-front-arden.jpg',
];

const mapFilterStyle = 'none';

export default function LocationsPage() {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section
        className="relative w-full flex items-center justify-center"
        style={{
          height: 300,
          background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(212,43,43,0.08) 0%, transparent 70%)',
          }}
        />
        <div className="relative text-center z-10">
          <span
            className="font-nav text-[13px] font-bold tracking-[0.2em] uppercase mb-4 block"
            style={{ color: BRAND.colors.red }}
          >
            OUR LOCATIONS
          </span>
          <h1
            className="font-display text-[42px] md:text-[56px] leading-[1.05] uppercase"
            style={{ color: BRAND.colors.textPrimary }}
          >
            FIND YOUR NEAREST<br />TIRE GEEKS
          </h1>
        </div>
      </section>

      {/* Location Sections */}
      {BRAND.locations.map((location, index) => (
        <section
          key={location.name}
          style={{
            background: index % 2 === 0 ? '#0A0A0A' : '#111111',
          }}
        >
          <div
            className="mx-auto w-full"
            style={{ maxWidth: 1400, padding: '80px 24px' }}
          >
            {/* Google Maps Embed */}
            <div
              className="w-full overflow-hidden"
              style={{ borderRadius: 12 }}
            >
              <iframe
                src={MAP_EMBEDS[index]}
                width="100%"
                height={400}
                style={{
                  border: 0,
                  borderRadius: 12,
                  filter: mapFilterStyle,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin"
                title={`${location.name} location map`}
              />
            </div>

            {/* Location Detail Card */}
            <div
              className="mt-8"
              style={{
                background: BRAND.colors.bgCard,
                border: `1px solid rgba(255,255,255,0.06)`,
                borderRadius: 12,
                padding: '40px',
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <MapPin size={28} color={BRAND.colors.red} />
                <h2
                  className="font-heading font-bold uppercase"
                  style={{
                    fontSize: 28,
                    color: BRAND.colors.textPrimary,
                  }}
                >
                  {BRAND.name} — {location.name}
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left Column — Info */}
                <div className="space-y-5">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <Navigation size={18} color={BRAND.colors.textSecondary} className="mt-1 flex-shrink-0" />
                    <p
                      className="font-body"
                      style={{ fontSize: 16, color: BRAND.colors.textSecondary }}
                    >
                      {location.address}
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <Phone size={18} color={BRAND.colors.textSecondary} className="flex-shrink-0" />
                    <a
                      href={`tel:${location.phoneRaw}`}
                      className="font-body font-medium transition-colors hover:opacity-80"
                      style={{ fontSize: 18, color: BRAND.colors.textPrimary }}
                    >
                      {location.phone}
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <Clock size={18} color={BRAND.colors.textSecondary} className="mt-1 flex-shrink-0" />
                    <div>
                      <p
                        className="font-body"
                        style={{ fontSize: 16, color: BRAND.colors.textSecondary }}
                      >
                        {location.hours}
                      </p>
                      <p
                        className="font-body"
                        style={{ fontSize: 16, color: BRAND.colors.textMuted }}
                      >
                        Sun: Closed
                      </p>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="pt-2">
                    <h3
                      className="font-heading font-bold uppercase mb-3"
                      style={{ fontSize: 14, color: BRAND.colors.textPrimary, letterSpacing: '0.1em' }}
                    >
                      Services Available
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES.map((service) => (
                        <span
                          key={service}
                          className="font-body text-[13px] px-3 py-1 rounded-full"
                          style={{
                            background: 'rgba(255,255,255,0.05)',
                            color: BRAND.colors.textSecondary,
                            border: '1px solid rgba(255,255,255,0.08)',
                          }}
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Driving Directions */}
                  <div className="pt-2">
                    <h3
                      className="font-heading font-bold uppercase mb-2"
                      style={{ fontSize: 14, color: BRAND.colors.textPrimary, letterSpacing: '0.1em' }}
                    >
                      Driving Directions
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{ fontSize: 15, color: BRAND.colors.textMuted }}
                    >
                      {DIRECTIONS_INFO[index]}
                    </p>
                  </div>
                </div>

                {/* Right Column — Photo Placeholder + CTAs */}
                <div className="flex flex-col gap-6">
                  {/* Storefront Photo */}
                  <img
                    src={STOREFRONT_IMAGES[index]}
                    alt={`Tire Geeks ${location.name} storefront`}
                    className="w-full object-cover"
                    style={{
                      height: 260,
                      borderRadius: 8,
                    }}
                    loading="lazy"
                  />

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="ghost"
                      href={location.mapUrl}
                      external
                      size="md"
                    >
                      <Navigation size={16} />
                      GET DIRECTIONS
                    </Button>
                    <Button
                      variant="cta"
                      href={`tel:${location.phoneRaw}`}
                      external
                      size="md"
                    >
                      <Phone size={16} />
                      CALL NOW
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </>
  );
}
