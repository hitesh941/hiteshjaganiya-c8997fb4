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
    cover: "/blog-top-8-agencies-ahmedabad.svg",
    coverAlt: "Top 8 Digital Marketing Agencies in Ahmedabad — an independent guide for founders",
    datePublished: "2026-09-09",
    dateModified: "2026-09-10",
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
    title: "Digital Marketing Packages in Ahmedabad: ₹15K vs ₹50K vs ₹1L+",
    description:
      "Compare digital marketing packages in Ahmedabad from ₹15K to ₹1L+. See what is included, typical ad spend, SEO work, pricing, and how to choose the right package for your business in 2026.",
    excerpt:
      "What really changes between a ₹15,000, ₹50,000, and ₹1 lakh+ digital marketing package in Ahmedabad? A practical guide to the work, people, ad spend, and expectations behind each tier.",
    cover: "/digital-marketing-packages-ahmedabad.svg",
    coverAlt: "Digital marketing packages and pricing in Ahmedabad — ₹15K, ₹50K and ₹1L+ guide for 2026",
    datePublished: "2026-09-10",
    dateModified: "2026-09-10",
    readingTime: "8 min read",
    category: "Marketing Budget",
    keywords: [
      "digital marketing packages in Ahmedabad",
      "digital marketing cost in Ahmedabad",
      "digital marketing pricing Ahmedabad",
      "SEO packages Ahmedabad",
      "digital marketing agency pricing Ahmedabad",
      "Google Ads management cost Ahmedabad",
    ],
  },
  {
    slug: "google-ads-vs-meta-ads-ahmedabad",
    title: "Google Ads vs Meta Ads: Which Should Ahmedabad Businesses Use First?",
    description:
      "A practical, experience-based comparison of Google Ads and Meta Ads for Ahmedabad businesses deciding where to spend their first advertising rupee.",
    excerpt:
      "Google or Meta? A practical guide for Ahmedabad businesses deciding which advertising platform to use first based on customer intent, product type, budget, and decision stage.",
    cover: "/google-ads-vs-meta-ads-ahmedabad.svg",
    coverAlt: "Google Ads vs Meta Ads for Ahmedabad businesses — which advertising platform should you use first?",
    datePublished: "2026-09-10",
    dateModified: "2026-09-10",
    readingTime: "7 min read",
    category: "Paid Advertising",
    keywords: [
      "Google Ads vs Meta Ads Ahmedabad",
      "Google Ads Ahmedabad",
      "Meta Ads Ahmedabad",
      "Google Ads or Meta Ads",
      "Facebook Ads Ahmedabad",
      "Instagram Ads Ahmedabad",
    ],
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
