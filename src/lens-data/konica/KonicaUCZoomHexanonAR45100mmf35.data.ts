import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — KONICA UC ZOOM HEXANON AR 45–100mm f/3.5
 *
 * Source: JP S51-34741 / JPS5134741A, Example 1, Tadashi Kojima.
 * Patent prescription: 11 elements / 10 groups, all spherical.
 * Patent zoom states: 46.76, 67.38, 99.18 mm; no uniform production scale is applied.
 * Internal zoom: C1 and C4 are fixed; C2 translates imageward; C3 reverses direction.
 *
 * Focus status: NO_INTERNAL_RECONSTRUCTION. The patent publishes zoom spacings only. The manufacturer's
 * 0.35 m MFD is retained as product metadata, not as a solved close-focus optical state.
 *
 * STO MODEL — inferred, not patent-tabulated:
 * Figure 1 places the diaphragm in D13 between r13 and r14. It is modeled fixed with C4, 2.0 mm in front
 * of r14, leaving r13→STO = 4.5 / 0.5 / 5.1 mm at wide / mid / tele. STO sd = 10.2029784318 mm gives
 * paraxial f/3.500000 at wide; source rounding yields f/3.498983 and f/3.497335 at mid and tele.
 * nominalFno remains 3.5.
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
  key: "konica-uc-zoom-hexanon-ar-45-100mm-f35",
  maker: "Konica",
  name: "KONICA UC ZOOM HEXANON AR 45–100mm f/3.5",
  subtitle: "JPS5134741A Example 1 — patent design 46.76–99.18mm",
  specs: [
    "11 ELEMENTS / 10 GROUPS",
    "45–100mm MARKETING / 46.76–99.18mm PATENT",
    "F/3.5",
    "Y = 21.63mm",
    "ALL-SPHERICAL",
  ],

  focalLengthMarketing: [45, 100],
  focalLengthDesign: [46.8146207854804, 99.19032255818279],
  apertureMarketing: 3.5,
  apertureDesign: 3.5,
  lensMounts: ["konica-ar"],
  imageFormat: "135-full-frame",
  patentNumber: "JPS5134741A",
  patentAuthors: ["Tadashi Kojima"],
  patentAssignees: ["Konishiroku Photo Industry Co., Ltd."],
  patentYear: 1976,
  elementCount: 11,
  groupCount: 10,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      diagramLabel: "L1",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: -133.70836291821325,
      glass: "S-TIH6 catalog-equivalent coefficient proxy (patent 805254; production supplier unspecified)",
      apd: false,
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      diagramLabel: "L2",
      type: "Positive Meniscus",
      nd: 1.62299,
      vd: 58.2,
      fl: 101.45732953623097,
      glass: "S-BSM15 catalog-equivalent coefficient proxy (patent 623582; production supplier unspecified)",
      apd: false,
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      diagramLabel: "L3",
      type: "Positive Meniscus",
      nd: 1.62299,
      vd: 58.2,
      fl: 95.7288584645673,
      glass: "S-BSM15 catalog-equivalent coefficient proxy (patent 623582; production supplier unspecified)",
      apd: false,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      diagramLabel: "L4",
      type: "Negative Meniscus",
      nd: 1.62299,
      vd: 58.2,
      fl: -29.429674969660017,
      glass: "S-BSM15 catalog-equivalent coefficient proxy (patent 623582; production supplier unspecified)",
      apd: false,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      diagramLabel: "L5",
      type: "Biconcave Negative",
      nd: 1.62299,
      vd: 58.2,
      fl: -64.26875004366026,
      glass: "S-BSM15 catalog-equivalent coefficient proxy (patent 623582; production supplier unspecified)",
      apd: false,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      diagramLabel: "L6",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: 65.5612436110159,
      glass: "S-TIH6 catalog-equivalent coefficient proxy (patent 805254; production supplier unspecified)",
      apd: false,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      diagramLabel: "L7",
      type: "Biconvex Positive",
      nd: 1.62299,
      vd: 58.2,
      fl: 87.140207651353,
      glass: "S-BSM15 catalog-equivalent coefficient proxy (patent 623582; production supplier unspecified)",
      apd: false,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      diagramLabel: "L8",
      type: "Biconvex Positive",
      nd: 1.51823,
      vd: 59.0,
      fl: 56.144126565231154,
      glass: "E-C3 catalog-equivalent coefficient proxy (patent 518590; production supplier unspecified)",
      apd: false,
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      diagramLabel: "L9",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.1,
      fl: -27.60285489420557,
      glass: "E-FD15 catalog-equivalent coefficient proxy (patent 699301; production supplier unspecified)",
      apd: false,
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      diagramLabel: "L10",
      type: "Positive Meniscus",
      nd: 1.51633,
      vd: 64.1,
      fl: 51.620313102346586,
      glass: "K-BK7 catalog-equivalent coefficient proxy (patent 516641; production supplier unspecified)",
      apd: false,
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      diagramLabel: "L11",
      type: "Biconvex Positive",
      nd: 1.56732,
      vd: 42.8,
      fl: 100.57603510209687,
      glass: "S-TIL26 catalog-equivalent coefficient proxy (patent 567428; production supplier unspecified)",
      apd: false,
    },
  ],

  surfaces: [
    { label: "1", R: 66.775, d: 1.5, nd: 1.80518, elemId: 1, sd: 19.5 },
    { label: "2", R: 40.8, d: 5.5, nd: 1.62299, elemId: 2, sd: 19.5 },
    { label: "3", R: 109.136, d: 0.1, nd: 1.0, elemId: 0, sd: 19.5 },
    { label: "4", R: 49.56, d: 5.0, nd: 1.62299, elemId: 3, sd: 17.5 },
    { label: "5", R: 281.918, d: 1.8, nd: 1.0, elemId: 0, sd: 16.6 },
    { label: "6", R: 503.505, d: 1.5, nd: 1.62299, elemId: 4, sd: 11.2 },
    { label: "7", R: 17.67, d: 5.0, nd: 1.0, elemId: 0, sd: 9.5 },
    { label: "8", R: -84.423, d: 1.5, nd: 1.62299, elemId: 5, sd: 9.7 },
    { label: "9", R: 76.677, d: 2.0, nd: 1.0, elemId: 0, sd: 10.1 },
    { label: "10", R: 31.163, d: 2.8, nd: 1.80518, elemId: 6, sd: 11.2 },
    { label: "11", R: 73.021, d: 25.0, nd: 1.0, elemId: 0, sd: 11.2 },
    { label: "12", R: 108.094, d: 2.5, nd: 1.62299, elemId: 7, sd: 11.4 },
    { label: "13", R: -108.092, d: 4.5, nd: 1.0, elemId: 0, sd: 11.4 },
    { label: "STO", R: 1e15, d: 2.0, nd: 1.0, elemId: 0, sd: 10.202978431785846 },
    { label: "14", R: 30.145, d: 5.0, nd: 1.51823, elemId: 8, sd: 13.0 },
    { label: "15", R: -788.456, d: 5.5, nd: 1.0, elemId: 0, sd: 13.0 },
    { label: "16", R: -32.124, d: 2.5, nd: 1.69895, elemId: 9, sd: 13.0 },
    { label: "17", R: 49.849, d: 2.5, nd: 1.0, elemId: 0, sd: 13.0 },
    { label: "18", R: -151.063, d: 3.0, nd: 1.51633, elemId: 10, sd: 10.3 },
    { label: "19", R: -22.809, d: 0.5, nd: 1.0, elemId: 0, sd: 10.6 },
    { label: "20", R: 196.326, d: 4.0, nd: 1.56732, elemId: 11, sd: 11.5 },
    { label: "21", R: -79.843, d: 63.24, nd: 1.0, elemId: 0, sd: 12.0 },
  ],

  asph: {},

  var: {
    "5": [
      [1.8, 1.8],
      [15.0, 15.0],
      [24.6, 24.6],
    ],
    "11": [
      [25.0, 25.0],
      [15.8, 15.8],
      [1.6, 1.6],
    ],
    "13": [
      [4.5, 4.5],
      [0.5, 0.5],
      [5.1, 5.1],
    ],
  },

  varLabels: [
    ["5", "d5 (ZOOM)"],
    ["11", "d11 (ZOOM)"],
    ["13", "d13→STO (ZOOM)"],
  ],

  zoomPositions: [46.76, 67.38, 99.18],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "C1 (+ / FIXED)", fromSurface: "1", toSurface: "5" },
    { text: "C2 (− / ZOOM)", fromSurface: "6", toSurface: "11" },
    { text: "C3 (+ / COMP)", fromSurface: "12", toSurface: "13" },
    { text: "C4 (+ / FIXED)", fromSurface: "14", toSurface: "21" },
  ],

  doublets: [{ text: "D1", fromSurface: "1", toSurface: "3" }],

  closeFocusM: 0.35,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: the patent publishes only zoom spacings. The manufacturer 0.35 m MFD is metadata; " +
    "no close-focus group motion is modeled.",

  nominalFno: 3.5,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16],

  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
