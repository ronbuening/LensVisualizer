import { describe, expect, it } from "vitest";
import { htmlHasNoindexDirective } from "../../scripts/sitemap-lib.mjs";

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
