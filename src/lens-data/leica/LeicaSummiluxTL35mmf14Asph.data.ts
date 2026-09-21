import type { LensDataInput } from "../../types/optics.js";

/**
 * LEICA SUMMILUX-TL 35mm f/1.4 ASPH. — EP 3 029 504 A1, Example 4.
 *
 * Patent prescription: Konica Minolta, Inc.; inventor Keiko Yamada.
 * Production correlation to the Leica Summilux-TL 35 mm f/1.4 ASPH. is strong
 * but is not manufacturer-confirmed patent attribution.
 *
 * 12 physical elements / 8 air-separated groups / 4 aspherical surfaces.
 * Focus status: PUBLISHED. The single negative Gr2 element L21 moves imageward
 * by 7.10 mm from POS1 (infinity) to POS2 (306 mm from source surface 1).
 *
 * Source surfaces 22-23 are the patent's plane-parallel sensor-cover / low-pass
 * equivalent plate PT and are omitted under the current LensVisualizer data rule.
 * The final air gap after source surface 21 is therefore the d-line air-equivalent
 * 18.13 + 1.50 / 1.5168 + 0.80 = 19.91892405063291 mm. No uniform scaling is used.
 *
 * Semi-diameters use the patent's published effective radii as modeled optical
 * semi-diameters except source surface 11, which is widened from R_eff=11.836 mm
 * to sd=12.700 mm after exact off-axis containment exposed internal clipping at
 * the cemented L16/L17 junction in the midpoint/POS2 stress samples. This is a
 * model-aperture inference, not a correction to the patent or a measured barrel value.
 *
 * All authored refractive indices are the patent's native d-line values (587.56 nm).
 * Glass labels remain coordinate classes because the patent does not identify a
 * supplier or melt; compatible catalog curves are spectral proxies, not supplier identifications.
 */

