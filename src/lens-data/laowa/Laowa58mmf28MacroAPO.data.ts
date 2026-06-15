import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — LAOWA 58 mm f/2.8 2× Ultra-Macro APO  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: CN 116520542 A, Example 2 (实施例2, ¶0051–0064).     ║
 * ║  Applicant: 安徽长庚光学科技有限公司 (Laowa).         ║
 * ║  Inventor: 李大勇 (Li Dayong).                                     ║
 * ║  All-spherical three-group macro design: G1 (fixed), G2 (main      ║
 * ║  focus, positive), G3 (auxiliary focus, negative).                  ║
 * ║  14 elements / 11 groups, 0 aspherical surfaces.                   ║
 * ║  Focus: dual-group internal focusing (G2 + G3 advance toward       ║
 * ║  object; G1 fixed). Infinity → 2× magnification.                   ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not publish SDs. Estimated via combined marginal +  ║
 * ║    chief ray trace at 60% field with 8% mechanical clearance,      ║
 * ║    then capped by edge-thickness (ET ≥ 0.4 mm), sd/|R| < 0.90,    ║
 * ║    and cross-gap sag intrusion (≤ 90% of gap) constraints.         ║
 * ║    Cemented doublet junctions are the binding constraints in G2;   ║
 * ║    the L10→L11 air gap (3.15 mm, strongly curved facing surfaces)  ║
 * ║    is the binding constraint in G3.                                ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)    ║
 * ║    ✓ Aperture stop and variable focus gaps                         ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "laowa-58mm-f28-2x-macro-apo",
  maker: "Laowa",
  name: "LAOWA 58mm f/2.8 2× Ultra-Macro APO",
  subtitle: "CN 116520542 A Example 2 — Laowa / Li Dayong",
  specs: ["14 ELEMENTS / 11 GROUPS", "f ≈ 59.2 mm", "F/2.9", "2ω ≈ 39.9°", "ALL SPHERICAL", "2× MACRO (MFD 0.185 m)"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 58,
  focalLengthDesign: 59.21,
  apertureMarketing: 2.8,
  apertureDesign: 2.9,
  lensMounts: ["sony-fe", "canon-rf", "nikon-z", "l-mount"],
  imageFormat: "135-full-frame",
  patentYear: 2023,
  elementCount: 14,
  groupCount: 11,

  /* ── Elements ── */
  elements: [
    // ── G1 (fixed front corrector, near-afocal) ──
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.86665,
      vd: 45.0,
      fl: -263.9,
      glass: "866450 - high-index lanthanum flint (patent nd=1.86665, vd=45.0)",
      apd: false,
      role: "Weakly negative front meniscus; chromatic pre-correction with L2",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.78472,
      vd: 25.72,
      fl: 310.6,
      glass: "H-ZF13 (CDGM)",
      apd: false,
      role: "Weakly positive dense flint; completes G1 near-afocal chromatic corrector pair with L1",
    },
    // ── G2 (main positive focusing group) ──
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 73.5,
      glass: "H-FK61 (CDGM)",
      apd: "inferred",
      apdNote: "ED fluorophosphate, ΔPgF ≈ +0.038 (CDGM catalog); equivalent to S-FPL51 (OHARA) / FCD1 (HOYA)",
      role: "First ED element; strong positive power with minimal chromatic contribution at G2 entrance",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.67,
      fl: 73.7,
      glass: "H-LAK53A (CDGM)",
      apd: false,
      role: "Positive meniscus convex to object; shares convergence burden with L3, controls coma",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.83327,
      vd: 25.02,
      fl: -12.4,
      glass: "H-ZF72 (CDGM)",
      apd: false,
      cemented: "Da",
      role: "Strongly negative dense flint; aberration-balancing element in cemented pair with L6",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      fl: 14.6,
      glass: "H-ZLAF92 (CDGM)",
      apd: false,
      cemented: "Da",
      role: "Ultra-high index positive; reclaims power from L5 with moderate curvature, reduces Petzval sum",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -22.4,
      glass: "H-ZF52 (CDGM)",
      apd: false,
      cemented: "Db",
      role: "Dense flint in achromatic doublet; primary achromatization partner for L8 ED element",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 29.9,
      glass: "H-FK61 (CDGM)",
      apd: "inferred",
      apdNote: "ED fluorophosphate, ΔPgF ≈ +0.038; primary APO correction site paired with H-ZF13 (Δνd = 57.8)",
      cemented: "Db",
      role: "ED element in achromatic doublet; principal secondary-spectrum corrector in G2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.89782,
      vd: 29.9,
      fl: 43.5,
      glass: "H-ZLAF68N (CDGM)",
      apd: false,
      role: "High-index near-planoconvex; last power element before stop, minimizes Petzval contribution",
    },
    // ── G3 (negative auxiliary focus / field corrector) ──
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.79391,
      vd: 47.17,
      fl: -41.9,
      glass: "Unmatched lanthanum flint (patent nd=1.79391, νd=47.17; not catalog H-LAF4)",
      apd: false,
      role: "First element of G3; diverges the post-stop beam, provides negative Petzval correction",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.54517,
      vd: 48.63,
      fl: -24.9,
      glass: "545486 - crown glass (patent nd=1.54517, vd=48.63)",
      apd: false,
      cemented: "Dc",
      role: "Low-index negative in non-standard doublet; deliberate chromatic residual for APO fine-tuning",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.86602,
      vd: 41.79,
      fl: 18.2,
      glass: "H-ZLAF55C (CDGM)",
      apd: false,
      cemented: "Dc",
      role: "High-index positive in doublet; partially compensates L10, shapes G3 field flattening",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.497,
      vd: 81.61,
      fl: -34.4,
      glass: "H-FK61 (CDGM)",
      apd: "inferred",
      apdNote: "ED fluorophosphate, ΔPgF ≈ +0.038; controls lateral chromatic aberration near image plane",
      role: "Concave-to-object ED meniscus near image; corrects lateral color at large chief ray height",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Equi-Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 59.0,
      glass: "H-FK61 (CDGM)",
      apd: "inferred",
      apdNote: "ED fluorophosphate, ΔPgF ≈ +0.038; field flattener with minimal chromatic contribution",
      role: "Symmetric ED biconvex field flattener / telecentricity corrector; f ≈ system EFL",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1: L1–L2 (fixed) ──
    { label: "1", R: 491.1153, d: 1.35, nd: 1.86665, elemId: 1, sd: 25.0 }, // L1 front
    { label: "2", R: 155.8484, d: 1.3546, nd: 1.0, elemId: 0, sd: 25.0 }, // L1 rear → air
    { label: "3", R: 335.0308, d: 3.3, nd: 1.78472, elemId: 2, sd: 24.5 }, // L2 front
    { label: "4", R: -890.6006, d: 47.7715, nd: 1.0, elemId: 0, sd: 24.0 }, // L2 rear → air (D4 var)

    // ── G2: L3–L9 + STO (main focus group) ──
    { label: "5", R: 81.6249, d: 2.85, nd: 1.497, elemId: 3, sd: 13.0 }, // L3 front
    { label: "6", R: -65.2828, d: 0.15, nd: 1.0, elemId: 0, sd: 12.8 }, // L3 rear → air
    { label: "7", R: 24.6232, d: 2.65, nd: 1.72916, elemId: 4, sd: 12.0 }, // L4 front
    { label: "8", R: 43.3851, d: 3.9864, nd: 1.0, elemId: 0, sd: 12.0 }, // L4 rear → air
    { label: "9", R: -38.9958, d: 1.0, nd: 1.83327, elemId: 5, sd: 10.5 }, // L5 front (Da)
    { label: "10", R: 14.2557, d: 4.65, nd: 1.92286, elemId: 6, sd: 9.5 }, // L5→L6 junction (Da)
    { label: "11", R: -203.4773, d: 0.2188, nd: 1.0, elemId: 0, sd: 9.5 }, // L6 rear → air
    { label: "12", R: 277.9455, d: 0.8, nd: 1.84666, elemId: 7, sd: 9.5 }, // L7 front (Db)
    { label: "13", R: 17.7085, d: 3.75, nd: 1.497, elemId: 8, sd: 9.2 }, // L7→L8 junction (Db)
    { label: "14", R: -85.3395, d: 0.15, nd: 1.0, elemId: 0, sd: 9.2 }, // L8 rear → air
    { label: "15", R: 683.9675, d: 2.1, nd: 1.89782, elemId: 9, sd: 10.5 }, // L9 front
    { label: "16", R: -41.3692, d: 1.2, nd: 1.0, elemId: 0, sd: 10.5 }, // L9 rear → air
    { label: "STO", R: 1e15, d: 1.4, nd: 1.0, elemId: 0, sd: 10.2 }, // aperture stop (D17 var)

    // ── G3: L10–L14 (auxiliary focus / field corrector) ──
    { label: "18", R: 121.4165, d: 0.8, nd: 1.79391, elemId: 10, sd: 10.5 }, // L10 front
    { label: "19", R: 26.0155, d: 3.1527, nd: 1.0, elemId: 0, sd: 8.5 }, // L10 rear → air
    { label: "20", R: -31.1757, d: 0.8, nd: 1.54517, elemId: 11, sd: 8.5 }, // L11 front (Dc)
    { label: "21", R: 24.249, d: 5.05, nd: 1.86602, elemId: 12, sd: 8.5 }, // L11→L12 junction (Dc)
    { label: "22", R: -40.7308, d: 12.796, nd: 1.0, elemId: 0, sd: 10.5 }, // L12 rear → air
    { label: "23", R: -17.0405, d: 1.2, nd: 1.497, elemId: 13, sd: 14.5 }, // L13 front
    { label: "24", R: -4370.318, d: 0.9228, nd: 1.0, elemId: 0, sd: 14.5 }, // L13 rear → air
    { label: "25", R: 57.5634, d: 6.55, nd: 1.497, elemId: 14, sd: 14.5 }, // L14 front
    { label: "26", R: -57.5634, d: 14.9285, nd: 1.0, elemId: 0, sd: 14.0 }, // L14 rear → BFD (D26 var)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (focus) ──
   *  Three variable gaps: G1–G2 separation, STO–G3, and BFD.
   *  Patent publishes data at infinity, 1×, and 2× magnification (¶0059–0060).
   *  Data file uses [d_infinity, d_close_focus(2×)].
   *  Variable gap sum conserved at 64.10 mm (internal focusing, constant barrel length).
   */
  var: {
    "4": [47.7715, 0.8],
    STO: [1.4, 40.2782],
    "26": [14.9285, 23.0218],
  },
  varLabels: [
    ["4", "D4 (G1–G2)"],
    ["STO", "D17 (STO–G3)"],
    ["26", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (FIXED)", fromSurface: "1", toSurface: "4" },
    { text: "G2 (FOCUS)", fromSurface: "5", toSurface: "STO" },
    { text: "G3 (AUX)", fromSurface: "18", toSurface: "26" },
  ],
  doublets: [
    { text: "Da", fromSurface: "9", toSurface: "11" },
    { text: "Db", fromSurface: "12", toSurface: "14" },
    { text: "Dc", fromSurface: "20", toSurface: "22" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.185,
  focusDescription:
    "Dual-group internal focusing. G2 (L3–L9 + STO) advances 47.0 mm toward object; " +
    "G3 (L10–L14) advances 8.1 mm. G1 (L1–L2) fixed. Constant barrel length (internal focusing).",

  /* ── Aperture configuration ── */
  nominalFno: 2.9,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.48,
  yScFill: 0.32,
  maxFstop: 22,
} satisfies LensDataInput;

export default LENS_DATA;
