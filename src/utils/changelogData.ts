/**
 * changelogData — manually curated list of user-facing site changes.
 *
 * Entries are ordered newest-first. The ChangelogBox component groups them
 * by date automatically. Add new entries at the top of the CHANGELOG array
 * when merging a user-facing PR; see agent_docs/changelog.md for the full
 * maintenance guide.
 */

export type ChangelogEntryType = "feature" | "fix" | "lens" | "improvement";

export interface ChangelogEntry {
  /** ISO date string (YYYY-MM-DD) matching the PR merge date */
  date: string;
  /** Category tag for badge display */
  type: ChangelogEntryType;
  /** User-facing one-liner in past tense, e.g. "Added X" or "Fixed Y" */
  summary: string;
}

export const CHANGELOG: ChangelogEntry[] = [
  // ── 2026-03-29 ──────────────────────────────────────────────────────────
  {
    date: "2026-03-29",
    type: "feature",
    summary: "Added zoom and pan controls for infinite-resolution diagram inspection",
  },
  // ── 2026-03-28 ──────────────────────────────────────────────────────────
  {
    date: "2026-03-28",
    type: "feature",
    summary: "Added chromatic field curvature chart with per-wavelength R/G/B focus traces",
  },
  {
    date: "2026-03-28",
    type: "feature",
    summary: "Added sagittal coma section with x-intercept fan chart to aberrations drawer",
  },
  {
    date: "2026-03-28",
    type: "fix",
    summary: "Fixed center-field curvature baseline to use real traced focus instead of nominal image plane",
  },
  {
    date: "2026-03-28",
    type: "feature",
    summary: "Added real sagittal ray analysis across aberration views",
  },
  {
    date: "2026-03-28",
    type: "feature",
    summary: "Added field curvature and astigmatic difference analysis",
  },

  // ── 2026-03-27 ──────────────────────────────────────────────────────────
  {
    date: "2026-03-27",
    type: "improvement",
    summary: "Strengthened SEO metadata, sitemap freshness, and social card data",
  },
  {
    date: "2026-03-27",
    type: "lens",
    summary: "Added Fujifilm as a maker — XF 80mm f/2.8 Macro OIS WR and XF 50mm f/1.0 R WR",
  },
  {
    date: "2026-03-27",
    type: "lens",
    summary: "Added Canon standard and telephoto zoom lenses",
  },
  {
    date: "2026-03-27",
    type: "lens",
    summary: "Added Nikon AF-S Micro NIKKOR 105mm f/2.8G IF-ED",
  },
  {
    date: "2026-03-27",
    type: "feature",
    summary: "Added coma analysis with 2D point-cloud preview to aberrations drawer",
  },
  {
    date: "2026-03-27",
    type: "feature",
    summary: "Added meridional coma field footprint analysis to aberrations drawer",
  },
  {
    date: "2026-03-27",
    type: "feature",
    summary: "Separated distortion analysis into its own dedicated drawer tab",
  },
  {
    date: "2026-03-27",
    type: "feature",
    summary: "Added vignetting and relative illumination analysis tab",
  },
  {
    date: "2026-03-27",
    type: "feature",
    summary: "Added longitudinal spherical aberration profile chart",
  },
  {
    date: "2026-03-27",
    type: "feature",
    summary: "Introduced analysis drawer — slide-out panel for optical aberration analysis",
  },
  {
    date: "2026-03-27",
    type: "feature",
    summary: "Added spherical aberration computation engine with real-ray tracing",
  },
  {
    date: "2026-03-27",
    type: "improvement",
    summary: "Made analysis drawer tab rail scrollable on narrow screens",
  },
  {
    date: "2026-03-27",
    type: "improvement",
    summary: "Relocated analysis button to lower-left corner of lens diagram",
  },
  {
    date: "2026-03-27",
    type: "fix",
    summary: "Fixed optical surface overlap in Canon RF lenses",
  },
  {
    date: "2026-03-27",
    type: "fix",
    summary: "Fixed geometry validation errors in Nikon AF-S 105mm f/2.8G",
  },
  {
    date: "2026-03-27",
    type: "fix",
    summary: "Stabilized spherical aberration real-ray chart rendering",
  },
  {
    date: "2026-03-27",
    type: "fix",
    summary: "Fixed distortion calculation to correctly project chief ray to image plane",
  },
  {
    date: "2026-03-27",
    type: "fix",
    summary: "Corrected semi-diameter values across the Nikon Z lens lineup",
  },

  // ── 2026-03-26 ──────────────────────────────────────────────────────────
  {
    date: "2026-03-26",
    type: "feature",
    summary: "Added support for variable-aperture zoom lenses (e.g. f/4.5–5.6)",
  },
  {
    date: "2026-03-26",
    type: "fix",
    summary: "Fixed glass interpenetration in Nikon Z lenses at close-focus distances",
  },
];
