import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — PANASONIC LEICA DG SUMMILUX 15mm f/1.7 ASPH (H-X015) ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2015/0268449 A1, Numerical Example 2              ║
 * ║  (Kurioka, Nishioka; Panasonic IP Management).                     ║
 * ║  9 elements / 7 groups, 5 aspherical surfaces (3 asph elements).   ║
 * ║  Focus: inner focus — G2 (L6+L7+L8) translates forward on close.  ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list SDs. Estimated via combined marginal +     ║
 * ║    chief ray trace at 60% field with ~8% mechanical clearance.     ║
 * ║    Front-group SDs constrained by 46mm filter thread (SD < 23mm). ║
 * ║    Validated against edge thickness, sd/|R|, and cross-gap sag     ║
 * ║    intrusion constraints.                                          ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "panasonic-leica-dg-15f17",
  maker: "Panasonic",
  name: "PANASONIC LEICA DG SUMMILUX 15mm f/1.7 ASPH",
  subtitle: "US 2015/0268449 A1 Example 2 — Panasonic / Kurioka, Nishioka",
  specs: ["9 ELEMENTS / 7 GROUPS", "f ≈ 15.5 mm", "F/1.77", "2ω ≈ 70.5°", "5 ASPHERICAL SURFACES"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 15,
  focalLengthDesign: 15.484,
  apertureMarketing: 1.7,
  apertureDesign: 1.77,
  lensMounts: ["micro-four-thirds"],
  imageFormat: "four-thirds",
  patentYear: 2015,
  elementCount: 9,
  groupCount: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconcave Negative",
      nd: 1.49913,
      vd: 80.1,
      fl: -22.49,
      glass: "FPL51 class (499/801, OHARA family)",
      apd: false,
      role: "Negative field lens at front of retrofocus assembly; ED-class low-dispersion crown minimizes chromatic load",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.58542,
      vd: 41.7,
      fl: -37.09,
      glass: "585417 — light flint (patent nd=1.58542, nu_d=41.7)",
      apd: false,
      role: "Aspherical distortion/coma corrector; both surfaces aspherical for wide-field off-axis control",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.88234,
      vd: 40.8,
      fl: 10.36,
      glass: "882408 — high-index lanthanum glass (patent nd=1.88234, nu_d=40.8)",
      apd: false,
      role: "High-power positive collector; strongest individual element in the system",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.75409,
      vd: 26.0,
      fl: -22.71,
      glass: "754260 — dense flint (patent nd=1.75409, nu_d=26.0)",
      apd: false,
      role: "Heavy flint achromatizing partner to L3; large Δνd provides primary axial color correction",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.91597,
      vd: 36.4,
      fl: 45.46,
      glass: "916364 — high-index lanthanum glass (patent nd=1.91597, nu_d=36.4)",
      apd: false,
      role: "Ultra-high-index Petzval controller; nd_A = 1.92 satisfies condition (1)",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.7863,
      vd: 27.5,
      fl: -10.98,
      glass: "786275 — dense flint (patent nd=1.78630, nu_d=27.5)",
      apd: false,
      role: "Strongest negative element; chromatic lever arm for axial color correction in focus group",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.76864,
      vd: 49.7,
      fl: 14.17,
      glass: "769497 — lanthanum crown (patent nd=1.76864, nu_d=49.7)",
      apd: false,
      role: "Achromatic partner to L6; rear aspherical surface corrects higher-order SA in post-stop relay",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.77074,
      vd: 49.5,
      fl: 18.21,
      glass: "L-LAH83 (OHARA)",
      apd: false,
      role: "Field lens in focus group; nearly plano-convex shape redirects off-axis rays toward axis",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.69748,
      vd: 29.0,
      fl: -61.05,
      glass: "E-FD15 class (697/290, HOYA family)",
      apd: false,
      role: "Aspherical field-flattener (G3); controls Petzval curvature and back focal distance",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1: Front unit (positive) — L1 through L5 ──
    { label: "1", R: -261.1028, d: 1.3211, nd: 1.49913, elemId: 1, sd: 9.8 }, // L1 front
    { label: "2", R: 11.7492, d: 5.5498, nd: 1.0, elemId: 0, sd: 8.3 }, // L1 rear → air
    { label: "3A", R: -26.3597, d: 0.8, nd: 1.58542, elemId: 2, sd: 8.3 }, // L2 front (asph)
    { label: "4A", R: 124.6412, d: 0.3, nd: 1.0, elemId: 0, sd: 9.3 }, // L2 rear → air (asph)
    { label: "5", R: 23.6883, d: 5.9943, nd: 1.88234, elemId: 3, sd: 9.3 }, // L3 front (cemented D1)
    { label: "6", R: -13.1224, d: 0.8, nd: 1.75409, elemId: 4, sd: 8.9 }, // L3→L4 junction — elemId: 4
    { label: "7", R: -57.6171, d: 0.25, nd: 1.0, elemId: 0, sd: 8.8 }, // L4 rear → air
    { label: "8", R: 81.1403, d: 1.9778, nd: 1.91597, elemId: 5, sd: 8.7 }, // L5 front
    { label: "9", R: -84.5338, d: 4.5111, nd: 1.0, elemId: 0, sd: 8.3 }, // L5 rear → air

    // ── Aperture diaphragm ──
    { label: "STO", R: 1e15, d: 5.8655, nd: 1.0, elemId: 0, sd: 5.4 }, // 7-blade circular aperture

    // ── G2: Focusing unit (positive) — L6+L7+L8 ──
    { label: "11", R: -9.8596, d: 1.0224, nd: 1.7863, elemId: 6, sd: 7.1 }, // L6 front (cemented D2)
    { label: "12", R: 72.3794, d: 3.368, nd: 1.76864, elemId: 7, sd: 7.5 }, // L6→L7 junction — elemId: 7
    { label: "13A", R: -12.5618, d: 0.2043, nd: 1.0, elemId: 0, sd: 8.5 }, // L7 rear → air (asph)
    { label: "14", R: 5229.9816, d: 4.509, nd: 1.77074, elemId: 8, sd: 9.1 }, // L8 front
    { label: "15", R: -14.0708, d: 2.1001, nd: 1.0, elemId: 0, sd: 9.6 }, // L8 rear → air (variable)

    // ── G3: Field-flattener (negative) — L9 ──
    { label: "16A", R: -10.5157, d: 1.0113, nd: 1.69748, elemId: 9, sd: 9.0 }, // L9 front (asph)
    { label: "17A", R: -14.5157, d: 14.2306, nd: 1.0, elemId: 0, sd: 9.2 }, // L9 rear → image (asph)
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "3A": {
      K: 5.18341,
      A4: -2.39853e-5,
      A6: 1.51467e-6,
      A8: -2.84434e-8,
      A10: 3.4001e-10,
      A12: -1.36175e-12,
      A14: 0,
    },
    "4A": {
      K: 0,
      A4: -2.02569e-5,
      A6: 1.6787e-6,
      A8: -3.65979e-8,
      A10: 4.84842e-10,
      A12: -2.36003e-12,
      A14: 0,
    },
    "13A": {
      K: 0,
      A4: 1.26458e-4,
      A6: 1.7929e-6,
      A8: -1.16002e-7,
      A10: 4.53927e-9,
      A12: -7.1148e-11,
      A14: -1.77737e-13,
      A16: 1.87772e-14,
      A18: -1.59045e-16,
    },
    "16A": {
      K: 0,
      A4: 8.41464e-4,
      A6: -1.50602e-5,
      A8: 2.74677e-7,
      A10: -3.52174e-9,
      A12: 3.09424e-11,
      A14: -1.23311e-13,
    },
    "17A": {
      K: 0,
      A4: 6.85533e-4,
      A6: -1.32978e-5,
      A8: 2.44739e-7,
      A10: -3.34871e-9,
      A12: 3.02662e-11,
      A14: -1.23632e-13,
    },
  },

  /* ── Variable air spacings (inner focus) ──
   *  G2 (L6+L7+L8) translates forward toward object on close focusing (¶0062).
   *  G1 and G3 are stationary. Conservation: d_STO + d_15 = const = 7.966 mm.
   *  Close-focus gaps derived via paraxial conjugate solve at MFD = 0.20 m.
   */
  var: {
    STO: [5.8655, 4.7788],
    "15": [2.1001, 3.1868],
  },
  varLabels: [
    ["STO", "D(STO)"],
    ["15", "D15"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "9" },
    { text: "G2 (+)", fromSurface: "11", toSurface: "15" },
    { text: "G3 (−)", fromSurface: "16A", toSurface: "17A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "11", toSurface: "13A" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.2,
  focusDescription: "Inner focus — G2 (L6–L8) translates toward object. Stepping motor drive.",

  /* ── Aperture configuration ── */
  nominalFno: 1.7,
  fstopSeries: [1.7, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
