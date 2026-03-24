'use client';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CreditCard, DollarSign, Clock } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import AcimaBanners from './AcimaBanners';
import CountUpNumber from '@/components/animations/CountUpNumber';
import { BRAND } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

const BENEFITS = [
  {
    icon: CreditCard,
    title: 'No Credit Needed',
    desc: "Soft pull only — won't affect your score",
  },
  {
    icon: DollarSign,
    title: 'No Down Payment',
    desc: 'Start shopping today with $0 upfront',
  },
  {
    icon: Clock,
    title: '100 Days No Interest',
    desc: 'Pay off within 100 days at retail price',
  },
];

export default function AcimaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bannersRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 75%',
      once: true,
      onEnter: () => setVisible(true),
    });

    // Animate content in
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            once: true,
          },
        }
      );
    }

    // Stagger benefit cards
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }

    // Banners slide in from right
    if (bannersRef.current) {
      gsap.fromTo(
        bannersRef.current,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bannersRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }

    return () => trigger.kill();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-12 md:py-20"
      style={{
        background: 'linear-gradient(135deg, #0D1117 0%, #141B24 50%, #0D1117 100%)',
      }}
    >
      {/* Left accent border — blue for financing */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: 'linear-gradient(to bottom, var(--blue), var(--blue-light))' }}
      />

      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left column */}
          <div ref={contentRef} className="w-full lg:w-[55%]">
            <SectionHeading
              label="FINANCING"
              title="NO CREDIT? NO PROBLEM."
              className="mb-2 md:mb-4"
            />
            <p className="font-heading text-[16px] md:text-[20px] lg:text-[22px] font-normal text-[var(--text-secondary)] mb-6 md:mb-10">
              Get approved up to{' '}
              <span className="text-[var(--text-primary)] font-semibold">
                {visible ? (
                  <span className="inline-flex">
                    $<CountUpNumber end={5000} duration={2} />
                  </span>
                ) : (
                  '$0'
                )}
              </span>{' '}
              in seconds with Acima Leasing
            </p>

            {/* Benefit cards — horizontal layout on mobile (icon left, text right) */}
            <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-10">
              {BENEFITS.map((benefit) => (
                <div
                  key={benefit.title}
                  className="p-5 md:p-6 rounded-[8px] flex flex-row md:flex-col items-start gap-4 md:gap-0"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div className="w-12 h-12 min-w-[48px] rounded-xl bg-[rgba(212,43,43,0.1)] flex items-center justify-center md:w-auto md:h-auto md:min-w-0 md:rounded-none md:bg-transparent md:mb-3">
                    <benefit.icon
                      size={24}
                      style={{ color: 'var(--red)' }}
                      className="md:w-7 md:h-7"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading text-[16px] md:text-[18px] font-semibold text-[var(--text-primary)] mb-1 md:mb-2">
                      {benefit.title}
                    </h4>
                    <p className="font-body text-[13px] md:text-[14px] text-[var(--text-secondary)] leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mb-6">
              <Button
                href={BRAND.acima.applyUrl}
                external
                variant="cta"
                size="lg"
                fullWidth
                className="md:w-auto h-[56px] md:h-auto"
              >
                APPLY NOW — TAKES 60 SECONDS
              </Button>
            </div>

            {/* Powered by Acima */}
            <p className="font-body text-[13px] text-[var(--text-muted)] flex items-center gap-2">
              Powered by
              <span className="font-heading text-[16px] font-bold text-[var(--text-secondary)]">
                ACIMA
              </span>
            </p>
          </div>

          {/* Right column — Banners (hidden on mobile) */}
          <div ref={bannersRef} className="hidden md:flex w-full lg:w-[45%] items-center">
            <AcimaBanners />
          </div>
        </div>
      </div>
    </section>
  );
}
