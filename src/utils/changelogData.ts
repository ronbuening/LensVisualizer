/**
 * changelogData — manually curated list of user-facing site changes.
 *
 * Entries are ordered newest-first. The ChangelogBox component groups them
 * by date automatically. Add new entries at the top of the CHANGELOG array
 * when merging a user-facing PR; see agent_docs/changelog.md for the full
 * maintenance guide.
 */

export type ChangelogEntryType = "feature" | "fix" | "lens" | "improvement" | "article";

export interface ChangelogEntry {
  /** ISO date string (YYYY-MM-DD) matching the PR merge date */
  date: string;
  /** Category tag for badge display */
  type: ChangelogEntryType;
  /** User-facing one-liner in past tense, e.g. "Added X" or "Fixed Y" */
  summary: string;
}

export const CHANGELOG: ChangelogEntry[] = [
  // ── 2026-04-25 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-25",
    type: "fix",
    summary:
      "Improves accuracy of Canon RF and EF lens diagrams",
  },
  {
    date: "2026-04-25",
    type: "lens",
    summary:
      "Added three Nikon Perspective Control lenses: PC NIKKOR 19mm f/4E ED, PC NIKKOR 24mm f/3.5D ED, and PC NIKKOR 45mm f/2.8D ED",
  },
  // ── 2026-04-24 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-24",
    type: "improvement",
    summary: "Added an Olympus maker page with company history",
  },
  {
    date: "2026-04-24",
    type: "lens",
    summary: "Added three Olympus fast normals: Zuiko 50mm f/1.2, 50mm f/1.4, and 55mm f/1.2",
  },
  // ── 2026-04-23 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-23",
    type: "improvement",
    summary: "Improved slider performance — analysis tabs and bokeh now update only after dragging stops",
  },
  {
    date: "2026-04-23",
    type: "lens",
    summary:
      "Added Nikon AF-S 24-70mm f/2.8E ED VR, Nikon AF-S 70-200mm f/2.8E FL ED VR, and Nikon AF-S 80-400mm f/4.5-5.6E ED VR",
  },
  {
    date: "2026-04-23",
    type: "lens",
    summary: "Added Canon RF 24-105mm f/2.8 L, Zeiss Biogon 21mm, and Distagon 35mm",
  },
  // ── 2026-04-22 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-22",
    type: "lens",
    summary: "Added Canon RF f/1.2 primes and Voigtländer Nokton 35mm f/1.2",
  },
  // ── 2026-04-21 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-21",
    type: "article",
    summary: "Added Pupil Geometry article series covering entrance pupil, exit pupil, telecentricity, and more",
  },
  {
    date: "2026-04-21",
    type: "improvement",
    summary:
      "Improved element outline rendering, added a 10% boundary-gap clearance margin, and audited production semi-diameters",
  },
  {
    date: "2026-04-21",
    type: "fix",
    summary: "Fixed Canon RF 24-105mm f/4 L close-focus behavior",
  },
  {
    date: "2026-04-21",
    type: "lens",
    summary: "Added Canon RF 24-105mm f/4 L, Nikon Z 40mm f/2, and two Ricoh GR lenses",
  },
  // ── 2026-04-20 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-20",
    type: "lens",
    summary: "Added Canon EF 50mm f/1.0L USM and Canon RF 85mm f/2 Macro IS STM",
  },
  // ── 2026-04-19 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-19",
    type: "lens",
    summary: "Added Fujifilm XF 35mm f/1.4 R and XF 60mm f/2.4 R Macro",
  },
  // ── 2026-04-18 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-18",
    type: "improvement",
    summary: "Improved entrance and exit pupil overlay and button readability",
  },
  {
    date: "2026-04-18",
    type: "lens",
    summary: "Added Leica Elmarit-R 28mm f/2.8 and Leica Elmarit 90mm f/2.8",
  },
  // ── 2026-04-17 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-17",
    type: "feature",
    summary: "Added Pupils analysis tab showing entrance and exit pupil position shift across the field",
  },
  {
    date: "2026-04-17",
    type: "feature",
    summary: "Added entrance and exit pupil overlay toggle to the diagram controls",
  },
  {
    date: "2026-04-17",
    type: "lens",
    summary:
      "Added Canon RF 24-50mm f/4-6.3 IS STM, Nikon L35AF 35mm f/2.8, Nikon Nikkor Z 24-50mm f/4-6.3, and Nikon Nikkor Z 35mm f/1.2 S",
  },
  // ── 2026-04-16 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-16",
    type: "improvement",
    summary: "Improved bokeh, spherical aberration, and coma analysis accuracy and displays",
  },
  {
    date: "2026-04-16",
    type: "improvement",
    summary: "New logo and social media card",
  },
  {
    date: "2026-04-16",
    type: "lens",
    summary:
      "Added Fujifilm XF 16-55mm f/2.8 R LM WR, XF 16-80mm f/2.8 R OIS WR, XF 50-140mm f/2.8 R LM OIS WR, and XF 200mm f/2 R LM OIS WR",
  },
  // ── 2026-04-15 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-15",
    type: "fix",
    summary: "Fixed semi-diameter shaping and rear-group clearance in the Canon RF 28-70mm F2 L USM",
  },
  {
    date: "2026-04-15",
    type: "lens",
    summary:
      "Added Canon RF 28-70mm F2 L USM, Canon RF 28-70mm f/2.8 IS STM, Canon RF 24-240mm f/4-6.3 IS USM, and Canon RF 24-70mm F2.8 L IS USM",
  },
  // ── 2026-04-14 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-14",
    type: "article",
    summary:
      "Published the Focusing Architectures series: a landing page, seven primers on focusing strategies, and a full monograph with a hovering table of contents",
  },
  {
    date: "2026-04-14",
    type: "lens",
    summary: "Added Nikon Z 14-30mm f/4 S, 24-70mm f/4 S, and 24-200mm f/4-6.3 VR",
  },
  // ── 2026-04-13 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-13",
    type: "lens",
    summary: "Enabled Nikon AF-S 14-24mm f/2.8G ED and AF-S 16-35mm f/4G ED VR with accurate front group proportions",
  },
  {
    date: "2026-04-13",
    type: "improvement",
    summary: "Improved element rendering for wide-angle retrofocus designs with per-surface semi-diameters",
  },
  {
    date: "2026-04-13",
    type: "improvement",
    summary: "Improved vignetting and distortion accuracy for extreme wide-angle lenses (>40° half-field)",
  },
  {
    date: "2026-04-13",
    type: "fix",
    summary: "Corrected the 200-500mm optical aperture range",
  },
  {
    date: "2026-04-13",
    type: "lens",
    summary: "Added two Nikon AF-S zooms: 120-300mm f/2.8E FL ED SR VR and 200-500mm f/5.6E ED VR",
  },
  // ── 2026-04-12 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-12",
    type: "fix",
    summary: "Improved distortion and spherical aberration accuracy near the edges of the image circle",
  },
  // ── 2026-04-11 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-11",
    type: "lens",
    summary:
      "Added four new lenses: Canon Serenar 28mm f/3.5, Canon Serenar 35mm f/3.2, Canon Serenar 50mm f/1.8, and Canon Serenar 85mm f/1.5",
  },
  // ── 2026-04-10 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-10",
    type: "feature",
    summary: "Added lens library custom filters with typeable min/max ranges and maker selection",
  },
  {
    date: "2026-04-10",
    type: "lens",
    summary:
      "Added three lenses: Nikon Nikkor-N Auto 28mm f/2, Voigtländer Nokton 50mm f/1.2 (X-mount), and Nikon 28mm f/2.8 (28Ti)",
  },
  // ── 2026-04-09 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-09",
    type: "lens",
    summary:
      "Added five Leica lenses: Summilux 28mm f/1.7 ASPH (Q-series), APO-Summicron 43mm f/2 ASPH (Q3 43), ELCAN 50mm f/2, APO-Summicron-M 35mm f/2 ASPH, and Summicron-M 50mm f/2 V5",
  },
  // ── 2026-04-08 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-08",
    type: "improvement",
    summary:
      "Implemented uniform aspect ratio scaling — eliminates lens shape distortion from independent horizontal/vertical zoom",
  },
  {
    date: "2026-04-08",
    type: "lens",
    summary: "Calibrated Voigtländer Ultron 28/2 semi-diameters to Cosina's published cross-section diagram",
  },
  {
    date: "2026-04-08",
    type: "lens",
    summary: "Added Vivitar Series 1 35–85mm f/2.8 VMC, Fujifilm XF 90mm f/2 R LM WR, and Fujinon XF 56mm F1.2 R",
  },
  // ── 2026-04-07 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-07",
    type: "lens",
    summary:
      "Added Canon FD 35mm f/2 S.S.C., Nikon AI Nikkor 135mm f/2, Nikon AI Nikkor 135mm f/2.8, and Vivitar Series 1 200mm f/3.0 — four Sonnar-based and retrofocus designs",
  },
  // ── 2026-04-01 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-01",
    type: "lens",
    summary: "Added CANON new FD 50mm f/1.2 and VOIGTLANDER 50mm f/1.2 for X-Mount",
  },
  // ── 2026-03-30 ──────────────────────────────────────────────────────────
  {
    date: "2026-03-31",
    type: "lens",
    summary: "Added Nikon NIKKOR Z 35mm f/1.8 S and NIKKOR-N 5cm f/1.1",
  },
  // ── 2026-03-30 ──────────────────────────────────────────────────────────
  {
    date: "2026-03-30",
    type: "fix",
    summary: "Corrected field curvature direction labels and Petzval shift sign",
  },
  {
    date: "2026-03-30",
    type: "improvement",
    summary: "Standardized analysis terminology to parabasal/real-ray and fixed coma axis orientation",
  },
  {
    date: "2026-03-30",
    type: "lens",
    summary: "Added Nikon NIKKOR Z 14-24mm f/2.8 S and Canon RF 15-35mm f/2.8 L IS USM",
  },
  // ── 2026-03-29 ──────────────────────────────────────────────────────────
  {
    date: "2026-03-29",
    type: "fix",
    summary: "Fixed article navigation so pages open at the top instead of preserving prior scroll",
  },
  {
    date: "2026-03-29",
    type: "article",
    summary: "Added Heliar History article",
  },
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
