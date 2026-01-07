import { TrendingUp, DollarSign, Users, CheckCircle, Clock, Award, Quote } from "lucide-react";
import globalHuesLogo from "@/assets/global-hues-logo.png";
import yourstoryLogo from "@/assets/yourstory-logo.svg";

const ResultsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "2-3X",
      label: "Lead Volume Increase",
      description: "Consistent growth in qualified lead generation",
    },
    {
      icon: DollarSign,
      value: "20-25%",
      label: "Reduced Cost Per Lead",
      description: "Optimized campaigns for better ROI",
    },
    {
      icon: Users,
      value: "150+",
      label: "Clients Served",
      description: "Businesses scaled with proven strategies",
    },
    {
      icon: Clock,
      value: "9+",
      label: "Years Experience",
      description: "Proven expertise in digital marketing",
    },
  ];

  const achievements = [
    "Increased lead volume by 2–3X for multiple clients",
    "Reduced cost per lead by 20–25% through optimization",
    "Managed and scaled ad budgets efficiently",
    "Improved conversion rates through funnel optimization",
    "Built sustainable organic traffic channels",
  ];

  const certifications = [
    { name: "Google Ads Certified", icon: "🎯" },
    { name: "Meta Blueprint Certified", icon: "📘" },
    { name: "Google Analytics Certified", icon: "📊" },
    { name: "HubSpot Inbound Marketing", icon: "🚀" },
  ];

  return (
    <>
      {/* Results Section - Dark Background */}
      <section id="results" className="section-padding bg-foreground">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Track Record
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Results & Experience
            </h2>
            <p className="text-lg text-primary-foreground/70">
              Proven track record of delivering measurable business growth
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-8 bg-primary-foreground/5 rounded-2xl border border-primary-foreground/10"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-primary-foreground mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-primary-foreground/60">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements Section - White Background */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Key Achievements
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl border border-border"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured On Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-6">
              As Seen In
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
              Featured On
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <a
                href="https://theglobalhues.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300"
              >
                <img
                  src={globalHuesLogo}
                  alt="The Global Hues Magazine"
                  className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </a>
              <a
                href="https://yourstory.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300"
              >
                <img
                  src={yourstoryLogo}
                  alt="YourStory"
                  className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-6">
              Professional Credentials
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
              Certifications
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-4 bg-muted/50 rounded-xl border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300"
                >
                  <span className="text-2xl">{cert.icon}</span>
                  <span className="font-medium text-foreground">{cert.name}</span>
                  <Award className="w-5 h-5 text-primary" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Signature Quote Section */}
      <section className="section-padding bg-foreground">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-60" />
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary-foreground leading-relaxed mb-8 italic">
              "We kick off our work with our clients by immersing ourselves in their industry, their vision and their culture."
            </blockquote>
            <div className="flex flex-col items-center gap-4">
              {/* Placeholder for signature - user will provide later */}
              <div className="w-48 h-16 border-2 border-dashed border-primary-foreground/30 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground/50 text-sm">Signature coming soon</span>
              </div>
              <p className="text-primary-foreground/70 font-semibold">— Hitesh</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResultsSection;
