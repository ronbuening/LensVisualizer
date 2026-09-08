import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — CANON EF 50mm f/1.2L USM                                  ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Optical source: JP2007333790A, Numerical Example 1, Canon Inc.          ║
 * ║  Production correlation: Canon EF 50mm f/1.2L USM.                      ║
 * ║  Patent prescription retained at source scale (s = 1).                   ║
 * ║  8 elements / 6 groups; one aspherical surface (patent surface 14).      ║
 * ║                                                                            ║
 * ║  FOCUS — CONSTRAINED_RECONSTRUCTION:                                     ║
 * ║  The patent states whole-lens/unit focusing but publishes no finite-      ║
 * ║  focus spacing row. All internal gaps are fixed. D15 is 38.88 mm at      ║
 * ║  infinity and is reconstructed as 45.947215 mm at Canon's 0.45 m MFD,    ║
 * ║  treating MFD as object-to-image-plane distance. The solved paraxial      ║
 * ║  magnification is 0.147276x versus Canon's rounded 0.15x specification.   ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS:                                                          ║
 * ║  The patent publishes none. STO sd = 14.591344 mm is inferred from the    ║
 * ║  modeled F/1.25, computed EFL, and entrance-pupil magnification. Glass     ║
 * ║  SDs are inferred from exact on-axis marginal rays, the Fig. 1 optical    ║
 * ║  envelope, and current edge/slope/cross-gap limits. At 60% field the      ║
 * ║  outermost ±0.75 pupil samples vignette first at S1 or S14A; no sampled   ║
 * ║  ray first clips at a cemented interface.                                 ║
 * ║                                                                            ║
 * ║  GLASS: the patent gives d-line nd/νd only and no vendor names or line    ║
 * ║  indices. Neutral six-digit source-coordinate classes are retained;       ║
 * ║  nC, nF, ng, and dPgF are therefore not invented.                         ║
 * ║                                                                            ║
 * ║  ASPHERE: patent surface 14 uses a spherical base, so project K = 0.      ║
 * ║  Patent B/C/D/E map to project A4/A6/A8/A10 without scaling.              ║
 * ║                                                                            ║
 * ║  The authored D15 = 38.88 mm image-plane spacing is preserved even       ║
 * ║  though the independently computed Gaussian BFD is 38.333791 mm.          ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 *
 * Product metadata sources:
 * - Canon Camera Museum: https://global.canon/en/c-museum/product/ef392.html
 * - Canon U.S.A.: https://www.usa.canon.com/shop/p/ef-50mm-f-1-2l-usm
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-ef-50mm-f1p2l-usm",
  maker: "Canon",
  name: "CANON EF 50mm f/1.2L USM",
  subtitle: "JP2007333790A Example 1 — production correlation; constrained unit-focus reconstruction",
  specs: [
    "8 ELEMENTS / 6 GROUPS",
    "DESIGN EFL ≈ 51.695 mm",
    "DESIGN F/1.25",
    "2ω = 45.4°",
    "1 ASPHERICAL SURFACE",
  ],

  focalLengthMarketing: 50,
  focalLengthDesign: 51.695042,
  apertureMarketing: 1.2,
  apertureDesign: 1.25,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2007-333790 A",
  patentAuthors: ["Makoto Mitsusaka"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2007,
  elementCount: 8,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "G11",
      label: "G11 / Element 1",
      type: "Positive Meniscus",
      nd: 1.772499,
      vd: 49.6,
      fl: 93.644,
      glass: "773496 — source-coordinate glass class (vendor not identified)",
      apd: false,
      role: "Front positive collector in the weak-positive GF group.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "G12",
      label: "G12 / Element 2",
      type: "Positive Meniscus",
      nd: 1.834807,
      vd: 42.7,
      fl: 91.211,
      glass: "835427 — source-coordinate glass class (vendor not identified)",
      apd: false,
      role: "Second positive element of the front GF group.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "G13",
      label: "G13 / Element 3",
      type: "Negative Meniscus",
      nd: 1.639799,
      vd: 34.5,
      fl: -48.976,
      glass: "S-TIM27 — catalog-equivalent curve for patent 640345 (production supplier unspecified)",
      apd: false,
      role: "Negative element completing the weak-positive front GF group.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "NL1",
      label: "NL1 / Element 4",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.5,
      fl: -28.394,
      glass: "728285 — source-coordinate glass class (vendor not identified)",
      apd: false,
      role: "Negative member of the first cemented pair in the rear GR group.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "PL1",
      label: "PL1 / Element 5",
      type: "Biconvex Positive",
      nd: 1.882997,
      vd: 40.8,
      fl: 29.088,
      glass: "883408 — source-coordinate glass class (vendor not identified)",
      apd: false,
      role: "Positive member of the first cemented pair in the rear GR group.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "NL2",
      label: "NL2 / Element 6",
      type: "Biconcave Negative",
      nd: 1.698947,
      vd: 30.1,
      fl: -36.915,
      glass: "699301 — source-coordinate glass class (vendor not identified)",
      apd: false,
      role: "Negative member of the second cemented pair in the rear GR group.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "PL2",
      label: "PL2 / Element 7",
      type: "Biconvex Positive",
      nd: 1.834807,
      vd: 42.7,
      fl: 45.248,
      glass: "835427 — source-coordinate glass class (vendor not identified)",
      apd: false,
      role: "Positive member of the second cemented pair in the rear GR group.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      diagramLabel: "PL3",
      label: "PL3 / Element 8",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.804,
      vd: 46.6,
      fl: 54.54,
      glass: "804466 — source-coordinate glass class (vendor not identified)",
      apd: false,
      role: "Rear positive aspherical element following the patent's negative air lens.",
    },
  ],

  /* ── Surface prescription: JP2007333790A Numerical Example 1 ── */
  surfaces: [
    { label: "1", R: 61.844, d: 4.99, nd: 1.772499, elemId: 1, sd: 22.0 },
    { label: "2", R: 411.251, d: 0.24, nd: 1.0, elemId: 0, sd: 21.7 },
    { label: "3", R: 28.537, d: 5.34, nd: 1.834807, elemId: 2, sd: 20.0 },
    { label: "4", R: 41.757, d: 1.14, nd: 1.0, elemId: 0, sd: 18.2 },
    { label: "5", R: 54.433, d: 2.16, nd: 1.639799, elemId: 3, sd: 17.95 },
    { label: "6", R: 19.579, d: 12.95, nd: 1.0, elemId: 0, sd: 15.8 },
    { label: "STO", R: 1e15, d: 7.41, nd: 1.0, elemId: 0, sd: 14.591344 },
    { label: "8", R: -23.181, d: 1.4, nd: 1.72825, elemId: 4, sd: 16.75 },
    { label: "9", R: 196.367, d: 7.64, nd: 1.882997, elemId: 5, sd: 16.75 },
    { label: "10", R: -29.011, d: 0.45, nd: 1.0, elemId: 0, sd: 16.75 },
    { label: "11", R: -27.438, d: 1.5, nd: 1.698947, elemId: 6, sd: 18.7 },
    { label: "12", R: 442.408, d: 6.48, nd: 1.834807, elemId: 7, sd: 18.9 },
    { label: "13", R: -41.024, d: 0.15, nd: 1.0, elemId: 0, sd: 18.9 },
    { label: "14A", R: 146.157, d: 5.87, nd: 1.804, elemId: 8, sd: 19.0 },
    { label: "15", R: -61.524, d: 38.88, nd: 1.0, elemId: 0, sd: 18.9 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "14A": {
      K: 0,
      A4: -1.44531e-6,
      A6: 2.5016e-10,
      A8: -1.46123e-13,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacing: constrained unit-focus reconstruction ── */
  var: {
    "15": [38.88, 45.947215],
  },
  varLabels: [["15", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "GF", fromSurface: "1", toSurface: "6" },
    { text: "GR", fromSurface: "8", toSurface: "15" },
  ],
  doublets: [
    { text: "NL1+PL1", fromSurface: "8", toSurface: "10" },
    { text: "NL2+PL2", fromSurface: "11", toSurface: "13" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.45,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: patent-published whole-lens/unit focus with all internal gaps fixed. " +
    "The close state changes only the last-surface-to-image gap from authored D15 = 38.88 mm to 45.947215 mm, " +
    "solved from Canon's 0.45 m MFD under an object-to-image-plane distance assumption; " +
    "this state is not patent-published.",

  /* ── Aperture configuration ── */
  nominalFno: 1.25,
  fstopSeries: [1.25, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 8,

  /* ── Layout tuning ── */
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
