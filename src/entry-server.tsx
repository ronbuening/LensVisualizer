/**
 * Server entry point for static prerendering.
 *
 * Renders a given URL path to an HTML string using StaticRouter and
 * react-helmet-async for head extraction. Route definitions come from
 * `src/routes/routeManifest.tsx` — the shared source of truth.
 *
 * The manifest holds dynamic-import loaders (for client code splitting), so
 * every page module is awaited once at module scope below. `render()` itself
 * stays synchronous — prerender.mjs and the SSR tests call it directly, and
 * `renderToString` cannot suspend on un-loaded lazy components.
 */

import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider, HelmetData } from "react-helmet-async";
import type { HelmetServerState } from "react-helmet-async";
import ErrorBoundary from "./components/errors/ErrorBoundary.js";
import routeManifest from "./routes/routeManifest.js";
import { Routes, Route } from "react-router";

/** Route patterns from the manifest (excluding the catch-all wildcard). */
export const manifestPaths = routeManifest.map((r) => r.path).filter((p) => p !== "*");

/* Top-level await: resolve every code-split page component before any
 * synchronous render() call can run. */
const routes = await Promise.all(
  routeManifest.map(async ({ path, load }) => {
    const PageComponent = (await load()).default;
    return { path, element: <PageComponent /> };
  }),
);

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
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </StaticRouter>
      </HelmetProvider>
    </ErrorBoundary>,
  );

  return { html, helmet: helmetData.context.helmet };
}
