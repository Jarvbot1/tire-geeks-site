'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import {
  CheckCircle,
  ShoppingCart,
  CreditCard,
  Shield,
  DollarSign,
  Clock,
  Banknote,
  ChevronDown,
} from 'lucide-react';

const ACIMA_LINK =
  `https://ams.acima.com/discover/new?merchant_guid=${process.env.NEXT_PUBLIC_ACIMA_MERCHANT_GUID || ''}&utm_source=web-banner&utm_medium=merchant&utm_campaign=mktg-lp`;

const steps = [
  {
    number: 1,
    icon: CheckCircle,
    title: 'APPLY & GET APPROVED',
    description:
      'Fill out a quick application online or in-store. Just need a checking account with $750+/month income and a valid ID.',
  },
  {
    number: 2,
    icon: ShoppingCart,
    title: 'SHOP YOUR TIRES & WHEELS',
    description:
      'Browse our inventory and pick the perfect setup. Our experts help you find the right fitment.',
  },
  {
    number: 3,
    icon: CreditCard,
    title: 'START YOUR LEASE',
    description:
      'Pick a payment schedule. Pay off within 100 days at retail price \u2014 or spread payments over 12 months.',
  },
];

const benefits = [
  {
    icon: Shield,
    title: 'No Credit Needed',
    description:
      'We work with Acima to offer lease-to-own options that don\u2019t require a traditional credit check.',
  },
  {
    icon: DollarSign,
    title: '$0 Down Payment',
    description:
      'Get your tires and wheels today with nothing down. Start driving on your new setup immediately.',
  },
  {
    icon: Clock,
    title: '100 Days Same as Cash',
    description:
      'Pay off your lease within 100 days and only pay the retail price. No additional fees.',
  },
  {
    icon: Banknote,
    title: 'Up to $5,000 Approval',
    description:
      'Get approved for up to $5,000 to cover wheels, tires, lift kits, and more.',
  },
];

const tallBanners = [
  'https://s3.us-west-2.amazonaws.com/marketing.acimacredit.com/Acima-Web-Banners/RV-EN1/RVEN1300X600.png',
  'https://s3.us-west-2.amazonaws.com/marketing.acimacredit.com/Acima-Web-Banners/ST-EN1/STEN1300X600.png',
  'https://s3.us-west-2.amazonaws.com/marketing.acimacredit.com/Acima-Web-Banners/ST-EN2/STEN2300X600.png',
];

const smallBanners = [
  'https://s3.us-west-2.amazonaws.com/marketing.acimacredit.com/Acima-Web-Banners/RV-EN2/RVEN2300X250.png',
  'https://s3.us-west-2.amazonaws.com/marketing.acimacredit.com/Acima-Web-Banners/RV-EN1/RVEN1300X250.png',
];

const faqs = [
  {
    question: 'What do I need to apply?',
    answer:
      'A valid government-issued ID, an active checking account with at least $750 per month in income and 3 months of history, and your Social Security Number or ITIN.',
  },
  {
    question: 'Will this affect my credit score?',
    answer:
      'No. Acima uses a soft inquiry only, which does not affect your credit score.',
  },
  {
    question: 'How much can I get approved for?',
    answer:
      'Approval amounts typically range from $300 to $5,000 depending on your profile and income verification.',
  },
  {
    question: 'What is the 100-day option?',
    answer:
      'If you pay off your lease within 100 days, you only pay the retail price of the merchandise \u2014 no additional lease fees.',
  },
  {
    question: 'Can I pay it off early?',
    answer:
      'Yes! The earlier you pay off your lease, the less you pay overall. Early payoff is always encouraged.',
  },
  {
    question: 'What if I\'m denied?',
    answer:
      'Visit us in-store. We work with everyone and can often find alternative solutions. Cash deals and price negotiations are always available.',
  },
];

