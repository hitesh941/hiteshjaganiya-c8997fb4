import { ArrowRight, Search, MousePointerClick, TrendingUp, Share2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "SEO",
      href: "/services/seo",
      description: "Build sustainable search visibility with technical SEO, useful content and local search optimisation.",
      features: ["Technical SEO", "Search Intent", "Local SEO"],
    },
    {
      icon: MousePointerClick,
      title: "Google Ads",
      href: "/services/google-ads",
      description: "Reach people with active buying intent and improve lead quality through focused PPC campaigns.",
      features: ["Search Campaigns", "Conversion Tracking", "Budget Optimisation"],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Strategy",
      href: "/services/digital-marketing-strategy",
      description: "Decide what to do first, which channels deserve attention and how success will be measured.",
      features: ["Business Goals", "Channel Strategy", "Performance Measurement"],
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      href: "/services/social-media-marketing",
      description: "Create a clearer social presence with content and paid campaigns connected to business goals.",
      features: ["Content Planning", "Audience Research", "Paid Social"],
    },
    {
      icon: Sparkles,
      title: "AI Search Visibility",
      href: "/services/ai-search-visibility",
      description: "Make useful, authoritative content easier for modern search and answer systems to understand.",
      features: ["Answer-Focused Content", "Entity Signals", "Topical Coverage"],
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            How I Can Help
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Digital Marketing Services
          </h2>
          <p className="text-lg text-muted-foreground">
            I focus on the channels and priorities that make sense for your business — starting with the fundamentals before adding complexity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 lg:p-8 bg-card rounded-2xl border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-5">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to={service.href}
                className="inline-flex items-center text-sm font-semibold text-primary hover:underline underline-offset-4"
              >
                Explore {service.title}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button asChild variant="hero" size="xl">
            <a href="#contact" className="group">
              Discuss Your Marketing Goals
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
