import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON 28Ti NIKKOR 28mm f/2.8                         ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 5,528,428 Embodiment 3 (Ohtake, Mori / Nikon).   ║
 * ║  Compact wide-angle Biogon-derivative for 35mm format.             ║
 * ║  7 elements / 5 components / 2 groups, all spherical.              ║
 * ║  Focus: Unit focus (entire lens moves); BFD only variable gap.     ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list SDs. Estimated from paraxial marginal +    ║
 * ║    chief ray trace (37° half-field, f/2.87) with 8–10% clearance. ║
 * ║    Front/rear elements constrained by sd/|R| < 0.90.              ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                            ║
 * ║    Patent states stop is between L2 and L3 (in the 4.00 mm air    ║
 * ║    gap). Position inferred from Fig. 3: split 2.00 / 2.00.        ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-28ti-28f28",
  maker: "Nikon",
  name: "NIKON 28Ti NIKKOR 28mm f/2.8",
  subtitle: "US 5,528,428 Ex. 3 — Ohtake & Mori / Nikon",
  specs: ["7 ELEMENTS / 5 GROUPS", "f ≈ 28.9 mm", "F/2.87", "2ω ≈ 74.0°", "ALL SPHERICAL"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 28,
  focalLengthDesign: 28.9,
  apertureMarketing: 2.8,
  apertureDesign: 2.87,
  patentYear: 1996,
  elementCount: 7,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.53172,
      vd: 49.1,
      fl: -69.9,
      glass: "S-NSL3 (OHARA)",
      apd: false,
      role: "Front negative meniscus — field flattening and FOV expansion",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.84042,
      vd: 43.3,
      fl: 15.2,
      glass: "TAFD25 (HOYA)",
      apd: false,
      role: "Front doublet positive crown — primary convergence",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.64831,
      vd: 33.8,
      fl: -19.6,
      glass: "E-FD4 (HOYA)",
      apd: false,
      role: "Front doublet negative flint — chromatic correction",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L21",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.816,
      vd: 46.8,
      fl: 16.0,
      glass: "S-LAH59 (OHARA)",
      apd: "inferred",
      apdNote: "Lanthanum glass — likely contributor to Nikon 'low-dispersion' claim",
      role: "Rear doublet positive crown — convergence and chromatic correction",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L22",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.6175,
      vd: 30.8,
      fl: -20.9,
      glass: "EF3 (HOYA)",
      apd: false,
      role: "Rear doublet negative flint — chromatic correction",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L23",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.79668,
      vd: 45.4,
      fl: 22.8,
      glass: "797/454 (discontinued lanthanum glass)",
      apd: "inferred",
      apdNote: "Lanthanum glass — likely contributor to Nikon 'low-dispersion' claim",
      role: "Strong positive meniscus — spherical aberration correction, key patent innovation",
    },
    {
      id: 7,
      name: "L24",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.59507,
      vd: 35.5,
      fl: -47.3,
      glass: "595/355 (close to S-FTM16, OHARA)",
      apd: false,
      role: "Rear negative meniscus — field flattening, symmetry with L1",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1: Front group ──
    { label: "1", R: 12.422, d: 1.5, nd: 1.53172, elemId: 1, sd: 7.8 }, // L1 front
    { label: "2", R: 8.919, d: 3.37, nd: 1.0, elemId: 0, sd: 7.5 }, // L1 rear → air
    { label: "3", R: 12.829, d: 3.87, nd: 1.84042, elemId: 2, sd: 6.5 }, // L2a front
    { label: "4", R: -1726.972, d: 1.0, nd: 1.64831, elemId: 3, sd: 6.2 }, // L2a→L2b cement
    { label: "5", R: 12.785, d: 2.0, nd: 1.0, elemId: 0, sd: 5.8 }, // L2b rear → air

    // ── Stop (inferred from Fig. 3 — centered in the 4.00 mm gap) ──
    { label: "STO", R: 1e15, d: 2.0, nd: 1.0, elemId: 0, sd: 4.3 },

    // ── G2: Rear group ──
    { label: "6", R: 51.931, d: 2.5, nd: 1.816, elemId: 4, sd: 5.3 }, // L3a front
    { label: "7", R: -17.04, d: 1.0, nd: 1.6175, elemId: 5, sd: 5.3 }, // L3a→L3b cement
    { label: "8", R: 54.857, d: 1.31, nd: 1.0, elemId: 0, sd: 5.3 }, // L3b rear → air
    { label: "9", R: -21.73, d: 2.95, nd: 1.79668, elemId: 6, sd: 6.0 }, // L4 front
    { label: "10", R: -10.479, d: 0.8, nd: 1.0, elemId: 0, sd: 6.9 }, // L4 rear → air
    { label: "11", R: -8.874, d: 1.5, nd: 1.59507, elemId: 7, sd: 7.5 }, // L5 front
    { label: "12", R: -13.78, d: 20.96, nd: 1.0, elemId: 0, sd: 8.5 }, // L5 rear → BFD
  ],

  /* ── Aspherical coefficients — all spherical design ── */
  asph: {},

  /* ── Variable air spacings (unit focus — BFD only) ── */
  var: {
    "12": [20.96, 23.21],
  },
  varLabels: [["12", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (front)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (rear)", fromSurface: "6", toSurface: "12" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.4,
  focusDescription: "Unit focus — entire lens assembly moves axially.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
