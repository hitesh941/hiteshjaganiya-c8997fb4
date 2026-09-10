import { Target, TrendingUp, BarChart3 } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      number: "01",
      title: "Business First",
      description: "I start with your business, customers and goals — not with a list of marketing services.",
    },
    {
      icon: TrendingUp,
      number: "02",
      title: "Clear Strategy",
      description: "You'll know what we're doing, why we're doing it, and what success should look like.",
    },
    {
      icon: BarChart3,
      number: "03",
      title: "Measurable Growth",
      description: "SEO, Ads or both — the focus stays on leads, customers and revenue, not impressive-looking reports.",
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
              I don't just run campaigns. I care about what happens after the click.
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm Hitesh Jaganiya — a digital marketing consultant from Ahmedabad with 11+ years of experience in SEO, Google Ads and helping businesses turn online visibility into real enquiries and growth.
              </p>
              <p>
                Over the years, I've worked with businesses at very different stages — from founders figuring out their first marketing strategy to established businesses looking to scale what already works.
              </p>
              <p>
                My approach is pretty simple: <strong className="text-foreground">understand the business first, find what actually moves the needle, and then build a marketing strategy around it.</strong>
              </p>
              <p>
                No unnecessary jargon. No chasing vanity metrics. And definitely no “let's try everything and see what happens.”
              </p>
            </div>
          </div>

          {/* Right Content - What You Can Expect */}
          <div>
            <div className="mb-7">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                What You Can Expect From Me
              </span>
            </div>
            <div className="divide-y divide-border/70">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="group flex gap-5 py-6 first:pt-0 last:pb-0"
                >
                  <div className="flex-shrink-0">
                    <span className="text-sm font-semibold text-primary/70 tracking-wider">
                      {value.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <value.icon className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
