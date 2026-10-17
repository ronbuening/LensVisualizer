import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║    The WO 2018/052113 A1 Fig. 2 prescription table (Example 1), S11, lists  ║
 * ║    De=14.60 mm (radius 7.30 mm), agreeing with the 7.308 mm radius derived  ║
 * ║    from the design f-number f/3.5. Treating De as the physical iris in a    ║
 * ║    paraxial pupil calculation gives f/3.381 instead.                        ║
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
  schema: 2,
  key: "hasselblad-xcd-30mm-f35",
  maker: "Hasselblad",
  name: "HASSELBLAD XCD 30mm f/3.5",
  subtitle: "WO 2018/052113 A1 Example 1 — production correlation inferred",

  catalog: {
    lensMounts: ["hasselblad-xcd"],
    imageFormat: "44x33",
    specs: [
      "11 ELEMENTS / 10 GROUPS",
      "MODELED EFL 30.981 mm",
      "f/3.5",
      "PATENT IMAGE CIRCLE Ø56 mm",
      "2 ASPHERICAL SURFACES",
    ],
    elementCount: 11,
    groupCount: 10,
    focalLengthMm: { marketing: 30, design: 30.98111630616161 },
    fNumber: { marketing: 3.5, design: 3.5 },
  },

  source: {
    patentNumber: "WO 2018/052113 A1",
    patentYear: 2018,
    authors: ["Akira Sawamoto"],
    assignees: ["Nittoh Inc."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.63854,
      vd: 55.38,
      focalLengthMm: 216.233402,
      glass: "S-BSM18 (OHARA)",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.24,
      focalLengthMm: -45.000318,
      glass: "S-FSL5 (OHARA)",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.24,
      focalLengthMm: -36.977714,
      glass: "S-FSL5 (OHARA)",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.902,
      vd: 25.26,
      focalLengthMm: 54.785554,
      glass: "J-LASFH24 (HIKARI)",
      diagramLabel: "L4",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      focalLengthMm: 29.613641,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote:
        "The compatible S-FPL51 catalog curve has ΔPgF ≈ +0.031; inferred APD class only, not a patent designation or production supplier identification.",
      diagramLabel: "L5",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.78472,
      vd: 25.68,
      focalLengthMm: -21.591757,
      glass: "S-TIH11 (OHARA)",
      diagramLabel: "L6",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.497,
      vd: 81.54,
      focalLengthMm: 21.419493,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote:
        "The compatible S-FPL51 catalog curve has ΔPgF ≈ +0.031; inferred APD class only, not a patent designation or production supplier identification.",
      diagramLabel: "L7",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.80809,
      vd: 22.76,
      focalLengthMm: 10.970521,
      glass: "S-NPH1 (OHARA)",
      apd: "inferred",
      apdNote:
        "The compatible S-NPH1 catalog curve has ΔPgF ≈ +0.025; inferred APD class only, not a patent designation or production supplier identification.",
      diagramLabel: "L8",
      cemented: "D1",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.902,
      vd: 25.26,
      focalLengthMm: -8.512632,
      glass: "J-LASFH24 (HIKARI)",
      diagramLabel: "L9",
      cemented: "D1",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.89286,
      vd: 20.36,
      focalLengthMm: 53.277913,
      glass: "S-NPH4 (OHARA)",
      apd: "inferred",
      apdNote:
        "The compatible S-NPH4 catalog curve has ΔPgF ≈ +0.030; inferred APD class only, not a patent designation or production supplier identification.",
      diagramLabel: "L10",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.53172,
      vd: 48.84,
      focalLengthMm: -74.408162,
      glass: "S-TIL6 (OHARA)",
      diagramLabel: "L11",
    },
  ],

  surfaces: [
    { label: "1", R: 68.51, d: 4.14, sd: 23, medium: 1 },
    { label: "2", R: 132.78, d: 0.15, sd: 21.7 },
    { label: "3", R: 46.98, d: 1, sd: 18.85, medium: 2 },
    { label: "4", R: 14.85, d: 9.11, sd: 13.15 },
    { label: "5", R: -447.16, d: 1.2, sd: 13.15, medium: 3 },
    { label: "6", R: 18.8, d: 4.11, sd: 12.1 },
    { label: "7", R: 22.28, d: 3.72, sd: 12, medium: 4 },
    { label: "8", R: 37.36, d: 12.83, sd: 11.4 },
    { label: "9", R: 20.32, d: 4.18, sd: 7.7, medium: 5 },
    { label: "10", R: -49.74, d: 0.393, sd: 7.8 },
    // WO 2018/052113 A1 Fig. 2 prescription table (Example 1), S11 prints effective diameter De = 14.60 mm.
    // Radius derived from the design f-number.
    { label: "STO", R: "flat", d: 3.91 },
    { label: "12", R: -27.61, d: 0.49, sd: 7.1, medium: 6 },
    { label: "13", R: 44.2, d: 0.15, sd: 7.4 },
    {
      label: "14A",
      R: 19,
      d: 5.13,
      sd: 7.9,
      medium: 7,
      asphere: { K: 0, A4: -1.0953e-5, A6: 1.5378e-7, A8: -1.4224e-9, A10: 3.8014e-11, A12: -2.4409e-13 },
    },
    {
      label: "15A",
      R: -22.04,
      d: 0.15001,
      sd: 8.2,
      asphere: { K: 0, A4: 3.3567e-5, A6: 1.2702e-7, A8: -1.5210e-9, A10: 4.3185e-11, A12: -3.3170e-13 },
    },
    { label: "16", R: 37.24, d: 7.34, sd: 8, medium: 8 },
    { label: "17", R: -10.61, d: 1.2, sd: 8.1, medium: 9 },
    { label: "18", R: 29.28, d: 1.63, sd: 8.7 },
    { label: "19", R: 37.66, d: 2.95, sd: 9.6, medium: 10 },
    { label: "20", R: 174.1, d: 10.78, sd: 9.8 },
    { label: "21", R: -11.35, d: 1.2, sd: 10.2, medium: 11 },
    { label: "22", R: -16.5, d: 18.64, sd: 12.8 },
  ],

  focus: {
    closeFocusM: 0.4,
    description:
      "NO_INTERNAL_RECONSTRUCTION: patent Example 1 states G1+stop and G2 move independently objectward, but gives no numerical focus spacings; this model preserves the infinity state only. Hasselblad 0.40 m MFD is metadata only.",
  },

  aperture: { nominalFNumber: 3.5, fStops: [3.5, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32 },

  // Patent Example 1 reports max half-field 42.73° and image circle Ø56 mm.
  // The exact chief ray at 42.73° lands at image height ≈27.995 mm in the final Stage-2 trace.
  projection: { kind: "rectilinear", fullFieldDeg: 85.46, maxTraceFieldDeg: 42.73 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "10" },
    { text: "G2", fromSurface: "12", toSurface: "22" },
  ],
  doublets: [{ text: "D1", fromSurface: "16", toSurface: "18" }],

  layout: { yScFill: 0.48 },
} satisfies LensDataV2Input;

export default LENS_DATA;
