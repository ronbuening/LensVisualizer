import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║      LENS DATA — KONICA ZOOM-HEXANON AR 35–70mm f/3.5                   ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JPS55-21005A, Example 1 (JP1980-021005 job-card id).       ║
 * ║  Two-component zoom: negative L1-L4 front component and positive L5-L9   ║
 * ║  rear component. 9 elements / 9 groups; all spherical; no scaling.       ║
 * ║                                                                            ║
 * ║  Zoom-only variable gaps: D8 and D18/BF.                                  ║
 * ║    D8: 33.862 -> 13.550 -> 0.500 mm.                                      ║
 * ║    BF: 46.290 -> 58.024 -> 72.854 mm.                                     ║
 * ║  The image plane is fixed in the patent; in physical coordinates the      ║
 * ║  front component reverses by about 1.78 mm from mid to tele.               ║
 * ║                                                                            ║
 * ║  FOCUS STATUS — NO_INTERNAL_RECONSTRUCTION:                                ║
 * ║  The patent publishes no finite-focus prescription or internal focus       ║
 * ║  trajectory. Production MFD 0.35 m is retained as metadata only.           ║
 * ║                                                                            ║
 * ║  SOURCE CORRECTION: r12 is visibly overstruck in the scan. Independent     ║
 * ║  multi-position EFL/BFD closure resolves it to +149.473 mm; the rejected   ║
 * ║  literal alternative +142.473 mm is retained in the audit.                 ║
 * ║                                                                            ║
 * ║  STOP MODEL: The source places S only within d14, between L7 and L8.        ║
 * ║  It publishes no numerical stop split, so the model uses a neutral          ║
 * ║  midpoint assumption: r14->STO = 2.75 mm and STO->r15 = 2.75 mm.            ║
 * ║  The authored STO sd is the paraxial wide-state f/3.5 stop anchor;          ║
 * ║  buildLens() derives the zoom-dependent stop size from nominalFno.          ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: The patent gives no SD table. Values are modeling          ║
 * ║  quantities validated against on-axis and off-axis ray envelopes, the       ║
 * ║  patent Y=21.6 mm field anchor, the 600-dpi Figure-4 silhouette, and the    ║
 * ║  current edge/slope/cross-gap constraints. Figure-relative rims reduce     ║
 * ║  L4-L6 and slightly enlarge L8; L3 remains geometry-capped at 16.0 mm.      ║
 * ║                                                                            ║
 * ║  GLASS: The patent supplies d-line nd/vd only. Coordinate-compatible         ║
 * ║  catalog curves are supplier-neutral coefficient proxies; no production     ║
 * ║  identity is asserted. No nC/nF/ng/dPgF values are patent-published.         ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "konica-zoom-hexanon-ar-35-70mm-f3-5",
  maker: "Konica",
  name: "KONICA ZOOM-HEXANON AR 35–70mm f/3.5",
  subtitle: "JPS55-21005A Example 1 — production correlation to Cat. No. 703-172",
  specs: ["9 ELEMENTS / 9 GROUPS", "35–70mm", "f/3.5-f/22", "63°-34°", "MFD 0.35m"],

  focalLengthMarketing: [35, 70],
  focalLengthDesign: [35.14385, 69.129631],
  apertureMarketing: 3.5,
  apertureDesign: 3.5,
  lensMounts: ["konica-ar"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 1980-021005 A",
  patentAuthors: ["Tadashi Kojima", "Reiko Mao"],
  patentAssignees: ["Konishiroku Photo Industry Co., Ltd."],
  patentYear: 1980,
  elementCount: 9,
  groupCount: 9,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      diagramLabel: "L1",
      type: "Plano-Convex Positive",
      nd: 1.62004,
      vd: 36.3,
      fl: 277.459519,
      glass: "E-F2 catalog-equivalent coefficient proxy (patent 620363; production supplier unspecified)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      diagramLabel: "L2",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: -42.616805,
      glass: "J-LASF016 catalog-equivalent coefficient proxy (patent 773496; production supplier unspecified)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      diagramLabel: "L3",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      fl: -75.456127,
      glass: "J-LASF016 catalog-equivalent coefficient proxy (patent 773496; production supplier unspecified)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      diagramLabel: "L4",
      type: "Positive Meniscus",
      nd: 1.62004,
      vd: 36.3,
      fl: 79.607644,
      glass: "E-F2 catalog-equivalent coefficient proxy (patent 620363; production supplier unspecified)",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      diagramLabel: "L5",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      fl: 107.674365,
      glass: "J-LAK14 catalog-equivalent coefficient proxy (patent 697555; production supplier unspecified)",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      diagramLabel: "L6",
      type: "Positive Meniscus",
      nd: 1.56883,
      vd: 56.2,
      fl: 93.515268,
      glass: "BAC4 catalog-equivalent coefficient proxy (patent 569562; production supplier unspecified)",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      diagramLabel: "L7",
      type: "Positive Meniscus",
      nd: 1.51633,
      vd: 64.1,
      fl: 55.985694,
      glass: "S-BSL7 catalog-equivalent coefficient proxy (patent 516641; production supplier unspecified)",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      diagramLabel: "L8",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      fl: -22.349873,
      glass: "S-TIH6 catalog-equivalent coefficient proxy (patent 805254; production supplier unspecified)",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      diagramLabel: "L9",
      type: "Biconvex Positive",
      nd: 1.62004,
      vd: 36.3,
      fl: 42.971502,
      glass: "E-F2 catalog-equivalent coefficient proxy (patent 620363; production supplier unspecified)",
    },
  ],

  surfaces: [
    { label: "1", R: 172.036, d: 3.5, nd: 1.62004, elemId: 1, sd: 23.0 },
    { label: "2", R: 1e15, d: 0.1, nd: 1.0, elemId: 0, sd: 21.5 },
    { label: "3", R: 82.224, d: 1.7, nd: 1.7725, elemId: 2, sd: 21.0 },
    { label: "4", R: 23.297, d: 7.6, nd: 1.0, elemId: 0, sd: 20.5 },
    { label: "5", R: -373.238, d: 1.5, nd: 1.7725, elemId: 3, sd: 16.0 },
    { label: "6", R: 69.199, d: 5.5, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "7", R: 41.501, d: 4.0, nd: 1.62004, elemId: 4, sd: 14.5 },
    { label: "8", R: 251.042, d: 33.862, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "9", R: 100.564, d: 2.6, nd: 1.6968, elemId: 5, sd: 12.5 },
    { label: "10", R: -292.325, d: 0.1, nd: 1.0, elemId: 0, sd: 12.5 },
    { label: "11", R: 39.613, d: 4.0, nd: 1.56883, elemId: 6, sd: 11.5 },
    // r12 is the resolved overstruck source row; see file header and audit.
    { label: "12", R: 149.473, d: 0.1, nd: 1.0, elemId: 0, sd: 11.5 },
    { label: "13", R: 22.672, d: 5.5, nd: 1.51633, elemId: 7, sd: 14.5 },
    // d14 = 5.50 mm total. Source gives no numerical STO split; neutral model assumption:
    // 2.75 + 2.75 mm.
    { label: "14", R: 96.429, d: 2.75, nd: 1.0, elemId: 0, sd: 13.8 },
    { label: "STO", R: 1e15, d: 2.75, nd: 1.0, elemId: 0, sd: 7.655192 },
    { label: "15", R: -341.32, d: 1.6, nd: 1.80518, elemId: 8, sd: 12.5 },
    { label: "16", R: 19.037, d: 5.0, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "17", R: 85.004, d: 4.5, nd: 1.62004, elemId: 9, sd: 12.0 },
    { label: "18", R: -38.022, d: 46.29, nd: 1.0, elemId: 0, sd: 12.0 },
  ],

  asph: {},

  var: {
    "8": [
      [33.862, 33.862],
      [13.55, 13.55],
      [0.5, 0.5],
    ],
    "18": [
      [46.29, 46.29],
      [58.024, 58.024],
      [72.854, 72.854],
    ],
  },

  varLabels: [
    ["8", "D8"],
    ["18", "BF"],
  ],

  zoomPositions: [35.146, 50.16, 69.137],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "C1 − ZOOM / REVERSES", fromSurface: "1", toSurface: "8" },
    { text: "C2 + ZOOM / OBJECTWARD", fromSurface: "9", toSurface: "18" },
  ],
  doublets: [],

  closeFocusM: 0.35,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION — patent publishes infinity zoom spacings only; 0.35 m production MFD is retained without an invented close-focus optical state.",

  nominalFno: 3.5,
  fstopSeries: [3.5, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
