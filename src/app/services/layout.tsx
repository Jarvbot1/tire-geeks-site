import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tire & Wheel Services Sacramento | Alignment, Lifts, Brakes | Tire Geeks',
  description: 'Full-service tire & wheel shop in Sacramento. Tires, custom wheels, alignment, lift kits, lowering kits, brakes & suspension. Walk-ins welcome Mon-Sat 9AM-6PM.',
  openGraph: {
    title: 'Tire & Wheel Services Sacramento | Tire Geeks',
    description: 'Tires, custom wheels, alignment, lift kits, lowering, brakes & suspension. Two Sacramento locations.',
    url: 'https://tiregeeks.com/services',
  },
  alternates: { canonical: 'https://tiregeeks.com/services' },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
