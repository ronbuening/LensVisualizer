import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * The builder derives the physical iris schedule from the published station f-numbers; matching those f-numbers
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
  schema: 2,
  key: "nikon-af-s-zoom-nikkor-24-85mm-f35-45g-if-ed",
  maker: "Nikon",
  name: "NIKON AF-S ZOOM-NIKKOR 24-85mm f/3.5-4.5 G IF-ED",
  subtitle: "JP 2003-241093 A · Example 2 — production correlation",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "15 ELEMENTS / 12 GROUPS",
      "PATENT f = 25.0-82.5 mm",
      "MODELED f/3.6-4.7",
      "1 ED-CLASS ELEMENT",
      "1 HYBRID ASPHERICAL ELEMENT",
    ],
    elementCount: 15,
    groupCount: 12,
    focalLengthMm: { marketing: [24, 85], design: [24.965152, 82.416179] },
    fNumber: { marketing: 3.5, design: 3.6 },
  },

  source: {
    patentNumber: "JP 2003-241093 A",
    patentYear: 2003,
    authors: ["Satoshi Hayakawa"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      glass: "847238 class",
      diagramLabel: "L1",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      indexReference: "d",
      glass: "697555 class",
      diagramLabel: "L2",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.788,
      vd: 47.4,
      indexReference: "d",
      glass: "788474/788475 class",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4r",
      label: "Element 4 hybrid layer",
      type: "Hybrid Aspherical Layer",
      nd: 1.55389,
      vd: 38.1,
      indexReference: "d",
      glass: "Unmatched (thin hybrid-asphere layer, n_d=1.55389, v_d=38.1)",
      diagramLabel: "L4r",
      cemented: "H1",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 4 substrate",
      type: "Negative Meniscus Substrate",
      nd: 1.83481,
      vd: 42.7,
      indexReference: "d",
      glass: "835427 class",
      diagramLabel: "L4",
      cemented: "H1",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      indexReference: "d",
      glass: "804466 class",
      diagramLabel: "L5",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.80809,
      vd: 22.8,
      indexReference: "d",
      glass: "808227/808228 high-dispersion class",
      diagramLabel: "L6",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      glass: "847238 class",
      diagramLabel: "L7",
    },
    {
      id: 9,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      glass: "847238 class",
      diagramLabel: "L8",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.2,
      indexReference: "d",
      glass: "589612 class",
      diagramLabel: "L9",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.1,
      indexReference: "d",
      glass: "517641/517642 crown class",
      diagramLabel: "L10",
    },
    {
      id: 12,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      glass: "847238 class",
      diagramLabel: "L11",
    },
    {
      id: 13,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      indexReference: "d",
      glass: "804466 class",
      diagramLabel: "L12",
    },
    {
      id: 14,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.5,
      indexReference: "d",
      glass: "J-FKH1 — coordinate-compatible ED-class spectral proxy (supplier unresolved)",
      apd: "inferred",
      apdNote:
        "ED-class inference from the coordinate-compatible J-FKH1 curve (catalog dPgF approximately +0.0337); not patent-measured partial dispersion or proof of production glass identity.",
      diagramLabel: "L13",
    },
    {
      id: 15,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.6516,
      vd: 58.5,
      indexReference: "d",
      glass: "652585/652586 class",
      diagramLabel: "L14",
    },
    {
      id: 16,
      name: "L15",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      glass: "847238 class",
      diagramLabel: "L15",
    },
  ],

  surfaces: [
    { label: "1", R: 264.9156, d: 1.7, sd: 26.7, medium: 1 },
    { label: "2", R: 72.7684, d: 6.4, sd: 24.7, medium: 2 },
    { label: "3", R: -862.3598, d: 0.1, sd: 24.2 },
    { label: "4", R: 45.6976, d: 4.95, sd: 21.5, medium: 3 },
    { label: "5", R: 105.603, sd: 20.6 },
    {
      label: "6A",
      R: 54.7045,
      d: 0.1,
      sd: 11.6,
      medium: 4,
      asphere: {
        K: -1.835,
        A4: -2.2261e-6,
        A6: 3.4664e-8,
        A8: -3.2166e-10,
        A10: 5.5491e-13,
        A12: 9.602e-16,
        A3: -6.1899e-7,
      },
    },
    { label: "7", R: 60.0, d: 1.2, sd: 11.5, medium: 5 },
    { label: "8", R: 12.1693, d: 5.45, sd: 8.8 },
    { label: "9", R: -44.3426, d: 1.0, sd: 9.4, medium: 6 },
    { label: "10", R: 19.1723, d: 2.1, sd: 9.4, medium: 7 },
    { label: "11", R: 34.1502, d: 0.2, sd: 9.4 },
    { label: "12", R: 24.0138, d: 2.3, sd: 8.8, medium: 8 },
    { label: "13", R: 131.183, sd: 8.8 },
    // STO position is inferred from Figure 3; the patent specifies placement/mechanism but no numeric axial offset.
    { label: "STO", R: "flat", d: 0.8 },
    { label: "14", R: 28.1774, d: 0.8, sd: 8.1, medium: 9 },
    { label: "15", R: 14.4754, d: 4.4, sd: 8.1, medium: 10 },
    { label: "16", R: -58.0248, d: 0.1, sd: 8.3 },
    { label: "17", R: 28.126, d: 3.0, sd: 8.4, medium: 11 },
    { label: "18", R: -79.4699, sd: 8.3 },
    { label: "19", R: -62.3232, d: 2.4, sd: 7.5, medium: 12 },
    { label: "20", R: -17.1463, d: 0.1, sd: 7.1 },
    { label: "21", R: -16.2977, d: 0.8, sd: 7.1, medium: 13 },
    { label: "22", R: 56.3639, sd: 7.8 },
    { label: "23", R: 217.1899, d: 5.7, sd: 10.2, medium: 14 },
    { label: "24", R: -18.7844, d: 0.1, sd: 11.0 },
    { label: "25", R: 86.1752, d: 3.5, sd: 11.5, medium: 15 },
    { label: "26", R: -50.8335, d: 2.4, sd: 11.2 },
    { label: "27", R: -20.32, d: 1.1, sd: 11.2, medium: 16 },
    { label: "28", R: -62.4223, sd: 12.3 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 25.0, nominalFNumber: 3.6, label: "Wide" },
      { focalLengthMm: 50.0, nominalFNumber: 4.5 },
      { focalLengthMm: 82.5, nominalFNumber: 4.7, label: "Tele" },
    ],
  },

  focus: {
    closeFocusM: 0.38,
    description:
      "For close focus, G2 moves toward the object while the other groups stay fixed. Travel to 0.38 m is a constrained estimate at each zoom station; the patent does not publish close-focus spacings.",
  },

  gaps: {
    "5": {
      label: "D5",
      values: [
        [2.45, 1.020344894106327],
        [16.66, 14.347126600731599],
        [29.35, 25.42520110712885],
      ],
    },
    "13": {
      label: "D13 - STO",
      values: [
        [12.4, 13.829655105893671],
        [4.98, 7.292873399268402],
        [1.49, 5.414798892871153],
      ],
    },
    "18": {
      label: "D18",
      values: [
        [1.45, 1.45],
        [8.24, 8.24],
        [11.46, 11.46],
      ],
    },
    "22": {
      label: "D22",
      values: [
        [11.21, 11.21],
        [4.42, 4.42],
        [1.19, 1.19],
      ],
    },
    "28": {
      label: "BF",
      values: [
        [38.57, 38.57],
        [45.36, 45.36],
        [48.59, 48.59],
      ],
    },
  },

  aperture: { fStops: [3.5, 4, 4.5, 5.6, 8, 11, 16] },

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

  layout: { yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
