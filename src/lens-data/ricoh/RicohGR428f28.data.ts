import type { LensDataInput } from "../../types/optics.js";

/**
 * JP2025-069516A, Example 2: Table 5/6 p18, Fig. 2 p31, equation p15.
 * No scaling. Clear rims are estimates from the 600 dpi optical outlines.
 * The two omitted plane plates require an equivalent air gap:
 * 6.976 + 0.77/1.562 + 0.30 + 0.70/1.50 + 0.70 = 8.935624413 mm.
 * Paragraph 0035 supports objectward integral G1/G2 motion with fixed G3.
 * The finite 0.12 m object-to-image station is inferred, not tabulated.
 * Table 5 names S-TIM35 for L23 and M-TAF101 for L31, conflicting with
 * their nd/vd. Preserve coordinates and label catalog counterparts as inferred.
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "ricoh-gr4-28f28",
  maker: "Ricoh",
  name: "RICOH GR LENS 18.3mm f/2.8 (Ricoh GR IV)",
  subtitle: "JP2025-069516A EXAMPLE 2 — RICOH / NAKAYAMA",
  specs: ["7 ELEMENTS / 5 GROUPS", "f ≈ 18.35 mm", "F/2.89", "2ω ≈ 76.0°", "5 ASPHERICAL SURFACES (3 ELEMENTS)"],

  focalLengthMarketing: 18.3,
  focalLengthDesign: 18.35,
  apertureMarketing: 2.8,
  apertureDesign: 2.89,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "aps-c",
  patentNumber: "JP 2025-069516 A",
  patentAuthors: ["Takahiro Nakayama"],
  patentAssignees: ["Ricoh Co., Ltd."],
  patentYear: 2025,
  elementCount: 7,
  groupCount: 5,

  /* ── Elements ──
   *  Patent nomenclature: G1 = L11 + (L12–L13), G2 = (L21–L22) + L23, G3 = L31.
   *  Production "5 groups" counts air-separated groups:
   *    (1) L11, (2) L12–L13, (3) L21–L22, (4) L23, (5) L31.
   */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.68948,
      vd: 31.02,
      fl: -104.1,
      glass: "L-TIM28 (OHARA)",
      apd: false,
      role: "Front field lens — bends off-axis bundles inward, aspherical rear surface controls SA and astigmatism. PGM glass.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.31,
      fl: -9.3,
      glass: "S-FTM16 (OHARA)",
      apd: false,
      role: "G1 doublet flint — provides high-dispersion medium for chromatic correction at cemented junction.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.76,
      fl: 7.1,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "G1 doublet crown (nd=1.883) — main positive power generator of G1; quasi-symmetric partner to L21.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L21",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.76,
      fl: 6.9,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "G2 doublet crown — most powerful converging element; mirrors L13 across stop.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L22",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.13,
      fl: -8.8,
      glass: "S-TIM35 (OHARA)",
      apd: false,
      role: "G2 doublet flint — rear surface forms air lens AL2 for coma and diameter control.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L23",
      label: "Element 6",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.76802,
      vd: 49.24,
      fl: 127.7,
      glass: "MC-TAF101-100 (inferred catalog counterpart)",
      apd: false,
      role: "Weak positive meniscus with two aspheres. Patent S-TIM35 name conflicts with nd/vd; MC-TAF101-100 is an inferred catalog counterpart, not verified source identity.",
    },
    {
      id: 7,
      name: "L31",
      label: "Element 7",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.80139,
      vd: 45.45,
      fl: -46.1,
      glass: "M-TAF31 (inferred catalog counterpart)",
      apd: false,
      role: "Fixed negative rear element (G3), with two aspheres. Patent M-TAF101 name conflicts with nd/vd; M-TAF31 is an inferred catalog counterpart, not verified source identity.",
    },
  ],

  /* ── Surface prescription ──
   *  Patent Table 5 (Example 2).  R sign convention matches spec.
   *  Stop is surface 6 in the patent — placed between G1 rear and G2 front.
   *
   *  Cemented doublets:
   *    D1: L12 (id:2) + L13 (id:3) — surfaces 3, 4, 5
   *    D2: L21 (id:4) + L22 (id:5) — surfaces 7, 8, 9
   */
  surfaces: [
    //                                                                         ┌─ G1 ─────────────────────────────
    { label: "1", R: 13.353, d: 0.7, nd: 1.68948, elemId: 1, sd: 6.0 }, // L11 front (spherical)
    { label: "2A", R: 11.258, d: 2.4, nd: 1.0, elemId: 0, sd: 6.0 }, // L11 rear → air (aspherical)
    { label: "3", R: -17.988, d: 0.65, nd: 1.5927, elemId: 2, sd: 5.0 }, // L12 front
    { label: "4", R: 7.957, d: 2.64, nd: 1.883, elemId: 3, sd: 5.0 }, // L12→L13 junction — elemId: L13
    { label: "5", R: -29.283, d: 1.14, nd: 1.0, elemId: 0, sd: 4.6 }, // L13 rear → air
    //                                                                         └─ G1 ─────────────────────────────
    { label: "STO", R: 1e15, d: 1.2, nd: 1.0, elemId: 0, sd: 3.2 }, // aperture stop
    //                                                                         ┌─ G2 ─────────────────────────────
    { label: "7", R: 16.939, d: 2.6, nd: 1.883, elemId: 4, sd: 4.5 }, // L21 front
    { label: "8", R: -9.407, d: 0.5, nd: 1.69895, elemId: 5, sd: 4.6 }, // L21→L22 junction — elemId: L22
    { label: "9", R: 17.906, d: 1.55, nd: 1.0, elemId: 0, sd: 4.6 }, // L22 rear → air
    { label: "10A", R: -15.696, d: 1.35, nd: 1.76802, elemId: 6, sd: 5.5 }, // L23 front (aspherical)
    { label: "11A", R: -13.531, d: 3.1, nd: 1.0, elemId: 0, sd: 5.5 }, // L23 rear → air (aspherical) — D23 gap
    //                                                                         └─ G2 ─────────────────────────────
    //                                                                         ┌─ G3 (fixed) ─────────────────────
    { label: "12A", R: -26.27, d: 0.75, nd: 1.80139, elemId: 7, sd: 8.0 }, // L31 front (aspherical)
    { label: "13A", R: -91.182, d: 8.935624413145538, nd: 1.0, elemId: 0, sd: 8.0 }, // L31 rear → image (aspherical) — BFD
    //                                                                         └─ G3 (fixed) ─────────────────────
  ],

  /* ── Aspherical coefficients ──
   *  Patent Table 6 (Example 2).
   *  Sag: Z(h) = (h²/R)/[1+√(1−(1+K)(h/R)²)] + A4·h⁴ + A6·h⁶ + A8·h⁸ + A10·h¹⁰ + A12·h¹² + A14·h¹⁴
   */
  asph: {
    "2A": {
      K: 0,
      A4: 1.6766e-4,
      A6: 6.0373e-6,
      A8: -1.8145e-7,
      A10: 1.2627e-8,
      A12: -2.833e-10,
      A14: 5.1394e-12,
    },
    "10A": {
      K: 0,
      A4: -2.4437e-4,
      A6: 4.7283e-6,
      A8: -2.0379e-7,
      A10: 2.479e-9,
      A12: 0,
      A14: 0,
    },
    "11A": {
      K: 0.31036,
      A4: 6.2559e-5,
      A6: 2.5442e-6,
      A8: 1.4919e-7,
      A10: -2.1728e-9,
      A12: 0,
      A14: 0,
    },
    "12A": {
      K: 8.82985,
      A4: -5.7547e-4,
      A6: 5.3727e-6,
      A8: 3.774e-8,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "13A": {
      K: 0,
      A4: -5.5557e-4,
      A6: 6.4933e-6,
      A8: -1.5819e-8,
      A10: 2.7958e-11,
      A12: -8.3479e-13,
      A14: 1.0084e-14,
    },
  },

  /* ── Variable air spacings (focus mechanism) ──
   *  Front focus: G1+G2 (surfaces 1–11A) translate forward for close focus.
   *  G3 (surfaces 12A–13A) is fixed relative to the sensor.
   *  Only the D23 air gap (surface 11A) changes.
   *  Full paraxial object-to-image 0.12 m scenario: D23 = 5.945331457 mm.
   */
  var: {
    "11A": [3.1, 5.945331456739211], // [d_infinity, d_close_0.12m]
  },

  varLabels: [["11A", "D23 (modeled)"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "5" },
    { text: "G2", fromSurface: "7", toSurface: "11A" },
    { text: "G3 (FIXED)", fromSurface: "12A", toSurface: "13A" },
  ],

  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "7", toSurface: "9" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.12,
  focusDescription:
    "G1+G2 move toward the object; G3 stays fixed. The 0.12 m object-to-image endpoint is an inferred paraxial scenario.",

  /* ── Aperture configuration ── */
  nominalFno: 2.89,
  maxFstop: 16,
  fstopSeries: [2.89, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ──
   *  Compact wide-angle with large rear element — needs moderate fill
   *  to keep the small front elements visible while showing L31's size.
   */
  scFill: 0.55,
  yScFill: 0.45,
} satisfies LensDataInput;

export default LENS_DATA;
