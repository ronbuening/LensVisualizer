import type { LensDataInput } from "../../types/optics.js";

/**
 * JP 2003-241093 A, Example 2 — Nikon AF-S Zoom-Nikkor 24-85mm f/3.5-4.5G IF-ED correlation.
 *
 * Source scale is preserved. The patent publishes 25.0 / 50.0 / 82.5 mm infinity-focus stations; the marketed
 * 24-85 mm endpoints are metadata only and are not used to rescale the prescription.
 *
 * Focus status: CONSTRAINED_RECONSTRUCTION. The patent states that G2 performs focusing but publishes only infinity
 * spacings. The close-focus pairs below translate G2 only, conserve D5 + D13 at each zoom station, keep the image plane
 * and all other groups fixed, and are code-solved for a 0.38 m object-to-image-plane conjugate. They are not
 * patent-published close-focus spacings.
 *
 * Stop model: the patent places S between G2 and G3, adjacent to and moving with G3, but gives no numeric offset or
 * diaphragm diameter. D13 is split with STO 0.8 mm object-side of G3 as an explicitly inferred drawing-based placement.
 * zoomApertureModel derives the physical iris schedule from the published station f-numbers; matching those f-numbers
 * is therefore a calibration result, not independent evidence of the production diaphragm diameter.
 *
 * Semi-diameters are modeled values inferred from exact sequential ray geometry and the current geometry policy; the
 * patent publishes no clear apertures. G2 rims 9–13 were refined against Figure 3. Surface 6 is the patent asphere and is labeled 6A. The patent's Table 5 C3 term
 * is retained despite Equation 1 omitting C3 from its displayed polynomial series. Its conic maps by K = kappa - 1.
 *
 * Physical count: 15 elements / 12 groups. The elements array has 16 optical-media entries because the inferred hybrid
 * aspherical component is represented as a thin unmatched layer plus its glass substrate, while elementCount retains the
 * physical production count of 15.
 */
