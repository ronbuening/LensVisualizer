import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON EF 100mm f/2.8 Macro                                    ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JP 1991-141313, Numerical Example 1 (Canon Inc.; Hideki      ║
 * ║ Ogawa). Patent prescription: F = 100 mm, FNo = 2.89, all spherical,       ║
 * ║ 10 elements / 9 air-separated groups. No numerical scale is applied.       ║
 * ║                                                                            ║
 * ║ Focus status: PUBLISHED. The patent publishes D14 = 2.50 / 25.62 /        ║
 * ║ 48.74 mm at infinity / 0.5× / 1.0×. Groups I + II and the diaphragm       ║
 * ║ translate integrally toward the object while Group III and the image plane ║
 * ║ remain fixed. With R1 normalized as the axial origin, this is represented  ║
 * ║ by the single variable gap D14. All three rows are exact focus keyframes. ║
 * ║                                                                            ║
 * ║ Patent R9 is printed only as the diaphragm; data R = 1e15 is the schema's ║
 * ║ zero-power STO representation, not a patent-tabulated curvature.              ║
 * ║                                                                            ║
 * ║ Semi-diameters are modeling inferences because the patent does not         ║
 * ║ tabulate clear apertures. They were derived from full-field                ║
 * ║ marginal/chief-ray envelopes at infinity, 0.5×, and 1.0×, then rounded     ║
 * ║ outward with clearance and checked against the Example-1 optical section   ║
 * ║ (patent Fig. 1). The stop radius is derived from the design f-number       ║
 * ║ (FNo = 2.89).                                                              ║
 * ║                                                                            ║
 * ║ Glass identity: the patent publishes d-line nd/νd only. The six-digit     ║
 * ║ coordinate classes are retained without asserting a historical vendor.     ║
 * ║ Current-catalog equivalents exist, but nC/nF/ng/dPgF are intentionally     ║
 * ║ omitted because the patent does not publish those line data.               ║
 * ║                                                                            ║
 * ║ Product correlation / marketed specifications: Canon Camera Museum,        ║
 * ║ https://global.canon/en/c-museum/product/ef289.html                         ║
 * ║ (April 1990; 10 elements / 9 groups; 0.31 m MFD; 1.0×; 8 blades; f/32).   ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-ef-100mm-f28-macro",
  maker: "Canon",
  name: "CANON EF 100mm f/2.8 Macro",
  subtitle: "JP 1991-141313 Example 1 — production correlation",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: ["10 ELEMENTS / 9 GROUPS", "100mm f/2.8 (marketed)", "F/2.89 DESIGN", "1.0× MACRO", "0.31 m MFD (marketed)"],
    elementCount: 10,
    groupCount: 9,
    focalLengthMm: { marketing: 100, design: 100.035238895 },
    fNumber: { marketing: 2.8, design: 2.89 },
  },

  source: { patentNumber: "JP 1991-141313 A", patentYear: 1991, authors: ["Hideki Ogawa"], assignees: ["Canon Inc."] },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.60311,
      vd: 60.7,
      indexReference: "d",
      focalLengthMm: 160.763571,
      glass: "603607 — d-line coordinate class (historical vendor unresolved)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7859,
      vd: 44.2,
      indexReference: "d",
      focalLengthMm: 127.917023,
      glass: "786442 — d-line coordinate class (historical vendor unresolved)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.7859,
      vd: 44.2,
      indexReference: "d",
      focalLengthMm: 125.169113,
      glass: "786442 — d-line coordinate class (historical vendor unresolved)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: -46.729671,
      glass: "805254 — d-line coordinate class (historical vendor unresolved)",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30.1,
      indexReference: "d",
      focalLengthMm: -44.572309,
      glass: "699301 — d-line coordinate class (historical vendor unresolved)",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.8061,
      vd: 40.9,
      indexReference: "d",
      focalLengthMm: 56.945473,
      glass: "806409 — d-line coordinate class (historical vendor unresolved)",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.7859,
      vd: 44.2,
      indexReference: "d",
      focalLengthMm: 63.026971,
      glass: "786442 — d-line coordinate class (historical vendor unresolved)",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: 71.271302,
      glass: "805254 — d-line coordinate class (historical vendor unresolved)",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.762,
      vd: 40.1,
      indexReference: "d",
      focalLengthMm: -30.171137,
      glass: "762401 — d-line coordinate class (historical vendor unresolved)",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      focalLengthMm: 98.343522,
      glass: "516641 — d-line coordinate class (historical vendor unresolved)",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 82.83, d: 4.2, sd: 25.5, medium: 1 },
    { label: "2", R: 557.6, d: 3.6, sd: 25.5 },
    { label: "3", R: 62.43, d: 4.2, sd: 22.5, medium: 2 },
    { label: "4", R: 159.85, d: 0.15, sd: 22.5 },
    { label: "5", R: 38.67, d: 6.41, sd: 19.5, medium: 3 },
    { label: "6", R: 59.07, d: 2.86, sd: 19.5 },
    { label: "7", R: 128.46, d: 1.8, sd: 16.0, medium: 4 },
    { label: "8", R: 28.92, d: 5.45, sd: 16.0 },
    { label: "STO", R: "flat", d: 5.08 },
    { label: "10", R: -26.31, d: 1.8, sd: 13.0, medium: 5 },
    { label: "11", R: -173.98, d: 4.5, sd: 14.5, medium: 6 },
    { label: "12", R: -36.74, d: 0.15, sd: 15.0 },
    { label: "13", R: 230.07, d: 4.0, sd: 16.5, medium: 7 },
    { label: "14", R: -62.64, sd: 16.5 },
    { label: "15", R: 425.29, d: 3.7, sd: 16.5, medium: 8 },
    { label: "16", R: -66.08, d: 1.83, sd: 16.5 },
    { label: "17", R: -60.97, d: 1.5, sd: 16.0, medium: 9 },
    { label: "18", R: 37.3, d: 14.09, sd: 16.0 },
    { label: "19", R: 44.78, d: 5.5, sd: 21.0, medium: 10 },
    { label: "20", R: 363.26, d: 42.4201237822, sd: 21.0 },
  ],

  focus: {
    closeFocusM: 0.306871129985,
    keyframes: [0, 0.7995997649601272, 1],
    description:
      "PUBLISHED — Groups I + II and the diaphragm translate toward the object while Group III and the image plane remain fixed. In R1-normalized coordinates only D14 changes: 2.50 mm at infinity, 25.62 mm at 0.5×, and 48.74 mm at 1.0×. The modeled 1× subject-to-image distance is 0.30687 m; Canon markets 0.31 m.",
    // (moved from publishedStations) Every focus keyframe is a source row.
    published: [1, 2],
  },

  /* (moved from var) Published D14 states: 2.50 mm (∞), 25.62 mm (0.5×), 48.74 mm (1.0×). */
  gaps: { "14": { label: "D14", values: [[2.5, 25.62, 48.74]] } },

  aperture: { nominalFNumber: 2.89, fStops: [2.89, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 8 },

  groups: [
    { text: "I", fromSurface: "1", toSurface: "8" },
    { text: "II", fromSurface: "10", toSurface: "14" },
    { text: "III", fromSurface: "15", toSurface: "20" },
  ],
  doublets: [{ text: "D1", fromSurface: "10", toSurface: "12" }],

  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
