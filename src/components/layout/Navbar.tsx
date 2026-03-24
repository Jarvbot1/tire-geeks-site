'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Phone, MapPin, DollarSign, Menu, Grid3X3, Ruler } from 'lucide-react';
import { NAV_LINKS, BRAND } from '@/lib/constants';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const line1 = useRef<HTMLSpanElement>(null);
  const line2 = useRef<HTMLSpanElement>(null);
  const line3 = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      const next = !prev;
      if (next) {
        gsap.to(line1.current, { rotate: 45, y: 8, duration: 0.3, ease: 'power2.inOut' });
        gsap.to(line2.current, { opacity: 0, duration: 0.2 });
        gsap.to(line3.current, { rotate: -45, y: -8, duration: 0.3, ease: 'power2.inOut' });
      } else {
        gsap.to(line1.current, { rotate: 0, y: 0, duration: 0.3, ease: 'power2.inOut' });
        gsap.to(line2.current, { opacity: 1, duration: 0.2, delay: 0.1 });
        gsap.to(line3.current, { rotate: 0, y: 0, duration: 0.3, ease: 'power2.inOut' });
      }
      return next;
    });
  }, []);

  return (
    <>
      {/* Red accent line at the very top */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[104]" style={{ background: 'var(--red)' }} />

      <nav
        ref={navRef}
        role="navigation"
        aria-label="Main navigation"
        className="fixed top-[2px] left-0 right-0 z-[103] transition-all duration-300 ease-out"
        style={{
          height: isMobile ? 64 : (scrolled ? 72 : 88),
          background: isMobile
            ? 'rgba(10,10,10,0.95)'
            : (scrolled ? 'rgba(10,10,10,0.92)' : 'transparent'),
          backdropFilter: isMobile
            ? 'blur(12px)'
            : (scrolled ? 'blur(16px)' : 'none'),
          WebkitBackdropFilter: isMobile
            ? 'blur(12px)'
            : (scrolled ? 'blur(16px)' : 'none'),
          borderBottom: isMobile
            ? '1px solid rgba(255,255,255,0.06)'
            : (scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent'),
        }}
      >
        <div className="max-w-[1600px] mx-auto h-full flex items-center justify-between px-4 md:px-6 lg:px-8 xl:px-12">
          {/* Left: Logo — icon only on mobile, icon+wordmark on desktop */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            {!logoError ? (
              <Image
                src="/images/tg-icon.png"
                alt="Tire Geeks"
                width={isMobile ? 36 : (scrolled ? 40 : 48)}
                height={isMobile ? 36 : (scrolled ? 40 : 48)}
                className="transition-all duration-300"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="font-display text-[34px]" style={{ color: 'var(--red)' }}>
                TG
              </span>
            )}
            <span
              className={`hidden lg:inline font-nav font-bold tracking-[0.05em] transition-all duration-300 whitespace-nowrap ${
                scrolled ? 'text-[18px]' : 'text-[22px]'
              }`}
            >
              <span style={{ color: '#D42B2B' }}>TIRE</span>{' '}
              <span style={{ color: '#1E88C7' }}>GEEKS</span>
            </span>
          </Link>

          {/* Center: Desktop nav links — can shrink slightly */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-shrink">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-nav text-[13px] xl:text-[15px] font-semibold uppercase tracking-[0.1em] text-[#B0B0B0] hover:text-white relative group transition-colors whitespace-nowrap"
              >
                {link.label}
                <span
                  className="absolute -bottom-2 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-300 rounded-full"
                  style={{ background: 'var(--red)' }}
                />
              </Link>
            ))}
          </div>

          {/* Right: Desktop actions — never wraps */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            {/* Phone — icon only on smaller screens, full number on xl+ */}
            <a
              href={`tel:${BRAND.locations[0].phoneRaw}`}
              className="flex items-center gap-2 text-white hover:text-[#D42B2B] transition-colors whitespace-nowrap"
            >
              <Phone size={18} style={{ color: '#D42B2B' }} />
              <span className="hidden xl:inline font-nav text-[15px] font-semibold">
                {BRAND.locations[0].phone}
              </span>
            </a>

            {/* Ghost button — GET DIRECTIONS */}
            <Link
              href="/locations"
              className="font-nav text-[13px] xl:text-[14px] font-bold tracking-[0.08em] uppercase
                border-2 border-white/30 hover:border-white text-white
                px-4 xl:px-6 py-2.5 rounded whitespace-nowrap transition-all h-[42px]
                flex items-center justify-center"
            >
              <span className="hidden xl:inline">GET DIRECTIONS</span>
              <span className="xl:hidden">DIRECTIONS</span>
            </Link>

            {/* CTA button — APPLY FOR FINANCING */}
            <Link
              href="/financing"
              className="font-nav text-[13px] xl:text-[14px] font-bold tracking-[0.08em] uppercase
                bg-gradient-to-r from-[#D42B2B] to-[#FF1744] text-white
                px-4 xl:px-6 py-2.5 rounded whitespace-nowrap transition-all h-[42px]
                flex items-center justify-center hover:shadow-[0_0_20px_rgba(212,43,43,0.4)]"
            >
              <span className="hidden xl:inline">APPLY FOR FINANCING</span>
              <span className="xl:hidden">FINANCING</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            onClick={toggleMenu}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] min-h-[44px] min-w-[44px]"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span ref={line1} className="block w-6 h-[2px] bg-white origin-center" />
            <span ref={line2} className="block w-6 h-[2px] bg-white origin-center" />
            <span ref={line3} className="block w-6 h-[2px] bg-white origin-center" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={menuOpen} onClose={() => {
        setMenuOpen(false);
        gsap.to(line1.current, { rotate: 0, y: 0, duration: 0.3, ease: 'power2.inOut' });
        gsap.to(line2.current, { opacity: 1, duration: 0.2, delay: 0.1 });
        gsap.to(line3.current, { rotate: 0, y: 0, duration: 0.3, ease: 'power2.inOut' });
      }} />

      {/* Mobile bottom bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-[103] lg:hidden flex items-center justify-around"
        style={{
          height: 64,
          background: 'rgba(17,17,17,0.95)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        }}
      >
        <a
          href={`tel:${BRAND.locations[0].phoneRaw}`}
          className="flex flex-col items-center gap-1 text-[var(--text-secondary)] active:text-[var(--red)] transition-colors min-w-[64px] min-h-[44px] justify-center py-2 px-3"
        >
          <Phone size={20} />
          <span className="text-[10px] font-nav font-semibold uppercase tracking-[0.05em]">Call</span>
        </a>
        <a
          href={BRAND.locations[0].mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-[var(--text-secondary)] active:text-[var(--red)] transition-colors min-w-[64px] min-h-[44px] justify-center py-2 px-3"
        >
          <MapPin size={20} />
          <span className="text-[10px] font-nav font-semibold uppercase tracking-[0.05em]">Directions</span>
        </a>
        <a
          href={BRAND.acima.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-[var(--blue)] min-w-[64px] min-h-[44px] justify-center py-2 px-3"
        >
          <DollarSign size={20} />
          <span className="text-[10px] font-nav font-semibold uppercase tracking-[0.05em]">Financing</span>
        </a>
        <Link
          href="/blog/tire-size-calculator"
          className="flex flex-col items-center gap-1 text-[var(--text-secondary)] active:text-[var(--red)] transition-colors min-w-[64px] min-h-[44px] justify-center py-2 px-3"
        >
          <Ruler size={20} />
          <span className="text-[10px] font-nav font-semibold uppercase tracking-[0.05em]">Tire Size</span>
        </Link>
        <button
          onClick={toggleMenu}
          className="flex flex-col items-center gap-1 text-[var(--text-secondary)] active:text-[var(--red)] transition-colors min-w-[64px] min-h-[44px] justify-center py-2 px-3"
        >
          <Grid3X3 size={20} />
          <span className="text-[10px] font-nav font-semibold uppercase tracking-[0.05em]">Menu</span>
        </button>
      </div>
    </>
  );
}
