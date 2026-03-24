'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { blogPosts, getPostsByCategory, blogCategories } from '@/data/blogPosts';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredPosts = getPostsByCategory(activeCategory);
  const featuredPost = blogPosts.find((p) => p.featured);
  const gridPosts = filteredPosts.filter((p) => p.id !== featuredPost?.id);

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section
        className="relative w-full flex flex-col items-center justify-center text-center px-6"
        style={{
          height: '40vh',
          minHeight: 300,
          background: 'linear-gradient(180deg, #0D0D0D 0%, #1A1A1A 50%, #0D0D0D 100%)',
        }}
      >
        <div className="mx-auto mb-6" style={{ width: 48, height: 3, background: '#D42B2B' }} />
        <h1
          className="font-display uppercase text-white"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1 }}
        >
          The Tire Geeks Knowledge Base
        </h1>
        <p
          className="font-heading mt-4"
          style={{ fontSize: 20, color: '#9E9E9E', maxWidth: 600 }}
        >
          Expert guides on tires, wheels, fitment, and everything in between.
        </p>
      </section>

      {/* ── Category Filter Bar — horizontal scroll on mobile ── */}
      <div className="sticky top-[66px] z-40 bg-[#111111] border-b border-white/5 py-3 md:py-4">
        <div className="flex items-center md:justify-center gap-2 md:gap-3 overflow-x-auto px-4 md:px-6 max-w-7xl mx-auto" style={{ WebkitOverflowScrolling: 'touch', scrollPadding: '0 16px' }}>
          {blogCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 md:px-5 py-2 rounded-full font-nav text-[11px] md:text-xs font-semibold tracking-widest uppercase whitespace-nowrap flex-shrink-0 transition-all ${
                  isActive
                    ? 'bg-[#D42B2B] text-white'
                    : 'bg-transparent border border-[#2A2A2A] text-[#9E9E9E] hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Featured Post ── */}
      {featuredPost && (activeCategory === 'ALL' || featuredPost.category === activeCategory) && (
        <section className="max-w-7xl mx-auto mt-6 md:mt-10 px-4 md:px-6">
          <Link href={`/blog/${featuredPost.slug}`}>
            <div className="grid md:grid-cols-2 bg-[#141414] rounded-xl overflow-hidden border border-white/5 group">
              {/* Image */}
              <div className="relative overflow-hidden" style={{ minHeight: 300 }}>
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block w-fit bg-[#D42B2B]/10 text-[#D42B2B] text-xs font-nav px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                  {featuredPost.category}
                </span>
                <h2
                  className="font-heading font-bold text-white group-hover:text-[#D42B2B] transition-colors"
                  style={{ fontSize: 28, lineHeight: 1.2 }}
                >
                  {featuredPost.title}
                </h2>
                <p
                  className="font-body mt-3 line-clamp-3"
                  style={{ fontSize: 15, color: '#9E9E9E' }}
                >
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <span className="font-body" style={{ fontSize: 13, color: '#6B7280' }}>
                    {featuredPost.author}
                  </span>
                  <span style={{ color: '#6B7280' }}>&middot;</span>
                  <span className="font-body" style={{ fontSize: 13, color: '#6B7280' }}>
                    {featuredPost.date}
                  </span>
                </div>
                <span className="text-[#D42B2B] font-nav text-sm font-semibold tracking-wider mt-5 uppercase">
                  Read More &rarr;
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* ── Blog Grid ── */}
      <section style={{ background: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 py-8 md:py-12 px-4 md:px-6">
          {gridPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="bg-[#141414] rounded-xl overflow-hidden border border-white/5 group transition-all hover:border-white/10"
            >
              {/* Card Image */}
              <div className="overflow-hidden" style={{ height: 192 }}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Card Body */}
              <div className="p-5">
                <span className="inline-block bg-[#D42B2B]/10 text-[#D42B2B] text-xs font-nav px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                  {post.category}
                </span>
                <h3
                  className="font-heading font-semibold text-white group-hover:text-[#D42B2B] transition-colors"
                  style={{ fontSize: 20, lineHeight: 1.3 }}
                >
                  {post.title}
                </h3>
                <p
                  className="font-body mt-2 line-clamp-3"
                  style={{ fontSize: 14, color: '#9E9E9E' }}
                >
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-body" style={{ fontSize: 13, color: '#6B7280' }}>
                    {post.author}
                  </span>
                  <span className="font-body" style={{ fontSize: 13, color: '#6B7280' }}>
                    {post.date} &middot; {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
