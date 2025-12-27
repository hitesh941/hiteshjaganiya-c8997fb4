import { Target, TrendingUp, BarChart3 } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Genuinely Care",
      description: "Your success is my success. I treat every project like it's my own.",
    },
    {
      icon: TrendingUp,
      title: "Keep It Simple",
      description: "No confusing jargon — just clear plans and honest conversations.",
    },
    {
      icon: BarChart3,
      title: "Real Results",
      description: "I focus on what actually moves the needle for your business.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              A Little About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Hi, I'm Hitesh! Nice to meet you 👋
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a digital marketing enthusiast from Ahmedabad who genuinely loves helping businesses thrive online. As the <strong className="text-foreground">Best Digital Marketing Consultant in Ahmedabad</strong>, there's nothing quite like seeing a client's face light up when the leads start rolling in!
              </p>
              <p>
                I work closely with founders and business owners — not just as a service provider, but as a partner who's invested in your growth. Think of me as that friend who happens to know a lot about SEO and ads.
              </p>
              <p>
                My approach? Keep things simple, be honest about what works, and celebrate every win together. No smoke and mirrors — just good old-fashioned hard work and smart strategies.
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
