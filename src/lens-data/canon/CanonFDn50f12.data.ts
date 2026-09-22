// Canon New FD 50mm f/1.2 (non-L)
// Patent: US 4,364,643 (Kikuo Momiyama; Canon Kabushiki Kaisha), filed May 28 1980, granted Dec 21 1982
// Design basis: Embodiment 3 (FIG. 3, claim 4) — 7 elements in 6 groups, all spherical, no floating group.
//   All three embodiments share this topology; the choice of Embodiment 3 follows a secondary-source attribution
//   (see the analysis file), not a statement by Canon. This is not the 8-element aspherical FD 50mm f/1.2 L.
//
// NOTE ON SCALING:
//   The patent is normalized to f = 1 (F.No. 1:1.2, 2ω = 46°). The published rows trace to a paraxial EFL of
//   1.000022, so every R and d is multiplied by s = 50 / 1.000022 = 49.9989 to put the computed EFL at 50.00 mm
//   (BFD 35.387 mm). All 13 radii and 12 spacings reproduce patent × s to the stored 0.001 mm.
//
// NOTE ON THE STOP:
//   The patent places "a diaphragm" between L3 and L4 without a spacing. FIG. 3 draws it at 0.49 ± 0.02 of the
//   D6 air space, so D6 (15.594 mm) is split evenly. The STO sd records the f/1.2 iris radius (derived).
//
// NOTE ON SEMI-DIAMETERS:
//   The patent lists no clear apertures. Surfaces 1–3, 6 and 7 are retained estimates that agree with FIG. 3
//   within 5 % (scale 0.0908 mm/px from the 47.05 mm vertex span; line half-width removed). Surfaces 8–13 are set
//   from the FIG. 3 rims (L4 16.8, L5 17.7, L6 18.6, L7 17.1 mm) and cleared against the exact f/1.2 axial
//   marginal ray (16.77 / 17.35 / 18.32 / 18.44 / 16.78 / 16.50 mm). Surfaces 4 and 5 cannot reach the drawn rims:
//   with the published R4, R5 and D4 the L2–L3 air space closes at h = 16.86 mm (0.337 f), below the f/1.2
//   marginal ray (17.4 mm), so the prescription itself limits the on-axis beam to about f/1.24. They are set to
//   16.6 mm, which keeps 0.06 mm of rim clearance and needs gapSagFrac = 0.97 (intrusion 96.7 % of D4).

