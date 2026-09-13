import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const SITE_URL = "https://www.hiteshjaganiya.com";

const services = {
  "/services/seo": {
    title: "SEO Services in Ahmedabad | Hitesh Jaganiya",
    description: "Practical SEO services for businesses in Ahmedabad, covering technical SEO, on-page optimisation, local search and content that targets real customer demand.",
    h1: "SEO That Builds Sustainable Search Visibility",
    intro: "I use SEO to help businesses become easier to find when potential customers are already searching for what they offer. The focus is on useful pages, technical foundations, local visibility and measurable search demand — not vanity rankings.",
    points: ["Technical and on-page SEO foundations", "Keyword and search-intent research", "Local SEO and Google Business Profile support", "Content planning around real customer questions"],
    related: [{ href: "/blog/seo-for-real-estate-businesses-in-ahmedabad", label: "Read: SEO for Real Estate Businesses in Ahmedabad" }],
  },
  "/services/google-ads": {
    title: "Google Ads Services in Ahmedabad | Hitesh Jaganiya",
    description: "Google Ads management for Ahmedabad businesses focused on qualified leads, efficient budgets, conversion tracking and continuous campaign optimisation.",
    h1: "Google Ads Focused on Qualified Leads",
    intro: "Google Ads can put a business in front of people with active buying intent, but only when targeting, landing pages, tracking and budgets work together. I build and optimise campaigns around the business outcome, not just clicks.",
    points: ["Search campaign strategy and account structure", "Keyword, match-type and negative-keyword planning", "Conversion tracking and lead-quality measurement", "Ongoing optimisation of spend, ads and landing-page performance"],
    related: [{ href: "/blog/google-ads-vs-meta-ads-ahmedabad", label: "Read: Google Ads vs Meta Ads for Ahmedabad Businesses" }],
  },
  "/services/digital-marketing-strategy": {
    title: "Digital Marketing Strategy Consultant in Ahmedabad | Hitesh Jaganiya",
    description: "Business-first digital marketing strategy for Ahmedabad companies, connecting customer acquisition goals with the right channels, measurement and priorities.",
    h1: "Digital Marketing Strategy Built Around the Business",
    intro: "A strategy should explain what to do first, why it matters and how success will be measured. I start with the business, customer journey and existing performance before deciding which channels deserve attention.",
    points: ["Business and customer acquisition goals", "Channel prioritisation based on evidence", "Competitor and market review", "Measurement, reporting and practical next steps"],
    related: [{ href: "/blog/digital-marketing-packages-in-ahmedabad", label: "Read: Digital Marketing Packages in Ahmedabad" }, { href: "/blog/first-year-startup-marketing-budget", label: "Read: First-Year Startup Marketing Budget" }],
  },
  "/services/social-media-marketing": {
    title: "Social Media Marketing in Ahmedabad | Hitesh Jaganiya",
    description: "Social media marketing strategy for businesses that want useful content, stronger brand communication and paid social campaigns connected to business goals.",
    h1: "Social Media That Supports the Business",
    intro: "Social media should do more than keep a profile active. I help businesses decide what to communicate, who it is for and where paid promotion makes sense, so content supports awareness, consideration and leads.",
    points: ["Content themes and channel planning", "Audience and competitor research", "Paid social campaign planning", "Performance review and content optimisation"],
    related: [{ href: "/blog/google-ads-vs-meta-ads-ahmedabad", label: "Read: Google Ads vs Meta Ads for Ahmedabad Businesses" }],
  },
  "/services/ai-search-visibility": {
    title: "AI Search Visibility & AEO Services | Hitesh Jaganiya",
    description: "AI search visibility and AEO strategy for businesses that want their useful, authoritative content to be easier for search engines and answer systems to understand.",
    h1: "AI Search Visibility Without the Jargon",
    intro: "AI search is changing how people discover information, but the foundation is still useful content that clearly answers real questions. I focus on structure, topical coverage, clear entities and evidence so your website is easier for modern search systems to understand.",
    points: ["Content structure for answer-focused queries", "Clear entity, topic and author signals", "Useful supporting content around core services", "Measurement and iteration as search behaviour changes"],
    related: [{ href: "/blog/how-to-read-google-analytics-search-console-without-an-agency", label: "Read: How to Read Google Analytics and Search Console Yourself" }],
  },
} as const;

const ServicePage = () => {
  const { pathname } = useLocation();
  const service = services[pathname as keyof typeof services];

  if (!service) return null;

  const url = `${SITE_URL}${pathname}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{service.title}</title>
        <meta name="description" content={service.description} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={url} />
        <link rel="alternate" hrefLang="en-IN" href={url} />
        <link rel="alternate" hrefLang="x-default" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={service.title} />
        <meta property="og:description" content={service.description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="Hitesh Jaganiya" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={service.title} />
        <meta name="twitter:description" content={service.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.h1,
            description: service.description,
            url,
            provider: { "@id": `${SITE_URL}/#person` },
            areaServed: { "@type": "City", name: "Ahmedabad" },
          })}
        </script>
      </Helmet>

      <Header />

      <main>
        <section className="section-padding border-b border-border/50">
          <div className="container-custom max-w-5xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Digital Marketing Service</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">{service.h1}</h1>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">{service.intro}</p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom max-w-5xl grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">What I Focus On</h2>
              <ul className="space-y-5">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="rounded-2xl border border-border/60 bg-card p-7 shadow-soft h-fit">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Related reading</p>
              <div className="space-y-4">
                {service.related.map((item) => (
                  <Link key={item.href} to={item.href} className="block font-medium hover:text-primary transition-colors">
                    {item.label}
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Want to work out what makes sense for your business?</h2>
            <p className="text-lg text-muted-foreground mb-8">Let's look at your goals, current setup and the next practical step.</p>
            <Button asChild variant="hero" size="xl">
              <a href="/#contact" className="group">
                Book a Free Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicePage;
