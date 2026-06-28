import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA - AGFA COLOR-MAGNOLAR II 100mm f/4.5
 *
 * Data source: GB 775,944, sole numerical example, Agfa Camera-Werk AG.
 * Five-element / three-group Heliar-type enlarger objective with all-spherical surfaces.
 *
 * Scaling: the patent prescription is normalized to f = 1.00. This file scales every
 * radius, axial spacing, BFD, and estimated semi-diameter by 100x for the requested
 * 100 mm dataset. The patent text also says the accompanying drawing is a section of
 * an objective of focal length 200 mm; the tabulated prescription itself is normalized.
 *
 * Stop: GB 775,944 does not tabulate the diaphragm position or physical stop diameter.
 * The STO surface is inferred from the patent figure as lying in the l2 air gap between
 * r5 and r6 and is placed at the midpoint of that gap for rendering. Its semi-diameter
 * is paraxially computed so the entrance pupil is 100 / (2 * 4.5) = 11.111 mm.
 *
 * Semi-diameters: the patent omits clear apertures. Values here are conservative
 * renderer estimates based on the f/4.5 marginal ray plus mechanical clearance, then
 * checked for edge thickness, rim slope, and cross-gap sag intrusion. They are not
 * production mechanical measurements and should not be used as coverage data.
 *
 * Focus: the optical cell has no internal focus. Enlarger focusing is by bellows/column
 * motion. The focus variable is a renderer-friendly unit-focus stand-in: BF changes
 * from infinity focus to a 1:1 finite-conjugate reference by adding one EFL.
 */

const LENS_DATA = {
  /* -- Identity -- */
  key: "agfa-color-magnolar-ii-100f45",
  maker: "Agfa",
  name: "AGFA COLOR-MAGNOLAR II 100mm f/4.5",
  subtitle: "GB 775,944 sole example - Agfa Camera-Werk AG",
  specs: ["5 ELEMENTS / 3 GROUPS", "f = 100.0 mm (scaled)", "F/4.5", "ALL-SPHERICAL", "ENLARGER OBJECTIVE"],

  focalLengthMarketing: 100,
  focalLengthDesign: 100.00154,
  apertureMarketing: 4.5,
  apertureDesign: 4.5,
  patentYear: 1957,
  elementCount: 5,
  groupCount: 3,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.3,
      fl: 33.7859,
      glass: "N-SK16 (Schott; SK16 legacy match)",
      nC: 1.61727,
      nF: 1.62756,
      ng: 1.63312,
      apd: false,
      cemented: "D1",
      role: "Front positive crown of the first cemented Heliar doublet.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Weakly Biconcave Negative",
      nd: 1.56138,
      vd: 45.3,
      fl: -93.8423,
      glass: "LLF4 class (Sumita legacy catalog; Schott-type)",
      nC: 1.55768,
      nF: 1.57008,
      ng: 1.57711,
      apd: false,
      cemented: "D1",
      role: "Higher-dispersion negative partner in the front achromat.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.54041,
      vd: 50.9,
      fl: -32.0169,
      glass: "Unmatched (540/509 crown-flint-boundary glass; no public catalog match located)",
      apd: false,
      role: "Central negative singlet controlling Heliar field curvature and finite-conjugate symmetry.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Weakly Biconcave Negative",
      nd: 1.5231,
      vd: 50.9,
      fl: -47.04,
      glass: "KF5 class (Sumita legacy catalog; Schott-type)",
      nC: 1.52001,
      nF: 1.53028,
      ng: 1.53599,
      apd: false,
      cemented: "D2",
      role: "Low-index negative partner in the rear achromat.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.3,
      fl: 26.7826,
      glass: "N-SK16 (Schott; SK16 legacy match)",
      nC: 1.61727,
      nF: 1.62756,
      ng: 1.63312,
      apd: false,
      cemented: "D2",
      role: "Rear positive crown of the second cemented Heliar doublet.",
    },
  ],

  surfaces: [
    { label: "1", R: 31.183, d: 7.157, nd: 1.62041, elemId: 1, sd: 12.1 },
    { label: "2", R: -58.3253, d: 2.0399, nd: 1.56138, elemId: 2, sd: 11.8 },
    { label: "3", R: 551.2448, d: 4.7679, nd: 1.0, elemId: 0, sd: 11.6 },
    { label: "4", R: -53.9667, d: 1.1064, nd: 1.54041, elemId: 3, sd: 9.4 },
    { label: "5", R: 25.6505, d: 3.7218, nd: 1.0, elemId: 0, sd: 9.4 },
    { label: "STO", R: 1e15, d: 3.7218, nd: 1.0, elemId: 0, sd: 8.8657 },
    { label: "6", R: -613.6018, d: 1.1064, nd: 1.5231, elemId: 4, sd: 10.4 },
    { label: "7", R: 25.6505, d: 6.5383, nd: 1.62041, elemId: 5, sd: 10.8 },
    { label: "8", R: -42.5729, d: 82.649119, nd: 1.0, elemId: 0, sd: 11.4 },
  ],

  asph: {},

  var: {
    "8": [82.649119, 182.650659],
  },

  varLabels: [["8", "BF"]],

  groups: [
    { text: "GI", fromSurface: "1", toSurface: "3" },
    { text: "GII", fromSurface: "4", toSurface: "5" },
    { text: "GIII", fromSurface: "6", toSurface: "8" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  closeFocusM: 0.4,
  focusDescription:
    "Fixed enlarger objective. Focus is by moving the whole lens assembly; the close state is a 1:1 reference, not a manufacturer MFD.",

  nominalFno: 4.5,
  fstopSeries: [4.5, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  scFill: 0.48,
  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
