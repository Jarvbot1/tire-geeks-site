import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Tire Shop Service Areas | Sacramento Neighborhoods | Tire Geeks',
  description:
    'Tire Geeks serves Land Park, Pocket, Meadowview, Elk Grove, Arden-Arcade, Carmichael and more across Sacramento. Walk-ins welcome at Florin Road & Arden Way, Mon-Sat 9AM-6PM.',
  openGraph: {
    title: 'Tire Shop Service Areas | Sacramento Neighborhoods | Tire Geeks',
    description:
      'Local tire, wheel, lift, and lowering service for Sacramento neighborhoods. Two locations, walk-ins welcome.',
    url: 'https://tiregeeks.com/neighborhoods',
  },
  alternates: { canonical: 'https://tiregeeks.com/neighborhoods' },
};

export default function NeighborhoodsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