const LENS_DATA = {
  key: "nikon-af-s-zoom-nikkor-24-85mm-f35-45g-if-ed",
  name: "NIKON AF-S ZOOM-NIKKOR 24-85mm f/3.5-4.5 G IF-ED",
  maker: "Nikon",
  subtitle: "JP 2003-241093 A · Example 2 — production correlation",
  specs: [
    "15 ELEMENTS / 12 GROUPS",
    "PATENT f = 25.0-82.5 mm",
    "MODELED f/3.6-4.7",
    "1 ED-CLASS ELEMENT",
    "1 HYBRID ASPHERICAL ELEMENT",
  ],
  focalLengthMarketing: [24, 85],
  apertureMarketing: 3.5,
  apertureDesign: 3.6,
  focalLengthDesign: [24.965152, 82.416179],
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2003-241093 A",
  patentAuthors: ["Satoshi Hayakawa"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2003,
  elementCount: 15,
  groupCount: 12,

  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      glass: "847238 class",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      indexReference: "d",
      glass: "697555 class",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.788,
      vd: 47.4,
      indexReference: "d",
      glass: "788474/788475 class",
    },
    {
      id: 4,
      name: "L4r",
      diagramLabel: "L4r",
      label: "Element 4 hybrid layer",
      type: "Hybrid Aspherical Layer",
      nd: 1.55389,
      vd: 38.1,
      indexReference: "d",
      glass: "Unmatched (thin hybrid-asphere layer, n_d=1.55389, v_d=38.1)",
      cemented: "H1",
    },
    {
      id: 5,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4 substrate",
      type: "Negative Meniscus Substrate",
      nd: 1.83481,
      vd: 42.7,
      indexReference: "d",
      glass: "835427 class",
      cemented: "H1",
    },
    {
      id: 6,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      indexReference: "d",
      glass: "804466 class",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.80809,
      vd: 22.8,
      indexReference: "d",
      glass: "808227/808228 high-dispersion class",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L7",
      diagramLabel: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      glass: "847238 class",
    },
    {
      id: 9,
      name: "L8",
      diagramLabel: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      glass: "847238 class",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L9",
      diagramLabel: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.2,
      indexReference: "d",
      glass: "589612 class",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L10",
      diagramLabel: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.1,
      indexReference: "d",
      glass: "517641/517642 crown class",
    },
    {
      id: 12,
      name: "L11",
      diagramLabel: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      glass: "847238 class",
    },
    {
      id: 13,
      name: "L12",
      diagramLabel: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      indexReference: "d",
      glass: "804466 class",
    },
    {
      id: 14,
      name: "L13",
      diagramLabel: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.5,
      indexReference: "d",
      glass: "J-FKH1 — coordinate-compatible ED-class spectral proxy (supplier unresolved)",
      apd: "inferred",
      apdNote:
        "ED-class inference from the coordinate-compatible J-FKH1 curve (catalog dPgF approximately +0.0337); not patent-measured partial dispersion or proof of production glass identity.",
    },
    {
      id: 15,
      name: "L14",
      diagramLabel: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.6516,
      vd: 58.5,
      indexReference: "d",
      glass: "652585/652586 class",
    },
    {
      id: 16,
      name: "L15",
      diagramLabel: "L15",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      glass: "847238 class",
    },
  ],

  surfaces: [
    { label: "1", R: 264.9156, d: 1.7, nd: 1.84666, elemId: 1, sd: 26.7 },
    { label: "2", R: 72.7684, d: 6.4, nd: 1.6968, elemId: 2, sd: 24.7 },
    { label: "3", R: -862.3598, d: 0.1, nd: 1.0, elemId: 0, sd: 24.2 },
    { label: "4", R: 45.6976, d: 4.95, nd: 1.788, elemId: 3, sd: 21.5 },
    { label: "5", R: 105.603, d: 2.45, nd: 1.0, elemId: 0, sd: 20.6 },
    { label: "6A", R: 54.7045, d: 0.1, nd: 1.55389, elemId: 4, sd: 11.6 },
    { label: "7", R: 60.0, d: 1.2, nd: 1.83481, elemId: 5, sd: 11.5 },
    { label: "8", R: 12.1693, d: 5.45, nd: 1.0, elemId: 0, sd: 8.8 },
    { label: "9", R: -44.3426, d: 1.0, nd: 1.804, elemId: 6, sd: 9.4 },
    { label: "10", R: 19.1723, d: 2.1, nd: 1.80809, elemId: 7, sd: 9.4 },
    { label: "11", R: 34.1502, d: 0.2, nd: 1.0, elemId: 0, sd: 9.4 },
    { label: "12", R: 24.0138, d: 2.3, nd: 1.84666, elemId: 8, sd: 8.8 },
    { label: "13", R: 131.183, d: 12.4, nd: 1.0, elemId: 0, sd: 8.8 },
    // STO position is inferred from Figure 3; the patent specifies placement/mechanism but no numeric axial offset.
    { label: "STO", R: 1e15, d: 0.8, nd: 1.0, elemId: 0, sd: 6.434349 },
    { label: "14", R: 28.1774, d: 0.8, nd: 1.84666, elemId: 9, sd: 8.1 },
    { label: "15", R: 14.4754, d: 4.4, nd: 1.58913, elemId: 10, sd: 8.1 },
    { label: "16", R: -58.0248, d: 0.1, nd: 1.0, elemId: 0, sd: 8.3 },
    { label: "17", R: 28.126, d: 3.0, nd: 1.5168, elemId: 11, sd: 8.4 },
    { label: "18", R: -79.4699, d: 1.45, nd: 1.0, elemId: 0, sd: 8.3 },
    { label: "19", R: -62.3232, d: 2.4, nd: 1.84666, elemId: 12, sd: 7.5 },
    { label: "20", R: -17.1463, d: 0.1, nd: 1.0, elemId: 0, sd: 7.1 },
    { label: "21", R: -16.2977, d: 0.8, nd: 1.804, elemId: 13, sd: 7.1 },
    { label: "22", R: 56.3639, d: 11.21, nd: 1.0, elemId: 0, sd: 7.8 },
    { label: "23", R: 217.1899, d: 5.7, nd: 1.49782, elemId: 14, sd: 10.2 },
    { label: "24", R: -18.7844, d: 0.1, nd: 1.0, elemId: 0, sd: 11.0 },
    { label: "25", R: 86.1752, d: 3.5, nd: 1.6516, elemId: 15, sd: 11.5 },
    { label: "26", R: -50.8335, d: 2.4, nd: 1.0, elemId: 0, sd: 11.2 },
    { label: "27", R: -20.32, d: 1.1, nd: 1.84666, elemId: 16, sd: 11.2 },
    { label: "28", R: -62.4223, d: 38.57, nd: 1.0, elemId: 0, sd: 12.3 },
  ],

  asph: {
    "6A": {
      K: -1.835,
      A3: -6.1899e-7,
      A4: -2.2261e-6,
      A6: 3.4664e-8,
      A8: -3.2166e-10,
      A10: 5.5491e-13,
      A12: 9.602e-16,
      A14: 0,
    },
  },

  zoomPositions: [25.0, 50.0, 82.5],
  zoomLabels: ["Wide", "Tele"],
  zoomApertureModel: "from-nominal-fno",

  var: {
    "5": [
      [2.45, 1.020344894106327],
      [16.66, 14.347126600731599],
      [29.35, 25.42520110712885],
    ],
    "13": [
      [12.4, 13.829655105893671],
      [4.98, 7.292873399268402],
      [1.49, 5.414798892871153],
    ],
    "18": [
      [1.45, 1.45],
      [8.24, 8.24],
      [11.46, 11.46],
    ],
    "22": [
      [11.21, 11.21],
      [4.42, 4.42],
      [1.19, 1.19],
    ],
    "28": [
      [38.57, 38.57],
      [45.36, 45.36],
      [48.59, 48.59],
    ],
  },
  varLabels: [
    ["5", "D5"],
    ["13", "D13 - STO"],
    ["18", "D18"],
    ["22", "D22"],
    ["28", "BF"],
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "5" },
    { text: "G2", fromSurface: "6A", toSurface: "13" },
    { text: "G3", fromSurface: "14", toSurface: "18" },
    { text: "G4", fromSurface: "19", toSurface: "22" },
    { text: "G5", fromSurface: "23", toSurface: "28" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "H1", fromSurface: "6A", toSurface: "8" },
    { text: "D2", fromSurface: "9", toSurface: "11" },
    { text: "D3", fromSurface: "14", toSurface: "16" },
  ],

  closeFocusM: 0.38,
  focusDescription:
    "For close focus, G2 moves toward the object while the other groups stay fixed. Travel to 0.38 m is a constrained estimate at each zoom station; the patent does not publish close-focus spacings.",

  nominalFno: [3.6, 4.5, 4.7],
  fstopSeries: [3.5, 4, 4.5, 5.6, 8, 11, 16],

  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
