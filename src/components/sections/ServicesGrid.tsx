'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

/* ── Custom SVG icons per the user's specs ── */

// Tires: Off-road truck with big tire
const TiresIcon = () => (
  <svg viewBox="0 0 80 56" fill="none" className="w-full h-full">
    {/* Truck body */}
    <path d="M12 36 L12 22 L30 22 L30 16 L56 16 L60 22 L68 22 L68 36" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
    {/* Cab window */}
    <path d="M32 22 L32 18 L52 18 L55 22" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
    {/* Bed */}
    <rect x="14" y="23" width="16" height="11" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
    {/* Wheels - big off-road */}
    <circle cx="22" cy="40" r="8" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="22" cy="40" r="3" fill="currentColor" />
    <circle cx="58" cy="40" r="8" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="58" cy="40" r="3" fill="currentColor" />
    {/* Tire treads */}
    <circle cx="22" cy="40" r="6" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <circle cx="58" cy="40" r="6" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    {/* Ground */}
    <line x1="4" y1="48" x2="76" y2="48" stroke="currentColor" strokeWidth="1" opacity="0.2" />
  </svg>
);

// Custom Wheels: Sports car with prominent wheel
const WheelsIcon = () => (
  <svg viewBox="0 0 80 56" fill="none" className="w-full h-full">
    {/* Sleek sports car body */}
    <path d="M8 36 L14 36 L18 26 L28 22 L52 22 L62 26 L72 30 L72 36" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
    {/* Roof line */}
    <path d="M28 22 L32 16 L48 16 L52 22" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
    {/* Wheels with spokes */}
    <circle cx="24" cy="38" r="7" stroke="currentColor" strokeWidth="2" />
    <circle cx="24" cy="38" r="3" fill="currentColor" />
    {[0, 60, 120, 180, 240, 300].map((a) => (
      <line key={a} x1={24 + 3 * Math.cos(a * Math.PI / 180)} y1={38 + 3 * Math.sin(a * Math.PI / 180)} x2={24 + 6.5 * Math.cos(a * Math.PI / 180)} y2={38 + 6.5 * Math.sin(a * Math.PI / 180)} stroke="currentColor" strokeWidth="1.5" />
    ))}
    <circle cx="60" cy="38" r="7" stroke="currentColor" strokeWidth="2" />
    <circle cx="60" cy="38" r="3" fill="currentColor" />
    {[0, 60, 120, 180, 240, 300].map((a) => (
      <line key={a} x1={60 + 3 * Math.cos(a * Math.PI / 180)} y1={38 + 3 * Math.sin(a * Math.PI / 180)} x2={60 + 6.5 * Math.cos(a * Math.PI / 180)} y2={38 + 6.5 * Math.sin(a * Math.PI / 180)} stroke="currentColor" strokeWidth="1.5" />
    ))}
    {/* Ground */}
    <line x1="4" y1="46" x2="76" y2="46" stroke="currentColor" strokeWidth="1" opacity="0.2" />
  </svg>
);

// Alignment: Sedan on a lift
const AlignmentIcon = () => (
  <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
    {/* Lift platform */}
    <rect x="10" y="32" width="60" height="3" rx="1.5" fill="currentColor" opacity="0.4" />
    {/* Lift posts */}
    <rect x="14" y="35" width="4" height="20" rx="1" fill="currentColor" opacity="0.3" />
    <rect x="62" y="35" width="4" height="20" rx="1" fill="currentColor" opacity="0.3" />
    {/* Lift base */}
    <rect x="10" y="53" width="60" height="3" rx="1" fill="currentColor" opacity="0.2" />
    {/* Sedan body on lift */}
    <path d="M18 30 L22 30 L26 22 L34 18 L50 18 L56 22 L62 26 L62 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
    {/* Roof */}
    <path d="M34 18 L36 12 L48 12 L50 18" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
    {/* Wheels (floating - on lift) */}
    <circle cx="28" cy="31" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="28" cy="31" r="1.5" fill="currentColor" />
    <circle cx="56" cy="31" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="56" cy="31" r="1.5" fill="currentColor" />
    {/* Alignment lines */}
    <line x1="20" y1="31" x2="12" y2="31" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
    <line x1="64" y1="31" x2="72" y2="31" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
  </svg>
);

