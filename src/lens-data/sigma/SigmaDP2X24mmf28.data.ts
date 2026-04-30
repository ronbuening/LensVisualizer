import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — SIGMA DP2X 24mm f/2.8                       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2010-101979 A (特開2010-101979), Example 5       ║
 * ║  (Sigma Inc. / Noriyuki Ogasahara).                                ║
 * ║  Retrofocus imaging system for large digital sensors.              ║
 * ║  7 elements / 6 groups, 2 aspherical surfaces.                     ║
 * ║  Focus: Rear focus — G2 (L7) moves toward object for close focus. ║
 * ║                                                                    ║
 * ║  NOTE ON CLOSE-FOCUS SPACINGS:                                     ║
 * ║    The patent tables variable gaps at ∞, 1000 mm, and 500 mm      ║
 * ║    only. The Sigma DP2x close focus is 280 mm. The close-focus    ║
 * ║    var values (D12 = 5.7909, Bf = 26.1696) were computed by       ║
 * ║    paraxial back-solve at 280 mm object distance; they are not     ║
 * ║    patent-listed.                                                  ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    SDs for L1–L4 (surfaces 1–8) are constrained below the raw     ║
 * ║    10%-clearance ray-trace values by cross-gap sag intrusion       ║
 * ║    limits. The binding constraints are the L1r→L2f air gap        ║
 * ║    (3.768 mm) limiting both surfaces to ≤ 7.71 mm, and the        ║
 * ║    L2r→L3f air gap (0.916 mm) limiting both surfaces to ≤ 7.80   ║
 * ║    mm. The L6 rear SD is limited to 8.8 mm by element edge        ║
 * ║    thickness (ET = 0.24 mm at that SD). Stop SD is set to the     ║
 * ║    marketed f/2.8 physical aperture (5.4 mm); no mechanical       ║
 * ║    clearance margin is applied to the diaphragm surface.          ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sigma-dp2x-24mmf28",
  maker: "Sigma",
  name: "SIGMA DP2X 24mm f/2.8",
  subtitle: "JP 2010-101979 A EXAMPLE 5 — SIGMA / OGASAHARA",
  specs: ["7 ELEMENTS / 6 GROUPS", "f ≈ 24.1 mm", "F/2.8", "2ω ≈ 56.8°", "2 ASPHERICAL SURFACES"],

  /* ── Metadata ── */
  focalLengthMarketing: 24.2,
  focalLengthDesign: 24.1472,
  apertureMarketing: 2.8,
  apertureDesign: 2.9129,
  patentYear: 2010,
  elementCount: 7,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Neg. Meniscus (convex front)",
      nd: 1.713,
      vd: 53.94,
      fl: -26.9,
      glass: "S-LAL7 / LACL5 (OHARA / HOYA)",
      apd: false,
      role: "Primary retrofocus negative element; bends chief rays outward to establish the characteristic large principal-ray divergence of the G1a pre-stop group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.60342,
      vd: 38.01,
      fl: -25.1,
      glass: "S-TIM5 (≈) (OHARA)",
      apd: false,
      role: "Symmetric biconcave secondary negative element; adds retrofocus power while its equal-and-opposite radii suppress intrinsic coma contribution to third order.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.72,
      fl: 45.9,
      glass: "S-LAH55 / TAFD5 (OHARA / HOYA)",
      apd: false,
      role: "First positive element in G1a; begins convergence of the ray bundle after the two negatives. High index (nd = 1.835) keeps element thin and compact.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 18.2,
      glass: "N-LASF41A / TaFD30 (Schott / HOYA)",
      apd: false,
      role: "Dominant collector; the strongest single element (fl ≈ 18 mm) and the highest-index glass in the design. Its strongly asymmetric biconvex form places maximum refractive work immediately before the aperture stop to minimise high-order spherical aberration.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.32,
      fl: -13.1,
      glass: "S-TIH family / FD series (OHARA / HOYA)",
      apd: false,
      cemented: "D1",
      role: "Flint-first front element of the cemented achromatic doublet G1b. High-dispersion dense flint (νd = 28.3) provides the chromatic corrector's diverging component and the primary spectral balancing for G1a's accumulated chromatic imbalance.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.7418,
      vd: 49.23,
      fl: 12.7,
      glass: "S-LAM55 (≈) / LACL60 (OHARA / HOYA)",
      apd: false,
      cemented: "D1",
      role: "Crown rear element of doublet G1b. Combined with L5 (Δν = 20.9), corrects axial colour. Its aspherical rear surface (surface 12A) corrects spherical aberration in a stop-proximate position that minimises coma introduction.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.58763,
      vd: 61.09,
      fl: 69.4,
      glass: "BaCD / SK family (various)",
      apd: false,
      role: "Sole focusing element (G2). Rear-focus meniscus with convex image-side face; translates toward object for close focus. Low-dispersion glass (νd = 61) minimises chromatic focus shift during independent axial travel. Aspherical rear surface (14A) corrects distortion and field curvature.",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 46.7657, d: 1.0, nd: 1.713, elemId: 1, sd: 10.5 }, // L1 front
    { label: "2", R: 13.617, d: 3.7677, nd: 1.0, elemId: 0, sd: 9.0 }, // L1 rear → air
    { label: "3", R: -30.3452, d: 0.8, nd: 1.60342, elemId: 2, sd: 7.5 }, // L2 front
    { label: "4", R: 30.3452, d: 0.9158, nd: 1.0, elemId: 0, sd: 7.5 }, // L2 rear → air
    { label: "5", R: 156.21, d: 2.2164, nd: 1.83481, elemId: 3, sd: 8.0 }, // L3 front
    { label: "6", R: -50.8028, d: 0.7032, nd: 1.0, elemId: 0, sd: 8.5 }, // L3 rear → air
    { label: "7", R: 22.9236, d: 3.3836, nd: 1.883, elemId: 4, sd: 9.0 }, // L4 front
    { label: "8", R: -53.9477, d: 5.3, nd: 1.0, elemId: 0, sd: 8.5 }, // L4 rear → air
    { label: "STO", R: 1e15, d: 5.3072, nd: 1.0, elemId: 0, sd: 5.4 }, // aperture stop — marketed f/2.8
    { label: "10", R: -15.3911, d: 0.8, nd: 1.72825, elemId: 5, sd: 7.7 }, // L5 front (doublet)
    { label: "11", R: 24.9748, d: 4.4049, nd: 1.7418, elemId: 6, sd: 8.1 }, // L5/L6 junction — elemId: 6
    { label: "12A", R: -15.1814, d: 9.3255, nd: 1.0, elemId: 0, sd: 8.8 }, // L6 rear (asph) → air; var D12
    { label: "13", R: -127.469, d: 2.5658, nd: 1.58763, elemId: 7, sd: 12.3 }, // L7 front
    { label: "14A", R: -31.1114, d: 22.635, nd: 1.0, elemId: 0, sd: 12.8 }, // L7 rear (asph) → image; var Bf
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "12A": {
      K: 0,
      A4: 3.046922e-5,
      A6: 1.288985e-7,
      A8: -8.073659e-10,
      A10: 1.215549e-11,
      A12: 0,
      A14: 0,
    },
    "14A": {
      K: 0,
      A4: 9.111786e-6,
      A6: -6.004492e-9,
      A8: 1.09587e-9,
      A10: -5.418634e-12,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings ── */
  // G2 (L7) translates toward object for close focus.
  // D12 (surface 12A → L7 front) shortens; Bf (L7 rear → image) lengthens.
  // Close-focus values at 280 mm are paraxially back-solved (not patent-tabulated;
  // patent documents to 500 mm only). D12 + Bf = 31.9605 mm at all distances.
  var: {
    "12A": [9.3255, 5.7909], // [d_∞, d_280mm]
    "14A": [22.635, 26.1696], // [Bf_∞, Bf_280mm]
  },

  varLabels: [
    ["12A", "D12"],
    ["14A", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1a", fromSurface: "1", toSurface: "8" },
    { text: "G1b", fromSurface: "10", toSurface: "12A" },
    { text: "G2", fromSurface: "13", toSurface: "14A" },
  ],

  doublets: [{ text: "D1", fromSurface: "10", toSurface: "12A" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.28,
  focusDescription:
    "Rear focus: G2 (L7) translates toward object for close focus, shortening D12 while BF increases. G1 (including stop and doublet G1b) is mechanically fixed.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
