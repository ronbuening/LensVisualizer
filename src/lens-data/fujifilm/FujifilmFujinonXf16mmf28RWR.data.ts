import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — FUJIFILM FUJINON XF 16mm f/2.8 R WR                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2020/0073096 A1, Example 3 (Ryosuke Nagami /      ║
 * ║  FUJIFILM Corporation). Patent design retained at scale s = 1.0.   ║
 * ║  10 elements / 8 air-separated groups; 4 aspherical surfaces on   ║
 * ║  2 physical aspherical elements.                                   ║
 * ║                                                                    ║
 * ║  Product correlation is inferred, not stated by the patent.        ║
 * ║  FUJIFILM publishes 16 mm, F2.8, 10/8 construction, 2 aspherical   ║
 * ║  elements, 17 cm sensor-plane MFD, and inner focusing.             ║
 * ║                                                                    ║
 * ║  FOCUS STATUS: CONSTRAINED_RECONSTRUCTION.                         ║
 * ║  Infinity and the patent's 1 m state are transcribed. The 17 cm   ║
 * ║  endpoint is a code-solved one-DOF reconstruction: only G2/L21    ║
 * ║  moves objectward, with DD15 + DD17 fixed at 7.61 mm. The patent  ║
 * ║  1 m row is consistent with 1.000 m from surface 1; it is mapped  ║
 * ║  to 1.06049 m from the physical sensor plane for focusT.           ║
 * ║                                                                    ║
 * ║  OPTIONAL PP NORMALIZATION: patent surfaces 20–21 represent a      ║
 * ║  no-power filter/cover plate and are omitted. Surface 19 therefore ║
 * ║  uses 14.079538095 mm air-equivalent rear spacing to the model     ║
 * ║  image plane (11.10 + 2.85/1.51633 + 1.10).                        ║
 * ║                                                                    ║
 * ║  SEMI-DIAMETERS: not published. They are inferred from the patent  ║
 * ║  FIG. 3 optical section, d-line marginal/chief-ray envelopes, the  ║
 * ║  F/2.88-derived physical stop radius, and current edge/slope/gap   ║
 * ║  constraints. They are modeling values, not source facts.          ║
 * ║                                                                    ║
 * ║  GLASS: the patent gives Nd, νd, and θgF but no vendor/type. The    ║
 * ║  labels below therefore use conservative six-digit coordinate      ║
 * ║  classes; vendor catalog matches remain audit-only equivalences.   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 *
 * Manufacturer sources for production metadata:
 * https://www.fujifilm-x.com/en-us/products/lenses/xf16mmf28-r-wr/
 * https://dl.fujifilm-x.com/support/manual/lenses/lens_xf16mmf28_manual_01.pdf
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujifilm-fujinon-xf-16mm-f28-r-wr",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 16mm f/2.8 R WR",
  subtitle: "US 2020/0073096 A1 Example 3 — production correlation inferred",
  specs: [
    "10 ELEMENTS / 8 GROUPS",
    "16mm f/2.8 (production)",
    "f = 16.48mm, FNo = 2.88 (Example 3)",
    "2ω = 89.2° (Example 3)",
    "2 ASPHERICAL ELEMENTS",
  ],

  focalLengthMarketing: 16,
  focalLengthDesign: 16.479792674,
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["fujifilm-x"],
  imageFormat: "aps-c",
  patentNumber: "US 2020/0073096 A1",
  patentAuthors: ["Ryosuke Nagami"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2020,
  elementCount: 10,
  groupCount: 8,

  // The patent's stated design field is kept distinct from FUJIFILM's marketed 83.2° angle of view.
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 89.2,
    maxTraceFieldDeg: 44.6,
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.53996,
      vd: 59.73,
      dPgF: 0.00098586,
      apdNote: "Patent theta_gF = 0.54432; dPgF = +0.00098586 from the project normal line. No production supplier identification.",
      fl: -65.69351,
      glass: "540597 — barium crown class",
      role: "Object-side negative meniscus in G1a.",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "Element 2",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.51633,
      vd: 64.06,
      dPgF: -0.00260108,
      apdNote: "Patent theta_gF = 0.53345; dPgF = -0.00260108 from the project normal line. No production supplier identification.",
      fl: -29.581399,
      glass: "516641 — crown coordinate class",
      role: "Second negative meniscus in G1a; both surfaces are aspherical.",
    },
    {
      id: 3,
      name: "L13",
      diagramLabel: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.68,
      dPgF: -0.00731824,
      apdNote: "Patent theta_gF = 0.54451; dPgF = -0.00731824 from the project normal line. No production supplier identification.",
      fl: 36.271954,
      glass: "729547 — lanthanum crown class",
      role: "Positive G1a element immediately ahead of the aperture stop.",
    },
    {
      id: 4,
      name: "L14",
      diagramLabel: "L14",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 2.00069,
      vd: 25.46,
      dPgF: 0.01266372,
      apd: "patent",
      apdNote: "Patent theta_gF = 0.61364; dPgF = +0.01266372 from the project normal line. No production supplier identification.",
      fl: 9.931129,
      glass: "001255 — high-index flint class",
      role: "Positive member of the first G1b cemented pair.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L15",
      diagramLabel: "L15",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.72047,
      vd: 34.71,
      dPgF: -0.00191778,
      apdNote: "Patent theta_gF = 0.58350; dPgF = -0.00191778 from the project normal line. No production supplier identification.",
      fl: -14.260195,
      glass: "720347 — short-flint coordinate class",
      role: "Negative member of the first G1b cemented pair.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L16",
      diagramLabel: "L16",
      label: "Element 6",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.38,
      dPgF: -0.00155284,
      apdNote: "Patent theta_gF = 0.54237; dPgF = -0.00155284 from the project normal line. No production supplier identification.",
      fl: 36.636468,
      glass: "583594 — barium crown coordinate class",
      role: "Positive aspherical meniscus between the two G1b cemented pairs.",
    },
    {
      id: 7,
      name: "L17",
      diagramLabel: "L17",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.78,
      dPgF: 0.01673796,
      apd: "patent",
      apdNote: "Patent theta_gF = 0.62054; dPgF = +0.01673796 from the project normal line. No production supplier identification.",
      fl: -9.014153,
      glass: "847238 — dense flint class",
      role: "Negative member of the second G1b cemented pair.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L18",
      diagramLabel: "L18",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.68,
      dPgF: -0.00731824,
      apdNote: "Patent theta_gF = 0.54451; dPgF = -0.00731824 from the project normal line. No production supplier identification.",
      fl: 12.497267,
      glass: "729547 — lanthanum crown class",
      role: "Positive member of the second G1b cemented pair.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L21",
      diagramLabel: "L21",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.74,
      dPgF: -0.00701132,
      apdNote: "Patent theta_gF = 0.56490; dPgF = -0.00701132 from the project normal line. No production supplier identification.",
      fl: 35.518739,
      glass: "835427 — high-index lanthanum flint class",
      role: "Single positive G2 focus element; translates objectward toward close focus.",
    },
    {
      id: 10,
      name: "L31",
      diagramLabel: "L31",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.85478,
      vd: 24.8,
      dPgF: 0.0102336,
      apd: "patent",
      apdNote: "Patent theta_gF = 0.61232; dPgF = +0.01023360 from the project normal line. No production supplier identification.",
      fl: -59.794591,
      glass: "855248 — dense flint class",
      role: "Single negative fixed rear group G3.",
    },
  ],

  /* ── Surface prescription: US 2020/0073096 A1, Example 3, Table 9 ── */
  surfaces: [
    { label: "1", R: 33.356, d: 1.0, nd: 1.53996, elemId: 1, sd: 13.5 },
    { label: "2", R: 17.01, d: 5.0, nd: 1.0, elemId: 0, sd: 13.0 },
    { label: "3A", R: 29.98, d: 1.25, nd: 1.51633, elemId: 2, sd: 9.5 },
    { label: "4A", R: 9.975, d: 5.7, nd: 1.0, elemId: 0, sd: 8.7 },
    { label: "5", R: 17.372, d: 1.66, nd: 1.72916, elemId: 3, sd: 6.3 },
    { label: "6", R: 48.583, d: 4.86, nd: 1.0, elemId: 0, sd: 6.1 },
    { label: "STO", R: 1e15, d: 2.39, nd: 1.0, elemId: 0, sd: 4.084637 },
    { label: "8", R: 27.246, d: 2.56, nd: 2.00069, elemId: 4, sd: 5.8 },
    { label: "9", R: -14.909, d: 0.64, nd: 1.72047, elemId: 5, sd: 5.8 },
    { label: "10", R: 33.642, d: 0.83, nd: 1.0, elemId: 0, sd: 4.6 },
    { label: "11A", R: -25.261, d: 1.69, nd: 1.58313, elemId: 6, sd: 6.4 },
    { label: "12A", R: -11.86, d: 0.2, nd: 1.0, elemId: 0, sd: 5.2 },
    { label: "13", R: -12.204, d: 0.85, nd: 1.84666, elemId: 7, sd: 7.5 },
    { label: "14", R: 21.022, d: 4.72, nd: 1.72916, elemId: 8, sd: 7.5 },
    { label: "15", R: -14.562, d: 3.34, nd: 1.0, elemId: 0, sd: 7.5 },
    { label: "16", R: 174.9, d: 3.16, nd: 1.83481, elemId: 9, sd: 10.5 },
    { label: "17", R: -35.411, d: 4.27, nd: 1.0, elemId: 0, sd: 10.3 },
    { label: "18", R: -22.728, d: 1.32, nd: 1.85478, elemId: 10, sd: 11.5 },
    { label: "19", R: -42.023, d: 14.079538095, nd: 1.0, elemId: 0, sd: 11.7 },
  ],

  /* ── Aspherical coefficients: Example 3, Table 12 ── */
  asph: {
    "3A": {
      K: 0,
      A4: 2.0475055e-4,
      A6: -2.8858581e-6,
      A8: 2.6924719e-8,
      A10: -1.1080869e-10,
      A12: 0,
      A14: 0,
    },
    "4A": {
      K: 0,
      A4: 2.2955992e-4,
      A6: -2.8272217e-6,
      A8: 2.6938117e-8,
      A10: -1.4157104e-10,
      A12: 0,
      A14: 0,
    },
    "11A": {
      K: 0,
      A4: 1.9239198e-5,
      A6: 3.6727167e-7,
      A8: 1.5572212e-7,
      A10: -1.0598583e-9,
      A12: 0,
      A14: 0,
    },
    "12A": {
      K: 0,
      A4: 1.4097228e-4,
      A6: 5.1002854e-7,
      A8: 1.3065139e-7,
      A10: -2.3152786e-10,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Focus mechanism ──
   * focusT = 0: infinity (published)
   * focusT = 0.160303256: patent 1 m-from-surface-1 row, equivalent to 1.06049 m from physical sensor
   * focusT = 1: 0.17 m sensor-plane MFD, constrained one-DOF reconstruction
   */
  focusPositions: [0, 0.160303256, 1],
  var: {
    "15": [3.34, 3.1, 1.437461429],
    "17": [4.27, 4.51, 6.172538571],
  },
  varLabels: [
    ["15", "DD15"],
    ["17", "DD17"],
  ],

  groups: [
    { text: "G1a", fromSurface: "1", toSurface: "6" },
    { text: "G1b", fromSurface: "8", toSurface: "15" },
    { text: "G2", fromSurface: "16", toSurface: "17" },
    { text: "G3", fromSurface: "18", toSurface: "19" },
  ],
  doublets: [
    { text: "D1", fromSurface: "8", toSurface: "10" },
    { text: "D2", fromSurface: "13", toSurface: "15" },
  ],

  closeFocusM: 0.17,
  focusDescription:
    "Inner focus: only G2/L21 moves objectward. Infinity and the patent 1 m state are published; the 0.17 m endpoint is a constrained one-DOF reconstruction using FUJIFILM's sensor-plane MFD and conserved DD15 + DD17 = 7.61 mm.",

  nominalFno: 2.88,
  fstopSeries: [2.88, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 9,
  maxFstop: 22,

  /* ── Layout tuning ── */
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
