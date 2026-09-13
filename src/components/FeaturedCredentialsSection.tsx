import { Award } from "lucide-react";
import globalHuesLogo from "@/assets/global-hues-logo.png";
import yourstoryLogo from "@/assets/yourstory-logo.svg";

const FeaturedCredentialsSection = () => {
  const certifications = [
    { name: "Google Ads Certified", icon: "🎯" },
    { name: "Meta Blueprint Certified", icon: "📘" },
    { name: "Google Analytics Certified", icon: "📊" },
    { name: "HubSpot Inbound Marketing", icon: "🚀" },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          <div className="lg:pr-10 lg:border-r lg:border-border">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-5">As Seen In</span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Featured On</h3>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Featured by leading media platforms for insights and work in digital marketing and business growth.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="https://theglobalhues.com" target="_blank" rel="noopener noreferrer" className="group flex min-h-24 items-center justify-center p-5 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300">
                <img src={globalHuesLogo} alt="The Global Hues Magazine" className="h-10 md:h-12 w-auto max-w-full object-contain group-hover:scale-105 transition-transform duration-300" />
              </a>
              <a href="https://yourstory.com" target="_blank" rel="noopener noreferrer" className="group flex min-h-24 items-center justify-center p-5 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300">
                <img src={yourstoryLogo} alt="YourStory" className="h-10 md:h-12 w-auto max-w-full object-contain group-hover:scale-105 transition-transform duration-300" />
              </a>
            </div>
          </div>

          <div className="lg:pl-0">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-5">Professional Credentials</span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Certifications</h3>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Professional certifications across the digital marketing platforms and tools I use in my work.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 px-5 py-4 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300">
                  <span className="text-2xl">{cert.icon}</span>
                  <span className="font-medium text-foreground flex-1">{cert.name}</span>
                  <Award className="w-5 h-5 text-primary flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-background p-7 md:p-9">
          <div className="flex flex-col md:flex-row md:items-center gap-7 md:gap-9">
            <img
              src="/assets/hitesh-new-profile-B9JyaFg3.png"
              alt="Hitesh Jaganiya, Digital Marketing Consultant in Ahmedabad"
              width="96"
              height="96"
              className="w-24 h-24 rounded-full object-cover border border-border shrink-0"
            />
            <div className="flex-1">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                About Hitesh Jaganiya
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Digital Marketing Consultant in Ahmedabad
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                I help businesses grow through SEO, Google Ads, content strategy and data-driven
                digital marketing. With 11+ years of experience and 150+ clients served, my focus
                is practical strategy, measurable results and clear reporting.
              </p>
              <a
                href="https://www.linkedin.com/in/hiteshjaganiya/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-5 font-semibold text-primary hover:underline"
              >
                View LinkedIn profile
              </a>
            </div>
            <div className="md:w-56 shrink-0 border-t md:border-t-0 md:border-l border-border pt-5 md:pt-0 md:pl-7">
              <p className="text-sm text-muted-foreground mb-2">Experience</p>
              <p className="text-2xl font-bold text-foreground">11+ years</p>
              <p className="text-sm text-muted-foreground mt-3 mb-2">Clients served</p>
              <p className="text-2xl font-bold text-foreground">150+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCredentialsSection;
