import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * TAMRON 28-300mm f/3.5-6.3 Di VC PZD (A010)
 *
 * Data source: JP 2013-254160 A, Example 7 (Tamron Co., Ltd.).
 * Native patent scale retained; no production scaling is applied.
 * Five functional zoom groups (+ − + − +), 19 production optical elements / 15 groups.
 * Production mounts represented: Canon EF, Nikon F, and Sony A; the Sony A variant omits lens VC mechanically.
 * The elements array has 20 modeled refractive media because S33-S34 is the thin resin layer
 * of one physical hybrid aspherical element; elementCount remains the manufacturer-published 19.
 *
 * Focus status: NO_INTERNAL_RECONSTRUCTION. Example 7 publishes infinity-focus zoom states only.
 * Every zoom var pair therefore uses identical infinity/close values; product MOD 0.49 m is metadata only.
 * Zoom gaps: D7, D15, D23, normalized D26→S28, and BFD D37. D23 reverses after the middle state.
 * Patent figure FNO labels: 3.628 / 3.628 / 6.459 at wide / middle / tele (Figs. 26(a), 27(a), 28(a)).
 * Source erratum, middle FNO: the Fig. 27(a) label repeats the wide value. The wide and tele labels trace to one
 * stop radius (9.4992 and 9.4998 mm), which gives f/5.546 at 91.5 mm, and the d-line curve plotted in Fig. 27(a)
 * is that beam's (−0.36 mm at the pupil edge against −0.377 mm traced). An f/3.628 beam at 91.5 mm needs a stop
 * radius of at least 14.24 mm (the paraxial figure), beyond the zero-edge heights of L9 (13.06 mm) and L10
 * (12.51 mm), and would plot off the ±1.00 mm axis. nominalFno stores 3.628 / 5.546 / 6.459, apertureDesign the
 * wide label, and the stop is one 9.499 mm iris at every station (zoomApertureModel "fixed-iris").
 * Source S27 is an inactive air datum (R=0, air→air) and is omitted; D27 is folded into D26.
 *
 * Asphere convention: patent epsilon maps to LensVisualizer K = epsilon - 1; Example 7 has K=0 on all aspheres.
 * Semi-diameters are modeled, not patent-published. They were derived from paraxial marginal/chief-ray envelopes,
 * the 67 mm production filter/mechanical envelope, and the patent optical section, then validated for edge thickness,
 * actual rim slope, conic limits, cross-gap intrusion at every zoom state, off-axis containment/vignetting order,
 * and render-trim risk.
 *
 * The patent supplies d-line nd/vd only. Catalog-only C/F/g/partial copies are removed; compatible
 * current catalog curves are qualified spectral proxies, not production glass or supplier identifications.
 * P06 and P09 are explicitly class/proxy matches; the hybrid resin layer remains unmatched and carries no invented
 * line-index or partial-dispersion values.
 */

