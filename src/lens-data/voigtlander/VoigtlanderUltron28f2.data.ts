import type { LensDataInput } from "../../types/optics.js";

/** JP2022100641A Example1: table p.7, equation p.8, Figure1 p.16 (600dpi).
 * Matching JP7546909B2 table p.6 retains the same malformed ASP18 A6=-336E-07.
 * Existing -3.36e-7 remains an inferred decimal repair, not a confirmed source value.
 * Source radii, spacings, glass coordinates, source-listed element focal lengths and SDs retained.
 * Source summary and rounded table disagree in EFL/near conjugate; see analysis.
 * Figure101 cover/filter is excluded; no plate thickness/index is supplied for conversion.
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "ultron-28f2-asph",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER ULTRON Vintage Line 28mm f/2 Aspherical",
  subtitle: "JP2022-100641A EXAMPLE 1 — COSINA / YOSHIHISA YOMOGIDA, YUKI SHIBATA",
  specs: [
    "10 ELEMENTS / 7 GROUPS",
    "f = 28.50 mm",
    "F/2.0",
    "2ω = 75.4°",
    "2 ASPHERICAL SURFACES (1 ELEMENT)",
  ],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 28,
  focalLengthDesign: 28.5,
  apertureMarketing: 2.0,
  apertureDesign: 2.0,
  imageFormat: "135-full-frame",
  patentNumber: "JP 2022-100641 A",
  patentAuthors: ["Yoshihisa Yomogida", "Yuki Shibata"],
  patentAssignees: ["Cosina Co., Ltd."],
  patentYear: 2022,
  elementCount: 10,
  groupCount: 7,

  /* ── Elements ──
   *  10 optical elements, front to rear.
   *  Patent labels: Mna, Mnb, Mpa, Mpb, Mnc (Gf) and Nna, Npa, Npb, Nnb, Nnc (Gr).
   *  Cemented doublets: Jw (L2+L3), Jy (L4+L5), Jx (L6+L7).
   *  Filter plate (101) omitted — camera-side cover glass, not part of the
   *  interchangeable lens assembly.  Published ZD18 is the last-lens-to-image distance; plate thickness/index are not supplied.
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1 (Mna)",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.2,
      fl: -57.14,
      glass: "BSC7 (HOYA) / N-BK7 (Schott) (inferred coordinate counterpart)",
      apd: false,
      role: "Front negative meniscus, convex toward the object, in Gf.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2 (Mnb)",
      type: "Plano-Concave",
      nd: 1.64769,
      vd: 33.84,
      fl: -36.4,
      glass: "E-FD2 (HOYA, patent nd/vd match) / SF2 (Schott) (inferred coordinate counterpart)",
      apd: false,
      cemented: "Jw",
      role: "Plano-concave negative member of Jw; the cemented interface is flat.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3 (Mpa)",
      type: "Plano-Convex",
      nd: 1.91082,
      vd: 35.25,
      fl: 40.4,
      glass: "TAFD35 (HOYA, patent nd/vd match) (inferred coordinate counterpart)",
      apd: false,
      cemented: "Jw",
      role: "Plano-convex positive member of Jw; source high-index coordinate also used for L4.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4 (Mpb)",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.25,
      fl: 13.7,
      glass: "TAFD35 (HOYA, patent nd/vd match) (inferred coordinate counterpart)",
      apd: false,
      cemented: "Jy",
      role: "Biconvex positive member of Jy; source-listed isolated focal length 13.70 mm.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5 (Mnc)",
      type: "Biconcave Negative",
      nd: 1.76182,
      vd: 26.61,
      fl: -25.39,
      glass: "S-TIH14 (OHARA, patent nd/vd match) (inferred coordinate counterpart)",
      apd: false,
      cemented: "Jy",
      role: "Biconcave negative member of Jy with a lower Abbe number than L4.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6 (Nna)",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.5,
      fl: -12.16,
      glass: "S-TIH1 (OHARA) / SF1 (Schott) (inferred coordinate counterpart)",
      apd: false,
      cemented: "Jx",
      role: "Biconcave negative member of Jx after the stop.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7 (Npa)",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.46,
      fl: 22.98,
      glass: "S-LAC14 (OHARA) / N-LaK14 (Schott) (inferred coordinate counterpart)",
      apd: false,
      cemented: "Jx",
      role: "Biconvex positive member of Jx. No patent partial-dispersion evidence identifies it as APD.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8 (Npb)",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.81,
      fl: 18.17,
      glass: "H-ZLAF68C (CDGM, patent nd/vd match) (inferred coordinate counterpart)",
      apd: false,
      role: "Positive singlet in Gr, between Jx and the two final negative lenses.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9 (Nnb)",
      type: "Negative Meniscus",
      nd: 1.62999,
      vd: 58.12,
      fl: -100.0,
      glass: "J-PSKH8 catalog equivalent (patent 630581; production supplier unspecified) (inferred coordinate counterpart)",
      apd: false,
      role: "Weak negative meniscus. Source FL is −100 mm, while the rounded radii/index give about −98.90 mm; no patent APD claim.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10 (Nnc)",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.8061,
      vd: 40.73,
      fl: -500.0,
      glass: "NBFD3 (HOYA) / S-LAH63Q (OHARA) (inferred coordinate counterpart)",
      apd: false,
      role: "Final weak negative meniscus with two aspheric faces. Source FL is −500 mm; ASP18 A6 remains an explicitly inferred repair.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── Front group Gf: L1, Jw (L2+L3), Jy (L4+L5) ──────────────────
    { label: "1", R: 89.943, d: 1.2, nd: 1.5168, elemId: 1, sd: 12.0 }, // L1 front
    { label: "2", R: 22.131, d: 5.24, nd: 1.0, elemId: 0, sd: 10.1 }, // L1 rear → air
    { label: "3", R: -23.578, d: 1.05, nd: 1.64769, elemId: 2, sd: 9.7 }, // L2 front (Jw)
    { label: "4", R: 1e15, d: 2.75, nd: 1.91082, elemId: 3, sd: 9.3 }, // L2→L3 junction (flat)
    { label: "5", R: -36.797, d: 0.15, nd: 1.0, elemId: 0, sd: 9.3 }, // L3 rear → air
    { label: "6", R: 22.947, d: 5.46, nd: 1.91082, elemId: 4, sd: 9.3 }, // L4 front (Jy)
    { label: "7", R: -24.267, d: 1.1, nd: 1.76182, elemId: 5, sd: 9.3 }, // L4→L5 junction
    { label: "8", R: 97.122, d: 2.27, nd: 1.0, elemId: 0, sd: 9.3 }, // L5 rear → air
    // ── Aperture stop ─────────────────────────────────────────────────
    { label: "STO", R: 1e15, d: 3.54, nd: 1.0, elemId: 0, sd: 8.0 }, // stop
    // ── Rear group Gr: Jx (L6+L7), L8, L9, L10 ──────────────────────
    { label: "10", R: -17.809, d: 1.0, nd: 1.71736, elemId: 6, sd: 8.1 }, // L6 front (Jx)
    { label: "11", R: 17.5, d: 3.86, nd: 1.6968, elemId: 7, sd: 8.0 }, // L6→L7 junction
    { label: "12", R: -171.048, d: 0.32, nd: 1.0, elemId: 0, sd: 9.0 }, // L7 rear → air
    { label: "13", R: 35.878, d: 4.85, nd: 1.883, elemId: 8, sd: 9.9 }, // L8 front
    { label: "14", R: -27.184, d: 1.14, nd: 1.0, elemId: 0, sd: 9.7 }, // L8 rear → air
    { label: "15", R: -32.873, d: 1.5, nd: 1.62999, elemId: 9, sd: 9.5 }, // L9 front
    { label: "16", R: -70.814, d: 4.31, nd: 1.0, elemId: 0, sd: 10.3 }, // L9 rear → air
    { label: "17A", R: -38.03, d: 2.1, nd: 1.8061, elemId: 10, sd: 11.9 }, // L10 front [asph]
    { label: "18A", R: -43.027, d: 18.4, nd: 1.0, elemId: 0, sd: 11.9 }, // L10 rear → BF [asph]
  ],

  /* ── Aspherical surface coefficients ──
   *  Standard even-polynomial form with K = 0 (sphere + polynomial).
   *  Z(h) = (h²/R)/[1+√(1−(1+K)·(h/R)²)] + A4·h⁴ + A6·h⁶ + A8·h⁸ + ...
   *
   *  Source and grant both print A6=-336E-07. Existing -3.36e-7 is retained
   *  as an inferred missing-decimal repair consistent with the drawing. The grant
   *  does not independently confirm it; this remains a source limitation.
   */
  asph: {
    "17A": {
      K: 0.0,
      A4: -9.97e-5,
      A6: -5.86e-7,
      A8: 7.76e-9,
      A10: -2.26e-11,
      A12: 0,
      A14: 0,
    },
    "18A": {
      K: 0.0,
      A4: -4.13e-5,
      A6: -3.36e-7,
      A8: 6.38e-9,
      A10: -2.06e-11,
      A12: 9.67e-15,
      A14: 0,
    },
  },

  /* ── Variable air spacings (unit focus) ──
   *  Entire lens translates as a unit; only the BFD changes.
   *  ZD 0 = object distance from S1: ∞ → 430.00 mm (m = 0.0676).
   *  ZD 18 = BFD: 18.40 → 20.33 mm (focus extension 1.93 mm).
   */
  var: {
    "18A": [18.4, 20.33],
  },
  varLabels: [["18A", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "Gf (front)", fromSurface: "1", toSurface: "8" },
    { text: "Gr (rear)", fromSurface: "10", toSurface: "18A" },
  ],

  doublets: [
    { text: "Jw", fromSurface: "3", toSurface: "5" },
    { text: "Jy", fromSurface: "6", toSurface: "8" },
    { text: "Jx", fromSurface: "10", toSurface: "12" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.4921574,
  focusDescription:
    "Source near station: ZD0=430 mm plus LT=60.2274 mm and 1.93 mm extension gives 49.22 cm. All lenses and stop move together. The rounded prescription instead computes about 50.98 cm; this source discrepancy remains unresolved.",

  /* ── Aperture configuration ── */
  nominalFno: 2.0,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  /* ── Layout tuning ──
   *  Compact lens (LT = 60.2 mm) with moderate front-to-rear SD variation.
   *  scFill moderate to avoid cramping the 10 elements in a short track.
   *  yScFill kept low — front elements are only slightly larger than rear.
   */
  scFill: 0.5,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
