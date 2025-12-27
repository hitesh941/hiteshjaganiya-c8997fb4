import { ArrowRight, Mail, Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let's discuss your goals and create a strategy that delivers real results. Book a free consultation call to get started.
          </p>

          {/* CTA Card */}
          <div className="bg-card p-8 md:p-12 rounded-2xl border border-border/50 shadow-medium">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Calendar className="w-6 h-6 text-primary" />
              <span className="text-xl font-semibold text-foreground">
                Book a Free Strategy Call
              </span>
            </div>
            
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              In this 30-minute call, we'll review your current marketing, identify opportunities, and outline a clear path forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <a href="mailto:hello@hiteshjaganiya.com" className="group">
                  <Mail className="mr-2 w-5 h-5" />
                  Email Me
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <a href="#" className="group">
                  <MessageSquare className="mr-2 w-5 h-5" />
                  Schedule a Call
                </a>
              </Button>
            </div>

            {/* Trust note */}
            <p className="text-sm text-muted-foreground mt-8">
              No commitment required • 100% Free • Response within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
