import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Phone, MapPin, Clock, Wrench, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Brake Repair Sacramento | Pads, Rotors & Calipers | Tire Geeks',
  description:
    'Professional brake repair in Sacramento. Brake pads, rotors, calipers, fluid flush & performance upgrades. Fast same-day service at two locations. Walk-ins welcome, no appointment needed.',
  openGraph: {
    title: 'Brake Repair Sacramento | Pads, Rotors & Calipers | Tire Geeks',
    description:
      'Professional brake repair in Sacramento. Same-day service, walk-ins welcome. Pads, rotors, calipers, fluid flush & performance upgrades.',
    url: 'https://tiregeeks.com/services/brakes-sacramento',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://tiregeeks.com/services/brakes-sacramento' },
};

export default function BrakesSacramentoPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tiregeeks.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://tiregeeks.com/services' },
      { '@type': 'ListItem', position: 3, name: 'Brake Repair Sacramento', item: 'https://tiregeeks.com/services/brakes-sacramento' },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Brake Repair Sacramento',
    description:
      'Professional brake repair and replacement services in Sacramento. Brake pads, rotors, calipers, fluid flush, and performance brake upgrades with same-day service.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Tire Geeks',
      url: 'https://tiregeeks.com',
    },
    areaServed: { '@type': 'City', name: 'Sacramento' },
    serviceType: 'Brake Repair & Replacement',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '150',
      description: 'Brake service from $150 per axle',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does brake replacement cost in Sacramento?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sacramento brake replacement typically costs $250-$500 per axle for standard pad and rotor replacement. The final price depends on your vehicle, the type of brake pads you choose (ceramic, semi-metallic, or organic), and whether your rotors need resurfacing or full replacement. Tire Geeks offers competitive pricing with same-day service at both Sacramento locations.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I know if my brakes need replacing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Common signs include squealing or squeaking when braking, grinding noises (metal-on-metal contact), pulsation or vibration in the brake pedal, a soft or spongy pedal feel, the vehicle pulling to one side when braking, or a longer stopping distance than usual. If you experience any of these symptoms, have your brakes inspected immediately. Tire Geeks offers free brake inspections at both locations.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does brake service take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A standard brake pad and rotor replacement takes approximately 1-2 hours per axle. Most customers are in and out within 2-3 hours for a complete front and rear brake job. More involved services like caliper replacement or brake fluid flush may add additional time. We offer same-day service on most brake work.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Tire Geeks do brake inspections?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We offer complimentary brake inspections at both Sacramento locations. Our technicians will check your pad thickness, rotor condition, caliper operation, brake fluid level and condition, and brake line integrity. Walk in anytime Monday through Saturday, 9AM to 6PM.',
        },
      },
      {
        '@type': 'Question',
        name: "What's the difference between ceramic and semi-metallic brake pads?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ceramic brake pads are quieter, produce less dust, and last longer. They are ideal for daily drivers and commuter vehicles. Semi-metallic pads offer stronger braking performance, better heat dissipation, and more pedal feedback. They are preferred for trucks, towing, and performance applications. Organic pads are the most affordable but wear faster and produce more dust. Our technicians can recommend the best pad type for your driving style and vehicle.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        {/* Breadcrumb Navigation */}
        <div style={{ background: '#0A0A0A', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-3">
            <nav className="flex items-center gap-2 font-nav text-[12px] uppercase tracking-[0.1em]">
              <Link href="/" className="text-[#6B7280] hover:text-[#D42B2B] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-[#6B7280]" />
              <Link href="/services" className="text-[#6B7280] hover:text-[#D42B2B] transition-colors">
                Services
              </Link>
              <ChevronRight className="w-3 h-3 text-[#6B7280]" />
              <span className="text-[#F2F2F2]">Brake Repair</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section
          className="relative flex items-center justify-center text-center"
          style={{
            minHeight: '340px',
            background: 'linear-gradient(to bottom, rgba(10,10,10,0.8), rgba(10,10,10,0.95)), #111',
          }}
        >
          <div className="px-6 py-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                Brake Services
              </span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h1
              className="font-display uppercase text-white mb-4"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.05 }}
            >
              Brake Repair Sacramento
            </h1>
            <p className="font-body text-[#AAAAAA] text-lg max-w-[700px] mx-auto mb-8">
              Brake pads, rotors, calipers, fluid flush, and performance upgrades. Same-day service at two Sacramento locations. Walk-ins welcome.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-block"
                style={{ textDecoration: 'none' }}
              >
                GET A QUOTE
              </Link>
              <a
                href="tel:+19168008786"
                className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center gap-2"
                style={{ textDecoration: 'none' }}
              >
                <Phone className="w-4 h-4" />
                CALL (916) 800-8786
              </a>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section style={{ background: '#111111', borderTop: '1px solid rgba(212,43,43,0.2)', borderBottom: '1px solid rgba(212,43,43,0.2)' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: '5,000+', label: 'Brake Jobs Completed' },
                { value: '$250', label: 'Starting Per Axle' },
                { value: '2', label: 'Sacramento Locations' },
                { value: 'Same Day', label: 'Service Available' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-[28px] md:text-[36px] uppercase" style={{ color: '#D42B2B' }}>
                    {stat.value}
                  </div>
                  <div className="font-nav text-[12px] uppercase tracking-[0.15em] text-[#9E9E9E]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left: Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <div className="w-12 h-[3px] mb-3" style={{ background: '#D42B2B' }} />
                  <h2
                    className="font-display text-white uppercase mb-6"
                    style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.1 }}
                  >
                    Sacramento Brake Repair You Can Trust
                  </h2>
                  <div className="space-y-5">
                    <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                      Your brakes are the most critical safety system on your vehicle. When they start squealing, grinding, or feeling soft, you need them fixed fast &mdash; and fixed right. At Tire Geeks, we&apos;ve completed over 5,000 brake jobs across our two Sacramento locations. From a basic pad swap to a complete rotor, caliper, and fluid service, our technicians handle every brake repair with the urgency and precision it deserves. Most brake jobs are completed same-day, and walk-ins are always welcome &mdash; no appointment needed.
                    </p>
                    <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                      Sacramento drivers put serious demands on their brakes. Stop-and-go traffic on I-5 and Business 80 during rush hour, summer temperatures that regularly exceed 100 degrees, and the constant cycle of freeway-to-surface-street driving all accelerate brake wear. Sacramento&apos;s heat is especially hard on brake fluid, which absorbs moisture over time and loses its boiling point &mdash; leading to that dangerous spongy pedal feel during the hottest months. A brake fluid flush every 2-3 years is one of the most overlooked maintenance items, and one we strongly recommend for every Sacramento vehicle.
                    </p>
                  </div>
                </div>

                {/* Warning Signs */}
                <div>
                  <h3 className="font-heading text-white text-xl uppercase tracking-wide mb-4">
                    Signs You Need Brake Service
                  </h3>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-4">
                    Do not ignore these warning signs. Brake issues only get worse &mdash; and more expensive &mdash; the longer you wait. If you notice any of the following, bring your vehicle to Tire Geeks for a complimentary brake inspection:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { sign: 'Squealing or squeaking', detail: 'Wear indicators are making contact with the rotor' },
                      { sign: 'Grinding noise', detail: 'Pads are worn through; metal-on-metal contact is damaging rotors' },
                      { sign: 'Pedal pulsation', detail: 'Warped or unevenly worn rotors' },
                      { sign: 'Soft or spongy pedal', detail: 'Air in brake lines or degraded brake fluid' },
                      { sign: 'Vehicle pulling', detail: 'Stuck caliper or uneven pad wear' },
                      { sign: 'Longer stopping distance', detail: 'Worn pads, glazed rotors, or fluid issue' },
                    ].map((item) => (
                      <div key={item.sign} className="flex items-start gap-3 bg-[#1A1A1A] border border-white/5 rounded-lg px-4 py-3">
                        <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#D42B2B' }} />
                        <div>
                          <span className="font-body text-white text-[14px] font-semibold">{item.sign}</span>
                          <span className="font-body text-[#9E9E9E] text-[13px] block">{item.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What's Included */}
                <div>
                  <h3 className="font-heading text-white text-xl uppercase tracking-wide mb-4">
                    Our Complete Brake Service
                  </h3>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-4">
                    Every brake service at Tire Geeks is thorough. We do not just slap on pads and send you on your way. Our technicians inspect the entire braking system and address everything that needs attention so you leave with full confidence in your stopping power.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Complete brake inspection (pads, rotors, calipers, lines, fluid)',
                      'Brake pad replacement with premium or performance pads',
                      'Rotor resurfacing or replacement',
                      'Caliper service, rebuild, or replacement',
                      'Brake fluid flush and bleed',
                      'Brake hardware and slide pin lubrication',
                      'Brake line inspection for leaks and corrosion',
                      'Test drive and quality verification',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#D42B2B' }} />
                        <span className="font-body text-white text-[15px]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Brake Pad Types */}
                <div>
                  <h3 className="font-heading text-white text-xl uppercase tracking-wide mb-4">
                    Brake Pad Types Explained
                  </h3>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-4">
                    Not all brake pads are created equal. The right choice depends on your vehicle, driving style, and priorities. Here is a breakdown of the three main types:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        title: 'Ceramic',
                        best: 'Daily Drivers',
                        desc: 'Quietest operation, least brake dust, longest lifespan. Excellent for commuters and vehicles with custom wheels where clean appearance matters. Slightly less initial bite than semi-metallic.',
                      },
                      {
                        title: 'Semi-Metallic',
                        best: 'Trucks & Performance',
                        desc: 'Stronger bite, better heat dissipation, superior feedback. Ideal for trucks, towing, and spirited driving. Produces more dust and slightly more noise than ceramic.',
                      },
                      {
                        title: 'Organic',
                        best: 'Budget Option',
                        desc: 'Most affordable upfront, softest pedal feel. Wears faster and produces the most dust. Suitable for light-duty vehicles and budget-conscious drivers.',
                      },
                    ].map((pad) => (
                      <div
                        key={pad.title}
                        className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8"
                      >
                        <Wrench className="w-6 h-6 mb-3" style={{ color: '#D42B2B' }} />
                        <h4 className="font-heading text-white text-lg uppercase mb-1">{pad.title}</h4>
                        <span className="font-nav text-[12px] uppercase tracking-wider text-[#D42B2B] block mb-3">
                          Best for: {pad.best}
                        </span>
                        <p className="font-body text-[#9E9E9E] text-[14px] leading-relaxed">
                          {pad.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sacramento Driving Context */}
                <div>
                  <h3 className="font-heading text-white text-xl uppercase tracking-wide mb-4">
                    Why Sacramento Is Hard on Brakes
                  </h3>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                    Sacramento&apos;s driving conditions are uniquely demanding on brake systems. The average Sacramento commuter spends 28 minutes in stop-and-go traffic each way, putting constant thermal cycling stress on pads and rotors. Summer temperatures that regularly hit 105-110 degrees push brake fluid temperatures dangerously close to their boiling point &mdash; especially during freeway-to-exit-ramp braking on I-5 and Highway 99. The flat terrain means drivers rarely benefit from engine braking the way mountain communities do, putting 100% of deceleration on the brake system. According to AAA, the average driver in the Sacramento metro area replaces brake pads every 35,000-50,000 miles, compared to the national average of 40,000-60,000 miles. If you drive in heavy Sacramento traffic daily, you should have your brakes inspected at least twice a year.
                  </p>
                </div>

                {/* Performance Upgrades */}
                <div>
                  <h3 className="font-heading text-white text-xl uppercase tracking-wide mb-4">
                    Performance Brake Upgrades
                  </h3>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-4">
                    Looking for more stopping power? We install performance brake upgrades for cars, trucks, and SUVs. Whether you are tracking your car at Thunderhill Raceway or just want better pedal feel for your daily driver, we have options:
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Big brake kit installation (Brembo, Wilwood, StopTech)',
                      'Drilled and slotted rotor upgrades',
                      'Performance brake pad upgrades (Hawk, EBC, PowerStop)',
                      'Stainless steel brake line installation',
                      'High-performance brake fluid (DOT 4, DOT 5.1)',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#D42B2B' }} />
                        <span className="font-body text-white text-[15px]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Suspension Services */}
                <div>
                  <h3 className="font-heading text-white text-xl uppercase tracking-wide mb-4">
                    Suspension Services
                  </h3>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed">
                    In addition to brakes, our technicians handle a full range of suspension repairs and upgrades. If your vehicle is bouncing excessively, clunking over bumps, or wandering in the lane, worn suspension components are likely the cause. We replace struts, shocks, control arms, ball joints, tie rod ends, sway bar links, and bushings for all makes and models. Worn suspension does not just hurt ride comfort &mdash; it extends your stopping distance and reduces your ability to control the vehicle in an emergency. Many customers who come in for brake service discover they also need suspension work, and we can handle both at the same time. Visit us today &mdash; no appointment needed.
                  </p>
                </div>

                {/* Free Inspection */}
                <div
                  className="rounded-xl p-8"
                  style={{ background: 'rgba(212,43,43,0.08)', border: '1px solid rgba(212,43,43,0.25)' }}
                >
                  <h3 className="font-heading text-white text-xl uppercase mb-3">Free Brake Inspection</h3>
                  <p className="font-body text-[#AAAAAA] text-[15px] leading-relaxed mb-4">
                    Not sure if you need brake work? Walk in to either Sacramento location for a complimentary brake inspection. Our technicians will measure pad thickness, check rotor condition, inspect calipers and brake lines, and give you an honest assessment. No pressure, no upselling &mdash; just a straight answer about what your vehicle needs. If everything looks good, we will tell you and send you on your way.
                  </p>
                  <Link
                    href="/contact"
                    className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-block"
                    style={{ textDecoration: 'none' }}
                  >
                    SCHEDULE INSPECTION
                  </Link>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="space-y-6">
                {/* Pricing Card */}
                <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-lg uppercase mb-4">Brake Service Pricing</h3>
                  <div className="space-y-4">
                    {[
                      { service: 'Brake Inspection', price: 'Free' },
                      { service: 'Pad Replacement (per axle)', price: 'From $150' },
                      { service: 'Pad & Rotor (per axle)', price: 'From $250' },
                      { service: 'Caliper Replacement', price: 'From $200' },
                      { service: 'Brake Fluid Flush', price: 'From $89' },
                    ].map((item) => (
                      <div key={item.service} className="flex justify-between items-center border-b border-white/5 pb-3">
                        <span className="font-body text-[#AAAAAA] text-[14px]">{item.service}</span>
                        <span className="font-heading text-white text-[14px] uppercase">{item.price}</span>
                      </div>
                    ))}
                  </div>
                  <p className="font-body text-[#6B7280] text-[12px] mt-4">
                    Prices vary by vehicle and parts selected. Walk in or call for an exact quote.
                  </p>
                  <div className="mt-6 space-y-3">
                    <Link
                      href="/contact"
                      className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded block text-center"
                      style={{ textDecoration: 'none' }}
                    >
                      GET A QUOTE
                    </Link>
                    <Link
                      href="/financing"
                      className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded block text-center"
                      style={{ textDecoration: 'none' }}
                    >
                      FINANCING OPTIONS
                    </Link>
                  </div>
                </div>

                {/* Walk-In CTA */}
                <div
                  className="rounded-xl p-8 text-center"
                  style={{ background: 'rgba(212,43,43,0.08)', border: '1px solid rgba(212,43,43,0.25)' }}
                >
                  <h3 className="font-heading text-white text-lg uppercase mb-2">Walk-Ins Welcome</h3>
                  <p className="font-body text-[#AAAAAA] text-[14px] mb-4">
                    Visit us today &mdash; no appointment needed. Same-day brake service available at both locations.
                  </p>
                  <p className="font-nav text-[12px] uppercase tracking-wider text-[#9E9E9E]">
                    Mon&ndash;Sat: 9AM&ndash;6PM
                  </p>
                </div>

                {/* Related Services */}
                <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-lg uppercase mb-4">Related Services</h3>
                  <ul className="space-y-3">
                    {[
                      { label: 'Wheel Alignment', href: '/services#alignment' },
                      { label: 'Lift Kits', href: '/services/lift-kits-sacramento' },
                      { label: 'Lowering Services', href: '/services/lowering-sacramento' },
                      { label: 'All Services', href: '/services' },
                    ].map((svc) => (
                      <li key={svc.label}>
                        <Link
                          href={svc.href}
                          className="font-body text-[#AAAAAA] text-[14px] hover:text-[#D42B2B] transition-colors"
                        >
                          {svc.label} &rarr;
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ background: '#111111', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                FAQ
              </span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h2
              className="font-display text-white uppercase mb-10"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.1 }}
            >
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: 'How much does brake replacement cost in Sacramento?',
                  a: 'Sacramento brake replacement typically costs $250-$500 per axle for a standard pad and rotor job. The exact price depends on your vehicle, pad material (ceramic vs semi-metallic), and whether rotors need resurfacing or replacement.',
                },
                {
                  q: 'How do I know if my brakes need replacing?',
                  a: 'Listen for squealing, squeaking, or grinding. Feel for pedal pulsation, a soft/spongy pedal, or the car pulling to one side. If your stopping distance has increased, get them inspected immediately. We offer free brake inspections.',
                },
                {
                  q: 'How long does brake service take?',
                  a: 'A standard pad and rotor replacement takes 1-2 hours per axle. Most complete brake jobs (front and rear) are finished in 2-3 hours. We offer same-day service on most brake work.',
                },
                {
                  q: 'Does Tire Geeks do brake inspections?',
                  a: 'Yes, brake inspections are complimentary at both Sacramento locations. Walk in anytime Mon-Sat, 9AM-6PM. Our technicians will check pads, rotors, calipers, fluid, and lines and give you an honest assessment.',
                },
                {
                  q: "What's the difference between ceramic and semi-metallic brake pads?",
                  a: 'Ceramic pads are quieter, produce less dust, and last longer — ideal for daily driving. Semi-metallic pads offer stronger braking force and better heat handling — ideal for trucks, towing, and performance. We will help you choose the right type.',
                },
              ].map((faq) => (
                <div key={faq.q} className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-[16px] font-semibold mb-3">{faq.q}</h3>
                  <p className="font-body text-[#AAAAAA] text-[14px] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Both Locations */}
        <section style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                Two Locations
              </span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h2
              className="font-display text-white uppercase mb-10"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.1 }}
            >
              Visit Either Sacramento Location
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Florin Road',
                  address: '3020 Florin Road, Sacramento, CA 95822',
                  phone: '(916) 800-8786',
                  phoneRaw: '+19168008786',
                  hours: 'Mon-Sat: 9AM-6PM',
                  mapUrl: 'https://maps.google.com/?q=3020+Florin+Road+Sacramento+CA+95822',
                  locationPage: '/locations/florin-road',
                },
                {
                  name: 'Arden Way',
                  address: '2245 Arden Way, Sacramento, CA 95825',
                  phone: '(916) 913-8786',
                  phoneRaw: '+19169138786',
                  hours: 'Mon-Sat: 9AM-6PM',
                  mapUrl: 'https://maps.google.com/?q=2245+Arden+Way+Sacramento+CA+95825',
                  locationPage: '/locations/arden-way',
                },
              ].map((loc) => (
                <div key={loc.name} className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
                  <h3 className="font-heading text-white text-lg uppercase mb-4">Tire Geeks &mdash; {loc.name}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#D42B2B' }} />
                      <span className="font-body text-[#AAAAAA] text-[15px]">{loc.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 flex-shrink-0" style={{ color: '#D42B2B' }} />
                      <a href={`tel:${loc.phoneRaw}`} className="font-body text-[#AAAAAA] text-[15px] hover:text-[#D42B2B] transition-colors">
                        {loc.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 flex-shrink-0" style={{ color: '#D42B2B' }} />
                      <span className="font-body text-[#AAAAAA] text-[15px]">{loc.hours}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`tel:${loc.phoneRaw}`}
                      className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-6 py-3 rounded text-center"
                      style={{ textDecoration: 'none' }}
                    >
                      CALL NOW
                    </a>
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-6 py-3 rounded text-center"
                      style={{ textDecoration: 'none' }}
                    >
                      DIRECTIONS
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section style={{ background: '#111111', padding: '80px 0' }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
              <span className="font-heading text-sm tracking-[0.25em] uppercase" style={{ color: '#D42B2B' }}>
                From Our Blog
              </span>
              <span className="inline-block w-8 h-[3px]" style={{ background: '#D42B2B' }} />
            </div>
            <h2
              className="font-display text-white uppercase mb-10"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.1 }}
            >
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Brake Replacement Costs', href: '/blog/brake-replacement-cost-sacramento' },
                { title: 'Wheel Alignment: Signs You Need One', href: '/blog/wheel-alignment-sacramento' },
                { title: 'Tire Rotation Guide', href: '/blog/tire-rotation-guide' },
                { title: 'Best Tire Shop in Sacramento', href: '/blog/best-tire-shop-sacramento' },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="block p-5 rounded-xl transition-all hover:border-[#D42B2B]/50 group"
                  style={{
                    background: '#1A1A1A',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <span className="font-heading text-[16px] font-semibold text-[#F2F2F2] group-hover:text-[#D42B2B] transition-colors leading-snug block mb-2">
                    {article.title}
                  </span>
                  <span className="font-nav text-[12px] uppercase tracking-wider text-[#D42B2B]">
                    Read Article &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="text-center" style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="max-w-[800px] mx-auto px-6">
            <div className="w-12 h-[3px] mx-auto mb-4" style={{ background: '#D42B2B' }} />
            <h2
              className="font-display text-white uppercase mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
            >
              Stop Right. Stop Safe.
            </h2>
            <p className="font-body text-[#AAAAAA] text-lg mb-8">
              Walk in today for a free brake inspection. No appointment needed. Same-day service available at both Sacramento locations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19168008786"
                className="btn-cta font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-flex items-center gap-2"
                style={{ textDecoration: 'none' }}
              >
                <Phone className="w-5 h-5" />
                CALL (916) 800-8786
              </a>
              <Link
                href="/contact"
                className="btn-ghost font-nav text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded inline-block"
                style={{ textDecoration: 'none' }}
              >
                GET A QUOTE
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
