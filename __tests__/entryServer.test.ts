/**
 * Integration tests for SSR rendering, route matching, and SEO metadata.
 *
 * Calls the real `render(url)` function from entry-server.tsx and asserts
 * on HTML content and react-helmet-async metadata for representative routes.
 *
 * Runs in Node environment (not jsdom) because react-helmet-async uses
 * client-side behavior in browser-like environments, which prevents the
 * server-side helmet context from being populated.
 */

import { describe, it, expect } from "vitest";
import { render } from "../src/entry-server.js";
import { ARTICLES } from "../src/utils/homepageContent.js";
import { CATALOG_KEYS, LENS_CATALOG } from "../src/utils/lensCatalog.js";
import { allMakerSlugs, makerDisplayName, SITE_NAME, SITE_URL } from "../src/utils/lensMetadata.js";

/* ── Fixtures (dynamic, drawn from real catalog) ── */

const TEST_LENS_SLUG = CATALOG_KEYS[0];
const TEST_LENS = LENS_CATALOG[TEST_LENS_SLUG];
const TEST_MAKER_SLUG = allMakerSlugs()[0];
const TEST_MAKER_DISPLAY = makerDisplayName(TEST_MAKER_SLUG)!;
const TEST_ARTICLE = ARTICLES[0];

/* ── Preconditions ── */

describe("SSR test preconditions", () => {
  it("catalog has at least one lens and one maker", () => {
    expect(CATALOG_KEYS.length).toBeGreaterThan(0);
    expect(allMakerSlugs().length).toBeGreaterThan(0);
    expect(TEST_MAKER_DISPLAY).toBeTruthy();
  });
});

/* ── All routes produce valid helmet metadata ── */

describe("SSR render — all routes produce valid helmet output", () => {
  const routes = [
    ["/", "home"],
    ["/lenses", "lens index"],
    [`/lens/${TEST_LENS_SLUG}`, "lens page"],
    [`/compare/${TEST_LENS_SLUG}/${CATALOG_KEYS[1]}`, "compare page"],
    ["/makers", "makers index"],
    [`/makers/${TEST_MAKER_SLUG}`, "maker page"],
    ["/this-route-does-not-exist", "404"],
  ] as const;

  it.each(routes)("%s (%s) returns helmet with title and description", (url) => {
    const { helmet } = render(url);
    expect(helmet).not.toBeNull();
    expect(helmet.title.toString()).toContain("<title");
    expect(helmet.meta.toString()).toContain('name="description"');
  });
});

/* ── Routes with visible SSR content produce non-empty HTML ── */

describe("SSR render — content pages produce non-empty HTML", () => {
  const contentRoutes = [
    ["/lenses", "lens index"],
    [`/lens/${TEST_LENS_SLUG}`, "lens page"],
    ["/makers", "makers index"],
    [`/makers/${TEST_MAKER_SLUG}`, "maker page"],
  ] as const;

  it.each(contentRoutes)("%s (%s) returns non-empty html", (url) => {
    const { html } = render(url);
    expect(html.length).toBeGreaterThan(0);
  });
});

/* ── Home page ── */

describe("SSR render — home page /", () => {
  it("title contains site name", () => {
    const { helmet } = render("/");
    expect(helmet.title.toString()).toContain(SITE_NAME);
  });

  it("canonical points to site root", () => {
    const { helmet } = render("/");
    expect(helmet.link.toString()).toContain(`${SITE_URL}/`);
  });

  it("includes Open Graph and Twitter meta tags", () => {
    const { helmet } = render("/");
    const meta = helmet.meta.toString();
    expect(meta).toContain('property="og:title"');
    expect(meta).toContain('property="og:description"');
    expect(meta).toContain('name="twitter:card"');
  });

  it("includes the default social image tags", () => {
    const { helmet } = render("/");
    const meta = helmet.meta.toString();
    expect(meta).toContain('property="og:image" content="https://opticalbench.net/og-default.png"');
    expect(meta).toContain('property="og:image:width" content="1200"');
    expect(meta).toContain('name="twitter:image" content="https://opticalbench.net/og-default.png"');
  });

  it("includes WebSite and publisher structured data", () => {
    const { helmet } = render("/");
    const scripts = helmet.script.toString();
    expect(scripts).toContain('"@type":"WebSite"');
    expect(scripts).toContain('"@type":"Organization"');
  });
});

