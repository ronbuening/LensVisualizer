import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — SMC PENTAX-FA 31mm F1.8 AL Limited                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 6,560,042 B2, Example 3 (Table 3).               ║
 * ║  Pentax Corporation / Murata, Ito. Granted May 6, 2003.           ║
 * ║  Retrofocus wide-angle for K-mount SLR.                           ║
 * ║  9 elements / 7 groups, 1 aspherical surface (glass-molded).      ║
 * ║  Focus: Two-group differential-advance (floating inner focus).    ║
 * ║    Fa = Group 10 + Sub-group 20F (L1–L4), moves integrally.      ║
 * ║    Fb = Sub-group 20R (L5–L9 + stop), moves independently.       ║
 * ║    Variable gaps: d8 (Fa–Fb spacing), d16 (BFD).                 ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                          ║
 * ║    Patent does not list semi-diameters. Estimated from marginal   ║
 * ║    + chief ray trace at 60% field with 8% clearance, constrained ║
 * ║    by 58 mm filter thread, sd/|R| < 0.90, positive edge          ║
 * ║    thickness, cross-gap sag < 90%, and SD ratio ≤ 1.25.          ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:          ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "pentax-fa-31-f18-al-ltd",
  maker: "Pentax",
  name: "PENTAX FA 31mm F1.8 AL Limited",
  subtitle: "US 6,560,042 B2 Example 3 — Pentax / Murata, Ito",
  specs: ["9 ELEMENTS / 7 GROUPS", "f ≈ 31.8 mm", "F/1.8", "2ω ≈ 69.6°", "1 ASPHERICAL SURFACE"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 31,
  focalLengthDesign: 31.8,
  apertureMarketing: 1.8,
  patentYear: 2003,
  elementCount: 9,
  groupCount: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      fl: +129.0,
      glass: "TAC8 (HOYA)",
      apd: false,
      role: "Weakly positive front collector; high-index lanthanum crown reduces surface curvatures while controlling off-axis aberrations in the retrofocus front group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.76182,
      vd: 26.5,
      fl: -53.1,
      glass: "S-TIH14 (OHARA)",
      apd: false,
      role: "First negative meniscus (convex to object) in front group; dense titanium flint achromatizes against the positive elements.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.618,
      vd: 63.4,
      fl: -51.1,
      glass: "S-PHM52 (OHARA)",
      apd: false,
      role: "Second negative meniscus completing the front group; low-dispersion phosphate crown controls lateral chromatic aberration across the wide field.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.801,
      vd: 35.0,
      fl: +37.5,
      glass: "TAFD30 (HOYA)",
      apd: false,
      role: "Strong biconvex positive forming sub-group 20F; bridges the negative front group and the positive rear assembly. Part of the Fa focusing group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.51742,
      vd: 52.4,
      fl: -24.3,
      glass: "S-NSL3 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Negative element of the first cemented doublet D1; low-index crown paired with high-index L6 for achromatic correction in the converging rear group.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.804,
      vd: 46.6,
      fl: +18.8,
      glass: "S-LAH65 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Strongest positive element in the system; high-index lanthanum crown provides the primary converging power of the rear group.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.8,
      fl: -15.3,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      cemented: "D2",
      role: "Most strongly negative element; extra-dense titanium flint provides field flattening (Petzval correction) and efficient chromatic balancing with L8.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.7275,
      vd: 40.3,
      fl: +29.4,
      glass: "Lanthanum flint (728/403, uncertain vendor)",
      apd: false,
      cemented: "D2",
      role: "Positive partner in the second cemented doublet D2; carries the single glass-molded aspherical surface on its rear face for distortion and field curvature correction.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      fl: +32.5,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "Rear field-flattening element with nearly plano front surface; controls exit pupil position for SLR compatibility.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    /* --- Group 10 (negative front group) --- */
    { label: "1", R: 95.7, d: 4.68, nd: 1.72916, elemId: 1, sd: 24.0 }, // L1 front
    { label: "2", R: -5402.519, d: 0.1, nd: 1.0, elemId: 0, sd: 23.5 }, // L1 rear → air
    { label: "3", R: 195.22, d: 1.67, nd: 1.76182, elemId: 2, sd: 18.5 }, // L2 front
    { label: "4", R: 33.385, d: 3.13, nd: 1.0, elemId: 0, sd: 15.5 }, // L2 rear → air
    { label: "5", R: 93.0, d: 1.3, nd: 1.618, elemId: 3, sd: 15.5 }, // L3 front
    { label: "6", R: 23.44, d: 12.29, nd: 1.0, elemId: 0, sd: 14.5 }, // L3 rear → air (large retrofocus gap)

    /* --- Sub-group 20F (positive, single element) --- */
    { label: "7", R: 38.68, d: 5.0, nd: 1.801, elemId: 4, sd: 15.5 }, // L4 front
    { label: "8", R: -126.23, d: 5.46, nd: 1.0, elemId: 0, sd: 14.5 }, // L4 rear → air (VARIABLE: Fa–Fb gap)

    /* --- Sub-group 20R (positive, 5 elements + stop) --- */
    { label: "9", R: -43.081, d: 1.9, nd: 1.51742, elemId: 5, sd: 13.5 }, // L5 front (D1)
    { label: "10", R: 18.044, d: 9.39, nd: 1.804, elemId: 6, sd: 13.0 }, // L5–L6 junction (D1)
    { label: "11", R: -72.46, d: 1.2, nd: 1.0, elemId: 0, sd: 12.5 }, // L6 rear → air
    { label: "STO", R: 1e15, d: 6.86, nd: 1.0, elemId: 0, sd: 11.1 }, // Aperture stop (9 blades)
    { label: "12", R: -20.415, d: 1.6, nd: 1.84666, elemId: 7, sd: 10.5 }, // L7 front (D2)
    { label: "13", R: 36.65, d: 4.74, nd: 1.7275, elemId: 8, sd: 11.0 }, // L7–L8 junction (D2)
    { label: "14A", R: -48.519, d: 0.1, nd: 1.0, elemId: 0, sd: 11.5 }, // L8 rear → air (ASPHERICAL)
    { label: "15", R: 1937.471, d: 4.42, nd: 1.7725, elemId: 9, sd: 12.0 }, // L9 front
    { label: "16", R: -25.427, d: 36.9, nd: 1.0, elemId: 0, sd: 13.0 }, // L9 rear → BFD
  ],

  /* ── Aspherical coefficients ──
   *  Single aspherical surface: surface 14A (rear face of L8).
   *  Patent convention: standard conic + even-order polynomial.
   *  K = 0 (spherical base curve); all departure from polynomial terms.
   *  Patent lists A4, A6, A8; A10 not listed (set to 0).
   */
  asph: {
    "14A": {
      K: 0,
      A4: 1.983e-5,
      A6: 2.547e-8,
      A8: 9.113e-13,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (floating inner focus) ──
   *  Fa group (L1–L4) and Fb group (L5–L9) advance differentially.
   *  Gap d8 between Fa and Fb decreases; BFD (d16) increases.
   *  Ratio Xan/Xbn = 0.68 (non-linear cam, β = −0.005).
   */
  var: {
    "8": [5.46, 3.87],
    "16": [36.9, 41.88],
  },
  varLabels: [
    ["8", "D8"],
    ["16", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "Gp 10 (−)", fromSurface: "1", toSurface: "6" },
    { text: "20F (+)", fromSurface: "7", toSurface: "8" },
    { text: "20R (+)", fromSurface: "9", toSurface: "16" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "12", toSurface: "14A" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.3,
  focusDescription:
    "Two-group differential-advance (floating) inner focus with non-linear cam. Fa (L1–L4) and Fb (L5–L9) advance toward object; Fb travels further, closing the Fa–Fb gap.",

  /* ── Aperture configuration ── */
  nominalFno: 1.8,
  fstopSeries: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 9,

  /* ── Layout tuning ── */
  scFill: 0.48,
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
