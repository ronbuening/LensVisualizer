import { describe, expect, it } from "vitest";
import { htmlHasNoindexDirective } from "../../scripts/sitemap-lib.mjs";
import * as scriptSiteUrl from "../../scripts/site-url.mjs";
import * as appSiteUrl from "../../src/utils/seo/siteUrls.js";
import buildMeta from "../../src/generated/build-metadata.json";

describe("sitemap helpers", () => {
  it("detects noindex in comma- or space-separated robots directives", () => {
    expect(htmlHasNoindexDirective('<meta name="robots" content="noindex,follow">')).toBe(true);
    expect(htmlHasNoindexDirective("<meta content='max-snippet:-1 noindex' name='robots'>")).toBe(true);
  });

  it("ignores index directives and non-robots metadata", () => {
    expect(htmlHasNoindexDirective('<meta name="robots" content="index,follow">')).toBe(false);
    expect(htmlHasNoindexDirective('<meta name="description" content="noindex">')).toBe(false);
    expect(htmlHasNoindexDirective("<main>No metadata</main>")).toBe(false);
  });
});

/* Plain-Node build scripts cannot import the TypeScript module, so scripts/site-url.mjs duplicates
 * src/utils/seo/siteUrls.ts. If the copies drift, sitemap <loc> and feed links stop matching each
 * page's canonical tag. */
describe("canonical URL parity between build scripts and the app", () => {
  const edgeCases = [
    "/",
    "/lenses",
    "/lenses/",
    "/sitemap.xml",
    "/feeds/lenses.xml",
    "/lenses?q=nikon",
    "/a#b",
    "//x",
    "x",
  ];

  it("normalizes every prerendered route and edge input identically", () => {
    expect(scriptSiteUrl.SITE_URL).toBe(appSiteUrl.SITE_URL);
    const mismatches = [...buildMeta.routes, ...edgeCases].filter(
      (path) =>
        scriptSiteUrl.canonicalPagePath(path) !== appSiteUrl.canonicalPagePath(path) ||
        scriptSiteUrl.canonicalPageUrl(path) !== appSiteUrl.canonicalPageUrl(path),
    );
    expect(mismatches).toEqual([]);
  });
});
