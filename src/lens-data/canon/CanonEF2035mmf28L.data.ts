import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Canon EF 20-35mm f/2.8 L — US 5,000,550, Numerical Example 1 (Takahashi, Yano, Endo).
 * Four-group negative-positive-negative-positive zoom; 15 elements / 12 groups. Inner focusing moves the rear
 * sub-group 11B of the first group objectward, exchanging D4/D8 equally. Source R/d, the spherical-base front
 * asphere and existing focus/zoom/stop controls are retained. BF and finite-focus spacings remain reconstructions.
 *
 * The source publishes no effective diameters. Inferred caps now follow native Fig. 1 (PDF p. 2) at about
 * 13.95 px/mm, practical height uncertainty ±0.4 mm. Surface 2 retains clear sd 17 mm and gains a resolved rear
 * annulus to 23 mm; this does not extrapolate its optical sphere. Larger clear-cap trials at 2/23 fail existing gap
 * guards. The first moving concave cap at 5 stops at 14.1 mm because the 14.5 mm figure trial invokes hidden
 * renderer trimming at reconstructed close focus. Other height changes and retained bonded-outline constraints
 * are recorded in the audit. No unsupported opaque interface land, inferred cut or hybrid medium is added.
 *
 * The numerical-example introduction (PDF p. 61, printed col. 7) explicitly defines Ni at the spectral d-line.
 * All 15 printed index/Abbe pairs and compatible catalog curves are retained as qualified spectral proxies, not
 * historical supplier, melt or chemistry identifications. No individual C/F/g index or partial-dispersion override
 * is published or authored, and no source APD claim is made. The source heading's 34.2 mm tele endpoint disagrees
 * with the 34.0 mm zoom table; source.errata records the unresolved discrepancy without tuning any source row.
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-20-35mm-f28l",
  maker: "Canon",
  name: "CANON EF 20-35mm f/2.8 L",
  subtitle: "US 5,000,550, Numerical Example 1 — Canon / Takahashi et al.",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "15 elements / 12 groups",
      "20.6-34.0 mm design zoom",
      "f/2.8",
      "2ω = 93°-65° patent field",
      "1 aspherical surface",
      "Inner focus, first-group rear sub-group",
    ],
    elementCount: 15,
    groupCount: 12,
    focalLengthMm: { marketing: [20, 35], design: [20.6006, 33.9741] },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "US 5,000,550",
    example: { label: "Numerical Example 1", id: "1" },
    patentYear: 1991,
    authors: ["Sadatoshi Takahashi", "Koutaro Yano", "Hiroshi Endo"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "Numerical Example 1 heading on PDF p. 61 prints focal range 20.6–34.2 mm, but its variable-gap table labels tele 34.0 mm. Literal source rows compute 33.9741 mm; the table's source spacings and 34.0 mm control are retained without a source correction.",
      },
    ],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -40.9,
      glass: "S-LAH66 class (OHARA) (qualified spectral proxy; historical supplier and melt unspecified)",
      apd: false,
      role: "Front negative meniscus and sole aspherical distortion-correction carrier.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.61293,
      vd: 37.0,
      focalLengthMm: 191.2,
      glass: "F3 / E-F3 class (qualified spectral proxy; historical supplier and melt unspecified)",
      apd: false,
      role: "Weak positive partner in stationary front sub-group 11A.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: -29.8,
      glass: "S-LAH58 / TAFD30 class (qualified spectral proxy; historical supplier and melt unspecified)",
      apd: false,
      role: "Strong negative element in the moving inner-focus sub-group 11B.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: 55.6,
      glass: "SF57 / S-TIH53 class (qualified spectral proxy; historical supplier and melt unspecified)",
      apd: false,
      role: "Positive high-dispersion element completing the net-negative focus sub-group 11B.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: -47.0,
      glass: "SF57 / S-TIH53 class (qualified spectral proxy; historical supplier and melt unspecified)",
      apd: false,
      role: "Dense-flint negative member of the group-2 achromat.",
      cemented: "C1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6516,
      vd: 58.5,
      focalLengthMm: 26.2,
      glass: "N-LAK7 / S-LAL7 class (qualified spectral proxy; historical supplier and melt unspecified)",
      apd: false,
      role: "Lanthanum-crown positive member of the group-2 achromat.",
      cemented: "C1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.6516,
      vd: 58.5,
      focalLengthMm: 51.2,
      glass: "N-LAK7 / S-LAL7 class (qualified spectral proxy; historical supplier and melt unspecified)",
      apd: false,
      role: "Positive singlet completing the magnification-varying second group.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.816,
      vd: 46.6,
      focalLengthMm: -33.8,
      glass: "S-LAH59 / TAF5 class (qualified spectral proxy; historical supplier and melt unspecified)",
      apd: false,
      role: "Primary negative power of the third group behind the stop.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: -22.8,
      glass: "S-LAL14 / N-LAK14 class (qualified spectral proxy; historical supplier and melt unspecified)",
      apd: false,
      role: "Negative member of the near-afocal chromatic corrector behind the stop.",
      cemented: "C2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: 23.6,
      glass: "SF6 / S-TIH6 class (qualified spectral proxy; historical supplier and melt unspecified)",
      apd: false,
      role: "Dense-flint positive member of the near-afocal chromatic corrector.",
      cemented: "C2",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.1,
      focalLengthMm: 93.7,
      glass: "S-BSL7 (OHARA) / BK7-class crown (qualified spectral proxy; historical supplier and melt unspecified)",
      apd: false,
      role: "Weak rear-relay positive element.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.76182,
      vd: 26.5,
      focalLengthMm: -109.9,
      glass: "N-SF14 / S-TIH14 class (qualified spectral proxy; historical supplier and melt unspecified)",
      apd: false,
      role: "Rear-group negative flint for astigmatism and color balance.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Plano-Convex Positive",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: 51.7,
      glass: "S-LAL14 / N-LAK14 class (qualified spectral proxy; historical supplier and melt unspecified)",
      apd: false,
      role: "Lanthanum-crown field and relay positive element.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.6516,
      vd: 58.5,
      focalLengthMm: 27.5,
      glass: "N-LAK7 / S-LAL7 class (qualified spectral proxy; historical supplier and melt unspecified)",
      apd: false,
      role: "Positive member of the final cemented doublet.",
      cemented: "C3",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: -33.2,
      glass: "SF57 / S-TIH53 class (qualified spectral proxy; historical supplier and melt unspecified)",
      apd: false,
      role: "Dense-flint negative member of the final cemented doublet.",
      cemented: "C3",
    },
  ],

  surfaces: [
    {
      label: "1A",
      R: 62.0,
      d: 2.2,
      sd: 23.0,
      medium: 1,
      asphere: { K: 0, A4: 5.892e-6, A6: -4.947e-10, A8: 3.788e-13, A10: 3.3853e-15 },
    },
    { label: "2", R: 20.619, d: 10.4, sd: 17.0, rimExtensionSd: 23.0 },
    { label: "3", R: -394.519, d: 3.4, sd: 17.5, medium: 2 },
    { label: "4", R: -90.646, sd: 17.5 },
    { label: "5", R: -52.98, d: 1.6, sd: 14.1, medium: 3 },
    { label: "6", R: 53.109, d: 1.94, sd: 14.5 },
    { label: "7", R: 58.07, d: 3.5, sd: 13.6, medium: 4 },
    { label: "8", R: -242.392, sd: 13.6 },
    { label: "9", R: 73.27, d: 1.2, sd: 10.5, medium: 5 },
    { label: "10", R: 25.588, d: 4.65, sd: 10.5, medium: 6 },
    { label: "11", R: -47.628, d: 0.15, sd: 10.5 },
    { label: "12", R: 26.836, d: 3.14, sd: 10.7, medium: 7 },
    { label: "13", R: 130.997, sd: 10.7 },
    { label: "STO", R: "flat", d: 1.5 },
    { label: "15", R: -60.366, d: 1.1, sd: 9.0, medium: 8 },
    { label: "16", R: 51.294, d: 2.15, sd: 9.0 },
    { label: "17", R: -37.359, d: 1.1, sd: 9.8, medium: 9 },
    { label: "18", R: 27.938, d: 4.1, sd: 9.8, medium: 10 },
    { label: "19", R: -55.566, sd: 9.8 },
    { label: "20", R: 85.181, d: 3.0, sd: 10.7, medium: 11 },
    { label: "21", R: -110.775, d: 0.91, sd: 10.7 },
    { label: "22", R: 68.527, d: 2.0, sd: 11.6, medium: 12 },
    { label: "23", R: 37.21, d: 1.93, sd: 11.3 },
    { label: "24", R: 1093.805, d: 3.8, sd: 12.3, medium: 13 },
    { label: "25", R: -37.162, d: 0.2, sd: 12.3 },
    { label: "26", R: 464.036, d: 7.5, sd: 14.1, medium: 14 },
    { label: "27", R: -18.493, d: 1.4, sd: 14.1, medium: 15 },
    { label: "28", R: -55.992, sd: 14.3 },
  ],

  zoom: {
    stations: [{ focalLengthMm: 20.6, label: "20mm" }, { focalLengthMm: 27.2 }, { focalLengthMm: 34.0, label: "35mm" }],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.5,
    description:
      "Inner focus: the rear sub-group of the negative first group moves toward the object, decreasing D4 and increasing D8.",
  },

  gaps: {
    "4": {
      label: "D4 / IF",
      values: [
        [3.6, 0.9045074855],
        [3.6, 0.940922895],
        [3.6, 0.9467385662],
      ],
    },
    "8": {
      label: "D8 / G1-G2",
      values: [
        [17.415, 20.1104925145],
        [7.016, 9.675077105],
        [1.012, 3.6652614338],
      ],
    },
    "13": {
      label: "D13",
      values: [
        [2.307, 2.307],
        [4.747, 4.747],
        [7.187, 7.187],
      ],
    },
    "19": {
      label: "D19",
      values: [
        [5.9, 5.9],
        [3.46, 3.46],
        [1.02, 1.02],
      ],
    },
    "28": {
      label: "BF",
      values: [
        [39.2800919069, 39.2800919069],
        [44.4324780209, 44.4324780209],
        [49.5852035938, 49.5852035938],
      ],
    },
  },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 6 },

  groups: [
    { text: "G1 / IF", fromSurface: "1A", toSurface: "8" },
    { text: "G2", fromSurface: "9", toSurface: "13" },
    { text: "G3", fromSurface: "15", toSurface: "19" },
    { text: "G4", fromSurface: "20", toSurface: "28" },
  ],
  doublets: [
    { text: "C1", fromSurface: "9", toSurface: "11" },
    { text: "C2", fromSurface: "17", toSurface: "19" },
    { text: "C3", fromSurface: "26", toSurface: "28" },
  ],

  layout: { scFill: 0.62, yScFill: 0.38 },
} satisfies LensDataV2Input;

export default LENS_DATA;
