import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — TAMRON SP AF 70-200mm f/2.8 Di LD [IF] MACRO (A001)                                    ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Optical source: US 2008/0212200 A1, Embodiment 1 (Dayong Li; Akio Arakawa).                         ║
 * ║ Production correlation: Tamron A001; correlation is inferred, not stated by the patent.             ║
 * ║ 18 elements / 13 air-separated physical groups; four functional zoom groups; all spherical.         ║
 * ║                                                                                                      ║
 * ║ Zoom: G1 and G4 are stationary at infinity; G2 and G3 move. D3, D8, D16, and D21 are variable.      ║
 * ║ G3 reverses direction between the middle and telephoto control points.                               ║
 * ║                                                                                                      ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. G1R (L3-L5) translates 19.124 mm objectward.              ║
 * ║ The patent prints 9.124 mm at 0.95 m; independent conjugate tracing shows that value corresponds     ║
 * ║ to about 1.591 m. The reconstructed close state uses D3 - 19.124 and D8 + 19.124, preserving        ║
 * ║ D3 + D8 at every zoom position and reproducing 0.95 m object-to-image distance at source precision. ║
 * ║                                                                                                      ║
 * ║ Stop: surface 24 position is published. Physical stop diameter is not; STO sd = 16.69756 mm is       ║
 * ║ inferred from the published constant F/2.88 using the independently traced entrance pupil.          ║
 * ║                                                                                                      ║
 * ║ Semi-diameters: not published. Values are a Stage-2 inference constrained by patent Fig. 1, the      ║
 * ║ official Tamron construction drawing, infinity F/2.88 marginal-ray clearance at all three zoom      ║
 * ║ control points, full-field chief-ray passage, edge thickness, rim slope, and shared-gap geometry.    ║
 * ║ The L16-L18 rear envelopes were enlarged after a direct Fig. 1 proportion audit.                     ║
 * ║ gapSagFrac = 0.97 is intentional: the S11-S12 and S14-S15 rims remain physically separated, while  ║
 * ║ the default 0.90 render-clearance policy would clip the patent's telephoto F/2.88 marginal bundle.   ║
 * ║ This is a geometry tolerance, not a layout control.                                                   ║
 * ║                                                                                                      ║
 * ║ Glass: the patent publishes only d-line nd/vd coordinates and no vendor names. Neutral coordinate     ║
 * ║ classes allow compatible catalog curves without asserting a production supplier. nC, nF, ng, and     ║
 * ║ dPgF remain omitted because the selected patent does not publish defensible values.                   ║
 * ║                                                                                                      ║
 * ║ No scaling is applied. No sensor cover glass, filter, dummy plane, flare cutter, or mechanical part  ║
 * ║ is included.                                                                                          ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "tamron-a001-70-200mm-f28",
  maker: "Tamron",
  name: "TAMRON SP AF 70-200mm f/2.8 Di LD [IF] MACRO",
  subtitle: "US 2008/0212200 A1 Example 1 — inferred A001 correlation; constrained focus reconstruction",

  focalLengthMarketing: [70, 200],
  focalLengthDesign: [71.49967, 194.001215],
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["canon-ef", "nikon-f", "pentax-k", "sony-a"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2008/0212200 A1",
  patentAuthors: ["Dayong Li", "Akio Arakawa"],
  patentAssignees: [],
  patentYear: 2008,
  elementCount: 18,
  groupCount: 13,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.7859,
      vd: 43.9,
      indexReference: "d",
      fl: -130.5806,
      glass: "786439 coordinate class (vendor unresolved)",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.4,
      indexReference: "d",
      fl: 149.7056,
      glass: "487704 coordinate class (vendor unresolved)",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30.1,
      indexReference: "d",
      fl: -420.2808,
      glass: "699301 coordinate class (vendor unresolved)",
      cemented: "D2",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.4,
      indexReference: "d",
      fl: 132.7216,
      glass: "487704 coordinate class (vendor unresolved)",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      fl: 190.5956,
      glass: "497816 coordinate class (vendor unresolved)",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      fl: 91.3468,
      glass: "847238 coordinate class (vendor unresolved)",
      cemented: "D3",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.64,
      vd: 60.2,
      indexReference: "d",
      fl: -59.3417,
      glass: "640602 coordinate class (vendor unresolved)",
      cemented: "D3",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.64,
      vd: 60.2,
      indexReference: "d",
      fl: -66.3229,
      glass: "640602 coordinate class (vendor unresolved)",
      cemented: "D4",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      fl: 127.4787,
      glass: "847238 coordinate class (vendor unresolved)",
      cemented: "D4",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.7859,
      vd: 43.9,
      indexReference: "d",
      fl: -61.4594,
      glass: "786439 coordinate class (vendor unresolved)",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 40.7,
      indexReference: "d",
      fl: 119.9557,
      glass: "806407 coordinate class (vendor unresolved)",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      fl: 85.0896,
      glass: "497816 coordinate class (vendor unresolved)",
      cemented: "D5",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      fl: -117.5152,
      glass: "847238 coordinate class (vendor unresolved)",
      cemented: "D5",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      fl: 76.0265,
      glass: "497816 coordinate class (vendor unresolved)",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconcave Negative",
      nd: 1.62004,
      vd: 36.3,
      indexReference: "d",
      fl: -122.0471,
      glass: "620363 coordinate class (vendor unresolved)",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.834,
      vd: 37.3,
      indexReference: "d",
      fl: 87.2864,
      glass: "834373 coordinate class (vendor unresolved)",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.3,
      indexReference: "d",
      fl: -52.3682,
      glass: "806333 coordinate class (vendor unresolved)",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Biconvex Positive",
      nd: 1.62004,
      vd: 36.3,
      indexReference: "d",
      fl: 101.8547,
      glass: "620363 coordinate class (vendor unresolved)",
    },
  ],

  surfaces: [
    { label: "1", R: 336.3205, d: 2.0, nd: 1.7859, elemId: 1, sd: 37.0 },
    { label: "2", R: 78.4246, d: 10.582, nd: 1.48749, elemId: 2, sd: 37.0 },
    { label: "3", R: -1004.7183, d: 20.101, nd: 1.0, elemId: 0, sd: 37.0 },
    { label: "4", R: 87.2384, d: 2.0, nd: 1.69895, elemId: 3, sd: 35.5 },
    { label: "5", R: 66.6285, d: 11.387, nd: 1.48749, elemId: 4, sd: 35.5 },
    { label: "6", R: -2110.656, d: 0.2, nd: 1.0, elemId: 0, sd: 35.5 },
    { label: "7", R: 114.6596, d: 7.805, nd: 1.497, elemId: 5, sd: 35.0 },
    { label: "8", R: -532.5578, d: 1.196, nd: 1.0, elemId: 0, sd: 35.0 },
    { label: "9", R: -495.1986, d: 4.174, nd: 1.84666, elemId: 6, sd: 20.0 },
    { label: "10", R: -67.151, d: 1.2, nd: 1.64, elemId: 7, sd: 20.0 },
    { label: "11", R: 88.0318, d: 2.754, nd: 1.0, elemId: 0, sd: 20.0 },
    { label: "12", R: -233.3123, d: 1.2, nd: 1.64, elemId: 8, sd: 18.34 },
    { label: "13", R: 51.9905, d: 3.044, nd: 1.84666, elemId: 9, sd: 18.34 },
    { label: "14", R: 97.6171, d: 4.178, nd: 1.0, elemId: 0, sd: 18.34 },
    { label: "15", R: -66.3984, d: 1.2, nd: 1.7859, elemId: 10, sd: 17.7 },
    { label: "16", R: 178.6227, d: 32.139, nd: 1.0, elemId: 0, sd: 17.7 },
    { label: "17", R: 2391.1738, d: 3.258, nd: 1.8061, elemId: 11, sd: 19.0 },
    { label: "18", R: -100.7101, d: 0.2, nd: 1.0, elemId: 0, sd: 19.0 },
    { label: "19", R: 132.6524, d: 5.852, nd: 1.497, elemId: 12, sd: 19.2 },
    { label: "20", R: -61.1716, d: 1.2, nd: 1.84666, elemId: 13, sd: 19.2 },
    { label: "21", R: -160.2407, d: 12.812, nd: 1.0, elemId: 0, sd: 19.2 },
    { label: "22", R: 34.6669, d: 7.041, nd: 1.497, elemId: 14, sd: 19.0 },
    { label: "23", R: 391.7479, d: 1.927, nd: 1.0, elemId: 0, sd: 19.0 },
    { label: "STO", R: 1e15, d: 9.645, nd: 1.0, elemId: 0, sd: 16.69756 },
    { label: "25", R: -162.8613, d: 1.2, nd: 1.62004, elemId: 15, sd: 15.0 },
    { label: "26", R: 141.754, d: 22.815, nd: 1.0, elemId: 0, sd: 15.0 },
    { label: "27", R: 267.9086, d: 3.303, nd: 1.834, elemId: 16, sd: 16.0 },
    { label: "28", R: -99.3972, d: 9.536, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "29", R: -27.1236, d: 1.2, nd: 1.8061, elemId: 17, sd: 17.0 },
    { label: "30", R: -77.3739, d: 0.433, nd: 1.0, elemId: 0, sd: 17.0 },
    { label: "31", R: 80.0747, d: 4.025, nd: 1.62004, elemId: 18, sd: 18.0 },
    { label: "32", R: -293.117, d: 46.696, nd: 1.0, elemId: 0, sd: 18.0 },
  ],

  asph: {},

  zoomPositions: [71.5, 117.4, 194.0],
  zoomLabels: ["Wide", "Tele"],

  var: {
    "3": [
      [20.101, 0.977],
      [20.101, 0.977],
      [20.101, 0.977],
    ],
    "8": [
      [1.196, 20.32],
      [23.894, 43.018],
      [37.806, 56.93],
    ],
    "16": [
      [32.139, 32.139],
      [20.845, 20.845],
      [2.041, 2.041],
    ],
    "21": [
      [12.812, 12.812],
      [1.408, 1.408],
      [6.3, 6.3],
    ],
  },

  varLabels: [
    ["3", "D3 / FOCUS"],
    ["8", "D8 / ZOOM + FOCUS"],
    ["16", "D16 / ZOOM"],
    ["21", "D21 / ZOOM"],
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "8" },
    { text: "G2", fromSurface: "9", toSurface: "16" },
    { text: "G3", fromSurface: "17", toSurface: "21" },
    { text: "G4", fromSurface: "22", toSurface: "32" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "4", toSurface: "6" },
    { text: "D3", fromSurface: "9", toSurface: "11" },
    { text: "D4", fromSurface: "12", toSurface: "14" },
    { text: "D5", fromSurface: "19", toSurface: "21" },
  ],

  closeFocusM: 0.95,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: G1R (L3-L5) moves 19.124 mm objectward to 0.95 m; D3 decreases and D8 increases by the same amount at each zoom position, preserving the adjacent-gap sum. The patent's printed 9.124 mm value does not reproduce 0.95 m.",

  nominalFno: 2.88,
  fstopSeries: [2.88, 4, 5.6, 8, 11, 16, 22, 32],
  apertureBlades: 9,
  maxFstop: 32,

  gapSagFrac: 0.97,
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
