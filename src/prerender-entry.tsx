import React from "react";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { StaticRouter } from "react-router-dom/server";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Top8AgenciesAhmedabad from "./pages/blog/Top8AgenciesAhmedabad";
import DigitalMarketingPackagesAhmedabad from "./pages/blog/DigitalMarketingPackagesAhmedabad";
import GoogleAdsVsMetaAdsAhmedabadBudgetFix from "./pages/blog/GoogleAdsVsMetaAdsAhmedabadBudgetFix";
import SeoRealEstateAhmedabad from "./pages/blog/SeoRealEstateAhmedabad";
import GoogleAnalyticsSearchConsoleWithoutAgency from "./pages/blog/GoogleAnalyticsSearchConsoleWithoutAgency";
import SmartObjectivesCompetitiveBenchmarking from "./pages/blog/SmartObjectivesCompetitiveBenchmarking";
import NotFound from "./pages/NotFound";

const pages: Record<string, React.ComponentType> = {
  "/": Index,
  "/blog": Blog,
  "/blog/top-8-digital-marketing-agencies-in-ahmedabad": Top8AgenciesAhmedabad,
  "/blog/digital-marketing-packages-in-ahmedabad": DigitalMarketingPackagesAhmedabad,
  "/blog/google-ads-vs-meta-ads-ahmedabad": GoogleAdsVsMetaAdsAhmedabadBudgetFix,
  "/blog/seo-for-real-estate-businesses-in-ahmedabad": SeoRealEstateAhmedabad,
  "/blog/how-to-read-google-analytics-search-console-without-an-agency": GoogleAnalyticsSearchConsoleWithoutAgency,
  "/blog/smart-objectives-competitive-benchmarking": SmartObjectivesCompetitiveBenchmarking,
};

export function renderRoute(url: string) {
  const Page = pages[url] ?? NotFound;
  const helmetContext: Record<string, any> = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <Page />
      </StaticRouter>
    </HelmetProvider>,
  );

  const helmet = helmetContext.helmet;

  return {
    html,
    head: helmet
      ? [
          helmet.title?.toString(),
          helmet.base?.toString(),
          helmet.meta?.toString(),
          helmet.link?.toString(),
          helmet.style?.toString(),
          helmet.noscript?.toString(),
          helmet.script?.toString(),
        ]
          .filter(Boolean)
          .join("\n")
      : "",
  };
}
