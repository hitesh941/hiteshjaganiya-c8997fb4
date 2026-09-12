import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const LatestInsightsSection = () => {
  const latestPosts = [...blogPosts]
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished))
    .slice(0, 3);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Latest Insights
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Digital Marketing Insights by Hitesh Jaganiya
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Practical insights on SEO, Google Ads, Meta Ads and digital marketing for businesses in Ahmedabad and beyond.
            </p>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all whitespace-nowrap"
          >
            View All Blogs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <article
              key={post.slug}
              className="group bg-card rounded-2xl border border-border overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <Link to={`/blog/${post.slug}`} className="block h-full">
                <div className="overflow-hidden bg-secondary/30">
                  <img
                    src={post.cover}
                    alt={post.coverAlt}
                    className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="font-semibold text-primary uppercase tracking-wide">
                      {new Date(post.datePublished).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readingTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestInsightsSection;
