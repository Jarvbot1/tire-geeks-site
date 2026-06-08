import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tire Geeks Locations | Florin Road & Arden Way, Sacramento CA',
  description: 'Visit Tire Geeks at 3020 Florin Rd or 2245 Arden Way in Sacramento. Open Mon-Sat 9AM-6PM, walk-ins welcome. Call (916) 800-8786 or (916) 913-8786.',
  openGraph: {
    title: 'Tire Geeks Locations | Sacramento CA',
    description: 'Two Sacramento locations — Florin Road & Arden Way. Open Mon-Sat 9AM-6PM, no appointment needed.',
    url: 'https://tiregeeks.com/locations',
  },
  alternates: { canonical: 'https://tiregeeks.com/locations' },
};

export default function LocationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
