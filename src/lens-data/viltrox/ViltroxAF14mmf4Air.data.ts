import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — VILTROX AF 14mm f/4 AIR                                     ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: CN 121091494 A, Example 1 (深圳市唯卓仕科技有限公司).    ║
 * ║ 12 elements / 9 air-separated groups; 4 aspherical surfaces.             ║
 * ║ Focus: G2 (L7-L9) translates internally; G1 and G3 remain fixed.         ║
 * ║                                                                            ║
 * ║ CONSTRAINED RECONSTRUCTION: Table 3 prints D2(close)=4.65 mm, but the    ║
 * ║ stated single moving G2 requires D1+D2 to remain 8.31 mm. The modeled    ║
 * ║ close state therefore uses D1=3.75 mm and D2=4.56 mm.                    ║
 * ║                                                                            ║
 * ║ FILTER NORMALIZATION: Patent filter planes S23-S24 are omitted. Their    ║
 * ║ 12.49 mm air + 2.85 mm at n=1.52 + 1.00 mm air rear path is replaced    ║
 * ║ by the paraxially equivalent 15.365 mm air spacing after S22.            ║
 * ║                                                                            ║
 * ║ APERTURE NOTE: ¶0135 prints f/1.47, but independent exact meridional     ║
 * ║ tracing shows that its paraxial entrance pupil cannot traverse the       ║
 * ║ published Example-1 surfaces without intersecting/crossing them.         ║
 * ║ The model therefore uses the production-correlated f/4 aperture for      ║
 * ║ nominalFno and stop geometry; the rejected source value remains in the   ║
 * ║ analysis rather than being represented as a valid physical stop.     ║
 * ║                                                                            ║
 * ║ SEMI-DIAMETERS: Not published. Optical rims measured from Fig. 1 at 600 dpi.
 * ║ The 54.73 mm glass span gives 14.75 µm/px; flanges and labels are excluded.
 * ║ L11 retains 7.2/7.7 mm: S20 turns over near 7.8 mm before the drawn rim.
 * ║ Enlarged remaining rims preserve clearance for the    ║
 * ║ exact meridional ray envelopes at infinity and constrained close focus,  ║
 * ║ including the full f/4 pupil on-axis and at 0.60 × 56.3° half-field,     ║
 * ║ then given conservative clearance and checked for edge thickness, actual ║
 * ║ rim slope, conic domain, cross-gap intrusion, and ray containment.       ║
 * ║                                                                            ║
 * ║ No prescription scaling is applied. Patent d-line nd/νd values are kept.║
 * ║ No nC/nF/ng/dPgF values are authored because the patent does not supply  ║
 * ║ per-element line-index or anomalous-partial-dispersion data.             ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "viltrox-af-14mm-f4-air",
  maker: "Viltrox",
  name: "VILTROX AF 14mm f/4 AIR",
  subtitle: "CN 121091494 A Example 1 — production-correlated internal-focus model",
  specs: [
    "12 ELEMENTS / 9 GROUPS",
    "14mm MARKETING / 14.192mm MODELED EFL",
    "f/4 MODELED APERTURE",
    "112.6° FULL FIELD",
    "4 ASPHERICAL SURFACES",
    "INNER FOCUS",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 14,
  focalLengthDesign: 14.19213,
  apertureMarketing: 4,
  // apertureDesign is intentionally omitted: the patent's printed f/1.47 is geometrically inconsistent; see header/audit.
  lensMounts: ["sony-fe", "nikon-z"],
  imageFormat: "135-full-frame",
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 112.6,
    maxTraceFieldDeg: 56.3,
  },
  patentNumber: "CN 121091494 A",
  patentAuthors: ["Liu Ruijun", "Chen Baofeng"],
  patentAssignees: ["Shenzhen Viltrox Technology Co., Ltd."],
  patentYear: 2025,
  elementCount: 12,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L01",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.92,
      vd: 20.9,
      fl: -28.428867,
      glass: "923209 class",
      role: "High-index front negative meniscus.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L02",
      label: "Element 2",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.5,
      vd: 81.6,
      fl: -31.104312,
      glass: "J-FKH1 equivalent (qualified spectral proxy for rounded patent 1.50 / 81.6; vendor unresolved)",
      role: "Double-aspherical negative front-group element.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L03",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.59,
      vd: 68.3,
      fl: -21.188886,
      glass: "592683 class",
      cemented: "J1",
      role: "High-Abbe negative component of the first cemented pair.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L04",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.65,
      vd: 33.8,
      fl: 12.588903,
      glass: "648338 class",
      cemented: "J1",
      role: "Positive partner to L3 in the first cemented pair.",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L05",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.68,
      vd: 55.5,
      fl: -8.776417,
      glass: "678555 class",
      cemented: "J2",
      role: "Strong negative component of the second cemented pair.",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L06",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.67,
      vd: 47.2,
      fl: 9.53069,
      glass: "670472 class",
      cemented: "J2",
      role: "Positive partner to L5 immediately ahead of the stop.",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "L07",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.46,
      vd: 90.2,
      fl: 15.752227,
      glass: "459902 class",
      cemented: "J3",
      role: "High-Abbe positive front component of the moving focus group.",
    },
    {
      id: 8,
      name: "L8",
      diagramLabel: "L08",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 2.0,
      vd: 25.4,
      fl: -30.603846,
      glass: "001254 class",
      cemented: "J3",
      role: "High-index negative partner in the moving focus-group cemented pair.",
    },
    {
      id: 9,
      name: "L9",
      diagramLabel: "L09",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.46,
      vd: 90.2,
      fl: 29.573906,
      glass: "459902 class",
      role: "High-Abbe positive rear element of the moving focus group.",
    },
    {
      id: 10,
      name: "L10",
      diagramLabel: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.78,
      vd: 25.7,
      fl: -22.715762,
      glass: "Unmatched (patent nd=1.78 / vd=25.7; rounded coordinates do not pass catalog guard)",
      role: "Negative front element of the fixed rear group.",
    },
    {
      id: 11,
      name: "L11",
      diagramLabel: "L11",
      label: "Element 11",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.64,
      vd: 23.5,
      fl: 1339.524004,
      glass: "Unmatched (nd≈1.64, νd≈23.5)",
      role: "Very weak positive double-aspherical element in the fixed rear group.",
    },
    {
      id: 12,
      name: "L12",
      diagramLabel: "L12",
      label: "Element 12",
      type: "Near Plano-Convex Positive",
      nd: 1.59,
      vd: 68.6,
      fl: 77.116985,
      glass: "593686 class",
      role: "Final positive element ahead of the normalized rear air space.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 19.932, d: 1.19, nd: 1.92, elemId: 1, sd: 12.7 },
    { label: "2", R: 10.988, d: 2.51, nd: 1.0, elemId: 0, sd: 9.8 },
    { label: "3A", R: 13.683, d: 1.9, nd: 1.5, elemId: 2, sd: 9.7 },
    { label: "4A", R: 6.942, d: 5.58, nd: 1.0, elemId: 0, sd: 7.6 },
    { label: "5", R: 100.885, d: 0.98, nd: 1.59, elemId: 3, sd: 7.3 },
    { label: "6", R: 11.083, d: 4.71, nd: 1.65, elemId: 4, sd: 6.3 },
    { label: "7", R: -26.035, d: 0.51, nd: 1.0, elemId: 0, sd: 6.3 },
    { label: "8", R: -18.999, d: 2.61, nd: 1.68, elemId: 5, sd: 6.1 },
    { label: "9", R: 9.185, d: 3.51, nd: 1.67, elemId: 6, sd: 5.0 },
    { label: "10", R: -17.739, d: 2.06, nd: 1.0, elemId: 0, sd: 5.0 },
    { label: "STO", R: 1e15, d: 4.85, nd: 1.0, elemId: 0, sd: 3.451627 },
    { label: "12", R: 60.769, d: 6.33, nd: 1.46, elemId: 7, sd: 6.6 },
    { label: "13", R: -7.957, d: 1.18, nd: 2.0, elemId: 8, sd: 6.6 },
    { label: "14", R: -11.55, d: 0.13, nd: 1.0, elemId: 0, sd: 7.5 },
    { label: "15", R: 39.192, d: 4.32, nd: 1.46, elemId: 9, sd: 8.8 },
    { label: "16", R: -20.113, d: 3.46, nd: 1.0, elemId: 0, sd: 8.8 },
    { label: "17", R: -20.676, d: 0.89, nd: 1.78, elemId: 10, sd: 9.3 },
    { label: "18", R: 126.197, d: 2.49, nd: 1.0, elemId: 0, sd: 9.3 },
    { label: "19A", R: -12.615, d: 2.08, nd: 1.64, elemId: 11, sd: 7.2 },
    { label: "20A", R: -13.232, d: 0.06, nd: 1.0, elemId: 0, sd: 7.7 },
    { label: "21", R: 47.039, d: 3.38, nd: 1.59, elemId: 12, sd: 13.3 },
    { label: "22", R: -1352.722, d: 15.365, nd: 1.0, elemId: 0, sd: 13.3 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "3A": {
      K: -3.08285,
      A4: 4.043735e-4,
      A6: -6.207184e-6,
      A8: 5.701304e-8,
      A10: -3.274096e-10,
      A12: 8.690731e-13,
      A14: 0,
    },
    "4A": {
      K: -3.407936,
      A4: 1.418814e-3,
      A6: -2.502304e-5,
      A8: 3.437591e-7,
      A10: -3.198244e-9,
      A12: 1.338523e-11,
      A14: 0,
    },
    "19A": {
      K: -2.977833,
      A4: -2.73622e-5,
      A6: 5.530555e-6,
      A8: -6.569822e-8,
      A10: 3.343615e-10,
      A12: -7.618766e-13,
      A14: 0,
    },
    "20A": {
      K: 0.190226,
      A4: 2.196878e-4,
      A6: 4.087407e-6,
      A8: -3.032095e-8,
      A10: 3.8656e-11,
      A12: 3.112743e-13,
      A14: 0,
    },
  },

  /* ── Variable air spacings (focus) ── */
  var: {
    STO: [4.85, 3.75],
    "16": [3.46, 4.56],
  },
  varLabels: [
    ["STO", "D1"],
    ["16", "D2"],
  ],

  /* ── Group and cemented-pair annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "10" },
    { text: "G2 FOCUS", fromSurface: "12", toSurface: "16" },
    { text: "G3", fromSurface: "17", toSurface: "22" },
  ],
  doublets: [
    { text: "J1", fromSurface: "5", toSurface: "7" },
    { text: "J2", fromSurface: "8", toSurface: "10" },
    { text: "J3", fromSurface: "12", toSurface: "14" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.13,
  focusDescription:
    "Internal focus: G2 (L7-L9) translates 1.10 mm objectward from infinity to the patent's nominal 0.12 m endpoint. The modeled close state uses D1=3.75 mm and mechanism-constrained D2=4.56 mm (printed D2=4.65 mm); the UI close-focus distance remains Viltrox's marketed 0.13 m.",

  /* ── Aperture configuration ── */
  nominalFno: 4,
  fstopSeries: [4, 5.6, 8, 11, 16],
  apertureBlades: 7,

  /* ── Layout tuning ── */
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