const LENS_DATA = {
  schema: 2,
  key: "tamron-a010-28-300-f35-63",
  maker: "Tamron",
  name: "TAMRON 28-300mm f/3.5-6.3 Di VC PZD",
  subtitle:
    "JP 2013-254160 A Example 7 — strong production correlation to Model A010",

  catalog: {
    lensMounts: ["canon-ef", "nikon-f", "sony-a"],
    imageFormat: "135-full-frame",
    specs: [
      "19 ELEMENTS / 15 GROUPS",
      "28-300mm marketed; 28.776-291.262mm patent states",
      "FNO 3.628 / 5.546 / 6.459 modeled",
      "5 ASPHERICAL SURFACES",
      "5-GROUP +−+−+ ZOOM",
    ],
    elementCount: 19,
    groupCount: 15,
    focalLengthMm: { marketing: [28, 300], design: [28.775899, 291.269314] },
    fNumber: { design: 3.628 },
  },

  source: {
    patentNumber: "JP 2013-254160 A",
    example: { label: "Example 7", id: "7" },
    patentYear: 2013,
    authors: ["Nobuyuki Adachi"],
    assignees: ["Tamron Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.13,
      focalLengthMm: -150.498454,
      glass: "TAFD55-W (HOYA)",
      role: "G1 front positive zoom group",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 143.012705,
      glass: "FCD1 (HOYA)",
      role: "G1 front positive zoom group",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.59282,
      vd: 68.62,
      focalLengthMm: 151.390602,
      glass: "FCD515 (HOYA)",
      role: "G1 front positive zoom group",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.67,
      focalLengthMm: 246.857965,
      glass: "TAC8 (HOYA)",
      role: "G1 front positive zoom group",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.85135,
      vd: 40.1,
      focalLengthMm: -21.949144,
      glass: "M-TAFD305 (HOYA)",
      role: "G2 negative variator group",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -28.72154,
      glass: "TAF1 (HOYA) — 773496 class proxy, Δνd=+0.03",
      role: "G2 negative variator group",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 19.209813,
      glass: "FDS90-SG (HOYA)",
      role: "G2 negative variator group",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -23.628383,
      glass: "TAF1 (HOYA) — 773496 class proxy, Δνd=+0.03",
      role: "G2 negative variator group",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.67,
      focalLengthMm: 51.991032,
      glass: "TAC8 (HOYA)",
      role: "G3 positive group",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      focalLengthMm: 43.224414,
      glass: "S-FPL51 (OHARA)",
      role: "G3 positive group",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.62263,
      vd: 58.16,
      focalLengthMm: 37.360181,
      glass: "M-BACD15 (HOYA) — 623582 class proxy, Δνd=+0.01",
      role: "G3 positive group",
      cemented: "D2",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 20.88,
      focalLengthMm: -49.335812,
      glass: "E-FDS1-W (HOYA)",
      role: "G3 positive group",
      cemented: "D2",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.8208,
      vd: 42.71,
      focalLengthMm: -19.478694,
      glass: "M-TAFD51 (HOYA)",
      role: "G4 negative stabilization-capable group",
      cemented: "D3",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.80809,
      vd: 22.76,
      focalLengthMm: 40.605463,
      glass: "FD225 (HOYA)",
      role: "G4 negative stabilization-capable group",
      cemented: "D3",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      focalLengthMm: 65.179225,
      glass: "S-FPL51 (OHARA)",
      role: "G5 rear positive group",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.27,
      focalLengthMm: -29.195878,
      glass: "NBFD15-W (HOYA)",
      role: "G5 rear positive group",
      cemented: "D4",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.43,
      focalLengthMm: 19.5965,
      glass: "S-NSL36 (OHARA)",
      role: "G5 rear positive group",
      cemented: "D4",
    },
    {
      id: 18,
      name: "L18r",
      label: "Hybrid resin layer",
      type: "Hybrid Asphere Resin Layer",
      nd: 1.5146,
      vd: 49.96,
      focalLengthMm: 495.787778,
      glass: "Unmatched (hybrid asphere resin layer, nd=1.51460, νd=49.96)",
      role: "Thin hybrid asphere resin layer on production element 18",
      diagramLabel: "18r",
      cemented: "H1",
    },
    {
      id: 19,
      name: "L18",
      label: "Element 18 substrate",
      type: "Biconcave Negative Substrate",
      nd: 1.79952,
      vd: 42.22,
      focalLengthMm: -23.578403,
      glass: "S-LAH52 (OHARA)",
      role: "Glass substrate of production hybrid element 18",
      diagramLabel: "18",
      cemented: "H1",
    },
    {
      id: 20,
      name: "L19",
      label: "Element 19",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.46,
      focalLengthMm: 63.631823,
      glass: "FD60-W (HOYA)",
      role: "G5 rear positive group",
      diagramLabel: "19",
    },
  ],

  surfaces: [
    { label: "1", R: 165.0566, d: 1.0, sd: 29.0, medium: 1 },
    { label: "2", R: 78.5233, d: 6.65, sd: 29.0, medium: 2 },
    { label: "3", R: -728.4868, d: 0.14, sd: 29.0 },
    { label: "4", R: 70.3968, d: 4.55, sd: 24.0, medium: 3 },
    { label: "5", R: 318.6441, d: 0.09, sd: 24.0 },
    { label: "6", R: 87.5928, d: 2.4, sd: 23.5, medium: 4 },
    { label: "7", R: 168.6516, sd: 23.5 },
    {
      label: "8A",
      R: 119.1999,
      d: 1.3,
      sd: 14,
      medium: 5,
      asphere: {
        K: 0,
        A4: 6.94825e-6,
        A6: -1.17836e-8,
        A8: 1.30232e-10,
        A10: 1.46115e-13,
      },
    },
    {
      label: "9A",
      R: 16.073,
      d: 6.0532,
      sd: 11.0,
      rimExtensionSd: 14,
      asphere: {
        K: 0,
        A4: 1.58296e-7,
        A6: -1.04078e-8,
        A8: -2.04183e-10,
        A10: 3.55388e-12,
      },
    },
    { label: "10", R: -26.4607, d: 0.7, sd: 9.6, medium: 6 },
    { label: "11", R: 138.9702, d: 0.11, sd: 9.6 },
    { label: "12", R: 36.6745, d: 4.2816, sd: 9.4, medium: 7 },
    { label: "13", R: -27.6602, d: 0.8, sd: 9.4 },
    {
      label: "14",
      R: -19.8927,
      d: 0.7,
      sd: 9.3,
      medium: 8,
      rimExtensionSd: 10.1,
    },
    { label: "15", R: 224.8288, sd: 10.1 },
    { label: "STO", R: "flat", d: 1.0 },
    { label: "17", R: 45.4709, d: 2.3, sd: 12.0, medium: 9 },
    { label: "18", R: -223.1183, d: 0.08, sd: 12.0 },
    { label: "19", R: 32.9276, d: 3.8, sd: 12.0, medium: 10 },
    { label: "20", R: -59.4375, d: 0.16, sd: 12.0 },
    {
      label: "21A",
      R: 70.6213,
      d: 3.2,
      sd: 12.0,
      medium: 11,
      asphere: {
        K: 0,
        A4: -1.41559e-5,
        A6: -1.15301e-8,
        A8: -1.73211e-11,
        A10: 5.79302e-14,
      },
    },
    { label: "22", R: -34.0838, d: 0.7, sd: 12.0, medium: 12 },
    { label: "23", R: -136.9124, sd: 12.0 },
    {
      label: "24A",
      R: -80.5152,
      d: 0.8,
      sd: 11.1,
      medium: 13,
      asphere: {
        K: 0,
        A4: 7.26742e-6,
        A6: -5.26032e-9,
        A8: -3.07691e-11,
        A10: 3.26856e-13,
      },
    },
    { label: "25", R: 20.0389, d: 2.6, sd: 11.1, medium: 14 },
    { label: "26", R: 48.4896, sd: 11.1 },
    { label: "28", R: 37.4118, d: 2.9, sd: 12.5, medium: 15 },
    { label: "29", R: -235.3122, d: 0.08, sd: 12.5 },
    { label: "30", R: 46.536, d: 0.8, sd: 12.4, medium: 16 },
    { label: "31", R: 15.5102, d: 10.2, sd: 12.4, medium: 17 },
    { label: "32", R: -22.7166, d: 2.6452, sd: 12.4 },
    {
      label: "33A",
      R: -26.2116,
      d: 0.2,
      sd: 13.2,
      medium: 18,
      asphere: {
        K: 0,
        A4: -2.0095e-5,
        A6: 1.66528e-8,
        A8: -3.86767e-10,
        A10: 2.95046e-12,
      },
    },
    { label: "34", R: -23.8312, d: 0.8, sd: 13.2, medium: 19 },
    { label: "35", R: 91.5604, d: 0.25, sd: 13.2 },
    { label: "36", R: 44.0886, d: 2.6, sd: 13.8, medium: 20 },
    { label: "37", R: 307.7694, sd: 13.8 },
  ],

  zoom: {
    // (moved from nominalFno) middle: Fig. 27(a) prints 3.628 (source erratum); the fixed iris gives 5.546
    stations: [
      { focalLengthMm: 28.776, nominalFNumber: 3.628, label: "Wide" },
      { focalLengthMm: 91.5, nominalFNumber: 5.546 },
      { focalLengthMm: 291.2621, nominalFNumber: 6.459, label: "Tele" },
    ],
    // One iris radius (9.50 mm) gives the wide and tele FNO of Figs. 26(a) and 28(a) to 0.01 % and f/5.546 at 91.5 mm,
    // the beam whose spherical aberration Fig. 27(a) plots. The 3.628 printed there repeats the wide label and would
    // need an iris of at least 14.24 mm, past the zero-edge heights of L9 and L10 behind the stop.
    apertureModel: "fixed-iris",
  },

  focus: {
    closeFocusM: 0.49,
    description:
      "NO_INTERNAL_RECONSTRUCTION — patent Example 7 publishes infinity-focus zoom states only; product MOD 0.49 m is metadata and no close-focus internal motion is invented.",
  },

  gaps: {
    "7": {
      label: "D7 G1→G2",
      values: [
        [1.7749, 1.7749],
        [29.8104, 29.8104],
        [55.2778, 55.2778],
      ],
    },
    "15": {
      label: "D15 G2→STO",
      values: [
        [18.7563, 18.7563],
        [9.2121, 9.2121],
        [1.3652, 1.3652],
      ],
    },
    "23": {
      label: "D23 G3→G4",
      values: [
        [1.937, 1.937],
        [3.9682, 3.9682],
        [3.7576, 3.7576],
      ],
    },
    "26": {
      label: "D26+27 G4→G5",
      values: [
        [12.0943, 12.0943],
        [5.311, 5.311],
        [2.5, 2.5],
      ],
    },
    "37": {
      label: "BF",
      values: [
        [40.1487, 40.1487],
        [73.8282, 73.8282],
        [89.5105, 89.5105],
      ],
    },
  },

  aperture: {
    fStops: [3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16, 22, 32, 40],
    maxFNumber: 40,
    blades: 7,
  },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "7" },
    { text: "G2", fromSurface: "8A", toSurface: "15" },
    { text: "G3", fromSurface: "17", toSurface: "23" },
    { text: "G4", fromSurface: "24A", toSurface: "26" },
    { text: "G5", fromSurface: "28", toSurface: "37" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "21A", toSurface: "23" },
    { text: "D3", fromSurface: "24A", toSurface: "26" },
    { text: "D4", fromSurface: "30", toSurface: "32" },
    { text: "H1", fromSurface: "33A", toSurface: "35" },
  ],

  layout: { yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
