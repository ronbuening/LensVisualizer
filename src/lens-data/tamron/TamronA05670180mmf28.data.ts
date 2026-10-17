import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * LENS DATA — TAMRON 70-180mm f/2.8 Di III VXD (A056 correlation)
 *
 * Data source: JP 2021-43375 A, Example 1 (Tamron Co., Ltd.; inventor Wataru Kusaka).
 * Product correlation: TAMRON 70-180mm F/2.8 Di III VXD, Model A056, Sony E / full-frame.
 * Numerical authority: patent prescription and independent d-line calculations.
 *
 * Physical construction: 19 elements / 14 groups; four aspherical surfaces. The model has 21 material entries
 * because the thin n=1.51460 layers ahead of physical L8 and L17 are retained as optically active bonded
 * aspheric layers. The patent does not identify those layers as resin; the hybrid/composite interpretation is
 * an explicit modeling inference.
 *
 * Focus status: PUBLISHED. Table 4 supplies the 850 mm shooting-distance endpoint at all three zoom positions.
 * Gf moves imageward while G6 moves objectward; no close-focus reconstruction is used. Zoom-only variable gaps
 * are D5, D12, and D15; zoom + focus gaps are D26, D29, and D32. The published three-point table is retained
 * because Gf and G6 reverse between the middle and tele states. Paragraph 0106 contradicts Table 3 for G6's
 * net wide-to-tele direction; the numerical table is preserved as model authority.
 *
 * Scaling: none (s = 1.0). Patent K is already the standard conic constant; no conversion is applied.
 * Cover glass: patent surfaces 37-38 (t = 2.500 mm, nd 1.51633, vd 64.14) and the trailing 1.000 mm air gap are
 * modeled physically in `rearPlates` (traced, not drawn). Surface 36A stores the patent's 29.793 mm gap to the
 * plate; the paraxial equivalent is the former air-equivalent 29.793 + 2.500/1.51633 + 1.000 = 32.441718 mm.
 *
 * Semi-diameters: patent Table 1 effective diameters phi are used as sd = phi/2 on active lens surfaces. The
 * source SDs leave a positive 0.206069 mm rim gap between surfaces 7-8 but exceed the default 90% shared-band
 * intrusion policy there (92.463%). gapSagFrac is explicitly set to 0.94 rather than altering patent SDs. This
 * is a geometry-policy override, not a layout/render concealment.
 *
 * The patent stop-plane phi=29.223 mm is effective-clear-diameter evidence, not treated as the open
 * mechanical iris. The stop radius is derived from the design f-number at each zoom station; nominalFno
 * remains 2.910 so zoom-state pupil geometry is governed by the modeled design aperture.
 *
 * Spectral data: the patent gives nd/vd only; no per-element nC, nF, ng, or dPgF values are authored.
 *
 * Manufacturer metadata sources:
 * https://www.tamron.com/global/consumer/lenses/a056/
 * https://www.tamron.com/global/consumer/lenses/a056/spec.html
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "tamron-a056-70-180-f28",
  maker: "Tamron",
  name: "TAMRON 70-180mm f/2.8 Di III VXD",
  subtitle: "JP 2021-43375 A Example 1 — A056 production-lens correlation",

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "135-full-frame",
    specs: [
      "19 ELEMENTS / 14 GROUPS",
      "70-180mm f/2.8 MARKETED",
      "72.102-174.600mm PUBLISHED DESIGN STATES",
      "f/2.910 MODELED DESIGN APERTURE",
      "4 ASPHERICAL SURFACES",
      "PUBLISHED DUAL-GROUP FLOATING FOCUS",
    ],
    elementCount: 19,
    groupCount: 14,
    focalLengthMm: { marketing: [70, 180], design: [72.106516, 174.597431] },
    fNumber: { marketing: 2.8, design: 2.91 },
  },

  source: {
    patentNumber: "JP 2021-43375 A",
    patentYear: 2021,
    authors: ["Wataru Kusaka"],
    assignees: ["Tamron Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.27,
      focalLengthMm: -291.325195,
      glass: "806333 — high-index optical glass (vendor unresolved)",
      role: "Front negative component of the weak cemented G1 doublet.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: 237.23969,
      glass: "437951 — ultra-low-dispersion crown (vendor unresolved)",
      role: "Positive low-dispersion partner in the front G1 cemented doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 175.789864,
      glass: "497816 — fluorophosphate low-dispersion crown (vendor unresolved)",
      role: "Second positive element completing G1.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.46,
      focalLengthMm: -100.490207,
      glass: "697555 — lanthanum-crown class (vendor unresolved)",
      role: "First negative element of G2.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: -94.938481,
      glass: "497816 — fluorophosphate low-dispersion crown (vendor unresolved)",
      role: "Negative low-dispersion member of the G2 cemented doublet.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 20.88,
      focalLengthMm: 103.878894,
      glass: "923209 — ultra-high-index dense-flint class (vendor unresolved)",
      role: "Positive high-index partner in the G2 cemented doublet.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.46,
      focalLengthMm: -92.720972,
      glass: "697555 — lanthanum-crown class (vendor unresolved)",
      role: "Rear negative element of G2.",
    },
    {
      id: 8,
      name: "L8a",
      label: "Element 8 bonded aspheric layer",
      type: "Bonded Aspheric Layer",
      nd: 1.5146,
      vd: 49.96,
      focalLengthMm: 806.67459,
      glass: "Unmatched (bonded aspheric optical layer; physical material not identified by patent)",
      role: "Thin layer carrying physical L8's object-side asphere; hybrid interpretation inferred.",
      diagramLabel: "8a",
      cemented: "H1",
    },
    {
      id: 9,
      name: "L8",
      label: "Element 8 substrate",
      type: "Biconvex Positive Substrate",
      nd: 1.83481,
      vd: 42.72,
      focalLengthMm: 60.569038,
      glass: "835427 — high-index lanthanum-glass class (vendor unresolved)",
      role: "Glass substrate of physical L8; together with L8a forms positive G3.",
      diagramLabel: "8",
      cemented: "H1",
    },
    {
      id: 10,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      focalLengthMm: 88.528956,
      glass: "593686 — low-dispersion crown class (vendor unresolved)",
      role: "Front positive element of G4.",
      diagramLabel: "9",
    },
    {
      id: 11,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 93.262091,
      glass: "497816 — fluorophosphate low-dispersion crown (vendor unresolved)",
      role: "Positive low-dispersion member of the first G4 cemented doublet.",
      diagramLabel: "10",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.85451,
      vd: 25.16,
      focalLengthMm: -66.317187,
      glass: "855252 — high-index flint class (vendor unresolved)",
      role: "Negative high-index partner of the first G4 cemented doublet.",
      diagramLabel: "11",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L12",
      label: "Element 12",
      type: "Plano-Concave Negative",
      nd: 1.90366,
      vd: 31.31,
      focalLengthMm: -32.357303,
      glass: "904313 — high-index lanthanum/flint class (vendor unresolved)",
      role: "Plano-concave negative member of the second G4 cemented doublet.",
      diagramLabel: "12",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 54.227925,
      glass: "497816 — fluorophosphate low-dispersion crown (vendor unresolved)",
      role: "Positive low-dispersion partner of the second G4 cemented doublet.",
      diagramLabel: "13",
      cemented: "D4",
    },
    {
      id: 15,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.60342,
      vd: 38.03,
      focalLengthMm: 42.115632,
      glass: "603380 — F5/TIM5-class flint (vendor unresolved)",
      role: "Rear positive element of G4.",
      diagramLabel: "14",
    },
    {
      id: 16,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      focalLengthMm: 107.509748,
      glass: "923209 — ultra-high-index dense-flint class (vendor unresolved)",
      role: "Positive member of the moving Gf focus doublet.",
      diagramLabel: "15",
      cemented: "D5",
    },
    {
      id: 17,
      name: "L16",
      label: "Element 16",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.62,
      focalLengthMm: -29.309501,
      glass: "773496 — lanthanum-flint class (vendor unresolved)",
      role: "Negative partner of the moving Gf focus doublet.",
      diagramLabel: "16",
      cemented: "D5",
    },
    {
      id: 18,
      name: "L17a",
      label: "Element 17 bonded aspheric layer",
      type: "Bonded Aspheric Layer",
      nd: 1.5146,
      vd: 49.96,
      focalLengthMm: -361.150116,
      glass: "Unmatched (bonded aspheric optical layer; physical material not identified by patent)",
      role: "Thin layer carrying physical L17's object-side asphere; hybrid interpretation inferred.",
      diagramLabel: "17a",
      cemented: "H2",
    },
    {
      id: 19,
      name: "L17",
      label: "Element 17 substrate",
      type: "Negative Meniscus Substrate",
      nd: 1.85451,
      vd: 25.16,
      focalLengthMm: -100.56922,
      glass: "855252 — high-index flint class (vendor unresolved)",
      role: "Glass substrate of physical L17; together with L17a forms negative G6.",
      diagramLabel: "17",
      cemented: "H2",
    },
    {
      id: 20,
      name: "L18",
      label: "Element 18",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.25,
      focalLengthMm: 27.40579,
      glass: "911353 — high-index optical glass (vendor unresolved)",
      role: "Front positive element of fixed G7.",
      diagramLabel: "18",
    },
    {
      id: 21,
      name: "L19",
      label: "Element 19",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.85108,
      vd: 40.12,
      focalLengthMm: -36.346419,
      glass: "851401 — high-index optical glass (vendor unresolved)",
      role: "Rear negative meniscus of fixed G7 with two aspherical surfaces.",
      diagramLabel: "19",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) Patent ¶0114 uses the same standard K convention as LensVisualizer. */
  surfaces: [
    { label: "1", R: 200.0, d: 1.5, sd: 30.25, medium: 1 },
    { label: "2", R: 107.65, d: 5.9, sd: 29.9755, medium: 2 },
    { label: "3", R: -2760.0, d: 0.2, sd: 29.937 },
    { label: "4", R: 88.88, d: 7.0, sd: 29.708, medium: 3 },
    { label: "5", R: -5000.0, sd: 29.4495 },
    { label: "6", R: -192.1, d: 1.0, sd: 17.3, medium: 4 },
    { label: "7", R: 110.42, d: 2.734, sd: 16.8235 },
    { label: "8", R: -114.0, d: 1.0, sd: 16.7925, medium: 5 },
    { label: "9", R: 80.74, d: 3.0, sd: 16.8955, medium: 6 },
    { label: "10", R: 502.6, d: 1.939, sd: 16.8615 },
    { label: "11", R: -99.5, d: 1.0, sd: 16.859, medium: 7 },
    { label: "12", R: 185.0, sd: 17.062 },
    {
      label: "13A",
      R: 80.6553,
      d: 0.25,
      sd: 17.8,
      medium: 8,
      asphere: { K: 0, A4: -3.6774e-6, A6: 2.997e-10, A8: -9.1982e-13, A10: 5.5729e-15, A12: -1.5995e-17, A14: 1.6461e-20 },
    },
    { label: "14", R: 100.0, d: 4.9, sd: 17.8045, medium: 9 },
    { label: "15", R: -100.0, sd: 17.778 },
    { label: "16", R: 74.05, d: 4.4, sd: 17.123, medium: 10 },
    { label: "17", R: -176.2, d: 0.2, sd: 16.8745 },
    { label: "18", R: 92.0, d: 4.2, sd: 16.095, medium: 11 },
    { label: "19", R: -92.0, d: 1.0, sd: 15.7115, medium: 12 },
    { label: "20", R: 148.3, d: 2.272, sd: 15.16 },
    { label: "STO", R: "flat", d: 2.074 },
    { label: "22", R: "flat", d: 1.0, sd: 14.3105, medium: 13 },
    { label: "23", R: 29.24, d: 7.5, sd: 13.7705, medium: 14 },
    { label: "24", R: -315.0, d: 0.201, sd: 13.7205 },
    { label: "25", R: 38.55, d: 5.6, sd: 13.6, medium: 15 },
    { label: "26", R: -70.5, sd: 13.4915 },
    { label: "27", R: 198.0, d: 1.8, sd: 11.504, medium: 16 },
    { label: "28", R: -198.0, d: 0.8, sd: 11.242, medium: 17 },
    { label: "29", R: 25.61, sd: 10.4 },
    {
      label: "30A",
      R: -463.4111,
      d: 0.15,
      sd: 12.969,
      medium: 18,
      asphere: { K: 0, A4: 1.2249e-5, A6: 1.1169e-8, A8: -1.3534e-10, A10: 8.8621e-13, A12: -1.9489e-15, A14: 0 },
    },
    { label: "31", R: 310.32, d: 1.0, sd: 12.991, medium: 19 },
    { label: "32", R: 67.2, sd: 13.1285 },
    { label: "33", R: 48.45, d: 6.0, sd: 13.9865, medium: 20 },
    { label: "34", R: -48.45, d: 4.762, sd: 14.0 },
    {
      label: "35A",
      R: -20.8842,
      d: 2.0,
      sd: 13.291,
      medium: 21,
      asphere: { K: 0, A4: 5.3883e-5, A6: -2.8626e-7, A8: 1.8129e-9, A10: -6.4552e-12, A12: 9.87e-15, A14: 1.5279e-18 },
    },
    {
      label: "36A",
      R: -67.1148,
      d: 29.793,
      sd: 13.9375,
      asphere: { K: 0, A4: 4.6766e-5, A6: -2.6564e-7, A8: 1.4488e-9, A10: -5.029e-12, A12: 8.296e-15, A14: -2.8195e-18 },
    },
  ],

  zoom: {
    // (moved from publishedStations) The close-focus row is source-tabulated.
    stations: [
      { focalLengthMm: 72.102, label: "Wide", published: true, publishedFocus: [1] },
      { focalLengthMm: 101.789, published: true, publishedFocus: [1] },
      { focalLengthMm: 174.6, label: "Tele", published: true, publishedFocus: [1] },
    ],
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.85,
    description:
      "PUBLISHED two-group floating focus: Gf moves imageward and G6 moves objectward from infinity to the patent's " +
      "850 mm shooting-distance state at each zoom position; no internal reconstruction is used.",
  },

  /* (moved from var) ── Published zoom and focus spacings ── */
  gaps: {
    "5": {
      label: "D5",
      values: [
        [3.247, 3.247],
        [30.546, 30.546],
        [62.724, 62.724],
      ],
    },
    "12": {
      label: "D12",
      values: [
        [29.248, 29.248],
        [19.092, 19.092],
        [1.0, 1.0],
      ],
    },
    "15": {
      label: "D15",
      values: [
        [3.329, 3.329],
        [1.686, 1.686],
        [1.069, 1.069],
      ],
    },
    "26": {
      label: "D26",
      values: [
        [2.115, 3.817],
        [2.75, 5.978],
        [1.901, 10.907],
      ],
    },
    "29": {
      label: "D29",
      values: [
        [15.413, 12.267],
        [15.587, 10.495],
        [15.512, 5.179],
      ],
    },
    "32": {
      label: "D32",
      values: [
        [2.419, 3.863],
        [1.612, 3.475],
        [2.535, 3.862],
      ],
    },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.91, fStops: [2.91, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

  /* ── Cover glass (patent surfaces 37–38): traced, not drawn ── */
  rearPlates: [
    {
      label: "CG",
      thicknessMm: 2.5,
      nd: 1.51633,
      vd: 64.14,
      glass: "S-BSL7",
      gapAfterMm: 1.0,
      source: "JP 2021-43375 A, Example 1 Table 1 surfaces 37–38",
    },
  ],

  /* ── Group and cemented-stack annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "5" },
    { text: "G2", fromSurface: "6", toSurface: "12" },
    { text: "G3", fromSurface: "13A", toSurface: "15" },
    { text: "G4", fromSurface: "16", toSurface: "26" },
    { text: "Gf", fromSurface: "27", toSurface: "29" },
    { text: "G6", fromSurface: "30A", toSurface: "32" },
    { text: "G7", fromSurface: "33", toSurface: "36A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "H1", fromSurface: "13A", toSurface: "15" },
    { text: "D3", fromSurface: "18", toSurface: "20" },
    { text: "D4", fromSurface: "22", toSurface: "24" },
    { text: "D5", fromSurface: "27", toSurface: "29" },
    { text: "H2", fromSurface: "30A", toSurface: "32" },
  ],

  layout: { yScFill: 0.45 },

  /* ── Geometry-policy and layout overrides ── */
  checks: { gapSagFrac: 0.94 },
} satisfies LensDataV2Input;

export default LENS_DATA;
