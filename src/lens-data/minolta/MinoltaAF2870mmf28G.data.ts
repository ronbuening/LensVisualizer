import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — MINOLTA AF 28-70mm f/2.8 G                                                            ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: JP1994-082698, Example 1 (特開平6-82698 A), Minolta Co., Ltd.                              ║
 * ║  Production correlation: high confidence but not source-explicit.                                  ║
 * ║  Prescription: 16 elements / 11 air-separated blocks in four N-P-N-P zoom power groups.            ║
 * ║  Aspheres: patent surfaces 5 and 21; no scale factor is applied.                                   ║
 * ║                                                                                                      ║
 * ║  Zoom / image plane:                                                                                ║
 * ║    - Patent zoom gaps are d9, d15, and d20 at 28.7 / 50.0 / 68.3 mm.                              ║
 * ║    - The patent does not tabulate d27 to the image plane. d27 is the independently solved          ║
 * ║      paraxial BFD at each published zoom state and is therefore a model-derived zoom-only gap.     ║
 * ║                                                                                                      ║
 * ║  Stop modeling correction:                                                                         ║
 * ║    - Reinspection of rendered Figure 1 places stop S in d15, between L2 and L3, not in d17.        ║
 * ║    - Figure 1 gives no numerical stop station. The base-state d15 gap (3.267 mm) is split at its   ║
 * ║      midpoint. STO remains 1.6335 mm ahead of surface 16 (moves with G3); surface 15-to-STO       ║
 * ║      absorbs the remaining zoom motion. This is a disclosed modeling inference.                    ║
 * ║    - Base STO semi-diameter is solved by exact Snell tracing from the F/2.87 entrance-pupil        ║
 * ║      radius at the wide state, matching the current runtime convention. nominalFno=2.87 controls  ║
 * ║      the corresponding wide-open pupil at the other zoom positions.                                ║
 * ║                                                                                                      ║
 * ║  Focus: NO_INTERNAL_RECONSTRUCTION. The production MFD 0.85 m is metadata only; the patent gives   ║
 * ║  no close-focus spacing table or internal focus law. All authored var pairs therefore have         ║
 * ║  identical infinity/close values.                                                                   ║
 * ║                                                                                                      ║
 * ║  Semi-diameters: not published. They are model-derived from exact meridional ray envelopes,         ║
 * ║  runtime-compatible chiefs at the patent fields, default 0.6-field bundles, Figure 1 proportions,  ║
 * ║  and the current edge/slope/cross-gap rules. The 2→3 and 6→7 gaps bind. The conventional exact     ║
 * ║  stop-centered chief at the 38° wide field is slightly vignetted at surface 3; this is disclosed.  ║
 * ║                                                                                                      ║
 * ║  Glass: the patent supplies d-line nd/νd only. Six-digit coordinate codes are retained because     ║
 * ║  matching a modern vendor trade name from nd/νd alone is not source-defensible. No nC/nF/ng/dPgF  ║
 * ║  values are invented.                                                                               ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "minolta-af-28-70mm-f28-g",
  maker: "Minolta",
  name: "MINOLTA AF 28-70mm f/2.8 G",
  subtitle: "JP1994-082698 Example 1 — high-confidence production correlation",
  specs: [
    "16 ELEMENTS / 11 GROUPS",
    "4-GROUP N-P-N-P ZOOM",
    "28.7 / 50.0 / 68.3mm DESIGN STATES",
    "F/2.87 DESIGN",
    "2 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: [28, 70],
  focalLengthDesign: [28.698243579633534, 68.29372647872376],
  apertureMarketing: 2.8,
  apertureDesign: 2.87,
  lensMounts: ["sony-a"],
  imageFormat: "135-full-frame",
  patentNumber: "JP1994-082698 A",
  patentAuthors: ["Yoshinobu Asakura"],
  patentAssignees: ["Minolta Co., Ltd."],
  patentYear: 1994,
  elementCount: 16,
  groupCount: 11,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      fl: -80.097988,
      glass: "847239 (vendor identity not source-defensible)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.79952,
      vd: 42.2,
      fl: 67.876119,
      glass: "800422 (vendor identity not source-defensible)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.7432,
      vd: 49.3,
      fl: -66.206863,
      glass: "743493 (vendor identity not source-defensible)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.58313,
      vd: 59.4,
      fl: -31.417687,
      glass: "583594 (vendor identity not source-defensible)",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.9,
      fl: 46.1649,
      glass: "847239 (vendor identity not source-defensible)",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      fl: -53.721699,
      glass: "847239 (vendor identity not source-defensible)",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.66755,
      vd: 41.9,
      fl: 35.335548,
      glass: "668419 (vendor identity not source-defensible)",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      fl: 36.715219,
      glass: "729547 (vendor identity not source-defensible)",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      fl: -111.605471,
      glass: "847239 (vendor identity not source-defensible)",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.51728,
      vd: 69.6,
      fl: -65.827793,
      glass: "517696 (vendor identity not source-defensible)",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.2,
      fl: -73.400842,
      glass: "487702 (vendor identity not source-defensible)",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.9,
      fl: 87.602432,
      glass: "847239 (vendor identity not source-defensible)",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.6223,
      vd: 53.2,
      fl: 45.45656,
      glass: "622532 (vendor identity not source-defensible)",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.4,
      fl: 41.054634,
      glass: "618634 (vendor identity not source-defensible)",
      cemented: "D5",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.78472,
      vd: 25.7,
      fl: -109.998285,
      glass: "785257 (vendor identity not source-defensible)",
      cemented: "D5",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: -53.804722,
      glass: "805254 (vendor identity not source-defensible)",
    },
  ],

  surfaces: [
    { label: "1", R: 76.448, d: 2.5, nd: 1.84666, elemId: 1, sd: 28.0 },
    { label: "2", R: 35.398, d: 6.35, nd: 1.0, elemId: 0, sd: 24.0 },
    { label: "3", R: 88.4, d: 7.05, nd: 1.79952, elemId: 2, sd: 23.4 },
    { label: "4", R: -135.573, d: 0.15, nd: 1.0, elemId: 0, sd: 23.0 },
    { label: "5A", R: 83.646, d: 2.6, nd: 1.7432, elemId: 3, sd: 19.0 },
    { label: "6", R: 30.57, d: 7.25, nd: 1.0, elemId: 0, sd: 15.8 },
    { label: "7", R: -51.204, d: 1.4, nd: 1.58313, elemId: 4, sd: 15.3 },
    { label: "8", R: 28.815, d: 4.4, nd: 1.84666, elemId: 5, sd: 17.2 },
    { label: "9", R: 101.978, d: 27.64, nd: 1.0, elemId: 0, sd: 17.25 },
    { label: "10", R: 62.495, d: 1.4, nd: 1.84666, elemId: 6, sd: 18.0 },
    { label: "11", R: 26.0544, d: 7.9, nd: 1.66755, elemId: 7, sd: 17.6 },
    { label: "12", R: -218.956, d: 0.1, nd: 1.0, elemId: 0, sd: 17.6 },
    { label: "13", R: 50.841, d: 6.8, nd: 1.72916, elemId: 8, sd: 17.9 },
    { label: "14", R: -53.358, d: 1.6, nd: 1.84666, elemId: 9, sd: 17.8 },
    { label: "15", R: -124.258, d: 1.6335, nd: 1.0, elemId: 0, sd: 17.6 },
    // STO position inferred from rendered Fig. 1. It is modeled as fixed 1.6335 mm ahead of G3 surface 16.
    { label: "STO", R: 1e15, d: 1.6335, nd: 1.0, elemId: 0, sd: 9.156862173001112 },
    { label: "16", R: -50.076, d: 1.4, nd: 1.51728, elemId: 10, sd: 11.7 },
    { label: "17", R: 107.423, d: 1.8, nd: 1.0, elemId: 0, sd: 11.7 },
    { label: "18", R: 328.669, d: 1.4, nd: 1.48749, elemId: 11, sd: 11.7 },
    { label: "19", R: 32.224, d: 2.3, nd: 1.84666, elemId: 12, sd: 11.8 },
    { label: "20", R: 55.115, d: 15.094, nd: 1.0, elemId: 0, sd: 11.7 },
    { label: "21A", R: 87.115, d: 6.5, nd: 1.6223, elemId: 13, sd: 13.2 },
    { label: "22", R: -40.691, d: 0.15, nd: 1.0, elemId: 0, sd: 13.8 },
    { label: "23", R: 182.894, d: 6.8, nd: 1.618, elemId: 14, sd: 14.1 },
    { label: "24", R: -29.04, d: 1.4, nd: 1.78472, elemId: 15, sd: 14.2 },
    { label: "25", R: -44.691, d: 2.35, nd: 1.0, elemId: 0, sd: 14.4 },
    { label: "26", R: -30.396, d: 1.7, nd: 1.80518, elemId: 16, sd: 14.3 },
    { label: "27", R: -104.412, d: 36.967653811511724, nd: 1.0, elemId: 0, sd: 15.0 },
  ],

  asph: {
    "5A": {
      K: 0,
      A4: -7.403e-7,
      A6: -1.9554e-9,
      A8: 4.9649e-12,
      A10: -3.7607e-15,
      A12: 0,
      A14: 0,
    },
    "21A": {
      K: 0,
      A4: -7.6831e-7,
      A6: -2.293e-10,
      A8: 1.0078e-11,
      A10: -1.2843e-14,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "9": [
      [27.64, 27.64],
      [7.414, 7.414],
      [0.875, 0.875],
    ],
    // d15 is split by the inferred STO. The STO-to-surface-16 spacing remains fixed at 1.6335 mm.
    "15": [
      [1.6335, 1.6335],
      [16.4025, 16.4025],
      [28.4585, 28.4585],
    ],
    "20": [
      [15.094, 15.094],
      [7.436, 7.436],
      [1.075, 1.075],
    ],
    // The patent omits image distance; these are independently solved paraxial BFDs from surface 27.
    "27": [
      [36.967653811511724, 36.967653811511724],
      [44.64183749929214, 44.64183749929214],
      [50.87551495329136, 50.87551495329136],
    ],
  },

  varLabels: [
    ["9", "D9 (G1-G2)"],
    ["15", "D15 (G2-STO)"],
    ["20", "D20 (G3-G4)"],
    ["27", "BF"],
  ],

  zoomPositions: [28.7, 50.0, 68.3],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "G1 (-)", fromSurface: "1", toSurface: "9" },
    { text: "G2 (+)", fromSurface: "10", toSurface: "15" },
    { text: "G3 (-)", fromSurface: "16", toSurface: "20" },
    { text: "G4 (+)", fromSurface: "21A", toSurface: "27" },
  ],

  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "D3", fromSurface: "13", toSurface: "15" },
    { text: "D4", fromSurface: "18", toSurface: "20" },
    { text: "D5", fromSurface: "23", toSurface: "25" },
  ],

  closeFocusM: 0.85,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: patent zoom states are modeled at infinity/design focus only; production MFD 0.85 m " +
    "does not determine the internal close-focus motion.",

  nominalFno: 2.87,
  fstopSeries: [2.87, 4, 5.6, 8, 11, 16],

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
