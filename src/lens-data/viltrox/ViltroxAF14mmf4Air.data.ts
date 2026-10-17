import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║ REAR FILTER: Source S23-S24 is traced through rearPlates.               ║
 * ║ S22 retains 12.49 mm physical air; PP is 2.85 mm, nd=1.52, vd=64.2,    ║
 * ║ followed by 1.00 mm air. This preserves the source image plane.         ║
 * ║ Source contradiction: the physical BFL computes to 15.267563 mm,       ║
 * ║ vs the printed path's 16.34 mm; EFL 14.192130 vs stated 14.3 mm.        ║
 * ║ Unfolding the filter leaves the -1.072437 mm focus offset unchanged.    ║
 * ║ No additional transcription error explains it; keep source values.     ║
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
  schema: 2,
  key: "viltrox-af-14mm-f4-air",
  maker: "Viltrox",
  name: "VILTROX AF 14mm f/4 AIR",
  subtitle: "CN 121091494 A Example 1 — production-correlated internal-focus model",

  // apertureDesign is intentionally omitted: the patent's printed f/1.47 is geometrically inconsistent; see header/audit.
  catalog: {
    lensMounts: ["sony-fe", "nikon-z"],
    imageFormat: "135-full-frame",
    specs: [
      "12 ELEMENTS / 9 GROUPS",
      "14mm MARKETING / 14.192mm MODELED EFL",
      "f/4 MODELED APERTURE",
      "112.6° FULL FIELD",
      "4 ASPHERICAL SURFACES",
      "INNER FOCUS",
    ],
    elementCount: 12,
    groupCount: 9,
    /* ── Explicit metadata ── */
    focalLengthMm: { marketing: 14, design: 14.19213 },
    fNumber: { marketing: 4 },
  },

  source: {
    patentNumber: "CN 121091494 A",
    patentYear: 2025,
    authors: ["Liu Ruijun", "Chen Baofeng"],
    assignees: ["Shenzhen Viltrox Technology Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.92,
      vd: 20.9,
      focalLengthMm: -28.428867,
      glass: "923209 class",
      // Compatible catalog curve supports APD; production glass identity is unresolved.
      apd: "inferred",
      role: "High-index front negative meniscus.",
      diagramLabel: "L01",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.5,
      vd: 81.6,
      focalLengthMm: -31.104312,
      glass: "J-FKH1 equivalent (qualified spectral proxy for rounded patent 1.50 / 81.6; vendor unresolved)",
      // Compatible catalog curve supports APD; production glass identity is unresolved.
      apd: "inferred",
      role: "Double-aspherical negative front-group element.",
      diagramLabel: "L02",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.59,
      vd: 68.3,
      focalLengthMm: -21.188886,
      glass: "592683 class",
      // Compatible catalog curve supports APD; production glass identity is unresolved.
      apd: "inferred",
      role: "High-Abbe negative component of the first cemented pair.",
      diagramLabel: "L03",
      cemented: "J1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.65,
      vd: 33.8,
      focalLengthMm: 12.588903,
      glass: "648338 class",
      role: "Positive partner to L3 in the first cemented pair.",
      diagramLabel: "L04",
      cemented: "J1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.68,
      vd: 55.5,
      focalLengthMm: -8.776417,
      glass: "678555 class",
      role: "Strong negative component of the second cemented pair.",
      diagramLabel: "L05",
      cemented: "J2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.67,
      vd: 47.2,
      focalLengthMm: 9.53069,
      glass: "670472 class",
      role: "Positive partner to L5 immediately ahead of the stop.",
      diagramLabel: "L06",
      cemented: "J2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.46,
      vd: 90.2,
      focalLengthMm: 15.752227,
      glass: "459902 class",
      // Compatible catalog curve supports APD; production glass identity is unresolved.
      apd: "inferred",
      role: "High-Abbe positive front component of the moving focus group.",
      diagramLabel: "L07",
      cemented: "J3",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 2.0,
      vd: 25.4,
      focalLengthMm: -30.603846,
      glass: "001254 class",
      role: "High-index negative partner in the moving focus-group cemented pair.",
      diagramLabel: "L08",
      cemented: "J3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.46,
      vd: 90.2,
      focalLengthMm: 29.573906,
      glass: "459902 class",
      // Compatible catalog curve supports APD; production glass identity is unresolved.
      apd: "inferred",
      role: "High-Abbe positive rear element of the moving focus group.",
      diagramLabel: "L09",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.78,
      vd: 25.7,
      focalLengthMm: -22.715762,
      glass: "Unmatched (patent nd=1.78 / vd=25.7; rounded coordinates do not pass catalog guard)",
      role: "Negative front element of the fixed rear group.",
      diagramLabel: "L10",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.64,
      vd: 23.5,
      focalLengthMm: 1339.524004,
      glass: "Unmatched (nd≈1.64, νd≈23.5)",
      role: "Very weak positive double-aspherical element in the fixed rear group.",
      diagramLabel: "L11",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Near Plano-Convex Positive",
      nd: 1.59,
      vd: 68.6,
      focalLengthMm: 77.116985,
      glass: "593686 class",
      // Compatible catalog curve supports APD; production glass identity is unresolved.
      apd: "inferred",
      role: "Final positive element ahead of the source rear filter.",
      diagramLabel: "L12",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 19.932, d: 1.19, sd: 12.7, medium: 1 },
    { label: "2", R: 10.988, d: 2.51, sd: 9.8 },
    {
      label: "3A",
      R: 13.683,
      d: 1.9,
      sd: 9.7,
      medium: 2,
      asphere: {
        K: -3.08285,
        A4: 4.043735e-4,
        A6: -6.207184e-6,
        A8: 5.701304e-8,
        A10: -3.274096e-10,
        A12: 8.690731e-13,
        A14: 0,
      },
    },
    {
      label: "4A",
      R: 6.942,
      d: 5.58,
      sd: 7.6,
      asphere: {
        K: -3.407936,
        A4: 1.418814e-3,
        A6: -2.502304e-5,
        A8: 3.437591e-7,
        A10: -3.198244e-9,
        A12: 1.338523e-11,
        A14: 0,
      },
    },
    { label: "5", R: 100.885, d: 0.98, sd: 7.3, medium: 3 },
    { label: "6", R: 11.083, d: 4.71, sd: 6.3, medium: 4 },
    { label: "7", R: -26.035, d: 0.51, sd: 6.3 },
    { label: "8", R: -18.999, d: 2.61, sd: 6.1, medium: 5 },
    { label: "9", R: 9.185, d: 3.51, sd: 5.0, medium: 6 },
    { label: "10", R: -17.739, d: 2.06, sd: 5.0 },
    { label: "STO", R: "flat" },
    { label: "12", R: 60.769, d: 6.33, sd: 6.6, medium: 7 },
    { label: "13", R: -7.957, d: 1.18, sd: 6.6, medium: 8 },
    { label: "14", R: -11.55, d: 0.13, sd: 7.5 },
    { label: "15", R: 39.192, d: 4.32, sd: 8.8, medium: 9 },
    { label: "16", R: -20.113, sd: 8.8 },
    { label: "17", R: -20.676, d: 0.89, sd: 9.3, medium: 10 },
    { label: "18", R: 126.197, d: 2.49, sd: 9.3 },
    {
      label: "19A",
      R: -12.615,
      d: 2.08,
      sd: 7.2,
      medium: 11,
      asphere: {
        K: -2.977833,
        A4: -2.73622e-5,
        A6: 5.530555e-6,
        A8: -6.569822e-8,
        A10: 3.343615e-10,
        A12: -7.618766e-13,
        A14: 0,
      },
    },
    {
      label: "20A",
      R: -13.232,
      d: 0.06,
      sd: 7.7,
      asphere: { K: 0.190226, A4: 2.196878e-4, A6: 4.087407e-6, A8: -3.032095e-8, A10: 3.8656e-11, A12: 3.112743e-13, A14: 0 },
    },
    { label: "21", R: 47.039, d: 3.38, sd: 13.3, medium: 12 },
    { label: "22", R: -1352.722, d: 12.49, sd: 13.3 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.12, // patent Table 3 close row; Viltrox markets 0.13 m
    description:
      "Internal focus: G2 (L7-L9) translates 1.10 mm objectward from infinity to the patent's nominal 0.12 m endpoint. The modeled close state uses D1=3.75 mm and mechanism-constrained D2=4.56 mm (printed D2=4.65 mm). The close-focus distance is the patent's 0.12 m; Viltrox markets 0.13 m.",
    // (moved from publishedStations) Patent read 2026-10-06: Close row is CN 121091494 A Table 3 at 0.12 m (D1 3.75, D2 printed 4.65); D2 is authored
    // as 4.56, a 0.09 mm transposition fix keeping D1+D2 = 8.31 mm.
    published: [1],
  },

  /* (moved from var) ── Variable air spacings (focus) ── */
  gaps: { STO: { label: "D1", values: [[4.85, 3.75]] }, "16": { label: "D2", values: [[3.46, 4.56]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16], blades: 7 },

  projection: { kind: "rectilinear", fullFieldDeg: 112.6, maxTraceFieldDeg: 56.3 },

  rearPlates: [
    {
      label: "PP",
      thicknessMm: 2.85,
      nd: 1.52,
      vd: 64.2,
      gapAfterMm: 1,
      source: "CN 121091494 A, Example 1 Table 1 S23-S24",
    },
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

  /* ── Layout tuning ── */
  layout: { yScFill: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
