import type { LensDataInput } from "../../types/optics.js";

/**
 * Canon New FD 100mm f/2
 *
 * Data source: JP S53-133028 (特開昭53-133028), sole worked example,
 * filed 1977-04-25 by Canon Inc. and published 1978-11-20.
 *
 * The patent prescription is normalized to f = 1. All radii, thicknesses,
 * back focus, and estimated semi-diameters below are scaled ×100 to the
 * production 100 mm class lens. The rounded prescription computes to
 * EFL = 100.003 mm and BFD = 42.700 mm by independent y-nu paraxial trace.
 *
 * 6 elements / 4 groups, all spherical. The aperture stop is not listed as
 * a separate numerical surface in the patent table; it is placed at the
 * midpoint of patent gap d7 between surfaces 7 and 8 for visualization and
 * f-number tracing. With that placement, a physical stop semi-diameter of
 * 12.2901 mm gives a 25.0 mm entrance-pupil semi-diameter at f/2.
 *
 * Semi-diameters are not tabulated in the patent. They are conservative
 * clear-aperture estimates from the f/2 marginal ray, reduced off-axis
 * diagram field, the patent Fig. 1 proportions, a 52 mm production filter
 * thread constraint, edge-thickness checks, and cross-gap sag checks.
 *
 * Focus model: unit extension from the infinity prescription. The patent
 * gives no close-focus prescription or floating-group table, so only the
 * final BFD is varied: 42.700 mm at infinity and 55.142 mm at the 1.0 m
 * manufacturer MFD, giving a computed paraxial magnification of 0.124×.
 */

const LENS_DATA = {
  key: "canon-new-fd-100mm-f2",
  maker: "Canon",
  name: "CANON NEW FD 100mm f/2",
  subtitle: "JP S53-133028 — Canon / Tsuji Sadahiko",
  specs: ["6 elements / 4 groups", "f ≈ 100.00 mm", "f/2", "2ω = 24°", "all spherical"],

  focalLengthMarketing: 100,
  focalLengthDesign: 100.003,
  apertureMarketing: 2,
  apertureDesign: 2,
  lensMounts: ["canon-fd"],
  imageFormat: "135-full-frame",
  patentNumber: "JP S53-133028",
  patentAuthors: ["Sadahiko Tsuji"],
  patentAssignees: ["Canon Inc."],
  patentYear: 1978,
  elementCount: 6,
  groupCount: 4,
  apertureBlades: 8,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.62299,
      vd: 58.2,
      fl: 94.12,
      glass: "S-BSM15 (OHARA)",
      nC: 1.61974,
      nF: 1.63045,
      ng: 1.6363,
      role: "Front positive meniscus collector; most of the first-group positive power is on surface 1.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.60311,
      vd: 60.7,
      fl: 80.76,
      glass: "S-BSM14 (OHARA)",
      nC: 1.60008,
      nF: 1.61002,
      ng: 1.61541,
      cemented: "D1",
      role: "Positive crown element of the front cemented achromatizing group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.72151,
      vd: 29.2,
      fl: -129.38,
      glass: "S-TIH18 (OHARA)",
      nC: 1.71437,
      nF: 1.73905,
      ng: 1.75399,
      cemented: "D1",
      role: "High-dispersion negative partner in the front cemented doublet.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.1,
      fl: -38.28,
      glass: "S-TIM25 (OHARA)",
      nC: 1.66661,
      nF: 1.68756,
      ng: 1.70011,
      role: "Separated strong negative element before the stop; principal field-curvature and track-shortening contributor.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.5927,
      vd: 35.3,
      fl: -94.67,
      glass: "S-FTM16 (OHARA)",
      nC: 1.58779,
      nF: 1.60458,
      ng: 1.61454,
      cemented: "D2",
      role: "Negative front element of the rear cemented doublet.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 40.9,
      fl: 40.05,
      glass: "S-LAH53 (OHARA)",
      nC: 1.80025,
      nF: 1.81994,
      ng: 1.83117,
      cemented: "D2",
      role: "High-index positive rear element providing the main positive power in the final group.",
    },
  ],

  surfaces: [
    { label: "1", R: 56.42, d: 7.79, nd: 1.62299, elemId: 1, sd: 26.0 },
    { label: "2", R: 1414.79, d: 0.12, nd: 1.0, elemId: 0, sd: 25.0 },
    { label: "3", R: 47.25, d: 15.29, nd: 1.60311, elemId: 2, sd: 25.0 },
    { label: "4", R: 1386.14, d: 6.49, nd: 1.72151, elemId: 3, sd: 21.0 },
    { label: "5", R: 87.29, d: 4.3, nd: 1.0, elemId: 0, sd: 20.0 },
    { label: "6", R: -456.03, d: 3.8, nd: 1.6727, elemId: 4, sd: 17.5 },
    { label: "7", R: 27.38, d: 10.99, nd: 1.0, elemId: 0, sd: 17.0 },
    { label: "STO", R: 1e15, d: 10.99, nd: 1.0, elemId: 0, sd: 12.2901 },
    { label: "8", R: 288.03, d: 2.5, nd: 1.5927, elemId: 5, sd: 15.0 },
    { label: "9", R: 46.81, d: 5.1, nd: 1.8061, elemId: 6, sd: 15.0 },
    { label: "10", R: -99.01, d: 42.7, nd: 1.0, elemId: 0, sd: 15.5 },
  ],

  asph: {},

  var: {
    "10": [42.7, 55.1418],
  },
  varLabels: [["10", "BF"]],
  focusDescription:
    "Unit-extension focus model from the infinity prescription; the patent gives no separate close-focus or floating-group table.",

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "7" },
    { text: "G4", fromSurface: "8", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
  ],

  closeFocusM: 1.0,
  nominalFno: 2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,

  scFill: 0.68,
  yScFill: 0.55,
  offAxisFieldFrac: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
