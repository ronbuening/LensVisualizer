/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║       LENS DATA — NIKON NIKKOR Z 14-24mm f/2.8 S                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2021/117563 A1, Example 4 (Table 4).            ║
 * ║  Inventors: Ohtake, Nonaka, Yuasa, Umeda (Nikon Corporation).     ║
 * ║  Priority: JP 2019-223165/223166, filed 10 December 2019.         ║
 * ║                                                                    ║
 * ║  Negative-lead retrofocus zoom, 16 elements / 11 groups.          ║
 * ║  G1(−) GA, G2(+) GF (focusing), G3(+) GC (image-side).          ║
 * ║  Zoom: all three groups move; 4 variable gaps (D8, D11, Bf).      ║
 * ║  Focus: G2 alone (cemented doublet L21+L22) moves rearward.       ║
 * ║  Constant aperture f/2.91 at all zoom positions.                  ║
 * ║                                                                    ║
 * ║  4 aspherical surfaces on 3 elements (1A, 2A, 4A, 27A).          ║
 * ║  4 ED elements: L13, L35, L37, L38 (all S-FPL52, νd = 82.6).    ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent prescription at f_w = 14.42 mm, f_t = 23.29 mm.        ║
 * ║    Production marketed as 14-24 mm. No scaling applied.            ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list SDs. Estimated from patent Fig. 10         ║
 * ║    element proportions, barrel diameter (88.5 mm OD), and          ║
 * ║    edge-thickness / sd-to-R constraints. Paraxial chief ray        ║
 * ║    trace is invalid at ω = 57.6° — SDs are heuristic.            ║
 * ║    Nikon's Fig. 10 optical section is treated as a schematic       ║
 * ║    silhouette target only; Table 4 / Table 5 are followed         ║
 * ║    literally for curvature and asphere math.                       ║
 * ║                                                                    ║
 * ║  NOTE ON CONIC CONSTANTS:                                          ║
 * ║    Patent uses κ convention (κ = 1 + K). Converted to standard    ║
 * ║    K: κ = 1.0 → K = 0 (sphere), κ = 0.0 → K = −1 (paraboloid).  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

