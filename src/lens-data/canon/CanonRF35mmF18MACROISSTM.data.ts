import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — CANON RF 35mm f/1.8 MACRO IS STM                            ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Optical source: US 2019/0113711 A1, Example 1 / Numerical Data 1.       ║
 * ║  Production correlation: Canon RF35mm F1.8 MACRO IS STM.                 ║
 * ║  Patent prescription: 11 elements / 9 groups, one aspherical surface.    ║
 * ║  Design state: f = 36.00 mm, Fno = 1.85, image height = 21.64 mm.        ║
 * ║                                                                            ║
 * ║  Focus status: PUBLISHED. Only d17 varies: 0.95 mm at infinity and       ║
 * ║  18.25 mm at β = -0.5. L1 and L2 move integrally toward the object      ║
 * ║  relative to fixed L3/image plane; BF remains 11.66 mm.                  ║
 * ║                                                                            ║
 * ║  Scaling: none. The 36.00 mm patent design remains distinct from the     ║
 * ║  marketed 35 mm focal length.                                             ║
 * ║                                                                            ║
 * ║  Semi-diameters: patent effective diameters are treated as source         ║
 * ║  ray-envelope diameters, not claimed mechanical edges. Their half-values  ║
 * ║  are retained except:                                                     ║
 * ║    • The stop radius is derived from the published design f-number        ║
 * ║      (F/1.85); the Numerical Data 1 patent surface table prints a         ║
 * ║      20.16 mm stop-row effective diameter.                                ║
 * ║    • The 2→3 air gap is physically clear but uses 91.77% of its 1.92 mm  ║
 * ║      axial gap at the shared published ray-envelope radius. To preserve   ║
 * ║      the patent aperture envelope without clipping full-field rays, the   ║
 * ║      validator's gapSagFrac is explicitly set to 0.92.                    ║
 * ║                                                                            ║
 * ║  Glass: the patent publishes only d-line nd/νd coordinates. Vendor       ║
 * ║  identity is unresolved, so six-digit coordinate-class labels are used.  ║
 * ║  nC, nF, ng, and dPgF are not authored because the patent does not       ║
 * ║  publish element-specific line data or partial dispersion.                ║
 * ║                                                                            ║
 * ║  The optional low-pass/IR plate permitted by patent ¶0040 is absent from ║
 * ║  Numerical Data 1 and is excluded. No sensor cover glass, filter, dummy  ║
 * ║  plane, or mechanical part is included.                                   ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 *
 * Manufacturer references used only for production metadata/correlation:
 *   https://global.canon/en/c-museum/product/rf473.html
 *   https://www.usa.canon.com/shop/p/rf35mm-f1-8-macro-is-stm
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-rf-35mm-f18-macro-is-stm",
  maker: "Canon",
  name: "CANON RF 35mm f/1.8 MACRO IS STM",
  subtitle: "US 2019/0113711 A1 — Example 1; production correlation to RF35mm F1.8 MACRO IS STM",

  catalog: {
    lensMounts: ["canon-rf"],
    imageFormat: "135-full-frame",
    specs: [
      "11 ELEMENTS / 9 GROUPS",
      "35 mm f/1.8 MARKETED",
      "36.00 mm f/1.85 PATENT DESIGN",
      "2ω ≈ 62° DESIGN / 63° MARKETED",
      "1 ASPHERICAL SURFACE",
      "0.5× AT 0.17 m",
    ],
    elementCount: 11,
    groupCount: 9,
    focalLengthMm: { marketing: 35, design: 36.00912695 },
    fNumber: { marketing: 1.8, design: 1.85 },
  },

  source: {
    patentNumber: "US 2019/0113711 A1",
    patentYear: 2019,
    authors: ["Shinya Okuoka"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.8081,
      vd: 22.8,
      focalLengthMm: -43.02,
      glass: "808228 class (vendor unresolved)",
      apd: false,
      role: "Front negative lens of L1; patent G1F.",
      diagramLabel: "G1F",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.1,
      focalLengthMm: 47.64,
      glass: "001291 class (vendor unresolved)",
      apd: false,
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.51742,
      vd: 52.4,
      focalLengthMm: -24.44,
      glass: "517524 class (vendor unresolved)",
      apd: false,
      cemented: "D1",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.90043,
      vd: 37.4,
      focalLengthMm: 19.66,
      glass: "900374 class (vendor unresolved)",
      apd: false,
      cemented: "D1",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: 74.53,
      glass: "697555 class (vendor unresolved)",
      apd: false,
      role: "Front positive lens of L2; patent G2F and designated transverse IS element.",
      diagramLabel: "G2F",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.58313,
      vd: 59.4,
      focalLengthMm: -101.03,
      glass: "583594 class (vendor unresolved)",
      apd: false,
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 16.25,
      glass: "883408 class (vendor unresolved)",
      apd: false,
      cemented: "D2",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.85478,
      vd: 24.8,
      focalLengthMm: -13.54,
      glass: "855248 class (vendor unresolved)",
      apd: false,
      cemented: "D2",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.90043,
      vd: 37.4,
      focalLengthMm: 31.0,
      glass: "900374 class (vendor unresolved)",
      apd: false,
      role: "Rear positive lens of L2; patent G2R.",
      diagramLabel: "G2R",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: 144.87,
      glass: "697555 class (vendor unresolved)",
      apd: false,
      diagramLabel: "G3P",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.5927,
      vd: 35.3,
      focalLengthMm: -68.42,
      glass: "593353 class (vendor unresolved)",
      apd: false,
      diagramLabel: "G3N",
    },
  ],

  /* ── Surface prescription: US 2019/0113711 A1 Numerical Data 1 ── */
  /* (moved from asph) ── Surface 11 asphere: patent standard (1 + K) conic convention ── */
  surfaces: [
    { label: "1", R: 800.0, d: 1.0, sd: 13.9, medium: 1 },
    { label: "2", R: 33.296, d: 1.92, sd: 12.82 },
    { label: "3", R: 103.801, d: 3.11, sd: 12.785, medium: 2 },
    { label: "4", R: -86.901, d: 4.09, sd: 12.535 },
    { label: "5", R: -47.674, d: 1.3, sd: 10.22, medium: 3 },
    { label: "6", R: 17.367, d: 5.73, sd: 10.8, medium: 4 },
    { label: "7", R: 777.674, d: 3.72, sd: 10.63 },
    // Stop radius derived from the design f-number (published F/1.85); the Numerical Data 1 patent surface table
    // prints a 20.16 mm effective diameter in the stop row.
    { label: "STO", R: "flat", d: 3.62 },
    { label: "9", R: 64.497, d: 2.12, sd: 9.52, medium: 5 },
    { label: "10", R: -262.934, d: 3.56, sd: 9.345 },
    {
      label: "11A",
      R: -35.963,
      d: 1.3,
      sd: 8.55,
      medium: 6,
      asphere: { K: 0, A4: -4.61997e-5, A6: -9.22837e-8, A8: -4.60687e-10, A10: 1.65555e-13, A12: 0, A14: 0 },
    },
    { label: "12", R: -93.55, d: 0.13, sd: 8.595 },
    { label: "13", R: -84.988, d: 6.26, sd: 8.645, medium: 7 },
    { label: "14", R: -12.701, d: 1.0, sd: 9.485, medium: 8 },
    { label: "15", R: 135.0, d: 5.27, sd: 11.385 },
    { label: "16", R: 800.0, d: 7.35, sd: 15.86, medium: 9 },
    { label: "17", R: -28.799, sd: 16.57 },
    { label: "18", R: -109.518, d: 2.86, sd: 17.03, medium: 10 },
    { label: "19", R: -53.092, d: 11.79, sd: 17.19 },
    { label: "20", R: -29.766, d: 1.7, sd: 16.89, medium: 11 },
    { label: "21", R: -114.3, d: 11.66, sd: 18.135 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.17,
    description:
      "Published focus: L1 and L2 move together toward the object while L3 stays fixed. Their rear gap increases from 0.95 mm at infinity to 18.25 mm at 0.5× magnification.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Published focus state ── */
  gaps: { "17": { label: "d17 — L2/L3 gap", values: [[0.95, 18.25]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.85, fStops: [1.85, 2, 2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

  /* ── Lens-unit / cemented-group annotations ── */
  groups: [
    { text: "L1", fromSurface: "1", toSurface: "7" },
    { text: "L2", fromSurface: "9", toSurface: "17" },
    { text: "L3", fromSurface: "18", toSurface: "21" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "13", toSurface: "15" },
  ],

  layout: { yScFill: 0.5 },

  /* ── Geometry / layout ── */
  // Source-published ray-envelope apertures leave positive physical clearance at the 2→3 gap,
  // but their 0.91774 sag-intrusion fraction is slightly above the shared 0.90 default.
  checks: { gapSagFrac: 0.92 },
} satisfies LensDataV2Input;

export default LENS_DATA;
