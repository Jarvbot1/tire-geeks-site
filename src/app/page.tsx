'use client';
import { useState, useCallback } from 'react';
import Preloader from '@/components/layout/Preloader';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/hero/HeroSection';
import AcimaSection from '@/components/financing/AcimaSection';
import TrustStrip from '@/components/ui/TrustStrip';
import ServicesGrid from '@/components/sections/ServicesGrid';
import GalleryShowcase from '@/components/sections/GalleryShowcase';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import LocationsSection from '@/components/sections/LocationsSection';
import SocialFeed from '@/components/sections/SocialFeed';
import BlogPreview from '@/components/sections/BlogPreview';
import BrandsStrip from '@/components/sections/BrandsStrip';
import CTABanner from '@/components/sections/CTABanner';
import Footer from '@/components/layout/Footer';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Preloader onComplete={handlePreloaderComplete} />
      <Navbar />
      <main id="main-content" className="pb-[calc(64px+env(safe-area-inset-bottom,0px))] lg:pb-0">
        <HeroSection loaded={loaded} />
        <AcimaSection />
        <TrustStrip />
        <ServicesGrid />
        <GalleryShowcase />
        <TestimonialsSection />
        <LocationsSection />
        <SocialFeed />
        <BlogPreview />
        <BrandsStrip />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
