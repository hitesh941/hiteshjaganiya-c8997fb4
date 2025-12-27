import { TrendingUp, DollarSign, Users, CheckCircle } from "lucide-react";

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
      value: "30-45%",
      label: "Reduced Cost Per Lead",
      description: "Optimized campaigns for better ROI",
    },
    {
      icon: Users,
      value: "50+",
      label: "Clients Served",
      description: "Businesses scaled with proven strategies",
    },
  ];

  const achievements = [
    "Increased lead volume by 2–3X for multiple clients",
    "Reduced cost per lead by 30–45% through optimization",
    "Managed and scaled ad budgets efficiently",
    "Improved conversion rates through funnel optimization",
    "Built sustainable organic traffic channels",
  ];

  return (
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
        <div className="grid md:grid-cols-3 gap-8 mb-16">
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

        {/* Achievements List */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-primary-foreground mb-8 text-center">
            Key Achievements
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-primary-foreground/5 rounded-xl"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/90">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
