import buildMeta from "../generated/build-metadata.json";
import { SITE_NAME, SITE_URL } from "./lensMetadata.js";

interface FreshnessEntry {
  publishedOn: string;
  lastModified: string;
}

export interface ListItemEntry {
  name: string;
  url: string;
}

export interface BreadcrumbEntry {
  name: string;
  url: string;
}

const routeFreshness = buildMeta.routeFreshness as Record<string, FreshnessEntry>;
const lensFreshness = buildMeta.lensFreshness as Record<string, FreshnessEntry>;
const articleFreshness = Object.fromEntries(
  buildMeta.articles.map((article) => [
    article.slug,
    { publishedOn: article.publishedOn, lastModified: article.lastModified },
  ]),
) as Record<string, FreshnessEntry>;

function publisherRef() {
  return {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

function withFreshness(schema: Record<string, unknown>, freshness?: FreshnessEntry) {
  if (!freshness) return schema;
  return {
    ...schema,
    datePublished: freshness.publishedOn,
    dateModified: freshness.lastModified,
  };
}

export function publisherJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export function websiteJsonLd(): Record<string, unknown> {
  return withFreshness(
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      publisher: publisherRef(),
    },
    routeFreshness["/"],
  );
}

export function collectionPageJsonLd({
  name,
  description,
  url,
  route,
}: {
  name: string;
  description: string;
  url: string;
  route: string;
}): Record<string, unknown> {
  return withFreshness(
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name,
      description,
      url,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
      publisher: publisherRef(),
    },
    routeFreshness[route],
  );
}

export function itemListJsonLd({
  name,
  url,
  items,
}: {
  name: string;
  url: string;
  items: ListItemEntry[];
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function breadcrumbJsonLd(items: BreadcrumbEntry[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  slug,
}: {
  title: string;
  description: string;
  slug: string;
}): Record<string, unknown> {
  const url = `${SITE_URL}/articles/${slug}`;
  return withFreshness(
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      url,
      mainEntityOfPage: url,
      author: { "@type": "Person", name: "Ron Buening" },
      publisher: publisherRef(),
    },
    articleFreshness[slug],
  );
}

export function getLensFreshness(lensKey: string): FreshnessEntry | undefined {
  return lensFreshness[lensKey];
}

export function getRouteFreshness(route: string): FreshnessEntry | undefined {
  return routeFreshness[route];
}
