import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — VILTROX AF 35mm f/1.8 FE                                      ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: CN 211955963 U, Example 1.                                   ║
 * ║ Production correlation: Viltrox AF 35/1.8 FE (Sony E / full frame).       ║
 * ║ Patent prescription: 10 elements, 8 air-separated groups, 4 aspheres.     ║
 * ║ Focus status: PUBLISHED. L31/G3 moves imageward by 4.92 mm.               ║
 * ║                                                                            ║
 * ║ SOURCE NORMALIZATIONS:                                                     ║
 * ║   • Raw Table-1 row 8 is the physical aperture stop.                      ║
 * ║   • Raw row "STP" is modeled as physical refracting surface 11.          ║
 * ║   • Table-1 asphere type tags and Table-3 coefficient rows 13–16 are     ║
 * ║     shifted +1; claims/prose assign both faces of L23/L31, so they map    ║
 * ║     to corrected physical surfaces 12A–15A.                              ║
 * ║   • Patent paragraph [0091] says f/1.4, but Figs. 2 and 5 print Fno 1.8;  ║
 * ║     f/1.8 is used here and agrees with the production lens identity.       ║
 * ║                                                                            ║
 * ║ REAR-PLATE NORMALIZATION:                                                  ║
 * ║   The patent GL plate (2.00 mm, nd=1.52) is excluded from the active      ║
 * ║   prescription. Surface 19 therefore uses the air-equivalent L42-rear →   ║
 * ║   IMG spacing 22.12 + 2.00/1.52 + 1.00 = 24.43578947368421 mm.           ║
 * ║                                                                            ║
 * ║ SEMI-DIAMETERS:                                                            ║
 * ║   No patent clear apertures are published. SDs are modeled from the       ║
 * ║   f/1.8 marginal ray, ±0.60×31.6° chief-ray bundles, source geometry,     ║
 * ║   the current edge/slope/cross-gap rules, and the manufacturer optical     ║
 * ║   section. The 11.25 mm S2/S3 shared band is set by the 7.10 mm opposing ║
 * ║   convex-surface gap; the close-focus S15/S16 band is also geometry-bound. ║
 * ║                                                                            ║
 * ║ FOCUS / MFD NOTE:                                                         ║
 * ║   closeFocusM=0.3 represents the patent's published nearest-focus row so  ║
 * ║   the modeled endpoint is not mislabeled. The production lens is marketed ║
 * ║   with a 0.4 m minimum focus distance; that marketing value is retained   ║
 * ║   separately in specs/focusDescription and does not alter patent gaps.    ║
 * ║                                                                            ║
 * ║ Manufacturer sources:                                                     ║
 * ║   https://viltrox.com/pages/af-35-1-8-fe                                  ║
 * ║   https://www.viltrox.com.tw/product/viltrox-50mm-f1-8-fe-e-mount-lnvt3518fe/ ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

/* SD review: CN211955963U, PDF p. 17, Fig. 1, 600 dpi, 2026-09-10 UTC.
 * Front-surface optical rim reduced to 13.3 mm from Fig. 1; remaining inferred SDs retained.
 * Catalog names denote compatible spectral proxies; patent nd/vd and supplier uncertainty are retained.
 */
