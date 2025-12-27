import { ArrowRight, Megaphone, Search, GitBranch, BarChart2, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Megaphone,
      title: "Performance Marketing",
      description: "High-quality leads & sales via Google Ads & Meta Ads",
      features: ["Google Ads Management", "Meta Ads Campaigns", "Retargeting Strategies"],
    },
    {
      icon: Search,
      title: "SEO & Organic Growth",
      description: "Long-term rankings and traffic growth",
      features: ["Technical SEO Audits", "Content Strategy", "Link Building"],
    },
    {
      icon: GitBranch,
      title: "Funnel & Conversion Optimization",
      description: "Turning visitors into customers",
      features: ["Landing Page Design", "A/B Testing", "CRO Strategies"],
    },
    {
      icon: BarChart2,
      title: "Analytics & Tracking Setup",
      description: "GA4, GTM, conversion tracking",
      features: ["GA4 Implementation", "GTM Configuration", "Custom Dashboards"],
    },
    {
      icon: Bot,
      title: "AI-Powered Marketing Automation",
      description: "Smarter workflows and efficiency",
      features: ["Email Automation", "Lead Scoring", "Chatbot Integration"],
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What I Help You With
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive digital marketing solutions tailored to your business goals
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
              Let's Discuss Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