/* ── Compare page ── */

describe("SSR render — compare page /compare/:slugA/:slugB", () => {
  const url = `/compare/${TEST_LENS_SLUG}/${CATALOG_KEYS[1]}`;

  it("uses a self canonical URL", () => {
    const { helmet } = render(url);
    expect(helmet.link.toString()).toContain(url);
  });

  it("marks compare pages as noindex", () => {
    const { helmet } = render(url);
    expect(helmet.meta.toString()).toContain('name="robots" content="noindex,follow"');
  });
});

/* ── Lens index ── */

describe("SSR render — lens index /lenses", () => {
  it("title contains 'All Lenses'", () => {
    const { helmet } = render("/lenses");
    expect(helmet.title.toString()).toContain("All Lenses");
  });

  it("canonical contains /lenses", () => {
    const { helmet } = render("/lenses");
    expect(helmet.link.toString()).toContain("/lenses");
  });

  it("includes CollectionPage and ItemList structured data", () => {
    const { helmet } = render("/lenses");
    const scripts = helmet.script.toString();
    expect(scripts).toContain('"@type":"CollectionPage"');
    expect(scripts).toContain('"@type":"ItemList"');
  });
});

/* ── Lens page ── */

describe("SSR render — lens page /lens/:slug", () => {
  it("title contains the lens name", () => {
    const { helmet } = render(`/lens/${TEST_LENS_SLUG}`);
    expect(helmet.title.toString()).toContain(TEST_LENS.name);
  });

  it("canonical contains the lens slug", () => {
    const { helmet } = render(`/lens/${TEST_LENS_SLUG}`);
    expect(helmet.link.toString()).toContain(`/lens/${TEST_LENS_SLUG}`);
  });

  it("includes JSON-LD with TechArticle type", () => {
    const { helmet } = render(`/lens/${TEST_LENS_SLUG}`);
    expect(helmet.script.toString()).toContain("TechArticle");
  });

  it("includes BreadcrumbList structured data and freshness fields", () => {
    const { helmet } = render(`/lens/${TEST_LENS_SLUG}`);
    const scripts = helmet.script.toString();
    expect(scripts).toContain('"@type":"BreadcrumbList"');
    expect(scripts).toContain('"datePublished"');
    expect(scripts).toContain('"dateModified"');
  });

  it("og:type is article", () => {
    const { helmet } = render(`/lens/${TEST_LENS_SLUG}`);
    expect(helmet.meta.toString()).toContain("article");
  });

  it("includes the default social image tags", () => {
    const { helmet } = render(`/lens/${TEST_LENS_SLUG}`);
    const meta = helmet.meta.toString();
    expect(meta).toContain('property="og:image" content="https://opticalbench.net/og-default.png"');
    expect(meta).toContain('name="twitter:image" content="https://opticalbench.net/og-default.png"');
  });

  it("SSR fallback HTML contains the lens name", () => {
    const { html } = render(`/lens/${TEST_LENS_SLUG}`);
    expect(html).toContain(TEST_LENS.name);
  });
});

/* ── Makers index ── */

describe("SSR render — makers index /makers", () => {
  it("title contains 'Lens Makers'", () => {
    const { helmet } = render("/makers");
    expect(helmet.title.toString()).toContain("Lens Makers");
  });

  it("canonical contains /makers", () => {
    const { helmet } = render("/makers");
    expect(helmet.link.toString()).toContain("/makers");
  });

  it("includes CollectionPage and ItemList structured data", () => {
    const { helmet } = render("/makers");
    const scripts = helmet.script.toString();
    expect(scripts).toContain('"@type":"CollectionPage"');
    expect(scripts).toContain('"@type":"ItemList"');
  });
});

