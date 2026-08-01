// @vitest-environment jsdom

import { describe, expect, it } from "vitest";
import {
  buildArticleFeedItems,
  buildLensFeedItems,
  formatRssDate,
  generateRssFeeds,
  renderRssFeed,
  type FeedBuildMetadata,
  type FeedLensSummary,
} from "../../scripts/generate-rss-feeds.mjs";

const freshness = (publishedOn: string, lastModified = publishedOn) => ({ publishedOn, lastModified });

function parseXml(xml: string): XMLDocument {
  const document = new DOMParser().parseFromString(xml, "application/xml");
  expect(document.querySelector("parsererror")?.textContent).toBeUndefined();
  return document;
}

function itemLinks(document: XMLDocument): string[] {
  return Array.from(document.querySelectorAll("item")).map((item) => item.querySelector("link")?.textContent ?? "");
}

const buildMeta: FeedBuildMetadata = {
  lensFreshness: {
    "lens-b": freshness("2026-04-02", "2026-04-03"),
    "hidden-lens": freshness("2026-04-03"),
    "lens-a": freshness("2026-04-02"),
  },
  articles: [
    {
      slug: "series-part-b",
      title: "Series Part B",
      summary: "Second part.",
      tag: "guide",
      series: "example-series",
      seriesOrder: 2,
      ...freshness("2026-04-02", "2026-04-04"),
    },
    {
      slug: "series-part-a",
      title: "Surface & Stop <Primer>\u0001",
      series: "example-series",
      seriesOrder: 1,
      ...freshness("2026-04-02"),
    },
  ],
};

const lensSummaries: FeedLensSummary[] = [
  {
    key: "lens-b",
    name: "Lens B",
    maker: "Maker & Co.",
    specs: ["10 elements", "f/2.8", "50 mm", "ignored fourth spec"],
    patentNumber: "US <123>",
    patentYear: 2026,
    visible: true,
  },
  { key: "hidden-lens", name: "Hidden Lens", visible: false },
  { key: "lens-a", name: "Lens A", visible: true },
];

describe("RSS feed generation", () => {
  it("emits valid RSS with self links, escaped text, stable GUIDs, and every series member", () => {
    const feeds = generateRssFeeds(buildMeta, lensSummaries);
    const lenses = parseXml(feeds.lenses);
    const articles = parseXml(feeds.articles);

    expect(lenses.documentElement.getAttribute("version")).toBe("2.0");
    expect(lenses.querySelector("channel > title")?.textContent).toBe("Surface & Stop — New Lenses");
    expect(lenses.getElementsByTagName("atom:link")[0]?.getAttribute("href")).toBe(
      "https://surfaceandstop.com/feeds/lenses.xml",
    );
    expect(itemLinks(lenses)).toEqual([
      "https://surfaceandstop.com/lens/lens-a",
      "https://surfaceandstop.com/lens/lens-b",
    ]);
    expect(lenses.querySelectorAll("item")).toHaveLength(2);
    expect(lenses.querySelector("item guid")?.getAttribute("isPermaLink")).toBe("true");
    expect(lenses.querySelector("item pubDate")?.textContent).toBe("Thu, 02 Apr 2026 00:00:00 GMT");
    expect(feeds.lenses).toContain("Maker &amp; Co.");
    expect(feeds.lenses).toContain("US &lt;123&gt;");

    expect(itemLinks(articles)).toEqual([
      "https://surfaceandstop.com/articles/series-part-a",
      "https://surfaceandstop.com/articles/series-part-b",
    ]);
    expect(articles.querySelectorAll("item")).toHaveLength(2);
    expect(feeds.articles).toContain("Surface &amp; Stop &lt;Primer&gt;");
    expect(feeds.articles).not.toContain("\u0001");
    expect(articles.querySelector("item description")?.textContent).toBe(
      "Read Surface & Stop <Primer> on Surface & Stop.",
    );
  });

  it("caps feeds at the requested limit after deterministic ordering", () => {
    const articles = Array.from({ length: 55 }, (_, index) => ({
      slug: `article-${String(index).padStart(2, "0")}`,
      title: `Article ${index}`,
      summary: `Summary ${index}`,
      ...freshness("2026-04-02"),
    }));
    const items = buildArticleFeedItems({ lensFreshness: {}, articles }, 50);

    expect(items).toHaveLength(50);
    expect(items[0].url).toBe("https://surfaceandstop.com/articles/article-00");
    expect(items.at(-1)?.url).toBe("https://surfaceandstop.com/articles/article-49");
  });

  it("keeps GUID and publication date stable when an item is edited", () => {
    const original = generateRssFeeds(buildMeta, lensSummaries).articles;
    const editedMeta: FeedBuildMetadata = {
      ...buildMeta,
      articles: buildMeta.articles.map((article) =>
        article.slug === "series-part-a"
          ? { ...article, summary: "Updated summary.", lastModified: "2026-04-05" }
          : article,
      ),
    };
    const edited = generateRssFeeds(editedMeta, lensSummaries).articles;
    const originalItem = parseXml(original).querySelector("item")!;
    const editedItem = parseXml(edited).querySelector("item")!;

    expect(editedItem.querySelector("guid")?.textContent).toBe(originalItem.querySelector("guid")?.textContent);
    expect(editedItem.querySelector("pubDate")?.textContent).toBe(originalItem.querySelector("pubDate")?.textContent);
    expect(edited).toContain("Sun, 05 Apr 2026 00:00:00 GMT");
  });

  it("rejects missing required metadata, duplicate URLs, and invalid dates", () => {
    expect(() => buildLensFeedItems({ lensFreshness: { missing: freshness("2026-04-02") }, articles: [] }, [])).toThrow(
      /missing a summary/,
    );
    expect(() =>
      buildArticleFeedItems({
        lensFreshness: {},
        articles: [{ slug: "bad", title: "", summary: "Bad", ...freshness("2026-04-02") }],
      }),
    ).toThrow(/article title/);
    expect(() => formatRssDate("2026-02-30")).toThrow(/valid calendar date/);
    expect(() =>
      renderRssFeed({
        title: "Feed",
        description: "Description",
        feedUrl: "https://example.com/feed.xml",
        homeUrl: "https://example.com",
        items: [
          {
            title: "One",
            url: "https://example.com/item",
            description: "One",
            ...freshness("2026-04-02"),
          },
          {
            title: "Duplicate",
            url: "https://example.com/item",
            description: "Duplicate",
            ...freshness("2026-04-01"),
          },
        ],
      }),
    ).toThrow(/duplicate item URL/);
  });
});
