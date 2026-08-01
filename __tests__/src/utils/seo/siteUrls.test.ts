import { describe, expect, it } from "vitest";
import {
  SITE_URL,
  canonicalPagePath,
  canonicalPageUrl,
  normalizeSitePageUrl,
} from "../../../../src/utils/seo/siteUrls.js";

describe("site URL normalization", () => {
  it("uses Cloudflare's trailing-slash form for application pages", () => {
    expect(canonicalPagePath("/")).toBe("/");
    expect(canonicalPagePath("/lenses")).toBe("/lenses/");
    expect(canonicalPagePath("/lenses?group=mount")).toBe("/lenses/?group=mount");
    expect(canonicalPagePath("/relationships#focus=author:example")).toBe("/relationships/#focus=author:example");
  });

  it("leaves static files, anchors, external URLs, and normalized paths unchanged", () => {
    expect(canonicalPagePath("/feeds/lenses.xml")).toBe("/feeds/lenses.xml");
    expect(canonicalPagePath("/lenses/")).toBe("/lenses/");
    expect(canonicalPagePath("#section")).toBe("#section");
    expect(canonicalPagePath("https://example.com/page")).toBe("https://example.com/page");
  });

  it("does not mistake decimal values in route slugs for file extensions", () => {
    expect(canonicalPagePath("/lens/canon-ef-24mm-f1.4-l-usm")).toBe("/lens/canon-ef-24mm-f1.4-l-usm/");
    expect(canonicalPagePath("/articles/lens-design.v2")).toBe("/articles/lens-design.v2/");
  });

  it("builds and normalizes absolute same-site page URLs", () => {
    expect(canonicalPageUrl("/lens/example")).toBe(`${SITE_URL}/lens/example/`);
    expect(normalizeSitePageUrl(`${SITE_URL}/articles/example`)).toBe(`${SITE_URL}/articles/example/`);
    expect(normalizeSitePageUrl(SITE_URL)).toBe(`${SITE_URL}/`);
    expect(normalizeSitePageUrl("https://example.com/page")).toBe("https://example.com/page");
  });
});
