import { describe, expect, it } from "vitest";
import { ARTICLES } from "../src/utils/homepageContent.js";
import { CATALOG_KEYS, LENS_CATALOG } from "../src/utils/lensCatalog.js";
import { SITE_URL } from "../src/utils/lensMetadata.js";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  collectionPageJsonLd,
  itemListJsonLd,
  websiteJsonLd,
} from "../src/utils/structuredData.js";

describe("structuredData helpers", () => {
  it("builds a WebSite schema with publisher", () => {
    const schema = websiteJsonLd();
    expect(schema["@type"]).toBe("WebSite");
    expect(schema.url).toBe(SITE_URL);
    expect((schema.publisher as Record<string, unknown>).name).toBe("Optical Bench");
  });

  it("builds a CollectionPage schema with freshness", () => {
    const schema = collectionPageJsonLd({
      name: "Lens Library",
      description: "Browse interactive lens diagrams.",
      url: `${SITE_URL}/lenses`,
      route: "/lenses",
    });

    expect(schema["@type"]).toBe("CollectionPage");
    expect(schema.url).toBe(`${SITE_URL}/lenses`);
    expect(schema.datePublished).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(schema.dateModified).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it("builds an ItemList schema", () => {
    const schema = itemListJsonLd({
      name: "Lens Library",
      url: `${SITE_URL}/lenses`,
      items: [
        { name: LENS_CATALOG[CATALOG_KEYS[0]].name, url: `${SITE_URL}/lens/${CATALOG_KEYS[0]}` },
        { name: LENS_CATALOG[CATALOG_KEYS[1]].name, url: `${SITE_URL}/lens/${CATALOG_KEYS[1]}` },
      ],
    });

    expect(schema["@type"]).toBe("ItemList");
    expect(schema.numberOfItems).toBe(2);
    expect((schema.itemListElement as Array<Record<string, unknown>>)[0].position).toBe(1);
  });

  it("builds an Article schema with published and modified dates", () => {
    const article = ARTICLES[0];
    const schema = articleJsonLd({
      title: article.title,
      description: article.summary,
      slug: article.slug,
    });

    expect(schema["@type"]).toBe("Article");
    expect(schema.url).toBe(`${SITE_URL}/articles/${article.slug}`);
    expect(schema.datePublished).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(schema.dateModified).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it("builds a BreadcrumbList schema", () => {
    const schema = breadcrumbJsonLd([
      { name: "Home", url: SITE_URL },
      { name: "Articles", url: `${SITE_URL}/articles` },
    ]);

    expect(schema["@type"]).toBe("BreadcrumbList");
    expect((schema.itemListElement as Array<Record<string, unknown>>)[1].item).toBe(`${SITE_URL}/articles`);
  });
});
