import { blogPosts, getPostBySlug } from '@/data/blogPosts';
import { getAuthor } from '@/data/authors';
import BlogPostClient from '@/components/blog/BlogPostClient';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Tire Geeks Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const author = post ? getAuthor(post.authorSlug) : undefined;

  const blogPostingSchema = post ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "author": author ? {
      "@type": "Person",
      "name": author.fullName,
      "jobTitle": author.title,
      "url": `https://tiregeeks.com/team#${author.slug}`,
      "knowsAbout": author.expertise,
      "worksFor": {
        "@type": "Organization",
        "name": "Tire Geeks",
        "url": "https://tiregeeks.com"
      }
    } : { "@type": "Organization", "name": "Tire Geeks" },
    "datePublished": post.date,
    "dateModified": post.date,
    "image": "https://tiregeeks.com" + post.image,
    "publisher": {
      "@type": "Organization",
      "name": "Tire Geeks",
      "logo": { "@type": "ImageObject", "url": "https://tiregeeks.com/images/logo.png" }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://tiregeeks.com/blog/" + post.slug }
  } : null;

  const breadcrumbSchema = post ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tiregeeks.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://tiregeeks.com/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": "https://tiregeeks.com/blog/" + post.slug }
    ]
  } : null;

  const faqSchema = post && post.faq && post.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faq.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer }
    }))
  } : null;

  return (
    <>
      {blogPostingSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      )}
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <BlogPostClient post={post} />
    </>
  );
}
