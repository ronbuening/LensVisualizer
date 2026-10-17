import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 4,398,807 A (Nippon Kogaku; Y. Iizuka), the single unnumbered embodiment. Radii, thicknesses,
 * indices and the three printed zoom rows (f = 75.024 / 106.106 / 150.086 mm) are unchanged.
 * Stop: not printed. Placed 1 mm before r14, splitting d13 without changing its total; Nikon's
 * production section draws the iris at about this position and opening.
 * Semi-diameters: inferred from the element proportions of patent Fig. 1 and Nikon's section, within
 * edge-thickness and air-gap limits. The front singlet uses 25.5 mm rims, matching
 * Fig. 1's slightly taller outline than the following doublet. Facing r8/r9 rims are 13.1 mm to pass the stated f/3.5
 * telephoto beam. Figure 1 draws them nearly meeting; gapSagFrac=0.978 admits their measured
 * 97.59% intrusion while retaining 0.0917 mm physical clearance in the unchanged 3.8 mm gap.
 * Catalog glass labels are spectral proxies, not evidence of the historical supplier or melt.
 * Zoom: seven intermediate stations (about 82-143 mm) are solved, not printed. Each keeps the printed
 * d5 + d10 + d13 sum (group IV fixed) and solves d13 to hold the paraxial image on the fixed image
 * plane. They cut linear-interpolation defocus from 1.46 mm to 0.09 mm.
 * Focus: reconstructed. Only group I moves; close spacings are solved at each station for a 1 m
 * object-to-film distance. The patent prints close-range plots (magnification -0.104 / -0.147 /
 * -0.208) but no close spacings; the solved states reproduce those magnifications.
 * Printed Bf 40.165 is kept; calculated mid/tele BFD is longer by 0.012 / 0.033 mm.
 */
