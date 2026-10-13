import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — HASSELBLAD XCD 30mm f/3.5                           ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2018/052113 A1, Example 1 (Nittoh Inc.; Akira Sawamoto). ║
 * ║  Production correlation: Hasselblad XCD 3,5/30; correlation is inferred,  ║
 * ║  not stated by the patent. Hasselblad lists optical focal length 31.0 mm.   ║
 * ║  11 elements / 10 groups, 2 aspherical surfaces on L7.                    ║
 * ║  Scaling: none. Patent EFL 30.98 mm; independently traced EFL 30.981116 mm.║
 * ║                                                                              ║
 * ║  FOCUS STATUS — NO_INTERNAL_RECONSTRUCTION:                                ║
 * ║    The patent states that G1+stop and G2 move independently toward the     ║
 * ║    object during focusing, but publishes no numerical close-focus spacing. ║
 * ║    The model therefore preserves only the published infinity state.         ║
 * ║    Hasselblad's 0.40 m MFD is retained as product metadata only.            ║
 * ║                                                                              ║
 * ║  STOP MODEL:                                                                ║
 * ║    Patent S11 lists De=14.60 mm, but treating De as the physical iris       ║
 * ║    gives f/3.381. The physical stop is modeled at diameter 14.103576 mm     ║
 * ║    (sd=7.051788 mm), which reproduces the patent F-number f/3.5.            ║
 * ║                                                                              ║
 * ║  SEMI-DIAMETERS:                                                            ║
 * ║    Patent De/2 is retained where it passes current geometry policy. S4 and ║
 * ║    S5 are reduced to 13.15 mm to satisfy S4 rim slope and S4→S5 cross-gap ║
 * ║    clearance; S21 is reduced to 10.20 mm to satisfy rim slope. These are   ║
 * ║    rendering/model clear-aperture values, not silent changes to source De. ║
 * ║                                                                              ║
 * ║  GLASS / SPECTRAL DATA:                                                     ║
 * ║    The patent publishes only nd/νd. Named glasses below are representative ║
 * ║    current catalog-equivalent matches, not source-published vendor melts.   ║
 * ║    Catalog curves supply dispersion at runtime; no catalog line indices  ║
 * ║    or partial dispersions are authored as patent measurements.                                   ║
 * ║                                                                              ║
 * ║  SOURCE PRECISION: d15=0.15001 mm is preserved literally.                  ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "hasselblad-xcd-30mm-f35",
  maker: "Hasselblad",
  name: "HASSELBLAD XCD 30mm f/3.5",
  subtitle: "WO 2018/052113 A1 Example 1 — production correlation inferred",
  specs: [
    "11 ELEMENTS / 10 GROUPS",
    "MODELED EFL 30.981 mm",
    "f/3.5",
    "PATENT IMAGE CIRCLE Ø56 mm",
    "2 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: 30,
  focalLengthDesign: 30.98111630616161,
  apertureMarketing: 3.5,
  apertureDesign: 3.5,
  lensMounts: ["hasselblad-xcd"],
  imageFormat: "44x33",
  patentNumber: "WO 2018/052113 A1",
  patentAuthors: ["Akira Sawamoto"],
  patentAssignees: ["Nittoh Inc."],
  patentYear: 2018,
  elementCount: 11,
  groupCount: 10,

  // Patent Example 1 reports max half-field 42.73° and image circle Ø56 mm.
  // The exact chief ray at 42.73° lands at image height ≈27.995 mm in the final Stage-2 trace.
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 85.46,
    maxTraceFieldDeg: 42.73,
  },

  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.63854,
      vd: 55.38,
      fl: 216.233402,
      glass: "S-BSM18 (OHARA)",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.24,
      fl: -45.000318,
      glass: "S-FSL5 (OHARA)",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.24,
      fl: -36.977714,
      glass: "S-FSL5 (OHARA)",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.902,
      vd: 25.26,
      fl: 54.785554,
      glass: "J-LASFH24 (HIKARI)",
    },
    {
      id: 5,
      apd: "inferred",
      apdNote: "The compatible S-FPL51 catalog curve has ΔPgF ≈ +0.031; inferred APD class only, not a patent designation or production supplier identification.",
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      fl: 29.613641,
      glass: "S-FPL51 (OHARA)",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.78472,
      vd: 25.68,
      fl: -21.591757,
      glass: "S-TIH11 (OHARA)",
    },
    {
      id: 7,
      apd: "inferred",
      apdNote: "The compatible S-FPL51 catalog curve has ΔPgF ≈ +0.031; inferred APD class only, not a patent designation or production supplier identification.",
      name: "L7",
      diagramLabel: "L7",
      label: "Element 7",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.497,
      vd: 81.54,
      fl: 21.419493,
      glass: "S-FPL51 (OHARA)",
    },
    {
      id: 8,
      apd: "inferred",
      apdNote: "The compatible S-NPH1 catalog curve has ΔPgF ≈ +0.025; inferred APD class only, not a patent designation or production supplier identification.",
      name: "L8",
      diagramLabel: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.80809,
      vd: 22.76,
      fl: 10.970521,
      glass: "S-NPH1 (OHARA)",
      cemented: "D1",
    },
    {
      id: 9,
      name: "L9",
      diagramLabel: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.902,
      vd: 25.26,
      fl: -8.512632,
      glass: "J-LASFH24 (HIKARI)",
      cemented: "D1",
    },
    {
      id: 10,
      apd: "inferred",
      apdNote: "The compatible S-NPH4 catalog curve has ΔPgF ≈ +0.030; inferred APD class only, not a patent designation or production supplier identification.",
      name: "L10",
      diagramLabel: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.89286,
      vd: 20.36,
      fl: 53.277913,
      glass: "S-NPH4 (OHARA)",
    },
    {
      id: 11,
      name: "L11",
      diagramLabel: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.53172,
      vd: 48.84,
      fl: -74.408162,
      glass: "S-TIL6 (OHARA)",
    },
  ],

  surfaces: [
    { label: "1", R: 68.51, d: 4.14, nd: 1.63854, elemId: 1, sd: 23 },
    { label: "2", R: 132.78, d: 0.15, nd: 1, elemId: 0, sd: 21.7 },
    { label: "3", R: 46.98, d: 1, nd: 1.48749, elemId: 2, sd: 18.85 },
    { label: "4", R: 14.85, d: 9.11, nd: 1, elemId: 0, sd: 13.15 },
    { label: "5", R: -447.16, d: 1.2, nd: 1.48749, elemId: 3, sd: 13.15 },
    { label: "6", R: 18.8, d: 4.11, nd: 1, elemId: 0, sd: 12.1 },
    { label: "7", R: 22.28, d: 3.72, nd: 1.902, elemId: 4, sd: 12 },
    { label: "8", R: 37.36, d: 12.83, nd: 1, elemId: 0, sd: 11.4 },
    { label: "9", R: 20.32, d: 4.18, nd: 1.497, elemId: 5, sd: 7.7 },
    { label: "10", R: -49.74, d: 0.393, nd: 1, elemId: 0, sd: 7.8 },
    { label: "STO", R: 1e15, d: 3.91, nd: 1, elemId: 0, sd: 7.051788089027869 },
    { label: "12", R: -27.61, d: 0.49, nd: 1.78472, elemId: 6, sd: 7.1 },
    { label: "13", R: 44.2, d: 0.15, nd: 1, elemId: 0, sd: 7.4 },
    { label: "14A", R: 19, d: 5.13, nd: 1.497, elemId: 7, sd: 7.9 },
    { label: "15A", R: -22.04, d: 0.15001, nd: 1, elemId: 0, sd: 8.2 },
    { label: "16", R: 37.24, d: 7.34, nd: 1.80809, elemId: 8, sd: 8 },
    { label: "17", R: -10.61, d: 1.2, nd: 1.902, elemId: 9, sd: 8.1 },
    { label: "18", R: 29.28, d: 1.63, nd: 1, elemId: 0, sd: 8.7 },
    { label: "19", R: 37.66, d: 2.95, nd: 1.89286, elemId: 10, sd: 9.6 },
    { label: "20", R: 174.1, d: 10.78, nd: 1, elemId: 0, sd: 9.8 },
    { label: "21", R: -11.35, d: 1.2, nd: 1.53172, elemId: 11, sd: 10.2 },
    { label: "22", R: -16.5, d: 18.64, nd: 1, elemId: 0, sd: 12.8 },
  ],

  asph: {
    "14A": {
      K: 0,
      A4: -1.0953e-5,
      A6: 1.5378e-7,
      A8: -1.4224e-9,
      A10: 3.8014e-11,
      A12: -2.4409e-13,
      A14: 0,
    },
    "15A": {
      K: 0,
      A4: 3.3567e-5,
      A6: 1.2702e-7,
      A8: -1.5210e-9,
      A10: 4.3185e-11,
      A12: -3.3170e-13,
      A14: 0,
    },
  },

  var: {},
  varLabels: [],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "10" },
    { text: "G2", fromSurface: "12", toSurface: "22" },
  ],

  doublets: [{ text: "D1", fromSurface: "16", toSurface: "18" }],

  closeFocusM: 0.4,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: patent Example 1 states G1+stop and G2 move independently objectward, but gives no numerical focus spacings; this model preserves the infinity state only. Hasselblad 0.40 m MFD is metadata only.",

  nominalFno: 3.5,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,

  yScFill: 0.48,
} satisfies LensDataInput;

export default LENS_DATA;
