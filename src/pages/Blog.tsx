import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSidebar from "@/components/BlogSidebar";
import { blogPosts, SITE_URL } from "@/data/blogPosts";

const Blog = () => {
  const title = "Blog | SEO & Digital Marketing Insights — Hitesh Jaganiya";
  const description = "Practical SEO, Google Ads and growth strategy articles for Ahmedabad business owners and founders, written by digital marketing consultant Hitesh Jaganiya.";
  const sortedPosts = [...blogPosts].sort((a, b) => b.datePublished.localeCompare(a.datePublished));

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title><meta name="description" content={description} /><meta name="robots" content="index, follow, max-image-preview:large" /><meta property="og:site_name" content="Hitesh Jaganiya" /><link rel="alternate" hrefLang="en-IN" href={`${SITE_URL}/blog`} /><link rel="canonical" href={`${SITE_URL}/blog`} /><meta property="og:type" content="website" /><meta property="og:title" content={title} /><meta property="og:description" content={description} /><meta property="og:url" content={`${SITE_URL}/blog`} /><meta name="twitter:title" content={title} /><meta name="twitter:description" content={description} />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Blog", name: "Hitesh Jaganiya Blog", url: `${SITE_URL}/blog`, author: { "@type": "Person", name: "Hitesh Jaganiya", url: `${SITE_URL}/` }, publisher: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "Hitesh Jaganiya", url: `${SITE_URL}/` }, blogPost: sortedPosts.map((post) => ({ "@type": "BlogPosting", headline: post.title, description: post.description, url: `${SITE_URL}/blog/${post.slug}`, datePublished: post.datePublished, dateModified: post.dateModified, author: { "@type": "Person", name: "Hitesh Jaganiya", url: `${SITE_URL}/#person` }, publisher: { "@id": `${SITE_URL}/#person` } })) })}</script>
      </Helmet>
      <Header />
      <main className="pt-24 md:pt-28">
        <section className="section-padding pt-4 md:pt-8">
          <div className="container-custom">
            <div className="max-w-4xl">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Blog</span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 text-balance">Honest notes on SEO, ads and growth</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">Things I've learned over 11 years of running SEO and Google Ads for businesses in Ahmedabad — written for founders, not for search engines.</p>
            </div>
            <div className="blog-listing-grid grid lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_340px] gap-8 xl:gap-10 mt-10 md:mt-14 items-start">
              <div className="blog-listing-cards grid sm:grid-cols-2 gap-6 xl:gap-8">
                {sortedPosts.map((post) => (
                  <article key={post.slug} className="group bg-card rounded-2xl border border-border overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                    <Link to={`/blog/${post.slug}`} className="block h-full">
                      <div className="overflow-hidden bg-secondary/30"><img src={post.cover} alt={post.coverAlt} className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-[1.02]" loading="lazy" /></div>
                      <div className="p-5 md:p-6">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3"><span className="font-semibold text-primary uppercase tracking-wide">{new Date(post.datePublished).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}</span><span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readingTime}</span></div>
                        <h2 className="text-xl xl:text-2xl font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                        <p className="text-muted-foreground leading-relaxed mb-5">{post.excerpt}</p>
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">Read article <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
              <BlogSidebar />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
