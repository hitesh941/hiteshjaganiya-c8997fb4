import { Helmet } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Top8AgenciesAhmedabad from "./pages/blog/Top8AgenciesAhmedabad";
import DigitalMarketingPackagesAhmedabad from "./pages/blog/DigitalMarketingPackagesAhmedabad";
import NotFound from "./pages/NotFound";

const SITE_URL = "https://www.hiteshjaganiya.com";
const PUBLISHER_NAME = "Hitz Digital Marketing";
const PUBLISHER_URL = "https://www.hitzdigitalmarketing.com/";

const RouteSeo = () => {
  const { pathname } = useLocation();
  const packagePath = "/blog/digital-marketing-packages-in-ahmedabad";
  const isPackage = pathname === packagePath;
  const isBlogArticle = pathname.startsWith("/blog/");
  const isHome = pathname === "/";
  const isNotFound = pathname !== "/" && pathname !== "/blog" && !pathname.startsWith("/blog/");

  if (isPackage) {
    const title = "Digital Marketing Packages in Ahmedabad: ₹15K vs ₹50K vs ₹1L+";
    const description =
      "Compare digital marketing packages in Ahmedabad from ₹15K to ₹1L+. See what is included, ad spend, SEO, pricing, and how to choose the right package in 2026.";
    const url = `${SITE_URL}${packagePath}`;
    const image = `${SITE_URL}/digital-marketing-packages-ahmedabad.svg`;

    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="Hitesh Jaganiya" />
        <meta name="publisher" content={PUBLISHER_NAME} />
        <link rel="canonical" href={url} />
        <link rel="alternate" hrefLang="en-IN" href={url} />
        <meta property="article:publisher" content={PUBLISHER_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Hitesh Jaganiya" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content="Digital marketing packages and pricing in Ahmedabad for 2026" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:image:alt" content="Digital marketing packages and pricing in Ahmedabad for 2026" />
      </Helmet>
    );
  }

  if (isBlogArticle) {
    return (
      <Helmet>
        <meta name="publisher" content={PUBLISHER_NAME} />
        <meta property="article:publisher" content={PUBLISHER_URL} />
      </Helmet>
    );
  }

  if (isHome) {
    const title = "Hitesh Jaganiya | Digital Marketing Consultant in Ahmedabad";
    const description =
      "Hitesh Jaganiya is a Digital Marketing Consultant in Ahmedabad helping businesses grow with SEO, Google Ads, and data-driven digital marketing strategies.";
    const url = `${SITE_URL}/`;

    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={url} />
      </Helmet>
    );
  }

  if (isNotFound) {
    return (
      <Helmet>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
    );
  }

  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/blog/top-8-digital-marketing-agencies-in-ahmedabad"
            element={<Top8AgenciesAhmedabad />}
          />
          <Route
            path="/blog/digital-marketing-packages-in-ahmedabad"
            element={<DigitalMarketingPackagesAhmedabad />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <RouteSeo />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
