import type { LensDataInput } from "../../types/optics.js";

/**
 * Rodenstock Grandagon-N 75mm f/4.5
 *
 * Source prescription:
 *   DE 2444954 A1, Claim 3 / Example 3, f' = 75 mm, 1:4.5.
 *
 * The patent table publishes e-line indices (ne / ve). This data file stores
 * d-line nd / vd values per the LensVisualizer convention. L4 has no secure
 * public catalog match and is stored as an approximate d-line conversion of
 * the patent's ne = 1.5629, ve = 46.88.
 *
 * Semi-diameters are estimated for rendering from the patented geometry,
 * the computed f/4.5 stop, spherical rim limits, edge-thickness checks, and
 * the production 67 mm filter / 60 mm rear-barrel envelope. The patent does
 * not publish clear-aperture diameters.
 */
const LENS_DATA = {
  key: "rodenstock-grandagon-n-75mm-f45",
  maker: "Rodenstock",
  name: "RODENSTOCK GRANDAGON-N 75mm f/4.5",
  subtitle: "DE 2444954 A1 Example 3",
  specs: ["8 elements / 4 groups", "f′ = 75 mm", "1:4.5", "105° / 195 mm image circle", "All-spherical"],
  focalLengthMarketing: 75,
  focalLengthDesign: 74.932,
  apertureMarketing: 4.5,
  apertureDesign: 4.501,
  lensMounts: ["large-format-lens-board"],
  imageFormat: "4x5",
  patentYear: 1976,
  elementCount: 8,
  groupCount: 4,
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 105,
    maxTraceFieldDeg: 52.5,
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.4645,
      vd: 65.77,
      fl: -56.2,
      glass: "FK3 (Schott inquiry glass)",
      nC: 1.46232,
      nF: 1.46939,
      ng: 1.47315,
      role: "Front low-index negative field meniscus.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.6727,
      vd: 32.21,
      fl: -97.9,
      glass: "SF5 (Schott legacy dense flint)",
      nC: 1.66661,
      nF: 1.6875,
      ng: 1.69986,
      role: "Leading flint element of the front cemented triplet.",
      cemented: "T1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.62229,
      vd: 53.27,
      fl: 15.7,
      glass: "SSK2 / N-SSK2 class (Schott)",
      role: "Strong positive dense-crown core of the front cemented triplet.",
      cemented: "T1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.56,
      vd: 47.1,
      fl: -26.6,
      glass: "Unmatched (short-flint / barium-crown boundary; patent ne=1.5629, ve=46.88)",
      role: "Trailing negative element of the front cemented triplet; catalog identity unresolved.",
      cemented: "T1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.58313,
      vd: 59.3,
      fl: -27.0,
      glass: "SK12 (Schott legacy dense crown)",
      nC: 1.58014,
      nF: 1.58997,
      ng: 1.59532,
      role: "Thin leading negative element of the rear cemented triplet.",
      cemented: "T2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.60881,
      vd: 58.9,
      fl: 13.2,
      glass: "SK3 (Schott legacy dense crown)",
      nC: 1.60567,
      nF: 1.61601,
      ng: 1.62163,
      role: "Strong positive dense-crown core of the rear cemented triplet.",
      cemented: "T2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.66672,
      vd: 48.4,
      fl: -49.3,
      glass: "BaF11 (Schott legacy barium flint)",
      nC: 1.6626,
      nF: 1.67638,
      ng: 1.68412,
      role: "Trailing barium-flint corrector of the rear cemented triplet.",
      cemented: "T2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.4,
      fl: -50.3,
      glass: "FK5 / N-FK5 class (Schott)",
      nC: 1.48535,
      nF: 1.49227,
      ng: 1.49593,
      role: "Rear low-index negative field meniscus.",
    },
  ],
  surfaces: [
    { label: "1", R: 75.8, d: 5.5, nd: 1.4645, elemId: 1, sd: 21.0 },
    { label: "2", R: 18.97, d: 9.85, nd: 1.0, elemId: 0, sd: 16.8 },

    { label: "3", R: 30.18, d: 12.6, nd: 1.6727, elemId: 2, sd: 14.6 },
    { label: "4", R: 17.22, d: 11.4, nd: 1.62229, elemId: 3, sd: 10.6 },
    { label: "5", R: -16.73, d: 0.85, nd: 1.56, elemId: 4, sd: 10.6 },
    { label: "6", R: 136.75, d: 1.75, nd: 1.0, elemId: 0, sd: 10.2 },

    { label: "STO", R: 1e15, d: 0.5, nd: 1.0, elemId: 0, sd: 8.72 },

    { label: "7", R: 334.97, d: 0.85, nd: 1.58313, elemId: 5, sd: 10.2 },
    { label: "8", R: 15.02, d: 11.0, nd: 1.60881, elemId: 6, sd: 10.6 },
    { label: "9", R: -12.59, d: 9.3, nd: 1.66672, elemId: 7, sd: 10.6 },
    { label: "10", R: -26.42, d: 9.2, nd: 1.0, elemId: 0, sd: 14.6 },

    { label: "11", R: -19.32, d: 3.2, nd: 1.48749, elemId: 8, sd: 16.8 },
    { label: "12", R: -96.12, d: 51.855139, nd: 1.0, elemId: 0, sd: 21.0 },
  ],
  asph: {},
  var: {
    "12": [51.855139, 57.76854],
  },
  varLabels: [["12", "BF"]],
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "6" },
    { text: "G3", fromSurface: "7", toSurface: "10" },
    { text: "G4", fromSurface: "11", toSurface: "12" },
  ],
  doublets: [
    { text: "T1", fromSurface: "3", toSurface: "6" },
    { text: "T2", fromSurface: "7", toSurface: "10" },
  ],
  closeFocusM: 1.0,
  focusDescription: "Unit focus by bellows or helical extension; no internal focusing groups in the patent.",
  nominalFno: 4.5,
  fstopSeries: [4.5, 5.6, 8, 11, 16, 22, 32, 45],
  maxFstop: 45,
  offAxisFieldFrac: 0.45,
  scFill: 0.62,
  yScFill: 0.72,
} satisfies LensDataInput;

export default LENS_DATA;
