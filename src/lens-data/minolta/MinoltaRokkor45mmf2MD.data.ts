import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — MINOLTA MD ROKKOR 45mm f/2                           ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,277,149 Example 7 (Minolta / Kunihiko Konoma). ║
 * ║  Modified Gauss type, 5-group 6-element, all-spherical.           ║
 * ║  6 elements / 5 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: unit focus (entire lens translates).                      ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f = 1.0 (normalized).  All R, d, sd values scaled    ║
 * ║    ×45.0 to the production focal length f ≈ 45 mm.               ║
 * ║    Computed EFL at f = 1.0: 0.99994 (Δ = −0.006%).               ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                          ║
 * ║    Patent does not list SDs.  Estimated from combined marginal    ║
 * ║    ray (F/2) + chief ray (60% field) traces with ~8–12%           ║
 * ║    mechanical clearance, then constrained against cross-gap sag   ║
 * ║    (≤ 90% intrusion), edge thickness (≥ 0.5 mm), and sd/|R|      ║
 * ║    (< 0.90).  Front-group SDs reduced to satisfy L1 edge          ║
 * ║    thickness; S4–S5 and S6–S7 gaps are the binding cross-gap      ║
 * ║    constraints.                                                   ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                           ║
 * ║    Patent does not specify the exact stop location within the     ║
 * ║    central air gap d6.  STO placed at the midpoint of d6,        ║
 * ║    inferred from the FIG. 1 cross-section drawing.               ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:          ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)  ║
 * ║    ✓ Aperture stop and variable focus gap                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "minolta-md-rokkor-45f2",
  maker: "Minolta",
  name: "MINOLTA MD ROKKOR 45mm f/2",
  subtitle: "US 4,277,149 Example 7 — Minolta / Kunihiko Konoma",
  specs: ["6 ELEMENTS / 5 GROUPS", "f ≈ 45.0 mm", "F/2.0", "2ω ≈ 51.4°", "ALL SPHERICAL"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 45,
  apertureMarketing: 2,
  patentYear: 1981,
  elementCount: 6,
  groupCount: 5,

  /* ── Elements ──
   *  Modified Gauss: L1–L3 singlets (front half), L4+L5 cemented doublet,
   *  L6 singlet (rear half).  All glasses are Minolta proprietary melts;
   *  nearest catalog equivalents identified where possible.
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.781,
      vd: 44.5,
      fl: 53.9,
      glass: "Lanthanum flint (781/445 class, Minolta proprietary; nearest: S-LAH52, OHARA)",
      apd: false,
      role: "Front collector. Strongest single-surface power in the front half; high-index lanthanum flint reduces curvature for a given power, limiting SA and coma at full aperture.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7495,
      vd: 50.1,
      fl: 67.6,
      glass: "Lanthanum crown (750/501 class, Minolta proprietary; nearest: LAC14, HOYA)",
      apd: false,
      role: "Separated positive meniscus — the patent's key structural innovation. Provides an extra degree of freedom (air gap d4) for independent coma and astigmatism balancing.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7006,
      vd: 30.1,
      fl: -28.6,
      glass: "Dense flint (700/301 class, Minolta proprietary; nearest: FD4, HOYA / S-TIM25, OHARA)",
      apd: false,
      role: "Principal diverging element of the front half. Strongest individual element by absolute power. Controls Petzval sum, provides chromatic over-correction, and forms the front surface of the central air lens.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.6398,
      vd: 35.3,
      fl: -24.9,
      glass: "Medium flint (640/353 class, Minolta proprietary; nearest: S-TIM28, OHARA)",
      apd: false,
      cemented: "D1",
      role: "Front (negative) component of the cemented doublet. Its strongly curved front surface (r7) is the primary source of negative SA in the rear group and forms the rear surface of the diverging air lens.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.7545,
      vd: 50.1,
      fl: 30.0,
      glass:
        "Lanthanum crown (755/501 class, Minolta proprietary; no exact catalog match — Δnd = +0.005 from nearest LAC14, HOYA)",
      apd: false,
      cemented: "D1",
      role: "Rear (positive) component of the cemented doublet. Shares νd = 50.1 with L2, forming a symmetric achromatic pair across the stop. The doublet L4+L5 is nearly afocal (f ≈ −535 mm combined), functioning as an aberration corrector.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      fl: 44.7,
      glass: "Lanthanum crown (697/555 class, Minolta proprietary; nearest: LAC9, HOYA / S-LAL14, OHARA)",
      apd: false,
      role: "Final converging element and the principal contributor to the long BFD. Nearly flat front surface (R ≈ 622 mm) with a strongly curved rear; this reversed-curvature configuration (|r10| > |r11|) is a key patent innovation.",
    },
  ],

  /* ── Surface prescription ──
   *  All values scaled ×45 from the normalized (f = 1.0) patent data.
   *  Patent sign convention: positive R = convex toward object (center of
   *  curvature to the right), matching the project standard.
   *
   *  L4 + L5 form a cemented doublet (Group 4).
   *  Surface 8 is the cemented junction: nd = N5 (L5 glass), elemId = 5.
   *
   *  STO placed at the midpoint of patent gap d6 (see file header note).
   */
  surfaces: [
    // ── Group 1: L1 (positive meniscus, convex to object) ──
    { label: "1", R: 37.485, d: 2.925, nd: 1.781, elemId: 1, sd: 14.0 },
    { label: "2", R: 332.748, d: 0.113, nd: 1.0, elemId: 0, sd: 13.5 },

    // ── Group 2: L2 (positive meniscus, convex to object) ──
    { label: "3", R: 19.454, d: 3.353, nd: 1.7495, elemId: 2, sd: 13.0 },
    { label: "4", R: 29.255, d: 1.35, nd: 1.0, elemId: 0, sd: 11.0 },

    // ── Group 3: L3 (negative meniscus, convex to object) ──
    { label: "5", R: 69.602, d: 1.17, nd: 1.7006, elemId: 3, sd: 10.5 },
    { label: "6", R: 15.444, d: 4.572, nd: 1.0, elemId: 0, sd: 10.5 },

    // ── Aperture stop (midpoint of patent d6 gap) ──
    { label: "STO", R: 1e15, d: 4.572, nd: 1.0, elemId: 0, sd: 8.5 },

    // ── Group 4: L4 + L5 cemented doublet (meniscus, concave to object) ──
    { label: "7", R: -13.01, d: 1.17, nd: 1.6398, elemId: 4, sd: 9.9 }, // capped by S6→S7 cross-gap sag
    { label: "8", R: -72.986, d: 3.825, nd: 1.7545, elemId: 5, sd: 10.5 },
    { label: "9", R: -17.667, d: 0.113, nd: 1.0, elemId: 0, sd: 12.0 },

    // ── Group 5: L6 (biconvex positive) ──
    { label: "10", R: 622.35, d: 2.97, nd: 1.6968, elemId: 6, sd: 12.0 },
    { label: "11", R: -32.76, d: 36.063, nd: 1.0, elemId: 0, sd: 12.5 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus) ──
   *  Unit focus: entire lens translates; only BFD changes.
   *  Extension at MFD (0.6 m): Δ = f²/(d_o − f) ≈ 3.65 mm.
   */
  var: {
    "11": [36.063, 39.71],
  },
  varLabels: [["11", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "4" },
    { text: "G3", fromSurface: "5", toSurface: "6" },
    { text: "G4", fromSurface: "7", toSurface: "9" },
    { text: "G5", fromSurface: "10", toSurface: "11" },
  ],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.6,
  focusDescription: "Unit focus — entire optical assembly translates forward along the optical axis.",

  /* ── Aperture configuration ── */
  nominalFno: 2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 5,

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
