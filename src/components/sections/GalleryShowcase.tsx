'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '@/components/ui/SectionHeading';
import { getFeaturedBuilds } from '@/data/galleryBuilds';

gsap.registerPlugin(ScrollTrigger);

export default function GalleryShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.children;
      if (cards) {
        gsap.from(cards, {
          scale: 0.95,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 md:py-16 lg:py-24"
      style={{ background: '#111111' }}
    >
      <div className="max-w-[1400px] mx-auto px-2 md:px-6">
        <div className="px-2 md:px-0">
          <SectionHeading
            label="OUR WORK"
            title="BUILT BY GEEKS. DRIVEN BY YOU."
          />
          <p className="font-body text-[15px] md:text-[18px] text-[var(--text-secondary)] mt-4 mb-6 md:mb-12">
            Check out some of our latest builds. Real customers, real rides.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4"
        >
          {getFeaturedBuilds().map((build) => (
            <Link
              href={`/gallery/${build.slug}`}
              key={build.id}
              className="gallery-card relative rounded-lg overflow-hidden group cursor-pointer aspect-square md:aspect-auto"
              style={{ minHeight: undefined }}
            >
              {/* Image */}
              <img
                src={build.images[0]}
                alt={build.vehicle}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-3 md:p-5 transition-all duration-400"
                style={{
                  background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.4) 40%, transparent 65%)',
                }}
              >
                <h3 className="font-heading text-[13px] md:text-[17px] font-semibold text-white uppercase tracking-wide">
                  {build.shortName}
                </h3>
                <p className="font-body text-[11px] md:text-[12px] text-[#B0B0B0] mt-1 group-hover:text-white/90 transition-colors duration-300 hidden md:block">
                  {build.wheels} | {build.suspension}
                </p>
                <span
                  className="font-nav text-[12px] font-semibold uppercase mt-2 text-[#D42B2B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:inline-block"
                >
                  VIEW BUILD →
                </span>
              </div>

              {/* Blue tint overlay on hover only */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(30, 136, 199, 0.7) 0%, rgba(30, 136, 199, 0.2) 50%, transparent 100%)',
                }}
              />
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-8 md:mt-10">
          <Link
            href="/gallery"
            className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-3 rounded"
          >
            VIEW ALL BUILDS
          </Link>
        </div>
      </div>
    </section>
  );
}
