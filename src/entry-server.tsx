/**
 * Server entry point for static prerendering.
 *
 * Renders a given URL path to an HTML string using StaticRouter and
 * react-helmet-async for head extraction. Route definitions come from
 * `src/routes/routeManifest.tsx` — the shared source of truth.
 */

import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider, HelmetData } from "react-helmet-async";
import type { HelmetServerState } from "react-helmet-async";
import ErrorBoundary from "./components/errors/ErrorBoundary.js";
import routeManifest from "./routes/routeManifest.js";
import { Routes, Route } from "react-router";

export interface RenderResult {
  html: string;
  helmet: HelmetServerState;
}

export function render(url: string): RenderResult {
  const helmetData = new HelmetData({});

  const html = renderToString(
    <ErrorBoundary>
      <HelmetProvider context={helmetData.context}>
        <StaticRouter location={url}>
          <Routes>
            {routeManifest.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </StaticRouter>
      </HelmetProvider>
    </ErrorBoundary>,
  );

  return { html, helmet: helmetData.context.helmet };
}
