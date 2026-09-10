import coverAsset from "@/assets/blog-top-8-agencies-ahmedabad.png.asset.json";

export const SITE_URL = "https://www.hiteshjaganiya.com";

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  datePublished: string;
  dateModified: string;
  readingTime: string;
  category: string;
  keywords: string[];
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "top-8-digital-marketing-agencies-in-ahmedabad",
    title: "Top 8 Digital Marketing Agencies in Ahmedabad",
    description:
      "An independent, experience-based look at 8 digital marketing agencies in Ahmedabad — compiled by Hitesh Jaganiya, a digital marketing consultant with 11 years in the field, for startup founders deciding who to hire.",
    excerpt:
      "Everyone claims to be the best. Here's an honest, consultant's view of 8 digital marketing agencies in Ahmedabad — who each one actually suits, and what to ask before you sign.",
    cover: coverAsset.url,
    coverAlt: "Top 8 Digital Marketing Agencies in Ahmedabad — Sabarmati riverfront at sunrise",
    datePublished: "2026-09-09",
    dateModified: "2026-09-09",
    readingTime: "9 min read",
    category: "Agency Selection",
    keywords: [
      "top digital marketing agencies in Ahmedabad",
      "top 8 digital marketing agencies in ahmedabad",
      "top 10 digital marketing companies in ahmedabad",
      "best digital marketing agency Ahmedabad",
    ],
  },
  {
    slug: "digital-marketing-packages-in-ahmedabad",
    title: "Digital Marketing Packages in Ahmedabad: What You Actually Get at ₹15K vs ₹50K vs ₹1L+",
    description:
      "A practical breakdown of digital marketing package pricing in Ahmedabad — what ₹15,000, ₹50,000, and ₹1 lakh+ typically buy, and how to choose the right level for your business.",
    excerpt:
      "What really changes between a ₹15,000, ₹50,000, and ₹1 lakh+ digital marketing package in Ahmedabad? A practical guide to the work, people, ad spend, and expectations behind each tier.",
    cover: "/placeholder.svg",
    coverAlt: "Digital marketing package pricing guide for businesses in Ahmedabad",
    datePublished: "2026-09-10",
    dateModified: "2026-09-10",
    readingTime: "8 min read",
    category: "Marketing Budget",
    keywords: [
      "digital marketing packages in Ahmedabad",
      "digital marketing cost in Ahmedabad",
      "SEO packages Ahmedabad",
      "digital marketing agency pricing Ahmedabad",
      "Google Ads management cost Ahmedabad",
    ],
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
