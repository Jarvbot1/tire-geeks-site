'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { NAV_LINKS, BRAND } from '@/lib/constants';
import { Facebook, Instagram, Navigation, Ruler } from 'lucide-react';
import Button from '@/components/ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current) return;

    if (isOpen) {
      gsap.to(overlayRef.current, {
        clipPath: 'inset(0 0 0 0)',
        duration: 0.5,
        ease: 'power3.inOut',
      });
      if (linksRef.current) {
        const links = linksRef.current.children;
        gsap.fromTo(
          links,
          { x: 60, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4, stagger: 0.08, delay: 0.2, ease: 'power3.out' }
        );
      }
    } else {
      gsap.to(overlayRef.current, {
        clipPath: 'inset(0 100% 0 0)',
        duration: 0.4,
        ease: 'power3.inOut',
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[102] flex flex-col justify-start px-8 overflow-y-auto"
      style={{
        background: '#0A0A0A',
        clipPath: 'inset(0 100% 0 0)',
        paddingTop: 80,
        paddingBottom: 'calc(80px + env(safe-area-inset-bottom, 0px))',
      }}
    >
      <nav ref={linksRef} className="flex flex-col gap-4 mb-12">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="font-heading text-[32px] font-bold uppercase text-[var(--text-primary)] hover:text-[var(--red)] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="space-y-4">
        {BRAND.locations.map((loc) => (
          <div key={loc.name} className="font-body text-[15px] text-[var(--text-secondary)]">
            <span className="text-[var(--text-primary)] font-medium">{loc.name}:</span>{' '}
            <a href={`tel:${loc.phoneRaw}`} className="text-[var(--text-primary)] hover:text-[var(--red)]">
              {loc.phone}
            </a>
          </div>
        ))}

        <div className="pt-4 space-y-3">
          <Button href={BRAND.locations[0].mapUrl} external variant="ghost" fullWidth>
            <Navigation size={16} />
            GET DIRECTIONS
          </Button>
          <Button href={BRAND.acima.applyUrl} external variant="cta" fullWidth>
            APPLY FOR FINANCING
          </Button>
          <Button href="/blog/tire-size-calculator" variant="outline" fullWidth>
            <Ruler size={16} />
            FIND MY TIRE SIZE
          </Button>
        </div>

        <div className="flex items-center gap-4 pt-4">
          <a
            href={BRAND.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] hover:text-[var(--red)] transition-colors"
          >
            <Facebook size={22} />
          </a>
          <a
            href={BRAND.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] hover:text-[var(--red)] transition-colors"
          >
            <Instagram size={22} />
          </a>
        </div>
      </div>
    </div>
  );
}
