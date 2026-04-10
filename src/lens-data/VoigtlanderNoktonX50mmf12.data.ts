import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — VOIGTLÄNDER NOKTON 50mm f/1.2 X-Mount                ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2025-58577 A, Example 1 (Cosina / Shibata).      ║
 * ║  All-spherical Sonnar-type design for Fujifilm X (APS-C).         ║
 * ║  9 elements / 8 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: Unit focusing (entire lens extends).                       ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from paraxial marginal + chief ray trace at design    ║
 * ║    f/1.23, half-field 16.28°, with ~8% mechanical clearance.      ║
 * ║    Front SD constrained by 58 mm filter thread OD.                ║
 * ║    Patent-stated Hh = 19.75 mm (i=1), Hs = 10.54 mm (i=10).     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "voigtlander-nokton-x-50f12",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER NOKTON 50mm f/1.2 X-Mount",
  subtitle: "JP 2025-58577 A EXAMPLE 1 — COSINA / SHIBATA",
  specs: ["9 ELEMENTS / 8 GROUPS", "f ≈ 48.5 mm", "F/1.23", "2ω ≈ 32.6°", "ALL SPHERICAL"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 50,
  focalLengthDesign: 48.5,
  apertureMarketing: 1.2,
  apertureDesign: 1.23,
  patentYear: 2025,
  elementCount: 9,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.67,
      fl: 117.9,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "Front positive meniscus; begins gradual beam convergence",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.67,
      fl: 155.0,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "Second positive meniscus; continues gradual convergence",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.67,
      fl: 50.8,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "Strongest G1 positive; primary beam compression element",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.74077,
      vd: 27.74,
      fl: -64.7,
      glass: "S-TIH14 (OHARA)",
      apd: false,
      role: "Negative meniscus; spherical aberration overcorrector and chromatic balancer",
    },
    {
      id: 5,
      name: "L15",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.76182,
      vd: 26.58,
      fl: -27.1,
      glass: "S-TIH18 (OHARA)",
      apd: false,
      role: "Strong negative; positions rear principal point forward for short TTL",
    },
    {
      id: 6,
      name: "L21",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.80809,
      vd: 22.76,
      fl: -54.2,
      glass: "S-NPH1 (OHARA)",
      apd: false,
      cemented: "J21",
      role: "Cemented doublet front; high-dispersion element for chromatic correction",
    },
    {
      id: 7,
      name: "L22",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.90043,
      vd: 37.37,
      fl: 24.9,
      glass: "TAFD37A (HOYA)",
      apd: "inferred",
      apdNote: "HOYA TAFD designation = anomalous dispersion; Cosina confirms 2 APD elements",
      cemented: "J21",
      role: "Cemented doublet rear; strongest single element, APD glass #1",
    },
    {
      id: 8,
      name: "L31",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.90043,
      vd: 37.37,
      fl: 28.6,
      glass: "TAFD37A (HOYA)",
      apd: "inferred",
      apdNote: "HOYA TAFD designation = anomalous dispersion; Cosina confirms 2 APD elements",
      role: "Near plano-convex; final convergence toward image, APD glass #2",
    },
    {
      id: 9,
      name: "L32",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.65412,
      vd: 39.68,
      fl: -43.7,
      glass: "E-ADF50 (HOYA)",
      apd: false,
      role: "Field flattener; counteracts Petzval curvature near image plane",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 53.73, d: 4.26, nd: 1.72916, elemId: 1, sd: 21.0 },
    { label: "2", R: 138.48, d: 0.15, nd: 1.0, elemId: 0, sd: 20.0 },
    { label: "3", R: 36.67, d: 3.67, nd: 1.72916, elemId: 2, sd: 20.0 },
    { label: "4", R: 52.0, d: 0.3, nd: 1.0, elemId: 0, sd: 18.5 },
    { label: "5", R: 26.68, d: 6.51, nd: 1.72916, elemId: 3, sd: 18.5 },
    { label: "6", R: 85.5, d: 2.98, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "7", R: 204.14, d: 1.4, nd: 1.74077, elemId: 4, sd: 13.5 },
    { label: "8", R: 38.68, d: 2.24, nd: 1.0, elemId: 0, sd: 13.0 },
    { label: "9", R: 47.82, d: 1.2, nd: 1.76182, elemId: 5, sd: 12.0 },
    { label: "10", R: 14.26, d: 7.54, nd: 1.0, elemId: 0, sd: 11.5 },
    { label: "STO", R: 1e15, d: 1.15, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "12", R: 66.0, d: 1.1, nd: 1.80809, elemId: 6, sd: 11.0 },
    { label: "13", R: 26.13, d: 4.83, nd: 1.90043, elemId: 7, sd: 11.0 },
    { label: "14", R: -145.01, d: 7.09, nd: 1.0, elemId: 0, sd: 11.0 },
    { label: "15", R: 2707.72, d: 3.83, nd: 1.90043, elemId: 8, sd: 11.5 },
    { label: "16", R: -25.97, d: 2.97, nd: 1.0, elemId: 0, sd: 11.5 },
    { label: "17", R: -26.07, d: 1.2, nd: 1.65412, elemId: 9, sd: 11.0 },
    { label: "18", R: -300.0, d: 12.57, nd: 1.0, elemId: 0, sd: 11.0 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus — BFD only) ── */
  var: {
    "18": [12.57, 19.36],
  },
  varLabels: [["18", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (Gf)", fromSurface: "1", toSurface: "10" },
    { text: "G2", fromSurface: "12", toSurface: "14" },
    { text: "G3", fromSurface: "15", toSurface: "18" },
  ],
  doublets: [{ text: "J21", fromSurface: "12", toSurface: "14" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.39,
  focusDescription: "Unit focusing (entire optical assembly extends toward object).",

  /* ── Aperture configuration ── */
  nominalFno: 1.2,
  fstopSeries: [1.2, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
