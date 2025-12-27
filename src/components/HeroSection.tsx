import { ArrowRight, Play, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import hiteshProfile from "@/assets/hitesh-profile-fixed.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-40 lg:pt-20 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/3 rounded-full blur-2xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 opacity-0 animate-fade-up">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">
                Hey there! 👋 Welcome to my corner of the internet
              </span>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6 opacity-0 animate-fade-up animation-delay-100">
              <a href="tel:9998311492" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                9998311492
              </a>
              <a href="mailto:hphitesh941@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                hphitesh941@gmail.com
              </a>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6 opacity-0 animate-fade-up animation-delay-200">
              Let's Grow Your Business{" "}
              <span className="text-primary">Together</span> 🌱
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-4 opacity-0 animate-fade-up animation-delay-300">
              I help amazing businesses like yours get found online and connect with the right people.
            </p>

            {/* Supporting line */}
            <p className="text-base text-muted-foreground mb-8 opacity-0 animate-fade-up animation-delay-400">
              AIO | AEO | Strategic Digital Marketing | SEO | Social Media Marketing | Google Adwords
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up animation-delay-500">
              <Button asChild variant="hero" size="xl">
                <a href="#contact" className="group">
                  Let's Chat — It's Free!
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
              <p className="text-sm text-muted-foreground mb-4">Trusted by happy clients across India</p>
              <div className="flex items-center gap-8">
                <div>
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <div className="text-2xl font-bold text-foreground">2-3x</div>
                  <div className="text-sm text-muted-foreground">More Leads</div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <div className="text-2xl font-bold text-foreground">💚</div>
                  <div className="text-sm text-muted-foreground">Honest Work</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative opacity-0 animate-slide-in-right animation-delay-200">
              {/* Image container with decorative elements */}
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-3xl blur-xl" />
                
                {/* Main image with white background */}
                <div className="relative w-72 md:w-80 lg:w-96 aspect-[3/4] rounded-2xl overflow-hidden shadow-strong bg-white">
                  <img
                    src={hiteshProfile}
                    alt="Hitesh Jaganiya - Digital Marketing Professional"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Animated Digital Marketing Elements */}
                {/* SEO Icon - Top Left */}
                <div className="absolute -top-6 -left-6 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
                  <span className="text-2xl">🔍</span>
                </div>
                
                {/* Growth Chart - Top Right */}
                <div className="absolute -top-4 -right-8 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center animate-pulse">
                  <span className="text-2xl">📈</span>
                </div>
                
                {/* Target/Ads - Middle Right */}
                <div className="absolute top-1/3 -right-10 w-12 h-12 bg-primary/90 rounded-full shadow-lg flex items-center justify-center animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
                  <span className="text-xl">🎯</span>
                </div>
                
                {/* Social Media - Bottom Right */}
                <div className="absolute bottom-1/4 -right-8 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                  <span className="text-2xl">💬</span>
                </div>
                
                {/* Email Marketing - Bottom Left */}
                <div className="absolute -bottom-4 -left-6 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center animate-bounce" style={{ animationDuration: '2.8s', animationDelay: '0.3s' }}>
                  <span className="text-2xl">✉️</span>
                </div>
                
                {/* Analytics - Middle Left */}
                <div className="absolute top-1/2 -left-10 w-12 h-12 bg-primary/90 rounded-full shadow-lg flex items-center justify-center animate-pulse" style={{ animationDelay: '0.7s' }}>
                  <span className="text-xl">📊</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
