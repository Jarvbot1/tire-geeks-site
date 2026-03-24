'use client';
import { useRef, useEffect, useState } from 'react';
import { Star, MapPin, Wrench, Clock, Shield } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CountUpNumber from '@/components/animations/CountUpNumber';

gsap.registerPlugin(ScrollTrigger);

const TRUST_ITEMS = [
  { icon: Star, value: '4.9', label: 'Google Rating', isNumber: true, end: 4.9, decimals: 1, color: 'var(--red)' },
  { icon: MapPin, value: '2', label: 'Sacramento Locations', isNumber: true, end: 2, decimals: 0, color: 'var(--blue)' },
  { icon: Wrench, value: '1000+', label: 'Vehicles Served', isNumber: true, end: 1000, suffix: '+', decimals: 0, color: 'var(--red)' },
  { icon: Clock, value: '9-7', label: 'Mon–Sat, No Appt Needed', isNumber: false, color: 'var(--blue)' },
  { icon: Shield, value: '100%', label: 'Financing Available', isNumber: true, end: 100, suffix: '%', decimals: 0, color: 'var(--blue)' },
];

export default function TrustStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 85%',
      onEnter: () => setVisible(true),
      once: true,
    });
    return () => trigger.kill();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-6 lg:py-0 lg:h-[80px]"
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-full">
        {/* Desktop: horizontal row */}
        <div className="hidden lg:flex items-center justify-center h-full gap-0">
          {TRUST_ITEMS.map((item, i) => (
            <div key={item.label} className="flex items-center">
              {i > 0 && (
                <div className="w-px h-10 mx-8" style={{ background: 'rgba(255,255,255,0.1)' }} />
              )}
              <div className="flex items-center gap-3">
                <item.icon size={22} style={{ color: item.color }} />
                <div>
                  <div className="font-display text-[36px] leading-none text-[var(--text-primary)]">
                    {item.isNumber && visible ? (
                      <CountUpNumber end={item.end!} decimals={item.decimals} suffix={item.suffix} />
                    ) : (
                      item.value
                    )}
                  </div>
                  <div className="font-body text-[12px] text-[var(--text-secondary)]">
                    {item.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: compact 2x2 grid + center last */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2.5 ${
                item.label === 'Financing Available' ? 'col-span-2 justify-center' : ''
              }`}
            >
              <item.icon size={18} style={{ color: item.color }} className="flex-shrink-0" />
              <div>
                <div className="font-display text-[22px] md:text-[28px] leading-none text-[var(--text-primary)]">
                  {item.isNumber && visible ? (
                    <CountUpNumber end={item.end!} decimals={item.decimals} suffix={item.suffix} />
                  ) : (
                    item.value
                  )}
                </div>
                <div className="font-body text-[10px] md:text-[11px] text-[var(--text-secondary)]">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
