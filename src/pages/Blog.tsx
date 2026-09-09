import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts, SITE_URL } from "@/data/blogPosts";

const Blog = () => {
  const title = "Blog | SEO & Digital Marketing Insights — Hitesh Jaganiya";
  const description =
    "Practical SEO, Google Ads and growth strategy articles for Ahmedabad business owners and founders, written by digital marketing consultant Hitesh Jaganiya.";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Hitesh Jaganiya Blog",
            url: `${SITE_URL}/blog`,
            author: {
              "@type": "Person",
              name: "Hitesh Jaganiya",
              url: `${SITE_URL}/`,
            },
            blogPost: blogPosts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              url: `${SITE_URL}/blog/${post.slug}`,
              datePublished: post.datePublished,
            })),
          })}
        </script>
      </Helmet>

      <Header />

      <main className="pt-28 md:pt-36">
        <section className="section-padding pt-0">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Blog
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Honest notes on SEO, ads and growth
              </h1>
              <p className="text-lg text-muted-foreground">
                Things I've learned over 11 years of running SEO and Google Ads for
                businesses in Ahmedabad — written for founders, not for search engines.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-card rounded-2xl border border-border overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <img
                      src={post.cover}
                      alt={post.coverAlt}
                      className="w-full aspect-[16/9] object-cover"
                      loading="lazy"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="w-3.5 h-3.5" />
                          {new Date(post.datePublished).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readingTime}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        Read article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
