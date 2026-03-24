'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import type { BlogPost } from '@/data/blogPosts';
import { getRelatedPosts } from '@/data/blogPosts';

export default function BlogPostClient({ post }: { post: BlogPost | undefined }) {
  const relatedPosts = post ? getRelatedPosts(post, 3) : [];
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const pct = docHeight - winHeight > 0 ? (scrollY / (docHeight - winHeight)) * 100 : 0;
      setProgress(Math.min(pct, 100));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6" style={{ background: '#0A0A0A' }}>
          <h1 className="font-display text-5xl text-white uppercase mb-4">Post Not Found</h1>
          <p className="font-body text-[#9E9E9E] mb-8" style={{ fontSize: 16 }}>The article you are looking for does not exist or has been removed.</p>
          <Link href="/blog" className="px-6 py-3 rounded-full bg-[#D42B2B] text-white font-nav text-sm font-semibold tracking-widest uppercase hover:bg-[#B52525] transition-colors">Back to Blog</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="fixed top-0 left-0 z-50" style={{ height: 3, width: `${progress}%`, background: '#D42B2B', transition: 'width 100ms linear' }} />
      <Navbar />

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 md:px-6" style={{ paddingTop: 100, paddingBottom: 48, background: '#0A0A0A' }}>
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-[#D42B2B]/10 text-[#D42B2B] text-xs font-nav px-3 py-1 rounded-full uppercase tracking-wider mb-6">{post.category}</span>
          <h1 className="font-display uppercase text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>{post.title}</h1>
          <p className="font-body mt-5" style={{ fontSize: 14, color: '#6B7280' }}>{post.date} &middot; {post.readTime} &middot; {post.author}</p>
        </div>
      </section>

      {/* Article Body */}
      <article style={{ background: '#0A0A0A' }}>
        <style dangerouslySetInnerHTML={{ __html: `
          .blog-content h2 { font-family: var(--font-heading); font-size: 22px; font-weight: 700; color: #FFFFFF; margin-top: 2.25rem; margin-bottom: 1rem; }
          .blog-content h3 { font-family: var(--font-heading); font-size: 18px; font-weight: 600; color: #FFFFFF; margin-top: 1.5rem; margin-bottom: 0.75rem; }
          .blog-content p { font-family: var(--font-body); font-size: 16px; color: #D4D4D4; line-height: 1.75; margin-bottom: 1.5rem; }
          @media (min-width: 768px) {
            .blog-content h2 { font-size: 28px; margin-top: 2.5rem; }
            .blog-content h3 { font-size: 22px; margin-top: 2rem; }
            .blog-content p { font-size: 18px; line-height: 1.8; }
          }
          .blog-content ul, .blog-content ol { font-family: var(--font-body); font-size: 16px; color: #D4D4D4; margin-bottom: 1.5rem; padding-left: 1.5rem; }
          .blog-content ul { list-style: disc; }
          .blog-content ol { list-style: decimal; }
          .blog-content ul ::marker, .blog-content ol ::marker { color: #D42B2B; }
          .blog-content li { margin-bottom: 0.5rem; }
          .blog-content strong { color: #FFFFFF; font-weight: 600; }
          .blog-content blockquote { border-left: 3px solid #D42B2B; background: rgba(212, 43, 43, 0.05); padding-left: 1.25rem; padding-top: 0.75rem; padding-bottom: 0.75rem; font-style: italic; color: #9E9E9E; margin: 1.5rem 0; border-radius: 0 0.5rem 0.5rem 0; }
          .blog-content a { color: #D42B2B; text-decoration: underline; text-underline-offset: 2px; }
          .blog-content a:hover { color: #FF4444; }
        `}} />
        <div className="blog-content max-w-[780px] mx-auto px-4 md:px-6 py-8 md:py-12" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section style={{ background: '#111111' }} className="py-16">
          <h2 className="font-display text-3xl text-white text-center uppercase mb-10">Related Posts</h2>
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {relatedPosts.map((rp) => (
              <Link key={rp.id} href={`/blog/${rp.slug}`} className="bg-[#141414] rounded-xl overflow-hidden border border-white/5 group transition-all hover:border-white/10">
                <div className="overflow-hidden" style={{ height: 192 }}>
                  <img src={rp.image} alt={rp.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <span className="inline-block bg-[#D42B2B]/10 text-[#D42B2B] text-xs font-nav px-3 py-1 rounded-full uppercase tracking-wider mb-3">{rp.category}</span>
                  <h3 className="font-heading font-semibold text-white group-hover:text-[#D42B2B] transition-colors" style={{ fontSize: 20, lineHeight: 1.3 }}>{rp.title}</h3>
                  <p className="font-body mt-2 line-clamp-3" style={{ fontSize: 14, color: '#9E9E9E' }}>{rp.excerpt}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-body" style={{ fontSize: 13, color: '#6B7280' }}>{rp.author}</span>
                    <span className="font-body" style={{ fontSize: 13, color: '#6B7280' }}>{rp.date} &middot; {rp.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="flex flex-col items-center text-center py-20 px-6" style={{ background: '#0A0A0A' }}>
        <div className="mx-auto mb-6" style={{ width: 48, height: 3, background: '#D42B2B' }} />
        <h2 className="font-display uppercase text-white mb-8" style={{ fontSize: 'clamp(24px, 4vw, 40px)' }}>Need Help? Visit Tire Geeks!</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/locations" className="px-8 py-3 rounded-full bg-[#D42B2B] text-white font-nav text-sm font-semibold tracking-widest uppercase hover:bg-[#B52525] transition-colors">Find a Location</Link>
          <a href="tel:+19168008786" className="px-8 py-3 rounded-full border border-[#D42B2B] text-[#D42B2B] font-nav text-sm font-semibold tracking-widest uppercase hover:bg-[#D42B2B]/10 transition-colors">Call (916) 800-8786</a>
        </div>
      </section>

      <Footer />
    </>
  );
}
