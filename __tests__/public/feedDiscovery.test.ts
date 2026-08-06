import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { ARTICLE_FEED_PATH, CHANGELOG_FEED_PATH, LENS_FEED_PATH } from "../../src/utils/content/feedMetadata.js";

const template = readFileSync(new URL("../../index.html", import.meta.url).pathname, "utf8");

describe("RSS autodiscovery", () => {
  /* index.html is static and cannot import feedMetadata.ts, so this assertion is
     the guard that its hardcoded discovery links track the shared definition. */
  it("advertises lens, article, and changelog feeds with absolute URLs", () => {
    const links = [...template.matchAll(/<link\b[^>]*>/g)]
      .map((match) => match[0])
      .filter((link) => link.includes('rel="alternate"'));

    expect(links).toHaveLength(3);
    const feedPaths = [LENS_FEED_PATH, ARTICLE_FEED_PATH, CHANGELOG_FEED_PATH];
    for (const [index, feedPath] of feedPaths.entries()) {
      expect(links[index]).toContain('type="application/rss+xml"');
      expect(links[index]).toContain(`href="https://surfaceandstop.com${feedPath}"`);
    }
  });
});
