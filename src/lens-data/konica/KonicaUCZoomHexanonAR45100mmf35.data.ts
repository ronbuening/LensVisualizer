import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * LENS DATA — KONICA UC ZOOM HEXANON AR 45-100mm f/3.5
 *
 * Source: JP S51-34741 / JP S51-34741 A, Example 1, Tadashi Kojima.
 * Patent prescription: 11 elements / 10 groups, all spherical.
 * Patent zoom states: 46.76, 67.38, 99.18 mm; no uniform production scale is applied.
 * Internal zoom: C1 and C4 are fixed; C2 translates imageward; C3 reverses direction.
 *
 * Focus status: NO_INTERNAL_RECONSTRUCTION. The patent publishes zoom spacings only. The manufacturer's
 * 0.35 m MFD is retained as product metadata, not as a solved close-focus optical state.
 *
 * STO MODEL — position from the patent text, diameter modeled:
 * The prescription table has no stop row. The figure description (printed p. 273) gives the abscissa of the
 * lateral-aberration plots as ray height at the stop, taken 1.5 mm in front of the most object-side surface of
 * C4 (r14) for Example 1; Figure 1 draws the diaphragm in D13 close to r14. The stop therefore stays with the
 * fixed C4, leaving r13→STO = 5.0 / 1.0 / 5.6 mm at wide / mid / tele (patent d13 = 6.5 / 2.5 / 7.1). No stop
 * diameter is printed: the stop radius is derived from the design f-number and held at every zoom station. The
 * former calibration gave paraxial f/3.500030, f/3.499004, and f/3.497341 at wide, mid, and tele. nominalFno
 * remains 3.5.
 *
 * SEMI-DIAMETERS — modeled, not patent-tabulated:
 * Derived from exact spherical rays, the modeled stop, patent Y = 21.63 mm image height, and Figure 1's
 * relative optical-rim proportions. A 600-dpi review equalized the front cemented pair and enlarged L8/L9,
 * which were materially undersized against the fixed rear-group silhouette. Stage-2 verification checks
 * edge thickness, rim slope, shared-gap sag, and off-axis containment.
 *
 * GLASS:
 * The patent publishes nd/νd only and does not identify suppliers. Compatible catalog curves are named only
 * as coefficient proxies with the production supplier unspecified. nC, nF, ng, and dPgF remain unauthored.
 */

