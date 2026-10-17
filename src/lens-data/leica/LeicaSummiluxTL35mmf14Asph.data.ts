import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * equivalent plate PT (1.50 mm, nd 1.5168, νd 64.20, R 16.000) and are modeled in
 * `rearPlates` (traced, not drawn). Source surface 21 keeps the patent's 18.13 mm
 * gap to PT; bf = 0.80 mm from PT to the image. No uniform scaling is used.
 *
 * The stop radius is derived from the design f-number. Refracting-surface
 * semi-diameters use the patent's published effective radii as modeled optical
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
  schema: 2,
  key: "leica-summilux-tl-35mm-f14-asph",
  maker: "Leica",
  name: "LEICA SUMMILUX-TL 35mm f/1.4 ASPH.",
  subtitle: "EP 3 029 504 A1 · Example 4 · strong production correlation; attribution unconfirmed",

  catalog: {
    lensMounts: ["l-mount"],
    imageFormat: "aps-c",
    specs: [
      "12 ELEMENTS / 8 GROUPS",
      "DESIGN EFL 34.43 mm",
      "MODELED f/1.446",
      "44.8° FULL FIELD",
      "4 ASPHERICAL SURFACES",
    ],
    elementCount: 12,
    groupCount: 8,
    focalLengthMm: { marketing: 35, design: 34.42881249293736 },
    fNumber: { marketing: 1.4, design: 1.4455940227813506 },
  },

  source: {
    patentNumber: "EP 3 029 504 A1",
    patentYear: 2016,
    authors: ["Keiko Yamada"],
    assignees: ["Konica Minolta, Inc."],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Positive Meniscus",
      nd: 1.834,
      vd: 37.35,
      indexReference: "d",
      focalLengthMm: 1006.9221758634375,
      glass: "NBFD10 class (coordinate-compatible spectral proxy; native d 1.834/37.35; supplier/melt unproven)",
      role: "Front element of Gr1a",
      diagramLabel: "L11",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Positive Meniscus",
      nd: 1.9229,
      vd: 20.88,
      indexReference: "d",
      focalLengthMm: 53.172187759239364,
      glass: "PBH21 class (coordinate-compatible spectral proxy; coordinate code 923209; supplier/melt unproven)",
      role: "Front component of cemented pair D1 in Gr1a",
      diagramLabel: "L12",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Negative Meniscus",
      nd: 1.5174,
      vd: 52.15,
      indexReference: "d",
      focalLengthMm: -37.95046053421186,
      glass: "E-CF6 class (coordinate-compatible spectral proxy; coordinate code 517522; supplier/melt unproven)",
      role: "Rear component of cemented pair D1 in Gr1a",
      diagramLabel: "L13",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L14",
      label: "L14",
      type: "Biconvex Positive",
      nd: 1.8348,
      vd: 42.72,
      indexReference: "d",
      focalLengthMm: 19.93550160635566,
      glass: "TAFD5F class (coordinate-compatible spectral proxy; coordinate code 835427; supplier/melt unproven)",
      role: "Front component of cemented pair D2 in Gr1a",
      diagramLabel: "L14",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L15",
      label: "L15",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.53,
      indexReference: "d",
      focalLengthMm: -19.139203093892615,
      glass: "E-FD4 class (coordinate-compatible spectral proxy; coordinate code 755275; supplier/melt unproven)",
      role: "Rear component of cemented pair D2 in Gr1a",
      diagramLabel: "L15",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L16",
      label: "L16",
      type: "Biconcave Negative",
      nd: 1.6889,
      vd: 31.16,
      indexReference: "d",
      focalLengthMm: -16.394060283657627,
      glass: "E-FD8 class (coordinate-compatible spectral proxy; coordinate code 689312; supplier/melt unproven)",
      role: "Front component of cemented pair D3 in Gr1b",
      diagramLabel: "L16",
      cemented: "D3",
    },
    {
      id: 7,
      name: "L17",
      label: "L17",
      type: "Biconvex Positive",
      nd: 1.7292,
      vd: 54.67,
      indexReference: "d",
      focalLengthMm: 23.254846956364883,
      glass: "TAC8 class (coordinate-compatible spectral proxy; coordinate code 729547; supplier/melt unproven)",
      role: "Rear component of cemented pair D3 in Gr1b",
      diagramLabel: "L17",
      cemented: "D3",
    },
    {
      id: 8,
      name: "L18",
      label: "L18",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.7432,
      vd: 49.3,
      indexReference: "d",
      focalLengthMm: 28.99945918309583,
      glass: "S-LAM60 class (coordinate-compatible spectral proxy; coordinate code 743493; supplier/melt unproven)",
      role: "Two-asphere rear element of Gr1b",
      diagramLabel: "L18",
    },
    {
      id: 9,
      name: "L21",
      label: "L21",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.7432,
      vd: 49.3,
      indexReference: "d",
      focalLengthMm: -70.82691205104717,
      glass: "S-LAM60 class (coordinate-compatible spectral proxy; coordinate code 743493; supplier/melt unproven)",
      role: "Single-element negative inner-focus group Gr2",
      diagramLabel: "L21",
    },
    {
      id: 10,
      name: "L31",
      label: "L31",
      type: "Biconvex Positive",
      nd: 1.881,
      vd: 40.14,
      indexReference: "d",
      focalLengthMm: 48.043520111408455,
      glass: "TAFD33 class (coordinate-compatible spectral proxy; coordinate code 881401; supplier/melt unproven)",
      role: "Front positive element of Gr3",
      diagramLabel: "L31",
    },
    {
      id: 11,
      name: "L32",
      label: "L32",
      type: "Biconvex Positive",
      nd: 1.8348,
      vd: 42.72,
      indexReference: "d",
      focalLengthMm: 37.694854715753344,
      glass: "TAFD5F class (coordinate-compatible spectral proxy; coordinate code 835427; supplier/melt unproven)",
      role: "Front component of cemented pair D4 in Gr3",
      diagramLabel: "L32",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L33",
      label: "L33",
      type: "Biconcave Negative",
      nd: 1.6477,
      vd: 33.84,
      indexReference: "d",
      focalLengthMm: -34.91973640577568,
      glass: "H-ZF1 class (coordinate-compatible spectral proxy; coordinate code 648338; supplier/melt unproven)",
      role: "Rear component of cemented pair D4 in Gr3",
      diagramLabel: "L33",
      cemented: "D4",
    },
  ],

  surfaces: [
    { label: "1", R: 77.925, d: 2.78, sd: 17.008, medium: 1 },
    { label: "2", R: 84.502, d: 0.5, sd: 16.209 },
    { label: "3", R: 39.721, d: 4.37, sd: 15.326, medium: 2 },
    { label: "4", R: 197.43, d: 1.6, sd: 14.537, medium: 3 },
    { label: "5", R: 17.81, d: 4.81, sd: 11.6 },
    { label: "6", R: 29.847, d: 6.23, sd: 10.8, medium: 4 },
    { label: "7", R: -34.044, d: 1.3, sd: 10.434, medium: 5 },
    { label: "8", R: 25.531, d: 4.33, sd: 9.722 },
    // EP 3 029 504 A1 Example 4 surface-data table prints a 9.845 mm effective radius at the stop.
    { label: "STO", R: "flat", d: 5.32 },
    { label: "10", R: -18.468, d: 1.3, sd: 9.969, medium: 6 },
    { label: "11", R: 29.908, d: 6.89, sd: 12.7, medium: 7 },
    { label: "12", R: -35.357, d: 0.4, sd: 12.41 },
    {
      label: "13A",
      R: 55.611,
      d: 6.56,
      sd: 13.2,
      medium: 8,
      asphere: { K: 0, A4: -3.216e-6, A6: -4.801e-9, A8: 2.164e-11, A10: 4.021e-14, A12: 0, A14: 0 },
    },
    {
      label: "14A",
      R: -33.421,
      sd: 13.323,
      asphere: { K: 0, A4: 6.802e-6, A6: -8.283e-9, A8: 3.717e-11, A10: 8.35e-15, A12: 0, A14: 0 },
    },
    {
      label: "15A",
      R: 2000.0,
      d: 1.8,
      sd: 11.662,
      medium: 9,
      asphere: { K: 0, A4: 4.716e-5, A6: -2.777e-7, A8: 1.021e-9, A10: -1.8e-12, A12: 0, A14: 0 },
    },
    {
      label: "16A",
      R: 51.269,
      sd: 11.1,
      asphere: { K: 0, A4: 5.477e-5, A6: -2.745e-7, A8: 9.612e-10, A10: -1.649e-12, A12: 0, A14: 0 },
    },
    { label: "17", R: 204.37, d: 4.84, sd: 14.313, medium: 10 },
    { label: "18", R: -52.79, d: 0.21, sd: 14.6 },
    { label: "19", R: 47.533, d: 5.18, sd: 14.682, medium: 11 },
    { label: "20", R: -88.488, d: 1.5, sd: 14.458, medium: 12 },
    { label: "21", R: 30.586, d: 18.13, sd: 13.464 },
  ],

  focus: {
    closeFocusM: 0.4,
    description:
      "PUBLISHED inner focus: the single negative Gr2 element L21 moves 7.10 mm imageward from infinity (D14=2.29 mm, D16=12.12 mm) to the patent POS2 state at 306 mm from source surface 1 (D14=9.39 mm, D16=5.02 mm). The corresponding source object-to-image distance is approximately 0.4008 m; interpolation between endpoints is not a published mechanical trajectory.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: { "14A": { label: "D14", values: [[2.29, 9.39]] }, "16A": { label: "D16", values: [[12.12, 5.02]] } },

  aperture: { nominalFNumber: 1.4455940227813506, fStops: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16] },

  /* ── Plane-parallel plate PT (patent surfaces 22–23): traced, not drawn ── */
  rearPlates: [
    {
      label: "PT",
      thicknessMm: 1.5,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 0.8,
      sd: 16.0,
      source: "EP 3 029 504 A1, Example 4 surfaces 22–23 (¶0065) and bf (¶0067)",
    },
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

  layout: { yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
