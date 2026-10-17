import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 8,767,319 B2, Example 1 / Figure 1, source f/1.450.
 * Ten elements, nine air-separated components; three positive motion groups.
 * Gr2 and its stop move 9.600 mm objectward; Gr1 and Gr3 stay fixed.
 * Semi-diameters remain inferred: the figure's front rim is smaller than
 * the entrance pupil required by the source f-number (see analysis/audit).
 * Source BF=41.050 mm is already air-equivalent; no cover/filter is added.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikkor-85f14g",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 85mm f/1.4 G",
  subtitle: "US 8,767,319 B2 EXAMPLE 1 — KONICA MINOLTA / NIKON",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["10 ELEMENTS / 9 GROUPS", "f = 85.0 mm", "F/1.45 (PATENT)", "2ω = 28.666°", "ALL SPHERICAL"],
    elementCount: 10,
    groupCount: 9,
    focalLengthMm: { marketing: 85, design: 85.0 },
    fNumber: { marketing: 1.4, design: 1.45 },
  },

  source: {
    patentNumber: "US 8,767,319 B2",
    patentYear: 2014,
    authors: ["Yoshihito Souma", "Satoru Shibata"],
    assignees: ["Konica Minolta Advanced Layers, Inc.", "Nikon Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.3,
      focalLengthMm: 106.6,
      glass: "S-BSM16 (OHARA, inferred coordinate counterpart)",
      apd: false,
      role: "Front positive meniscus — collects the f/1.4 beam and begins convergence",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: 133.9,
      glass: "S-LAH65V (OHARA, inferred coordinate counterpart)",
      apd: false,
      role: "High-index positive meniscus — continues convergence with low Petzval contribution",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.3,
      focalLengthMm: -52.2,
      glass: "NBFD15 (HOYA, inferred coordinate counterpart)",
      apd: false,
      role: "Negative meniscus — Gr1 chromatic/field correction; diverges beam into Gr1–Gr2 gap",
    },
    {
      id: 4,
      name: "L21",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: 139.4,
      glass: "S-LAH55V (OHARA, inferred coordinate counterpart)",
      apd: false,
      role: "First positive in focusing group — re-converges beam from Gr1; f21/f22 ratio sets SA balance",
    },
    {
      id: 5,
      name: "L22",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.1,
      focalLengthMm: -35.7,
      glass: "S-TIM35 (OHARA, inferred coordinate counterpart)",
      apd: false,
      role: "Only negative in Gr2 — chromatic correction and residual spherical aberration control (patent conditional (1))",
    },
    {
      id: 6,
      name: "L23",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 96.8,
      glass: "S-LAH58 (OHARA, inferred coordinate counterpart)",
      apd: false,
      role: "Post-negative positive meniscus — begins re-convergence after L22 divergence",
    },
    {
      id: 7,
      name: "L24",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      focalLengthMm: 45.1,
      glass: "S-LAL18 (OHARA, inferred coordinate counterpart)",
      apd: false,
      role: "Strong biconvex — primary crown element of Gr2 achromatic pair with L22; highest Abbe number in Gr2",
    },
    {
      id: 8,
      name: "L31",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.90366,
      vd: 31.3,
      focalLengthMm: 92.1,
      glass: "S-LAH95 (OHARA, inferred coordinate counterpart)",
      apd: false,
      role: "Highest-index element — first half of L3N cemented doublet; sets refractive index difference at cement surface for SA tuning",
      cemented: "L3N",
    },
    {
      id: 9,
      name: "L32",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.64769,
      vd: 33.8,
      focalLengthMm: -33.4,
      glass: "S-TIM22 (OHARA, inferred coordinate counterpart)",
      apd: false,
      role: "Second half of L3N doublet — cement surface (|Δn| = 0.256) changes the doublet power and spherical-aberration contribution",
      cemented: "L3N",
    },
    {
      id: 10,
      name: "L3P",
      label: "Element 10",
      type: "Biconvex Positive (equi-radii)",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: 52.4,
      glass: "S-LAH60V (OHARA, inferred coordinate counterpart)",
      apd: false,
      role: "Equi-biconvex (R = ±85.957) — exit angle control and field correction; symmetric shape minimizes coma",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    // ── Group 1: Front collector (f = +252.7 mm) ──
    { label: "1", R: 54.231, d: 9.43, sd: 32.0, medium: 1 }, // L11 front
    { label: "2", R: 281.169, d: 0.3, sd: 30.0 }, // L11 rear → air
    { label: "3", R: 39.221, d: 9.64, sd: 30.0, medium: 2 }, // L12 front
    { label: "4", R: 54.944, d: 3.708, sd: 25.0 }, // L12 rear → air
    { label: "5", R: 72.063, d: 2.09, sd: 23.0, medium: 3 }, // L13 front
    { label: "6", R: 26.207, sd: 22.0 }, // L13 rear → air (variable: Gr1–Gr2 gap)

    // ── Group 2: Focusing group + aperture stop (f = +61.9 mm) ──
    { label: "7", R: 55.974, d: 2.31, sd: 20.0, medium: 4 }, // L21 front
    { label: "8", R: 105.851, d: 2.814, sd: 19.5 }, // L21 rear → air
    { label: "STO", R: "flat", d: 5.935 }, // Aperture stop
    { label: "10", R: -40.001, d: 1.2, sd: 17.5, medium: 5 }, // L22 front
    { label: "11", R: 67.072, d: 5.137, sd: 17.5 }, // L22 rear → air
    { label: "12", R: -426.237, d: 3.07, sd: 18.5, medium: 6 }, // L23 front
    { label: "13", R: -71.448, d: 0.15, sd: 19.0 }, // L23 rear → air
    { label: "14", R: 71.673, d: 6.873, sd: 19.0, medium: 7 }, // L24 front
    { label: "15", R: -58.34, sd: 19.0 }, // L24 rear → air (variable: Gr2–Gr3 gap)

    // ── Group 3: Rear corrector (f = +684.5 mm) ──
    { label: "16", R: -66.6, d: 3.7, sd: 19.5, medium: 8 }, // L31 front (cemented L3N)
    { label: "17", R: -37.963, d: 1.69, sd: 19.5, medium: 9 }, // L31→L32 junction (cemented L3N)
    { label: "18", R: 51.067, d: 2.267, sd: 18.5 }, // L32 rear → air
    { label: "19", R: 85.957, d: 6.0, sd: 18.5, medium: 10 }, // L3P front
    { label: "20", R: -85.957, d: 41.05, sd: 18.5 }, // L3P rear → image (BFD)
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.84537,
    description:
      "Inner focus — Gr2 and the aperture stop translate 9.6 mm toward the object; Gr1 and Gr3 stay fixed. Source near distance: 719.0 mm before the first vertex, or 0.84537 m to the image plane. Track 126.370 mm.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Variable air spacings (inner focus) ──
   *  Gr2 translates 9.6 mm toward the object; Gr1 and Gr3 stationary.
   *  Two variable gaps: d6 closes by 9.6 mm, d15 opens by 9.6 mm (ΔΣ = 0).
   */
  gaps: {
    "6": { label: "D6 (Gr1–Gr2)", values: [[17.306, 7.706]] },
    "15": { label: "D15 (Gr2–Gr3)", values: [[1.7, 11.3]] },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.45, fStops: [1.45, 2, 2.8, 4, 5.6, 8, 11, 16] },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "Gr1", fromSurface: "1", toSurface: "6" },
    { text: "Gr2 (focus)", fromSurface: "7", toSurface: "15" },
    { text: "Gr3", fromSurface: "16", toSurface: "20" },
  ],
  doublets: [{ text: "L3N", fromSurface: "16", toSurface: "18" }],

  /* ── Layout tuning ── */
  layout: { scFill: 0.52, yScFill: 0.38 },

  // Sampling choice only, not a patent pupil or clear-aperture measurement.
  rays: { offAxisFractions: [-0.6, -0.3, 0, 0.3, 0.6] },
} satisfies LensDataV2Input;

export default LENS_DATA;