// Lift Kits: Truck with big UP arrows underneath pointing up
const LiftIcon = () => (
  <svg viewBox="0 0 80 64" fill="none" className="w-full h-full">
    {/* Truck body - lifted high */}
    <path d="M14 28 L14 16 L30 16 L30 10 L54 10 L58 16 L66 16 L66 28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
    {/* Cab window */}
    <path d="M32 16 L32 12 L50 12 L53 16" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
    {/* Wheels */}
    <circle cx="24" cy="32" r="6" stroke="currentColor" strokeWidth="2" />
    <circle cx="24" cy="32" r="2.5" fill="currentColor" />
    <circle cx="56" cy="32" r="6" stroke="currentColor" strokeWidth="2" />
    <circle cx="56" cy="32" r="2.5" fill="currentColor" />
    {/* BIG up arrows underneath truck */}
    <polygon points="28,62 40,44 52,62" fill="currentColor" opacity="0.8" />
    <rect x="36" y="44" width="8" height="6" fill="currentColor" opacity="0.6" />
    {/* Second arrow */}
    <polygon points="10,58 18,46 26,58" fill="currentColor" opacity="0.5" />
    <polygon points="54,58 62,46 70,58" fill="currentColor" opacity="0.5" />
  </svg>
);

// Lowering Kits: Sports car with big DOWN arrows overhead pointing down
const LoweringIcon = () => (
  <svg viewBox="0 0 80 64" fill="none" className="w-full h-full">
    {/* BIG down arrows ABOVE the car */}
    <polygon points="28,2 40,20 52,2" fill="currentColor" opacity="0.8" />
    <rect x="36" y="14" width="8" height="6" fill="currentColor" opacity="0.6" />
    {/* Side arrows */}
    <polygon points="10,6 18,18 26,6" fill="currentColor" opacity="0.5" />
    <polygon points="54,6 62,18 70,6" fill="currentColor" opacity="0.5" />
    {/* Low sports car body */}
    <path d="M10 48 L16 48 L20 40 L28 36 L52 36 L62 40 L70 44 L70 48" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
    {/* Low roof */}
    <path d="M28 36 L32 30 L48 30 L52 36" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
    {/* Low-profile wheels */}
    <circle cx="24" cy="50" r="5" stroke="currentColor" strokeWidth="2" />
    <circle cx="24" cy="50" r="2" fill="currentColor" />
    <circle cx="60" cy="50" r="5" stroke="currentColor" strokeWidth="2" />
    <circle cx="60" cy="50" r="2" fill="currentColor" />
    {/* Ground */}
    <line x1="4" y1="56" x2="76" y2="56" stroke="currentColor" strokeWidth="1" opacity="0.2" />
  </svg>
);

// Brakes: Brake caliper + rotor (sports car style)
const BrakesIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    {/* Brake rotor disc */}
    <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    {/* Rotor ventilation slots */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
      <line
        key={a}
        x1={32 + 12 * Math.cos(a * Math.PI / 180)}
        y1={32 + 12 * Math.sin(a * Math.PI / 180)}
        x2={32 + 22 * Math.cos(a * Math.PI / 180)}
        y2={32 + 22 * Math.sin(a * Math.PI / 180)}
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.2"
      />
    ))}
    {/* Center hub */}
    <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="32" cy="32" r="3" fill="currentColor" />
    {/* Hub bolts */}
    {[0, 72, 144, 216, 288].map((a) => (
      <circle
        key={a}
        cx={32 + 5.5 * Math.cos(a * Math.PI / 180)}
        cy={32 + 5.5 * Math.sin(a * Math.PI / 180)}
        r="1"
        fill="currentColor"
        opacity="0.6"
      />
    ))}
    {/* Brake caliper - thick pad gripping the rotor */}
    <path d="M4 20 L4 44 L14 44 L14 40 L10 38 L10 26 L14 24 L14 20 Z" fill="currentColor" opacity="0.7" />
    <rect x="6" y="24" width="4" height="16" rx="1" fill="currentColor" opacity="0.9" />
  </svg>
);

