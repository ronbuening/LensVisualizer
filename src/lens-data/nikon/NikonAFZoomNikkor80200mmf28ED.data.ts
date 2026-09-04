import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AI AF ZOOM-NIKKOR 80-200mm f/2.8 ED                    ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP-S62-108218 A, Example 3 / Table 3 / Figure 1.          ║
 * ║  16 elements / 11 air-separated groups; all spherical.                    ║
 * ║  Focus status: PUBLISHED. At either zoom endpoint only G1 moves for focus. ║
 * ║  Published close-focus stroke: G1 shifts 10.496 mm objectward.             ║
 * ║                                                                            ║
 * ║  ZOOM / FOCUS GAPS                                                        ║
 * ║    d5:  zoom + focus (G1 -> G2)                                           ║
 * ║    d13: zoom only (G2 -> G3)                                              ║
 * ║    d18: zoom only (G3 -> G4)                                              ║
 * ║  Example 3 publishes only 80 mm and 196 mm endpoints. LensVisualizer      ║
 * ║  therefore linearly interpolates the three published endpoint gaps; no     ║
 * ║  intermediate patent state is asserted.                                   ║
 * ║                                                                            ║
 * ║  STOP MODELING                                                            ║
 * ║  The patent places stop S inside the published 11.400 mm d23 air gap but  ║
 * ║  does not tabulate its axial offset or diameter. STO is modeled at the     ║
 * ║  midpoint: 5.700 mm after surface 23 and 5.700 mm before surface 24.      ║
 * ║  The physical stop SD, 14.759011 mm, is solved from the wide-infinity      ║
 * ║  paraxial entrance pupil for the patent's F/2.88. The same fixed stop      ║
 * ║  gives F/2.88002 at the tele endpoint. The 5.700 + 5.700 mm split          ║
 * ║  preserves the source d23 optical spacing exactly.                         ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS                                                           ║
 * ║  The patent does not tabulate clear semi-diameters. Authored SDs were      ║
 * ║  derived from code-traced on-axis marginal and off-axis chief/marginal     ║
 * ║  rays over all four published zoom/focus states at y' = 21.6 mm, then     ║
 * ║  constrained by spherical edge thickness, actual rim slope, shared-gap     ║
 * ║  sag intrusion, and the production mechanical envelope. The 38.0 mm       ║
 * ║  front SD remains inside the 77 mm filter diameter published by Nikon for ║
 * ║  the later optically continuous D version.                                 ║
 * ║                                                                            ║
 * ║  GLASS / SPECTRAL DATA                                                    ║
 * ║  Example 3 publishes d-line nd and vd only. Supplier-neutral labels retain ║
 * ║  those coordinates; compatible catalog curves are spectral proxies only.  ║
 * ║  Source nC, nF, ng, and dPgF values are unavailable and remain omitted.   ║
 * ║                                                                            ║
 * ║  No scale factor is applied. No cover glass, filter, dummy plane, or       ║
 * ║  mechanical component is included.                                        ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 *
 * Production metadata sources (identity / mount / format / marketed values only):
 * https://www.nikonusa.com/p/af-zoom-nikkor-80-200mm-f28d-ed/1986/overview
 * https://imaging.nikon.com/imaging/information/story/0067/
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-af-zoom-nikkor-80-200mm-f28-ed",
  maker: "Nikon",
  name: "NIKON AI AF ZOOM-NIKKOR 80-200mm f/2.8 ED",
  subtitle: "JP-S62-108218 A — Example 3; production-correlated 80-200mm f/2.8 ED design",
  specs: ["16 ELEMENTS / 11 GROUPS", "80-196 mm DESIGN", "F/2.88", "3 LOW-DISPERSION ELEMENTS"],

  focalLengthMarketing: [80, 200],
  focalLengthDesign: [79.99278, 195.98427],
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "JP-S62-108218 A",
  patentAuthors: ["Yoshinori Hamanishi"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1987,
  elementCount: 16,
  groupCount: 11,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.80458,
      vd: 25.5,
      fl: -314.883607,
      glass: "805255 flint class (catalog unresolved)",
      apd: false,
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.6,
      fl: 144.989137,
      glass: "498826 ED crown class (supplier unresolved)",
      apd: false,
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.6,
      fl: 216.1777,
      glass: "498826 ED crown class (supplier unresolved)",
      apd: false,
    },
    {
      id: 4,
      name: "L21",
      label: "L21",
      type: "Positive Meniscus",
      nd: 1.62588,
      vd: 35.6,
      fl: 132.775918,
      glass: "626356 flint class (F1 coordinate; supplier unresolved)",
      apd: false,
      cemented: "D2",
    },
    {
      id: 5,
      name: "L22",
      label: "L22",
      type: "Biconcave Negative",
      nd: 1.56384,
      vd: 60.8,
      fl: -51.393566,
      glass: "564608 crown class (N-SK11 coordinate; supplier unresolved)",
      apd: false,
      cemented: "D2",
    },
    {
      id: 6,
      name: "L23",
      label: "L23",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.1,
      fl: -56.560596,
      glass: "517641 BK7-class crown (supplier unresolved)",
      apd: false,
      cemented: "D3",
    },
    {
      id: 7,
      name: "L24",
      label: "L24",
      type: "Positive Meniscus",
      nd: 1.80458,
      vd: 25.5,
      fl: 72.379367,
      glass: "805255 flint class (catalog unresolved)",
      apd: false,
      cemented: "D3",
    },
    {
      id: 8,
      name: "L25",
      label: "L25",
      type: "Biconcave Negative",
      nd: 1.713,
      vd: 54,
      fl: -89.693816,
      glass: "713540 lanthanum-crown class (supplier unresolved)",
      apd: false,
    },
    {
      id: 9,
      name: "L31",
      label: "L31",
      type: "Biconvex Positive",
      nd: 1.51835,
      vd: 60.3,
      fl: 121.344711,
      glass: "518603 barium-lanthanum crown class (BALK3 coordinate; supplier unresolved)",
      apd: false,
    },
    {
      id: 10,
      name: "L32",
      label: "L32",
      type: "Biconvex Positive",
      nd: 1.56384,
      vd: 60.8,
      fl: 63.245156,
      glass: "564608 crown class (N-SK11 coordinate; supplier unresolved)",
      apd: false,
      cemented: "D4",
    },
    {
      id: 11,
      name: "L33",
      label: "L33",
      type: "Negative Meniscus",
      nd: 1.75692,
      vd: 31.7,
      fl: -77.421006,
      glass:
        "757317 — E-LAF11 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      cemented: "D4",
    },
    {
      id: 12,
      name: "L41",
      label: "L41",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.6,
      fl: 106.920989,
      glass: "498826 ED crown class (supplier unresolved)",
      apd: false,
    },
    {
      id: 13,
      name: "L42a",
      label: "L42a",
      type: "Nearly Plano-Convex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 89.30967,
      glass: "487702 crown class (FK5 coordinate; supplier unresolved)",
      apd: false,
      cemented: "D5",
    },
    {
      id: 14,
      name: "L42b",
      label: "L42b",
      type: "Nearly Plano-Concave Negative",
      nd: 1.80458,
      vd: 25.5,
      fl: -360.036569,
      glass: "805255 flint class (catalog unresolved)",
      apd: false,
      cemented: "D5",
    },
    {
      id: 15,
      name: "L43",
      label: "L43",
      type: "Negative Meniscus",
      nd: 1.744,
      vd: 45.1,
      fl: -40.839504,
      glass: "744451 — J-LAF2 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
    },
    {
      id: 16,
      name: "L44",
      label: "L44",
      type: "Biconvex Positive",
      nd: 1.66755,
      vd: 42,
      fl: 89.539445,
      glass: "668420 — J-BASF6 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 106.671, d: 3, nd: 1.80458, elemId: 1, sd: 38 },
    { label: "2", R: 74.124, d: 10.3, nd: 1.49782, elemId: 2, sd: 36.8 },
    { label: "3", R: -2623, d: 0.2, nd: 1, elemId: 0, sd: 36.8 },
    { label: "4", R: 103.02, d: 7.2, nd: 1.49782, elemId: 3, sd: 36 },
    { label: "5", R: 2355.419, d: 1.834, nd: 1, elemId: 0, sd: 35 },
    { label: "6", R: -661.36, d: 3.9, nd: 1.62588, elemId: 4, sd: 20 },
    { label: "7", R: -73.993, d: 1.6, nd: 1.56384, elemId: 5, sd: 19.5 },
    { label: "8", R: 48.003, d: 7.1, nd: 1, elemId: 0, sd: 18.5 },
    { label: "9", R: -65.921, d: 1.5, nd: 1.5168, elemId: 6, sd: 18.2 },
    { label: "10", R: 52.925, d: 4.7, nd: 1.80458, elemId: 7, sd: 18.3 },
    { label: "11", R: 557.45, d: 2.5, nd: 1, elemId: 0, sd: 18.3 },
    { label: "12", R: -90.1, d: 1.6, nd: 1.713, elemId: 8, sd: 18.3 },
    { label: "13", R: 221.989, d: 26.536, nd: 1, elemId: 0, sd: 18.6 },
    { label: "14", R: 861.84, d: 4.5, nd: 1.51835, elemId: 9, sd: 19.2 },
    { label: "15", R: -67.73, d: 0.2, nd: 1, elemId: 0, sd: 19.2 },
    { label: "16", R: 104.039, d: 7.5, nd: 1.56384, elemId: 10, sd: 19.5 },
    { label: "17", R: -52.847, d: 1.8, nd: 1.75692, elemId: 11, sd: 19.5 },
    { label: "18", R: -546.069, d: 18.005, nd: 1, elemId: 0, sd: 19.5 },
    { label: "19", R: 50.319, d: 5.8, nd: 1.49782, elemId: 12, sd: 19.5 },
    { label: "20", R: 885.62, d: 0.2, nd: 1, elemId: 0, sd: 19.2 },
    { label: "21", R: 43.598, d: 6.4, nd: 1.48749, elemId: 13, sd: 18.5 },
    { label: "22", R: -29900, d: 1.8, nd: 1.80458, elemId: 14, sd: 18 },
    { label: "23", R: 292.52, d: 5.7, nd: 1, elemId: 0, sd: 17.5 },
    { label: "STO", R: 1e15, d: 5.7, nd: 1, elemId: 0, sd: 14.759011 },
    { label: "24", R: 567.53, d: 1.5, nd: 1.744, elemId: 15, sd: 14.8 },
    { label: "25", R: 28.808, d: 16.7, nd: 1, elemId: 0, sd: 14.8 },
    { label: "26", R: 86.073, d: 3.3, nd: 1.66755, elemId: 16, sd: 18.5 },
    { label: "27", R: -192.609, d: 66.158, nd: 1, elemId: 0, sd: 18.5 },
  ],

  asph: {},

  /* ── Published zoom/focus states ── */
  zoomPositions: [80, 196],
  zoomStep: 0.004,
  zoomLabels: ["80 mm", "196 mm"],
  var: {
    "5": [
      [1.834, 12.33],
      [42.435, 52.931],
    ],
    "13": [
      [26.536, 26.536],
      [1.891, 1.891],
    ],
    "18": [
      [18.005, 18.005],
      [2.049, 2.049],
    ],
  },
  varLabels: [
    ["5", "D5 (ZOOM + FOCUS)"],
    ["13", "D13 (ZOOM)"],
    ["18", "D18 (ZOOM)"],
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "5" },
    { text: "G2", fromSurface: "6", toSurface: "13" },
    { text: "G3", fromSurface: "14", toSurface: "18" },
    { text: "G4", fromSurface: "19", toSurface: "27" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "9", toSurface: "11" },
    { text: "D4", fromSurface: "16", toSurface: "18" },
    { text: "D5", fromSurface: "21", toSurface: "23" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 1.8,
  focusDescription:
    "Published front-group focus: G1 moves 10.496 mm objectward at both zoom endpoints; D13 and D18 remain fixed. The patent close states (beta = -0.055 / -0.135) normalize to approximately 1.800 m object-to-image-plane distance.",

  /* ── Aperture configuration ── */
  nominalFno: 2.88,
  fstopSeries: [2.88, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  /* ── Layout ── */
  yScFill: 0.44,
} satisfies LensDataInput;

export default LENS_DATA;
