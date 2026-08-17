import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — TAMRON AF 28-200mm SUPER XR f/3.8-5.6 Aspherical [IF] MACRO          ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 6,437,923 B1, Example 1 / Table 1 (Yasuharu Yamada, Tamron).      ║
 * ║  Production correlation: Tamron Model A03. Manufacturer metadata is kept separate ║
 * ║  from the patent design values.                                                     ║
 * ║                                                                                      ║
 * ║  Physical prescription: 15 lens pieces / 14 air-separated groups.                   ║
 * ║  Modeling entries: 18, because each of the three composite aspherical lens pieces   ║
 * ║  is represented as a glass substrate plus its bonded 0.2 mm resin layer.            ║
 * ║  Four moving optical groups: G1 positive, G2 negative, G3 positive, G4 positive.    ║
 * ║                                                                                      ║
 * ║  Zoom variables: D6, D15, D23, and derived BF.                                      ║
 * ║  Focus variables: D6 and D15 only. The patent states G2-only inner focus but does   ║
 * ║  not publish close-focus spacing rows. Close focus is therefore a                    ║
 * ║  CONSTRAINED_RECONSTRUCTION solved at Tamron's 0.49 m MFD with the image plane     ║
 * ║  fixed, G1/G3/G4 fixed, G2 translating only, and D6 + D15 conserved at each zoom   ║
 * ║  station. The 0.49 m object distance is normalized from object plane to the fixed   ║
 * ║  paraxial image/focal plane.                                                         ║
 * ║                                                                                      ║
 * ║  SOURCE CORRECTION: patent Table 1 visibly prints surface 31 n=1.53610, ν=48.9.    ║
 * ║  Independent three-state EFL fitting requires n=1.53172; this file uses 1.53172    ║
 * ║  and retains the raw printed value here for auditability.                           ║
 * ║                                                                                      ║
 * ║  Semi-diameters are not published. Values below are modeled from the patent ray   ║
 * ║  envelopes, the fixed stop inferred from the three published f-numbers, Fig. 1   ║
 * ║  relative element sizes, condition (9)'s compact-front constraint, and the       ║
 * ║  current edge/slope/conic/cross-gap geometry limits. The compact front group     ║
 * ║  intentionally permits field-dependent vignetting as described by the patent.    ║
 * ║                                                                                      ║
 * ║  Spectral note: the patent publishes only d-line-like nd/νd coordinates and names  ║
 * ║  no glass supplier. Vendor-neutral six-digit classes are therefore used. nC, nF,   ║
 * ║  ng, and dPgF are intentionally not invented from a particular supplier's catalog. ║
 * ║                                                                                      ║
 * ║  No uniform prescription scaling is applied.                                        ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "tamron-a03-28-200mm-f3p8-5p6",
  maker: "Tamron",
  name: "TAMRON AF 28-200mm SUPER XR f/3.8-5.6 Aspherical [IF] MACRO",
  subtitle: "US 6,437,923 B1 Example 1 — Model A03 correlation; documented surface-31 source correction",
  specs: [
    "28-200mm marketing / 29.07-193.0mm patent design",
    "15 PHYSICAL LENS PIECES / 14 GROUPS",
    "3 COMPOSITE ASPHERICAL LENSES",
    "0.49m MFD / 1:4 AT 200mm (MARKETING)",
  ],

  focalLengthMarketing: [28, 200],
  focalLengthDesign: [29.07140766359664, 192.98818547276178],
  lensMounts: ["nikon-f", "canon-ef", "sony-a", "pentax-k"],
  imageFormat: "135-full-frame",
  patentNumber: "US 6,437,923 B1",
  patentAuthors: ["Yasuharu Yamada"],
  patentAssignees: ["Tamron Co., Ltd."],
  patentYear: 2002,
  elementCount: 15,
  groupCount: 14,

  /* ── Elements ──
   * fl values are isolated-in-air first-order focal lengths of the individual modeling entries.
   * The three composite aspherical physical pieces are split into resin + substrate entries.
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: -110.584526,
      glass: "847238 (vendor-neutral d-line class)",
      role: "G1 front negative meniscus; compact-front high-index member.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      fl: 77.694653,
      glass: "697555 (vendor-neutral d-line class)",
      role: "G1 positive member.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 118.924033,
      glass: "773496 (vendor-neutral d-line class)",
      role: "G1 rear positive meniscus.",
    },
    {
      id: 4,
      name: "L4r",
      diagramLabel: "4r",
      label: "Element 4 resin layer",
      type: "Negative Meniscus (Asph)",
      nd: 1.5361,
      vd: 41.2,
      fl: -571.028259,
      glass: "Unmatched (composite-asphere resin; nd=1.53610, νd=41.2)",
      role: "Bonded front resin layer of physical L4; surface 7A carries the patent asphere.",
      cemented: "H1",
    },
    {
      id: 5,
      name: "L4",
      diagramLabel: "4",
      label: "Element 4 substrate",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      fl: -23.185503,
      glass: "835427 (vendor-neutral d-line class)",
      role: "Glass substrate of physical L4 in the negative focusing group G2.",
      cemented: "H1",
    },
    {
      id: 6,
      name: "L5",
      diagramLabel: "5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.72,
      vd: 50.2,
      fl: -30.510771,
      glass: "720502 (vendor-neutral d-line class)",
      role: "G2 negative element.",
    },
    {
      id: 7,
      name: "L6",
      diagramLabel: "6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      fl: 20.000234,
      glass: "847238 (vendor-neutral d-line class)",
      role: "Strong positive member within G2.",
    },
    {
      id: 8,
      name: "L7",
      diagramLabel: "7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      fl: -29.027707,
      glass: "835427 (vendor-neutral d-line class)",
      role: "G2 rear negative meniscus.",
    },
    {
      id: 9,
      name: "L8r",
      diagramLabel: "8r",
      label: "Element 8 resin layer",
      type: "Meniscus Resin Layer (Asph)",
      nd: 1.5361,
      vd: 41.2,
      fl: 32270.633934,
      glass: "Unmatched (composite-asphere resin; nd=1.53610, νd=41.2)",
      role: "Bonded front resin layer of physical L8; surface 17A carries the patent asphere.",
      cemented: "H2",
    },
    {
      id: 10,
      name: "L8",
      diagramLabel: "8",
      label: "Element 8 substrate",
      type: "Biconvex Positive",
      nd: 1.79952,
      vd: 42.2,
      fl: 42.835133,
      glass: "800422 (vendor-neutral d-line class)",
      role: "First positive lens piece of G3.",
      cemented: "H2",
    },
    {
      id: 11,
      name: "L9",
      diagramLabel: "9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 50.2,
      fl: 42.957701,
      glass: "720502 (vendor-neutral d-line class)",
      role: "G3 positive meniscus.",
    },
    {
      id: 12,
      name: "L10",
      diagramLabel: "10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.8,
      fl: -36.974022,
      glass: "847238 (vendor-neutral d-line class)",
      role: "G3 negative rear element.",
    },
    {
      id: 13,
      name: "L11",
      diagramLabel: "11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.1,
      fl: 33.429674,
      glass: "516641 (vendor-neutral d-line class)",
      role: "G4 front positive element.",
    },
    {
      id: 14,
      name: "L12",
      diagramLabel: "12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 40.9,
      fl: -31.225697,
      glass: "806409 (vendor-neutral d-line class)",
      role: "G4 negative meniscus.",
    },
    {
      id: 15,
      name: "L13",
      diagramLabel: "13",
      label: "Element 13 substrate",
      type: "Biconvex Positive",
      nd: 1.51823,
      vd: 59,
      fl: 28.949353,
      glass: "518590 (vendor-neutral d-line class)",
      role: "Glass substrate of physical L13 composite asphere in G4.",
      cemented: "H3",
    },
    {
      id: 16,
      name: "L13r",
      diagramLabel: "13r",
      label: "Element 13 resin layer",
      type: "Meniscus Resin Layer (Asph)",
      nd: 1.5361,
      vd: 41.2,
      fl: 34653.261974,
      glass: "Unmatched (composite-asphere resin; nd=1.53610, νd=41.2)",
      role: "Bonded rear resin layer of physical L13; surface 30A carries the patent asphere.",
      cemented: "H3",
    },
    {
      id: 17,
      name: "L14",
      diagramLabel: "14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.53172,
      vd: 48.9,
      fl: 18.203627,
      glass: "532489 (vendor-neutral d-line class; source-corrected nd)",
      role: "Positive front member of the cemented rear pair; patent surface-31 n corrected from 1.53610 to 1.53172.",
      cemented: "D1",
    },
    {
      id: 18,
      name: "L15",
      diagramLabel: "15",
      label: "Element 15",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      fl: -12.937963,
      glass: "773496 (vendor-neutral d-line class)",
      role: "Negative rear member of the cemented G4 pair.",
      cemented: "D1",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 179.53, d: 1.5, nd: 1.84666, elemId: 1, sd: 24.5 },
    { label: "2", R: 61.3, d: 1, nd: 1, elemId: 0, sd: 24.5 },
    { label: "3", R: 61.62, d: 6.5, nd: 1.6968, elemId: 2, sd: 23.5 },
    { label: "4", R: -426.53, d: 0.2, nd: 1, elemId: 0, sd: 23.5 },
    { label: "5", R: 48.45, d: 3.8, nd: 1.7725, elemId: 3, sd: 20.2 },
    { label: "6", R: 99.01, d: 1.768, nd: 1, elemId: 0, sd: 20.2 },
    { label: "7A", R: 67.95, d: 0.2, nd: 1.5361, elemId: 4, sd: 12.5 },
    { label: "8", R: 55.55, d: 0.8, nd: 1.83481, elemId: 5, sd: 12.5 },
    { label: "9", R: 14.26, d: 5.8, nd: 1, elemId: 0, sd: 12.5 },
    { label: "10", R: -35.32, d: 0.9, nd: 1.72, elemId: 6, sd: 9.6 },
    { label: "11", R: 58.73, d: 0.1, nd: 1, elemId: 0, sd: 9.6 },
    { label: "12", R: 30.04, d: 3.8, nd: 1.84666, elemId: 7, sd: 10.7 },
    { label: "13", R: -36.56, d: 0.7, nd: 1, elemId: 0, sd: 10.7 },
    { label: "14", R: -23.34, d: 0.8, nd: 1.83481, elemId: 8, sd: 8.5 },
    { label: "15", R: -643.51, d: 19.553, nd: 1, elemId: 0, sd: 8.5 },
    { label: "STO", R: 1e15, d: 0.9, nd: 1, elemId: 0, sd: 8.366462572735685 },
    { label: "17A", R: 34.75, d: 0.2, nd: 1.5361, elemId: 9, sd: 9.6 },
    { label: "18", R: 34.75, d: 2.6, nd: 1.79952, elemId: 10, sd: 9.6 },
    { label: "19", R: -2289.84, d: 0.1, nd: 1, elemId: 0, sd: 9.6 },
    { label: "20", R: 26.02, d: 2.5, nd: 1.72, elemId: 11, sd: 9.8 },
    { label: "21", R: 157.33, d: 1.4, nd: 1, elemId: 0, sd: 9.8 },
    { label: "22", R: -38.27, d: 0.8, nd: 1.84666, elemId: 12, sd: 8.6 },
    { label: "23", R: 173.64, d: 5.785, nd: 1, elemId: 0, sd: 8.6 },
    { label: "24", R: 23.69, d: 4.3, nd: 1.51633, elemId: 13, sd: 11.4 },
    { label: "25", R: -59.67, d: 0.2, nd: 1, elemId: 0, sd: 11.4 },
    { label: "26", R: 58.16, d: 0.8, nd: 1.8061, elemId: 14, sd: 12.4 },
    { label: "27", R: 17.46, d: 0.7, nd: 1, elemId: 0, sd: 12.4 },
    { label: "28", R: 24.79, d: 3.8, nd: 1.51823, elemId: 15, sd: 7.9 },
    { label: "29", R: -36.01, d: 0.2, nd: 1.5361, elemId: 16, sd: 7.9 },
    { label: "30A", R: -36.01, d: 0.2, nd: 1, elemId: 0, sd: 7.9 },
    { label: "31", R: 152.16, d: 5.8, nd: 1.53172, elemId: 17, sd: 8.8 },
    { label: "32", R: -10.2, d: 0.8, nd: 1.7725, elemId: 18, sd: 8.8 },
    { label: "33", R: 513.23, d: 41.12441709596909, nd: 1, elemId: 0, sd: 8.8 },
  ],

  asph: {
    "7A": {
      K: 1.8366,
      A4: 9.76517e-6,
      A6: 8.27233e-9,
      A8: 1.82191e-11,
      A10: 6.33815e-13,
      A12: 0,
      A14: 0,
    },
    "17A": {
      K: -0.1979,
      A4: 3.72528e-6,
      A6: 3.39383e-8,
      A8: 1.6258e-11,
      A10: -1.73954e-12,
      A12: 0,
      A14: 0,
    },
    "30A": {
      K: 1.3716,
      A4: 6.11041e-7,
      A6: 1.08319e-7,
      A8: -2.76656e-10,
      A10: 1.51768e-11,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Zoom and constrained close-focus spacings ── */
  var: {
    "6": [
      [1.768, 0.604588403745379],
      [23.261, 20.465266844641988],
      [42.131, 32.89149560148394],
    ],
    "15": [
      [19.553, 20.716411596254623],
      [10.101, 12.896733155358012],
      [0.969, 10.208504398516062],
    ],
    "23": [
      [5.785, 5.785],
      [3.36, 3.36],
      [1.913, 1.913],
    ],
    "33": [
      [41.12441709596909, 41.12441709596909],
      [62.042475480738446, 62.042475480738446],
      [73.8502682963781, 73.8502682963781],
    ],
  },
  varLabels: [
    ["6", "D6 (G1-G2)"],
    ["15", "D15 (G2-STO)"],
    ["23", "D23 (G3-G4)"],
    ["33", "BF"],
  ],

  zoomPositions: [29.07, 74.76, 193],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "6" },
    { text: "G2", fromSurface: "7A", toSurface: "15" },
    { text: "G3", fromSurface: "17A", toSurface: "23" },
    { text: "G4", fromSurface: "24", toSurface: "33" },
  ],
  doublets: [
    { text: "H1", fromSurface: "7A", toSurface: "9" },
    { text: "H2", fromSurface: "17A", toSurface: "19" },
    { text: "H3", fromSurface: "28", toSurface: "30A" },
    { text: "D1", fromSurface: "31", toSurface: "33" },
  ],

  closeFocusM: 0.49,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: patent-published G2-only inner focus, solved at the Tamron A03 0.49 m MFD with a fixed paraxial image plane; G1/G3/G4 remain fixed, only G2 translates, and D6 + D15 is conserved at every zoom station.",

  nominalFno: [3.696023631890291, 5.021169537267115, 5.820482752595908],
  fstopSeries: [3.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
