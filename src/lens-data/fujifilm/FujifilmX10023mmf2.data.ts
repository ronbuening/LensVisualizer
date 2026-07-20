import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — FUJINON 23mm f/2 (Fujifilm X100 series)      ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2012/0069456 A1 Example 1 (Fujifilm / Suzuki).    ║
 * ║  Compact telephoto-type wide-angle, positive-positive-negative.    ║
 * ║  8 elements / 6 groups, 2 aspherical surfaces (1 GMo element).    ║
 * ║  Focus: front focus — G1+G2 move as one body toward object.       ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list SDs. Values estimated via combined         ║
 * ║    marginal + chief ray trace (0.6× field, 8% clearance),         ║
 * ║    then tuned to the manufacturer cross-section proportions.      ║
 * ║    Values are validated against cross-gap sag intrusion, edge      ║
 * ║    thickness, and molded-asphere polynomial behavior; S11A stays  ║
 * ║    capped at 6.0 mm to avoid a steep polynomial rim.              ║
 * ║                                                                    ║
 * ║  NOTE ON ASPHERICAL COEFFICIENTS:                                  ║
 * ║    Patent uses Zd = C·h²/{1+√(1−K·C²h²)} + Σ Am·h^m (m=3..20).  ║
 * ║    Patent K=0 → parabolic base (standard K = −1).                 ║
 * ║    Patent includes odd-order terms (A3, A5, …) unsupported by     ║
 * ║    the renderer. Even-order coefficients (A4–A20) refitted via    ║
 * ║    least-squares over h ∈ [0, 6.0 mm] against standard spherical ║
 * ║    base (K = 0). Max fit error: S10 ≈ 0.16 µm, S11 ≈ 0.73 µm.   ║
 * ║                                                                    ║
 * ║  NOTE ON CLOSE-FOCUS DATA:                                         ║
 * ║    Patent does not publish close-focus spacings for Example 1.    ║
 * ║    Variable gap (S11A) at close focus estimated from G1+G2 focus  ║
 * ║    throw at MFD = 0.10 m (Fujifilm spec, macro mode).            ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass (PP), filters, mechanical parts ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujifilm-x100-23f2",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON 23mm f/2 (Fujifilm X100)",
  subtitle: "US 2012/0069456 A1 Example 1 — Fujifilm / Suzuki",
  specs: ["8 ELEMENTS / 6 GROUPS", "f ≈ 23.7 mm", "F/2.0", "2ω ≈ 62.0°", "2 ASPHERICAL SURFACES (1 GMo ELEMENT)"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 23,
  focalLengthDesign: 23.72,
  apertureMarketing: 2.0,
  apertureDesign: 2.06,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "aps-c",
  patentNumber: "US 2012/0069456 A1",
  patentAuthors: ["Takashi Suzuki"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2012,
  elementCount: 8,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.74077,
      vd: 27.8,
      fl: -21.4,
      glass: "S-TIH13 (OHARA)",
      apd: false,
      role: "G1 front — negative meniscus (convex to object), chromatic corrector paired with L2",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: 12.9,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "G1 rear — positive meniscus (convex to object), primary G1 power, cemented with L1",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: 46.8,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "G2 front — positive meniscus (convex to image), post-stop collector",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.3,
      fl: -9.5,
      glass: "S-FTM16 (OHARA)",
      apd: false,
      role: "G2 cemented doublet negative — Petzval flattener and chromatic correction",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 9.9,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "G2 cemented doublet positive — primary system power, highest φ element",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.56865,
      vd: 58.6,
      fl: 178.3,
      glass: "S-BAL14 (OHARA)",
      apd: false,
      role: "G2 rear — glass-molded aspherical corrector for SA and field curvature",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.80809,
      vd: 22.8,
      fl: -22.0,
      glass: "J-SFH1 (Hikari)",
      apd: false,
      role: "G3 front — negative meniscus (concave to object), diverges off-axis rays for telecentricity",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Plano-Convex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 52.8,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "G3 rear — plano-convex field lens, condenses chief rays for near-telecentric exit",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1: Cemented doublet L1 + L2 ──
    { label: "1", R: 29.787, d: 0.91, nd: 1.74077, elemId: 1, sd: 7.6 }, // L1 front
    { label: "2", R: 10.216, d: 3.07, nd: 1.883, elemId: 2, sd: 6.8 }, // L1/L2 junction → L2
    { label: "3", R: 85.567, d: 0.9, nd: 1.0, elemId: 0, sd: 5.6 }, // L2 rear → air

    // ── Aperture stop ──
    { label: "STO", R: 1e15, d: 5.01, nd: 1.0, elemId: 0, sd: 5.17 },

    // ── G2: L3 + cemented doublet L4/L5 + aspherical L6 ──
    { label: "5", R: -15.211, d: 1.7, nd: 1.883, elemId: 3, sd: 5.4 }, // L3 front
    { label: "6", R: -11.699, d: 0.3, nd: 1.0, elemId: 0, sd: 4.8 }, // L3 rear → air
    { label: "7", R: -10.059, d: 0.91, nd: 1.5927, elemId: 4, sd: 5.4 }, // L4 front
    { label: "8", R: 13.211, d: 7.36, nd: 1.883, elemId: 5, sd: 6.9 }, // L4/L5 junction → L5
    { label: "9", R: -18.976, d: 0.2, nd: 1.0, elemId: 0, sd: 7.2 }, // L5 rear → air
    { label: "10A", R: 47.945, d: 2.5, nd: 1.56865, elemId: 6, sd: 6.4 }, // L6 front (asph)
    { label: "11A", R: 89.234, d: 5.13, nd: 1.0, elemId: 0, sd: 6.0 }, // L6 rear (asph) → air

    // ── G3: L7 (neg. meniscus) + L8 (plano-convex) ──
    { label: "12", R: -12.593, d: 1.1, nd: 1.80809, elemId: 7, sd: 7.2 }, // L7 front
    { label: "13", R: -45.06, d: 0.2, nd: 1.0, elemId: 0, sd: 7.8 }, // L7 rear → air
    { label: "14", R: 46.628, d: 3.08, nd: 1.883, elemId: 8, sd: 8.2 }, // L8 front
    { label: "15", R: 1e15, d: 2.8, nd: 1.0, elemId: 0, sd: 8.8 }, // L8 rear → air (BFD to PP)
    // BFD from S15 to image plane ≈ 5.53 mm in air (includes air-equiv. of PP cover glass)
  ],

  /* ── Aspherical coefficients ──
   *  Refitted from patent's odd+even polynomial (K_pat=0, A3–A20) to standard
   *  even-order-only format with spherical base (K=0). See file header for methodology.
   */
  asph: {
    "10A": {
      K: 0,
      A4: -2.1247e-7,
      A6: -9.1252e-7,
      A8: -2.3725e-6,
      A10: 3.4661e-7,
      A12: -2.458e-8,
      A14: 9.9894e-10,
      A16: -2.3734e-11,
      A18: 3.0727e-13,
      A20: -1.6773e-15,
    },
    "11A": {
      K: 0,
      A4: 2.6702e-7,
      A6: 1.1393e-6,
      A8: 2.9026e-6,
      A10: -8.2092e-7,
      A12: 8.5465e-8,
      A14: -4.5684e-9,
      A16: 1.3423e-10,
      A18: -2.0656e-12,
      A20: 1.3036e-14,
    },
  },

  /* ── Variable air spacings ──
   *  Front focus: G1+G2 move together toward object. Only gap S11A
   *  (between G2 rear and G3 front) changes. G3 and BFD remain fixed.
   *  Close-focus value estimated — patent does not publish close-focus data.
   */
  var: {
    "11A": [5.13, 12.5],
  },

  varLabels: [["11A", "BF (G2–G3)"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "3" },
    { text: "G2 (+)", fromSurface: "5", toSurface: "11A" },
    { text: "G3 (−)", fromSurface: "12", toSurface: "15" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "7", toSurface: "9" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.1,
  focusDescription: "Front focus — G1 and G2 move together as one body toward the object (¶0039, ¶0106).",

  /* ── Aperture configuration ── */
  nominalFno: 2.0,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 9,

  /* ── Layout tuning ── */
  scFill: 0.48,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
