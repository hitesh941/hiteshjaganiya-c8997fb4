import { Target, TrendingUp, BarChart3 } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Result-Focused",
      description: "Every strategy is designed with measurable outcomes in mind.",
    },
    {
      icon: TrendingUp,
      title: "Growth-Oriented",
      description: "Building for sustainable, long-term business growth.",
    },
    {
      icon: BarChart3,
      title: "Data-Driven",
      description: "Decisions backed by analytics and real performance data.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Digital Marketing That Actually Works
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm Hitesh Jaganiya, a digital marketing professional helping businesses grow through structured, result-oriented digital strategies.
              </p>
              <p>
                I work directly with founders and decision-makers to improve visibility, generate quality leads, and scale revenue using SEO, paid advertising, and conversion optimization.
              </p>
              <p>
                I believe digital marketing should be measurable, transparent, and focused on long-term growth — not vanity metrics.
              </p>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="flex gap-5 p-6 bg-card rounded-xl border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
