import React from "react";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { StaticRouter } from "react-router-dom/server";
import SmartObjectivesCompetitiveBenchmarking from "./pages/blog/SmartObjectivesCompetitiveBenchmarking";

export function renderRoute(url: string) {
  const helmetContext: Record<string, any> = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <SmartObjectivesCompetitiveBenchmarking />
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
