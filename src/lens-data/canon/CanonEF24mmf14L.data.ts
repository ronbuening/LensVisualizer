import type { LensDataInput } from "../../types/optics.js";

/**
 * CANON EF 24mm f/1.4 L USM
 *
 * Source: JP 1999-030743 A, Numerical Example 6, Table 7 / Figure 7.
 * The prescription is retained at patent scale; no 24.6-to-24.0 mm rescaling is applied.
 *
 * Patent-table emendations used here:
 *   - L7: νd = 28.4606 from the published d/C/F indices (the table prints 28.64).
 *   - L10: nd = 1.603112 (the table prints the spectrally impossible 1.613112).
 *     The emended value reproduces νd = 60.6997, the 603/607 glass class, and the
 *     patent's own f2b/f = 1.47 correspondence value.
 *
 * Corrected d-line paraxial trace: EFL = 24.815116 mm; Gaussian BFL from surface 22
 * = 38.214989 mm. The final d = 36.467 mm remains the patent's listed image-plane
 * spacing rather than being silently replaced with the computed Gaussian BFL.
 *
 * Semi-diameters are inferred because the patent publishes none. They were constrained
 * by the f/1.45 entrance-pupil trace, the 41.35° half-field, the production 77 mm filter
 * diameter, element edge thickness, front/rear SD ratio <= 1.25, sd/|R| < 0.90, and
 * signed cross-gap sag intrusion <= 90% of each air gap. Surface 18A is checked with
 * its full aspheric sag rather than its base sphere alone.
 *
 * The patent supplies only an infinity prescription. Production MFD is retained as
 * metadata, but no unsupported finite-focus variable gaps are synthesized.
 */
