import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — PANASONIC LUMIX S 24-105mm f/4 MACRO O.I.S.                          ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Patent source: JP 2020-118738 A, Numerical Example 1.                             ║
 * ║  Product correlation: strong inference, not an explicit statement in the patent.   ║
 * ║  Native-scale model: 16 elements / 13 air-spaced groups / 5 functional groups.     ║
 * ║  Eight aspherical surfaces on L5, L8, L13, and L14.                                ║
 * ║                                                                                      ║
 * ║  Focus status: CONSTRAINED_RECONSTRUCTION. The patent publishes G4 imageward       ║
 * ║  focusing, a 13.76 mm tele travel, 300 mm object-to-image distance, and about      ║
 * ║  0.5× tele magnification, but no close-focus spacing table. G4-only motion was     ║
 * ║  solved at all three zoom positions on the physical track (plate P traced)         ║
 * ║  while preserving d27 + d29 (re-solved 2026-09-23): an object 300 mm from          ║
 * ║  the image plane is in paraxial focus. Imageward travel is 1.600518 /              ║
 * ║  4.619460 / 13.722694 mm. These are reconstructions, not patent values.            ║
 * ║                                                                                      ║
 * ║  Zoom gaps: 6, 14, 27A, 29A, and 33. G3-G4 and G4-G5 reverse between the middle   ║
 * ║  and tele positions. The aperture stop moves with G3. Its radius is derived from   ║
 * ║  the design f-number at each station and is largest at tele, 10.893 mm; scalar     ║
 * ║  nominalFNumber uses the normalized constant-aperture model.                       ║
 * ║  The patent's 40.9808°-12.0606° values are half-field angles ω, not full fields.    ║
 * ║                                                                                      ║
 * ║  Normalization: the three 0.005 mm UV-adhesive planes are collapsed into the       ║
 * ║  preceding element thicknesses. Surface 33 stores the physical patent d33            ║
 * ║  (21.029 / 39.997 / 45.629 mm); parallel plate P (2.1 mm, nd 1.51680,                ║
 * ║  νd 64.2) and the 2.7 mm air to the image are in `rearPlates`: traced,               ║
 * ║  not drawn. The air-equivalent BF is unchanged. No scale is applied.                 ║
 * ║                                                                                      ║
 * ║  Semi-diameters: inferred from exact and reduced-angle axial/full-field bundles in  ║
 * ║  all six zoom/focus states, checked against patent Figure 1, then constrained by    ║
 * ║  edge thickness, actual aspherical rim slope, conic validity, shared-band gap       ║
 * ║  clearance, off-axis containment, and render-trim surrogates.                      ║
 * ║  Surface 7 was raised to pass the traced wide chief ray to the patent's design image ║
 * ║  height Y = 19.60 mm (2026-09-24 field-coverage audit).                              ║
 * ║                                                                                      ║
 * ║  Glass labels are conservative six-digit nd/vd classes or an explicit Unmatched    ║
 * ║  label. nC, nF, ng, and dPgF are not authored because the patent gives no line     ║
 * ║  data and the optical constants do not establish unique vendor dispersion curves.  ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "panasonic-lumix-s-24-105-f4-macro-ois",
  maker: "Panasonic",
  name: "PANASONIC LUMIX S 24-105mm f/4 MACRO O.I.S.",
  subtitle: "JP 2020-118738 A, Numerical Example 1 — strong inferred S-R24105 correlation",

  catalog: {
    lensMounts: ["l-mount"],
    imageFormat: "135-full-frame",
    specs: [
      "16 ELEMENTS / 13 GROUPS",
      "DESIGN f = 25.003-100.569 mm",
      "MODELED F/4.119",
      "ω = 40.98°-12.06°",
      "8 ASPHERICAL SURFACES",
      "0.300 m / 0.494× TELE MODEL",
    ],
    elementCount: 16,
    groupCount: 13,
    focalLengthMm: { marketing: [24, 105], design: [25.002987, 100.568809] },
    fNumber: { marketing: 4, design: 4.1194 },
  },

  source: {
    patentNumber: "JP 2020-118738 A",
    patentYear: 2020,
    authors: ["Hiroaki Suzuki", "Yuka Kudo", "Yoshiaki Kurioka"],
    assignees: ["Panasonic Intellectual Property Management Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus, convex to object",
      nd: 1.92286,
      vd: 20.9,
      focalLengthMm: -248.897072,
      glass: "923209 — high-index flint class",
      role: "Negative front member of positive zoom group G1.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      focalLengthMm: 162.49294,
      glass: "729547 — lanthanum crown class",
      role: "Positive cemented partner establishing the net positive power of G1.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus, convex to object",
      nd: 1.72916,
      vd: 54.7,
      focalLengthMm: 116.753242,
      glass: "729547 — lanthanum crown class",
      role: "Rear positive meniscus completing moving group G1.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus, convex to object",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -24.248169,
      glass: "773496 — lanthanum crown class",
      role: "Strong negative entrance element of variator group G2.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus (2× Asph), convex to image",
      nd: 1.80755,
      vd: 40.9,
      focalLengthMm: -50.273604,
      glass: "808409 — molded high-index glass class",
      role: "Doubly aspherical negative variator element for wide-angle aberration control.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.92119,
      vd: 24,
      focalLengthMm: 36.056399,
      glass: "921240 — dense flint class",
      role: "Positive high-index component within the net-negative G2 variator.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus, convex to image",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -66.914547,
      glass: "773496 — lanthanum crown class",
      role: "Rear negative meniscus of G2 immediately before the aperture stop.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus (2× Asph), convex to object",
      nd: 1.6882,
      vd: 31.1,
      focalLengthMm: 40.101124,
      glass: "Unmatched (688311; M-FD80 / S-TIM28 / J-SF8 class)",
      role: "Doubly aspherical entrance element of positive group G3.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus, convex to object",
      nd: 1.8707,
      vd: 40.7,
      focalLengthMm: -56.940936,
      glass: "871407 — high-index lanthanum glass class",
      role: "Negative front member of the first G3 cemented pair.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus, convex to object",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 54.997366,
      glass: "497816 — ED fluorophosphate crown class",
      role: "Low-dispersion positive partner in the first G3 cemented pair.",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus, convex to object",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -28.012841,
      glass: "847238 — dense flint class",
      role: "Negative front member of the second G3 cemented pair.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: 35.912961,
      glass: "437951 — UED fluorophosphate class",
      role: "Ultra-low-dispersion positive partner in the second G3 cemented pair.",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.55333,
      vd: 71.8,
      focalLengthMm: 35.009818,
      glass: "553718 — aspherical ED glass class (M-FCD500 near match)",
      role: "Single-element O.I.S. unit in G3, translated perpendicular to the optical axis.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.55333,
      vd: 71.8,
      focalLengthMm: -47.661981,
      glass: "553718 — aspherical ED glass class (M-FCD500 near match)",
      role: "Single internal focusing element forming negative group G4.",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: -194.172794,
      glass: "497816 — ED fluorophosphate crown class",
      role: "Negative ED element immediately behind the focus lens in G5.",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Positive Meniscus, convex to object",
      nd: 1.90043,
      vd: 37.4,
      focalLengthMm: 78.852647,
      glass: "900374 — high-index lanthanum glass class",
      role: "Final positive element completing rear group G5.",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) Patent convention is the standard conic constant K: K = 0 is a spherical base. */
  surfaces: [
    { label: "1", R: 280, d: 1.705, sd: 31.5, medium: 1 },
    { label: "3", R: 125.8144, d: 4.9, sd: 31, medium: 2 },
    { label: "4", R: -2000, d: 0.2, sd: 31 },
    { label: "5", R: 62.087, d: 5.44, sd: 28.2, medium: 3 },
    { label: "6", R: 220.8867, sd: 28.2 },
    { label: "7", R: 124.3864, d: 1.2, sd: 16.9, medium: 4 },
    { label: "8", R: 16.2116, d: 10.36, sd: 13.1 },
    {
      label: "9A",
      R: -33.929,
      d: 1.2,
      sd: 14.2,
      medium: 5,
      asphere: { K: 0, A4: 4.45022e-5, A6: -5.52511e-7, A8: 3.75457e-9, A10: -1.55004e-11, A12: 2.73712e-14, A14: 0 },
    },
    {
      label: "10A",
      R: -209.797,
      d: 1.22,
      sd: 14.2,
      asphere: { K: 0, A4: 3.22285e-5, A6: -5.67377e-7, A8: 3.84163e-9, A10: -1.61204e-11, A12: 2.8501e-14, A14: 0 },
    },
    { label: "11", R: 138.6744, d: 3.33, sd: 13.8, medium: 6 },
    { label: "12", R: -43.173, d: 1.77, sd: 12.4 },
    { label: "13", R: -24.4345, d: 0.8, sd: 13, medium: 7 },
    { label: "14", R: -47, sd: 13 },
    // JP 2020-118738 A, Numerical Example 1, Table 3A (infinity) prints stop radius 絞り半径 CIR
    // 7.2700 / 9.1250 / 10.8930 mm at wide / middle / tele.
    { label: "STO", R: "flat", d: 1.2 },
    {
      label: "16A",
      R: 25.5,
      d: 4.55,
      sd: 12.5,
      medium: 8,
      asphere: { K: 0, A4: -5.20686e-7, A6: 5.98614e-8, A8: -1.43541e-9, A10: 1.04537e-11, A12: -3.02756e-14, A14: 0 },
    },
    {
      label: "17A",
      R: 311.0946,
      d: 0.7,
      sd: 12.5,
      asphere: { K: 0, A4: 7.38509e-6, A6: 4.63019e-8, A8: -1.39981e-9, A10: 1.04276e-11, A12: -3.09412e-14, A14: 0 },
    },
    { label: "18", R: 19.3213, d: 0.905, sd: 12.1, medium: 9 },
    { label: "20", R: 13.6, d: 4.34, sd: 12, medium: 10 },
    { label: "21", R: 24.1999, d: 3.25, sd: 12 },
    { label: "22", R: 84.5703, d: 0.805, sd: 11.8, medium: 11 },
    { label: "24", R: 18.4419, d: 5.21, sd: 11.8, medium: 12 },
    { label: "25", R: -96.2763, d: 0.5, sd: 13.4 },
    {
      label: "26A",
      R: 30.2374,
      d: 5,
      sd: 13.3,
      medium: 13,
      asphere: { K: 0, A4: 3.90077e-6, A6: -5.00465e-8, A8: 1.45882e-9, A10: -1.62372e-11, A12: 9.28054e-14, A14: 0 },
    },
    {
      label: "27A",
      R: -50.7348,
      sd: 13.3,
      asphere: { K: 0, A4: 1.50035e-5, A6: -3.78157e-8, A8: 1.43815e-9, A10: -1.72507e-11, A12: 1.03537e-13, A14: 0 },
    },
    {
      label: "28A",
      R: -68.6757,
      d: 1.47,
      sd: 12,
      medium: 14,
      asphere: { K: 13.584, A4: 1.325e-4, A6: -1.71126e-6, A8: 1.83203e-8, A10: -1.24693e-10, A12: 3.7457e-13, A14: 0 },
    },
    {
      label: "29A",
      R: 43.1408,
      sd: 12,
      asphere: {
        K: 1.27323,
        A4: 1.25914e-4,
        A6: -1.60049e-6,
        A8: 1.58641e-8,
        A10: -1.01935e-10,
        A12: 2.89438e-13,
        A14: 0,
      },
    },
    { label: "30", R: -106.5052, d: 1, sd: 18, medium: 15 },
    { label: "31", R: 1030.8842, d: 0.2, sd: 18.1 },
    { label: "32", R: 61.5545, d: 3.72, sd: 18.2, medium: 16 },
    { label: "33", R: 449.3914, sd: 18.2 }, // D33 var — gap to plate P
  ],

  zoom: {
    stations: [
      { focalLengthMm: 25.0078, label: "Wide" },
      { focalLengthMm: 50.1541 },
      { focalLengthMm: 100.5897, label: "Tele" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.3,
    description:
      "CONSTRAINED_RECONSTRUCTION: G4 (L14) translates imageward by 1.600518 / 4.619460 / 13.722694 mm from infinity to a 0.300 m object-to-image state (solved on the physical track through plate P) at wide / middle / tele. The adjacent D27 and D29 gaps change equally and oppositely. The normalized tele state gives 0.4943× versus the patent's rounded 0.5× checkpoint.",
  },

  /* (moved from var) Zoom-only gaps: 6, 14, 33. Zoom + reconstructed focus gaps: 27A, 29A. */
  gaps: {
    "6": {
      label: "D6",
      values: [
        [0.7, 0.7],
        [12.729, 12.729],
        [32.989, 32.989],
      ],
    },
    "14": {
      label: "D14",
      values: [
        [27.072, 27.072],
        [8.854, 8.854],
        [0.957, 0.957],
      ],
    },
    "27A": {
      label: "D27",
      values: [
        [1.8, 3.400517907],
        [2.62, 7.239460293],
        [1.8, 15.52269395],
      ],
    },
    "29A": {
      label: "D29",
      values: [
        [16.125, 14.524482093],
        [14.555, 9.935539707],
        [29.64, 15.91730605],
      ],
    },
    "33": {
      label: "D33",
      values: [
        [21.029, 21.029],
        [39.997, 39.997],
        [45.629, 45.629],
      ],
    },
  },

  aperture: { nominalFNumber: 4.1194, fStops: [4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

  /* ── Parallel plate P (patent surfaces 34–35): traced, not drawn ── */
  rearPlates: [
    {
      label: "P",
      thicknessMm: 2.1,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 2.7,
      source: "JP 2020-118738 A, Numerical Example 1 Table 1 surfaces 34–35",
    },
  ],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "6" },
    { text: "G2 (-)", fromSurface: "7", toSurface: "14" },
    { text: "G3 (+ / O.I.S.)", fromSurface: "STO", toSurface: "27A" },
    { text: "G4 (- / FOCUS)", fromSurface: "28A", toSurface: "29A" },
    { text: "G5 (+)", fromSurface: "30", toSurface: "33" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "4" },
    { text: "D2", fromSurface: "18", toSurface: "21" },
    { text: "D3", fromSurface: "22", toSurface: "25" },
  ],

  layout: { yScFill: 0.46 },
} satisfies LensDataV2Input;

export default LENS_DATA;
