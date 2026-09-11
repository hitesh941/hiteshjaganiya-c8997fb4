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
      </div>
    </section>
  );
};

export default FeaturedCredentialsSection;
