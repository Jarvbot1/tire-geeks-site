import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BRAND } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service | Tire Geeks Sacramento',
  description:
    'The terms and conditions for using the Tire Geeks website, contacting us through online channels, and the services we provide.',
  alternates: { canonical: 'https://tiregeeks.com/terms' },
  openGraph: {
    title: 'Terms of Service | Tire Geeks Sacramento',
    description: 'Terms and conditions for the Tire Geeks website and services.',
    url: 'https://tiregeeks.com/terms',
  },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = 'May 10, 2026';

export default function TermsOfServicePage() {
  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <Navbar />

      <main className="max-w-[840px] mx-auto px-4 md:px-6 pt-28 md:pt-36 pb-16 md:pb-24">
        <h1 className="font-heading text-[34px] md:text-[44px] font-bold uppercase text-[var(--text-primary)] mb-3">
          Terms of Service
        </h1>
        <p className="font-body text-[14px] text-[var(--text-muted)] mb-10">
          Effective date: {EFFECTIVE_DATE}
        </p>

        <Section title="1. Agreement to These Terms">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Tire Geeks website at{' '}
            <a href="https://tiregeeks.com" className="text-[var(--blue)] hover:underline">tiregeeks.com</a>{' '}
            and any related online services, forms, or messaging channels we operate (collectively, the
            &ldquo;Site&rdquo;). By accessing or using the Site you agree to these Terms. If you do not
            agree, please do not use the Site.
          </p>
        </Section>

        <Section title="2. Who We Are">
          <p>
            The Site is operated by Tire Geeks, an automotive tire and wheel service business with
            locations in Sacramento, California. References to &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo; mean Tire Geeks.
          </p>
        </Section>

        <Section title="3. Use of the Site">
          <p>You agree to use the Site only for lawful purposes. You agree not to:</p>
          <ul>
            <li>Use the Site in a way that violates any law or regulation.</li>
            <li>Attempt to gain unauthorized access to the Site or its systems.</li>
            <li>Interfere with the operation of the Site, including by introducing malware or excessive automated traffic.</li>
            <li>Use the Site to harass, defame, or harm any person.</li>
            <li>Scrape, copy, or republish substantial portions of the Site without our written permission.</li>
          </ul>
        </Section>

        <Section title="4. Services, Quotes, and Pricing">
          <p>
            Information on the Site about tires, wheels, services, pricing, availability, and promotions
            is provided for general reference only. Prices, inventory, and offers may change at any time
            and may differ at our physical locations. A quote is not a contract unless it is confirmed in
            writing or in person at one of our shops, and all work is subject to inspection of your
            vehicle. We are not responsible for typographical errors or pricing mistakes.
          </p>
        </Section>

        <Section title="5. Appointments, Walk-Ins, and Service">
          <p>
            Service availability depends on shop capacity, parts availability, and the condition of your
            vehicle. We do our best to honor scheduled times but cannot guarantee a specific wait time.
            All warranties on parts and labor are subject to our written shop policy and the
            manufacturer&apos;s warranty for the specific product.
          </p>
        </Section>

        <Section title="6. Financing">
          <p>
            We offer financing options through third-party partners such as Acima. Financing approvals,
            terms, payments, and customer service for financed transactions are handled directly by the
            financing provider, not by Tire Geeks. We are not responsible for decisions, fees, or terms
            set by these partners. Please review the financing partner&apos;s own terms and privacy policy
            before applying.
          </p>
        </Section>

        <Section title="7. Contact Forms and Messaging">
          <p>
            When you contact us through the Site, by SMS, or through social channels such as Facebook
            Messenger or Instagram Direct, you agree that we may respond using the same channel and the
            contact information you provided. Standard message and data rates may apply. You can opt out
            of promotional messages at any time as described in our{' '}
            <Link href="/privacy" className="text-[var(--blue)] hover:underline">Privacy Policy</Link>.
          </p>
        </Section>

        <Section title="8. Intellectual Property">
          <p>
            All content on the Site, including text, graphics, logos, photos, vehicle build images, and
            the Tire Geeks name and marks, is owned by Tire Geeks or its licensors and is protected by
            copyright, trademark, and other laws. You may view and share the Site for personal,
            non-commercial use. Any other use requires our prior written consent.
          </p>
        </Section>

        <Section title="9. User Content">
          <p>
            If you submit reviews, photos, comments, or other content to us or to our social pages, you
            grant Tire Geeks a non-exclusive, royalty-free, worldwide license to use, reproduce, and
            display that content for marketing and operational purposes. You represent that you own or
            have the rights to the content you submit and that it does not violate any third-party
            rights.
          </p>
        </Section>

        <Section title="10. Third-Party Links and Services">
          <p>
            The Site links to third-party services such as Google Maps, Acima, Facebook, and Instagram.
            We are not responsible for the content, policies, or practices of any third-party site or
            service. Use of those services is governed by their own terms.
          </p>
        </Section>

        <Section title="11. Disclaimers">
          <p>
            The Site is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. To the
            maximum extent permitted by law, Tire Geeks disclaims all warranties of any kind, express or
            implied, including merchantability, fitness for a particular purpose, and non-infringement.
            We do not warrant that the Site will be error-free, secure, or continuously available.
          </p>
        </Section>

        <Section title="12. Limitation of Liability">
          <p>
            To the maximum extent permitted by law, Tire Geeks and its owners, employees, and partners
            will not be liable for any indirect, incidental, special, consequential, or punitive damages,
            or any loss of profits, revenues, data, or goodwill, arising from your use of the Site. Our
            total liability for any claim related to the Site is limited to the amount you paid Tire
            Geeks, if any, in the twelve months before the claim arose. These limits do not apply where
            prohibited by law.
          </p>
        </Section>

        <Section title="13. Indemnification">
          <p>
            You agree to indemnify and hold Tire Geeks harmless from any claims, losses, or expenses
            (including reasonable attorney fees) arising from your use of the Site, your violation of
            these Terms, or your violation of any rights of a third party.
          </p>
        </Section>

        <Section title="14. Governing Law and Disputes">
          <p>
            These Terms are governed by the laws of the State of California, without regard to its
            conflict-of-law rules. Any dispute relating to the Site or these Terms must be brought in the
            state or federal courts located in Sacramento County, California, and you consent to the
            jurisdiction of those courts.
          </p>
        </Section>

        <Section title="15. Changes to These Terms">
          <p>
            We may update these Terms from time to time. Material changes will be posted on this page
            with a new effective date. Your continued use of the Site after changes means you accept the
            updated Terms.
          </p>
        </Section>

        <Section title="16. Contact Us">
          <p>Questions about these Terms? Contact us:</p>
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
            href="/privacy"
            className="font-nav text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--blue)] hover:text-[var(--text-primary)] transition-colors"
          >
            View Privacy Policy →
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
