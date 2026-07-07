'use client';

import { useEffect } from 'react';

// TODO: Replace with the real Google review link for the Florin Road location.
const REVIEW_URL_FLORIN = 'https://search.google.com/local/writereview?placeid=REPLACE_WITH_FLORIN_PLACE_ID';

export default function ReviewFlorinPage() {
  useEffect(() => {
    // Immediately send the visitor to the Google review page.
    window.location.replace(REVIEW_URL_FLORIN);
  }, []);

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: '#0A0A0A' }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/tg-logo.png"
        alt="Tire Geeks"
        style={{ width: 180, height: 'auto' }}
        className="mb-8"
      />
      <h1
        className="font-display uppercase text-white mb-4"
        style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: 1.1 }}
      >
        Leave Us a Review
      </h1>
      <p className="font-body mb-8" style={{ fontSize: 16, color: '#9E9E9E', maxWidth: 460 }}>
        Redirecting you to Google to review our Florin Road location. If nothing happens,
        tap the button below.
      </p>
      <a
        href={REVIEW_URL_FLORIN}
        className="px-8 py-3 rounded-full bg-[#D42B2B] text-white font-nav text-sm font-semibold tracking-widest uppercase hover:bg-[#B52525] transition-colors"
      >
        Leave Us a Review
      </a>
    </main>
  );
}
