import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════════════╗
 * ║              LENS DATA — SAMYANG AF 24mm f/1.8 FE                               ║
 * ╠════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2024/0151940 A1, Example 1 (Samyang Optics Co., Ltd.).          ║
 * ║  Production correlation: inferred from 11 elements / 8 groups, 2 ASP elements,   ║
 * ║  2 repeated high-Abbe elements, 83.74° patent FOV, and the 0.19 m nearest state.║
 * ║  11 elements / 8 air-separated groups; 4 aspherical surfaces.                    ║
 * ║  Focus status: PUBLISHED. G21 (L71 + L81) moves objectward; G11/G31 stay fixed.  ║
 * ║                                                                                  ║
 * ║  PRESCRIPTION / REFERENCE-PLANE NOTES                                            ║
 * ║    • No uniform scale is applied. Patent dimensions and aspheres are retained.   ║
 * ║    • Patent Table 1 rear filter surfaces 21–22 are excluded. Surface 20 uses     ║
 * ║      the patent-published filter-removed "in Air" rear spacing of 15.994 mm.     ║
 * ║    • Table 3 is captioned "zoom data" in the source, but it is focus-only data. ║
 * ║                                                                                  ║
 * ║  NOTE ON SEMI-DIAMETERS                                                          ║
 * ║    Example 1 publishes no clear apertures. Non-stop SDs are inferred from Fig. 1 ║
 * ║    together with exact on-/off-axis ray envelopes at all three published focus   ║
 * ║    states. The stop SD (10.0768345 mm) is inferred by calibrating the entrance   ║
 * ║    pupil to the patent EFL 24.8004 mm and F/1.86. Authored SDs were then checked ║
 * ║    for edge thickness, actual rim slope, conic validity, shared-gap intrusion,   ║
 * ║    and the project's default 0.6-field representative-ray containment.           ║
 * ║                                                                                  ║
 * ║  NOTE ON GLASS / SPECTRAL DATA                                                   ║
 * ║    The patent publishes nd/νd only and does not identify a glass manufacturer.   ║
 * ║    Glass strings therefore remain vendor-neutral class/six-digit labels. nC, nF, ║
 * ║    ng, and dPgF are intentionally not invented; no single catalog identity is    ║
 * ║    source-defensible for those higher-order spectral fields.                     ║
 * ╚════════════════════════════════════════════════════════════════════════════════════╝
 *
 * Manufacturer identity/specification sources:
 *   https://www.lksamyang.com/en/product/product-view.php?seq=527
 *   https://www.lksamyang.com/en/about/notice-view.php?seq=1116
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "samyang-af-24mm-f1p8-fe",
  maker: "Samyang",
  name: "SAMYANG AF 24mm f/1.8 FE",
  subtitle: "US 2024/0151940 A1 Example 1 — production correlation inferred",
  specs: [
    "11 ELEMENTS / 8 GROUPS",
    "24mm f/1.8 (MARKETED)",
    "PATENT EFL 24.8004 mm / F1.86",
    "4 ASPHERICAL SURFACES",
    "PUBLISHED INNER FOCUS",
  ],

  focalLengthMarketing: 24,
  focalLengthDesign: 24.8004,
  apertureMarketing: 1.8,
  apertureDesign: 1.86,
  lensMounts: ["sony-fe"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2024/0151940 A1",
  patentAuthors: ["Ju Yeon Jo"],
  patentAssignees: ["Samyang Optics Co., Ltd."],
  patentYear: 2024,
  elementCount: 11,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "Element L11",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.46,
      fl: -36.29578188814737,
      glass: "697555 — lanthanum-crown class (vendor unresolved)",
      apd: false,
      role: "Front negative meniscus of positive-power group G11.",
    },
    {
      id: 2,
      name: "L21",
      diagramLabel: "L21",
      label: "Element L21",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.78,
      fl: -23.03622821489084,
      glass: "847238 — high-index dense-flint class (vendor unresolved)",
      apd: false,
      role: "Negative member of the first cemented pair in G11.",
      cemented: "J1",
    },
    {
      id: 3,
      name: "L31",
      diagramLabel: "L31",
      label: "Element L31",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.72,
      fl: 26.051839147545163,
      glass: "835427 — high-index flint class (vendor unresolved)",
      apd: false,
      role: "Positive member cemented to L21; the pair is nearly afocal in isolation.",
      cemented: "J1",
    },
    {
      id: 4,
      name: "L41",
      diagramLabel: "L41",
      label: "Element L41",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.13,
      fl: 32.57293744616292,
      glass: "001291 — ultra-high-index flint class (vendor unresolved)",
      apd: false,
      role: "High-index positive element in G11 ahead of the rear cemented pair.",
    },
    {
      id: 5,
      name: "L51",
      diagramLabel: "L51",
      label: "Element L51",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.61,
      fl: 53.18853061582824,
      glass: "497816 — low-dispersion crown class (vendor unresolved)",
      apd: "inferred",
      apdNote: "Samyang’s production construction marks L51/L101 positions ED; inferred through the patent/product correlation. No measured partial dispersion or supplier identity is implied.",
      role: "Low-dispersion positive member of the second cemented pair in G11.",
      cemented: "J2",
    },
    {
      id: 6,
      name: "L61",
      diagramLabel: "L61",
      label: "Element L61",
      type: "Negative Meniscus",
      nd: 1.60342,
      vd: 38.01,
      fl: -82.92480830482064,
      glass: "603380 — flint class (vendor unresolved)",
      apd: false,
      role: "Negative partner cemented to L51 at the rear of G11.",
      cemented: "J2",
    },
    {
      id: 7,
      name: "L71",
      diagramLabel: "L71",
      label: "Element L71",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.68863,
      vd: 31.19,
      fl: -81.85440529002614,
      glass: "689312 — dense-flint class (vendor unresolved)",
      apd: false,
      role: "Double-aspheric negative element at the front of the translating focus group G21.",
    },
    {
      id: 8,
      name: "L81",
      diagramLabel: "L81",
      label: "Element L81",
      type: "Biconvex Positive",
      nd: 1.59349,
      vd: 67,
      fl: 25.70883877387103,
      glass: "593670 — dense phosphate-crown class (vendor unresolved)",
      apd: false,
      role: "Positive element completing the positive-power translating focus group G21.",
    },
    {
      id: 9,
      name: "L91",
      diagramLabel: "L91",
      label: "Element L91",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.68863,
      vd: 31.19,
      fl: -38.68335298889826,
      glass: "689312 — dense-flint class (vendor unresolved)",
      apd: false,
      role: "Double-aspheric negative element at the front of fixed negative group G31.",
    },
    {
      id: 10,
      name: "L101",
      diagramLabel: "L101",
      label: "Element L101",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 41.073428149316186,
      glass: "497816 — low-dispersion crown class (vendor unresolved)",
      apd: "inferred",
      apdNote: "Samyang’s production construction marks L51/L101 positions ED; inferred through the patent/product correlation. No measured partial dispersion or supplier identity is implied.",
      role: "Low-dispersion positive member of the rear cemented pair in G31.",
      cemented: "J3",
    },
    {
      id: 11,
      name: "L111",
      diagramLabel: "L111",
      label: "Element L111",
      type: "Negative Meniscus",
      nd: 1.58144,
      vd: 40.89,
      fl: -41.747395352049416,
      glass: "581409 — light-flint class (vendor unresolved)",
      apd: false,
      role: "Negative rear member cemented to L101; final refracting element of G31.",
      cemented: "J3",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 45.456, d: 1, nd: 1.6968, elemId: 1, sd: 17.2 },
    { label: "2", R: 16.103, d: 16.958, nd: 1, elemId: 0, sd: 13.2 },
    { label: "3", R: -28.597, d: 1.3, nd: 1.84666, elemId: 2, sd: 15.25 },
    { label: "4", R: 62.616, d: 6.6, nd: 1.83481, elemId: 3, sd: 15.25 },
    { label: "5", R: -31.724, d: 0.311, nd: 1, elemId: 0, sd: 15.25 },
    { label: "6", R: 35.374, d: 4.48, nd: 2.001, elemId: 4, sd: 14.3 },
    { label: "7", R: -390.218, d: 3.568, nd: 1, elemId: 0, sd: 14.3 },
    { label: "8", R: -55.477, d: 4.81, nd: 1.497, elemId: 5, sd: 13.2 },
    { label: "9", R: -18.419, d: 1, nd: 1.60342, elemId: 6, sd: 13.2 },
    { label: "10", R: -29.744, d: 1.1, nd: 1, elemId: 0, sd: 13.2 },
    { label: "STO", R: 1e15, d: 10.562, nd: 1, elemId: 0, sd: 10.076834514129681 },
    { label: "12A", R: -9.326, d: 1.4, nd: 1.68863, elemId: 7, sd: 9 },
    { label: "13A", R: -11.859, d: 0.1, nd: 1, elemId: 0, sd: 10 },
    { label: "14", R: 185.016, d: 7, nd: 1.59349, elemId: 8, sd: 11.8 },
    { label: "15", R: -16.395, d: 1, nd: 1, elemId: 0, sd: 11.8 },
    { label: "16A", R: -391.14, d: 1.6, nd: 1.68863, elemId: 9, sd: 12.3 },
    { label: "17A", R: 28.633, d: 1.771, nd: 1, elemId: 0, sd: 11.4 },
    { label: "18", R: 916.855, d: 6.13, nd: 1.497, elemId: 10, sd: 13 },
    { label: "19", R: -20.832, d: 1, nd: 1.58144, elemId: 11, sd: 14 },
    { label: "20", R: -149.521, d: 15.994, nd: 1, elemId: 0, sd: 15.2 },
  ],

  /* Patent Equation 1 already uses the project standard conic constant K. */
  asph: {
    "12A": {
      K: -2.348681,
      A4: 1.2773409e-4,
      A6: 5.004933e-7,
      A8: -3.2547623e-8,
      A10: 2.9173457e-10,
      A12: -1.0415829e-12,
      A14: 0,
    },
    "13A": {
      K: -1.446936,
      A4: 3.2842384e-4,
      A6: -6.0327396e-7,
      A8: -1.452686e-8,
      A10: 1.3703348e-10,
      A12: -4.1052113e-13,
      A14: 0,
    },
    "16A": {
      K: -10,
      A4: -9.2691251e-5,
      A6: 4.4152933e-7,
      A8: -4.0515264e-10,
      A10: -4.837462e-12,
      A12: 1.3667864e-14,
      A14: 0,
    },
    "17A": {
      K: -1.031552,
      A4: -1.0271893e-4,
      A6: 7.8806043e-7,
      A8: -3.2185848e-9,
      A10: 7.7624063e-12,
      A12: -8.8352174e-15,
      A14: 0,
    },
  },

  /* ── Published focus states ──
   * focusT=0       : infinity, D1=10.562, D2=1.000 mm
   * focusT=0.18939 : source intermediate state, D0=915.554 mm; normalized to the
   *                  ~1.003238 m object→image track using the 0.19 m production endpoint
   * focusT=1       : patent nearest state, D0=101.451 mm / TL≈0.19 m, D1=7.642, D2=3.920 mm
   */
  focusPositions: [0, 0.1893867656528162, 1],
  var: {
    STO: [10.562, 10.155, 7.642],
    "15": [1, 1.407, 3.92],
  },
  varLabels: [
    ["STO", "D1"],
    ["15", "D2"],
  ],

  groups: [
    { text: "G11 (+)", fromSurface: "1", toSurface: "10" },
    { text: "G21 (+) FOCUS", fromSurface: "12A", toSurface: "15" },
    { text: "G31 (−)", fromSurface: "16A", toSurface: "20" },
  ],

  doublets: [
    { text: "J1", fromSurface: "3", toSurface: "5" },
    { text: "J2", fromSurface: "8", toSurface: "10" },
    { text: "J3", fromSurface: "18", toSurface: "20" },
  ],

  closeFocusM: 0.19,
  focusDescription:
    "PUBLISHED inner focus: G21 (L71 + L81) translates objectward while G11/G31 stay fixed. " +
    "D1/D2 are 10.562/1.000 mm at infinity, 10.155/1.407 mm at the published intermediate state, " +
    "and 7.642/3.920 mm at the patent nearest state; D1 + D2 remains 11.562 mm.",

  /* The source-calibrated stop yields f/1.8616117509 with the rounded Table 1 prescription. */
  nominalFno: 1.8616117508856445,
  fstopSeries: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 9,
  maxFstop: 22,

  /* Layout only; geometry is validated independently of these values. */
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
