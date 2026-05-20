import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — FUJIFILM FUJINON 18.5 mm f/2.8 (X70)                 ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2017/0075089 A1 Example 1 (Nagami & Suzuki,      ║
 * ║  FUJIFILM Corporation).                                           ║
 * ║  Compact wide-angle imaging lens for APS-C fixed-lens camera.     ║
 * ║  7 elements / 5 groups, 4 aspherical surfaces on 2 elements.      ║
 * ║  Focus: G1 + Stop + G2 translate integrally; G3 fixed.            ║
 * ║                                                                    ║
 * ║  NOTE ON ASPHERICAL SURFACES:                                      ║
 * ║    Patent uses KA convention where KA = (1+K). All surfaces have  ║
 * ║    KA = 0 (paraboloid base, K = −1 standard). Patent polynomial   ║
 * ║    includes odd-order terms (A3–A19). Coefficients below are a    ║
 * ║    least-squares refit to even-only (A4–A20) with K = 0           ║
 * ║    (spherical base). Max refit residual: ~9 µm on S11A.           ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters. Estimated from combined   ║
 * ║    marginal + chief ray trace, then visually tuned against the     ║
 * ║    published Fujifilm lens configuration section.                  ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gap                         ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujifilm-x70-18mm-f28",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON 18.5 mm f/2.8 (X70)",
  subtitle: "US 2017/0075089 A1 Example 1 — FUJIFILM / Nagami & Suzuki",
  specs: ["7 ELEMENTS / 5 GROUPS", "f ≈ 19.1 mm", "F/2.88", "2ω ≈ 72.8°", "4 ASPHERICAL SURFACES (2 ELEMENTS)"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 18.5,
  focalLengthDesign: 19.129,
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "aps-c",
  patentYear: 2017,
  elementCount: 7,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5927,
      vd: 35.31,
      fl: -13.3,
      glass: "S-FTM16 (OHARA)",
      apd: false,
      role: "Front negative meniscus in G1 cemented doublet; chromatic flint partner for L12",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.76,
      fl: 8.0,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "Primary positive power in G1 cemented doublet; high-index lanthanum crown",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L21",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.13,
      fl: -6.5,
      glass: "S-TIM35 (OHARA)",
      apd: false,
      role: "Front negative in G2 cemented doublet; chromatic flint partner for L22, corrects longitudinal chromatic aberration",
      cemented: "D2",
    },
    {
      id: 4,
      name: "L22",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.76,
      fl: 5.7,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "Strongest positive element; primary positive power in G2 cemented doublet",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L23",
      label: "Element 5",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.56867,
      vd: 58.5,
      fl: -37.3,
      glass: "Unmatched (moldable crown, nd = 1.56867, νd = 58.50)",
      apd: false,
      role: "Aspherical singlet trailing G2; corrects lateral chromatic aberration and astigmatism at rising chief-ray heights",
    },
    {
      id: 6,
      name: "L31",
      label: "Element 6",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.68201,
      vd: 31.43,
      fl: -34.2,
      glass: "Unmatched (moldable flint, nd = 1.68201, νd = 31.43)",
      apd: false,
      role: "Primary aspherical field flattener in G3; extreme aspherical departure controls field curvature over 72.8° field",
    },
    {
      id: 7,
      name: "L32",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.76,
      fl: 29.1,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "Final positive element in G3; brings diverging beam to focus and controls exit-ray telecentricity",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1: cemented doublet L11 + L12 ──
    { label: "1", R: 33.667, d: 0.5, nd: 1.5927, elemId: 1, sd: 4.6 }, // L11 front
    { label: "2", R: 6.365, d: 2.28, nd: 1.883, elemId: 2, sd: 4.35 }, // L11→L12 junction
    { label: "3", R: 51.962, d: 1.14, nd: 1.0, elemId: 0, sd: 3.45 }, // L12 rear → air

    // ── Aperture stop ──
    { label: "STO", R: 1e15, d: 1.4, nd: 1.0, elemId: 0, sd: 2.65 },

    // ── G2: cemented doublet L21 + L22, then singlet L23 ──
    { label: "5", R: -10.752, d: 0.5, nd: 1.69895, elemId: 3, sd: 3.05 }, // L21 front
    { label: "6", R: 8.04, d: 3.11, nd: 1.883, elemId: 4, sd: 3.1 }, // L21→L22 junction
    { label: "7", R: -10.931, d: 1.17, nd: 1.0, elemId: 0, sd: 3.85 }, // L22 rear → air
    { label: "8A", R: -6.79295, d: 1.55, nd: 1.56867, elemId: 5, sd: 4.75 }, // L23 front (asph)
    { label: "9A", R: -10.81559, d: 4.493, nd: 1.0, elemId: 0, sd: 5.15 }, // L23 rear → air (asph) — variable gap

    // ── G3: singlet L31, singlet L32 ──
    { label: "10A", R: -39.36209, d: 1.55, nd: 1.68201, elemId: 6, sd: 6.25 }, // L31 front (asph)
    { label: "11A", R: 58.13827, d: 0.3, nd: 1.0, elemId: 0, sd: 6.55 }, // L31 rear → air (asph)
    { label: "12", R: 124.77, d: 4.32, nd: 1.883, elemId: 7, sd: 7.55 }, // L32 front
    { label: "13", R: -31.869, d: 5.093, nd: 1.0, elemId: 0, sd: 8.2 }, // L32 rear → image (air-equiv BFD, cover glass folded)
  ],

  /* ── Aspherical coefficients ──
   *  Original patent: KA = 0 (paraboloid base, K_std = −1), odd+even polynomial A3–A20.
   *  Refit below: K = 0 (spherical base), even-only A4–A20.
   *  Least-squares refit over h = [0, estimated SD]. Max residual ~9 µm on S11A.
   */
  asph: {
    "8A": {
      K: 0,
      A4: -7.63207e-5,
      A6: -6.815212e-5,
      A8: 3.257433e-5,
      A10: -7.629299e-6,
      A12: 1.097889e-6,
      A14: -9.482027e-8,
      A16: 4.805646e-9,
      A18: -1.31934e-10,
      A20: 1.515276e-12,
    },
    "9A": {
      K: 0,
      A4: 2.874787e-6,
      A6: 8.775708e-6,
      A8: 1.578907e-5,
      A10: -4.786933e-6,
      A12: 6.402272e-7,
      A14: -4.567588e-8,
      A16: 1.816831e-9,
      A18: -3.811848e-11,
      A20: 3.29365e-13,
    },
    "10A": {
      K: 0,
      A4: 5.997574e-7,
      A6: 2.72218e-6,
      A8: 7.312621e-6,
      A10: -2.906363e-6,
      A12: 3.244515e-7,
      A14: -1.74115e-8,
      A16: 5.000966e-10,
      A18: -7.421171e-12,
      A20: 4.480808e-14,
    },
    "11A": {
      K: 0,
      A4: -1.21214e-9,
      A6: -1.066351e-8,
      A8: -7.52971e-8,
      A10: -3.223344e-7,
      A12: 3.279535e-8,
      A14: -1.378669e-9,
      A16: 2.918286e-11,
      A18: -3.036122e-13,
      A20: 1.206659e-15,
    },
  },

  /* ── Variable air spacings (focus) ──
   *  Focus type: G1 + Stop + G2 translate forward as a unit; G3 fixed.
   *  Variable gap: S9A (L23 rear) to S10A (L31 front).
   *  Close-focus gap estimated via paraxial ray trace at MFD = 0.10 m.
   */
  var: {
    "9A": [4.493, 8.72],
  },

  varLabels: [["9A", "D(G2–G3)"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "3" },
    { text: "G2", fromSurface: "5", toSurface: "9A" },
    { text: "G3", fromSurface: "10A", toSurface: "13" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "5", toSurface: "7" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.1,
  focusDescription: "G1 + aperture stop + G2 translate integrally forward; G3 fixed relative to sensor.",

  /* ── Aperture configuration ── */
  nominalFno: 2.88,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
