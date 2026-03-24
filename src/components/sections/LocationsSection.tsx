'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Clock } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { BRAND } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

const MAP_URLS = [
  'https://maps.google.com/maps?q=3020+Florin+Road+Sacramento+CA+95822&t=&z=15&ie=UTF8&iwloc=&output=embed',
  'https://maps.google.com/maps?q=2245+Arden+Way+Sacramento+CA+95825&t=&z=15&ie=UTF8&iwloc=&output=embed',
];

export default function LocationsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.loc-map', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.loc-map', start: 'top 85%' },
      });
      gsap.from('.loc-card-0', {
        x: -40,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.loc-card-0', start: 'top 85%' },
      });
      gsap.from('.loc-card-1', {
        x: 40,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.loc-card-1', start: 'top 85%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 lg:py-24"
      style={{ background: '#111111' }}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <SectionHeading
          label="VISIT US"
          title="TWO LOCATIONS. ZERO EXCUSES."
        />
        <p className="font-body text-[15px] md:text-[18px] text-[var(--text-secondary)] mt-4 mb-8 md:mb-12">
          Walk in Monday through Saturday, 9AM to 7PM. No appointment needed.
        </p>

        {/* Maps — shorter on mobile, full bleed */}
        <div className="loc-map grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8 md:mb-10 -mx-4 md:mx-0">
          {MAP_URLS.map((url, i) => (
            <div
              key={i}
              className="md:rounded-lg overflow-hidden"
              style={{
                border: '2px solid rgba(30, 136, 199, 0.3)',
                boxShadow: '0 0 20px rgba(30, 136, 199, 0.1)',
              }}
            >
              <iframe
                src={url}
                width="100%"
                height={220}
                className="md:h-[300px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title={`${BRAND.locations[i].name} map`}
              />
            </div>
          ))}
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {BRAND.locations.map((loc, i) => (
            <div
              key={loc.name}
              className={`loc-card-${i} p-6 md:p-8 rounded-xl flex flex-col`}
              style={{
                background: '#1A1A1A',
                border: '1px solid rgba(30, 136, 199, 0.15)',
              }}
            >
              <div className="flex items-center gap-3 mb-4 md:mb-5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(30, 136, 199, 0.15)' }}
                >
                  <MapPin size={20} color="#1E88C7" />
                </div>
                <h3 className="font-heading text-[18px] md:text-[22px] font-bold text-white uppercase">
                  {loc.name}
                </h3>
              </div>
              <p className="font-body text-[14px] md:text-[16px] text-[#D4D4D4] mb-3">
                {loc.address}
              </p>
              <a
                href={`tel:${loc.phoneRaw}`}
                className="flex items-center gap-2 font-body text-[18px] font-semibold text-white hover:text-[#1E88C7] transition-colors mb-3"
              >
                <Phone size={18} color="#1E88C7" />
                {loc.phone}
              </a>
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <Clock size={16} color="#1E88C7" />
                <span className="font-body text-[14px] md:text-[15px] text-[var(--text-secondary)]">
                  {loc.hours} | Sun: Closed
                </span>
              </div>
              <p className="font-body text-[13px] text-[var(--text-muted)] mb-4 md:mb-6">
                Tires &bull; Wheels &bull; Alignment &bull; Suspension &bull; Lifts &bull; Lowering
              </p>
              <div className="flex flex-col gap-2 md:flex-row md:gap-3 mt-auto">
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-nav text-[13px] font-bold uppercase tracking-[0.08em] px-6 py-3 rounded flex items-center justify-center gap-2 transition-all duration-300 w-full md:w-auto h-12 md:h-auto"
                  style={{
                    border: '1px solid rgba(30, 136, 199, 0.4)',
                    color: '#1E88C7',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(30, 136, 199, 0.15)';
                    e.currentTarget.style.borderColor = '#1E88C7';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(30, 136, 199, 0.4)';
                  }}
                >
                  <MapPin size={16} />
                  GET DIRECTIONS
                </a>
                <a
                  href={`tel:${loc.phoneRaw}`}
                  className="btn-cta font-nav text-[13px] font-bold uppercase tracking-[0.08em] px-6 py-3 rounded flex items-center justify-center gap-2 no-underline w-full md:w-auto h-12 md:h-auto"
                  style={{ textDecoration: 'none' }}
                >
                  <Phone size={16} />
                  CALL NOW
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
