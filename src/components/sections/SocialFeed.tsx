'use client';

import { Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';

const SOCIAL_POSTS = [
  { image: '/images/social/flyer-winter.png', platform: 'instagram', caption: 'Winter tire deals — $50 off all tires!' },
  { image: '/images/social/flyer-ride-now.png', platform: 'facebook', caption: 'Ride Now. Pay Later. Services starting at $79' },
  { image: '/images/social/flyer-breast-cancer-event.png', platform: 'instagram', caption: 'Strong Tires, Stronger Fighters — Oct 5th Event' },
  { image: '/images/social/flyer-save-the-date.png', platform: 'facebook', caption: 'Breast Cancer Awareness Month — Save the Date!' },
  { image: '/images/social/flyer-pink-cadillac.png', platform: 'instagram', caption: 'Pink Cadillac at our awareness event' },
  { image: '/images/social/flyer-spanish.png', platform: 'facebook', caption: 'Montar Ahora. Paga Después.' },
];

export default function SocialFeed() {
  return (
    <section
      style={{
        background: 'var(--bg-primary)',
      }}
      className="py-12 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          label="FOLLOW US"
          title="TIRE GEEKS ON SOCIAL"
          className="text-center mb-4"
        />
        <p
          className="font-body text-center mb-12"
          style={{ color: 'var(--text-secondary)', fontSize: '18px' }}
        >
          See our latest builds, deals, and behind-the-scenes action.
        </p>

        {/* 3x2 Grid (2x3 on mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {SOCIAL_POSTS.map((post, i) => (
            <div
              key={i}
              className="group relative overflow-hidden cursor-pointer"
              style={{
                aspectRatio: '1 / 1',
                borderRadius: '8px',
              }}
            >
              {/* Post image */}
              <img
                src={post.image}
                alt={post.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Platform badge */}
              <div
                className="absolute top-3 left-3 z-10 flex items-center justify-center w-8 h-8 rounded-full"
                style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
              >
                {post.platform === 'instagram' ? (
                  <Instagram size={16} color="#fff" />
                ) : (
                  <Facebook size={16} color="#fff" />
                )}
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'rgba(212, 43, 43, 0.85)',
                }}
              >
                <span className="font-nav text-[14px] font-semibold tracking-wider text-white text-center px-4">
                  {post.platform === 'instagram' ? 'View on Instagram →' : 'View on Facebook →'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Social CTAs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Instagram CTA */}
          <div
            className="flex flex-col items-center gap-4 p-8"
            style={{
              background: '#141414',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <Instagram size={32} color="#E1306C" />
            <div className="text-center">
              <p className="font-nav text-[13px] font-semibold tracking-wider text-white mb-1">
                @tire.geeks
              </p>
            </div>
            <Link
              href="https://www.instagram.com/tire.geeks"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost font-nav text-[13px] font-semibold tracking-wider px-6 py-3"
            >
              FOLLOW ON INSTAGRAM
            </Link>
          </div>

          {/* Facebook CTA */}
          <div
            className="flex flex-col items-center gap-4 p-8"
            style={{
              background: '#141414',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <Facebook size={32} color="#1877F2" />
            <div className="text-center">
              <p className="font-nav text-[13px] font-semibold tracking-wider text-white mb-1">
                Tire Geeks
              </p>
            </div>
            <Link
              href="https://www.facebook.com/p/Tire-Geeks-61573900123725/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost font-nav text-[13px] font-semibold tracking-wider px-6 py-3"
            >
              LIKE ON FACEBOOK
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