/* ── Maker page ── */

describe("SSR render — maker page /makers/:maker", () => {
  it("title contains the maker display name", () => {
    const { helmet } = render(`/makers/${TEST_MAKER_SLUG}`);
    expect(helmet.title.toString()).toContain(TEST_MAKER_DISPLAY);
  });

  it("canonical contains the maker slug", () => {
    const { helmet } = render(`/makers/${TEST_MAKER_SLUG}`);
    expect(helmet.link.toString()).toContain(`/makers/${TEST_MAKER_SLUG}`);
  });

  it("HTML contains the maker display name", () => {
    const { html } = render(`/makers/${TEST_MAKER_SLUG}`);
    expect(html).toContain(TEST_MAKER_DISPLAY);
  });

  it("includes the default social image tags", () => {
    const { helmet } = render(`/makers/${TEST_MAKER_SLUG}`);
    const meta = helmet.meta.toString();
    expect(meta).toContain('property="og:image" content="https://opticalbench.net/og-default.png"');
    expect(meta).toContain('name="twitter:image" content="https://opticalbench.net/og-default.png"');
  });

  it("includes CollectionPage and BreadcrumbList structured data", () => {
    const { helmet } = render(`/makers/${TEST_MAKER_SLUG}`);
    const scripts = helmet.script.toString();
    expect(scripts).toContain('"@type":"CollectionPage"');
    expect(scripts).toContain('"@type":"BreadcrumbList"');
  });
});

/* ── Article page ── */

describe("SSR render — article page /articles/:slug", () => {
  const url = `/articles/${TEST_ARTICLE.slug}`;

  it("title contains the article title", () => {
    const { helmet } = render(url);
    expect(helmet.title.toString()).toContain(TEST_ARTICLE.title);
  });

  it("includes the default social image tags", () => {
    const { helmet } = render(url);
    const meta = helmet.meta.toString();
    expect(meta).toContain('property="og:image" content="https://opticalbench.net/og-default.png"');
    expect(meta).toContain('name="twitter:image" content="https://opticalbench.net/og-default.png"');
  });

  it("includes Article and BreadcrumbList structured data", () => {
    const { helmet } = render(url);
    const scripts = helmet.script.toString();
    expect(scripts).toContain('"@type":"Article"');
    expect(scripts).toContain('"@type":"BreadcrumbList"');
    expect(scripts).toContain('"datePublished"');
    expect(scripts).toContain('"dateModified"');
  });
});

/* ── 404 page ── */

describe("SSR render — 404 page", () => {
  it("title contains 'Page Not Found'", () => {
    const { helmet } = render("/this-route-does-not-exist");
    expect(helmet.title.toString()).toContain("Page Not Found");
  });

  it("does not emit a canonical URL", () => {
    const { helmet } = render("/this-route-does-not-exist");
    expect(helmet.link.toString()).not.toContain('rel="canonical"');
  });

  it("marks the page as noindex", () => {
    const { helmet } = render("/this-route-does-not-exist");
    expect(helmet.meta.toString()).toContain('name="robots" content="noindex,follow"');
  });

  it("HTML contains 'not found' text", () => {
    const { html } = render("/this-route-does-not-exist");
    expect(html.toLowerCase()).toContain("not found");
  });
});

/*
 * Comparison deep-links (?a=KEY&b=KEY&focus=X) are NOT tested here.
 * HomePage's comparison logic uses useSearchParams + useEffect, which
 * do not execute during SSR renderToString. The SSR output for
 * /?a=X&b=Y is identical to /. Client-side URL parsing is already
 * covered by parseComparisonParams.test.ts and useURLSync.test.ts.
 */
