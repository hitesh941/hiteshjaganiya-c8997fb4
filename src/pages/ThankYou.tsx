import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ThankYou = () => {
  return (
    <>
      <Helmet>
        <title>Thank You | Hitesh Jaganiya</title>
        <meta name="description" content="Thank you for contacting Hitesh Jaganiya. Your message has been submitted successfully." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.hiteshjaganiya.com/thank-you" />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center section-padding">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-11 h-11 text-primary" />
              </div>
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Message Received
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Thank You for Reaching Out!
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                Your message has been submitted successfully. I’ll review your inquiry and get back to you within 24 hours.
              </p>
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:opacity-90"
              >
                Back to Homepage
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ThankYou;
