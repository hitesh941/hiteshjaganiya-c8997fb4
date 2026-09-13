import { Quote } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ConsultantSeoSection from "@/components/ConsultantSeoSection";
import ConsultantFaqSection from "@/components/ConsultantFaqSection";
import ResultsSection from "@/components/ResultsSection";
import LatestInsightsSection from "@/components/LatestInsightsSection";
import FeaturedCredentialsSection from "@/components/FeaturedCredentialsSection";
import ContactSection from "@/components/ContactSection";
import PeopleAlsoSearchSection from "@/components/PeopleAlsoSearchSection";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.hiteshjaganiya.com";

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Hitesh Jaganiya",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/assets/hitesh-new-profile-B9JyaFg3.png`,
      jobTitle: "Digital Marketing Consultant",
      description:
        "Hitesh Jaganiya is a Digital Marketing Consultant in Ahmedabad helping businesses grow with SEO, Google Ads, and clear, data-driven digital strategies.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.linkedin.com/in/hiteshjaganiya/",
        "https://github.com/hitesh941",
      ],
      knowsAbout: [
        "Digital Marketing",
        "SEO",
        "Google Ads",
        "Meta Ads",
        "Conversion Optimization",
        "Google Analytics",
        "Google Tag Manager",
      ],
      worksFor: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Hitz Digital Marketing",
      url: "https://www.hitzdigitalmarketing.com/",
      description:
        "Hitz Digital Marketing is the digital marketing business associated with Hitesh Jaganiya, providing SEO, Google Ads, social media marketing, local SEO, and web design services.",
      founder: { "@id": `${SITE_URL}/#person` },
      sameAs: ["https://www.hitzdigitalmarketing.com/"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Hitesh Jaganiya",
      description:
        "Hitesh Jaganiya's website covering digital marketing consulting, SEO, Google Ads, and practical growth strategies for businesses.",
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#person` },
      about: { "@id": `${SITE_URL}/#person` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Hitesh Jaganiya | Digital Marketing Consultant in Ahmedabad</title>
        <meta
          name="description"
          content="Hitesh Jaganiya, Digital Marketing Consultant in Ahmedabad, offering SEO, Google Ads, and performance-focused digital marketing strategies."
        />
        <meta name="author" content="Hitesh Jaganiya" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <link rel="alternate" hrefLang="en-IN" href={`${SITE_URL}/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />
        <meta
          property="og:title"
          content="Hitesh Jaganiya | Digital Marketing Consultant in Ahmedabad"
        />
        <meta
          property="og:description"
          content="Hitesh Jaganiya, Digital Marketing Consultant in Ahmedabad, offering SEO, Google Ads, and performance-focused digital marketing strategies."
        />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hitesh Jaganiya" />
        <meta
          name="twitter:title"
          content="Hitesh Jaganiya | Digital Marketing Consultant in Ahmedabad"
        />
        <meta
          name="twitter:description"
          content="Hitesh Jaganiya, Digital Marketing Consultant in Ahmedabad, offering SEO, Google Ads, and performance-focused digital marketing strategies."
        />
        <script type="application/ld+json">{JSON.stringify(homeSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ConsultantSeoSection />
          <ResultsSection />
          <LatestInsightsSection />
          <FeaturedCredentialsSection />
          <section className="section-padding bg-muted/30 border-y border-border/60">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed mb-8 italic">
                  "We kick off our work with our clients by immersing ourselves in their industry, their vision and their culture."
                </blockquote>
                <p className="text-muted-foreground font-semibold">Hitesh Jaganiya</p>
              </div>
            </div>
          </section>
          <ConsultantFaqSection />
          <ContactSection />
          <PeopleAlsoSearchSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
