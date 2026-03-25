/**
 * Homepage content registry — articles, announcements, and article page content.
 *
 * Adding a new article:
 *   1. Add an entry to the ARTICLES array (newest first)
 *   2. If it has a standalone page, add an entry to ARTICLE_CONTENT
 *   3. The homepage shows the first HOMEPAGE_ARTICLE_LIMIT entries
 *
 * Adding a new lens announcement:
 *   1. Add an entry to the LENS_ANNOUNCEMENTS array (newest first)
 *   2. The lensKey must match a key in LENS_CATALOG
 */

import opticsPrimer from "../content/OpticsPrimerSimple.md?raw";
import opticsPrimerIntermediate from "../content/OpticsPrimerIntermediate.md?raw";
import aberrationsPrimer from "../content/AberrationsPrimerSimple.md?raw";
import aberrationsPrimerIntermediate from "../content/AberrationsPrimerIntermediate.md?raw";
import aboutSite from "../content/AboutSite.md?raw";
import aboutMe from "../content/AboutMe.md?raw";

/* ── Types ─────────────────────────────────────────────────────────── */

export interface HomepageArticle {
  /** URL-safe slug — used in /articles/:slug routes */
  slug: string;
  /** Display title */
  title: string;
  /** ISO date string for sorting/display (e.g. "2026-03-15") */
  date: string;
  /** 1-2 sentence summary shown on homepage card */
  summary: string;
  /** Where the card links to: internal path (e.g. "/articles/optics-primer") */
  linkTo: string;
  /** Optional category tag displayed on the card */
  tag?: "article" | "announcement" | "guide";
}

export interface LensAnnouncement {
  /** Lens catalog key — must exist in LENS_CATALOG */
  lensKey: string;
  /** ISO date string */
  date: string;
  /** Short announcement text */
  blurb: string;
}

export interface ArticleContentEntry {
  title: string;
  description: string;
  markdown: string;
}

/* ── Constants ─────────────────────────────────────────────────────── */

/** Maximum articles shown on the homepage before "View all" link appears */
export const HOMEPAGE_ARTICLE_LIMIT = 5;

/* ── Article Content Registry ──────────────────────────────────────── */

/**
 * Maps article slugs to their full page content.
 * Used by ArticlePage to render standalone article pages.
 */
export const ARTICLE_CONTENT: Record<string, ArticleContentEntry> = {
  "optics-primer": {
    title: "How Camera Lenses Work",
    description:
      "A gentle introduction to refraction, focal length, and how multiple glass elements combine to form an image.",
    markdown: opticsPrimer,
  },
  "optics-primer-intermediate": {
    title: "Optics In More Detail",
    description:
      "A deeper look at optical design principles including Petzval sums, field curvature correction, and retrofocus designs.",
    markdown: opticsPrimerIntermediate,
  },
  "aberrations-primer": {
    title: "Understanding Aberrations",
    description:
      "An introduction to the optical aberrations that lens designers work to minimize — spherical, coma, astigmatism, and more.",
    markdown: aberrationsPrimer,
  },
  "aberrations-primer-intermediate": {
    title: "Aberrations In Depth",
    description:
      "Advanced aberration concepts including higher-order effects, balancing strategies, and how aspherical surfaces help.",
    markdown: aberrationsPrimerIntermediate,
  },
  "about-site": {
    title: "About Optical Bench",
    description: "How this interactive lens visualization tool was built and what makes it unique.",
    markdown: aboutSite,
  },
  "about-author": {
    title: "About the Author",
    description: "Meet the creator of Optical Bench — background in photography and optical engineering.",
    markdown: aboutMe,
  },
};

/* ── Articles ──────────────────────────────────────────────────────── */

/**
 * Articles ordered newest-first. Add new entries at the top.
 * The homepage shows the first HOMEPAGE_ARTICLE_LIMIT entries;
 * the /articles page shows all.
 */
export const ARTICLES: HomepageArticle[] = [
  {
    slug: "aberrations-primer-intermediate",
    title: "Aberrations In Depth",
    date: "2026-03-20",
    summary:
      "Advanced aberration concepts including higher-order effects, balancing strategies, and aspherical surfaces.",
    linkTo: "/articles/aberrations-primer-intermediate",
    tag: "guide",
  },
  {
    slug: "aberrations-primer",
    title: "Understanding Aberrations",
    date: "2026-03-18",
    summary:
      "An introduction to the optical aberrations that lens designers work to minimize — spherical, coma, astigmatism, and more.",
    linkTo: "/articles/aberrations-primer",
    tag: "guide",
  },
  {
    slug: "optics-primer-intermediate",
    title: "Optics In More Detail",
    date: "2026-03-15",
    summary:
      "A deeper look at optical design principles including Petzval sums, field curvature correction, and retrofocus designs.",
    linkTo: "/articles/optics-primer-intermediate",
    tag: "guide",
  },
  {
    slug: "optics-primer",
    title: "How Camera Lenses Work",
    date: "2026-03-12",
    summary:
      "A gentle introduction to refraction, focal length, and how multiple glass elements combine to form an image.",
    linkTo: "/articles/optics-primer",
    tag: "guide",
  },
  {
    slug: "about-site",
    title: "About Optical Bench",
    date: "2026-03-10",
    summary: "How this interactive lens visualization tool was built and what makes it unique.",
    linkTo: "/articles/about-site",
    tag: "article",
  },
  {
    slug: "about-author",
    title: "About the Author",
    date: "2026-03-08",
    summary: "Meet the creator of Optical Bench — background in photography and optical engineering.",
    linkTo: "/articles/about-author",
    tag: "article",
  },
];

/* ── Lens Announcements ────────────────────────────────────────────── */

/**
 * Recent lens additions, newest-first.
 * Each references a CATALOG_KEYS entry — the homepage component
 * derives name/specs from the catalog automatically.
 */
export const LENS_ANNOUNCEMENTS: LensAnnouncement[] = [];