// Windshield Wipers: Dashboard wiper symbol (like on a car stalk)
const WipersIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    {/* Windshield shape */}
    <path d="M8 48 L20 12 Q32 6 44 12 L56 48" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.05" strokeLinejoin="round" />
    {/* Wiper arc lines (spray pattern) */}
    <path d="M18 40 Q32 16 46 40" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
    <path d="M22 36 Q32 20 42 36" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
    {/* Wiper blade */}
    <line x1="32" y1="48" x2="20" y2="22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    {/* Wiper arm pivot */}
    <circle cx="32" cy="48" r="3" fill="currentColor" />
    {/* Water drops */}
    <circle cx="40" cy="24" r="1.5" fill="currentColor" opacity="0.4" />
    <circle cx="44" cy="30" r="1" fill="currentColor" opacity="0.3" />
    <circle cx="38" cy="18" r="1" fill="currentColor" opacity="0.3" />
  </svg>
);

// Tire Rotation
const RotationIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="2" />
    <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="2" />
    <path d="M24 32 A8 8 0 0 1 40 32" fill="currentColor" opacity="0.3" />
    <path d="M44 20 L50 14 L54 18 L48 24" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <line x1="51" y1="15" x2="48" y2="22" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const SERVICES = [
  {
    title: 'TIRES',
    desc: 'All brands, all sizes — mounted & balanced while you wait',
    color: '#D42B2B',
    icon: <TiresIcon />,
  },
  {
    title: 'CUSTOM WHEELS',
    desc: 'Expert fitment from the top wheel manufacturers',
    color: '#1E88C7',
    icon: <WheelsIcon />,
  },
  {
    title: 'ALIGNMENT',
    desc: 'Precision 4-wheel alignment — extend tire life & handling',
    color: '#D42B2B',
    icon: <AlignmentIcon />,
  },
  {
    title: 'LIFT KITS',
    desc: 'Body lifts, suspension lifts, leveling — 2" to 6"+',
    color: '#1E88C7',
    icon: <LiftIcon />,
  },
  {
    title: 'LOWERING KITS',
    desc: 'Coilovers, lowering springs, and air suspension',
    color: '#D42B2B',
    icon: <LoweringIcon />,
  },
  {
    title: 'BRAKES & SUSPENSION',
    desc: 'Complete brake service, struts, shocks & more',
    color: '#1E88C7',
    icon: <BrakesIcon />,
  },
  {
    title: 'WINDSHIELD WIPERS',
    desc: 'All sizes in stock — quick swap while you wait',
    color: '#D42B2B',
    icon: <WipersIcon />,
  },
  {
    title: 'TIRE ROTATION & REPAIR',
    desc: 'Rotations, flat repair, patching & plugs',
    color: '#1E88C7',
    icon: <RotationIcon />,
  },
];

