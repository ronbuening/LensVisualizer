import type { LensDataInput } from "../../types/optics.js";

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
 * ║    • STO sd = 9.80523 mm is inferred from the published F/1.85 rather    ║
 * ║      than the patent's 20.16 mm stop-row effective diameter.              ║
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
  key: "canon-rf-35mm-f18-macro-is-stm",
  maker: "Canon",
  name: "CANON RF 35mm f/1.8 MACRO IS STM",
  subtitle: "US 2019/0113711 A1 — Example 1; production correlation to RF35mm F1.8 MACRO IS STM",
  specs: [
    "11 ELEMENTS / 9 GROUPS",
    "35 mm f/1.8 MARKETED",
    "36.00 mm f/1.85 PATENT DESIGN",
    "2ω ≈ 62° DESIGN / 63° MARKETED",
    "1 ASPHERICAL SURFACE",
    "0.5× AT 0.17 m",
  ],

  focalLengthMarketing: 35,
  focalLengthDesign: 36.00912695,
  apertureMarketing: 1.8,
  apertureDesign: 1.85,
  lensMounts: ["canon-rf"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2019/0113711 A1",
  patentAuthors: ["Shinya Okuoka"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2019,
  elementCount: 11,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "E1",
      diagramLabel: "G1F",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.8081,
      vd: 22.8,
      fl: -43.02,
      glass: "808228 class (vendor unresolved)",
      apd: false,
      role: "Front negative lens of L1; patent G1F.",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.1,
      fl: 47.64,
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
      fl: -24.44,
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
      fl: 19.66,
      glass: "900374 class (vendor unresolved)",
      apd: false,
      cemented: "D1",
    },
    {
      id: 5,
      name: "E5",
      diagramLabel: "G2F",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      fl: 74.53,
      glass: "697555 class (vendor unresolved)",
      apd: false,
      role: "Front positive lens of L2; patent G2F and designated transverse IS element.",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: -101.03,
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
      fl: 16.25,
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
      fl: -13.54,
      glass: "855248 class (vendor unresolved)",
      apd: false,
      cemented: "D2",
    },
    {
      id: 9,
      name: "E9",
      diagramLabel: "G2R",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.90043,
      vd: 37.4,
      fl: 31.0,
      glass: "900374 class (vendor unresolved)",
      apd: false,
      role: "Rear positive lens of L2; patent G2R.",
    },
    {
      id: 10,
      name: "E10",
      diagramLabel: "G3P",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      fl: 144.87,
      glass: "697555 class (vendor unresolved)",
      apd: false,
    },
    {
      id: 11,
      name: "E11",
      diagramLabel: "G3N",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.5927,
      vd: 35.3,
      fl: -68.42,
      glass: "593353 class (vendor unresolved)",
      apd: false,
    },
  ],

  /* ── Surface prescription: US 2019/0113711 A1 Numerical Data 1 ── */
  surfaces: [
    { label: "1", R: 800.0, d: 1.0, nd: 1.8081, elemId: 1, sd: 13.9 },
    { label: "2", R: 33.296, d: 1.92, nd: 1.0, elemId: 0, sd: 12.82 },
    { label: "3", R: 103.801, d: 3.11, nd: 2.001, elemId: 2, sd: 12.785 },
    { label: "4", R: -86.901, d: 4.09, nd: 1.0, elemId: 0, sd: 12.535 },
    { label: "5", R: -47.674, d: 1.3, nd: 1.51742, elemId: 3, sd: 10.22 },
    { label: "6", R: 17.367, d: 5.73, nd: 1.90043, elemId: 4, sd: 10.8 },
    { label: "7", R: 777.674, d: 3.72, nd: 1.0, elemId: 0, sd: 10.63 },
    // Physical stop size is inferred from the published design F/1.85; 20.16 mm is the patent-row effective diameter.
    { label: "STO", R: 1e15, d: 3.62, nd: 1.0, elemId: 0, sd: 9.80523 },
    { label: "9", R: 64.497, d: 2.12, nd: 1.6968, elemId: 5, sd: 9.52 },
    { label: "10", R: -262.934, d: 3.56, nd: 1.0, elemId: 0, sd: 9.345 },
    { label: "11A", R: -35.963, d: 1.3, nd: 1.58313, elemId: 6, sd: 8.55 },
    { label: "12", R: -93.55, d: 0.13, nd: 1.0, elemId: 0, sd: 8.595 },
    { label: "13", R: -84.988, d: 6.26, nd: 1.883, elemId: 7, sd: 8.645 },
    { label: "14", R: -12.701, d: 1.0, nd: 1.85478, elemId: 8, sd: 9.485 },
    { label: "15", R: 135.0, d: 5.27, nd: 1.0, elemId: 0, sd: 11.385 },
    { label: "16", R: 800.0, d: 7.35, nd: 1.90043, elemId: 9, sd: 15.86 },
    { label: "17", R: -28.799, d: 0.95, nd: 1.0, elemId: 0, sd: 16.57 },
    { label: "18", R: -109.518, d: 2.86, nd: 1.6968, elemId: 10, sd: 17.03 },
    { label: "19", R: -53.092, d: 11.79, nd: 1.0, elemId: 0, sd: 17.19 },
    { label: "20", R: -29.766, d: 1.7, nd: 1.5927, elemId: 11, sd: 16.89 },
    { label: "21", R: -114.3, d: 11.66, nd: 1.0, elemId: 0, sd: 18.135 },
  ],

  /* ── Surface 11 asphere: patent standard (1 + K) conic convention ── */
  asph: {
    "11A": {
      K: 0,
      A4: -4.61997e-5,
      A6: -9.22837e-8,
      A8: -4.60687e-10,
      A10: 1.65555e-13,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Published focus state ── */
  var: {
    "17": [0.95, 18.25],
  },
  varLabels: [["17", "d17 — L2/L3 gap"]],

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

  /* ── Focus configuration ── */
  closeFocusM: 0.17,
  focusDescription:
    "Published focus: L1 and L2 move together toward the object while L3 stays fixed. Their rear gap increases from 0.95 mm at infinity to 18.25 mm at 0.5× magnification.",

  /* ── Aperture configuration ── */
  nominalFno: 1.85,
  fstopSeries: [1.85, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 9,

  /* ── Geometry / layout ── */
  // Source-published ray-envelope apertures leave positive physical clearance at the 2→3 gap,
  // but their 0.91774 sag-intrusion fraction is slightly above the shared 0.90 default.
  gapSagFrac: 0.92,
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
