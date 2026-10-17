import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║      LENS DATA — KONICA ZOOM-HEXANON AR 35-70mm f/3.5                   ║
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
 * ║  STOP MODEL: The source places S only within d14, between L7 and L8. It    ║
 * ║  publishes no numerical stop split, so the model uses a neutral midpoint   ║
 * ║  assumption: r14->STO = 2.75 mm and STO->r15 = 2.75 mm. The stop radius is ║
 * ║  derived from the design f-number at each zoom station.                    ║
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
  schema: 2,
  key: "konica-zoom-hexanon-ar-35-70mm-f3-5",
  maker: "Konica",
  name: "KONICA ZOOM-HEXANON AR 35-70mm f/3.5",
  subtitle: "JPS55-21005A Example 1 — production correlation to Cat. No. 703-172",

  catalog: {
    lensMounts: ["konica-ar"],
    imageFormat: "135-full-frame",
    specs: ["9 ELEMENTS / 9 GROUPS", "35–70mm", "f/3.5-f/22", "63°-34°", "MFD 0.35m"],
    elementCount: 9,
    groupCount: 9,
    focalLengthMm: { marketing: [35, 70], design: [35.14385, 69.129631] },
    fNumber: { marketing: 3.5, design: 3.5 },
  },

  source: {
    patentNumber: "JP 1980-021005 A",
    patentYear: 1980,
    authors: ["Tadashi Kojima", "Reiko Mao"],
    assignees: ["Konishiroku Photo Industry Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Plano-Convex Positive",
      nd: 1.62004,
      vd: 36.3,
      focalLengthMm: 277.459519,
      glass: "E-F2 catalog-equivalent coefficient proxy (patent 620363; production supplier unspecified)",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -42.616805,
      glass: "J-LASF016 catalog-equivalent coefficient proxy (patent 773496; production supplier unspecified)",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -75.456127,
      glass: "J-LASF016 catalog-equivalent coefficient proxy (patent 773496; production supplier unspecified)",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.62004,
      vd: 36.3,
      focalLengthMm: 79.607644,
      glass: "E-F2 catalog-equivalent coefficient proxy (patent 620363; production supplier unspecified)",
      diagramLabel: "L4",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: 107.674365,
      glass: "J-LAK14 catalog-equivalent coefficient proxy (patent 697555; production supplier unspecified)",
      diagramLabel: "L5",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.56883,
      vd: 56.2,
      focalLengthMm: 93.515268,
      glass: "BAC4 catalog-equivalent coefficient proxy (patent 569562; production supplier unspecified)",
      diagramLabel: "L6",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.51633,
      vd: 64.1,
      focalLengthMm: 55.985694,
      glass: "S-BSL7 catalog-equivalent coefficient proxy (patent 516641; production supplier unspecified)",
      diagramLabel: "L7",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: -22.349873,
      glass: "S-TIH6 catalog-equivalent coefficient proxy (patent 805254; production supplier unspecified)",
      diagramLabel: "L8",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.62004,
      vd: 36.3,
      focalLengthMm: 42.971502,
      glass: "E-F2 catalog-equivalent coefficient proxy (patent 620363; production supplier unspecified)",
      diagramLabel: "L9",
    },
  ],

  surfaces: [
    { label: "1", R: 172.036, d: 3.5, sd: 23.0, medium: 1 },
    { label: "2", R: "flat", d: 0.1, sd: 21.5 },
    { label: "3", R: 82.224, d: 1.7, sd: 21.0, medium: 2 },
    { label: "4", R: 23.297, d: 7.6, sd: 20.5 },
    { label: "5", R: -373.238, d: 1.5, sd: 16.0, medium: 3 },
    { label: "6", R: 69.199, d: 5.5, sd: 16.0 },
    { label: "7", R: 41.501, d: 4.0, sd: 14.5, medium: 4 },
    { label: "8", R: 251.042, sd: 14.0 },
    { label: "9", R: 100.564, d: 2.6, sd: 12.5, medium: 5 },
    { label: "10", R: -292.325, d: 0.1, sd: 12.5 },
    { label: "11", R: 39.613, d: 4.0, sd: 11.5, medium: 6 },
    // r12 is the resolved overstruck source row; see file header and audit.
    { label: "12", R: 149.473, d: 0.1, sd: 11.5 },
    { label: "13", R: 22.672, d: 5.5, sd: 14.5, medium: 7 },
    // d14 = 5.50 mm total. Source gives no numerical STO split; neutral model assumption:
    // 2.75 + 2.75 mm.
    { label: "14", R: 96.429, d: 2.75, sd: 13.8 },
    { label: "STO", R: "flat", d: 2.75 },
    { label: "15", R: -341.32, d: 1.6, sd: 12.5, medium: 8 },
    { label: "16", R: 19.037, d: 5.0, sd: 12.0 },
    { label: "17", R: 85.004, d: 4.5, sd: 12.0, medium: 9 },
    { label: "18", R: -38.022, sd: 12.0 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 35.146, label: "Wide" },
      { focalLengthMm: 50.16 },
      { focalLengthMm: 69.137, label: "Tele" },
    ],
  },

  focus: {
    closeFocusM: 0.35,
    description:
      "NO_INTERNAL_RECONSTRUCTION — patent publishes infinity zoom spacings only; 0.35 m production MFD is retained without an invented close-focus optical state.",
  },

  gaps: {
    "8": {
      label: "D8",
      values: [
        [33.862, 33.862],
        [13.55, 13.55],
        [0.5, 0.5],
      ],
    },
    "18": {
      label: "BF",
      values: [
        [46.29, 46.29],
        [58.024, 58.024],
        [72.854, 72.854],
      ],
    },
  },

  aperture: { nominalFNumber: 3.5, fStops: [3.5, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "C1 − ZOOM / REVERSES", fromSurface: "1", toSurface: "8" },
    { text: "C2 + ZOOM / OBJECTWARD", fromSurface: "9", toSurface: "18" },
  ],
  doublets: [],

  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
