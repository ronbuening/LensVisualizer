/**
 * Server entry point for static prerendering.
 *
 * Renders a given URL path to an HTML string using StaticRouter and
 * React 19's native metadata hoisting for head extraction. Route definitions come from
 * `src/routes/routeManifest.tsx` — the shared source of truth.
 *
 * The manifest holds dynamic-import loaders (for client code splitting), so
 * every page module is awaited once at module scope below. `render()` itself
 * stays synchronous — prerender.mjs and the SSR tests call it directly, and
 * `renderToString` cannot suspend on un-loaded lazy components.
 */

import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";
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
  helmet: {
    title: { toString: () => string };
    meta: { toString: () => string };
    link: { toString: () => string };
    script: { toString: () => string };
  };
}

const BODY_BOUNDARY = '<template data-prerender-body=""></template>';
const JSON_LD_SCRIPT_PATTERN = /<script(?=[^>]*\btype="application\/ld\+json")[^>]*>[\s\S]*?<\/script>/g;

function headSection(markup: string) {
  return { toString: () => markup };
}

function collectTags(markup: string, pattern: RegExp): string {
  return (markup.match(pattern) ?? []).join("");
}

function splitPrerenderMarkup(markup: string): RenderResult {
  const boundaryIndex = markup.indexOf(BODY_BOUNDARY);
  if (boundaryIndex < 0) throw new Error("React prerender body boundary was not rendered");

  const nativeHead = markup.slice(0, boundaryIndex);
  const bodyWithJsonLd = markup.slice(boundaryIndex + BODY_BOUNDARY.length);
  const jsonLdScripts = collectTags(bodyWithJsonLd, JSON_LD_SCRIPT_PATTERN);
  const headMarkup = nativeHead + jsonLdScripts;

  return {
    html: bodyWithJsonLd.replace(JSON_LD_SCRIPT_PATTERN, ""),
    helmet: {
      title: headSection(collectTags(headMarkup, /<title(?:\s[^>]*)?>[\s\S]*?<\/title>/g)),
      meta: headSection(collectTags(headMarkup, /<meta(?:\s[^>]*)?\/?\s*>/g)),
      link: headSection(collectTags(headMarkup, /<link(?:\s[^>]*)?\/?\s*>/g)),
      script: headSection(collectTags(headMarkup, /<script(?:\s[^>]*)?>[\s\S]*?<\/script>/g)),
    },
  };
}

export function render(url: string): RenderResult {
  const html = renderToString(
    <ErrorBoundary>
      <HelmetProvider>
        <StaticRouter location={url}>
          <template data-prerender-body="" />
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </StaticRouter>
      </HelmetProvider>
    </ErrorBoundary>,
  );

  return splitPrerenderMarkup(html);
}
