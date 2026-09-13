import { ArrowRight, Play, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import hiteshProfile from "@/assets/hitesh-new-profile.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-40 lg:pt-20 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 opacity-0 animate-fade-up">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">
                Digital Marketing Consultant in Ahmedabad
              </span>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6 opacity-0 animate-fade-up animation-delay-100">
              <a href="tel:9998311492" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                9998311492
              </a>
            </div>

            {/* Keyword-focused H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6 opacity-0 animate-fade-up animation-delay-200">
              Digital Marketing Consultant in Ahmedabad{" "}
              <span className="text-primary">Helping Businesses Grow</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 opacity-0 animate-fade-up animation-delay-300">
              I help businesses grow through SEO, Google Ads, content strategy and data-driven digital marketing — with a focus on qualified leads, customers and sustainable growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up animation-delay-500">
              <Button asChild variant="hero" size="xl">
                <a href="#contact" className="group">
                  Book a Free Call
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <a href="#services">
                  <Play className="mr-2 w-5 h-5" />
                  See How I Can Help
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-border/50 opacity-0 animate-fade-up animation-delay-600">
              <p className="text-sm text-muted-foreground mb-4">Credentials and hands-on experience</p>
              <div className="flex flex-wrap items-start gap-x-8 gap-y-5">
                <div>
                  <div className="text-2xl font-bold text-foreground">11+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="w-px h-10 bg-border hidden sm:block" />
                <div>
                  <div className="text-2xl font-bold text-foreground">150+</div>
                  <div className="text-sm text-muted-foreground">Clients Served</div>
                </div>
                <div className="w-px h-10 bg-border hidden sm:block" />
                <div>
                  <div className="text-2xl font-bold text-foreground">Google</div>
                  <div className="text-sm text-muted-foreground">Ads & Analytics Certified</div>
                </div>
              </div>
              <a
                href="https://www.linkedin.com/in/hiteshjaganiya/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-5 text-sm font-semibold text-primary hover:underline"
              >
                View LinkedIn profile
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[450px] opacity-0 animate-slide-in-right animation-delay-200">
              <img
                src={hiteshProfile}
                alt="Hitesh Jaganiya, Digital Marketing Consultant in Ahmedabad"
                className="w-full h-auto max-h-[580px] object-contain object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
