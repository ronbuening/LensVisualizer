import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — LEICA DC VARIO-SUMMILUX 10.9-34mm f/1.7-2.8 ASPH. (Panasonic LX100M2) ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 2016/0054550 A1, Example 1 (Panasonic IP Management).                  ║
 * ║ 11 physical glass elements / 8 air-separated physical groups; 6 zoom units.       ║
 * ║ Eight aspherical surfaces on five elements.                                        ║
 * ║                                                                                     ║
 * ║ NORMALIZATION                                                                       ║
 * ║ - Uniform scale s = 1.0. Marketed 10.9-34 mm is not imposed on the patent model.  ║
 * ║ - The three 0.01000 mm same-radius adhesive media are collapsed to direct          ║
 * ║   cemented interfaces. Their thickness is added to L4, L7, and L10 respectively.  ║
 * ║ - Source rear plate P (1.10000 mm, nd 1.51680) is omitted. The S23-to-image air    ║
 * ║   gaps are code-solved after cement collapse for the published infinity states.    ║
 * ║ - The normalized model therefore differs slightly from the raw patent EFL:         ║
 * ║   11.265298534 / 19.151668516 / 32.537812044 mm.                                  ║
 * ║                                                                                     ║
 * ║ ZOOM / FOCUS                                                                        ║
 * ║ - All three published infinity zoom states are retained; G2 and G6 show sampled    ║
 * ║   motion reversals, so the middle control point is required.                        ║
 * ║ - Focus status: NO_INTERNAL_RECONSTRUCTION. The patent states only that G6 moves   ║
 * ║   objectward toward near focus; no close-focus travel is invented here.             ║
 * ║ - closeFocusM = 0.03 is marketed wide-end MFD metadata only (tele: 0.30 m).         ║
 * ║   Every authored focus pair is intentionally identical.                             ║
 * ║                                                                                     ║
 * ║ APERTURE / SEMI-DIAMETERS                                                           ║
 * ║ - The patent publishes the stop plane and f-numbers but no physical stop diameter. ║
 * ║   STO.sd is a modeled maximum iris envelope (6.3862 mm semi-diameter). Effective   ║
 * ║   wide/middle/tele openings are f-number-calibrated in the audit and are not an     ║
 * ║   independent verification of a production diaphragm diameter.                      ║
 * ║ - Lens SDs are modeled from exact meridional Snell/asphere traces at the published ║
 * ║   zoom states using the project default 0.60 field fraction, then constrained by    ║
 * ║   edge thickness, actual rim slope, conic domain, and cross-gap intrusion.          ║
 * ║ - Layout values are not used to conceal geometry failures.                           ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════╝
 */

