import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AI AF ZOOM-NIKKOR 80-200mm f/2.8 ED                       ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP S62-108218 A, Example 3 / Table 3 / Figure 1.               ║
 * ║  16 elements / 11 air-separated groups; all spherical.                       ║
 * ║  Surface 17 thickness is 1.700 mm per the applicant's amendment appended     ║
 * ║  to the publication; Table 3 as first printed gives 1.800 mm. The surface    ║
 * ║  gaps sum to the amended total length, T.L. = 217.133 mm.                    ║
 * ║  Focus status: PUBLISHED. At either zoom endpoint only G1 moves for focus.   ║
 * ║  Published close-focus stroke: G1 shifts 10.496 mm objectward.               ║
 * ║                                                                              ║
 * ║  ZOOM / FOCUS GAPS                                                           ║
 * ║    d5:  zoom + focus (G1 -> G2)                                              ║
 * ║    d13: zoom only (G2 -> G3)                                                 ║
 * ║    d18: zoom only (G3 -> G4)                                                 ║
 * ║  Example 3 publishes only 80 mm and 196 mm endpoints. LensVisualizer         ║
 * ║  therefore linearly interpolates the three published endpoint gaps; no       ║
 * ║  intermediate patent state is asserted.                                      ║
 * ║                                                                              ║
 * ║  STOP MODELING                                                               ║
 * ║  The patent places stop S inside the published 11.400 mm d23 air gap but     ║
 * ║  does not tabulate its axial offset or diameter. STO is modeled at the       ║
 * ║  midpoint: 5.700 mm after surface 23 and 5.700 mm before surface 24. The     ║
 * ║  stop radius is derived from the design f-number. The former paraxial        ║
 * ║  calibration of the stop to the patent's F/2.88 gave F/2.88004 at wide       ║
 * ║  infinity and F/2.88006 at tele. The traced iris is set from nominalFNumber  ║
 * ║  by the real marginal ray: 15.6801 mm at 80 mm, held at 196 mm (fixed iris), ║
 * ║  where F/2.88 needs 15.7146 mm. From the iris alone the stations trace       ║
 * ║  f/2.880 and f/2.886. The 5.700 + 5.700 mm split preserves the source d23    ║
 * ║  optical spacing exactly.                                                    ║
 * ║                                                                              ║
 * ║  SEMI-DIAMETERS                                                              ║
 * ║  The patent does not tabulate clear semi-diameters. Authored SDs were        ║
 * ║  derived from code-traced on-axis marginal and off-axis chief/marginal       ║
 * ║  rays over all four published zoom/focus states at y' = 21.6 mm, then        ║
 * ║  constrained by spherical edge thickness, actual rim slope, shared-gap       ║
 * ║  sag intrusion, and the production mechanical envelope. Surfaces 7, 9,       ║
 * ║  10, 12, 13, 15, 16 and 18-23 sit at the height the stated F/2.88 on-axis    ║
 * ║  ray reaches at the 196 mm station, rounded up to 0.1 mm. Figure 1 draws     ║
 * ║  L24, L31 and D4 with square-cut rims, and each carries on every face the    ║
 * ║  highest value any of its faces needs: 18.8 mm on surfaces 10-11, 19.7 mm    ║
 * ║  on 14-15 and 20.0 mm on 16-18. gapSagFrac = 0.92 is required at the d11     ║
 * ║  air gap between D3 and L25: at 18.7 mm surfaces 11 and 12 take 0.9103 of    ║
 * ║  its 2.500 mm and stand 0.224 mm apart, where Figure 1 draws the two         ║
 * ║  faces meeting at the rim. The iris limits the on-axis beam at both          ║
 * ║  stations: f/2.88 at 80 mm and f/2.89 at 196 mm. The 38.0 mm front SD        ║
 * ║  remains inside the 77 mm filter diameter published by Nikon for the         ║
 * ║  later optically continuous D version.                                       ║
 * ║                                                                              ║
 * ║  GLASS / SPECTRAL DATA                                                       ║
 * ║  Example 3 publishes d-line nd and vd only. Supplier-neutral labels retain   ║
 * ║  those coordinates; compatible catalog curves are spectral proxies only.     ║
 * ║  Source nC, nF, ng, and dPgF values are unavailable and remain omitted.      ║
 * ║                                                                              ║
 * ║  No scale factor is applied. No cover glass, filter, dummy plane, or         ║
 * ║  mechanical component is included.                                           ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 *
 * Production metadata sources (identity / mount / format / marketed values only):
 * https://www.nikonusa.com/p/af-zoom-nikkor-80-200mm-f28d-ed/1986/overview
 * https://imaging.nikon.com/imaging/information/story/0067/
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikon-af-zoom-nikkor-80-200mm-f28-ed",
  maker: "Nikon",
  name: "NIKON AI AF ZOOM-NIKKOR 80-200mm f/2.8 ED",
  subtitle: "JP S62-108218 A — Example 3; production-correlated 80-200mm f/2.8 ED design",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["16 ELEMENTS / 11 GROUPS", "80-196 mm DESIGN", "F/2.88", "3 LOW-DISPERSION ELEMENTS"],
    elementCount: 16,
    groupCount: 11,
    focalLengthMm: { marketing: [80, 200], design: [79.9999, 196.00205] },
    fNumber: { marketing: 2.8, design: 2.88 },
  },

  source: {
    patentNumber: "JP S62-108218 A",
    patentYear: 1987,
    authors: ["Yoshinari Hamanishi"],
    assignees: ["Nippon Kogaku K.K."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.80458,
      vd: 25.5,
      focalLengthMm: -314.883607,
      glass: "805255 flint class (catalog unresolved)",
      apd: false,
      diagramLabel: "L11",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.6,
      focalLengthMm: 144.989137,
      glass: "498826 — J-FKH1 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: "inferred",
      apdNote:
        "ED classification is inferred from the production three-ED identity and the example's three repeated 1.49782/82.6 low-dispersion positions; J-FKH1 remains only a coordinate-compatible proxy.",
      diagramLabel: "L12 / ED",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.6,
      focalLengthMm: 216.1777,
      glass: "498826 — J-FKH1 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: "inferred",
      apdNote:
        "ED classification is inferred from the production three-ED identity and the example's three repeated 1.49782/82.6 low-dispersion positions; J-FKH1 remains only a coordinate-compatible proxy.",
      diagramLabel: "L13 / ED",
    },
    {
      id: 4,
      name: "L21",
      label: "L21",
      type: "Positive Meniscus",
      nd: 1.62588,
      vd: 35.6,
      focalLengthMm: 132.775918,
      glass: "626356 — F1 (SUMITA) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      diagramLabel: "L21",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L22",
      label: "L22",
      type: "Biconcave Negative",
      nd: 1.56384,
      vd: 60.8,
      focalLengthMm: -51.393566,
      glass: "564608 — N-SK11 (SCHOTT) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      diagramLabel: "L22",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L23",
      label: "L23",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.1,
      focalLengthMm: -56.560596,
      glass: "517641 BK7-class crown (supplier unresolved)",
      apd: false,
      diagramLabel: "L23",
      cemented: "D3",
    },
    {
      id: 7,
      name: "L24",
      label: "L24",
      type: "Positive Meniscus",
      nd: 1.80458,
      vd: 25.5,
      focalLengthMm: 72.379367,
      glass: "805255 flint class (catalog unresolved)",
      apd: false,
      diagramLabel: "L24",
      cemented: "D3",
    },
    {
      id: 8,
      name: "L25",
      label: "L25",
      type: "Biconcave Negative",
      nd: 1.713,
      vd: 54,
      focalLengthMm: -89.693816,
      glass: "713540 — J-LAK8 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      diagramLabel: "L25",
    },
    {
      id: 9,
      name: "L31",
      label: "L31",
      type: "Biconvex Positive",
      nd: 1.51835,
      vd: 60.3,
      focalLengthMm: 121.344711,
      glass: "518603 — BALK3 (SUMITA) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      diagramLabel: "L31",
    },
    {
      id: 10,
      name: "L32",
      label: "L32",
      type: "Biconvex Positive",
      nd: 1.56384,
      vd: 60.8,
      focalLengthMm: 63.245156,
      glass: "564608 — N-SK11 (SCHOTT) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      diagramLabel: "L32",
      cemented: "D4",
    },
    {
      id: 11,
      name: "L33",
      label: "L33",
      type: "Negative Meniscus",
      nd: 1.75692,
      vd: 31.7,
      focalLengthMm: -77.414233,
      glass: "757317 — E-LAF11 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      diagramLabel: "L33",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L41",
      label: "L41",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.6,
      focalLengthMm: 106.920989,
      glass: "498826 — J-FKH1 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: "inferred",
      apdNote:
        "ED classification is inferred from the production three-ED identity and the example's three repeated 1.49782/82.6 low-dispersion positions; J-FKH1 remains only a coordinate-compatible proxy.",
      diagramLabel: "L41 / ED",
    },
    {
      id: 13,
      name: "L42a",
      label: "L42a",
      type: "Nearly Plano-Convex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 89.30967,
      glass: "487702 crown class (FK5 coordinate; supplier unresolved)",
      apd: false,
      diagramLabel: "L42a",
      cemented: "D5",
    },
    {
      id: 14,
      name: "L42b",
      label: "L42b",
      type: "Nearly Plano-Concave Negative",
      nd: 1.80458,
      vd: 25.5,
      focalLengthMm: -360.036569,
      glass: "805255 flint class (catalog unresolved)",
      apd: false,
      diagramLabel: "L42b",
      cemented: "D5",
    },
    {
      id: 15,
      name: "L43",
      label: "L43",
      type: "Negative Meniscus",
      nd: 1.744,
      vd: 45.1,
      focalLengthMm: -40.839504,
      glass: "744451 — J-LAF2 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      diagramLabel: "L43",
    },
    {
      id: 16,
      name: "L44",
      label: "L44",
      type: "Biconvex Positive",
      nd: 1.66755,
      vd: 42,
      focalLengthMm: 89.539445,
      glass: "668420 — J-BASF6 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      diagramLabel: "L44",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 106.671, d: 3, sd: 38, medium: 1 },
    { label: "2", R: 74.124, d: 10.3, sd: 36.8, medium: 2 },
    { label: "3", R: -2623, d: 0.2, sd: 36.8 },
    { label: "4", R: 103.02, d: 7.2, sd: 36, medium: 3 },
    { label: "5", R: 2355.419, sd: 35 },
    { label: "6", R: -661.36, d: 3.9, sd: 20, medium: 4 },
    { label: "7", R: -73.993, d: 1.6, sd: 19.7, medium: 5 },
    { label: "8", R: 48.003, d: 7.1, sd: 18.5 },
    { label: "9", R: -65.921, d: 1.5, sd: 18.3, medium: 6 },
    { label: "10", R: 52.925, d: 4.7, sd: 18.8, medium: 7 },
    // 11 shares L24's square rim with 10; 11 and 12 take 0.9103 of the 2.5 mm gap between them (gapSagFrac 0.92)
    { label: "11", R: 557.45, d: 2.5, sd: 18.8 },
    { label: "12", R: -90.1, d: 1.6, sd: 18.7, medium: 8 },
    { label: "13", R: 221.989, sd: 19.2 },
    // L31 has a square rim: 14 carries the height 15 needs
    { label: "14", R: 861.84, d: 4.5, sd: 19.7, medium: 9 },
    { label: "15", R: -67.73, d: 0.2, sd: 19.7 },
    { label: "16", R: 104.039, d: 7.5, sd: 20, medium: 10 },
    // D4 has one square rim: the junction carries the height 16 and 18 need
    { label: "17", R: -52.847, d: 1.7, sd: 20, medium: 11 },
    { label: "18", R: -546.069, sd: 20 },
    { label: "19", R: 50.319, d: 5.8, sd: 20, medium: 12 },
    { label: "20", R: 885.62, d: 0.2, sd: 19.8 },
    { label: "21", R: 43.598, d: 6.4, sd: 18.9, medium: 13 },
    { label: "22", R: -29900, d: 1.8, sd: 18.3, medium: 14 },
    { label: "23", R: 292.52, d: 5.7, sd: 17.8 },
    { label: "STO", R: "flat", d: 5.7 },
    { label: "24", R: 567.53, d: 1.5, sd: 14.8, medium: 15 },
    { label: "25", R: 28.808, d: 16.7, sd: 14.8 },
    { label: "26", R: 86.073, d: 3.3, sd: 18.5, medium: 16 },
    { label: "27", R: -192.609, d: 66.158, sd: 18.5 },
  ],

  zoom: {
    /* (moved from zoomPositions) ── Published zoom/focus states ── */
    // (moved from publishedStations) The close-focus row is source-tabulated.
    stations: [
      { focalLengthMm: 80, label: "80 mm", published: true, publishedFocus: [1] },
      { focalLengthMm: 196, label: "196 mm", published: true, publishedFocus: [1] },
    ],
    apertureModel: "fixed-iris",
    step: 0.004,
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 1.8,
    description:
      "Published front-group focus: G1 moves 10.496 mm objectward at both zoom endpoints; D13 and D18 remain fixed. The patent close states (beta = -0.055 / -0.135) normalize to approximately 1.800 m object-to-image-plane distance.",
  },

  gaps: {
    "5": {
      label: "D5 (ZOOM + FOCUS)",
      values: [
        [1.834, 12.33],
        [42.435, 52.931],
      ],
    },
    "13": {
      label: "D13 (ZOOM)",
      values: [
        [26.536, 26.536],
        [1.891, 1.891],
      ],
    },
    "18": {
      label: "D18 (ZOOM)",
      values: [
        [18.005, 18.005],
        [2.049, 2.049],
      ],
    },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.88, fStops: [2.88, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "G1 (+) / FOCUS → OBJ", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−) / ZOOM → IMG", fromSurface: "6", toSurface: "13" },
    { text: "G3 (+) / ZOOM → IMG", fromSurface: "14", toSurface: "18" },
    { text: "G4 (+) / FIXED", fromSurface: "19", toSurface: "27" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "9", toSurface: "11" },
    { text: "D4", fromSurface: "16", toSurface: "18" },
    { text: "D5", fromSurface: "21", toSurface: "23" },
  ],

  layout: { yScFill: 0.44 },

  /* ── Layout ── */
  // Surfaces 11 and 12 (D3 rear, L25 front) take 0.9103 of the 2.500 mm d11 air gap at 18.7 mm
  checks: { gapSagFrac: 0.92 },
} satisfies LensDataV2Input;

export default LENS_DATA;
