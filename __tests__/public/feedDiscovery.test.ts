import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const template = readFileSync(new URL("../../index.html", import.meta.url).pathname, "utf8");

describe("RSS autodiscovery", () => {
  it("advertises the lens feed first and the article feed second with absolute URLs", () => {
    const links = [...template.matchAll(/<link\b[^>]*>/g)]
      .map((match) => match[0])
      .filter((link) => link.includes('rel="alternate"'));

    expect(links).toHaveLength(2);
    expect(links[0]).toContain('type="application/rss+xml"');
    expect(links[0]).toContain('href="https://surfaceandstop.com/feeds/lenses.xml"');
    expect(links[1]).toContain('type="application/rss+xml"');
    expect(links[1]).toContain('href="https://surfaceandstop.com/feeds/articles.xml"');
  });
});
