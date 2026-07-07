'use client';

import { MapPin, Clock, BadgeDollarSign } from 'lucide-react';

const REASONS = [
  {
    icon: MapPin,
    title: 'Locally Owned, Sacramento Proud',
    body: 'An independent shop with two Sacramento locations — no corporate call center, no runaround. You talk to the people who actually turn the wrenches.',
  },
  {
    icon: Clock,
    title: 'In and Out Same Day',
    body: 'No membership lines and no week-out appointments. Walk in, get your tires installed, and get back on the road the same day.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Honest Pricing',
    body: 'We quote out-the-door — the real number, tax and install included. We recommend what fits your budget and nothing you don’t need.',
  },
];

export default function WhyTireGeeks() {
  return (
    <section
      className="w-full px-6 py-16 md:px-20 md:py-20"
      style={{ background: '#111111' }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <div
            className="mx-auto mb-6"
            style={{ width: 48, height: 3, background: '#D42B2B' }}
          />
          <h2
            className="font-display uppercase text-white"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', lineHeight: 1.1 }}
          >
            Why Locals Choose Tire Geeks
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {REASONS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center rounded-xl p-8"
              style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div
                className="flex items-center justify-center rounded-full mb-6"
                style={{ width: 64, height: 64, background: 'rgba(212,43,43,0.10)' }}
              >
                <Icon size={30} strokeWidth={1.75} color="#D42B2B" />
              </div>
              <h3
                className="font-heading font-bold uppercase text-white mb-3"
                style={{ fontSize: 20, lineHeight: 1.25 }}
              >
                {title}
              </h3>
              <p
                className="font-body"
                style={{ fontSize: 15, color: '#9E9E9E', lineHeight: 1.65 }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
