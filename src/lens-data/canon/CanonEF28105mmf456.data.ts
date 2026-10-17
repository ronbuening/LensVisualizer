import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
  schema: 2,
  key: "canon-ef-28-105mm-f4-56",
  maker: "Canon",
  name: "CANON EF 28-105mm f/4-5.6",
  subtitle: "US 2004/0223070 A1 — Numerical Example 4 (strong production correlation)",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "10 ELEMENTS / 9 GROUPS",
      "PATENT 28.91-101.32mm",
      "MARKETED 28-105mm f/4-5.6",
      "1 ASPHERICAL SURFACE",
      "L2 INNER FOCUS",
    ],
    elementCount: 10,
    groupCount: 9,
    focalLengthMm: { marketing: [28, 105], design: [28.906826, 101.323296] },
    fNumber: { marketing: 4, design: 3.95 },
  },

  source: {
    patentNumber: "US 2004/0223070 A1",
    patentYear: 2004,
    authors: ["Takashi Shirasuna"],
    assignees: ["Canon Inc."],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element L11",
      type: "Biconvex Positive",
      nd: 1.696797,
      vd: 55.5,
      focalLengthMm: 59.618004,
      glass: "S-LAL14 (OHARA catalog equivalent; vendor inferred, 697-555)",
      role: "Positive front member of the cemented first zoom unit.",
      cemented: "D1",
      nC: 1.69297,
      nF: 1.70552,
      ng: 1.71234,
    },
    {
      id: 2,
      name: "L12",
      label: "Element L12",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: -140.766816,
      glass: "PBH53 / PBH53W (OHARA historical equivalent; vendor inferred, 847-239)",
      role: "Dense-flint negative member of the cemented front achromat.",
      cemented: "D1",
      nC: 1.83653,
      nF: 1.87198,
      ng: 1.89382,
    },
    {
      id: 3,
      name: "L21",
      label: "Element L21",
      type: "Negative Meniscus",
      nd: 1.743198,
      vd: 49.3,
      focalLengthMm: -21.553528,
      glass: "S-LAM60 (OHARA catalog equivalent; vendor inferred, 743-493)",
      role: "Leading negative member of the high-power L2 variator/focus unit.",
      nC: 1.73865,
      nF: 1.75372,
      ng: 1.76205,
    },
    {
      id: 4,
      name: "L22",
      label: "Element L22",
      type: "Biconcave Negative",
      nd: 1.712995,
      vd: 53.9,
      focalLengthMm: -27.862292,
      glass: "S-LAL8 (OHARA catalog equivalent; vendor inferred, 713-539)",
      role: "Second negative member of L2; air-spaced from the positive rear member.",
      nC: 1.70897,
      nF: 1.72221,
      ng: 1.72943,
    },
    {
      id: 5,
      name: "L23",
      label: "Element L23",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: 29.525715,
      glass: "PBH53 / PBH53W (OHARA historical equivalent; vendor inferred, 847-239)",
      role: "Positive, high-dispersion rear member that balances the two negative L2 elements.",
      nC: 1.83653,
      nF: 1.87198,
      ng: 1.89382,
    },
    {
      id: 6,
      name: "L31",
      label: "Element L31",
      type: "Biconvex Positive",
      nd: 1.696797,
      vd: 55.5,
      focalLengthMm: 33.78886,
      glass: "S-LAL14 (OHARA catalog equivalent; vendor inferred, 697-555)",
      role: "Principal positive member of the L3 compensator immediately behind the stop.",
      nC: 1.69297,
      nF: 1.70552,
      ng: 1.71234,
    },
    {
      id: 7,
      name: "L32",
      label: "Element L32",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: -45.391699,
      glass: "PBH53 / PBH53W (OHARA historical equivalent; vendor inferred, 847-239)",
      role: "Negative chromatic partner in the net-positive L3 compensator.",
      nC: 1.83653,
      nF: 1.87198,
      ng: 1.89382,
    },
    {
      id: 8,
      name: "L41",
      label: "Element L41",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 29.597915,
      glass: "S-FSL5 (OHARA catalog equivalent; vendor inferred, 487-702)",
      role: "Low-dispersion positive element supplying most of L4's net positive power.",
      nC: 1.48534,
      nF: 1.49228,
      ng: 1.49596,
    },
    {
      id: 9,
      name: "L42",
      label: "Element L42",
      type: "Negative Meniscus (rear asphere)",
      nd: 1.58306,
      vd: 30.2,
      focalLengthMm: -117.511869,
      glass: "Unmatched (polycarbonate-class optical resin inferred from nd=1.583060, νd=30.2)",
      role: "Moldable negative rear member of L4; surface 18A is the sole asphere.",
    },
  ],

  surfaces: [
    { label: "1", R: 55.383, d: 7.43, sd: 20.8, medium: 1 },
    { label: "2", R: -157.062, d: 1.8, sd: 20.0, medium: 2 },
    { label: "3", R: 496.755, sd: 19.6 },

    { label: "4", R: 204.758, d: 1.4, sd: 11.4, medium: 3 },
    { label: "5", R: 14.813, d: 5.47, sd: 10.8 },
    { label: "6", R: -57.982, d: 1.1, sd: 9.3, medium: 4 },
    { label: "7", R: 30.458, d: 0.12, sd: 9.3 },
    { label: "8", R: 23.898, d: 3.39, sd: 8.8, medium: 5 },
    { label: "9", R: 507.665, sd: 8.6 },

    { label: "STO", R: "flat", d: 0.4 },

    { label: "11", R: 36.033, d: 2.42, sd: 7.05, medium: 6 },
    { label: "12", R: -66.055, d: 0.42, sd: 7.05 },
    { label: "13", R: -33.405, d: 1, sd: 7.05, medium: 7 },
    { label: "14", R: -258.92, sd: 7.05 },

    { label: "15", R: 18.494, d: 3.74, sd: 9.3, medium: 8 },
    { label: "16", R: -61.289, d: 9.58, sd: 10.0 },
    { label: "17", R: -27.49, d: 1.8, sd: 10.2, medium: 9 },
    {
      label: "18A",
      R: -47.017,
      sd: 10.5,
      asphere: { K: -2.18133, A4: 5.67081e-5, A6: 3.13412e-7, A8: -4.03611e-10, A10: 2.29649e-12 },
    },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 28.9, nominalFNumber: 4, label: "28 mm" },
      { focalLengthMm: 50.07, nominalFNumber: 5 },
      { focalLengthMm: 101.35, nominalFNumber: 5.6, label: "105 mm" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.48,
    description:
      "Inner focus by rigid translation of negative unit L2. In the cover-plate-folded renderer model at Canon's 0.48 m MFD, L2 moves objectward by 2.328 mm at wide, 3.115 mm at 50.07 mm, and 6.421 mm at tele; D3 decreases while D9 increases by the same amount.",
  },

  gaps: {
    "3": {
      label: "D3 / L1-L2",
      values: [
        [3.39, 1.062392316796],
        [13.42, 10.305434876154],
        [33.36, 26.939257379094],
      ],
    },
    "9": {
      label: "D9 / L2-STO",
      values: [
        [19.23, 21.557607683204],
        [10.24, 13.354565123846],
        [2.62, 9.040742620906],
      ],
    },
    "14": {
      label: "D14 / L3-L4",
      values: [
        [7.25, 7.25],
        [3.27, 3.27],
        [0.79, 0.79],
      ],
    },
    "18A": {
      label: "BF / L5 folded",
      values: [
        [39.87598221128, 39.87598221128],
        [52.202276564992, 52.202276564992],
        [64.272505454339, 64.272505454339],
      ],
    },
  },

  aperture: { fStops: [4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 6 },

  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "3" },
    { text: "L2 (-) / FOCUS", fromSurface: "4", toSurface: "9" },
    { text: "L3 (+) / STOP CARRIER", fromSurface: "11", toSurface: "14" },
    { text: "L4 (+) / ASPH", fromSurface: "15", toSurface: "18A" },
  ],
  doublets: [{ text: "D1", fromSurface: "1", toSurface: "3" }],

  layout: { scFill: 0.7, yScFill: 0.72 },
} satisfies LensDataV2Input;

export default LENS_DATA;
