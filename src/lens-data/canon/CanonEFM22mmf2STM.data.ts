import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║            LENS DATA — Canon EF-M 22mm f/2 STM                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: Canon US 8,854,747 B2, First Numerical Example.      ║
 * ║  Compact APS-C normal-wide prime, 7 elements / 6 groups.           ║
 * ║  Two aspherical surfaces on the final BAL42-family element.        ║
 * ║  Focus: patent-tabulated two-gap inner/floating focus state from   ║
 * ║  infinity to beta = -0.1x. The production 0.15 m MFD is not        ║
 * ║  extrapolated because the patent table stops at beta = -0.1x.      ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║  The patent does not publish clear-aperture semi-diameters. Values ║
 * ║  below are inferred from paraxial marginal/chief-ray envelopes,     ║
 * ║  Canon's block diagram proportions, the 43 mm filter diameter,      ║
 * ║  and renderer safety checks: sd/|R| < 0.90, front/rear element     ║
 * ║  SD ratio <= 1.25, edge thickness >= about 0.5 mm where possible,  ║
 * ║  aspherical rim slope limit, and signed cross-gap sag intrusion.   ║
 * ║  They should not be read as Canon production clear apertures.       ║
 * ║                                                                    ║
 * ║  No sensor cover glass, filters, or mechanical components are      ║
 * ║  included.                                                         ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "canon-efm-22mm-f2-stm",
  maker: "Canon",
  name: "CANON EF-M 22mm f/2 STM",
  subtitle: "US 8,854,747 B2 Example 1 — Canon / Shunji Iwamoto",
  specs: [
    "7 elements / 6 groups",
    "f = 21.79 mm design / 22 mm marketed",
    "F2.05 design / f/2 marketed",
    "image height 13.66 mm",
    "2 aspherical surfaces on one element",
  ],

  focalLengthMarketing: 22,
  focalLengthDesign: 21.7907,
  apertureMarketing: 2.0,
  apertureDesign: 2.05,
  lensMounts: ["canon-ef-m"],
  imageFormat: "aps-c",
  patentNumber: "US 8,854,747 B2",
  patentAuthors: ["Shunji Iwamoto"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2014,
  elementCount: 7,
  groupCount: 6,
  apertureBlades: 7,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Biconcave Negative",
      nd: 1.51742,
      vd: 52.4,
      fl: -17.00,
      glass: "S-NSL36 (OHARA, 517524)",
      role: "Front negative field-opening element for off-axis ray-angle and front-diameter control.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.7,
      fl: 14.22,
      glass: "S-LAH55V (OHARA, 835427)",
      role: "High-index positive element that restores convergence before the forward aperture stop.",
    },
    {
      id: 3,
      name: "L21p",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 8.44,
      glass: "S-LAH58 (OHARA, 883408)",
      role: "Positive member of the stop-adjacent cemented achromat.",
      cemented: "L21",
    },
    {
      id: 4,
      name: "L21n",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.78472,
      vd: 25.7,
      fl: -8.87,
      glass: "S-TIH11 (OHARA, 785257)",
      role: "Dense-flint negative member of the stop-adjacent cemented achromat.",
      cemented: "L21",
    },
    {
      id: 5,
      name: "L22",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.62588,
      vd: 35.7,
      fl: -14.05,
      glass: "S-TIM1 (OHARA, 626357, non-recommended)",
      role: "Strong negative meniscus for spherical-aberration and Petzval correction.",
    },
    {
      id: 6,
      name: "L23",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 14.59,
      glass: "S-LAH58 (OHARA, 883408)",
      role: "Rear positive relay element used for convergence and image-side telecentricity control.",
    },
    {
      id: 7,
      name: "L24",
      label: "Element 7",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: 74.37,
      glass: "S-BAL42 / L-BAL42 (OHARA, 583594)",
      role: "Weak positive final double-aspherical field-correction element.",
    },
  ],

  surfaces: [
    { label: "1", R: -30.023, d: 0.7, nd: 1.51742, elemId: 1, sd: 9.2 },
    { label: "2", R: 12.543, d: 0.93, nd: 1.0, elemId: 0, sd: 8.9 },
    { label: "3", R: 14.331, d: 3.26, nd: 1.83481, elemId: 2, sd: 8.7 },
    { label: "4", R: -61.934, d: 1.94, nd: 1.0, elemId: 0, sd: 7.5 },
    { label: "STO", R: 1e15, d: 3.14, nd: 1.0, elemId: 0, sd: 5.44 },
    { label: "6", R: 19.402, d: 3.98, nd: 1.883, elemId: 3, sd: 7.65 },
    { label: "7", R: -10.941, d: 0.8, nd: 1.78472, elemId: 4, sd: 6.65 },
    { label: "8", R: 19.741, d: 3.26, nd: 1.0, elemId: 0, sd: 5.55 },
    { label: "9", R: -8.483, d: 0.8, nd: 1.62588, elemId: 5, sd: 7.4 },
    { label: "10", R: -247.157, d: 0.25, nd: 1.0, elemId: 0, sd: 8.9 },
    { label: "11", R: 59.414, d: 5.6, nd: 1.883, elemId: 6, sd: 10.55 },
    { label: "12", R: -15.716, d: 0.15, nd: 1.0, elemId: 0, sd: 10.6 },
    { label: "13A", R: -65.386, d: 2.32, nd: 1.58313, elemId: 7, sd: 10.95 },
    { label: "14A", R: -26.414, d: 14.2, nd: 1.0, elemId: 0, sd: 13.0 },
  ],

  asph: {
    "13A": {
      K: 0,
      A4: -1.06417e-4,
      A6: -2.68284e-7,
      A8: -5.69512e-9,
      A10: -5.83577e-14,
      A12: -4.69051e-14,
      A14: 0,
    },
    "14A": {
      K: 0,
      A4: 6.63637e-6,
      A6: -1.81488e-7,
      A8: -8.38345e-10,
      A10: -2.73326e-12,
      A12: 3.03992e-14,
      A14: 0,
    },
  },

  var: {
    STO: [3.14, 2.25],
    "14A": [14.2, 16.47],
  },
  varLabels: [
    ["STO", "S"],
    ["14A", "BF"],
  ],

  groups: [
    { text: "L1", fromSurface: "1", toSurface: "4" },
    { text: "L2", fromSurface: "6", toSurface: "14A" },
  ],

  doublets: [{ text: "L21", fromSurface: "6", toSurface: "8" }],

  closeFocusM: 0.2217,
  focusDescription:
    "Patent-tabulated two-gap inner/floating focus from infinity to beta = -0.1x; production 0.15 m MFD is not extrapolated.",

  nominalFno: 2.0,
  maxFstop: 22,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16, 22],

  scFill: 0.58,
  yScFill: 0.52,
} satisfies LensDataInput;

export default LENS_DATA;
