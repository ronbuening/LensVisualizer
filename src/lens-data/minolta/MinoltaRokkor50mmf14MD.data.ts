import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — MINOLTA MD ROKKOR 50mm f/1.4                 ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,182,550 Embodiment 2 (Minolta / Yamaguchi).    ║
 * ║  Modified double-Gauss, 7 elements / 6 groups, all spherical.     ║
 * ║  Focus: unit focus (entire optical assembly translates).           ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f = 100; all R, d, sd values scaled ×0.5 to          ║
 * ║    f ≈ 50 mm production focal length.                             ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                          ║
 * ║    Patent does not list semi-diameters.  Estimated by paraxial    ║
 * ║    marginal ray (f/1.4) + chief ray (23° half-field, 50% field   ║
 * ║    fraction) with 3% mechanical clearance.  Constrained to:       ║
 * ║    sd/|R| < 0.88 (all-spherical design), edge thickness ≥ 0.3 mm,║
 * ║    cross-gap sag intrusion ≤ 90%; S7 capped by the central        ║
 * ║    S6–S7 air-lens clearance.                                      ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                           ║
 * ║    Patent does not specify the stop as a separate surface.        ║
 * ║    Placed 14 mm (patent scale) into the D6 air gap between       ║
 * ║    L3 rear and L4 front, estimated from Fig. 2 iris placement.   ║
 * ║    D6 = 29.3 mm split as 14.0 + 15.3 (patent) → 7.0 + 7.65     ║
 * ║    (production).                                                   ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:          ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gap                         ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "minolta-md-rokkor-50f14",
  maker: "Minolta",
  name: "MINOLTA MD ROKKOR 50mm f/1.4",
  subtitle: "US 4,182,550 Embodiment 2 — Minolta / Yamaguchi",
  specs: ["7 ELEMENTS / 6 GROUPS", "f ≈ 50.0 mm", "F/1.4", "2ω ≈ 46°", "ALL SPHERICAL"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 50,
  apertureMarketing: 1.4,
  patentYear: 1980,
  elementCount: 7,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.7885,
      vd: 45.7,
      fl: 61.3,
      glass: "LAC14 (OHARA)",
      apd: false,
      role: "Front collector; steep meniscus (convex to object) gathers beam from entrance pupil, reducing obliquity to control spherical aberration at f/1.4.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.765,
      vd: 46.3,
      fl: 76.7,
      glass: "E-LAF7 / TAFD5F (HOYA)",
      apd: false,
      role: "Secondary converging element sharing positive power with L1; nearly in contact with L1 (0.15 mm air gap).",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7006,
      vd: 30.1,
      fl: -31.1,
      glass: "S-TIM35 class (OHARA, near match Δnd = 0.0017)",
      apd: false,
      role: "Primary Petzval-sum compensator in front group; concave rear surface carries the strongest negative refraction ahead of the stop.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.5,
      fl: -20.7,
      glass: "S-TIH4 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Doublet flint — strongest negative power in the system; dense titanium flint with lowest Abbe number provides chromatic correction at the cemented interface.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.744,
      vd: 45.0,
      fl: 35.6,
      glass: "S-LAM2 (OHARA, close match Δνd = 0.21)",
      apd: false,
      cemented: "D1",
      role: "Doublet crown — lanthanum flint paired with L4 for achromatization; cemented doublet is net-negative (f = −65.9 mm combined), extending BFD for SLR mirror clearance.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.781,
      vd: 44.5,
      fl: 47.8,
      glass: "S-NBH55 class (OHARA, near match Δnd = 0.001)",
      apd: false,
      role: "Rear relay positive meniscus (concave to object); R11 carries strong positive power re-converging the diverging beam from the doublet toward the image plane.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 50.2,
      fl: 85.4,
      glass: "S-LAL10 (OHARA)",
      apd: false,
      role: "Rear collector — weakly biconvex with the highest Abbe number in the system, minimizing residual chromatic aberration at the final imaging surface.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 37.5, d: 5.0, nd: 1.7885, elemId: 1, sd: 21.8 },
    { label: "2", R: 157.275, d: 0.15, nd: 1.0, elemId: 0, sd: 20.1 },
    { label: "3", R: 24.25, d: 4.2, nd: 1.765, elemId: 2, sd: 20.1 },
    { label: "4", R: 38.23, d: 2.1, nd: 1.0, elemId: 0, sd: 17.4 },
    { label: "5", R: 52.805, d: 2.0, nd: 1.7006, elemId: 3, sd: 15.8 },
    { label: "6", R: 15.19, d: 7.0, nd: 1.0, elemId: 0, sd: 13.4 },
    // STO position inferred from Fig. 2 iris placement; D6 = 29.3 mm (patent)
    // split as 14.0 + 15.3, scaled to 7.0 + 7.65 at production.
    { label: "STO", R: 1e15, d: 7.65, nd: 1.0, elemId: 0, sd: 12.1 },
    { label: "7", R: -16.245, d: 1.4, nd: 1.7552, elemId: 4, sd: 12.75 }, // capped by S6→S7 cross-gap sag
    { label: "8", R: 400.0, d: 5.6, nd: 1.744, elemId: 5, sd: 13.6 },
    { label: "9", R: -28.16, d: 0.15, nd: 1.0, elemId: 0, sd: 15.8 },
    { label: "10", R: -116.34, d: 4.55, nd: 1.781, elemId: 6, sd: 15.9 },
    { label: "11", R: -28.725, d: 0.15, nd: 1.0, elemId: 0, sd: 16.8 },
    { label: "12", R: 241.0, d: 2.6, nd: 1.72, elemId: 7, sd: 16.8 },
    { label: "13", R: -82.125, d: 36.175, nd: 1.0, elemId: 0, sd: 16.6 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus) ── */
  var: {
    "13": [36.175, 42.42],
  },
  varLabels: [["13", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT (G1–G3)", fromSurface: "1", toSurface: "6" },
    { text: "REAR (G4–G6)", fromSurface: "7", toSurface: "13" },
  ],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.45,
  focusDescription: "Unit focus — entire 7-element optical assembly translates forward on a helicoid barrel.",

  /* ── Aperture configuration ── */
  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
