import { ArrowRight, Brain, Target, TrendingUp, Search, Share2, MousePointerClick } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "SEO",
      description: "Rank higher on Google and get found by the people already searching for what you offer.",
      features: ["On-Page Optimization", "Technical SEO", "Local SEO"],
    },
    {
      icon: MousePointerClick,
      title: "Google Ads",
      description: "Drive targeted traffic and qualified leads with focused PPC campaigns and ongoing optimisation.",
      features: ["Search Campaigns", "Conversion Tracking", "Budget Optimisation"],
    },
    {
      icon: TrendingUp,
      title: "Strategic Digital Marketing",
      description: "Build a practical marketing strategy around your business goals, customers and growth priorities.",
      features: ["Custom Marketing Plans", "Competitor Analysis", "ROI-Focused Approach"],
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Build your brand and engage your audience with purposeful content and paid social campaigns.",
      features: ["Content Strategy", "Community Management", "Paid Social Ads"],
    },
    {
      icon: Brain,
      title: "AI Optimization",
      description: "Use AI thoughtfully to improve research, content workflows and marketing decision-making.",
      features: ["AI-Assisted Research", "Smart Automation", "Marketing Insights"],
    },
    {
      icon: Target,
      title: "Answer Engine Optimization",
      description: "Improve how your useful content is structured for answer engines, AI search and conversational queries.",
      features: ["Answer-Focused Content", "Search Visibility", "Content Structure"],
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
            How I Can Help
          </h2>
          <p className="text-lg text-muted-foreground">
            I focus on the marketing work that makes sense for your business — clear strategy, practical execution and measurable progress.
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

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
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
