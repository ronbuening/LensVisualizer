/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON AF-S NIKKOR 85mm f/1.4G               ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 8,767,319 B2 Example 1 (Konica Minolta / Nikon). ║
 * ║  Inner-focus large-aperture medium-telephoto; all-spherical.       ║
 * ║  10 elements / 9 groups, 0 aspherical surfaces.                   ║
 * ║  Focus: Inner focus — Gr2 (4 elements + aperture stop) translates ║
 * ║    9.6 mm toward the object.  Gr1 and Gr3 are stationary.         ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Not listed in patent.  Estimated from paraxial marginal + chief ║
 * ║    ray trace at f/1.45, with ~8–10% mechanical clearance.  Front   ║
 * ║    element SD constrained by 77 mm production filter thread.       ║
 * ║    All SDs validated against edge thickness, sd/|R|, and cross-gap ║
 * ║    overlap constraints.                                            ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-85f14g",
  name: "NIKON AF-S NIKKOR 85mm f/1.4G",
  subtitle: "US 8,767,319 B2 EXAMPLE 1 — KONICA MINOLTA / NIKON",
  specs: ["10 ELEMENTS / 9 GROUPS", "f = 85.0 mm", "F/1.4", "2ω ≈ 28.6°", "ALL SPHERICAL"],

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.3,
      fl: 106.6,
      glass: "S-BSM16 (OHARA)",
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
      fl: 133.9,
      glass: "S-LAH65V (OHARA)",
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
      fl: -52.2,
      glass: "S-NBH56 (OHARA)",
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
      fl: 139.4,
      glass: "S-LAH55V (OHARA)",
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
      fl: -35.7,
      glass: "S-TIH18 (OHARA)",
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
      fl: 96.8,
      glass: "S-LAH58 (OHARA)",
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
      fl: 45.1,
      glass: "S-LAL14 (OHARA)",
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
      fl: 92.1,
      glass: "S-LAH79 (OHARA)",
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
      fl: -33.4,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Second half of L3N doublet — cement surface (|Δn| = 0.256) provides controlled residual SA for bokeh character",
      cemented: "L3N",
    },
    {
      id: 10,
      name: "L3P",
      label: "Element 10",
      type: "Biconvex Positive (equi-radii)",
      nd: 1.834,
      vd: 37.2,
      fl: 52.4,
      glass: "S-LAH60V (OHARA)",
      apd: false,
      role: "Equi-biconvex (R = ±85.957) — exit angle control and field correction; symmetric shape minimizes coma",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── Group 1: Front collector (f = +252.7 mm) ──
    { label: "1", R: 54.231, d: 9.43, nd: 1.62041, elemId: 1, sd: 32.0 }, // L11 front
    { label: "2", R: 281.169, d: 0.3, nd: 1.0, elemId: 0, sd: 30.0 }, // L11 rear → air
    { label: "3", R: 39.221, d: 9.64, nd: 1.804, elemId: 2, sd: 30.0 }, // L12 front
    { label: "4", R: 54.944, d: 3.708, nd: 1.0, elemId: 0, sd: 25.0 }, // L12 rear → air
    { label: "5", R: 72.063, d: 2.09, nd: 1.8061, elemId: 3, sd: 23.0 }, // L13 front
    { label: "6", R: 26.207, d: 17.306, nd: 1.0, elemId: 0, sd: 22.0 }, // L13 rear → air (variable: Gr1–Gr2 gap)

    // ── Group 2: Focusing group + aperture stop (f = +61.9 mm) ──
    { label: "7", R: 55.974, d: 2.31, nd: 1.83481, elemId: 4, sd: 20.0 }, // L21 front
    { label: "8", R: 105.851, d: 2.814, nd: 1.0, elemId: 0, sd: 19.5 }, // L21 rear → air
    { label: "STO", R: 1e15, d: 5.935, nd: 1.0, elemId: 0, sd: 17.0 }, // Aperture stop
    { label: "10", R: -40.001, d: 1.2, nd: 1.69895, elemId: 5, sd: 17.5 }, // L22 front
    { label: "11", R: 67.072, d: 5.137, nd: 1.0, elemId: 0, sd: 17.5 }, // L22 rear → air
    { label: "12", R: -426.237, d: 3.07, nd: 1.883, elemId: 6, sd: 18.5 }, // L23 front
    { label: "13", R: -71.448, d: 0.15, nd: 1.0, elemId: 0, sd: 19.0 }, // L23 rear → air
    { label: "14", R: 71.673, d: 6.873, nd: 1.72916, elemId: 7, sd: 19.0 }, // L24 front
    { label: "15", R: -58.34, d: 1.7, nd: 1.0, elemId: 0, sd: 19.0 }, // L24 rear → air (variable: Gr2–Gr3 gap)

    // ── Group 3: Rear corrector (f = +684.5 mm) ──
    { label: "16", R: -66.6, d: 3.7, nd: 1.90366, elemId: 8, sd: 19.5 }, // L31 front (cemented L3N)
    { label: "17", R: -37.963, d: 1.69, nd: 1.64769, elemId: 9, sd: 19.5 }, // L31→L32 junction (cemented L3N)
    { label: "18", R: 51.067, d: 2.267, nd: 1.0, elemId: 0, sd: 18.5 }, // L32 rear → air
    { label: "19", R: 85.957, d: 6.0, nd: 1.834, elemId: 10, sd: 18.5 }, // L3P front
    { label: "20", R: -85.957, d: 41.05, nd: 1.0, elemId: 0, sd: 18.5 }, // L3P rear → image (BFD)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (inner focus) ──
   *  Gr2 translates 9.6 mm toward the object; Gr1 and Gr3 stationary.
   *  Two variable gaps: d6 closes by 9.6 mm, d15 opens by 9.6 mm (ΔΣ = 0).
   */
  var: {
    6: [17.306, 7.706],
    15: [1.7, 11.3],
  },
  varLabels: [
    ["6", "D6 (Gr1–Gr2)"],
    ["15", "D15 (Gr2–Gr3)"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "Gr1", fromSurface: "1", toSurface: "6" },
    { text: "Gr2 (focus)", fromSurface: "7", toSurface: "15" },
    { text: "Gr3", fromSurface: "16", toSurface: "20" },
  ],
  doublets: [{ text: "L3N", fromSurface: "16", toSurface: "18" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.85,
  focusDescription:
    "Inner focus — Gr2 translates 9.6 mm toward object.  Gr1 and Gr3 stationary.  Total track constant at 126.4 mm.",

  /* ── Aperture configuration ── */
  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Off-axis ray tuning ──
   *  Default offAxisFractions (±0.75) places the upper marginal ray at
   *  yChief + 0.75×epSD ≈ 11.4 + 22.8 = 34.1 mm, which exceeds the front
   *  element SD of 32 mm and causes an immediate ghost that traverses the
   *  entire lens.  Cap at ±0.6 (→ y0_max ≈ 29.6 mm) for a clean trace.
   */
  offAxisFractions: [-0.6, -0.3, 0, 0.3, 0.6],

  /* ── Layout tuning ── */
  scFill: 0.52,
  yScFill: 0.38,
};

export default LENS_DATA;