const LENS_DATA = {
  key: "leica-summilux-tl-35mm-f14-asph",
  maker: "Leica",
  name: "LEICA SUMMILUX-TL 35mm f/1.4 ASPH.",
  subtitle: "EP 3 029 504 A1 · Example 4 · strong production correlation; attribution unconfirmed",
  specs: [
    "12 ELEMENTS / 8 GROUPS",
    "DESIGN EFL 34.43 mm",
    "MODELED f/1.446",
    "44.8° FULL FIELD",
    "4 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: 35,
  focalLengthDesign: 34.42881249293736,
  apertureMarketing: 1.4,
  apertureDesign: 1.4455940227813506,
  lensMounts: ["l-mount"],
  imageFormat: "aps-c",
  patentNumber: "EP 3 029 504 A1",
  patentAuthors: ["Keiko Yamada"],
  patentAssignees: ["Konica Minolta, Inc."],
  patentYear: 2016,
  elementCount: 12,
  groupCount: 8,

  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "L11",
      type: "Positive Meniscus",
      nd: 1.834,
      vd: 37.35,
      indexReference: "d",
      fl: 1006.9221758634375,
      glass: "NBFD10 class (coordinate-compatible spectral proxy; native d 1.834/37.35; supplier/melt unproven)",
      role: "Front element of Gr1a",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "L12",
      type: "Positive Meniscus",
      nd: 1.9229,
      vd: 20.88,
      indexReference: "d",
      fl: 53.172187759239364,
      glass: "PBH21 class (coordinate-compatible spectral proxy; coordinate code 923209; supplier/melt unproven)",
      cemented: "D1",
      role: "Front component of cemented pair D1 in Gr1a",
    },
    {
      id: 3,
      name: "L13",
      diagramLabel: "L13",
      label: "L13",
      type: "Negative Meniscus",
      nd: 1.5174,
      vd: 52.15,
      indexReference: "d",
      fl: -37.95046053421186,
      glass: "E-CF6 class (coordinate-compatible spectral proxy; coordinate code 517522; supplier/melt unproven)",
      cemented: "D1",
      role: "Rear component of cemented pair D1 in Gr1a",
    },
    {
      id: 4,
      name: "L14",
      diagramLabel: "L14",
      label: "L14",
      type: "Biconvex Positive",
      nd: 1.8348,
      vd: 42.72,
      indexReference: "d",
      fl: 19.93550160635566,
      glass: "TAFD5F class (coordinate-compatible spectral proxy; coordinate code 835427; supplier/melt unproven)",
      cemented: "D2",
      role: "Front component of cemented pair D2 in Gr1a",
    },
    {
      id: 5,
      name: "L15",
      diagramLabel: "L15",
      label: "L15",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.53,
      indexReference: "d",
      fl: -19.139203093892615,
      glass: "E-FD4 class (coordinate-compatible spectral proxy; coordinate code 755275; supplier/melt unproven)",
      cemented: "D2",
      role: "Rear component of cemented pair D2 in Gr1a",
    },
    {
      id: 6,
      name: "L16",
      diagramLabel: "L16",
      label: "L16",
      type: "Biconcave Negative",
      nd: 1.6889,
      vd: 31.16,
      indexReference: "d",
      fl: -16.394060283657627,
      glass: "E-FD8 class (coordinate-compatible spectral proxy; coordinate code 689312; supplier/melt unproven)",
      cemented: "D3",
      role: "Front component of cemented pair D3 in Gr1b",
    },
    {
      id: 7,
      name: "L17",
      diagramLabel: "L17",
      label: "L17",
      type: "Biconvex Positive",
      nd: 1.7292,
      vd: 54.67,
      indexReference: "d",
      fl: 23.254846956364883,
      glass: "TAC8 class (coordinate-compatible spectral proxy; coordinate code 729547; supplier/melt unproven)",
      cemented: "D3",
      role: "Rear component of cemented pair D3 in Gr1b",
    },
    {
      id: 8,
      name: "L18",
      diagramLabel: "L18",
      label: "L18",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.7432,
      vd: 49.3,
      indexReference: "d",
      fl: 28.99945918309583,
      glass: "S-LAM60 class (coordinate-compatible spectral proxy; coordinate code 743493; supplier/melt unproven)",
      role: "Two-asphere rear element of Gr1b",
    },
    {
      id: 9,
      name: "L21",
      diagramLabel: "L21",
      label: "L21",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.7432,
      vd: 49.3,
      indexReference: "d",
      fl: -70.82691205104717,
      glass: "S-LAM60 class (coordinate-compatible spectral proxy; coordinate code 743493; supplier/melt unproven)",
      role: "Single-element negative inner-focus group Gr2",
    },
    {
      id: 10,
      name: "L31",
      diagramLabel: "L31",
      label: "L31",
      type: "Biconvex Positive",
      nd: 1.881,
      vd: 40.14,
      indexReference: "d",
      fl: 48.043520111408455,
      glass: "TAFD33 class (coordinate-compatible spectral proxy; coordinate code 881401; supplier/melt unproven)",
      role: "Front positive element of Gr3",
    },
    {
      id: 11,
      name: "L32",
      diagramLabel: "L32",
      label: "L32",
      type: "Biconvex Positive",
      nd: 1.8348,
      vd: 42.72,
      indexReference: "d",
      fl: 37.694854715753344,
      glass: "TAFD5F class (coordinate-compatible spectral proxy; coordinate code 835427; supplier/melt unproven)",
      cemented: "D4",
      role: "Front component of cemented pair D4 in Gr3",
    },
    {
      id: 12,
      name: "L33",
      diagramLabel: "L33",
      label: "L33",
      type: "Biconcave Negative",
      nd: 1.6477,
      vd: 33.84,
      indexReference: "d",
      fl: -34.91973640577568,
      glass: "H-ZF1 class (coordinate-compatible spectral proxy; coordinate code 648338; supplier/melt unproven)",
      cemented: "D4",
      role: "Rear component of cemented pair D4 in Gr3",
    },
  ],

  surfaces: [
    { label: "1", R: 77.925, d: 2.78, nd: 1.834, elemId: 1, sd: 17.008 },
    { label: "2", R: 84.502, d: 0.5, nd: 1.0, elemId: 0, sd: 16.209 },
    { label: "3", R: 39.721, d: 4.37, nd: 1.9229, elemId: 2, sd: 15.326 },
    { label: "4", R: 197.43, d: 1.6, nd: 1.5174, elemId: 3, sd: 14.537 },
    { label: "5", R: 17.81, d: 4.81, nd: 1.0, elemId: 0, sd: 11.6 },
    { label: "6", R: 29.847, d: 6.23, nd: 1.8348, elemId: 4, sd: 10.8 },
    { label: "7", R: -34.044, d: 1.3, nd: 1.7552, elemId: 5, sd: 10.434 },
    { label: "8", R: 25.531, d: 4.33, nd: 1.0, elemId: 0, sd: 9.722 },
    { label: "STO", R: 1e15, d: 5.32, nd: 1.0, elemId: 0, sd: 9.845 },
    { label: "10", R: -18.468, d: 1.3, nd: 1.6889, elemId: 6, sd: 9.969 },
    { label: "11", R: 29.908, d: 6.89, nd: 1.7292, elemId: 7, sd: 12.7 },
    { label: "12", R: -35.357, d: 0.4, nd: 1.0, elemId: 0, sd: 12.41 },
    { label: "13A", R: 55.611, d: 6.56, nd: 1.7432, elemId: 8, sd: 13.2 },
    { label: "14A", R: -33.421, d: 2.29, nd: 1.0, elemId: 0, sd: 13.323 },
    { label: "15A", R: 2000.0, d: 1.8, nd: 1.7432, elemId: 9, sd: 11.662 },
    { label: "16A", R: 51.269, d: 12.12, nd: 1.0, elemId: 0, sd: 11.1 },
    { label: "17", R: 204.37, d: 4.84, nd: 1.881, elemId: 10, sd: 14.313 },
    { label: "18", R: -52.79, d: 0.21, nd: 1.0, elemId: 0, sd: 14.6 },
    { label: "19", R: 47.533, d: 5.18, nd: 1.8348, elemId: 11, sd: 14.682 },
    { label: "20", R: -88.488, d: 1.5, nd: 1.6477, elemId: 12, sd: 14.458 },
    { label: "21", R: 30.586, d: 19.91892405063291, nd: 1.0, elemId: 0, sd: 13.464 },
  ],

  asph: {
    "13A": {
      K: 0,
      A4: -3.216e-6,
      A6: -4.801e-9,
      A8: 2.164e-11,
      A10: 4.021e-14,
      A12: 0,
      A14: 0,
    },
    "14A": {
      K: 0,
      A4: 6.802e-6,
      A6: -8.283e-9,
      A8: 3.717e-11,
      A10: 8.35e-15,
      A12: 0,
      A14: 0,
    },
    "15A": {
      K: 0,
      A4: 4.716e-5,
      A6: -2.777e-7,
      A8: 1.021e-9,
      A10: -1.8e-12,
      A12: 0,
      A14: 0,
    },
    "16A": {
      K: 0,
      A4: 5.477e-5,
      A6: -2.745e-7,
      A8: 9.612e-10,
      A10: -1.649e-12,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "14A": [2.29, 9.39],
    "16A": [12.12, 5.02],
  },
  varLabels: [
    ["14A", "D14"],
    ["16A", "D16"],
  ],

  groups: [
    { text: "Gr1a", fromSurface: "1", toSurface: "8" },
    { text: "Gr1b", fromSurface: "10", toSurface: "14A" },
    { text: "Gr2 (FOCUS)", fromSurface: "15A", toSurface: "16A" },
    { text: "Gr3", fromSurface: "17", toSurface: "21" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "10", toSurface: "12" },
    { text: "D4", fromSurface: "19", toSurface: "21" },
  ],

  closeFocusM: 0.4,
  focusDescription:
    "PUBLISHED inner focus: the single negative Gr2 element L21 moves 7.10 mm imageward from infinity (D14=2.29 mm, D16=12.12 mm) to the patent POS2 state at 306 mm from source surface 1 (D14=9.39 mm, D16=5.02 mm). The corresponding source object-to-image distance is approximately 0.4008 m; interpolation between endpoints is not a published mechanical trajectory.",

  nominalFno: 1.4455940227813506,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
