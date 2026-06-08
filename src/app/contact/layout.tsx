import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Tire Geeks Sacramento | Call or Visit — No Appointment Needed',
  description: 'Contact Tire Geeks for tires, wheels, alignment & more. Call (916) 800-8786 (Florin) or (916) 913-8786 (Arden). Walk-ins welcome Mon-Sat 9AM-6PM.',
  openGraph: {
    title: 'Contact Tire Geeks | Sacramento',
    description: 'Call, visit, or message us. Two Sacramento locations, no appointment needed.',
    url: 'https://tiregeeks.com/contact',
  },
  alternates: { canonical: 'https://tiregeeks.com/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