/* ── Brand logos for the inline marquee ── */
const MARQUEE_BRANDS = [
  { name: 'Goodyear', logo: '/images/brands/goodyear-tires.png' },
  { name: 'Fuel Off-Road', logo: '/images/brands/fuel.png' },
  { name: 'Toyo Tires', logo: '/images/brands/toyo-tires.png' },
  { name: 'Rough Country', logo: '/images/brands/rough-country.png' },
  { name: 'American Force', logo: '/images/brands/american-force.png' },
  { name: 'Falken', logo: '/images/brands/falken-tires.png' },
  { name: 'Method Race', logo: '/images/brands/method.png' },
  { name: 'BDS Suspension', logo: '/images/brands/bds.png' },
  { name: 'KMC Wheels', logo: '/images/brands/kmc.png' },
  { name: 'Kumho', logo: '/images/brands/kumho-tires.png' },
  { name: 'Bilstein', logo: '/images/brands/bilstein.png' },
  { name: 'Yokohama', logo: '/images/brands/yokohama-tires.png' },
  { name: 'Black Rhino', logo: '/images/brands/black-rhino.png' },
  { name: 'Nexen', logo: '/images/brands/nexen-tires.png' },
  { name: 'ReadyLIFT', logo: '/images/brands/readylift.png' },
  { name: 'Lexani', logo: '/images/brands/lexani.png' },
  { name: 'Vogue', logo: '/images/brands/vogue-tires.png' },
  { name: 'Force Off-Road', logo: '/images/brands/force-offroad.png' },
  { name: 'Superlift', logo: '/images/brands/superlift.png' },
  { name: 'Motiv', logo: '/images/brands/motiv.png' },
  { name: 'Monroe', logo: '/images/brands/monroe.png' },
  { name: 'Zenith', logo: '/images/brands/zenith.png' },
  { name: 'VenomPower', logo: '/images/brands/venompower-tires.png' },
  { name: 'Predator', logo: '/images/brands/predator-tires.png' },
];

const TEXT_BRANDS = ['Nitto', 'BFGoodrich', 'Michelin', 'Continental', 'Pirelli', 'Hankook', 'Cooper'];

