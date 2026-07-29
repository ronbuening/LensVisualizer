import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — PENTAX SMC DA 17-70mm f/4 AL [IF] SDM                        ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: US 7,804,652 B2, Embodiment 4 (Masakazu Saori / Hoya).            ║
 * ║  Unscaled patent prescription: 17.50 / 35.00 / 67.89 mm at f/4.1.          ║
 * ║  Five functional zoom groups (+ − + − +); 17 physical elements in          ║
 * ║  12 air-separated assemblies; two hybrid resin aspherical elements.        ║
 * ║                                                                            ║
 * ║  MATERIAL MODEL: The two bonded resin layers are separate refractive        ║
 * ║  records, so `elements` contains 19 material layers while `elementCount`    ║
 * ║  retains the patent/manufacturer physical count of 17.                      ║
 * ║                                                                            ║
 * ║  ZOOM MODEL: Published infinity states only. Variable gaps are D5, D17,     ║
 * ║  D22, D25, and BFD. D22 is split at the published stop location:           ║
 * ║  surface 22 → STO = 1.41 mm; STO → surface 23 = D22 − 1.41 mm.              ║
 * ║  The patent describes a G2 imageward/objectward U-turn, but its turning     ║
 * ║  point is not tabulated; no extra control point is invented.                ║
 * ║                                                                            ║
 * ║  FOCUS STATUS: NO_INTERNAL_RECONSTRUCTION. The production lens is           ║
 * ║  inner-focusing, but the patent gives no close-focus prescription or        ║
 * ║  mechanism constraints. Every zoom-state focus pair is therefore identical.║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: Not published. Figure 13 supplies the relative element      ║
 * ║  proportions; exact meridional tracing of the full-field chief ray, full     ║
 * ║  axial marginal ray, and default 0.6-field bundle at all zoom states sets    ║
 * ║  the clearance floor. The result is checked for edge thickness, actual rim  ║
 * ║  slope, cross-gap intrusion, and off-axis containment. The STO              ║
 * ║  sd stores the exact wide-state f/4.1 result; runtime zoom construction      ║
 * ║  resolves the larger middle/tele stop openings from nominalFno.              ║
 * ║                                                                            ║
 * ║  No scale factor, cover glass, filter, dummy plane, or mechanical part      ║
 * ║  is included. The patent publishes no nC, nF, ng, or dPgF data.             ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "pentax-da-17-70mm-f4-al-if-sdm",
  maker: "Pentax",
  name: "PENTAX SMC DA 17-70mm f/4 AL [IF] SDM",
  subtitle: "US 7,804,652 B2 EMBODIMENT 4 — STRONG PRODUCTION CORRELATION",
  specs: [
    "17 ELEMENTS / 12 GROUPS",
    "DESIGN 17.50–67.89 mm",
    "F/4.1 MODELED",
    "2ω = 80.6°–23.2°",
    "2 HYBRID ASPHERICAL ELEMENTS",
  ],

  focalLengthMarketing: [17, 70],
  focalLengthDesign: [17.5006, 67.8703],
  apertureMarketing: 4,
  apertureDesign: 4.1,
  lensMounts: ["pentax-k"],
  imageFormat: "aps-c",
  patentNumber: "US 7,804,652 B2",
  patentAuthors: ["Masakazu Saori"],
  patentAssignees: ["Hoya Corporation"],
  patentYear: 2010,
  elementCount: 17,
  groupCount: 12,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus, convex to object",
      nd: 1.84666,
      vd: 23.8,
      fl: -172.3482,
      glass: "847238 — dense flint (vendor unresolved)",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus, convex to object",
      nd: 1.713,
      vd: 53.9,
      fl: 138.6423,
      glass: "713539 — LAC8/S-LAL8-class lanthanum crown (code equivalent)",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus, convex to object",
      nd: 1.7725,
      vd: 49.6,
      fl: 115.278,
      glass: "773496 — high-index lanthanum flint (vendor unresolved)",
    },
    {
      id: 4,
      name: "L4r",
      label: "Element 4 resin layer",
      type: "Hybrid Resin Negative Meniscus (1× Asph)",
      nd: 1.527,
      vd: 43.7,
      fl: -341.4156,
      glass: "Unmatched (hybrid aspherical resin nd=1.52700, vd=43.7)",
      cemented: "H1",
    },
    {
      id: 5,
      name: "L4g",
      label: "Element 4 glass substrate",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      fl: -21.8019,
      glass: "804466 — high-index lanthanum flint (vendor unresolved)",
      cemented: "H1",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      fl: -34.721,
      glass: "804466 — high-index lanthanum flint (vendor unresolved)",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.2,
      fl: -79.9033,
      glass: "834372 — dense lanthanum flint (vendor unresolved)",
    },
    {
      id: 8,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.3,
      fl: 26.5302,
      glass: "593353 — flint (vendor unresolved)",
    },
    {
      id: 9,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      fl: -22.5496,
      glass: "804466 — high-index lanthanum flint (vendor unresolved)",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.78472,
      vd: 25.7,
      fl: 41.1325,
      glass: "785257 — dense flint (vendor unresolved)",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.56732,
      vd: 42.8,
      fl: 32.9268,
      glass: "567428 — light flint (vendor unresolved)",
    },
    {
      id: 12,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.2,
      fl: 23.48,
      glass: "589612 — barium crown (vendor unresolved)",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      fl: -25.579,
      glass: "805254 — dense flint (vendor unresolved)",
      cemented: "D3",
    },
    {
      id: 14,
      name: "L13",
      label: "Element 13",
      type: "Positive Meniscus, convex to image",
      nd: 1.84666,
      vd: 23.8,
      fl: 28.2004,
      glass: "847238 — dense flint (vendor unresolved)",
      cemented: "D4",
    },
    {
      id: 15,
      name: "L14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      fl: -17.4062,
      glass: "804466 — high-index lanthanum flint (vendor unresolved)",
      cemented: "D4",
    },
    {
      id: 16,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 40.0198,
      glass: "487702 — fluor crown (vendor unresolved)",
    },
    {
      id: 17,
      name: "L16r",
      label: "Element 16 resin layer",
      type: "Hybrid Resin Positive Meniscus (1× Asph)",
      nd: 1.52972,
      vd: 42.7,
      fl: 401.1494,
      glass: "Unmatched (hybrid aspherical resin nd=1.52972, vd=42.7)",
      cemented: "H2",
    },
    {
      id: 18,
      name: "L16g",
      label: "Element 16 glass substrate",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      fl: -37.5119,
      glass: "805254 — dense flint (vendor unresolved)",
      cemented: "H2",
    },
    {
      id: 19,
      name: "L17",
      label: "Element 17",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 36.4522,
      glass: "487702 — fluor crown (vendor unresolved)",
      cemented: "H2",
    },
  ],

  surfaces: [
    { label: "1", R: 285.09, d: 1.8, nd: 1.84666, elemId: 1, sd: 26.0 },
    { label: "2", R: 96.239, d: 5.19, nd: 1.713, elemId: 2, sd: 24.5 },
    { label: "3", R: 3559.161, d: 0.1, nd: 1.0, elemId: 0, sd: 23.0 },
    { label: "4", R: 49.493, d: 5.49, nd: 1.7725, elemId: 3, sd: 15.0 },
    { label: "5", R: 106.028, d: 3.1, nd: 1.0, elemId: 0, sd: 14.0 },

    { label: "6A", R: 199.217, d: 0.1, nd: 1.527, elemId: 4, sd: 13.2 },
    { label: "7", R: 94.524, d: 1.2, nd: 1.804, elemId: 5, sd: 13.2 },
    { label: "8", R: 14.703, d: 5.47, nd: 1.0, elemId: 0, sd: 10.4 },
    { label: "9", R: -91.784, d: 1.0, nd: 1.804, elemId: 6, sd: 9.5 },
    { label: "10", R: 40.312, d: 1.27, nd: 1.0, elemId: 0, sd: 9.0 },
    { label: "11", R: -792.605, d: 0.9, nd: 1.834, elemId: 7, sd: 8.8 },
    { label: "12", R: 72.794, d: 0.15, nd: 1.0, elemId: 0, sd: 8.7 },
    { label: "13", R: 30.191, d: 6.49, nd: 1.5927, elemId: 8, sd: 8.7 },
    { label: "14", R: -30.191, d: 1.04, nd: 1.0, elemId: 0, sd: 7.8 },
    { label: "15", R: -18.411, d: 1.0, nd: 1.804, elemId: 9, sd: 7.8 },
    { label: "16", R: 1216.028, d: 2.3, nd: 1.78472, elemId: 10, sd: 8.5 },
    { label: "17", R: -33.13, d: 16.92, nd: 1.0, elemId: 0, sd: 8.9 },

    { label: "18", R: 48.029, d: 3.67, nd: 1.56732, elemId: 11, sd: 9.7 },
    { label: "19", R: -29.724, d: 0.1, nd: 1.0, elemId: 0, sd: 9.8 },
    { label: "20", R: 32.462, d: 4.53, nd: 1.58913, elemId: 12, sd: 9.7 },
    { label: "21", R: -22.857, d: 1.0, nd: 1.80518, elemId: 13, sd: 9.5 },
    { label: "22", R: 212.245, d: 1.41, nd: 1.0, elemId: 0, sd: 9.3 },
    { label: "STO", R: 1e15, d: 2.56, nd: 1.0, elemId: 0, sd: 4.997425 },

    { label: "23", R: -31.431, d: 2.8, nd: 1.84666, elemId: 14, sd: 8.3 },
    { label: "24", R: -14.123, d: 1.0, nd: 1.804, elemId: 15, sd: 8.5 },
    { label: "25", R: 1587.5, d: 13.39, nd: 1.0, elemId: 0, sd: 8.9 },

    { label: "26", R: 43.935, d: 4.56, nd: 1.48749, elemId: 16, sd: 11.0 },
    { label: "27", R: -33.898, d: 0.1, nd: 1.0, elemId: 0, sd: 11.2 },
    { label: "28A", R: -7107.317, d: 0.1, nd: 1.52972, elemId: 17, sd: 11.2 },
    { label: "29", R: -206.329, d: 1.0, nd: 1.80518, elemId: 18, sd: 11.2 },
    { label: "30", R: 35.46, d: 5.23, nd: 1.48749, elemId: 19, sd: 11.3 },
    { label: "31", R: -33.899, d: 39.04, nd: 1.0, elemId: 0, sd: 11.5 },
  ],

  asph: {
    "6A": {
      K: 0,
      A4: 2.3425e-5,
      A6: -5.5109e-8,
      A8: 1.3114e-10,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "28A": {
      K: 0,
      A4: -1.9525e-5,
      A6: -9.1623e-9,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "5": [
      [3.1, 3.1],
      [18.13, 18.13],
      [33.7, 33.7],
    ],
    "17": [
      [16.92, 16.92],
      [6.68, 6.68],
      [1.0, 1.0],
    ],
    STO: [
      [2.56, 2.56],
      [10.32, 10.32],
      [14.93, 14.93],
    ],
    "25": [
      [13.39, 13.39],
      [5.62, 5.62],
      [1.0, 1.0],
    ],
    "31": [
      [39.04, 39.04],
      [49.45, 49.45],
      [64.38, 64.38],
    ],
  },

  varLabels: [
    ["5", "D5"],
    ["17", "D17"],
    ["STO", "D22 − 1.41"],
    ["25", "D25"],
    ["31", "BF"],
  ],

  zoomPositions: [17.5, 35.0, 67.89],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−)", fromSurface: "6A", toSurface: "17" },
    { text: "G3 (+)", fromSurface: "18", toSurface: "22" },
    { text: "G4 (−)", fromSurface: "23", toSurface: "25" },
    { text: "G5 (+)", fromSurface: "26", toSurface: "31" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "H1", fromSurface: "6A", toSurface: "8" },
    { text: "D2", fromSurface: "15", toSurface: "17" },
    { text: "D3", fromSurface: "20", toSurface: "22" },
    { text: "D4", fromSurface: "23", toSurface: "25" },
    { text: "H2", fromSurface: "28A", toSurface: "31" },
  ],

  closeFocusM: 0.28,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: the production lens uses inner focusing, but Embodiment 4 publishes only " +
    "infinity zoom states. Focus endpoint spacings are intentionally identical at every zoom position.",

  nominalFno: 4.1,
  fstopSeries: [4.1, 5.6, 8, 11, 16, 22],
  apertureBlades: 7,
  maxFstop: 22,

  scFill: 0.62,
  yScFill: 0.46,
} satisfies LensDataInput;

export default LENS_DATA;
