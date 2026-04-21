// Canon New FD 50mm f/1.2 (non-L)
// Patent: US 4,364,643 (Momiyama, Canon K.K.), granted Dec 21 1982
// Design basis: Embodiment 3 — 7 elements in 6 groups, all spherical
// Scaled from patent f=1 to production 50 mm (scale ≈ 50.0, EFL verified at 50.00 mm)
// STO position estimated from patent FIG. 3 — centered in D6 air gap
// Semi-diameters estimated: marginal ray (f/1.2) + 8% mechanical clearance, R6 capped at sd/|R| < 0.90

import type { LensDataInput } from "../types/optics.js";

const LENS_DATA = {
  key: "canon-fdn-50f12",
  name: "CANON New FD 50mm f/1.2",
  maker: "Canon",
  subtitle: "US 4,364,643 · Embodiment 3 (Momiyama, 1982)",
  specs: ["7 elements / 6 groups", "46° field of view", "MFD 0.5 m", "52 mm filter thread"],

  focalLengthMarketing: 50,
  focalLengthDesign: 50,
  apertureMarketing: 1.2,
  apertureDesign: 1.2,
  patentYear: 1982,
  elementCount: 7,
  groupCount: 6,

  focusDescription: "Unit focusing — entire optical assembly translates forward",

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.788,
      vd: 47.4,
      fl: 60.0,
      glass: "Lanthanum special flint [788474] — OHARA LASF014",
      apd: false,
      role: "Front positive meniscus, convex toward object. Primary light-gathering element; high index (1.788) lowers Petzval sum per patent conditions (1)–(2).",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.788,
      vd: 47.4,
      fl: 86.0,
      glass: "Lanthanum special flint [788474] — OHARA LASF014 (same as L1)",
      apd: false,
      role: "Second positive meniscus, convex toward object. Steepest front curvature in front group; balances astigmatism against rear group.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.6668,
      vd: 33.0,
      fl: -34.1,
      glass: "Dense flint [667330] — OHARA SF19",
      apd: false,
      role: "Negative meniscus, convex toward object. Deliberately low-index glass per condition (5): n3 < 1.67 to improve Petzval sum. R6 is primary SA corrector in front group.",
    },
    {
      id: 4,
      name: "L21",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: -22.9,
      glass: "Dense flint [805254] — OHARA SF6",
      apd: false,
      cemented: "D1",
      role: "Negative element of cemented doublet, convex toward image. Largest single-surface SA contributor (I = −1.76 at R7). High-dispersion glass per condition (4): ν4 < 26 for chromatic correction.",
    },
    {
      id: 5,
      name: "L22",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 38.7,
      glass: "Lanthanum special flint [773496] — OHARA LASF016",
      apd: false,
      cemented: "D1",
      role: "Positive element of cemented doublet, convex toward image. Nearly flat junction (R8 ≈ −1568 mm); Petzval contribution (+0.74) partially offsets L4's negative term.",
    },
    {
      id: 6,
      name: "L23",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.863,
      vd: 41.5,
      fl: 50.3,
      glass: "Lanthanum special flint (high-index) [863415] — OHARA LASF07",
      apd: false,
      role: "Rear positive meniscus, convex toward image. Highest-index glass in system (1.863) per condition (3): n6 > 1.85. R11 generates second-largest positive SA (I = +1.48), opposing R7.",
    },
    {
      id: 7,
      name: "L24",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      fl: 102.9,
      glass: "Lanthanum special flint [773496] — OHARA LASF016 (same as L5)",
      apd: false,
      role: "Rear biconvex, weak positive power. Final collecting element; R13 adds positive SA (+0.67) to balancing budget.",
    },
  ],

  surfaces: [
    // ---- Front group (converging) ----
    { label: "1", R: 41.184, d: 5.908, nd: 1.788, elemId: 1, sd: 22.5 },
    { label: "2", R: 298.388, d: 0.145, nd: 1.0, elemId: 0, sd: 21.5 },
    { label: "3", R: 27.334, d: 4.319, nd: 1.788, elemId: 2, sd: 19.0 },
    { label: "4", R: 42.617, d: 1.773, nd: 1.0, elemId: 0, sd: 16.5 },
    { label: "5", R: 84.266, d: 2.228, nd: 1.6668, elemId: 3, sd: 16.0 },
    { label: "6", R: 17.725, d: 7.797, nd: 1.0, elemId: 0, sd: 14.2 },

    // ---- Aperture stop (centered in D6 air gap) ----
    { label: "STO", R: 1e15, d: 7.797, nd: 1.0, elemId: 0, sd: 14.1 },

    // ---- Rear group (converging) ----
    // Cemented doublet: L4 (negative) + L5 (positive)
    { label: "7", R: -18.209, d: 1.646, nd: 1.80518, elemId: 4, sd: 14.2 },
    { label: "8", R: -1568.136, d: 7.007, nd: 1.7725, elemId: 5, sd: 15.0 },
    { label: "9", R: -29.365, d: 0.145, nd: 1.0, elemId: 0, sd: 16.5 },

    // L6 — rear positive meniscus
    { label: "10", R: -197.48, d: 5.036, nd: 1.863, elemId: 6, sd: 16.5 },
    { label: "11", R: -36.002, d: 0.145, nd: 1.0, elemId: 0, sd: 17.0 },

    // L7 — rear biconvex
    { label: "12", R: 118.686, d: 3.099, nd: 1.7725, elemId: 7, sd: 17.0 },
    { label: "13", R: -238.176, d: 35.384, nd: 1.0, elemId: 0, sd: 16.5 },
  ],

  asph: {},

  // Unit focusing: only BFD changes.
  // Analysis doc: infinity BFD = 35.384 mm; close-focus extension at 0.5 m is ~6.2 mm.
  var: {
    "13": [35.384, 41.584],
  },
  varLabels: [["13", "BF"]],

  groups: [
    { text: "G1 (FRONT 1st–3rd)", fromSurface: "1", toSurface: "6" },
    { text: "G2 (REAR 4th–6th)", fromSurface: "7", toSurface: "13" },
  ],

  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  closeFocusM: 0.5,
  nominalFno: 1.2,
  fstopSeries: [1.2, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  scFill: 0.55,
  yScFill: 0.55,
} satisfies LensDataInput;

export default LENS_DATA;