const LENS_DATA = {
  /* ── Identity ── */
  key: "viltrox-af-35f18-fe",
  maker: "Viltrox",
  name: "VILTROX AF 35mm f/1.8 FE",
  subtitle: "CN 211955963 U Example 1 — corrected stop/asphere row mapping; production correlation",
  specs: [
    "10 ELEMENTS / 8 GROUPS",
    "35 mm MARKETED / 34.545 mm PATENT EFL",
    "f/1.8",
    "63.2° FULL-FRAME VIEW",
    "2 ASPHERICAL ELEMENTS / 4 ASPHERICAL SURFACES",
    "PATENT 0.3 m FOCUS ROW / PRODUCTION MFD 0.4 m",
  ],

  focalLengthMarketing: 35,
  focalLengthDesign: 34.54521692924615,
  apertureMarketing: 1.8,
  apertureDesign: 1.8,
  lensMounts: ["sony-fe"],
  imageFormat: "135-full-frame",
  patentNumber: "CN 211955963 U",
  patentAuthors: ["Liu Ruijun", "Chen Baofeng"],
  patentAssignees: ["Shenzhen Leiying Photoelectric Technology Co., Ltd."],
  patentYear: 2020,
  elementCount: 10,
  groupCount: 8,

  /* ── Physical glass elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.49,
      vd: 70.42,
      fl: -51.569159,
      glass: "N-FK5 (catalog-equivalent spectral proxy; supplier unresolved)",
      role: "Front negative collector in patent group G1.",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.85,
      vd: 22.73,
      fl: -19.218309,
      glass: "Unmatched (nd 1.85, vd 22.73 high-index flint class)",
      cemented: "D1",
      role: "Negative member of the L12+L13 cemented pair in G1.",
    },
    {
      id: 3,
      name: "L13",
      diagramLabel: "L13",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.83,
      vd: 37.22,
      fl: 23.061403,
      glass: "Unmatched (nd 1.83, vd 37.22 high-index lanthanum/flint class)",
      cemented: "D1",
      role: "Positive member of the L12+L13 cemented pair in G1.",
    },
    {
      id: 4,
      name: "L14",
      diagramLabel: "L14",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.85,
      vd: 23.78,
      fl: 34.271775,
      glass: "Dense-flint class (nd 1.85, vd 23.78; vendor unresolved)",
      role: "Rear positive element of patent group G1, immediately before the stop.",
    },
    {
      id: 5,
      name: "L21",
      diagramLabel: "L21",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.7,
      vd: 30.05,
      fl: -15.030855,
      glass: "E-FD15 (catalog-equivalent spectral proxy; supplier unresolved)",
      cemented: "D2",
      role: "Negative member of the L21+L22 cemented pair in G2.",
    },
    {
      id: 6,
      name: "L22",
      diagramLabel: "L22",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.5,
      vd: 81.59,
      fl: 37.804715,
      glass: "J-FK01A (catalog-equivalent spectral proxy; supplier unresolved)",
      cemented: "D2",
      role: "Positive low-dispersion member of the L21+L22 cemented pair in G2.",
    },
    {
      id: 7,
      name: "L23",
      diagramLabel: "L23",
      label: "Element 7",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.81,
      vd: 41.01,
      fl: 21.366331,
      glass: "K-VC89 (catalog-equivalent spectral proxy; supplier unresolved)",
      role: "Positive two-sided asphere completing G2 ahead of the focus group.",
    },
    {
      id: 8,
      name: "L31",
      diagramLabel: "L31",
      label: "Element 8",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.69,
      vd: 53.15,
      fl: -107.488959,
      glass: "K-VC80-M (catalog-equivalent spectral proxy; supplier unresolved)",
      role: "Single-element negative internal-focus group G3; translates imageward by 4.92 mm.",
    },
    {
      id: 9,
      name: "L41",
      diagramLabel: "L41",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.49,
      vd: 81.59,
      fl: 50.452742,
      glass: "Unmatched (ED-class 1.49/81.59; common 497816 family differs by delta-n about +0.007)",
      role: "Weak positive low-dispersion element in fixed rear group G4.",
    },
    {
      id: 10,
      name: "L42",
      diagramLabel: "L42",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.65,
      vd: 33.65,
      fl: -60.447356,
      glass: "H-ZF1 (catalog-equivalent spectral proxy; supplier unresolved)",
      role: "Negative rear element of G4; its rear vertex is the active prescription's final refracting surface.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 133.7, d: 1.0, nd: 1.49, elemId: 1, sd: 13.3 },
    { label: "2", R: 21.2, d: 7.1, nd: 1.0, elemId: 0, sd: 11.25 },
    { label: "3", R: -22.02, d: 1.0, nd: 1.85, elemId: 2, sd: 11.25 },
    { label: "4", R: 64.6, d: 5.71, nd: 1.83, elemId: 3, sd: 13.8 },
    { label: "5", R: -26.11, d: 0.1, nd: 1.0, elemId: 0, sd: 13.8 },
    { label: "6", R: 37.4, d: 4.36, nd: 1.85, elemId: 4, sd: 14.6 },
    { label: "7", R: -124.7, d: 10.59, nd: 1.0, elemId: 0, sd: 14.6 },
    { label: "STO", R: 1e15, d: 4.83, nd: 1.0, elemId: 0, sd: 10.84229974288589 },
    { label: "9", R: -22.62, d: 1.0, nd: 1.7, elemId: 5, sd: 12.6 },
    { label: "10", R: 20.03, d: 5.05, nd: 1.5, elemId: 6, sd: 12.6 },
    { label: "11", R: -307.54, d: 0.42, nd: 1.0, elemId: 0, sd: 12.6 },
    { label: "12A", R: 55.48, d: 7.31, nd: 1.81, elemId: 7, sd: 14.8 },
    { label: "13A", R: -23.67, d: 1.0, nd: 1.0, elemId: 0, sd: 14.8 },
    { label: "14A", R: 200.5, d: 1.0, nd: 1.69, elemId: 8, sd: 15.5 },
    { label: "15A", R: 54.03, d: 8.69, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "16", R: 88.04, d: 7.12, nd: 1.49, elemId: 9, sd: 15.8 },
    { label: "17", R: -33.46, d: 0.1, nd: 1.0, elemId: 0, sd: 15.8 },
    { label: "18", R: 666.0, d: 1.0, nd: 1.65, elemId: 10, sd: 15.8 },
    { label: "19", R: 37.08, d: 24.43578947368421, nd: 1.0, elemId: 0, sd: 15.8 },
  ],

  /* ── Aspherical coefficients ──
   * Patent equation uses the standard conic constant K: K=0 is a spherical base.
   * Printed coefficient rows 13–16 are mapped to physical 12A–15A as documented above.
   */
  asph: {
    "12A": { K: 0, A4: -7.55e-6, A6: 3.58e-9, A8: -1.28e-11, A10: 1.11e-13, A12: 0, A14: 0 },
    "13A": { K: 0, A4: 1.05e-5, A6: -5.18e-9, A8: -2.37e-11, A10: 3.64e-14, A12: 0, A14: 0 },
    "14A": { K: 0, A4: 9.27e-5, A6: -5.08e-7, A8: 1.65e-9, A10: -2.56e-12, A12: 0, A14: 0 },
    "15A": { K: 0, A4: 1.03e-4, A6: -4.96e-7, A8: 1.57e-9, A10: -2.41e-12, A12: 0, A14: 0 },
  },

  /* ── Published focus movement ── */
  var: {
    "13A": [1.0, 5.92],
    "15A": [8.69, 3.77],
  },
  varLabels: [
    ["13A", "D1"],
    ["15A", "D2"],
  ],

  /* ── Functional groups and cemented pairs ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "7" },
    { text: "G2 (+)", fromSurface: "9", toSurface: "13A" },
    { text: "G3 (−)", fromSurface: "14A", toSurface: "15A" },
    { text: "G4 (+)", fromSurface: "16", toSurface: "19" },
  ],
  doublets: [
    { text: "L12+L13", fromSurface: "3", toSurface: "5" },
    { text: "L21+L22", fromSurface: "9", toSurface: "11" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.3,
  focusDescription:
    "PUBLISHED patent focus: L31/G3 alone translates 4.92 mm imageward; " +
    "D1 1.00→5.92 mm and D2 8.69→3.77 mm, with D1+D2=9.69 mm. " +
    "The 0.3 m endpoint is the patent row; the production Viltrox lens is marketed at 0.4 m MFD.",

  /* ── Aperture configuration ── */
  nominalFno: 1.8,
  fstopSeries: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 9,

  /* ── Layout tuning ── */
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
