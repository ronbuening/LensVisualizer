import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║      LENS DATA — VOIGTLÄNDER ULTRON Vintage Line 28mm F2 Aspherical    ║
 * ╠══════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP2022-100641A Example 1 (Cosina Co., Ltd.).             ║
 * ║  Quasi-symmetric wide-angle for VM (Leica M) mount rangefinder.        ║
 * ║  10 elements / 7 groups, 2 aspherical surfaces (1 element).            ║
 * ║  Focus: Unit focus (whole-lens translation).                           ║
 * ║                                                                        ║
 * ║  NOTE ON SEMI-DIAMETERS:                                               ║
 * ║    Not listed in the patent. Estimated from paraxial marginal and      ║
 * ║    chief ray traces at f/2 (EP radius 7.15 mm, half-field 37.1°)      ║
 * ║    with 10% mechanical clearance. SD = |y_marginal| +                  ║
 * ║    0.6 × |y_chief|, × 1.10. STO SD = marginal ray height at stop.     ║
 * ║                                                                        ║
 * ║  NOTE ON CEMENTED SURFACES:                                            ║
 * ║    Surface 4 is the junction of Jw (L2 + L3): R = ∞ (flat).           ║
 * ║    Surface 7 is the junction of Jy (L4 + L5): R = −24.267 mm.         ║
 * ║    Surface 11 is the junction of Jx (L6 + L7): R = +17.500 mm.        ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "ultron-28f2-asph",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER ULTRON Vintage Line 28mm F2 Aspherical",
  subtitle: "JP2022-100641A EXAMPLE 1 — COSINA / HATTA Shōju, SHIBATA Yūki",
  specs: [
    "10 ELEMENTS / 7 GROUPS",
    "f = 28.50 mm",
    "F/2.0",
    "2ω = 75.4°",
    "2 ASPHERICAL SURFACES (1 ELEMENT)",
    "2 APD ELEMENTS",
  ],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 28,
  focalLengthDesign: 28.5,
  apertureMarketing: 2.0,
  // apertureDesign omitted — patent F/2.0 matches marketing
  patentYear: 2022,
  elementCount: 10,
  groupCount: 7,

  /* ── Elements ──
   *  10 optical elements, front to rear.
   *  Patent labels: Mna, Mnb, Mpa, Mpb, Mnc (Gf) and Nna, Npa, Npb, Nnb, Nnc (Gr).
   *  Cemented doublets: Jw (L2+L3), Jy (L4+L5), Jx (L6+L7).
   *  Filter plate (101) omitted — camera-side cover glass, not part of the
   *  interchangeable lens assembly.  Patent BFD includes full air gap to image.
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
      glass: "BSC7 (HOYA) / N-BK7 (Schott)",
      apd: false,
      role: "Front diverging meniscus — bends wide-angle field inward; low-cost crown contributes to Petzval sum correction and field curvature control",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2 (Mnb)",
      type: "Plano-Concave",
      nd: 1.64769,
      vd: 33.84,
      fl: -36.4,
      glass: "E-F3 (HOYA) / SF2 (Schott)",
      apd: false,
      cemented: "Jw",
      role: "Negative flint of Jw doublet; large Δnd at flat junction (0.263) drives monochromatic correction (SA, coma)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3 (Mpa)",
      type: "Plano-Convex",
      nd: 1.91082,
      vd: 35.25,
      fl: 40.4,
      glass: "S-LAH58 (OHARA) / N-LASF46A (Schott)",
      apd: false,
      cemented: "Jw",
      role: "Positive element of Jw; ultra-high-index LaF allows moderate curvatures at strong power — net doublet weakly positive",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4 (Mpb)",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.25,
      fl: 13.7,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      cemented: "Jy",
      role: "Strongest positive element (f = 13.7 mm) — primary converging element redirecting the wide-angle bundle through the stop; symmetric biconvex minimises SA at f/2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5 (Mnc)",
      type: "Biconcave Negative",
      nd: 1.76182,
      vd: 26.61,
      fl: -25.39,
      glass: "E-FD15 (HOYA) / N-SF14 (Schott)",
      apd: false,
      cemented: "Jy",
      role: "Negative element of Jy; partial chromatic correction with L4 (Δνd = 8.64); high-dispersion flint in negative element follows achromat principle",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6 (Nna)",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.5,
      fl: -12.16,
      glass: "S-TIH1 (OHARA) / SF1 (Schott)",
      apd: false,
      cemented: "Jx",
      role: "Negative flint of rear achromat Jx; strongest negative element (f = −12.16 mm); Δνd = 25.96 with L7 provides primary chromatic correction",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7 (Npa)",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.46,
      fl: 22.98,
      glass: "S-LAC14 (OHARA) / N-LaK14 (Schott)",
      apd: "inferred",
      apdNote: "Manufacturer states 2 APD elements; S-LAC14 (LaC crown, νd ≈ 55) expected to have positive ΔPgF",
      cemented: "Jx",
      role: "Positive crown of Jx achromat; probable APD element — lanthanum crown contributes to secondary spectrum correction",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8 (Npb)",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.81,
      fl: 18.17,
      glass: "S-LAH60MQ (OHARA)",
      apd: false,
      role: "Strong positive rear singlet — primary image-forming element; high-index LaF keeps curvatures moderate for SA control; Petzval contribution balanced by surrounding negatives",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9 (Nnb)",
      type: "Negative Meniscus",
      nd: 1.62999,
      vd: 58.12,
      fl: -100.0,
      glass: "Unconfirmed (no exact catalog match)",
      apd: "inferred",
      apdNote:
        "Manufacturer states 2 APD elements; nd/νd in BaK/LaC transition region consistent with anomalous dispersion but no exact catalog glass identified",
      role: "Weak negative field corrector; possible APD element — controls astigmatism and ray exit angles for digital sensors",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10 (Nnc)",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.8061,
      vd: 40.73,
      fl: -500.0,
      glass: "NBFD3 (HOYA) / S-LAH63Q (OHARA)",
      apd: false,
      role: "Near-zero power aspheric corrector — both surfaces aspherical; placed last for maximum leverage on field aberrations (astigmatism, coma, field curvature); claim 3 element",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── Front group Gf: L1, Jw (L2+L3), Jy (L4+L5) ──────────────────
    { label: "1", R: 89.943, d: 1.2, nd: 1.5168, elemId: 1, sd: 13.9 }, // L1 front
    { label: "2", R: 22.131, d: 5.24, nd: 1.0, elemId: 0, sd: 13.4 }, // L1 rear → air
    { label: "3", R: -23.578, d: 1.05, nd: 1.64769, elemId: 2, sd: 12.1 }, // L2 front (Jw)
    { label: "4", R: 1e15, d: 2.75, nd: 1.91082, elemId: 3, sd: 12.1 }, // L2→L3 junction (flat)
    { label: "5", R: -36.797, d: 0.15, nd: 1.0, elemId: 0, sd: 12.2 }, // L3 rear → air
    { label: "6", R: 22.947, d: 5.46, nd: 1.91082, elemId: 4, sd: 12.2 }, // L4 front (Jy)
    { label: "7", R: -24.267, d: 1.1, nd: 1.76182, elemId: 5, sd: 10.1 }, // L4→L5 junction
    { label: "8", R: 97.122, d: 2.27, nd: 1.0, elemId: 0, sd: 9.6 }, // L5 rear → air
    // ── Aperture stop ─────────────────────────────────────────────────
    { label: "STO", R: 1e15, d: 3.54, nd: 1.0, elemId: 0, sd: 8.0 }, // stop
    // ── Rear group Gr: Jx (L6+L7), L8, L9, L10 ──────────────────────
    { label: "10", R: -17.809, d: 1.0, nd: 1.71736, elemId: 6, sd: 9.0 }, // L6 front (Jx)
    { label: "11", R: 17.5, d: 3.86, nd: 1.6968, elemId: 7, sd: 9.4 }, // L6→L7 junction
    { label: "12", R: -171.048, d: 0.32, nd: 1.0, elemId: 0, sd: 10.8 }, // L7 rear → air
    { label: "13", R: 35.878, d: 4.85, nd: 1.883, elemId: 8, sd: 11.0 }, // L8 front
    { label: "14", R: -27.184, d: 1.14, nd: 1.0, elemId: 0, sd: 11.9 }, // L8 rear → air
    { label: "15", R: -32.873, d: 1.5, nd: 1.62999, elemId: 9, sd: 11.8 }, // L9 front
    { label: "16", R: -70.814, d: 4.31, nd: 1.0, elemId: 0, sd: 12.0 }, // L9 rear → air
    { label: "17A", R: -38.03, d: 2.1, nd: 1.8061, elemId: 10, sd: 12.3 }, // L10 front [asph]
    { label: "18A", R: -43.027, d: 18.4, nd: 1.0, elemId: 0, sd: 12.6 }, // L10 rear → BF [asph]
  ],

  /* ── Aspherical surface coefficients ──
   *  Standard even-polynomial form with K = 0 (sphere + polynomial).
   *  Z(h) = (h²/R)/[1+√(1−(1+K)·(h/R)²)] + A4·h⁴ + A6·h⁶ + A8·h⁸ + ...
   *
   *  NOTE ON SURFACE 18A A6: Patent prints "−336E−07" which is a
   *  formatting artifact (missing decimal point). The correct value is
   *  −3.36 × 10⁻⁷, confirmed by coefficient progression analysis and
   *  departure computation (literal reading gives absurd 34 mm departure
   *  at h = 10 mm vs. the corrected 0.31 mm).
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
  closeFocusM: 0.5,
  focusDescription:
    "Unit focus: entire lens assembly translates forward 1.93 mm via helicoid. No internal group movement. BFD increases from 18.40 mm (∞) to 20.33 mm (m = 0.0676). Subject-to-sensor distance at closest focus ≈ 492 mm.",

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