function BrandLogo({ brand }: { brand: (typeof MARQUEE_BRANDS)[number] }) {
  const [imgError, setImgError] = useState(false);
  if (imgError) {
    return (
      <span className="font-nav text-[16px] font-semibold tracking-wider text-[#555] uppercase whitespace-nowrap">
        {brand.name}
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={brand.logo}
      alt={brand.name}
      className="h-[40px] w-auto object-contain"
      style={{ filter: 'grayscale(1) brightness(1.8)', opacity: 0.5 }}
      onError={() => setImgError(true)}
      loading="lazy"
    />
  );
}

/* ── Carousel for services ── */
export default function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef(0);
  const dragOffset = useRef(0);

  // Responsive cards per view
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(4);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = Math.max(0, SERVICES.length - cardsPerView);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  // Mouse/touch drag
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    dragStart.current = clientX;
  };

  const handleDragEnd = (clientX: number) => {
    if (!isDragging) return;
    setIsDragging(false);
    const diff = dragStart.current - clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const cardWidthPercent = 100 / cardsPerView;

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 lg:py-24"
      style={{ background: 'var(--bg-primary)' }}
    >
      <style>{`
        @keyframes brand-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div ref={headingRef}>
          <SectionHeading
            label="OUR SERVICES"
            title="EVERYTHING YOUR RIDE NEEDS"
          />
          <p className="font-body text-[15px] md:text-[18px] text-[var(--text-secondary)] mt-4 max-w-[600px]">
            From new tires to full suspension builds — we handle it all. No appointment needed.
          </p>
        </div>

        {/* Carousel container */}
        <div className="relative mt-8 md:mt-12">
          {/* Left arrow — hidden on mobile */}
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="hidden md:flex absolute -left-5 lg:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full items-center justify-center transition-all duration-300"
            style={{
              background: currentIndex === 0 ? 'rgba(255,255,255,0.05)' : 'rgba(30, 136, 199, 0.2)',
              border: `1px solid ${currentIndex === 0 ? 'rgba(255,255,255,0.1)' : 'rgba(30, 136, 199, 0.4)'}`,
              cursor: currentIndex === 0 ? 'default' : 'pointer',
              opacity: currentIndex === 0 ? 0.3 : 1,
            }}
            aria-label="Previous services"
          >
            <ChevronLeft size={20} color={currentIndex === 0 ? '#555' : '#1E88C7'} />
          </button>

          {/* Right arrow — hidden on mobile */}
          <button
            onClick={goNext}
            disabled={currentIndex >= maxIndex}
            className="hidden md:flex absolute -right-5 lg:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full items-center justify-center transition-all duration-300"
            style={{
              background: currentIndex >= maxIndex ? 'rgba(255,255,255,0.05)' : 'rgba(30, 136, 199, 0.2)',
              border: `1px solid ${currentIndex >= maxIndex ? 'rgba(255,255,255,0.1)' : 'rgba(30, 136, 199, 0.4)'}`,
              cursor: currentIndex >= maxIndex ? 'default' : 'pointer',
              opacity: currentIndex >= maxIndex ? 0.3 : 1,
            }}
            aria-label="Next services"
          >
            <ChevronRight size={20} color={currentIndex >= maxIndex ? '#555' : '#1E88C7'} />
          </button>

          {/* Cards track */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * cardWidthPercent}%)`,
              }}
              onMouseDown={(e) => handleDragStart(e.clientX)}
              onMouseUp={(e) => handleDragEnd(e.clientX)}
              onMouseLeave={(e) => isDragging && handleDragEnd(e.clientX)}
              onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
              onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
            >
              {SERVICES.map((service) => (
                <div
                  key={service.title}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${cardWidthPercent}%` }}
                >
                  <Link
                    href="/services"
                    className="group p-5 md:p-6 rounded-xl md:rounded-lg transition-all duration-300 block h-full flex items-start gap-4 md:block"
                    style={{
                      background: '#141414',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = `${service.color}60`;
                      el.style.boxShadow = `0 0 30px ${service.color}20`;
                      el.style.transform = 'translateY(-6px)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = 'rgba(255,255,255,0.06)';
                      el.style.boxShadow = 'none';
                      el.style.transform = 'translateY(0)';
                    }}
                  >
                    <div
                      className="w-12 h-12 min-w-[48px] rounded-xl flex items-center justify-center md:w-16 md:h-12 md:min-w-0 md:rounded-none md:mb-4 md:bg-transparent"
                      style={{ color: service.color, background: `${service.color}15` }}
                    >
                      <div className="w-6 h-6 md:w-full md:h-full">
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading text-[15px] md:text-[17px] font-semibold uppercase text-[var(--text-primary)] mb-1 md:mb-2 leading-tight">
                        {service.title}
                      </h3>
                      <p className="font-body text-[13px] text-[var(--text-secondary)] leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                style={{
                  background: i === currentIndex ? '#1E88C7' : 'rgba(255,255,255,0.15)',
                  transform: i === currentIndex ? 'scale(1.3)' : 'scale(1)',
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Brand logos marquee — SLOWED DOWN */}
        <div className="mt-16">
          <p
            className="font-nav text-center mb-6"
            style={{
              fontWeight: 600,
              fontSize: '13px',
              letterSpacing: '0.15em',
              color: '#6B7280',
            }}
          >
            TRUSTED BY THE BEST BRANDS
          </p>

          <div style={{ overflow: 'hidden', width: '100%' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '48px',
                animation: 'brand-scroll 90s linear infinite',
                width: 'max-content',
              }}
            >
              {MARQUEE_BRANDS.map((brand, i) => (
                <div key={`a-${i}`} className="flex-shrink-0">
                  <BrandLogo brand={brand} />
                </div>
              ))}
              {TEXT_BRANDS.map((name, i) => (
                <span
                  key={`t-a-${i}`}
                  className="font-nav text-[16px] font-semibold tracking-wider uppercase whitespace-nowrap flex-shrink-0"
                  style={{ color: '#555' }}
                >
                  {name}
                </span>
              ))}
              {MARQUEE_BRANDS.map((brand, i) => (
                <div key={`b-${i}`} className="flex-shrink-0">
                  <BrandLogo brand={brand} />
                </div>
              ))}
              {TEXT_BRANDS.map((name, i) => (
                <span
                  key={`t-b-${i}`}
                  className="font-nav text-[16px] font-semibold tracking-wider uppercase whitespace-nowrap flex-shrink-0"
                  style={{ color: '#555' }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
