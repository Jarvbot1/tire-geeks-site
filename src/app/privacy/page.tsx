import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BRAND } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy | Tire Geeks Sacramento',
  description:
    'How Tire Geeks collects, uses, and protects your information when you visit our website, contact us, or use our financing and messaging services.',
  alternates: { canonical: 'https://tiregeeks.com/privacy' },
  openGraph: {
    title: 'Privacy Policy | Tire Geeks Sacramento',
    description:
      'How Tire Geeks collects, uses, and protects your information.',
    url: 'https://tiregeeks.com/privacy',
  },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = 'May 10, 2026';

export default function PrivacyPolicyPage() {
  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <Navbar />

      <main className="max-w-[840px] mx-auto px-4 md:px-6 pt-28 md:pt-36 pb-16 md:pb-24">
        <h1 className="font-heading text-[34px] md:text-[44px] font-bold uppercase text-[var(--text-primary)] mb-3">
          Privacy Policy
        </h1>
        <p className="font-body text-[14px] text-[var(--text-muted)] mb-10">
          Effective date: {EFFECTIVE_DATE}
        </p>

        <Section title="1. Introduction">
          <p>
            Tire Geeks (&ldquo;Tire Geeks,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the
            website <a href="https://tiregeeks.com" className="text-[var(--blue)] hover:underline">tiregeeks.com</a>{' '}
            and provides tire, wheel, alignment, and suspension services at our Sacramento, California
            locations. This Privacy Policy explains what information we collect, how we use it, and the
            choices you have. By using our website or services, you agree to the practices described here.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We collect information in the following ways:</p>
          <ul>
            <li>
              <strong>Information you provide.</strong> When you fill out a contact form, request a quote,
              subscribe to our newsletter, apply for financing through a partner, or message us on
              Facebook, Instagram, or other channels, we collect details such as your name, phone number,
              email address, vehicle information, and any message content you share.
            </li>
            <li>
              <strong>Automatically collected information.</strong> When you visit our website we may
              collect device, browser, IP address, referring URL, pages viewed, and similar usage data
              through cookies and standard web analytics.
            </li>
            <li>
              <strong>Information from third parties.</strong> If you interact with us through Meta
              (Facebook/Instagram), Google, or financing partners such as Acima, those platforms may share
              limited profile or transaction information with us as permitted by their own policies and
              your settings.
            </li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information">
          <ul>
            <li>To respond to inquiries, quote requests, and appointment messages.</li>
            <li>To provide, schedule, and deliver tire, wheel, and related services.</li>
            <li>To process or route financing applications through our partners (we do not store full credit application data on our servers).</li>
            <li>To send service updates, promotional offers, and newsletters when you have opted in.</li>
            <li>To improve our website, marketing, and customer experience.</li>
            <li>To comply with legal obligations and enforce our terms.</li>
          </ul>
        </Section>

        <Section title="4. How We Share Your Information">
          <p>We do not sell your personal information. We share it only as needed to operate our business:</p>
          <ul>
            <li>
              <strong>Service providers</strong> that help us run our website, email, SMS, analytics, and
              hosting (for example, our website host and email/SMS providers).
            </li>
            <li>
              <strong>Financing partners</strong> (such as Acima) when you choose to apply for financing.
              Your information goes directly to the partner you apply with under their privacy policy.
            </li>
            <li>
              <strong>Social and advertising platforms</strong> such as Meta (Facebook/Instagram) and
              Google when you contact us through those channels or when we run ads, subject to those
              platforms&apos; policies.
            </li>
            <li>
              <strong>Legal and safety</strong> reasons, including compliance with the law, valid legal
              process, or to protect the rights, property, or safety of Tire Geeks, our customers, or
              others.
            </li>
          </ul>
        </Section>

        <Section title="5. Messaging and Communications">
          <p>
            If you message us through our website, SMS, Facebook Messenger, Instagram Direct, or other
            channels, we use the information you send to respond to your request and provide service
            updates. We may retain message history for customer service, training, and legal compliance.
            You can stop receiving promotional messages at any time by replying STOP to an SMS, clicking
            the unsubscribe link in any marketing email, or messaging us at the contact information below.
          </p>
        </Section>

        <Section title="6. Cookies and Analytics">
          <p>
            We use cookies and similar technologies to keep the site working, remember preferences, and
            understand how visitors use our pages. You can disable cookies in your browser settings, but
            some features of the site may not work as expected. We may also use analytics tools (such as
            Google Analytics) and advertising pixels (such as the Meta Pixel) to measure performance and
            improve our marketing.
          </p>
        </Section>

        <Section title="7. Data Retention">
          <p>
            We keep personal information only as long as needed for the purposes described in this policy,
            to comply with our legal obligations, to resolve disputes, and to enforce our agreements. When
            information is no longer needed we delete or anonymize it.
          </p>
        </Section>

        <Section title="8. Your Choices and Rights">
          <ul>
            <li>You can opt out of marketing emails or SMS at any time.</li>
            <li>You can request a copy of the personal information we hold about you.</li>
            <li>You can request correction or deletion of your information, subject to legal limits.</li>
            <li>California residents have additional rights under the CCPA/CPRA, including the right to know, delete, correct, and limit the use of certain personal information.</li>
          </ul>
          <p>To exercise any of these rights, contact us using the details below.</p>
        </Section>

        <Section title="9. Children's Privacy">
          <p>
            Our website and services are intended for adults. We do not knowingly collect personal
            information from children under 13. If you believe a child has provided us information,
            please contact us and we will delete it.
          </p>
        </Section>

        <Section title="10. Security">
          <p>
            We use reasonable administrative, technical, and physical safeguards to protect personal
            information. No method of transmission or storage is 100% secure, so we cannot guarantee
            absolute security.
          </p>
        </Section>

        <Section title="11. Third-Party Links">
          <p>
            Our website may link to third-party sites (such as Google Maps, Acima, Facebook, and
            Instagram). We are not responsible for the privacy practices of those sites. Please review
            their policies before sharing information with them.
          </p>
        </Section>

        <Section title="12. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Material changes will be posted on this
            page with a new effective date. Continued use of the site after changes means you accept the
            updated policy.
          </p>
        </Section>

        <Section title="13. Contact Us">
          <p>If you have questions about this Privacy Policy or your information, contact us:</p>
          <ul>
            <li>
              <strong>Tire Geeks</strong>
            </li>
            <li>{BRAND.locations[0].address}</li>
            <li>
              Phone:{' '}
              <a href={`tel:${BRAND.locations[0].phoneRaw}`} className="text-[var(--blue)] hover:underline">
                {BRAND.locations[0].phone}
              </a>
            </li>
            <li>
              Web:{' '}
              <Link href="/contact" className="text-[var(--blue)] hover:underline">
                tiregeeks.com/contact
              </Link>
            </li>
          </ul>
        </Section>

        <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <Link
            href="/terms"
            className="font-nav text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--blue)] hover:text-[var(--text-primary)] transition-colors"
          >
            View Terms of Service →
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-heading text-[20px] md:text-[22px] font-bold uppercase text-[var(--text-primary)] mb-3">
        {title}
      </h2>
      <div className="font-body text-[15px] md:text-[16px] leading-[1.7] text-[var(--text-secondary)] space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_strong]:text-[var(--text-primary)]">
        {children}
      </div>
    </section>
  );
}