const LENS_DATA = {
  schema: 2,
  key: "nikon-series-e-75-150mm-f35",
  maker: "Nikon",
  name: "NIKON SERIES E ZOOM 75-150mm f/3.5",
  subtitle: "US 4,398,807 A, sole embodiment — strong production correlation",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["12 ELEMENTS / 9 GROUPS", "DESIGN f = 75.02-150.09 mm", "DESIGN F/3.5", "ALL SPHERICAL"],
    elementCount: 12,
    groupCount: 9,
    focalLengthMm: { marketing: [75, 150], design: [75.024, 150.086] },
    fNumber: { marketing: 3.5, design: 3.5 },
  },

  source: {
    patentNumber: "US 4,398,807 A",
    patentYear: 1983,
    authors: ["Yutaka Iizuka"],
    assignees: ["Nippon Kogaku K.K."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.3,
      focalLengthMm: 133.87668,
      glass: "N-SK16 (coordinate-compatible spectral proxy; supplier and melt unconfirmed)",
      role: "Positive front singlet of the focusing first group",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.3,
      focalLengthMm: 102.08301,
      glass: "N-SK16 (coordinate-compatible spectral proxy; supplier and melt unconfirmed)",
      role: "Positive crown of the first group's cemented rear component",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.5,
      focalLengthMm: -127.18584,
      glass: "E-FD4 (coordinate-compatible spectral proxy; supplier and melt unconfirmed)",
      role: "Negative flint of the first group's cemented rear component",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.7847,
      vd: 26.1,
      focalLengthMm: 66.8251,
      glass: "SF56A (coordinate-compatible spectral proxy; supplier and melt unconfirmed)",
      role: "Positive flint meniscus of the variator's cemented doublet",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.2,
      focalLengthMm: -44.32381,
      glass: "N-BK7 (coordinate-compatible spectral proxy; supplier and melt unconfirmed)",
      role: "Negative crown of the variator's cemented doublet",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.62041,
      vd: 60.3,
      focalLengthMm: -50.50232,
      glass: "N-SK16 (coordinate-compatible spectral proxy; supplier and melt unconfirmed)",
      role: "Separate negative singlet closing the variator group",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.3,
      focalLengthMm: 40.94488,
      glass: "N-SK16 (coordinate-compatible spectral proxy; supplier and melt unconfirmed)",
      role: "Positive element of the compensator doublet",
      cemented: "D3",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.7552,
      vd: 27.5,
      focalLengthMm: -76.38305,
      glass: "E-FD4 (coordinate-compatible spectral proxy; supplier and melt unconfirmed)",
      role: "Negative flint meniscus of the compensator doublet",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.3,
      focalLengthMm: 71.59446,
      glass: "N-SK16 (coordinate-compatible spectral proxy; supplier and melt unconfirmed)",
      role: "Positive front element of the fixed relay group, just behind the iris",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.5,
      focalLengthMm: -354.43712,
      glass: "E-FD4 (coordinate-compatible spectral proxy; supplier and melt unconfirmed)",
      role: "Weak negative flint ahead of the relay's long air space",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.7495,
      vd: 34.96,
      focalLengthMm: -93.08659,
      glass: "LAFN7 (coordinate-compatible spectral proxy; supplier and melt unconfirmed)",
      role: "Negative meniscus opening the rear relay pair",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.62588,
      vd: 35.6,
      focalLengthMm: 105.05374,
      glass: "F1 (coordinate-compatible spectral proxy; supplier and melt unconfirmed)",
      role: "Positive last element of the fixed relay group",
    },
  ],

  surfaces: [
    { label: "1", R: 120.6, d: 5.1, sd: 25.5, medium: 1 },
    { label: "2", R: -262.5, d: 0.2, sd: 25.5 },
    { label: "3", R: 98.38, d: 5.7, sd: 23.6, medium: 2 },
    { label: "4", R: -173.84, d: 1.6, sd: 23.6, medium: 3 },
    { label: "5", R: 215.5, sd: 23.6 },
    { label: "6", R: -163.222, d: 3.7, sd: 14.2, medium: 4 },
    { label: "7", R: -40.083, d: 1.2, sd: 14.2, medium: 5 },
    { label: "8", R: 54.0, d: 3.8, sd: 13.1 },
    { label: "9", R: -42.0, d: 1.2, sd: 13.1, medium: 6 },
    { label: "10", R: 124.706, sd: 13.4 },
    { label: "11", R: 135.9, d: 5.3, sd: 14.2, medium: 7 },
    { label: "12", R: -30.776, d: 1.1, sd: 14.2, medium: 8 },
    { label: "13", R: -66.99, sd: 14.2 },
    { label: "STO", R: "flat", d: 1.0 },
    { label: "14", R: 33.75, d: 4.7, sd: 14, medium: 9 },
    { label: "15", R: 133.032, d: 1.0, sd: 13.5 },
    { label: "16", R: -462.32, d: 2.1, sd: 13.5, medium: 10 },
    { label: "17", R: 637.0, d: 42.0, sd: 13.5 },
    { label: "18", R: -19.704, d: 2.0, sd: 14.2, medium: 11 },
    { label: "19", R: -28.653, d: 0.3, sd: 14.2 },
    { label: "20", R: 77.683, d: 3.9, sd: 16, medium: 12 },
    { label: "21", R: -419.799, d: 40.165, sd: 16 },
  ],

  zoom: {
    // (moved from zoomPositions) Source rows are stations 0, 4 and 9; the other seven are solved fixed-image-plane states (see header).
    stations: [
      { focalLengthMm: 75.024, label: "Wide", published: true },
      { focalLengthMm: 82.0, published: false },
      { focalLengthMm: 90.001, published: false },
      { focalLengthMm: 97.999, published: false },
      { focalLengthMm: 106.106, published: true },
      { focalLengthMm: 115.999, published: false },
      { focalLengthMm: 126.001, published: false },
      { focalLengthMm: 135.001, published: false },
      { focalLengthMm: 142.998, published: false },
      { focalLengthMm: 150.086, label: "Tele", published: true },
    ],
    apertureModel: "from-nominal-fno",
    step: 0.004,
  },

  focus: {
    closeFocusM: 1,
    description:
      "Front-group focusing: only the first group (L1-L3) moves toward the object, by about 14.7 mm at every zoom setting, while the other groups and the image plane stay fixed. The patent states the 1 m minimum distance and prints close-range plots with magnifications of -0.104, -0.147 and -0.208, but no close-focus spacings. The close spacings here are solved for a 1 m object-to-film distance and reproduce those magnifications; the patent's near state is the same as Nikon's marketed 1 m minimum focus.",
  },

  gaps: {
    "5": {
      label: "D5",
      values: [
        [1.85, 16.53899074996648],
        [6.319, 21.007137],
        [10.59, 25.278755],
        [14.164, 28.85163],
        [17.227, 31.926453099851518],
        [20.403, 35.090854],
        [23.099, 37.787417],
        [25.184, 39.872195],
        [26.817, 41.504568],
        [28.101, 42.804842443346345],
      ],
    },
    "10": {
      label: "D10",
      values: [
        [24.364, 24.364],
        [22.151, 22.151],
        [19.613, 19.613],
        [17.076, 17.076],
        [14.502, 14.502],
        [11.366, 11.366],
        [8.193, 8.193],
        [5.338, 5.338],
        [2.801, 2.801],
        [0.555, 0.555],
      ],
    },
    "13": {
      label: "D13 (to stop)",
      values: [
        [7.146000000000001, 7.146000000000001],
        [4.89, 4.89],
        [3.156, 3.156],
        [2.12, 2.12],
        [1.6309999999999998, 1.6309999999999998],
        [1.592, 1.592],
        [2.069, 2.069],
        [2.839, 2.839],
        [3.744, 3.744],
        [4.706, 4.706],
      ],
    },
  },

  aperture: { nominalFNumber: 3.5, fStops: [3.5, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32 },

  // Patent Fig. 1 distinguishes four functional groups from nine construction groups.
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−)", fromSurface: "6", toSurface: "10" },
    { text: "G3 (+)", fromSurface: "11", toSurface: "13" },
    { text: "G4 (+)", fromSurface: "14", toSurface: "21" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "11", toSurface: "13" },
  ],

  layout: { scFill: 0.55, yScFill: 0.32 },

  checks: { gapSagFrac: 0.978 },
} satisfies LensDataV2Input;

export default LENS_DATA;
