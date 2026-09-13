import React from "react";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { StaticRouter } from "react-router-dom/server";
import Top8AgenciesAhmedabad from "./pages/blog/Top8AgenciesAhmedabad";
import DigitalMarketingPackagesAhmedabad from "./pages/blog/DigitalMarketingPackagesAhmedabad";
import GoogleAdsVsMetaAdsAhmedabadBudgetFix from "./pages/blog/GoogleAdsVsMetaAdsAhmedabadBudgetFix";
import SeoRealEstateAhmedabad from "./pages/blog/SeoRealEstateAhmedabad";
import GoogleAnalyticsSearchConsoleWithoutAgency from "./pages/blog/GoogleAnalyticsSearchConsoleWithoutAgency";
import SmartObjectivesCompetitiveBenchmarking from "./pages/blog/SmartObjectivesCompetitiveBenchmarking";
import FirstYearStartupMarketingBudget from "./pages/blog/FirstYearStartupMarketingBudget";
import Blog from "./pages/Blog";

const routes: Record<string, React.ComponentType> = {
  "/blog": Blog,
  "/blog/top-8-digital-marketing-agencies-in-ahmedabad": Top8AgenciesAhmedabad,
  "/blog/digital-marketing-packages-in-ahmedabad": DigitalMarketingPackagesAhmedabad,
  "/blog/google-ads-vs-meta-ads-ahmedabad": GoogleAdsVsMetaAdsAhmedabadBudgetFix,
  "/blog/seo-for-real-estate-businesses-in-ahmedabad": SeoRealEstateAhmedabad,
  "/blog/how-to-read-google-analytics-search-console-without-an-agency": GoogleAnalyticsSearchConsoleWithoutAgency,
  "/blog/smart-objectives-competitive-benchmarking": SmartObjectivesCompetitiveBenchmarking,
  "/blog/first-year-startup-marketing-budget": FirstYearStartupMarketingBudget,
};

export function render(url: string) {
  const pathname = new URL(url, "https://www.hiteshjaganiya.com").pathname.replace(/\/$/, "") || "/";
  const Page = routes[pathname];

  if (!Page) {
    throw new Error(`No prerender route configured for ${pathname}`);
  }

  const helmetContext: Record<string, unknown> = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={pathname}>
        <Page />
      </StaticRouter>
    </HelmetProvider>,
  );

  return { html, helmet: helmetContext.helmet as any };
}
