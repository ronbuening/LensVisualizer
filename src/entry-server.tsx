/**
 * Server entry point for static prerendering.
 *
 * Renders a given URL path to an HTML string using StaticRouter and
 * react-helmet-async for head extraction.
 */

import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider, HelmetData } from "react-helmet-async";
import type { HelmetServerState } from "react-helmet-async";
import ErrorBoundary from "./components/errors/ErrorBoundary.js";
import HomePage from "./pages/HomePage.js";
import LensPage from "./pages/LensPage.js";
import LensIndexPage from "./pages/LensIndexPage.js";
import MakersIndexPage from "./pages/MakersIndexPage.js";
import MakerPage from "./pages/MakerPage.js";
import NotFoundPage from "./pages/NotFoundPage.js";
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
            <Route path="/" element={<HomePage />} />
            <Route path="/lenses" element={<LensIndexPage />} />
            <Route path="/lens/:slug" element={<LensPage />} />
            <Route path="/makers" element={<MakersIndexPage />} />
            <Route path="/makers/:maker" element={<MakerPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </StaticRouter>
      </HelmetProvider>
    </ErrorBoundary>,
  );

  return { html, helmet: helmetData.context.helmet };
}
