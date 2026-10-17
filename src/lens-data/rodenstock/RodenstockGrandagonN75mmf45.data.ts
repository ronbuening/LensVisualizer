import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
  schema: 2,
  key: "rodenstock-grandagon-n-75mm-f45",
  maker: "Rodenstock",
  name: "RODENSTOCK GRANDAGON-N 75mm f/4.5",
  subtitle: "DE 2444954 A1 Example 3",

  catalog: {
    lensMounts: ["large-format-lens-board"],
    imageFormat: "4x5",
    specs: ["8 elements / 4 groups", "f′ = 75 mm", "1:4.5", "105° / 195 mm image circle", "All-spherical"],
    elementCount: 8,
    groupCount: 4,
    focalLengthMm: { marketing: 75, design: 74.932 },
    fNumber: { marketing: 4.5, design: 4.501 },
  },

  source: {
    patentNumber: "DE 2444954 A1",
    patentYear: 1976,
    authors: ["Franz Schlegel", "Josef Weiß"],
    assignees: ["Optische Werke G. Rodenstock"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.4645,
      vd: 65.77,
      focalLengthMm: -56.2,
      glass: "FK3 (Schott inquiry glass)",
      role: "Front low-index negative field meniscus.",
      nC: 1.46232,
      nF: 1.46939,
      ng: 1.47315,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.6727,
      vd: 32.21,
      focalLengthMm: -97.9,
      glass: "SF5 (Schott legacy dense flint)",
      role: "Leading flint element of the front cemented triplet.",
      cemented: "T1",
      nC: 1.66661,
      nF: 1.6875,
      ng: 1.69986,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.62229,
      vd: 53.27,
      focalLengthMm: 15.7,
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
      focalLengthMm: -26.6,
      glass: "FEL3 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Trailing negative element of the front cemented triplet; FEL3 reproduces the patent e-line coordinate.",
      cemented: "T1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.58313,
      vd: 59.3,
      focalLengthMm: -27.0,
      glass: "S-BAL42 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Thin leading negative element of the rear cemented triplet.",
      cemented: "T2",
      nC: 1.58014,
      nF: 1.58997,
      ng: 1.59532,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.60881,
      vd: 58.9,
      focalLengthMm: 13.2,
      glass: "SK3 (SUMITA catalog equivalent for patent coordinate; historical production supplier unspecified)",
      role: "Strong positive dense-crown core of the rear cemented triplet.",
      cemented: "T2",
      nC: 1.60567,
      nF: 1.61601,
      ng: 1.62163,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.66672,
      vd: 48.4,
      focalLengthMm: -49.3,
      glass: "BaF11 (Schott legacy barium flint)",
      role: "Trailing barium-flint corrector of the rear cemented triplet.",
      cemented: "T2",
      nC: 1.6626,
      nF: 1.67638,
      ng: 1.68412,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.4,
      focalLengthMm: -50.3,
      glass: "FK5 / N-FK5 class (Schott)",
      role: "Rear low-index negative field meniscus.",
      nC: 1.48535,
      nF: 1.49227,
      ng: 1.49593,
    },
  ],

  surfaces: [
    { label: "1", R: 75.8, d: 5.5, sd: 21.0, medium: 1 },
    { label: "2", R: 18.97, d: 9.85, sd: 16.8 },

    { label: "3", R: 30.18, d: 12.6, sd: 14.6, medium: 2 },
    { label: "4", R: 17.22, d: 11.4, sd: 10.6, medium: 3 },
    { label: "5", R: -16.73, d: 0.85, sd: 10.6, medium: 4 },
    { label: "6", R: 136.75, d: 1.75, sd: 10.2 },

    { label: "STO", R: "flat", d: 0.5 },

    { label: "7", R: 334.97, d: 0.85, sd: 10.2, medium: 5 },
    { label: "8", R: 15.02, d: 11.0, sd: 10.6, medium: 6 },
    { label: "9", R: -12.59, d: 9.3, sd: 10.6, medium: 7 },
    { label: "10", R: -26.42, d: 9.2, sd: 14.6 },

    { label: "11", R: -19.32, d: 3.2, sd: 16.8, medium: 8 },
    { label: "12", R: -96.12, sd: 21.0 },
  ],

  focus: {
    closeFocusM: 1.0,
    description: "Unit focus by bellows or helical extension; no internal focusing groups in the patent.",
  },

  gaps: { "12": { label: "BF", values: [[51.855139, 57.76854]] } },

  aperture: { nominalFNumber: 4.5, fStops: [4.5, 5.6, 8, 11, 16, 22, 32, 45], maxFNumber: 45 },

  projection: { kind: "rectilinear", fullFieldDeg: 105, maxTraceFieldDeg: 52.5 },

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

  layout: { scFill: 0.62, yScFill: 0.72 },

  rays: { offAxisFieldFrac: 0.45 },
} satisfies LensDataV2Input;

export default LENS_DATA;
