// @vitest-environment jsdom

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, screen, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import type { ReactElement, ReactNode } from "react";
import { Route, Routes, useLocation } from "react-router";
import HomePage from "../src/pages/HomePage.js";
import ArticlesPage from "../src/pages/ArticlesPage.js";
import ArticlePage from "../src/pages/ArticlePage.js";
import ComparePage from "../src/pages/ComparePage.js";
import NotFoundPage from "../src/pages/NotFoundPage.js";
import { ARTICLE_CONTENT, ARTICLES, HOMEPAGE_ARTICLES } from "../src/utils/homepageContent.js";
import { CATALOG_KEYS, LENS_CATALOG } from "../src/utils/lensCatalog.js";
import { clearBrowserState, installMatchMediaMock, renderWithRouter } from "./testUtils.js";

vi.mock("../src/components/SEOHead.js", () => ({
  default: function SEOHead() {
    return null;
  },
}));

vi.mock("../src/components/ClientOnly.js", () => ({
  default: function ClientOnly({ fallback = null }: { fallback?: ReactNode }) {
    return <>{fallback}</>;
  },
}));

function LocationEcho() {
  const location = useLocation();
  return <div>{`${location.pathname}${location.search}`}</div>;
}

function renderRoutes(initialEntry: string, routes: ReactElement) {
  return renderWithRouter(<HelmetProvider>{routes}</HelmetProvider>, { initialEntries: [initialEntry] });
}

describe("static page renders", () => {
  const scrollTo = vi.fn();

  beforeEach(() => {
    clearBrowserState();
    installMatchMediaMock(false);
    Object.defineProperty(window, "scrollTo", {
      writable: true,
      value: scrollTo,
    });
    scrollTo.mockClear();
  });

  afterEach(() => {
    cleanup();
  });

  it("renders the homepage hero, quick links, and article list", () => {
    renderRoutes(
      "/",
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>,
    );

    expect(screen.getAllByText("Optical Bench").length).toBeGreaterThan(0);
    expect(screen.getByText("Interactive Camera Lens Cross-Section Visualizer")).toBeTruthy();
    expect(screen.getAllByRole("link", { name: /Lens Library/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /Browse by Maker/i }).length).toBeGreaterThan(0);
    expect(screen.getByText("Articles & Guides")).toBeTruthy();
    expect(screen.getByText(HOMEPAGE_ARTICLES[0].title)).toBeTruthy();
  });

  it("redirects legacy lens query URLs on the homepage", async () => {
    const lensKey = CATALOG_KEYS[0];

    renderRoutes(
      `/?lens=${lensKey}`,
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lens/:slug" element={<LocationEcho />} />
      </Routes>,
    );

    await waitFor(() => {
      expect(screen.getByText(`/lens/${lensKey}`)).toBeTruthy();
    });
  });

  it("redirects legacy comparison query URLs and preserves slider params", async () => {
    const [slugA, slugB] = CATALOG_KEYS;

    renderRoutes(
      `/?a=${slugA}&b=${slugB}&focus=0.4&aperture=0.2&zoom=70`,
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/compare/:slugA/:slugB" element={<LocationEcho />} />
      </Routes>,
    );

    await waitFor(() => {
      expect(screen.getByText(`/compare/${slugA}/${slugB}?focus=0.4&aperture=0.2&zoom=70`)).toBeTruthy();
    });
  });

  it("renders the articles archive with article cards", () => {
    renderRoutes(
      "/articles",
      <Routes>
        <Route path="/articles" element={<ArticlesPage />} />
      </Routes>,
    );

    expect(screen.getByText("All Articles")).toBeTruthy();
    expect(screen.getAllByText(ARTICLES[0].title).length).toBeGreaterThan(0);
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, left: 0 });
  });

  it("renders an article page for a known slug", () => {
    const article = HOMEPAGE_ARTICLES[0];
    const entry = ARTICLE_CONTENT[article.slug];

    renderRoutes(
      `/articles/${article.slug}`,
      <Routes>
        <Route path="/articles/:slug" element={<ArticlePage />} />
      </Routes>,
    );

    expect(screen.getAllByText(entry.title).length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: /^← All Articles$/ })).toBeTruthy();
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, left: 0 });
  });

  it("redirects unknown article slugs to the archive", async () => {
    renderRoutes(
      "/articles/not-a-real-article",
      <Routes>
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="/articles" element={<div>articles archive</div>} />
      </Routes>,
    );

    await waitFor(() => {
      expect(screen.getByText("articles archive")).toBeTruthy();
    });
  });

  it("renders compare fallback content for valid lens pairs", () => {
    const [slugA, slugB] = CATALOG_KEYS;

    renderRoutes(
      `/compare/${slugA}/${slugB}`,
      <Routes>
        <Route path="/compare/:slugA/:slugB" element={<ComparePage />} />
      </Routes>,
    );

    expect(screen.getByText(`${LENS_CATALOG[slugA].name} vs ${LENS_CATALOG[slugB].name}`)).toBeTruthy();
    expect(screen.getByText(/Interactive side-by-side comparison available in the viewer above/i)).toBeTruthy();
  });

  it("redirects invalid compare slugs to the lenses index", async () => {
    renderRoutes(
      "/compare/nope/nope-again",
      <Routes>
        <Route path="/compare/:slugA/:slugB" element={<ComparePage />} />
        <Route path="/lenses" element={<div>lens archive</div>} />
      </Routes>,
    );

    await waitFor(() => {
      expect(screen.getByText("lens archive")).toBeTruthy();
    });
  });

  it("renders the 404 page links", () => {
    renderRoutes(
      "/missing",
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>,
    );

    expect(screen.getByText("404")).toBeTruthy();
    expect(screen.getByRole("link", { name: /Go to Optical Bench/i })).toBeTruthy();
    expect(screen.getByRole("link", { name: /Browse all lenses/i })).toBeTruthy();
  });
});
