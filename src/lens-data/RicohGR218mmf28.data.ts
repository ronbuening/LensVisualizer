import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — RICOH GR 18.3mm f/2.8                        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2013/0321936 A1 Example 3 (Kazuyasu Ohashi).      ║
 * ║  Approximately-symmetric wide-angle prime for APS-C compact.       ║
 * ║  7 elements / 5 groups, 2 aspherical surfaces.                     ║
 * ║  Focus: unit focusing (entire lens translates).                    ║
 * ║                                                                    ║
 * ║  Production: Ricoh GR (2013), Ricoh GR II (2015).                  ║
 * ║  Patent filed May 31, 2013 · Priority JP 2012-127431 (Jun 4 2012) ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Not listed in patent. Estimated via combined marginal + chief   ║
 * ║    ray envelope at 70% field, validated against edge thickness,    ║
 * ║    cross-gap sag overlap, conic height, and rim-slope checks.      ║
 * ║    Front group SDs accommodate wide-angle field; doublet SDs are   ║
 * ║    limited by strongly curved cemented junctions.                  ║
 * ║                                                                    ║
 * ║  Cover glass: patent parallel flat plate F (nd=1.51680, d=1.40)   ║
 * ║    with 0.50 mm air to image excluded; air-equivalent BFD folded  ║
 * ║    into last surface d = 14.179 mm.                                ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "ricoh-gr-18p3-f2p8",
  maker: "Ricoh",
  name: "RICOH GR/GR2 18.3mm f/2.8",
  subtitle: "US 2013/0321936 A1 EXAMPLE 3 — OHASHI",
  specs: ["7 ELEMENTS / 5 GROUPS", "f ≈ 18.3 mm", "F/2.8", "2ω ≈ 76.4°", "2 ASPHERICAL SURFACES"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 18.3,
  focalLengthDesign: 18.3,
  apertureMarketing: 2.8,
  apertureDesign: 2.81,
  patentYear: 2013,
  elementCount: 7,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.4971,
      vd: 81.56,
      fl: -27.97,
      glass: "M-FCD1 (HOYA)",
      apd: "inferred" as const,
      apdNote: "dPgF ≈ +0.032 (strong positive APD); fluorophosphate crown, precision glass-molded",
      role: "Front negative element — diverges incoming beam for wide-angle coverage; aspherical rear surface corrects astigmatism and distortion; anomalous dispersion for secondary spectrum correction",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.68893,
      vd: 31.16,
      fl: -30.54,
      glass: "E-FD8 (HOYA)",
      apd: "inferred" as const,
      apdNote: "dPgF ≈ +0.008 (slight positive APD)",
      role: "Front element of Group II — concave-to-object surface forms biconvex air lens with L1; chromatic counterbalance to L1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -31.29,
      glass: "FDS90 (HOYA)",
      apd: "inferred" as const,
      apdNote: "dPgF ≈ +0.015 (moderate positive APD); extremely high dispersion flint",
      cemented: "D1",
      role: "Negative element of pre-stop cemented doublet — high-dispersion flint provides chromatic correction within doublet",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 8.64,
      glass: "TAFD30 (HOYA)",
      apd: false,
      cemented: "D1",
      role: "Primary positive element of pre-stop doublet — very high index (nd=1.883) enables compact curvatures; flanks aperture with L5 in approximately-symmetric arrangement",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 6.7,
      glass: "TAFD30 (HOYA)",
      apd: false,
      cemented: "D2",
      role: "Primary positive element of post-stop doublet — mirrors L4 across the aperture in approximately-symmetric power distribution",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.16,
      fl: -7.62,
      glass: "E-FD8 (HOYA)",
      apd: "inferred" as const,
      apdNote: "dPgF ≈ +0.008 (slight positive APD); mirrors L2 glass in symmetric design",
      cemented: "D2",
      role: "Negative element of post-stop cemented doublet — mirrors L3 role across the aperture; concave rear surface forms biconvex air lens with L7",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.8208,
      vd: 42.71,
      fl: -240.0,
      glass: "M-TAFD51 (HOYA)",
      apd: false,
      role: "Weak negative field flattener and exit pupil controller (Group IV) — aspherical rear surface controls chief ray angle at image plane for sensor microlens compatibility; precision glass-molded",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── Group I (negative): L1 ──
    { label: "1", R: 816.141, d: 0.8, nd: 1.4971, elemId: 1, sd: 7.0 }, // L1 front (nearly flat)
    { label: "2A", R: 13.666, d: 1.79, nd: 1.0, elemId: 0, sd: 6.1 }, // L1 rear (asph) → air

    // ── Group II (positive): L2 + cemented doublet L3+L4 ──
    { label: "3", R: -23.543, d: 0.8, nd: 1.68893, elemId: 2, sd: 5.0 }, // L2 front
    { label: "4", R: 200.425, d: 0.2, nd: 1.0, elemId: 0, sd: 5.0 }, // L2 rear → air
    { label: "5", R: 15.416, d: 0.8, nd: 1.84666, elemId: 3, sd: 5.0 }, // L3 front
    { label: "6", R: 9.513, d: 2.34, nd: 1.883, elemId: 4, sd: 5.0 }, // L3→L4 cement junction
    { label: "7", R: -34.121, d: 1.5, nd: 1.0, elemId: 0, sd: 5.0 }, // L4 rear → air

    // ── Aperture stop ──
    { label: "STO", R: 1e15, d: 1.0, nd: 1.0, elemId: 0, sd: 3.55 }, // STO position from patent S08

    // ── Group III (positive): cemented doublet L5+L6 ──
    { label: "9", R: 14.691, d: 2.59, nd: 1.883, elemId: 5, sd: 4.7 }, // L5 front
    { label: "10", R: -9.087, d: 0.89, nd: 1.68893, elemId: 6, sd: 4.7 }, // L5→L6 cement junction
    { label: "11", R: 12.917, d: 1.73, nd: 1.0, elemId: 0, sd: 4.3 }, // L6 rear → air

    // ── Group IV (weak negative): L7 ──
    { label: "12", R: -12.419, d: 1.2, nd: 1.8208, elemId: 7, sd: 5.5 }, // L7 front
    { label: "13A", R: -13.832, d: 14.179, nd: 1.0, elemId: 0, sd: 5.8 }, // L7 rear (asph) → air-eq BFD
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "2A": {
      K: 3.80085,
      A4: 1.07069e-4,
      A6: -3.38949e-6,
      A8: -2.19205e-7,
      A10: -5.16455e-9,
      A12: 0,
      A14: 0,
    },
    "13A": {
      K: -2.86234,
      A4: 1.49055e-4,
      A6: 4.18583e-6,
      A8: 1.25343e-7,
      A10: -7.88154e-10,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (unit focus) ──
   *  Unit focus: entire lens translates forward; only BFD changes.
   *  BFD includes the folded sensor-cover path (12.756 + 1.40 / 1.51680 + 0.50 = 14.179 mm).
   *  Extension at 0.10 m macro close focus: ≈ 4.10 mm (thin-lens estimate).
   */
  var: {
    "13A": [14.179, 18.28],
  },
  varLabels: [["13A", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "I (neg)", fromSurface: "1", toSurface: "2A" },
    { text: "II (pos)", fromSurface: "3", toSurface: "7" },
    { text: "III (pos)", fromSurface: "9", toSurface: "11" },
    { text: "IV (weak)", fromSurface: "12", toSurface: "13A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "9", toSurface: "11" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.1,
  focusDescription: "Unit focus — entire lens translates. MFD 0.30 m normal, 0.10 m macro mode.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  apertureBlades: 9,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