const LENS_DATA = {
  schema: 2,
  key: "konica-uc-zoom-hexanon-ar-45-100mm-f35",
  maker: "Konica",
  name: "KONICA UC ZOOM HEXANON AR 45-100mm f/3.5",
  subtitle: "JP S51-34741 A Example 1 — patent design 46.76–99.18mm",

  catalog: {
    lensMounts: ["konica-ar"],
    imageFormat: "135-full-frame",
    specs: [
      "11 ELEMENTS / 10 GROUPS",
      "45–100mm MARKETING / 46.76–99.18mm PATENT",
      "F/3.5",
      "Y = 21.63mm",
      "ALL-SPHERICAL",
    ],
    elementCount: 11,
    groupCount: 10,
    focalLengthMm: { marketing: [45, 100], design: [46.8146207854804, 99.19032255818279] },
    fNumber: { marketing: 3.5, design: 3.5 },
  },

  source: {
    patentNumber: "JP S51-34741 A",
    patentYear: 1976,
    authors: ["Tadashi Kojima"],
    assignees: ["Konishiroku Photo Industry Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: -133.70836291821325,
      glass: "S-TIH6 catalog-equivalent coefficient proxy (patent 805254; production supplier unspecified)",
      apd: false,
      diagramLabel: "L1",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.62299,
      vd: 58.2,
      focalLengthMm: 101.45732953623097,
      glass: "S-BSM15 catalog-equivalent coefficient proxy (patent 623582; production supplier unspecified)",
      apd: false,
      diagramLabel: "L2",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.62299,
      vd: 58.2,
      focalLengthMm: 95.7288584645673,
      glass: "S-BSM15 catalog-equivalent coefficient proxy (patent 623582; production supplier unspecified)",
      apd: false,
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.62299,
      vd: 58.2,
      focalLengthMm: -29.429674969660017,
      glass: "S-BSM15 catalog-equivalent coefficient proxy (patent 623582; production supplier unspecified)",
      apd: false,
      diagramLabel: "L4",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.62299,
      vd: 58.2,
      focalLengthMm: -64.26875004366026,
      glass: "S-BSM15 catalog-equivalent coefficient proxy (patent 623582; production supplier unspecified)",
      apd: false,
      diagramLabel: "L5",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: 65.5612436110159,
      glass: "S-TIH6 catalog-equivalent coefficient proxy (patent 805254; production supplier unspecified)",
      apd: false,
      diagramLabel: "L6",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.62299,
      vd: 58.2,
      focalLengthMm: 87.140207651353,
      glass: "S-BSM15 catalog-equivalent coefficient proxy (patent 623582; production supplier unspecified)",
      apd: false,
      diagramLabel: "L7",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.51823,
      vd: 59.0,
      focalLengthMm: 56.144126565231154,
      glass: "E-C3 catalog-equivalent coefficient proxy (patent 518590; production supplier unspecified)",
      apd: false,
      diagramLabel: "L8",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.1,
      focalLengthMm: -27.60285489420557,
      glass: "E-FD15 catalog-equivalent coefficient proxy (patent 699301; production supplier unspecified)",
      apd: false,
      diagramLabel: "L9",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.51633,
      vd: 64.1,
      focalLengthMm: 51.620313102346586,
      glass: "K-BK7 catalog-equivalent coefficient proxy (patent 516641; production supplier unspecified)",
      apd: false,
      diagramLabel: "L10",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.56732,
      vd: 42.8,
      focalLengthMm: 100.57603510209687,
      glass: "S-TIL26 catalog-equivalent coefficient proxy (patent 567428; production supplier unspecified)",
      apd: false,
      diagramLabel: "L11",
    },
  ],

  surfaces: [
    { label: "1", R: 66.775, d: 1.5, sd: 19.5, medium: 1 },
    { label: "2", R: 40.8, d: 5.5, sd: 19.5, medium: 2 },
    { label: "3", R: 109.136, d: 0.1, sd: 19.5 },
    { label: "4", R: 49.56, d: 5.0, sd: 17.5, medium: 3 },
    { label: "5", R: 281.918, sd: 16.6 },
    { label: "6", R: 503.505, d: 1.5, sd: 11.2, medium: 4 },
    { label: "7", R: 17.67, d: 5.0, sd: 9.5 },
    { label: "8", R: -84.423, d: 1.5, sd: 9.7, medium: 5 },
    { label: "9", R: 76.677, d: 2.0, sd: 10.1 },
    { label: "10", R: 31.163, d: 2.8, sd: 11.2, medium: 6 },
    { label: "11", R: 73.021, sd: 11.2 },
    { label: "12", R: 108.094, d: 2.5, sd: 11.4, medium: 7 },
    { label: "13", R: -108.092, sd: 11.4 },
    { label: "STO", R: "flat", d: 1.5 },
    { label: "14", R: 30.145, d: 5.0, sd: 13.0, medium: 8 },
    { label: "15", R: -788.456, d: 5.5, sd: 13.0 },
    { label: "16", R: -32.124, d: 2.5, sd: 13.0, medium: 9 },
    { label: "17", R: 49.849, d: 2.5, sd: 13.0 },
    { label: "18", R: -151.063, d: 3.0, sd: 10.3, medium: 10 },
    { label: "19", R: -22.809, d: 0.5, sd: 10.6 },
    { label: "20", R: 196.326, d: 4.0, sd: 11.5, medium: 11 },
    { label: "21", R: -79.843, d: 63.24, sd: 12.0 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 46.76, label: "Wide" },
      { focalLengthMm: 67.38 },
      { focalLengthMm: 99.18, label: "Tele" },
    ],
    apertureModel: "fixed-iris",
  },

  focus: {
    closeFocusM: 0.35,
    description:
      "NO_INTERNAL_RECONSTRUCTION: the patent publishes only zoom spacings. The manufacturer 0.35 m MFD is metadata; " +
      "no close-focus group motion is modeled.",
  },

  gaps: {
    "5": {
      label: "d5 (ZOOM)",
      values: [
        [1.8, 1.8],
        [15.0, 15.0],
        [24.6, 24.6],
      ],
    },
    "11": {
      label: "d11 (ZOOM)",
      values: [
        [25.0, 25.0],
        [15.8, 15.8],
        [1.6, 1.6],
      ],
    },
    "13": {
      label: "d13→STO (ZOOM)",
      values: [
        [5.0, 5.0],
        [1.0, 1.0],
        [5.6, 5.6],
      ],
    },
  },

  aperture: { nominalFNumber: 3.5, fStops: [3.5, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "C1 (+ / FIXED)", fromSurface: "1", toSurface: "5" },
    { text: "C2 (− / ZOOM)", fromSurface: "6", toSurface: "11" },
    { text: "C3 (+ / COMP)", fromSurface: "12", toSurface: "13" },
    { text: "C4 (+ / FIXED)", fromSurface: "14", toSurface: "21" },
  ],
  doublets: [{ text: "D1", fromSurface: "1", toSurface: "3" }],

  layout: { yScFill: 0.38 },
} satisfies LensDataV2Input;

export default LENS_DATA;
