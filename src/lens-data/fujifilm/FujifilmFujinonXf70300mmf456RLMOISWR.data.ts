import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — FUJIFILM FUJINON XF 70-300mm f/4-5.6 R LM OIS WR                                    ║
 * ╠════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 2021/0286156 A1, Example 6 (FUJIFILM Corporation).                               ║
 * ║ Patent prescription retained at s = 1: 17 elements / 12 air-separated groups / 6 powered groups. ║
 * ║ Zoom variable gaps: D5, D12, D18, D23, D28. G3 and G5 move integrally; G2 reverses direction.     ║
 * ║                                                                                                  ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. Only G4 translates objectward from infinity.           ║
 * ║ Close-focus D18/D23 pairs were code-solved for a 0.83 m object distance from the normalized IMG,   ║
 * ║ preserving D18 + D23 = 21.595 mm. After PP removal the final-model tele solution is |m| =         ║
 * ║ 0.329922, consistent with FUJIFILM's published 0.33x maximum magnification. These pairs are not   ║
 * ║ patent rows.                                                                                      ║
 * ║                                                                                                  ║
 * ║ The patent's plane-parallel optical member PP is omitted. Its first-order propagation is folded  ║
 * ║ into surface 30's rear air spacing: 26.284 + 2.850/1.54763 + 1.123 = 29.2485254292 mm.          ║
 * ║                                                                                                  ║
 * ║ Semi-diameters are modeling inferences because Example 6 publishes no clear apertures. They were ║
 * ║ derived from wide-open marginal/chief-ray envelopes, APS-C image height, Fig. 12 proportions,    ║
 * ║ the production 67 mm filter / 75 mm barrel envelope, and current edge/rim/cross-gap constraints. ║
 * ║ Thin gaps 10->11, 20->21, and 25->26 are geometry-limited and intentionally permit natural       ║
 * ║ off-axis marginal-ray vignetting rather than invalid glass overlap.                               ║
 * ║                                                                                                  ║
 * ║ Spectral fields: patent theta_gF is retained as dPgF using the project normal line. ║
 * ║ Named catalog curves supply C/d/F; synthetic absolute line-index overrides are omitted. ║
 * ╚════════════════════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujifilm-fujinon-xf-70-300mm-f4-56-r-lm-ois-wr",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 70-300mm f/4-5.6 R LM OIS WR",
  subtitle: "US 2021/0286156 A1 Example 6 — FUJIFILM Corporation",
  specs: [
    "17 ELEMENTS / 12 GROUPS",
    "70-300mm MARKETED / 72.053-291.097mm EXAMPLE 6",
    "f/4-5.6 MARKETED / f/4.12-5.77 EXAMPLE 6",
    "1 ASPHERICAL ELEMENT / 2 ASPHERICAL SURFACES",
    "G4 INTERNAL FOCUS / L22-L24 OIS GROUP",
  ],
  focalLengthMarketing: [70, 300],
  focalLengthDesign: [72.053026443, 291.099455038],
  lensMounts: ["fujifilm-x"],
  imageFormat: "aps-c",
  patentNumber: "US 2021/0286156 A1",
  patentAuthors: ["Taiga Noda", "Ryosuke Nagami"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2021,
  elementCount: 17,
  groupCount: 12,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.27,
      fl: -210.371538,
      glass: "NBFD15-W (HOYA)",
      dPgF: 0.00061014,
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.42,
      fl: 151.75974,
      glass: "H-QK3L (CDGM)",
      dPgF: 0.00503644,
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      diagramLabel: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.59,
      fl: 215.680612,
      glass: "H-FK61 (CDGM)",
      dPgF: 0.03044438,
      apd: "patent",
      apdNote: "Positive anomalous partial dispersion derived from Example 6 Table 16 theta_gF; not a production ED-position claim.",
    },
    {
      id: 4,
      name: "L21",
      diagramLabel: "L21",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.42,
      fl: 184.751416,
      glass: "H-QK3L (CDGM)",
      dPgF: 0.00503644,
    },
    {
      id: 5,
      name: "L22",
      diagramLabel: "L22",
      label: "Element 5",
      type: "Plano-Concave Negative",
      nd: 1.83481,
      vd: 42.74,
      fl: -21.915645,
      glass: "S-LAH55VS (OHARA)",
      dPgF: -0.00701132,
      cemented: "D2",
    },
    {
      id: 6,
      name: "L23",
      diagramLabel: "L23",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.89286,
      vd: 20.36,
      fl: 36.792227,
      glass: "S-NPH4 (OHARA)",
      dPgF: 0.02988552,
      apd: "patent",
      apdNote: "Positive anomalous partial dispersion derived from Example 6 Table 16 theta_gF; not a production ED-position claim.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L24",
      diagramLabel: "L24",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.25,
      fl: -54.395414,
      glass: "TAFD35 (HOYA)",
      dPgF: -0.0022695,
    },
    {
      id: 8,
      name: "L31",
      diagramLabel: "L31",
      label: "Element 8",
      type: "Positive Meniscus (2x Asph)",
      nd: 1.58313,
      vd: 59.38,
      fl: 42.370629,
      glass: "L-BAL42 (OHARA)",
      dPgF: -0.00155284,
    },
    {
      id: 9,
      name: "L32",
      diagramLabel: "L32",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 39.22,
      fl: -26.444315,
      glass: "H-ZLAF68N (CDGM)",
      dPgF: -0.00488196,
      cemented: "D3",
    },
    {
      id: 10,
      name: "L33",
      diagramLabel: "L33",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.59,
      fl: 27.118843,
      glass: "H-FK61 (CDGM)",
      dPgF: 0.03044438,
      apd: "patent",
      apdNote: "Positive anomalous partial dispersion derived from Example 6 Table 16 theta_gF; not a production ED-position claim.",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L41",
      diagramLabel: "L41",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.788,
      vd: 47.37,
      fl: 46.573417,
      glass: "S-LAH64 (OHARA)",
      dPgF: -0.00814366,
    },
    {
      id: 12,
      name: "L42",
      diagramLabel: "L42",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.6398,
      vd: 34.47,
      fl: -18.346203,
      glass: "S-TIM27 (OHARA)",
      dPgF: 0.00650854,
      cemented: "D4",
    },
    {
      id: 13,
      name: "L43",
      diagramLabel: "L43",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.8707,
      vd: 40.73,
      fl: 18.424107,
      glass: "TAFD32 (HOYA)",
      dPgF: -0.00704214,
      cemented: "D4",
    },
    {
      id: 14,
      name: "L51",
      diagramLabel: "L51",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.741,
      vd: 52.64,
      fl: -34.107286,
      glass: "S-LAL61 (OHARA)",
      dPgF: -0.00849952,
    },
    {
      id: 15,
      name: "L52",
      diagramLabel: "L52",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.64769,
      vd: 33.79,
      fl: 21.831858,
      glass: "S-TIM22 (OHARA)",
      dPgF: 0.00696478,
      cemented: "D5",
    },
    {
      id: 16,
      name: "L53",
      diagramLabel: "L53",
      label: "Element 16",
      type: "Plano-Concave Negative",
      nd: 1.788,
      vd: 47.37,
      fl: -18.534137,
      glass: "S-LAH64 (OHARA)",
      dPgF: -0.00814366,
      cemented: "D5",
    },
    {
      id: 17,
      name: "L61",
      diagramLabel: "L61",
      label: "Element 17",
      type: "Positive Meniscus (convex to image)",
      nd: 1.91082,
      vd: 35.25,
      fl: 92.331669,
      glass: "TAFD35 (HOYA)",
      dPgF: -0.0022695,
    },
  ],

  /* ── Surface prescription: Example 6 Table 16; PP removed as described above ── */
  surfaces: [
    { label: "1", R: 245.94174, d: 2.0, nd: 1.8061, elemId: 1, sd: 28.5 },
    { label: "2", R: 100.008, d: 6.24, nd: 1.48749, elemId: 2, sd: 28.5 },
    { label: "3", R: -278.46212, d: 0.15, nd: 1.0, elemId: 0, sd: 28.0 },
    { label: "4", R: 84.82221, d: 4.54, nd: 1.497, elemId: 3, sd: 28.0 },
    { label: "5", R: 399.21233, d: 2.108, nd: 1.0, elemId: 0, sd: 27.5 },
    { label: "6", R: 179.72328, d: 2.47, nd: 1.48749, elemId: 4, sd: 13.5 },
    { label: "7", R: -179.72328, d: 13.056, nd: 1.0, elemId: 0, sd: 13.5 },
    { label: "8", R: 1e15, d: 1.01, nd: 1.83481, elemId: 5, sd: 9.7 },
    { label: "9", R: 18.2954, d: 3.09, nd: 1.89286, elemId: 6, sd: 9.4 },
    { label: "10", R: 38.00289, d: 2.677, nd: 1.0, elemId: 0, sd: 8.85 },
    { label: "11", R: -31.54978, d: 1.0, nd: 1.91082, elemId: 7, sd: 8.85 },
    { label: "12", R: -88.17798, d: 17.824, nd: 1.0, elemId: 0, sd: 9.2 },
    { label: "STO", R: 1e15, d: 0.75, nd: 1.0, elemId: 0, sd: 9.676 },
    { label: "14A", R: 20.14224, d: 4.04, nd: 1.58313, elemId: 8, sd: 10.2 },
    { label: "15A", R: 100.95599, d: 7.084, nd: 1.0, elemId: 0, sd: 10.2 },
    { label: "16", R: 37.52682, d: 1.0, nd: 1.883, elemId: 9, sd: 9.6 },
    { label: "17", R: 14.2141, d: 5.14, nd: 1.497, elemId: 10, sd: 9.6 },
    { label: "18", R: -229.03631, d: 9.041, nd: 1.0, elemId: 0, sd: 9.6 },
    { label: "19", R: 142.71745, d: 2.37, nd: 1.788, elemId: 11, sd: 9.0 },
    { label: "20", R: -49.04258, d: 0.846, nd: 1.0, elemId: 0, sd: 8.35 },
    { label: "21", R: -23.6923, d: 1.12, nd: 1.6398, elemId: 12, sd: 8.1 },
    { label: "22", R: 23.6923, d: 3.76, nd: 1.8707, elemId: 13, sd: 8.5 },
    { label: "23", R: -46.00978, d: 12.554, nd: 1.0, elemId: 0, sd: 8.8 },
    { label: "24", R: 71.77426, d: 1.0, nd: 1.741, elemId: 14, sd: 7.3 },
    { label: "25", R: 18.58085, d: 1.552, nd: 1.0, elemId: 0, sd: 7.0 },
    { label: "26", R: 399.50103, d: 3.76, nd: 1.64769, elemId: 15, sd: 7.0 },
    { label: "27", R: -14.6049, d: 1.01, nd: 1.788, elemId: 16, sd: 7.3 },
    { label: "28", R: 1e15, d: 2.978, nd: 1.0, elemId: 0, sd: 7.3 },
    { label: "29", R: -37.23339, d: 2.59, nd: 1.91082, elemId: 17, sd: 14.0 },
    { label: "30", R: -26.66311, d: 29.2485254292, nd: 1.0, elemId: 0, sd: 14.0 },
  ],

  /* ── Aspheres: Example 6 Table 18; patent KA = 1 -> standard K = 0 ── */
  asph: {
    "14A": {
      K: 0,
      A4: -1.6557317e-6,
      A5: -8.7163585e-7,
      A6: 2.3497768e-7,
      A7: -3.3880102e-8,
      A8: 2.0590459e-9,
      A9: 7.502495e-12,
      A10: -5.2428804e-12,
      A12: 0,
      A14: 0,
    },
    "15A": {
      K: 0,
      A4: 8.5826551e-6,
      A5: -1.0801504e-6,
      A6: 2.9070569e-7,
      A7: -4.305717e-8,
      A8: 3.2719258e-9,
      A9: -9.0431876e-11,
      A10: -2.172509e-12,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Zoom / focus variables ── */
  zoomPositions: [72.053, 127.769, 291.097],
  zoomLabels: ["Wide", "Tele"],
  var: {
    "5": [
      [2.108, 2.108],
      [35.699, 35.699],
      [72.334, 72.334],
    ],
    "12": [
      [17.824, 17.824],
      [9.81, 9.81],
      [1.87, 1.87],
    ],
    "18": [
      [9.041, 7.190313120179416],
      [9.39, 4.803982682017992],
      [19.307, 3.553977120572732],
    ],
    "23": [
      [12.554, 14.404686879820584],
      [12.205, 16.79101731798201],
      [2.288, 18.041022879427267],
    ],
    "28": [
      [2.978, 2.978],
      [9.994, 9.994],
      [21.689, 21.689],
    ],
  },
  varLabels: [
    ["5", "D5"],
    ["12", "D12"],
    ["18", "D18"],
    ["23", "D23"],
    ["28", "D28"],
  ],

  /* ── Diagram annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (-)", fromSurface: "6", toSurface: "12" },
    { text: "G3 (+)", fromSurface: "STO", toSurface: "18" },
    { text: "G4 (+) FOCUS", fromSurface: "19", toSurface: "23" },
    { text: "G5 (-)", fromSurface: "24", toSurface: "28" },
    { text: "G6 (+)", fromSurface: "29", toSurface: "30" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "16", toSurface: "18" },
    { text: "D4", fromSurface: "21", toSurface: "23" },
    { text: "D5", fromSurface: "26", toSurface: "28" },
  ],

  /* ── Focus / aperture / layout ── */
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: only G4 moves objectward; D18+D23 is conserved at each zoom state; " +
    "close-focus gaps are code-solved at 0.83 m from the normalized image plane and reproduce 0.32992x at tele.",
  closeFocusM: 0.83,
  nominalFno: [4.12, 4.9, 5.77],
  fstopSeries: [4, 4.5, 5.6, 6.3, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 9,
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