export default function FinancingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />

      {/* ───────── HERO ───────── */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6"
        style={{
          minHeight: '400px',
          height: '60vh',
          background:
            'linear-gradient(135deg, #0D1117 0%, #141B24 50%, #0A0A0A 100%)',
        }}
      >
        {/* red glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(212,43,43,0.08) 0%, transparent 60%)',
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-4">
          <h1
            className="font-display uppercase text-white"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 1.1 }}
          >
            FINANCING MADE EASY
          </h1>

          <p className="font-heading font-normal text-[24px] text-[#9E9E9E]">
            No credit needed. No down payment. Approved in seconds.
          </p>

          <a
            href={ACIMA_LINK}
            target="_blank"
            rel="noopener"
            className="mt-4 inline-block bg-gradient-to-r from-[#D42B2B] to-[#B71C1C] px-10 py-4 rounded-lg font-nav uppercase tracking-widest text-white font-bold text-lg hover:brightness-110 transition"
          >
            APPLY NOW
          </a>

          <p className="font-body text-[14px] text-[#6B7280] mt-2">
            Takes less than 60 seconds &bull; Won&apos;t affect your credit
            score
          </p>
        </div>
      </section>

      {/* ───────── HOW IT WORKS ───────── */}
      <section className="bg-[#111111] py-20 px-6">
        <h2 className="font-display text-white text-center text-4xl uppercase mb-16">
          HOW IT WORKS
        </h2>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="flex flex-col md:flex-row items-center">
                {/* step card */}
                <div className="flex flex-col items-center text-center">
                  <Icon size={28} className="text-[#D42B2B] mb-3" />
                  <div className="w-12 h-12 bg-[#D42B2B] text-white font-bold flex items-center justify-center rounded-full text-lg">
                    {step.number}
                  </div>
                  <h3 className="font-heading font-semibold text-[18px] text-white uppercase mt-4">
                    {step.title}
                  </h3>
                  <p className="font-body font-normal text-[14px] text-[#9E9E9E] max-w-xs mt-2">
                    {step.description}
                  </p>
                </div>

                {/* connector */}
                {i < steps.length - 1 && (
                  <>
                    {/* desktop horizontal dashed line */}
                    <div className="hidden md:block w-24 border-t-2 border-dashed border-[#2A2A2A] mt-[62px] mx-4 shrink-0" />
                    {/* mobile vertical dashed line */}
                    <div className="block md:hidden h-12 border-l-2 border-dashed border-[#2A2A2A] my-4" />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ───────── BENEFITS GRID ───────── */}
      <section className="bg-[#0A0A0A] py-20 px-6">
        <h2 className="font-display text-white text-center text-4xl uppercase mb-12">
          WHY FINANCE WITH US
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="rounded-xl p-8"
                style={{
                  backgroundColor: '#141414',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div className="w-14 h-14 rounded-full bg-[#D42B2B]/10 flex items-center justify-center mb-4">
                  <Icon size={26} className="text-[#D42B2B]" />
                </div>
                <h3 className="font-heading font-semibold text-[20px] text-white mb-2">
                  {b.title}
                </h3>
                <p className="font-body font-normal text-[14px] text-[#9E9E9E] leading-relaxed">
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ───────── ACIMA BANNERS ───────── */}
      <section className="bg-[#111111] py-16 px-6">
        <h2 className="font-display text-white text-center text-4xl uppercase mb-12">
          OUR FINANCING PARTNER
        </h2>

        {/* tall banners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tallBanners.map((src, i) => (
            <a
              key={i}
              href={ACIMA_LINK}
              target="_blank"
              rel="noopener"
            >
              <img
                src={src}
                alt="Acima financing banner"
                className="w-full rounded-lg hover:opacity-90 transition"
              />
            </a>
          ))}
        </div>

        {/* small banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
          {smallBanners.map((src, i) => (
            <a
              key={i}
              href={ACIMA_LINK}
              target="_blank"
              rel="noopener"
            >
              <img
                src={src}
                alt="Acima financing banner"
                className="w-full rounded-lg hover:opacity-90 transition"
              />
            </a>
          ))}
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="bg-[#0A0A0A] py-20 px-6">
        <h2 className="font-display text-white text-center text-4xl uppercase mb-12">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full flex justify-between items-center py-5 border-b border-white/5 text-left"
                >
                  <span className="font-heading font-medium text-[18px] text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-[#9E9E9E] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-body font-normal text-[15px] text-[#9E9E9E] leading-[1.7] py-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ───────── BOTTOM CTA ───────── */}
      <section className="bg-gradient-to-r from-[#D42B2B]/10 to-[#0A0A0A] py-20 px-6 text-center">
        <h2
          className="font-display text-white uppercase"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}
        >
          READY TO GET STARTED?
        </h2>

        <p className="font-body text-[#9E9E9E] mt-4 text-lg">
          Get approved in seconds
        </p>

        <a
          href={ACIMA_LINK}
          target="_blank"
          rel="noopener"
          className="mt-8 inline-block bg-gradient-to-r from-[#D42B2B] to-[#B71C1C] px-10 py-4 rounded-lg font-nav uppercase tracking-widest text-white font-bold text-lg hover:brightness-110 transition"
        >
          APPLY NOW
        </a>

        <p className="font-body text-[14px] text-[#6B7280] mt-6">
          Visit us at 3020 Florin Rd or 2245 Arden Way, Sacramento CA &bull;
          (916) 800-8786
        </p>
      </section>

      <Footer />
    </>
  );
}
