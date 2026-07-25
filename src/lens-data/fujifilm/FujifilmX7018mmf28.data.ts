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
 * ║    KA = 0 (paraboloid base, K = −1 standard). The exact patent    ║
 * ║    odd/even coefficients A3–A20 are transcribed below.            ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters. Estimated from combined   ║
 * ║    marginal + chief ray trace, then visually tuned against the     ║
 * ║    published Fujifilm lens configuration section.                  ║
 * ║    G3 (L31, L32) was resized in the 2026-07-24 patent-figure      ║
 * ║    audit: the old S13 sd = 8.20 mm could not pass an APS-C corner ║
 * ║    ray only 5.09 mm ahead of the image plane. FIG. 1 draws L31 at ║
 * ║    ~10.8 mm and L32 at ~12.7 mm semi-diameter. L32 matches the     ║
 * ║    figure; L31 is capped at 9.3/9.6 mm because surface 10A's      ║
 * ║    polynomial turns over near h = 9.7 mm and diverges past 10 mm. ║
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
  name: "FUJIFILM FUJINON 18.5mm f/2.8 (Fujifilm X70)",
  subtitle: "US 2017/0075089 A1 Example 1 — FUJIFILM / Nagami & Suzuki",
  specs: ["7 ELEMENTS / 5 GROUPS", "f ≈ 19.1 mm", "F/2.88", "2ω ≈ 72.8°", "4 ASPHERICAL SURFACES (2 ELEMENTS)"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 18.5,
  focalLengthDesign: 19.129,
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "aps-c",
  patentNumber: "US 2017/0075089 A1",
  patentAuthors: ["Ryosuke Nagami", "Takashi Suzuki"],
  patentAssignees: ["Fujifilm Corporation"],
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
    { label: "10A", R: -39.36209, d: 1.55, nd: 1.68201, elemId: 6, sd: 9.3 }, // L31 front (asph) — capped by polynomial turnover
    { label: "11A", R: 58.13827, d: 0.3, nd: 1.0, elemId: 0, sd: 9.6 }, // L31 rear → air (asph)
    { label: "12", R: 124.77, d: 4.32, nd: 1.883, elemId: 7, sd: 11.7 }, // L32 front
    { label: "13", R: -31.869, d: 5.093, nd: 1.0, elemId: 0, sd: 12.7 }, // L32 rear → image (air-equiv BFD, cover glass folded)
  ],

  /* ── Aspherical coefficients ──
   *  Exact patent Table 3 coefficients: KA = 0 → K = −1, odd/even A3–A20.
   */
  asph: {
    "8A": {
      K: -1,
      A3: 1.3782299e-3,
      A4: -3.9906529e-3,
      A5: 3.0279366e-3,
      A6: -7.2335607e-4,
      A7: -5.2662171e-4,
      A8: 4.317405e-4,
      A9: -1.0667147e-4,
      A10: -2.6123249e-5,
      A11: 3.1013165e-5,
      A12: -7.7837347e-6,
      A13: -1.7599849e-6,
      A14: 1.2281672e-6,
      A15: -9.1395399e-8,
      A16: -6.0784881e-8,
      A17: 1.2422264e-8,
      A18: 5.070714e-10,
      A19: -3.2671505e-10,
      A20: 2.3730773e-11,
    },
    "9A": {
      K: -1,
      A3: 1.6676754e-3,
      A4: -2.4750326e-3,
      A5: 1.2407224e-3,
      A6: -2.834425e-5,
      A7: -1.8838124e-4,
      A8: 5.2306441e-5,
      A9: 7.3270033e-6,
      A10: -5.742649e-6,
      A11: 6.1758754e-7,
      A12: 2.439896e-7,
      A13: -7.3886864e-8,
      A14: -1.4360895e-9,
      A15: 2.9375274e-9,
      A16: -1.9017547e-10,
      A17: -5.5363331e-11,
      A18: 5.8994028e-12,
      A19: 3.958914e-13,
      A20: -5.2542757e-14,
    },
    "10A": {
      K: -1,
      A3: 7.1558711e-3,
      A4: -4.5021273e-3,
      A5: 5.5943157e-4,
      A6: 1.8141289e-4,
      A7: -6.8061703e-5,
      A8: 7.9699513e-7,
      A9: 2.4057863e-6,
      A10: -1.9151359e-7,
      A11: -4.5583276e-8,
      A12: 5.3485862e-9,
      A13: 5.5459375e-10,
      A14: -8.1148605e-11,
      A15: -4.5531991e-12,
      A16: 7.677907e-13,
      A17: 2.2470633e-14,
      A18: -4.1664211e-15,
      A19: -4.9469722e-17,
      A20: 9.7697856e-18,
    },
    "11A": {
      K: -1,
      A3: 5.5995896e-3,
      A4: -2.8612644e-3,
      A5: 1.4221896e-4,
      A6: 1.3246894e-4,
      A7: -2.6896787e-5,
      A8: -1.3966448e-6,
      A9: 8.5583589e-7,
      A10: -3.0874398e-8,
      A11: -1.2225967e-8,
      A12: 9.446107e-10,
      A13: 8.3855914e-11,
      A14: -9.9278279e-12,
      A15: -1.6287784e-13,
      A16: 4.3963915e-14,
      A17: -6.9690143e-16,
      A18: -6.2998485e-17,
      A19: 3.2617438e-18,
      A20: -8.4650758e-20,
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
