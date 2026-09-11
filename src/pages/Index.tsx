import { Quote } from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import LatestInsightsSection from "@/components/LatestInsightsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ResultsSection />
        <LatestInsightsSection />
        <ContactSection />
        <section className="section-padding bg-foreground">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-60" />
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary-foreground leading-relaxed mb-8 italic">
                "We kick off our work with our clients by immersing ourselves in their industry, their vision and their culture."
              </blockquote>
              <p className="text-primary-foreground/70 font-semibold">Hitesh Jaganiya</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