const LENS_DATA = {
  key: "canon-ef-24mm-f1.4-l-usm",
  maker: "Canon",
  name: "CANON EF 24mm f/1.4 L USM",
  subtitle: "JP 1999-030743 A Numerical Example 6 — Canon / Makoto Misaka",
  specs: [
    "11 ELEMENTS / 9 GROUPS",
    "PATENT f = 24.6 mm, F/1.45, 2ω = 82.7°",
    "1 UD ELEMENT / 1 GROUND ASPHERICAL ELEMENT",
    "FLOATING REAR FOCUS (PRODUCTION)",
  ],

  focalLengthMarketing: 24,
  focalLengthDesign: 24.8151156047,
  apertureMarketing: 1.4,
  apertureDesign: 1.45,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 1999-030743 A",
  patentAuthors: ["Makoto Misaka"],
  patentAssignees: ["Canon Inc."],
  patentYear: 1999,
  elementCount: 11,
  groupCount: 9,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus, convex to object",
      nd: 1.696797,
      vd: 55.53,
      fl: -86.617598,
      glass: "S-LAL14 (OHARA; 697/555 class equivalent)",
      nC: 1.692973,
      nF: 1.705521,
      ng: 1.712337,
      role: "First negative meniscus of the fixed retrofocus front group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus, convex to object",
      nd: 1.696797,
      vd: 55.53,
      fl: -114.839016,
      glass: "S-LAL14 (OHARA; 697/555 class equivalent)",
      nC: 1.692973,
      nF: 1.705521,
      ng: 1.712337,
      role: "Second negative meniscus of the negative-only front component.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.712995,
      vd: 53.84,
      fl: 97.418903,
      glass: "N-LAK8 (SCHOTT; 713/538 class equivalent)",
      nC: 1.708975,
      nF: 1.722217,
      ng: 1.729441,
      role: "Positive component completing the negative front group and balancing distortion and lateral color.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus, convex to object",
      nd: 1.84666,
      vd: 23.78,
      fl: 98.343147,
      glass: "S-TIH53 (OHARA; 847/238 dense-flint class equivalent)",
      nC: 1.836491,
      nF: 1.872096,
      ng: 1.894187,
      role: "High-index positive member of the front cemented pair in B2a.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus, convex to object",
      nd: 1.496999,
      vd: 81.61,
      fl: -47.578153,
      glass: "S-FPL51 (OHARA; 497/816 fluorophosphate ED class)",
      apd: "patent",
      apdNote: "Patent line indices give ΔPgF = +0.03107065.",
      dPgF: 0.0310706473,
      nC: 1.495138,
      nF: 1.501228,
      ng: 1.504502,
      role: "UD negative member governed by conditions (4)-(6), placed ahead of the stop for lateral-color control.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.804,
      vd: 46.58,
      fl: 25.926901,
      glass: "S-LAH65V (OHARA; 804/466 dense lanthanum-flint class equivalent)",
      nC: 1.798817,
      nF: 1.816079,
      ng: 1.825695,
      role: "Strong positive element supplying most of B2a's converging power.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.460607,
      fl: -48.914494,
      glass: "S-TIH10 (OHARA; corrected 728/285 dense-flint class)",
      nC: 1.720865,
      nF: 1.746453,
      ng: 1.762002,
      role: "Negative element completing B2a immediately ahead of the stop gap.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.805181,
      vd: 25.42,
      fl: -20.160927,
      glass: "S-TIH6 (OHARA; 805/254 SF6-class equivalent)",
      nC: 1.796106,
      nF: 1.827775,
      ng: 1.847285,
      role: "Strong negative member of the post-stop cemented pair.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.834807,
      vd: 42.72,
      fl: 42.45076,
      glass: "S-LAH55V (OHARA; 835/427 dense lanthanum-flint class equivalent)",
      nC: 1.828977,
      nF: 1.848517,
      ng: 1.85953,
      role: "Positive aspherical member of the post-stop cemented pair.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus, convex to image",
      nd: 1.603112,
      vd: 60.699678,
      fl: 43.604265,
      glass: "S-BSM14 (OHARA; J-SK14 603/607 class; patent nd emended)",
      dPgF: -0.0008410863,
      nC: 1.600082,
      nF: 1.610018,
      ng: 1.615392,
      role: "Low-dispersion positive rear meniscus; satisfies optional conditions (10) and (11), but not (12).",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus, convex to image",
      nd: 1.772499,
      vd: 49.6,
      fl: 56.797678,
      glass: "S-LAH66N (OHARA; 773/496 lanthanum-flint class equivalent)",
      nC: 1.767798,
      nF: 1.783373,
      ng: 1.791962,
      role: "Final positive meniscus providing rear-group power and SLR back clearance.",
    },
  ],

  surfaces: [
    { label: "1", R: 62.718, d: 2.8, nd: 1.696797, elemId: 1, sd: 26.2 },
    { label: "2", R: 30.193, d: 5.05, nd: 1.0, elemId: 0, sd: 21.0 },
    { label: "3", R: 57.228, d: 2.3, nd: 1.696797, elemId: 2, sd: 21.0 },
    { label: "4", R: 32.815, d: 6.591, nd: 1.0, elemId: 0, sd: 20.0 },
    { label: "5", R: 212.09, d: 4.834, nd: 1.712995, elemId: 3, sd: 20.5 },
    { label: "6", R: -102.305, d: 3.588, nd: 1.0, elemId: 0, sd: 20.5 },
    { label: "7", R: 79.693, d: 2.923, nd: 1.84666, elemId: 4, sd: 16.2 },
    { label: "8", R: 1827.319, d: 1.7, nd: 1.496999, elemId: 5, sd: 15.8 },
    { label: "9", R: 23.337, d: 7.0, nd: 1.0, elemId: 0, sd: 13.2 },
    { label: "C", R: 1e15, d: 4.759, nd: 1.0, elemId: 0, sd: 11.8 },
    { label: "11", R: 30.725, d: 7.2, nd: 1.804, elemId: 6, sd: 14.2 },
    { label: "12", R: -58.056, d: 0.15, nd: 1.0, elemId: 0, sd: 14.2 },
    { label: "13", R: -448.592, d: 1.605, nd: 1.72825, elemId: 7, sd: 13.2 },
    { label: "14", R: 38.753, d: 5.098, nd: 1.0, elemId: 0, sd: 12.5 },
    { label: "STO", R: 1e15, d: 7.843, nd: 1.0, elemId: 0, sd: 11.5174 },
    { label: "16", R: -16.295, d: 1.5, nd: 1.805181, elemId: 8, sd: 14.0 },
    { label: "17", R: 4455.645, d: 3.649, nd: 1.834807, elemId: 9, sd: 14.7 },
    { label: "18A", R: -35.709, d: 0.15, nd: 1.0, elemId: 0, sd: 15.7 },
    { label: "19", R: -199.304, d: 6.939, nd: 1.603112, elemId: 10, sd: 16.7 },
    { label: "20", R: -23.537, d: 0.15, nd: 1.0, elemId: 0, sd: 16.7 },
    { label: "21", R: -85.475, d: 5.342, nd: 1.772499, elemId: 11, sd: 19.1 },
    { label: "22", R: -29.783, d: 36.467, nd: 1.0, elemId: 0, sd: 19.1 },
  ],

  asph: {
    "18A": {
      K: 0,
      A4: 2.04769e-5,
      A6: 2.22129e-8,
      A8: -2.10838e-11,
      A10: -1.46493e-13,
      A12: 2.10282e-16,
      A14: 0,
    },
  },

  var: {},
  varLabels: [],

  groups: [
    { text: "B1", fromSurface: "1", toSurface: "6" },
    { text: "B2a", fromSurface: "7", toSurface: "14" },
    { text: "B2b", fromSurface: "16", toSurface: "22" },
  ],
  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "16", toSurface: "18A" },
  ],

  closeFocusM: 0.25,
  focusDescription:
    "Production floating rear focus. Patent ¶0039 prefers fixed B1 with B2a and B2b moving objectward while approaching one another; finite-focus spacings are not published and are not modeled.",

  nominalFno: 1.4,
  apertureBlades: 7,
  maxFstop: 22,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22],

  yScFill: 0.55,
} satisfies LensDataInput;

export default LENS_DATA;
