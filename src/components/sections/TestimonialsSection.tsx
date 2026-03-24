'use client';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import 'swiper/css';
import 'swiper/css/pagination';

const TESTIMONIALS = [
  {
    quote: 'Best tire shop in Sacramento hands down. Got a full set of 33s mounted on my F-150 in under an hour. Prices beat everyone else and the guys are super knowledgeable.',
    name: 'Marcus T.',
    vehicle: '2023 Ford F-150',
  },
  {
    quote: 'The financing made it so easy — walked in, got approved through Acima in literally 2 minutes, and drove out with brand new wheels and tires. No credit check, no hassle.',
    name: 'Jennifer R.',
    vehicle: '2024 Nissan Altima',
  },
  {
    quote: 'These guys know their fitment. I was worried about rubbing with my offset but they dialed it in perfectly. My Silverado looks insane now.',
    name: 'David L.',
    vehicle: '2022 Chevrolet Silverado',
  },
  {
    quote: 'Came in for an alignment and they showed me exactly what was off. Fast, honest, and way cheaper than the dealer. Already told all my friends.',
    name: 'Sarah M.',
    vehicle: '2021 Toyota Camry',
  },
  {
    quote: 'Got my Tacoma lifted with new wheels and tires — the whole package. They handled everything and it came out perfect. Can\'t recommend enough.',
    name: 'Chris P.',
    vehicle: '2023 Toyota Tacoma',
  },
  {
    quote: 'I\'ve been to a lot of tire shops and these guys are different. They actually care about getting it right. Fair prices and fast service.',
    name: 'Mike D.',
    vehicle: '2024 RAM 2500',
  },
];

export default function TestimonialsSection() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section
      className="w-full py-16 lg:py-24"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <SectionHeading
          label="TESTIMONIALS"
          title="WHAT OUR CUSTOMERS SAY"
        />

        <div className="mt-8 md:mt-12 relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={16}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            pagination={{
              clickable: true,
              bulletClass: 'testimonial-bullet',
              bulletActiveClass: 'testimonial-bullet-active',
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 12 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="pb-14"
          >
            {TESTIMONIALS.map((t, i) => (
              <SwiperSlide key={i} style={{ height: 'auto' }}>
                <div
                  className="p-6 md:p-8 rounded-xl flex flex-col"
                  style={{
                    background: '#141414',
                    border: '1px solid rgba(255,255,255,0.06)',
                    minHeight: 220,
                    height: '100%',
                  }}
                >
                  <div className="flex gap-0.5 md:gap-1 mb-3 md:mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} fill="#D42B2B" color="#D42B2B" className="md:w-4 md:h-4" />
                    ))}
                  </div>
                  <p className="font-body text-[15px] md:text-[16px] text-[#D4D4D4] italic leading-[1.7] mb-4 md:mb-6 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-auto">
                    <span className="font-heading text-[14px] md:text-[16px] font-semibold text-white block">
                      {t.name}
                    </span>
                    <span className="font-body text-[12px] md:text-[13px] text-[var(--text-secondary)]">
                      {t.vehicle}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation arrows — hidden on mobile, visible on md+ */}
          <div className="hidden md:flex items-center justify-center gap-4 mt-6">
            <button
              ref={prevRef}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.15)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#D42B2B';
                e.currentTarget.style.color = '#D42B2B';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.color = '';
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              ref={nextRef}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.15)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#D42B2B';
                e.currentTarget.style.color = '#D42B2B';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.color = '';
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .testimonial-bullet {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #2A2A2A;
          margin: 0 4px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .testimonial-bullet-active {
          background: #D42B2B !important;
        }
      `}</style>
    </section>
  );
}
