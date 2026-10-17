import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║  PARALLEL PLATE PP: patent surfaces 20–21 (2.85 mm, nd 1.51633,    ║
 * ║  νd 64.14, θgF 0.53531) are modeled in `rearPlates` (traced, not   ║
 * ║  drawn) with 1.10 mm to Sim. Surface 19 keeps the patent's 11.10   ║
 * ║  mm gap to the plate; air-equivalent BF = 14.079538095 mm.         ║
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
  schema: 2,
  key: "fujifilm-fujinon-xf-16mm-f28-r-wr",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 16mm f/2.8 R WR",
  subtitle: "US 2020/0073096 A1 Example 3 — production correlation inferred",

  catalog: {
    lensMounts: ["fujifilm-x"],
    imageFormat: "aps-c",
    specs: [
      "10 ELEMENTS / 8 GROUPS",
      "16mm f/2.8 (production)",
      "f = 16.48mm, FNo = 2.88 (Example 3)",
      "2ω = 89.2° (Example 3)",
      "2 ASPHERICAL ELEMENTS",
    ],
    elementCount: 10,
    groupCount: 8,
    focalLengthMm: { marketing: 16, design: 16.479792674 },
    fNumber: { marketing: 2.8, design: 2.88 },
  },

  source: {
    patentNumber: "US 2020/0073096 A1",
    patentYear: 2020,
    authors: ["Ryosuke Nagami"],
    assignees: ["Fujifilm Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.53996,
      vd: 59.73,
      focalLengthMm: -65.69351,
      glass: "540597 — barium crown class",
      apdNote:
        "Patent theta_gF = 0.54432; dPgF = +0.00098586 from the project normal line. No production supplier identification.",
      role: "Object-side negative meniscus in G1a.",
      diagramLabel: "L11",
      dPgF: 0.00098586,
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.51633,
      vd: 64.06,
      focalLengthMm: -29.581399,
      glass: "516641 — crown coordinate class",
      apdNote:
        "Patent theta_gF = 0.53345; dPgF = -0.00260108 from the project normal line. No production supplier identification.",
      role: "Second negative meniscus in G1a; both surfaces are aspherical.",
      diagramLabel: "L12",
      dPgF: -0.00260108,
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.68,
      focalLengthMm: 36.271954,
      glass: "729547 — lanthanum crown class",
      apdNote:
        "Patent theta_gF = 0.54451; dPgF = -0.00731824 from the project normal line. No production supplier identification.",
      role: "Positive G1a element immediately ahead of the aperture stop.",
      diagramLabel: "L13",
      dPgF: -0.00731824,
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 2.00069,
      vd: 25.46,
      focalLengthMm: 9.931129,
      glass: "001255 — high-index flint class",
      apd: "patent",
      apdNote:
        "Patent theta_gF = 0.61364; dPgF = +0.01266372 from the project normal line. No production supplier identification.",
      role: "Positive member of the first G1b cemented pair.",
      diagramLabel: "L14",
      cemented: "D1",
      dPgF: 0.01266372,
    },
    {
      id: 5,
      name: "L15",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.72047,
      vd: 34.71,
      focalLengthMm: -14.260195,
      glass: "720347 — short-flint coordinate class",
      apdNote:
        "Patent theta_gF = 0.58350; dPgF = -0.00191778 from the project normal line. No production supplier identification.",
      role: "Negative member of the first G1b cemented pair.",
      diagramLabel: "L15",
      cemented: "D1",
      dPgF: -0.00191778,
    },
    {
      id: 6,
      name: "L16",
      label: "Element 6",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.38,
      focalLengthMm: 36.636468,
      glass: "583594 — barium crown coordinate class",
      apdNote:
        "Patent theta_gF = 0.54237; dPgF = -0.00155284 from the project normal line. No production supplier identification.",
      role: "Positive aspherical meniscus between the two G1b cemented pairs.",
      diagramLabel: "L16",
      dPgF: -0.00155284,
    },
    {
      id: 7,
      name: "L17",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -9.014153,
      glass: "847238 — dense flint class",
      apd: "patent",
      apdNote:
        "Patent theta_gF = 0.62054; dPgF = +0.01673796 from the project normal line. No production supplier identification.",
      role: "Negative member of the second G1b cemented pair.",
      diagramLabel: "L17",
      cemented: "D2",
      dPgF: 0.01673796,
    },
    {
      id: 8,
      name: "L18",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.68,
      focalLengthMm: 12.497267,
      glass: "729547 — lanthanum crown class",
      apdNote:
        "Patent theta_gF = 0.54451; dPgF = -0.00731824 from the project normal line. No production supplier identification.",
      role: "Positive member of the second G1b cemented pair.",
      diagramLabel: "L18",
      cemented: "D2",
      dPgF: -0.00731824,
    },
    {
      id: 9,
      name: "L21",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.74,
      focalLengthMm: 35.518739,
      glass: "835427 — high-index lanthanum flint class",
      apdNote:
        "Patent theta_gF = 0.56490; dPgF = -0.00701132 from the project normal line. No production supplier identification.",
      role: "Single positive G2 focus element; translates objectward toward close focus.",
      diagramLabel: "L21",
      dPgF: -0.00701132,
    },
    {
      id: 10,
      name: "L31",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.85478,
      vd: 24.8,
      focalLengthMm: -59.794591,
      glass: "855248 — dense flint class",
      apd: "patent",
      apdNote:
        "Patent theta_gF = 0.61232; dPgF = +0.01023360 from the project normal line. No production supplier identification.",
      role: "Single negative fixed rear group G3.",
      diagramLabel: "L31",
      dPgF: 0.0102336,
    },
  ],

  /* ── Surface prescription: US 2020/0073096 A1, Example 3, Table 9 ── */
  /* (moved from asph) ── Aspherical coefficients: Example 3, Table 12 ── */
  surfaces: [
    { label: "1", R: 33.356, d: 1.0, sd: 13.5, medium: 1 },
    { label: "2", R: 17.01, d: 5.0, sd: 13.0 },
    {
      label: "3A",
      R: 29.98,
      d: 1.25,
      sd: 9.5,
      medium: 2,
      asphere: { K: 0, A4: 2.0475055e-4, A6: -2.8858581e-6, A8: 2.6924719e-8, A10: -1.1080869e-10 },
    },
    {
      label: "4A",
      R: 9.975,
      d: 5.7,
      sd: 8.7,
      asphere: { K: 0, A4: 2.2955992e-4, A6: -2.8272217e-6, A8: 2.6938117e-8, A10: -1.4157104e-10 },
    },
    { label: "5", R: 17.372, d: 1.66, sd: 6.3, medium: 3 },
    { label: "6", R: 48.583, d: 4.86, sd: 6.1 },
    { label: "STO", R: "flat", d: 2.39 },
    { label: "8", R: 27.246, d: 2.56, sd: 5.8, medium: 4 },
    { label: "9", R: -14.909, d: 0.64, sd: 5.8, medium: 5 },
    { label: "10", R: 33.642, d: 0.83, sd: 4.6 },
    {
      label: "11A",
      R: -25.261,
      d: 1.69,
      sd: 6.4,
      medium: 6,
      asphere: { K: 0, A4: 1.9239198e-5, A6: 3.6727167e-7, A8: 1.5572212e-7, A10: -1.0598583e-9 },
    },
    {
      label: "12A",
      R: -11.86,
      d: 0.2,
      sd: 5.2,
      asphere: { K: 0, A4: 1.4097228e-4, A6: 5.1002854e-7, A8: 1.3065139e-7, A10: -2.3152786e-10 },
    },
    { label: "13", R: -12.204, d: 0.85, sd: 7.5, medium: 7 },
    { label: "14", R: 21.022, d: 4.72, sd: 7.5, medium: 8 },
    { label: "15", R: -14.562, sd: 7.5 },
    { label: "16", R: 174.9, d: 3.16, sd: 10.5, medium: 9 },
    { label: "17", R: -35.411, sd: 10.3 },
    { label: "18", R: -22.728, d: 1.32, sd: 11.5, medium: 10 },
    { label: "19", R: -42.023, d: 11.1, sd: 11.7 },
  ],

  focus: {
    closeFocusM: 0.17,
    /* ── Focus mechanism ──
     * focusT = 0: infinity (published)
     * focusT = 0.160303256: patent 1 m-from-surface-1 row, equivalent to 1.06049 m from physical sensor
     * focusT = 1: 0.17 m sensor-plane MFD, constrained one-DOF reconstruction
     */
    keyframes: [0, 0.160303256, 1],
    description:
      "Inner focus: only G2/L21 moves objectward. Infinity and the patent 1 m state are published; the 0.17 m endpoint is a constrained one-DOF reconstruction using FUJIFILM's sensor-plane MFD and conserved DD15 + DD17 = 7.61 mm.",
    // (moved from publishedStations) The intermediate focus row is source-tabulated; the close endpoint is reconstructed.
    published: [1],
  },

  gaps: {
    "15": { label: "DD15", values: [[3.34, 3.1, 1.437461429]] },
    "17": { label: "DD17", values: [[4.27, 4.51, 6.172538571]] },
  },

  aperture: { nominalFNumber: 2.88, fStops: [2.88, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

  // The patent's stated design field is kept distinct from FUJIFILM's marketed 83.2° angle of view.
  projection: { kind: "rectilinear", fullFieldDeg: 89.2, maxTraceFieldDeg: 44.6 },

  /* ── Parallel plate PP (patent surfaces 20–21): traced, not drawn ── */
  rearPlates: [
    {
      label: "PP",
      thicknessMm: 2.85,
      nd: 1.51633,
      vd: 64.14,
      glass: "S-BSL7",
      dPgF: -0.00060652,
      gapAfterMm: 1.1,
      source: "US 2020/0073096 A1, Example 3 Table 9 surfaces 20–21 (patent θgF 0.53531)",
    },
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

  /* ── Layout tuning ── */
  layout: { yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
