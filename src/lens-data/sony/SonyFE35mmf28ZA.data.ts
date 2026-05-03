import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — SONY SONNAR T* FE 35mm F2.8 ZA              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2015-41012 A, Example 1 (Tamron / Sony).         ║
 * ║  Inventor: Takahiko Sakai. Filed: 2013-08-22. Published: 2015-03-02║
 * ║  Compact inner-focus wide-angle prime, positive–negative–positive. ║
 * ║  7 elements / 5 groups (3 patent groups, split at stop → 5),      ║
 * ║  6 aspherical surfaces (3 double-sided aspherical elements).      ║
 * ║  Focus: inner focus — single negative element (G2) moves.         ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated via combined marginal + chief ray trace at f/2.884    ║
 * ║    and 60% field fraction, with 5–8% mechanical clearance.        ║
 * ║    Front group limited by filter thread (49 mm).                   ║
 * ║    G3 SDs limited by edge thickness (L131, sd ≤ 8.29) and         ║
 * ║    cross-gap sag intrusion (gap 11→12A, sd ≤ 8.31).              ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sony-sonnar-fe-35-f28-za",
  maker: "Sony",
  name: "SONY SONNAR T* FE 35mm F2.8 ZA",
  subtitle: "JP 2015-41012 A EXAMPLE 1 — TAMRON / SONY",
  specs: ["7 ELEMENTS / 5 GROUPS", "f ≈ 36.1 mm", "F/2.8", "2ω ≈ 62.6°", "6 ASPHERICAL SURFACES"],

  focalLengthMarketing: 35,
  focalLengthDesign: 36.06,
  apertureMarketing: 2.8,
  apertureDesign: 2.884,
  patentYear: 2015,
  elementCount: 7,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L111",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.8,
      vd: 25.46,
      fl: -39.8,
      glass: "Dense flint, 800/255 class — S-TIH6 (OHARA) or FD60 (Hoya)",
      apd: false,
      role: "Front negative meniscus, concave to object. Diverges incoming beam for wide field coverage and provides negative Petzval contribution. High-dispersion partner of the cemented doublet with L112.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L112",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.83,
      vd: 42.72,
      fl: 99.9,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Weakly positive meniscus cemented to L111. High-index lanthanum glass provides achromatic correction in partnership with L111.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L113",
      label: "Element 3",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.76,
      vd: 49.24,
      fl: 17.7,
      glass: "Lanthanum flint (LAF class), 760/492 — unresolved; likely PGM-compatible proprietary melt",
      apd: false,
      role: "Primary positive power element in G1. Both surfaces aspherical for spherical aberration correction. Strongest positive element after the stop.",
    },
    {
      id: 4,
      name: "L121",
      label: "Element 4",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.58,
      vd: 59.46,
      fl: -27.8,
      glass: "L-BAL42 (OHARA)",
      apd: false,
      role: "Single-element focus group (G2). Moves object-to-image for infinity→close focus. Both surfaces aspherical. PGM-compatible barium crown, lightweight for fast AF and video wobbling.",
    },
    {
      id: 5,
      name: "L131",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.83,
      vd: 42.72,
      fl: 10.5,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Strongest element in the system (|f| = 10.5 mm). Thick biconvex with steep rear surface reconverges the beam from the focus group. Same glass as L112.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L132",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.63,
      vd: 34.57,
      fl: -14.2,
      glass: "NBFD11 (Hoya)",
      apd: false,
      role: "Achromatic partner to L131 in the G3 cemented doublet. Niobium-containing flint partially counterbalances L131's positive power for chromatic correction in the relay group.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L133",
      label: "Element 7",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.68,
      vd: 31.16,
      fl: -68.1,
      glass: "S-TIM28 (OHARA)",
      apd: false,
      role: "Rear field-flattener. Both surfaces carry the strongest aspherical departures in the system. Negative power reduces Petzval sum; aspherics correct astigmatism and field curvature across the 63° field.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    /* ── G1: positive front group (fixed) ── */
    // Cemented doublet L111 + L112
    { label: "1", R: -23.1, d: 0.8, nd: 1.8, elemId: 1, sd: 7.5 },
    { label: "2", R: -85.23, d: 1.49, nd: 1.83, elemId: 2, sd: 7.5 }, // junction → L112
    { label: "3", R: -42.36, d: 0.85, nd: 1.0, elemId: 0, sd: 7.3 },
    // Aperture stop
    { label: "STO", R: 1e15, d: 1.4, nd: 1.0, elemId: 0, sd: 6.6 },
    // L113 (biconvex, both surfaces aspherical)
    { label: "5A", R: 18.59, d: 2.98, nd: 1.76, elemId: 3, sd: 7.8 },
    { label: "6A", R: -45.03, d: 1.49, nd: 1.0, elemId: 0, sd: 7.8 }, // variable D(6)

    /* ── G2: negative focus group (moves) ── */
    // L121 (negative meniscus, both surfaces aspherical)
    { label: "7A", R: 119.57, d: 0.7, nd: 1.58, elemId: 4, sd: 7.0 },
    { label: "8A", R: 14.18, d: 5.53, nd: 1.0, elemId: 0, sd: 7.0 }, // variable D(8)

    /* ── G3: positive rear group (fixed) ── */
    // Cemented doublet L131 + L132
    { label: "9", R: 51.2, d: 5.36, nd: 1.83, elemId: 5, sd: 8.2 },
    { label: "10", R: -10.02, d: 1.0, nd: 1.63, elemId: 6, sd: 8.2 }, // junction → L132
    { label: "11", R: 86.11, d: 4.95, nd: 1.0, elemId: 0, sd: 8.2 },
    // L133 (negative meniscus, both surfaces aspherical — field flattener)
    { label: "12A", R: -10.55, d: 1.0, nd: 1.68, elemId: 7, sd: 8.1 },
    { label: "13A", R: -14.19, d: 20.03, nd: 1.0, elemId: 0, sd: 8.5 }, // BFD
  ],

  /* ── Aspherical coefficients ──
   *  Patent aspheric sag equation (¶0153–0154):
   *    Z(h) = ch²/[1 + √(1 − (1+k)c²h²)] + A4·h⁴ + A6·h⁶ + A8·h⁸ + A10·h¹⁰
   *  All conic constants k = 0 (spherical base); correction is polynomial-only.
   */
  asph: {
    "5A": {
      K: 0,
      A4: -3.7579e-5,
      A6: -1.0389e-8,
      A8: -2.0023e-10,
      A10: -4.1163e-11,
      A12: 0,
      A14: 0,
    },
    "6A": {
      K: 0,
      A4: -5.9027e-6,
      A6: 5.5887e-7,
      A8: -1.1004e-8,
      A10: 3.9911e-11,
      A12: 0,
      A14: 0,
    },
    "7A": {
      K: 0,
      A4: 7.4881e-5,
      A6: -1.1023e-6,
      A8: -1.6439e-9,
      A10: 9.2542e-11,
      A12: 0,
      A14: 0,
    },
    "8A": {
      K: 0,
      A4: 1.0857e-4,
      A6: -1.6255e-6,
      A8: 9.5546e-9,
      A10: 7.7733e-11,
      A12: 0,
      A14: 0,
    },
    "12A": {
      K: 0,
      A4: 4.5713e-4,
      A6: -4.2921e-6,
      A8: 2.8083e-8,
      A10: -5.6441e-11,
      A12: 0,
      A14: 0,
    },
    "13A": {
      K: 0,
      A4: 4.1193e-4,
      A6: -3.8255e-6,
      A8: 2.1891e-8,
      A10: -5.6738e-11,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (inner focus) ──
   *  G2 (L121) moves object→image for near-focus.
   *  Total gap sum D(6)+D(8) = 7.02 mm is conserved.
   *  Focus travel: 1.64 mm.
   *  Close-focus object distance: 350 mm (¶0079).
   */
  var: {
    "6A": [1.49, 3.13],
    "8A": [5.53, 3.89],
  },
  varLabels: [
    ["6A", "D6"],
    ["8A", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "6A" },
    { text: "G2 (−) FOCUS", fromSurface: "7A", toSurface: "8A" },
    { text: "G3 (+)", fromSurface: "9", toSurface: "13A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "9", toSurface: "11" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.35,
  focusDescription: "Inner focus — single negative element (L121/G2) moves object→image. Linear AF motor.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  apertureBlades: 7,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