import type { LensDataInput } from "../../types/optics.js";

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
  lensMounts: ["canon-fd"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,364,643",
  patentAuthors: ["Kikuo Momiyama"],
  patentAssignees: ["Canon Inc."],
  patentYear: 1982,
  elementCount: 7,
  groupCount: 6,

  focusDescription: "Unit focusing — entire optical assembly translates forward",

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.788,
      vd: 47.4,
      fl: 60.0,
      glass: "S-LAH64 (OHARA catalog equivalent; patent coordinate 788474; production supplier unspecified)",
      apd: false,
      role: "Front positive meniscus, convex toward object. Primary light-gathering element; high index (1.788) lowers Petzval sum per patent conditions (1)–(2).",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.788,
      vd: 47.4,
      fl: 86.0,
      glass: "S-LAH64 (OHARA catalog equivalent; patent coordinate 788474; same glass as L1)",
      apd: false,
      role: "Second positive meniscus, convex toward object. Steepest front curvature in front group; balances astigmatism against rear group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.6668,
      vd: 33.0,
      fl: -34.1,
      glass: "S-TIM39 (OHARA catalog equivalent; patent coordinate 667330; production supplier unspecified)",
      apd: false,
      role: "Negative meniscus, convex toward object. Deliberately low-index glass per condition (5): n3 < 1.67 to improve Petzval sum. R6 is primary SA corrector in front group.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: -22.9,
      glass: "SF6 (SCHOTT catalog equivalent; patent coordinate 805254; production supplier unspecified)",
      apd: false,
      cemented: "D1",
      role: "Negative element of cemented doublet, convex toward image. Largest single-surface SA contributor (I = −1.76 at R7). High-dispersion glass per condition (4): ν4 < 26 for chromatic correction.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 38.7,
      glass: "S-LAH66 (OHARA catalog equivalent; patent coordinate 773496; production supplier unspecified)",
      apd: false,
      cemented: "D1",
      role: "Positive element of cemented doublet, convex toward image. Nearly flat junction (R8 ≈ −1568 mm); Petzval contribution (+0.74) partially offsets L4's negative term.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.863,
      vd: 41.5,
      fl: 50.3,
      glass: "LASFN13 catalog equivalent (patent coordinate 863415; production supplier unspecified)",
      apd: false,
      role: "Rear positive meniscus, convex toward image. Highest-index glass in system (1.863) per condition (3): n6 > 1.85. R11 generates second-largest positive SA (I = +1.48), opposing R7.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      fl: 102.9,
      glass: "S-LAH66 (OHARA catalog equivalent; patent coordinate 773496; same glass as L5)",
      apd: false,
      role: "Rear biconvex, weak positive power. Final collecting element; R13 adds positive SA (+0.67) to balancing budget.",
    },
  ],

  surfaces: [
    // ---- Front group (converging) ----
    { label: "1", R: 41.184, d: 5.908, nd: 1.788, elemId: 1, sd: 22.5 },
    { label: "2", R: 298.388, d: 0.145, nd: 1.0, elemId: 0, sd: 21.5 },
    { label: "3", R: 27.334, d: 4.319, nd: 1.788, elemId: 2, sd: 19.0 },
    { label: "4", R: 42.617, d: 1.773, nd: 1.0, elemId: 0, sd: 16.6 },
    { label: "5", R: 84.266, d: 2.228, nd: 1.6668, elemId: 3, sd: 16.6 },
    { label: "6", R: 17.725, d: 7.797, nd: 1.0, elemId: 0, sd: 14.2 },

    // ---- Aperture stop (centered in D6 air gap) ----
    { label: "STO", R: 1e15, d: 7.797, nd: 1.0, elemId: 0, sd: 14.1 },

    // ---- Rear group (converging) ----
    // Cemented doublet: L4 (negative) + L5 (positive)
    { label: "7", R: -18.209, d: 1.646, nd: 1.80518, elemId: 4, sd: 14.2 },
    { label: "8", R: -1568.136, d: 7.007, nd: 1.7725, elemId: 5, sd: 17.0 },
    { label: "9", R: -29.365, d: 0.145, nd: 1.0, elemId: 0, sd: 17.7 },

    // L6 — rear positive meniscus
    { label: "10", R: -197.48, d: 5.036, nd: 1.863, elemId: 6, sd: 18.7 },
    { label: "11", R: -36.002, d: 0.145, nd: 1.0, elemId: 0, sd: 18.7 },

    // L7 — rear biconvex
    { label: "12", R: 118.686, d: 3.099, nd: 1.7725, elemId: 7, sd: 17.2 },
    { label: "13", R: -238.176, d: 35.384, nd: 1.0, elemId: 0, sd: 17.2 },
  ],

  asph: {},

  // Unit focusing: only BFD changes. The patent publishes no finite-distance state.
  // Calculated (paraxial): infinity BFD = 35.384 mm; a 0.5 m object-to-image distance needs a 6.154 mm extension
  // (magnification −0.123×), so the close gap is 41.538 mm.
  var: {
    "13": [35.384, 41.538],
  },
  varLabels: [["13", "BF"]],

  groups: [
    { text: "FRONT (1st–3rd)", fromSurface: "1", toSurface: "6" },
    { text: "REAR (4th–6th)", fromSurface: "7", toSurface: "13" },
  ],

  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  closeFocusM: 0.5,
  nominalFno: 1.2,
  fstopSeries: [1.2, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  // The published R4 / R5 / D4 bring the L2 and L3 rims almost into contact (see NOTE ON SEMI-DIAMETERS).
  gapSagFrac: 0.97,

  scFill: 0.55,
  yScFill: 0.55,
} satisfies LensDataInput;

export default LENS_DATA;
