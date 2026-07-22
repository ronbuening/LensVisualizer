// @vitest-environment jsdom

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, screen, waitFor, within } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import type { ReactElement, ReactNode } from "react";
import { Route, Routes, useLocation } from "react-router";
import HomePage from "../../../src/pages/HomePage.js";
import ArticlesPage from "../../../src/pages/ArticlesPage.js";
import ArticlePage from "../../../src/pages/ArticlePage.js";
import LensPage from "../../../src/pages/LensPage.js";
import ComparePage from "../../../src/pages/ComparePage.js";
import NotFoundPage from "../../../src/pages/NotFoundPage.js";
import { ARTICLE_CONTENT, ARTICLES, HOMEPAGE_ARTICLES } from "../../../src/utils/content/homepageContent.js";
import { CATALOG_KEYS, LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";
import { lensDisplaySubtitle } from "../../../src/utils/catalog/lensPatentMetadata.js";
import { clearBrowserState, installMatchMediaMock, renderWithRouter } from "../../testUtils.js";

vi.mock("../../../src/components/SEOHead.js", () => ({
  default: function SEOHead() {
    return null;
  },
}));

vi.mock("../../../src/components/ClientOnly.js", () => ({
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

    expect(screen.getAllByText("Surface & Stop").length).toBeGreaterThan(0);
    expect(screen.getByText("Interactive Camera Lens Cross-Section Visualizer")).toBeTruthy();
    expect(screen.getAllByRole("link", { name: /Lens Library/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /Browse by Maker/i }).length).toBeGreaterThan(0);
    expect(screen.getByRole("searchbox", { name: /Search lenses, patents, and authors/i })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Search" }).style.width).toBe("30px");
    expect(screen.getByRole("link", { name: "Search" }).style.height).toBe("30px");
    const indexNav = screen.getByRole("navigation", { name: "Catalog indexes" });
    expect(within(indexNav).getByRole("link", { name: "Mounts" }).getAttribute("href")).toBe("/mounts");
    expect(within(indexNav).getByRole("link", { name: "Formats" }).getAttribute("href")).toBe("/formats");
    expect(within(indexNav).getByRole("link", { name: "Authors" }).getAttribute("href")).toBe("/authors");
    expect(within(indexNav).getByRole("link", { name: "Patents" }).getAttribute("href")).toBe("/patents");
    expect(within(indexNav).getByRole("link", { name: "Articles" }).getAttribute("href")).toBe("/articles");
    expect(screen.getByText("Articles & Guides")).toBeTruthy();
    expect(screen.getByText(HOMEPAGE_ARTICLES[0].title)).toBeTruthy();
    const bodyText = document.body.textContent ?? "";
    expect(bodyText.indexOf("Patent-derived optical models")).toBeGreaterThan(bodyText.indexOf("Articles & Guides"));
    expect(screen.getByRole("link", { name: "Sitemap" }).getAttribute("href")).toBe("/sitemap.xml");
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

  it("renders GFM footnote references as article links", () => {
    renderRoutes(
      "/articles/achromat-apochromat",
      <Routes>
        <Route path="/articles/:slug" element={<ArticlePage />} />
      </Routes>,
    );

    expect(document.querySelector('a[href="#user-content-fn-3"]')).toBeTruthy();
    expect(document.getElementById("user-content-fn-3")).toBeTruthy();
    expect(document.querySelector('a[href="#user-content-fnref-3"]')).toBeTruthy();
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

  it("renders structured patent attribution in the lens-page fallback", () => {
    const lensKey = CATALOG_KEYS.find((key) => LENS_CATALOG[key].patentNumber);
    expect(lensKey).toBeTruthy();
    if (!lensKey) return;

    const lens = LENS_CATALOG[lensKey];
    const displaySubtitle = lensDisplaySubtitle(lens);
    expect(displaySubtitle).toBeTruthy();

    renderRoutes(
      `/lens/${lensKey}`,
      <Routes>
        <Route path="/lens/:slug" element={<LensPage />} />
      </Routes>,
    );

    expect(screen.getByText(displaySubtitle ?? "")).toBeTruthy();
    if (lens.subtitle && lens.subtitle !== displaySubtitle) expect(screen.queryByText(lens.subtitle)).toBeNull();
  });

  it("renders hidden reference lens fallback content for debug library links", () => {
    const hiddenKey = "reference-newtonian-side-focus";

    renderRoutes(
      `/lens/${hiddenKey}`,
      <Routes>
        <Route path="/lens/:slug" element={<LensPage />} />
      </Routes>,
    );

    expect(screen.getByText(LENS_CATALOG[hiddenKey].name)).toBeTruthy();
    expect(screen.getByText(/Hidden automatic folded-path regression fixture/i)).toBeTruthy();
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
    expect(screen.getByRole("link", { name: /Go to Surface & Stop/i })).toBeTruthy();
    expect(screen.getByRole("link", { name: /Browse all lenses/i })).toBeTruthy();
  });
});