// SD review (2026-09-15): exact local patent Fig. 1 optical rims; see the audit sidecar.
// Revised apertures remain estimates; radii, spacings and calibrated stop are unchanged.
const LENS_DATA = {
  /* ── Identity ── */
  key: "leica-dc-vario-summilux-10934-f1728-lx100m2",
  maker: "Panasonic",
  name: "LEICA DC VARIO-SUMMILUX 10.9-34mm f/1.7-2.8 ASPH. (Panasonic Lumix DC-LX100M2)",
  subtitle: "US 2016/0054550 A1 Example 1 — strong production correlation; normalized direct-cement model",
  specs: [
    "11 ELEMENTS / 8 GROUPS",
    "MARKETED 10.9-34mm f/1.7-2.8",
    "MODEL EFL 11.265-32.538 mm",
    "DESIGN F/1.76551-2.91140",
    "8 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: [10.9, 34],
  focalLengthDesign: [11.265298534, 32.537812044],
  apertureMarketing: 1.7, // wide-end scalar; full marketed range is retained in name/specs
  apertureDesign: 1.76551, // wide-end scalar; full design range is retained in nominalFno
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "four-thirds",
  patentNumber: "US 2016/0054550 A1",
  patentAuthors: ["Takakazu Bito", "Hiroaki Suzuki"],
  patentAssignees: ["Panasonic Intellectual Property Management Co., Ltd."],
  patentYear: 2016,
  elementCount: 11,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.6,
      indexReference: "d",
      fl: 66.803597,
      glass: "FCD515 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: "inferred",
      apdNote: "FCD515 spectral proxy has ΔPgF ≈ +0.0158; APD is catalog-inferred, not patent-listed or a supplier identification.",
      role: "Positive G1 front element.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.805,
      vd: 41,
      indexReference: "d",
      fl: -14.544581,
      glass: "S-LAH53 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: false,
      role: "Negative G2 variator element with two aspherical surfaces.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.5,
      indexReference: "d",
      fl: -20.655611,
      glass: "SF6 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: false,
      role: "Negative member of the L3-L4 cemented stabilization pair in G3.",
      cemented: "D34",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.3,
      indexReference: "d",
      fl: 15.344762,
      glass: "H-ZLaF4LA (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: false,
      role: "Positive member of the L3-L4 cemented stabilization pair in G3.",
      cemented: "D34",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.68826,
      vd: 31.1,
      indexReference: "d",
      fl: -58.688265,
      glass: "S-TIM28 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: false,
      role: "Weak negative rear element of G3; image-side surface is aspherical.",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.58332,
      vd: 59.3,
      indexReference: "d",
      fl: -28.903684,
      glass: "M-BACD12 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: false,
      role: "Negative member of the G4 cemented pair; object-side surface is aspherical.",
      cemented: "D67",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 2.00272,
      vd: 19.3,
      indexReference: "d",
      fl: 24.108291,
      glass: "E-FDS2 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: "inferred",
      apdNote: "E-FDS2 spectral proxy has ΔPgF ≈ +0.0338; APD is catalog-inferred, not patent-listed or a supplier identification.",
      role: "Positive high-index member of the G4 cemented pair ahead of the diaphragm.",
      cemented: "D67",
    },
    {
      id: 8,
      name: "L8",
      diagramLabel: "L8",
      label: "Element 8",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.55343,
      vd: 71.5,
      indexReference: "d",
      fl: 20.173959,
      glass: "M-FCD500 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: "inferred",
      apdNote: "M-FCD500 spectral proxy has ΔPgF ≈ +0.0170; APD is catalog-inferred, not patent-listed or a supplier identification.",
      role: "Dual-sided aspherical positive element at the front of G5.",
    },
    {
      id: 9,
      name: "L9",
      diagramLabel: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      fl: 20.558244,
      glass: "J-LASF016 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: false,
      role: "Positive member of the L9-L10 cemented pair in G5.",
      cemented: "D910",
    },
    {
      id: 10,
      name: "L10",
      diagramLabel: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      fl: -12.214499,
      glass: "J-SF03 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: "inferred",
      apdNote: "J-SF03 spectral proxy has ΔPgF ≈ +0.0178; APD is catalog-inferred, not patent-listed or a supplier identification.",
      role: "Negative member of the L9-L10 cemented pair in G5.",
      cemented: "D910",
    },
    {
      id: 11,
      name: "L11",
      diagramLabel: "L11",
      label: "Element 11",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.55343,
      vd: 71.5,
      indexReference: "d",
      fl: 35.551589,
      glass: "M-FCD500 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: "inferred",
      apdNote: "M-FCD500 spectral proxy has ΔPgF ≈ +0.0170; APD is catalog-inferred, not patent-listed or a supplier identification.",
      role: "Dual-sided aspherical positive G6 focus group; no close-focus travel is reconstructed.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 40.7214, d: 4.2249, nd: 1.59282, elemId: 1, sd: 14.5 },
    { label: "2", R: -1385.6544, d: 0.7165, nd: 1, elemId: 0, sd: 14.5 },
    { label: "3A", R: -112.9266, d: 1.1, nd: 1.805, elemId: 2, sd: 9.1 },
    { label: "4A", R: 13.1195, d: 13.7558, nd: 1, elemId: 0, sd: 9.1 },
    { label: "5", R: -42.5513, d: 0.5, nd: 1.80518, elemId: 3, sd: 7.15 },
    { label: "6", R: 27.4462, d: 2.0864, nd: 1.91082, elemId: 4, sd: 7.15 },
    { label: "8", R: -27.4462, d: 1.301, nd: 1, elemId: 0, sd: 7.15 },
    { label: "9", R: -25.4603, d: 0.5, nd: 1.68826, elemId: 5, sd: 6.9 },
    { label: "10A", R: -69.4222, d: 1.6811, nd: 1, elemId: 0, sd: 6.9 },
    { label: "11A", R: -19.5955, d: 0.5, nd: 1.58332, elemId: 6, sd: 7.15 },
    { label: "12", R: 121.9154, d: 1.9321, nd: 2.00272, elemId: 7, sd: 7.15 },
    { label: "14", R: -29.9134, d: 0.51, nd: 1, elemId: 0, sd: 7.15 },
    { label: "STO", R: 1e15, d: 11.4515, nd: 1, elemId: 0, sd: 6.3862 },
    { label: "16A", R: 18.8036, d: 6, nd: 1.55343, elemId: 8, sd: 11.55 },
    { label: "17A", R: -24.3593, d: 0.15, nd: 1, elemId: 0, sd: 11.55 },
    { label: "18", R: 24.7292, d: 3.5866, nd: 1.7725, elemId: 9, sd: 10.2 },
    { label: "19", R: -41.5809, d: 0.9896, nd: 1.84666, elemId: 10, sd: 10.2 },
    { label: "21", R: 13.9152, d: 5.0978, nd: 1, elemId: 0, sd: 9 },
    { label: "22A", R: 19.639, d: 4.6295, nd: 1.55343, elemId: 11, sd: 11.8 },
    { label: "23A", R: 9746.5098, d: 14.236411354, nd: 1, elemId: 0, sd: 11.8 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "3A": {
      K: 0,
      A4: 4.0433e-5,
      A6: -5.92449e-8,
      A8: -1.80291e-9,
      A10: 1.41335e-11,
      A12: -3.271e-14,
      A14: 0,
    },
    "4A": {
      K: 0,
      A4: 5.69066e-7,
      A6: 8.11958e-7,
      A8: -1.24411e-8,
      A10: 5.48832e-11,
      A12: 0,
      A14: 0,
    },
    "10A": {
      K: 0,
      A4: 8.18947e-5,
      A6: 4.95376e-7,
      A8: -3.42721e-9,
      A10: 1.05655e-10,
      A12: 0,
      A14: 0,
    },
    "11A": {
      K: 0,
      A4: 7.43261e-5,
      A6: 3.73289e-7,
      A8: -5.11294e-9,
      A10: 1.31843e-10,
      A12: 0,
      A14: 0,
    },
    "16A": {
      K: 0,
      A4: -3.76482e-5,
      A6: 1.07311e-7,
      A8: -1.38939e-9,
      A10: 1.81605e-11,
      A12: 0,
      A14: 0,
    },
    "17A": {
      K: 0,
      A4: 2.30876e-5,
      A6: 9.80261e-9,
      A8: -7.67882e-10,
      A10: 1.93662e-11,
      A12: 0,
      A14: 0,
    },
    "22A": {
      K: 0,
      A4: -4.64106e-6,
      A6: 1.86129e-7,
      A8: -1.86394e-9,
      A10: 6.69528e-12,
      A12: 0,
      A14: 0,
    },
    "23A": {
      K: 0,
      A4: 1.67447e-5,
      A6: 2.00177e-7,
      A8: -2.19294e-9,
      A10: 7.81576e-12,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable spacings: published infinity zoom states only ── */
  var: {
    "2": [
      [0.7165, 0.7165],
      [7.7275, 7.7275],
      [16.6911, 16.6911],
    ],
    "4A": [
      [13.7558, 13.7558],
      [6.979, 6.979],
      [4.0594, 4.0594],
    ],
    "10A": [
      [1.6811, 1.6811],
      [2.99, 2.99],
      [3.6811, 3.6811],
    ],
    STO: [
      [11.4515, 11.4515],
      [6.1943, 6.1943],
      [1.37, 1.37],
    ],
    "21": [
      [5.0978, 5.0978],
      [13.6054, 13.6054],
      [24.7534, 24.7534],
    ],
    "23A": [
      [14.236411354, 14.236411354],
      [15.219722288, 15.219722288],
      [15.071156753, 15.071156753],
    ],
  },
  varLabels: [
    ["2", "D2"],
    ["4A", "D4"],
    ["10A", "D10"],
    ["STO", "D15"],
    ["21", "D21"],
    ["23A", "BF"],
  ],

  /* ── Zoom control points use the patent Table 3 focal-length headings ── */
  zoomPositions: [11.2612, 19.1449, 32.5307],
  zoomLabels: ["Wide", "Tele"],

  /* ── Group and cemented-pair annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "2" },
    { text: "G2 (-)", fromSurface: "3A", toSurface: "4A" },
    { text: "G3 (+)", fromSurface: "5", toSurface: "10A" },
    { text: "G4 (+)", fromSurface: "11A", toSurface: "STO" },
    { text: "G5 (+)", fromSurface: "16A", toSurface: "21" },
    { text: "G6 (+)", fromSurface: "22A", toSurface: "23A" },
  ],
  doublets: [
    { text: "D34", fromSurface: "5", toSurface: "8" },
    { text: "D67", fromSurface: "11A", toSurface: "14" },
    { text: "D910", fromSurface: "18", toSurface: "21" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.03,
  focusDescription:
    "Not modeled — G6 moves objectward for close focus; the patent provides only infinity-focus zoom spacings.",

  /* ── Aperture configuration ── */
  nominalFno: [1.76551, 2.5139, 2.9114],
  fstopSeries: [1.7, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
