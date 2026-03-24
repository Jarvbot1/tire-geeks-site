'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, MapPin } from 'lucide-react';
import { BRAND } from '@/lib/constants';

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Financing', href: '/financing' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const SERVICES = [
  'Tires', 'Wheels', 'Alignment', 'Suspension',
  'Lift Kits', 'Lowering Kits', 'Brakes', 'Struts',
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="w-full pb-[calc(64px+env(safe-area-inset-bottom,0px))] lg:pb-0">
      {/* Newsletter strip */}
      <div
        className="w-full py-8 md:py-10 lg:py-12"
        style={{ background: 'var(--bg-secondary)' }}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 md:gap-6">
          <div>
            <h3 className="font-heading text-[22px] md:text-[28px] font-bold uppercase text-[var(--text-primary)]">
              STAY IN THE LOOP
            </h3>
            <p className="font-body text-[14px] md:text-[16px] text-[var(--text-secondary)]">
              Get exclusive deals, new arrivals, and tire tips
            </p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setEmail(''); }}
            className="flex flex-col md:flex-row w-full lg:w-auto gap-2 md:gap-0"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="font-body text-[15px] px-4 py-3 w-full lg:w-[300px] rounded-[6px] md:rounded-l-[6px] md:rounded-r-none h-12"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid #2A2A2A',
                color: 'var(--text-primary)',
              }}
            />
            <button
              type="submit"
              className="font-nav font-bold text-[14px] uppercase tracking-[0.1em] px-6 rounded-[6px] md:rounded-l-none md:rounded-r-[6px] whitespace-nowrap text-white transition-all duration-200 hover:brightness-110 h-12"
              style={{ background: 'linear-gradient(135deg, #1E88C7 0%, #29B6F6 100%)' }}
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div
        className="w-full py-10 md:py-12 lg:py-16"
        style={{ background: 'var(--bg-primary)' }}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {!logoError ? (
                <Image
                  src="/images/tg-icon.png"
                  alt="Tire Geeks"
                  width={36}
                  height={36}
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="font-display text-[24px]" style={{ color: 'var(--red)' }}>TG</span>
              )}
              <span className="font-nav text-[16px] font-bold tracking-[0.05em]">
                <span style={{ color: 'var(--red)' }}>TIRE</span>{' '}
                <span style={{ color: 'var(--blue)' }}>GEEKS</span>
              </span>
            </div>
            <p className="font-nav text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--text-secondary)] mb-3">
              {BRAND.tagline}
            </p>
            <p className="font-body text-[14px] text-[var(--text-secondary)] leading-relaxed mb-5">
              Sacramento&apos;s trusted tire and wheel specialists. Two locations serving the greater Sacramento area with expert service and flexible financing.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={BRAND.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--red)] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--red)] transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              className="font-nav text-[14px] font-semibold uppercase tracking-[0.12em] mb-5"
              style={{ color: 'var(--red)' }}
            >
              QUICK LINKS
            </h4>
            <nav className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-[15px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4
              className="font-nav text-[14px] font-semibold uppercase tracking-[0.12em] mb-5"
              style={{ color: 'var(--blue)' }}
            >
              SERVICES
            </h4>
            <nav className="flex flex-col gap-3">
              {SERVICES.map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="font-body text-[15px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {service}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Locations */}
          <div>
            <h4
              className="font-nav text-[14px] font-semibold uppercase tracking-[0.12em] mb-5"
              style={{ color: 'var(--blue)' }}
            >
              LOCATIONS
            </h4>
            <div className="flex flex-col gap-6">
              {BRAND.locations.map((loc) => (
                <div key={loc.name}>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={16} style={{ color: 'var(--red)' }} />
                    <span className="font-heading text-[16px] font-semibold text-[var(--text-primary)]">
                      {loc.name}
                    </span>
                  </div>
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-body text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors mb-1"
                  >
                    {loc.address}
                  </a>
                  <a
                    href={`tel:${loc.phoneRaw}`}
                    className="block font-body text-[14px] text-[var(--text-primary)] hover:text-[var(--red)] transition-colors mb-1"
                  >
                    {loc.phone}
                  </a>
                  <span className="font-body text-[13px] text-[var(--text-muted)]">
                    {loc.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="w-full py-6"
        style={{
          background: 'var(--bg-primary)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-3 text-center md:text-left">
          <p className="font-body text-[12px] md:text-[14px] text-[var(--text-muted)]">
            &copy; 2026 Tire Geeks. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="font-body text-[12px] md:text-[14px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-[var(--text-muted)]">|</span>
            <Link
              href="#"
              className="font-body text-[12px] md:text-[14px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
