import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — SONY FE PZ 16-35mm f/4 G                                            ║
 * ╠════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JP 2023-44106 A, Example 5 (Sony Group Corporation).                ║
 * ║ Production correlation is inferred; the patent does not name SELP1635G.          ║
 * ║ 13 elements / 12 air-separated optical groups; five kinematic groups (GR1-GR5). ║
 * ║ Eight aspherical surfaces: 3A, 4A, 9A, 10A, 17A, 18A, 23A, 24A.                 ║
 * ║                                                                                    ║
 * ║ Zoom: PUBLISHED. GR1 and GR5 are fixed; GR2, GR3, and GR4 move objectward from  ║
 * ║ wide to tele. D8 and D24 are zoom-only. D14 and D18A vary with zoom and focus.  ║
 * ║ The rounded prescription sums to 103.81 mm versus patent L = 103.82 mm; no       ║
 * ║ spacing was altered to absorb that 0.01 mm source-precision residual.             ║
 * ║                                                                                    ║
 * ║ Focus: PUBLISHED. GR3 moves objectward from infinity to the patent's close state. ║
 * ║ Table 23 publishes the close rows at raw d0 = 279 mm. The external reference     ║
 * ║ plane of d0 is not normalized to Sony's marketed 0.28 m wide / 0.24 m tele MFD;  ║
 * ║ no close-focus reconstruction is applied.                                         ║
 * ║                                                                                    ║
 * ║ Scaling: none. All R, d, sd, and asphere coefficients are native patent values.  ║
 * ║ Semi-diameters: patent effective diameters phi divided by two. STO sd = 7.75 mm  ║
 * ║ retains the patent's effective clear-aperture envelope; it is not asserted to be ║
 * ║ the physical iris opening. nominalFno = 4.12 is the modeled wide-open f-number.  ║
 * ║                                                                                    ║
 * ║ Glass: the patent publishes nd/vd only and names no vendors. Conservative         ║
 * ║ coordinate-class labels are used. nC, nF, ng, and dPgF are intentionally omitted ║
 * ║ because vendor-specific spectral data cannot be assigned without inventing glass ║
 * ║ identity.                                                                          ║
 * ║                                                                                    ║
 * ║ Source contradiction: condition (8) is printed without absolute-value bars, but  ║
 * ║ Example 5 Table 62 reports the positive magnitude. Prescription values are not    ║
 * ║ changed to resolve that textual contradiction.                                    ║
 * ╚════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sony-fe-pz-16-35-f4-g",
  maker: "Sony",
  name: "SONY FE PZ 16-35mm f/4 G",
  subtitle: "JP 2023-44106 A, Example 5 — inferred production correlation",
  specs: [
    "13 ELEMENTS / 12 GROUPS",
    "16.48-33.96 mm PATENT ZOOM STATES",
    "F/4.12 MODELED",
    "100.24°-65.00° PUBLISHED FULL FIELD",
    "8 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: [16, 35],
  focalLengthDesign: [16.48708045, 33.96336323],
  apertureMarketing: 4,
  apertureDesign: 4.12,
  lensMounts: ["sony-fe"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2023-44106 A",
  patentAuthors: ["Kohei Uemura", "Tetsuichiro Okumura", "Naoki Miyagawa"],
  patentAssignees: ["Sony Group Corporation"],
  patentYear: 2023,
  elementCount: 13,
  groupCount: 12,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      fl: -35.874032,
      glass: "835427 class (vendor unresolved)",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Neg. Meniscus (2x Asph)",
      nd: 1.58313,
      vd: 59.5,
      fl: -54.289791,
      glass: "583595 class (vendor unresolved)",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.6,
      fl: -46.090358,
      glass: "497816 class (vendor unresolved)",
    },
    {
      id: 4,
      name: "L14",
      label: "L14",
      type: "Positive Meniscus",
      nd: 1.85451,
      vd: 25.2,
      fl: 46.700432,
      glass: "855252 class (vendor unresolved)",
    },
    {
      id: 5,
      name: "L21",
      label: "L21",
      type: "Biconvex Positive (2x Asph)",
      nd: 1.58313,
      vd: 59.5,
      fl: 42.204882,
      glass: "583595 class (vendor unresolved)",
    },
    {
      id: 6,
      name: "L22",
      label: "L22",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.3,
      fl: -53.101032,
      glass: "806333 class (vendor unresolved)",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L23",
      label: "L23",
      type: "Biconvex Positive",
      nd: 1.4586,
      vd: 90.2,
      fl: 24.644994,
      glass: "459902 class (vendor unresolved)",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L31",
      label: "L31",
      type: "Negative Meniscus",
      nd: 1.77047,
      vd: 29.7,
      fl: -56.563369,
      glass: "770297 class (vendor unresolved)",
    },
    {
      id: 9,
      name: "L32",
      label: "L32",
      type: "Biconvex Positive (2x Asph)",
      nd: 1.4971,
      vd: 81.6,
      fl: 29.012292,
      glass: "497816 class (source nd 1.49710; vendor unresolved)",
    },
    {
      id: 10,
      name: "L41",
      label: "L41",
      type: "Positive Meniscus",
      nd: 1.94595,
      vd: 18,
      fl: 84.932872,
      glass: "946180 class (vendor unresolved)",
    },
    {
      id: 11,
      name: "L42",
      label: "L42",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.2,
      fl: -36.208816,
      glass: "911353 class (source vd rounded 35.2; vendor unresolved)",
    },
    {
      id: 12,
      name: "L43",
      label: "L43",
      type: "Negative Meniscus (2x Asph)",
      nd: 1.85135,
      vd: 40.1,
      fl: -57.555988,
      glass: "851401 class (vendor unresolved)",
    },
    {
      id: 13,
      name: "L51",
      label: "L51",
      type: "Positive Meniscus",
      nd: 1.90043,
      vd: 37.4,
      fl: 82.558417,
      glass: "900374 class (vendor unresolved)",
    },
  ],

  /* ── Surface prescription: Example 5 Table 21, native millimeters ── */
  surfaces: [
    { label: "1", R: 41.45, d: 1.5, nd: 1.83481, elemId: 1, sd: 19.35 },
    { label: "2", R: 17.1, d: 5.52, nd: 1.0, elemId: 0, sd: 14.735 },
    { label: "3A", R: 27.918, d: 1.1, nd: 1.58313, elemId: 2, sd: 14.205 },
    { label: "4A", R: 14.62, d: 7.24, nd: 1.0, elemId: 0, sd: 12.565 },
    { label: "5", R: -141.4, d: 0.9, nd: 1.497, elemId: 3, sd: 12.38 },
    { label: "6", R: 27.393, d: 0.3, nd: 1.0, elemId: 0, sd: 11.735 },
    { label: "7", R: 25.1, d: 3.27, nd: 1.85451, elemId: 4, sd: 11.73 },
    { label: "8", R: 63.59, d: 21.35, nd: 1.0, elemId: 0, sd: 11.4 },
    { label: "9A", R: 28.219, d: 2.9, nd: 1.58313, elemId: 5, sd: 8.28 },
    { label: "10A", R: -185.198, d: 6.3, nd: 1.0, elemId: 0, sd: 7.95 },
    // Patent phi(STO) = 15.50 mm is retained as an effective clear-aperture envelope, not a claimed iris opening.
    { label: "STO", R: 1e15, d: 3.61, nd: 1.0, elemId: 0, sd: 7.75 },
    { label: "12", R: 27.95, d: 0.7, nd: 1.8061, elemId: 6, sd: 7.95 },
    // Cemented L22 -> L23 junction: downstream element L23 owns the interface.
    { label: "13", R: 16.72, d: 4.65, nd: 1.4586, elemId: 7, sd: 7.79 },
    { label: "14", R: -31.83, d: 5.76, nd: 1.0, elemId: 0, sd: 7.77 },
    { label: "15", R: -13.73, d: 0.7, nd: 1.77047, elemId: 8, sd: 6.965 },
    { label: "16", R: -20.49, d: 0.2, nd: 1.0, elemId: 0, sd: 7.195 },
    { label: "17A", R: 172.723, d: 3.7, nd: 1.4971, elemId: 9, sd: 7.25 },
    { label: "18A", R: -15.624, d: 3.19, nd: 1.0, elemId: 0, sd: 7.45 },
    { label: "19", R: -24.09, d: 1.73, nd: 1.94595, elemId: 10, sd: 8.175 },
    { label: "20", R: -19.18, d: 0.26, nd: 1.0, elemId: 0, sd: 8.42 },
    { label: "21", R: -32.01, d: 0.7, nd: 1.91082, elemId: 11, sd: 8.36 },
    { label: "22", R: -1100, d: 1.34, nd: 1.0, elemId: 0, sd: 8.57 },
    { label: "23A", R: -44.594, d: 0.8, nd: 1.85135, elemId: 12, sd: 8.635 },
    { label: "24A", R: -500, d: 2.51, nd: 1.0, elemId: 0, sd: 9.165 },
    { label: "25", R: -67.27, d: 3.0, nd: 1.90043, elemId: 13, sd: 15.07 },
    { label: "26", R: -36.06, d: 20.58, nd: 1.0, elemId: 0, sd: 15.5 },
  ],

  /* ── Aspheres: Example 5 Table 24; patent k maps directly to standard K ── */
  asph: {
    "3A": { K: 0, A4: 1.29886e-5, A6: -6.46453e-8, A8: 8.41667e-11, A10: -7.32985e-14, A12: 0, A14: 0 },
    "4A": {
      K: -0.99515,
      A4: 3.4781e-5,
      A6: -3.24962e-8,
      A8: -1.13527e-10,
      A10: -2.50732e-13,
      A12: 0,
      A14: 0,
    },
    "9A": { K: 0, A4: -7.4038e-6, A6: 3.87602e-8, A8: -1.67778e-10, A10: -7.25665e-12, A12: 0, A14: 0 },
    "10A": { K: 0, A4: 1.65677e-6, A6: 7.49726e-8, A8: -8.61905e-10, A10: -3.0699e-12, A12: 0, A14: 0 },
    "17A": { K: 0, A4: -8.0272e-7, A6: 1.30215e-7, A8: -2.07992e-9, A10: 2.32326e-11, A12: 0, A14: 0 },
    "18A": { K: 0, A4: 2.20397e-5, A6: 1.35487e-7, A8: -1.00338e-9, A10: 1.73469e-11, A12: 0, A14: 0 },
    "23A": { K: 0, A4: -5.24839e-5, A6: 2.46939e-7, A8: -3.0344e-9, A10: 5.75983e-12, A12: 0, A14: 0 },
    "24A": { K: 0, A4: -1.35885e-5, A6: 2.87394e-7, A8: -2.51767e-9, A10: 7.77274e-12, A12: 0, A14: 0 },
  },

  /* ── Published zoom/focus variable gaps: Example 5 Table 23 ── */
  var: {
    "8": [
      [21.35, 21.35],
      [12.47, 12.47],
      [2.1, 2.1],
    ],
    "14": [
      [5.76, 4.82],
      [6.74, 5.45],
      [7.22, 5.2],
    ],
    "18A": [
      [3.19, 4.14],
      [4.36, 5.66],
      [9.25, 11.28],
    ],
    "24A": [
      [2.51, 2.51],
      [9.24, 9.24],
      [14.24, 14.24],
    ],
  },
  varLabels: [
    ["8", "D8 — zoom"],
    ["14", "D14 — focus"],
    ["18A", "D18 — focus"],
    ["24A", "D24 — zoom"],
  ],

  zoomPositions: [16.48, 22.87, 33.96],
  zoomLabels: ["Wide", "Tele"],

  /* ── Patent kinematic-group and cemented-doublet annotations ── */
  groups: [
    { text: "GR1", fromSurface: "1", toSurface: "8" },
    { text: "GR2", fromSurface: "9A", toSurface: "14" },
    { text: "GR3", fromSurface: "15", toSurface: "18A" },
    { text: "GR4", fromSurface: "19", toSurface: "24A" },
    { text: "GR5", fromSurface: "25", toSurface: "26" },
  ],
  doublets: [{ text: "D1", fromSurface: "12", toSurface: "14" }],

  /* ── Focus and aperture configuration ── */
  // Sony's production specification is 0.28 m wide / 0.24 m tele; this scalar records the marketed minimum.
  // The var close rows above remain the patent's independent published d0 = 279 mm state and are not reconstructed.
  closeFocusM: 0.24,
  focusDescription:
    "PUBLISHED internal focus: GR3 moves objectward. Patent Table 23 supplies infinity and d0=279 mm close spacings at all three zoom states; the external d0 reference plane is unresolved, so no reconstruction to the production 0.28 m wide / 0.24 m tele MFD is applied.",
  nominalFno: 4.12,
  fstopSeries: [4.12, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 7,

  /* ── Layout ── */
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
