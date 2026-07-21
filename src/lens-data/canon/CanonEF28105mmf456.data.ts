import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║          LENS DATA — CANON EF 28-105mm f/4-5.6                         ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2004/0223070 A1, Numerical Example 4 (Shirasuna).      ║
 * ║  Production correlation: Canon EF 28-105mm f/4-5.6 and its USM sibling.  ║
 * ║  Their official block diagrams match Example 4 at published resolution;   ║
 * ║  the patent prescription is used unscaled, but exact production identity   ║
 * ║  is not claimed.                                                           ║
 * ║                                                                            ║
 * ║  Physical construction: 10 elements / 9 air-spaced groups, including     ║
 * ║  the patent's final neutral cover plate L5. The data model omits that     ║
 * ║  protective plate under the corpus rule for cover glass. Its optical      ║
 * ║  path is folded into the final air BFD, so the modeled array contains     ║
 * ║  nine powered elements while elementCount retains Canon's physical 10.    ║
 * ║                                                                            ║
 * ║  Zoom gaps: D3, D9, D14, and the folded rear BFD at surface 18A.          ║
 * ║  Focus gaps: D3 and D9; L2 moves rigidly objectward and D3 + D9 is        ║
 * ║  conserved at each zoom position. Close-focus endpoints are independent   ║
 * ║  paraxial solutions for Canon's 0.48 m MFD, measured from the image plane.║
 * ║                                                                            ║
 * ║  APERTURE: Canon publishes f/4-5.6 endpoints. The 50.07 mm f/5.0 entry    ║
 * ║  is an explicitly modeled intermediate control value, not a separately    ║
 * ║  published product specification.                                         ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: The patent omits clear apertures. SDs are guided by        ║
 * ║  0.6-field marginal/chief-ray envelopes, then constrained by geometry and  ║
 * ║  checked for on-axis marginal clearance at the patent design apertures.    ║
 * ║  Edge thickness >= 0.5 mm, element SD ratio <= 1.25, sd/|R| < 0.90, and   ║
 * ║  signed cross-gap sag intrusion <= 90%. Not factory dimensions.           ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "canon-ef-28-105mm-f4-5.6",
  maker: "Canon",
  name: "CANON EF 28-105mm f/4-5.6",
  subtitle: "US 2004/0223070 A1 — Numerical Example 4 (strong production correlation)",
  specs: [
    "10 ELEMENTS / 9 GROUPS",
    "PATENT 28.91-101.32mm",
    "MARKETED 28-105mm f/4-5.6",
    "1 ASPHERICAL SURFACE",
    "L2 INNER FOCUS",
  ],

  focalLengthMarketing: [28, 105],
  focalLengthDesign: [28.906826, 101.323296],
  apertureMarketing: 4,
  apertureDesign: 3.95,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2004/0223070 A1",
  patentAuthors: ["Takashi Shirasuna"],
  patentAssignees: [],
  patentYear: 2004,
  elementCount: 10,
  groupCount: 9,
  apertureBlades: 6,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element L11",
      type: "Biconvex Positive",
      nd: 1.696797,
      vd: 55.5,
      fl: 59.618004,
      glass: "S-LAL14 (OHARA catalog equivalent; vendor inferred, 697-555)",
      nC: 1.69297,
      nF: 1.70552,
      ng: 1.71234,
      role: "Positive front member of the cemented first zoom unit.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element L12",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.9,
      fl: -140.766816,
      glass: "PBH53 / PBH53W (OHARA historical equivalent; vendor inferred, 847-239)",
      nC: 1.83653,
      nF: 1.87198,
      ng: 1.89382,
      role: "Dense-flint negative member of the cemented front achromat.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L21",
      label: "Element L21",
      type: "Negative Meniscus",
      nd: 1.743198,
      vd: 49.3,
      fl: -21.553528,
      glass: "S-LAM60 (OHARA catalog equivalent; vendor inferred, 743-493)",
      nC: 1.73865,
      nF: 1.75372,
      ng: 1.76205,
      role: "Leading negative member of the high-power L2 variator/focus unit.",
    },
    {
      id: 4,
      name: "L22",
      label: "Element L22",
      type: "Biconcave Negative",
      nd: 1.712995,
      vd: 53.9,
      fl: -27.862292,
      glass: "S-LAL8 (OHARA catalog equivalent; vendor inferred, 713-539)",
      nC: 1.70897,
      nF: 1.72221,
      ng: 1.72943,
      role: "Second negative member of L2; air-spaced from the positive rear member.",
    },
    {
      id: 5,
      name: "L23",
      label: "Element L23",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.9,
      fl: 29.525715,
      glass: "PBH53 / PBH53W (OHARA historical equivalent; vendor inferred, 847-239)",
      nC: 1.83653,
      nF: 1.87198,
      ng: 1.89382,
      role: "Positive, high-dispersion rear member that balances the two negative L2 elements.",
    },
    {
      id: 6,
      name: "L31",
      label: "Element L31",
      type: "Biconvex Positive",
      nd: 1.696797,
      vd: 55.5,
      fl: 33.78886,
      glass: "S-LAL14 (OHARA catalog equivalent; vendor inferred, 697-555)",
      nC: 1.69297,
      nF: 1.70552,
      ng: 1.71234,
      role: "Principal positive member of the L3 compensator immediately behind the stop.",
    },
    {
      id: 7,
      name: "L32",
      label: "Element L32",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      fl: -45.391699,
      glass: "PBH53 / PBH53W (OHARA historical equivalent; vendor inferred, 847-239)",
      nC: 1.83653,
      nF: 1.87198,
      ng: 1.89382,
      role: "Negative chromatic partner in the net-positive L3 compensator.",
    },
    {
      id: 8,
      name: "L41",
      label: "Element L41",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 29.597915,
      glass: "S-FSL5 (OHARA catalog equivalent; vendor inferred, 487-702)",
      nC: 1.48534,
      nF: 1.49228,
      ng: 1.49596,
      role: "Low-dispersion positive element supplying most of L4's net positive power.",
    },
    {
      id: 9,
      name: "L42",
      label: "Element L42",
      type: "Negative Meniscus (rear asphere)",
      nd: 1.58306,
      vd: 30.2,
      fl: -117.511869,
      glass: "Unmatched (polycarbonate-class optical resin inferred from nd=1.583060, νd=30.2)",
      role: "Moldable negative rear member of L4; surface 18A is the sole asphere.",
    },
  ],

  surfaces: [
    { label: "1", R: 55.383, d: 7.43, nd: 1.696797, elemId: 1, sd: 20.8 },
    { label: "2", R: -157.062, d: 1.8, nd: 1.84666, elemId: 2, sd: 20.0 },
    { label: "3", R: 496.755, d: 3.39, nd: 1, elemId: 0, sd: 19.6 },

    { label: "4", R: 204.758, d: 1.4, nd: 1.743198, elemId: 3, sd: 11.4 },
    { label: "5", R: 14.813, d: 5.47, nd: 1, elemId: 0, sd: 10.8 },
    { label: "6", R: -57.982, d: 1.1, nd: 1.712995, elemId: 4, sd: 9.3 },
    { label: "7", R: 30.458, d: 0.12, nd: 1, elemId: 0, sd: 9.3 },
    { label: "8", R: 23.898, d: 3.39, nd: 1.84666, elemId: 5, sd: 8.8 },
    { label: "9", R: 507.665, d: 19.23, nd: 1, elemId: 0, sd: 8.6 },

    { label: "STO", R: 1e15, d: 0.4, nd: 1, elemId: 0, sd: 7.0 },

    { label: "11", R: 36.033, d: 2.42, nd: 1.696797, elemId: 6, sd: 7.05 },
    { label: "12", R: -66.055, d: 0.42, nd: 1, elemId: 0, sd: 7.05 },
    { label: "13", R: -33.405, d: 1, nd: 1.84666, elemId: 7, sd: 7.05 },
    { label: "14", R: -258.92, d: 7.25, nd: 1, elemId: 0, sd: 7.05 },

    { label: "15", R: 18.494, d: 3.74, nd: 1.48749, elemId: 8, sd: 9.3 },
    { label: "16", R: -61.289, d: 9.58, nd: 1, elemId: 0, sd: 10.0 },
    { label: "17", R: -27.49, d: 1.8, nd: 1.58306, elemId: 9, sd: 10.2 },
    { label: "18A", R: -47.017, d: 39.87598221128, nd: 1, elemId: 0, sd: 10.5 },
  ],

  asph: {
    "18A": {
      K: -2.18133,
      A4: 5.67081e-5,
      A6: 3.13412e-7,
      A8: -4.03611e-10,
      A10: 2.29649e-12,
      A12: 0,
      A14: 0,
    },
  },

  zoomPositions: [28.9, 50.07, 101.35],
  zoomLabels: ["28 mm", "105 mm"],
  zoomStep: 0.004,
  nominalFno: [4, 5, 5.6],

  var: {
    "3": [
      [3.39, 1.062392316796],
      [13.42, 10.305434876154],
      [33.36, 26.939257379094],
    ],
    "9": [
      [19.23, 21.557607683204],
      [10.24, 13.354565123846],
      [2.62, 9.040742620906],
    ],
    "14": [
      [7.25, 7.25],
      [3.27, 3.27],
      [0.79, 0.79],
    ],
    "18A": [
      [39.87598221128, 39.87598221128],
      [52.202276564992, 52.202276564992],
      [64.272505454339, 64.272505454339],
    ],
  },
  varLabels: [
    ["3", "D3 / L1-L2"],
    ["9", "D9 / L2-STO"],
    ["14", "D14 / L3-L4"],
    ["18A", "BF / L5 folded"],
  ],

  focusDescription:
    "Inner focus by rigid translation of negative unit L2. In the cover-plate-folded renderer model at Canon's 0.48 m MFD, L2 moves objectward by 2.328 mm at wide, 3.115 mm at 50.07 mm, and 6.421 mm at tele; D3 decreases while D9 increases by the same amount.",

  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "3" },
    { text: "L2 (-) / FOCUS", fromSurface: "4", toSurface: "9" },
    { text: "L3 (+) / STOP CARRIER", fromSurface: "11", toSurface: "14" },
    { text: "L4 (+) / ASPH", fromSurface: "15", toSurface: "18A" },
  ],
  doublets: [{ text: "D1", fromSurface: "1", toSurface: "3" }],

  closeFocusM: 0.48,
  fstopSeries: [4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,

  scFill: 0.7,
  yScFill: 0.72,
} satisfies LensDataInput;

export default LENS_DATA;
