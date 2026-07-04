import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AF ZOOM-NIKKOR 28-80mm f/3.3-5.6G              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 5,485,314, Fourth Embodiment / Table 4.           ║
 * ║  Nikon/Sato negative-positive two-group standard zoom.              ║
 * ║  Production count: 6 elements / 6 air-separated groups.            ║
 * ║  Data model count: 7 element entries because the hybrid L1 resin    ║
 * ║  layer is modeled explicitly as a thin cemented optical element.    ║
 * ║  Aspherical surfaces: 1, on the air-contact rear face of L1.        ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: D5 (G1-G2), D13 (L6-flare stopper), D14       ║
 * ║  (flare stopper-image). The patent publishes infinity-focus zoom   ║
 * ║  positions only, so the close-focus entries are intentionally equal ║
 * ║  to the infinity entries rather than inventing an undocumented      ║
 * ║  focus cam.                                                        ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║  The patent does not list clear apertures. Semi-diameters are       ║
 * ║  renderer-safe estimates constrained by paraxial ray envelopes,     ║
 * ║  minimum edge thickness, element SD ratio ≤ 1.25, cross-gap sag     ║
 * ║  intrusion ≤ 90% of the air gap, and sd/|R| < 0.90. They should     ║
 * ║  not be read as Nikon production clear-aperture values.             ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-af-zoom-nikkor-28-80mm-f33-56g",
  maker: "Nikon",
  name: "NIKON AF ZOOM-NIKKOR 28-80mm f/3.3-5.6 G",
  subtitle: "US 5,485,314 Example 4 — Nikon / Haruo Sato",
  specs: [
    "6 production elements / 6 air-spaced groups",
    "Negative-positive two-group zoom",
    "Patent EFL 28.8-77.6 mm",
    "Marketed f/3.3-5.6",
    "1 hybrid aspherical element",
    "Nikon F / 135 full-frame",
  ],

  focalLengthMarketing: [28, 80],
  focalLengthDesign: [28.8, 77.6],
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentYear: 1996,
  elementCount: 6,
  groupCount: 6,

  elements: [
    {
      id: 1,
      name: "L1g",
      label: "L1 glass substrate",
      type: "Negative Meniscus",
      nd: 1.77279,
      vd: 49.5,
      fl: -31.97,
      glass: "S-LAH66 class (OHARA)",
      cemented: "H1",
      role: "High-index glass body of the compound negative meniscus in the first zoom group.",
    },
    {
      id: 2,
      name: "L1r",
      label: "L1 resin aspherical layer",
      type: "Thin Resin Aspherical Layer",
      nd: 1.49712,
      vd: 55.9,
      fl: -254.93,
      glass: "UV-curing optical resin (patent)",
      cemented: "H1",
      role: "Thin compound aspherical correction layer bonded to the rear of L1.",
    },
    {
      id: 3,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.80458,
      vd: 25.5,
      fl: 80.34,
      glass: "S-TIH6 class (OHARA)",
      role: "Positive high-dispersion meniscus completing the negative first zoom group.",
    },
    {
      id: 4,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.64,
      vd: 60.0,
      fl: 35.38,
      glass: "S-BSM81 (OHARA)",
      role: "Leading positive element of the rear converging zoom group.",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.1,
      fl: 47.18,
      glass: "J-BK7A (HIKARI) / N-BK7 class (SCHOTT)",
      role: "Low-dispersion crown element immediately behind the aperture stop.",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.79504,
      vd: 28.6,
      fl: -17.52,
      glass: "795286 - J-LAFH3 (HIKARI; no source-backed catalog match)",
      role: "Strong negative field-flattening and achromatizing element within G2.",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.64831,
      vd: 33.7,
      fl: 37.73,
      glass: "J-SF2 / S-TIM22 / N-SF2 class",
      role: "Rear positive dense-flint element providing the final convergence before the image plane.",
    },
  ],

  surfaces: [
    { label: "1", R: 97.086, d: 2.2, nd: 1.77279, elemId: 1, sd: 18.0 },
    { label: "2", R: 19.5, d: 0.03, nd: 1.49712, elemId: 2, sd: 16.0 },
    { label: "3A", R: 16.891, d: 7.81, nd: 1.0, elemId: 0, sd: 14.6 },
    { label: "4", R: 26.633, d: 3.8, nd: 1.80458, elemId: 3, sd: 16.2 },
    { label: "5", R: 42.414, d: 39.2856, nd: 1.0, elemId: 0, sd: 16.2 },
    { label: "6", R: 25.554, d: 4.1, nd: 1.64, elemId: 4, sd: 11.0 },
    { label: "7", R: -186.207, d: 0.7, nd: 1.0, elemId: 0, sd: 9.8 },
    { label: "STO", R: 1e15, d: 0.7, nd: 1.0, elemId: 0, sd: 7.9 },
    { label: "8", R: 22.446, d: 3.45, nd: 1.5168, elemId: 5, sd: 7.9 },
    { label: "9", R: 267.68, d: 0.7, nd: 1.0, elemId: 0, sd: 7.4 },
    { label: "10", R: -61.313, d: 6.85, nd: 1.79504, elemId: 6, sd: 7.7 },
    { label: "11", R: 18.917, d: 1.35, nd: 1.0, elemId: 0, sd: 6.45 },
    { label: "12", R: 141.576, d: 2.45, nd: 1.64831, elemId: 7, sd: 7.6 },
    { label: "13", R: -29.366, d: 0.0, nd: 1.0, elemId: 0, sd: 7.6 },
    { label: "14", R: 1e15, d: 42.8194, nd: 1.0, elemId: 0, sd: 8.4 },
  ],

  asph: {
    "3A": {
      K: -0.3431,
      A4: -4.309e-6,
      A6: -1.4986e-8,
      A8: 2.6086e-11,
      A10: -2.6365e-13,
      A12: 0,
      A14: 0,
    },
  },

  zoomPositions: [28.8, 50.0, 77.6],
  zoomLabels: ["28.8 mm", "50.0 mm", "77.6 mm"],
  zoomStep: 0.004,
  nominalFno: [3.3, 4.5, 5.6],
  var: {
    "5": [
      [39.2856, 39.2856],
      [13.4711, 13.4711],
      [0.9985, 0.9985],
    ],
    "13": [
      [0.0, 0.0],
      [8.0, 8.0],
      [16.0, 16.0],
    ],
    "14": [
      [42.8194, 42.8194],
      [50.9667, 50.9667],
      [63.9884, 63.9884],
    ],
  },
  varLabels: [
    ["5", "D5 / G1-G2"],
    ["13", "D13 / L6-S"],
    ["14", "D14 / S-IMG"],
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "5" },
    { text: "G2", fromSurface: "6", toSurface: "13" },
  ],
  doublets: [{ text: "Hybrid L1", fromSurface: "1", toSurface: "3A" }],

  closeFocusM: 0.35,
  focusDescription:
    "Production close focus is 0.35 m, but US 5,485,314 publishes only infinity-focus zoom spacings; close focus is therefore not optically modeled.",
  fstopSeries: [3.3, 4, 4.5, 5.6, 8, 11, 16, 22, 32, 38],
  maxFstop: 38,
  apertureBlades: 7,

  scFill: 0.63,
  yScFill: 0.47,
  offAxisFieldFrac: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
