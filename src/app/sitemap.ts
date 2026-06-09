import { galleryBuilds } from '@/data/galleryBuilds';
import { blogPosts } from '@/data/blogPosts';
import { tireSizes } from '@/data/tireSizes';
import { wheelSizes, shouldIndexWheelSize } from '@/data/wheelSizes';
import { fitments, isFitmentComplete } from '@/data/fitments';

export default function sitemap() {
  const base = 'https://tiregeeks.com';

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/services/tires-sacramento`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/services/wheels-sacramento`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/services/alignment-sacramento`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/services/lift-kits-sacramento`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/services/lowering-sacramento`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/services/brakes-sacramento`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/services/leveling-kits-sacramento`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/services/tires-and-wheels-sacramento`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/financing`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/gallery`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/team`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/locations`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/locations/florin-road`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/locations/arden-way`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/neighborhoods/land-park`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/neighborhoods/elk-grove`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/neighborhoods/arden-arcade`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/neighborhoods/carmichael`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.5 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.5 },
    { url: `${base}/tire-sizes`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    ...tireSizes.map(t => ({
      url: `${base}/tire-sizes/${t.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    { url: `${base}/wheel-sizes`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    // Only indexable wheel-size pages go in the sitemap; noindexed (thin) ones
    // stay reachable via the hub but are intentionally excluded here.
    ...wheelSizes.filter(shouldIndexWheelSize).map(w => ({
      url: `${base}/wheel-sizes/${w.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    { url: `${base}/fitment`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    // Only fully-verified fitment pages (factory size + bolt pattern) are indexed;
    // incomplete/uncertain vehicles stay hub-reachable but out of the sitemap.
    ...fitments.filter(isFitmentComplete).map(f => ({
      url: `${base}/fitment/${f.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...blogPosts.map(post => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...galleryBuilds.map(build => ({
      url: `${base}/gallery/${build.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
