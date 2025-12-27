import { ArrowRight, Brain, Target, TrendingUp, Search, Share2, MousePointerClick } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "AIO (AI Optimization)",
      description: "Leverage artificial intelligence to optimize your digital presence",
      features: ["AI-Powered Insights", "Smart Automation", "Predictive Analytics"],
    },
    {
      icon: Target,
      title: "AEO (Answer Engine Optimization)",
      description: "Get featured in AI-powered search results and voice assistants",
      features: ["Voice Search Ready", "Featured Snippets", "AI Search Visibility"],
    },
    {
      icon: TrendingUp,
      title: "Strategic Digital Marketing",
      description: "Comprehensive strategies tailored to your business goals",
      features: ["Custom Marketing Plans", "Competitor Analysis", "ROI-Focused Approach"],
    },
    {
      icon: Search,
      title: "SEO",
      description: "Rank higher on Google and get found by your ideal customers",
      features: ["On-Page Optimization", "Technical SEO", "Local SEO"],
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Build your brand and engage with your audience on social platforms",
      features: ["Content Strategy", "Community Management", "Paid Social Ads"],
    },
    {
      icon: MousePointerClick,
      title: "Google Adwords",
      description: "Drive targeted traffic and leads with effective PPC campaigns",
      features: ["Search Campaigns", "Display Advertising", "Remarketing"],
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            How I Can Help
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Services Made Simple 🎯
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're just starting out or ready to scale, I've got your back with friendly, no-nonsense digital marketing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 lg:p-8 bg-card rounded-2xl border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-5">
                {service.description}
              </p>

              {/* Features */}
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

        {/* CTA */}
        <div className="text-center mt-16">
          <Button asChild variant="hero" size="xl">
            <a href="#contact" className="group">
              Let's Have a Chat!
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