import type { LensDataInput } from "../types/optics.js";

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-z-14-24f28-s",
  name: "NIKON NIKKOR Z 14-24mm f/2.8 S",
  maker: "Nikon",
  subtitle: "WO 2021/117563 A1 Example 4 — Ohtake et al. / Nikon",
  specs: [
    "16 ELEMENTS / 11 GROUPS",
    "f = 14.4–23.3 mm (patent) / 14–24 mm (production)",
    "F/2.91 (constant)",
    "2ω = 115.2°–84.8°",
    "4 ASPHERICAL SURFACES (3 elements)",
    "4 ED ELEMENTS (S-FPL52)",
  ],
  focalLengthMarketing: [14, 24] as [number, number],
  focalLengthDesign: [14.42, 23.29] as [number, number],
  apertureMarketing: 2.8,
  apertureDesign: 2.91,
  patentYear: 2021,
  elementCount: 16,
  groupCount: 11,
  focusDescription:
    "Inner focus — G2 cemented doublet (L21+L22) moves toward image. D8 increases, D11 decreases; Bf unchanged during focus. Minimal focusing mass for fast, silent STM AF.",

  /* ── Elements ── */
  elements: [
    // ── G1 (GA): Front negative group (f = −21.4 mm) ──
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.58887,
      vd: 61.1,
      fl: -30.7,
      glass: "S-BAL35 / L-BAL35 (OHARA)",
      apd: false,
      role: "Front dome — both surfaces aspherical with mm-scale departures. Controls distortion and oblique SA across 115° FOV.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.743104,
      vd: 49.4,
      fl: -54.2,
      glass: "S-LAM51 (OHARA)",
      apd: false,
      role: "Secondary field corrector — rear surface aspherical (paraboloidal base) for coma and astigmatism control at extreme off-axis.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.49782,
      vd: 82.6,
      fl: -65.3,
      glass: "S-FPL52 (OHARA) — ED fluorophosphate",
      apd: "inferred",
      apdNote:
        "ED class; anomalous partial dispersion. Negative ED in front group — unusual placement for secondary lateral color correction.",
      role: "ED negative in front group — corrects secondary lateral chromatic aberration that cannot be addressed from rear group alone. Patent-identified anomalous dispersion element.",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.737999,
      vd: 32.3,
      fl: 47.7,
      glass: "S-TIH14 (OHARA)",
      apd: false,
      role: "Achromatization partner for L13 — dense flint compensates G1 divergence and provides primary chromatic correction.",
    },
    // ── G2 (GF): Focusing group (f = +105.3 mm) ──
    {
      id: 5,
      name: "L21",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 2.0006,
      vd: 25.4,
      fl: -47.4,
      glass: "S-NPH2 (OHARA) — ultra-high-index dense flint",
      cemented: "D1",
      apd: false,
      role: "Ultra-high-index negative in compact focusing doublet. nd = 2.0006 enables strong curvatures in minimal volume.",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.64769,
      vd: 33.7,
      fl: 31.9,
      glass: "S-TIM27 (OHARA)",
      cemented: "D1",
      apd: false,
      role: "Positive partner in focusing doublet. G2 net power +105 mm — acts primarily as field lens with smooth pupil shift during focus.",
    },
    // ── G3 (GC): Image-side group (f = +39.3 mm) ──
    {
      id: 7,
      name: "L31",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.85,
      vd: 27.0,
      fl: -61.8,
      glass: "Dense flint (nd = 1.850, uncertain catalog match)",
      cemented: "D2",
      apd: false,
      role: "Dense flint negative in pre-stop achromatic doublet D2.",
    },
    {
      id: 8,
      name: "L32",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.59349,
      vd: 67.0,
      fl: 31.6,
      glass: "Near S-FPM3 (OHARA) — fluorophosphate crown",
      cemented: "D2",
      apd: false,
      role: "Crown positive in D2 — pre-corrects SA and coma before the stop. High-νd glass provides achromatic balance.",
    },
    {
      id: 9,
      name: "L33",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.95375,
      vd: 32.3,
      fl: -19.4,
      glass: "S-LAH79 (OHARA)",
      cemented: "D3",
      apd: false,
      role: "Strongly negative lanthanum dense flint immediately behind stop — controls zonal SA and spherochromatism.",
    },
    {
      id: 10,
      name: "L34",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.7,
      fl: 23.4,
      glass: "S-TIH53 (OHARA)",
      cemented: "D3",
      apd: false,
      role: "Strongly positive titanium flint in D3 — thick-meniscus effect controls Petzval sum contribution.",
    },
    {
      id: 11,
      name: "L35",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.6,
      fl: 34.8,
      glass: "S-FPL52 (OHARA) — ED fluorophosphate",
      apd: "patent",
      apdNote: "Patent-identified 'specific lens' — anomalous partial dispersion for primary LoCA correction.",
      role: "First ED positive behind stop — corrects primary and secondary longitudinal chromatic aberration at maximum marginal ray height.",
    },
    {
      id: 12,
      name: "L36",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      fl: -34.0,
      glass: "S-LAH55 (OHARA)",
      cemented: "D4",
      apd: false,
      role: "Lanthanum crown negative in ED achromatic doublet D4.",
    },
    {
      id: 13,
      name: "L37",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.6,
      fl: 42.9,
      glass: "S-FPL52 (OHARA) — ED fluorophosphate",
      apd: "patent",
      apdNote: "Patent-identified 'specific lens' — anomalous partial dispersion for lateral color correction.",
      cemented: "D4",
      role: "ED positive in D4 — corrects lateral chromatic aberration (lateral color), the dominant chromatic defect in ultra-wide retrofocus designs.",
    },
    {
      id: 14,
      name: "L38",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.6,
      fl: 27.7,
      glass: "S-FPL52 (OHARA) — ED fluorophosphate",
      apd: "patent",
      apdNote: "Patent-identified 'specific lens' — anomalous partial dispersion.",
      cemented: "D5",
      role: "Fourth ED element — symmetric pairing with D4 (same glasses, reversed roles) distributes secondary spectrum correction.",
    },
    {
      id: 15,
      name: "L39",
      label: "Element 15",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      fl: -19.5,
      glass: "S-LAH55 (OHARA)",
      cemented: "D5",
      apd: false,
      role: "Lanthanum crown negative in D5 — provides negative Petzval curvature for field flattening.",
    },
    {
      id: 16,
      name: "L310",
      label: "Element 16",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.85108,
      vd: 40.1,
      fl: 286.4,
      glass: "Probable S-LAH97 (OHARA)",
      apd: false,
      role: "Rear field-correcting asphere — weak positive power with modest aspherical departure fine-tunes residual astigmatism, field curvature, and distortion.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1 (GA): Front negative group ──
    { label: "1A", R: 151.5, d: 3.0, nd: 1.58887, elemId: 1, sd: 18.03 }, // L11 front (asph)
    { label: "2A", R: 16.04, d: 13.37, nd: 1.0, elemId: 0, sd: 14.43 }, // L11 rear (asph) → air
    { label: "3", R: 88.74, d: 2.0, nd: 1.743104, elemId: 2, sd: 16.5 }, // L12 front
    { label: "4A", R: 27.44, d: 10.0, nd: 1.0, elemId: 0, sd: 14.5 }, // L12 rear (asph) → air
    { label: "5", R: -74.77, d: 1.5, nd: 1.49782, elemId: 3, sd: 14.0 }, // L13 front (ED)
    { label: "6", R: 57.87, d: 0.15, nd: 1.0, elemId: 0, sd: 13.5 }, // L13 rear → air
    { label: "7", R: 37.08, d: 5.77, nd: 1.737999, elemId: 4, sd: 15.0 }, // L14 front
    { label: "8", R: -644.56, d: 19.11, nd: 1.0, elemId: 0, sd: 14.5 }, // L14 rear → air [D8]

    // ── G2 (GF): Focusing group ──
    { label: "9", R: 32.64, d: 1.1, nd: 2.0006, elemId: 5, sd: 14.0 }, // L21 front
    { label: "10", R: 19.01, d: 5.3, nd: 1.64769, elemId: 6, sd: 13.5 }, // L21→L22 junction
    { label: "11", R: 210.3, d: 10.68, nd: 1.0, elemId: 0, sd: 13.0 }, // L22 rear → air [D11]

    // ── G3 (GC): Image-side group ──
    { label: "12", R: 28.61, d: 1.1, nd: 1.85, elemId: 7, sd: 12.5 }, // L31 front
    { label: "13", R: 18.19, d: 6.08, nd: 1.59349, elemId: 8, sd: 12.0 }, // L31→L32 junction
    { label: "14", R: 522.9, d: 1.95, nd: 1.0, elemId: 0, sd: 12.0 }, // L32 rear → air
    { label: "STO", R: 1e15, d: 2.88, nd: 1.0, elemId: 0, sd: 10.0 }, // Aperture stop
    { label: "16", R: -66.86, d: 1.1, nd: 1.95375, elemId: 9, sd: 11.5 }, // L33 front
    { label: "17", R: 25.72, d: 5.35, nd: 1.84666, elemId: 10, sd: 11.0 }, // L33→L34 junction
    { label: "18", R: -78.7, d: 0.4, nd: 1.0, elemId: 0, sd: 11.5 }, // L34 rear → air
    { label: "19", R: 24.36, d: 6.27, nd: 1.49782, elemId: 11, sd: 12.0 }, // L35 front (ED)
    { label: "20", R: -54.74, d: 0.15, nd: 1.0, elemId: 0, sd: 12.0 }, // L35 rear → air
    { label: "21", R: 43.1, d: 1.1, nd: 1.83481, elemId: 12, sd: 12.0 }, // L36 front
    { label: "22", R: 16.9, d: 4.4, nd: 1.49782, elemId: 13, sd: 11.5 }, // L36→L37 junction (ED)
    { label: "23", R: 73.95, d: 0.2, nd: 1.0, elemId: 0, sd: 11.5 }, // L37 rear → air
    { label: "24", R: 31.23, d: 5.73, nd: 1.49782, elemId: 14, sd: 11.5 }, // L38 front (ED)
    { label: "25", R: -23.2, d: 1.1, nd: 1.83481, elemId: 15, sd: 11.5 }, // L38→L39 junction
    { label: "26", R: 55.41, d: 3.93, nd: 1.0, elemId: 0, sd: 11.5 }, // L39 rear → air
    { label: "27A", R: -68.43, d: 2.0, nd: 1.85108, elemId: 16, sd: 12.0 }, // L40 front (asph)
    { label: "28", R: -54.15, d: 22.54, nd: 1.0, elemId: 0, sd: 12.5 }, // L40 rear → air [Bf]
  ],

  /* ── Aspherical coefficients ── */
  // Patent uses κ convention: K = κ − 1
  // Surface 1: κ = 1.000 → K = 0 (sphere base)
  // Surface 2: κ = 0.000 → K = −1 (paraboloid base)
  // Surface 4: κ = 0.000 → K = −1 (paraboloid base)
  // Surface 27: κ = 1.000 → K = 0 (sphere base)
  asph: {
    "1A": {
      K: 0,
      A4: 4.5e-6,
      A6: -3.56e-9,
      A8: 2.17e-12,
      A10: -5.59e-16,
      A12: 0,
      A14: 0,
    },
    "2A": {
      K: -1,
      A4: 3.63e-6,
      A6: 7.91e-9,
      A8: 2.28e-11,
      A10: -1.36e-13,
      A12: 1.21e-16,
      A14: 0,
    },
    "4A": {
      K: -1,
      A4: 2.15e-5,
      A6: 2.23e-8,
      A8: 2.16e-11,
      A10: 1.77e-13,
      A12: -1.0e-16,
      A14: 0,
    },
    "27A": {
      K: 0,
      A4: -2.41e-5,
      A6: -4.89e-8,
      A8: -1.02e-10,
      A10: -7.59e-13,
      A12: -3.14e-15,
      A14: 0,
    },
  },

  /* ── Zoom configuration ── */
  zoomPositions: [14.42, 18.0, 20.0, 23.29],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Variable air spacings (zoom format) ── */
  // Each value: [[d_inf_W, d_cf_W], [d_inf_M1, d_cf_M1], [d_inf_M2, d_cf_M2], [d_inf_T, d_cf_T]]
  // Bf is constant during focus (only changes with zoom)
  var: {
    "8": [
      [19.11, 22.29],
      [10.32, 13.66],
      [6.94, 10.37],
      [2.78, 6.38],
    ],
    "11": [
      [10.68, 7.5],
      [8.35, 5.02],
      [7.26, 3.83],
      [5.72, 2.13],
    ],
    "28": [
      [22.54, 22.54],
      [27.74, 27.74],
      [30.59, 30.59],
      [35.22, 35.22],
    ],
  },
  varLabels: [
    ["8", "D8"],
    ["11", "D11"],
    ["28", "BF"],
  ],

  /* ── Group & doublet annotations ── */
  groups: [
    { text: "G1 (GA) −21.4mm", fromSurface: "1A", toSurface: "8" },
    { text: "G2 (GF) +105.3mm", fromSurface: "9", toSurface: "11" },
    { text: "G3 (GC) +39.3mm", fromSurface: "12", toSurface: "28" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "12", toSurface: "14" },
    { text: "D3", fromSurface: "16", toSurface: "18" },
    { text: "D4", fromSurface: "21", toSurface: "23" },
    { text: "D5", fromSurface: "24", toSurface: "26" },
  ],

  /* ── Aperture configuration ── */
  closeFocusM: 0.28,
  nominalFno: 2.91,
  fstopSeries: [2.8, 3.2, 3.5, 4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.5,
  maxAspectRatio: 1.2,
} satisfies LensDataInput;

export default LENS_DATA;
