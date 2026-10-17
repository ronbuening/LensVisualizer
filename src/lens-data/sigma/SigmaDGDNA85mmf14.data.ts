import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — SIGMA 85 mm F/1.4 DG DN | Art                         ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Source: JP 2021-85935 A, Numerical Example 1.                     ║
 * ║  Applicant: Sigma Corporation. Inventor: 塩田 了 (Ryo Shioda).      ║
 * ║  Filed 2019-11-26 (P2019-213387); published 2021-06-03.            ║
 * ║                                                                    ║
 * ║  Asymmetric fast-portrait architecture: positive front group GA    ║
 * ║  (= G1, 6 elements / 5 air-separated subgroups) + aperture stop S  ║
 * ║  + composite rear group GB (= G2 ∪ G3, 9 elements / 6 subgroups).  ║
 * ║  G2 contains the focus component LF — a single negative meniscus   ║
 * ║  L7 placed immediately behind the stop. G3 carries the rear        ║
 * ║  cemented stack and the biaspheric corrector L15.                  ║
 * ║                                                                    ║
 * ║  15 elements / 11 groups; 1 biaspheric element (L15);              ║
 * ║  4 cemented junctions (D1 = L4+L5 in GA;                           ║
 * ║  D2 = L8+L9, D3 = L10+L11, D4 = L13+L14 in GB).                    ║
 * ║                                                                    ║
 * ║  Focus: inner focus by single negative meniscus L7 between the     ║
 * ║  aperture stop and the rear group; rigid-body translation toward   ║
 * ║  the image at close focus (claim 8 of the patent). Throw =         ║
 * ║  +9.6026 mm to image side. BFD held constant.                      ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS: JP 2021-85935 does not publish surface    ║
 * ║  SDs. SDs in this file were estimated by an iterative solver:      ║
 * ║  combined marginal+chief envelope at offAxisFieldFrac = 0.60 with  ║
 * ║  +8% mechanical clearance, then hand-rebalanced against Sigma's    ║
 * ║  published optical-section diagram. The final set keeps the first  ║
 * ║  two front elements nearly equal, preserves a taller D1 block,     ║
 * ║  tapers through L6/stop/L7, and lets the rear aspheric element     ║
 * ║  rise again. Values were trimmed to satisfy edge thickness ≥       ║
 * ║  0.40 mm, cross-gap intrusion ≤ 0.90 × gap, and front/rear SD      ║
 * ║  ratio ≤ 3.0 per element. Front surface capped by the 77 mm        ║
 * ║  filter thread envelope.                                           ║
 * ║                                                                    ║
 * ║  NOTE ON F-NUMBER: Sigma markets this lens as F/1.4. The patent    ║
 * ║  design F-number is F/1.46, which nominalFno and apertureDesign    ║
 * ║  carry; apertureMarketing records the published 1.4.               ║
 * ║                                                                    ║
 * ║  NOTE ON PARTIAL DISPERSION: The patent tabulates θgF only for L5  ║
 * ║  (surface 8, 0.6103). `dPgF` is that θgF minus the engine's normal ║
 * ║  line (0.6438 − 0.001682·νd), not the patent's condition (8)       ║
 * ║  deviation θgF − (0.648285 − 0.00180123·νd), which the analysis    ║
 * ║  quotes.                                                           ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps (D12, D14)             ║
 * ║    ✗ Sensor cover glass / filters / mechanical mount excluded     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "sigma-art-85mm-f14-dgdn",
  maker: "Sigma",
  name: "SIGMA 85mm f/1.4 DG DN | Art",
  subtitle: "JP 2021-85935 Example 1 — Sigma / 塩田 了 (Ryo Shioda)",

  catalog: {
    lensMounts: ["sony-fe", "l-mount"],
    imageFormat: "135-full-frame",
    specs: [
      "15 ELEMENTS / 11 GROUPS",
      "f ≈ 82.96 mm (design)",
      "F/1.4 (F/1.46 design)",
      "2ω ≈ 28.12°",
      "1 BIASPHERIC ELEMENT (L15)",
    ],
    elementCount: 15,
    groupCount: 11,
    /* ── Explicit metadata fields ── */
    focalLengthMm: { marketing: 85, design: 82.96 },
    fNumber: { marketing: 1.4, design: 1.46 },
  },

  source: {
    patentNumber: "JP 2021-085935 A",
    patentYear: 2021,
    authors: ["Ryo Shioda"],
    assignees: ["Sigma Corporation"],
  },

  /* ── Elements (front to rear) ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.94595,
      vd: 17.98,
      focalLengthMm: 260.0,
      glass: "FDS18 catalog equivalent (patent coordinate; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "Patent ¶0028 invokes the LPH glass for its short-wavelength anomalous dispersion; explicit θgF not tabulated for L1.",
      role: "LPH (patent claim 1, conditions 1+2): high-Nd / low-Vd front converger placed at the most-object-side position (condition 3 with LD_LPH1/D_GA = 0).",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.55032,
      vd: 75.5,
      focalLengthMm: 262.0,
      glass: "FCD705 catalog equivalent (patent coordinate; production supplier unspecified)",
      role: "High-Vd SLD positive — counters LPH primary dispersion (condition 4: avg Vd of non-LPH positives in GA = 72.06).",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.55032,
      vd: 75.5,
      focalLengthMm: 164.2,
      glass: "FCD705 catalog equivalent (patent coordinate; production supplier unspecified)",
      role: "Second SLD high-Vd positive in GA; continues primary chromatic correction of the LPH front element.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.59282,
      vd: 68.62,
      focalLengthMm: 100.5,
      glass: "FCD515 catalog equivalent (patent coordinate; production supplier unspecified)",
      role: "SLD positive in the GA cemented doublet D1; pairs with anomalous flint L5 across a junction convex to the object.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.85451,
      vd: 25.15,
      focalLengthMm: -46.4,
      glass: "NBFD25 catalog equivalent (patent coordinate; production supplier unspecified)",
      apd: "patent",
      apdNote:
        "Patent θgF = 0.6103; +0.0073 by the patent's condition (8) line (θgF − 0.648285 + 0.00180123·νd), runtime dPgF +0.008802. The LN element of patent claims 4–5.",
      role: "LN element (claims 4–5): strongest negative power in GA; secondary g-line spectrum corrector via positive ΔPgF.",
      cemented: "D1",
      dPgF: 0.008802,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.59282,
      vd: 68.62,
      focalLengthMm: 107.8,
      glass: "FCD515 catalog equivalent (patent coordinate; production supplier unspecified)",
      role: "Final positive in GA — re-converges the beam after the negative D1 doublet and sets the working distance to the stop.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.59349,
      vd: 67.0,
      focalLengthMm: -61.7,
      glass: "J-PSKH4 catalog equivalent (patent coordinate; production supplier unspecified)",
      role: "Focus component LF (claims 8–9): single-element inner-focus group; high-Vd low-mass meniscus translated rigidly by stepping motor.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.85451,
      vd: 25.15,
      focalLengthMm: -71.9,
      glass: "NBFD25 catalog equivalent (patent coordinate; production supplier unspecified)",
      role: "Anomalous-flint negative entering the rear group; pairs with L9 across a junction convex to the object.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.59282,
      vd: 68.62,
      focalLengthMm: 60.5,
      glass: "FCD515 catalog equivalent (patent coordinate; production supplier unspecified)",
      role: "SLD positive completing D2 — secondary chromatic mop-up at moderate field heights in the rear group.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.85451,
      vd: 25.15,
      focalLengthMm: -29.6,
      glass: "NBFD25 catalog equivalent (patent coordinate; production supplier unspecified)",
      role: "Biconcave anomalous flint — strong negative power for SA/coma management; junction with L11 is convex to the object (claim 6).",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.13,
      focalLengthMm: 40.0,
      glass: "TAFD55 catalog equivalent (patent coordinate; production supplier unspecified)",
      role: "TAFD-class biconvex completing D3; the high index lets a moderate radius supply substantial converging power off-axis.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 2.0509,
      vd: 26.94,
      focalLengthMm: 36.0,
      glass: "TAFD65 catalog equivalent (patent coordinate; production supplier unspecified)",
      role: "Highest-index single biconvex in the design — strongest single positive in GB; deep-rear placement minimises axial-color penalty.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.05,
      focalLengthMm: -41.5,
      glass: "E-FD15 catalog equivalent (patent coordinate; production supplier unspecified)",
      role: "Moderate-Vd biconcave; secondary lateral-color partner with L14 in D4.",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.13,
      focalLengthMm: 32.2,
      glass: "TAFD55 catalog equivalent (patent coordinate; production supplier unspecified)",
      role: "TAFD biconvex completing D4 — chief-ray colour balance at moderate-to-high field.",
      cemented: "D4",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.73077,
      vd: 40.5,
      focalLengthMm: -70.0,
      glass: "M-LAF81 catalog equivalent (patent coordinate; production supplier unspecified)",
      role: "Aberration-correcting biaspheric element (claim 7). Both surfaces carry K=0 polynomial aspheres with positive A₄ (rear ~30× larger than front), but the resulting Δsag profiles are of opposite sign on the two surfaces — preserving net axial power while reshaping the off-axis power distribution.",
    },
  ],

  /* ── Surface prescription (front → rear) ── */
  /* (moved from asph) ── Aspherical coefficients (patent K=0 sphere-base convention; surfaces 26 and 27) ── */
  surfaces: [
    /* GA — Front group G1 (LPH + four SLD positives + LN flint, +6 elements/5 subgroups) */
    { label: "1", R: 76.0456, d: 3.6339, sd: 38.0, medium: 1 }, // L1 front  (LPH)
    { label: "2", R: 107.5269, d: 0.7, sd: 38.0 }, // L1 → air
    { label: "3", R: 71.2221, d: 5.4299, sd: 36.8, medium: 2 }, // L2 front
    { label: "4", R: 136.9321, d: 0.25, sd: 36.8 }, // L2 → air
    { label: "5", R: 42.0109, d: 6.4504, sd: 29.61, medium: 3 }, // L3 front
    { label: "6", R: 74.2493, d: 0.6, sd: 29.61 }, // L3 → air
    { label: "7", R: 34.3834, d: 7.0478, sd: 25.6, medium: 4 }, // L4 front (D1)
    { label: "8", R: 75.0611, d: 1.2, sd: 25.22, medium: 5 }, // L4/L5 junction (D1)
    { label: "9", R: 25.759, d: 4.8037, sd: 22.2 }, // L5 → air
    { label: "10", R: 42.1035, d: 4.4695, sd: 19.3, medium: 6 }, // L6 front
    { label: "11", R: 118.4579, d: 3.3549, sd: 19.3 }, // L6 → air
    /* Aperture stop — placement explicit in patent at surface 12 */
    { label: "STO", R: "flat" }, // d12 (varies with focus)
    /* GB — Focus component LF (G2 = single negative meniscus L7) */
    { label: "13", R: 240.4527, d: 0.9, sd: 17.4, medium: 7 }, // L7 front
    { label: "14", R: 31.7329, sd: 17.2 }, // L7 rear → air, d14 (varies)
    /* GB — Rear group G3 (L8…L15) */
    { label: "15", R: 36.8904, d: 0.9, sd: 18.9, medium: 8 }, // L8 front (D2)
    { label: "16", R: 22.7958, d: 4.3626, sd: 15.9, medium: 9 }, // L8/L9 junction (D2)
    { label: "17", R: 58.0454, d: 3.5976, sd: 12.8 }, // L9 → air
    { label: "18", R: -46.5475, d: 0.95, sd: 15.0, medium: 10 }, // L10 front (D3)
    { label: "19", R: 55.7591, d: 3.9558, sd: 16.8, medium: 11 }, // L10/L11 junction (D3)
    { label: "20", R: -136.9656, d: 0.2, sd: 16.8 }, // L11 → air
    { label: "21", R: 100.8457, d: 4.9452, sd: 18.7, medium: 12 }, // L12 front
    { label: "22", R: -58.9854, d: 0.25, sd: 18.7 }, // L12 → air
    { label: "23", R: -93.4442, d: 1.0542, sd: 19.4, medium: 13 }, // L13 front (D4)
    { label: "24", R: 42.2958, d: 6.9268, sd: 19.6, medium: 14 }, // L13/L14 junction (D4)
    { label: "25", R: -124.2948, d: 0.15, sd: 19.6 }, // L14 → air
    {
      label: "26A",
      R: -916.5877,
      d: 3.0,
      sd: 20.6,
      medium: 15,
      asphere: {
        K: 0,
        A4: 2.10225e-7,
        A6: -2.78595e-8,
        A8: 1.49681e-10,
        A10: -4.65535e-13,
        A12: 7.39256e-16,
        A14: -4.45971e-19,
      },
    }, // L15 front (asph)
    {
      label: "27A",
      R: 54.2362,
      d: 24.0375,
      sd: 20.6,
      asphere: {
        K: 0,
        A4: 6.83977e-6,
        A6: -2.78757e-8,
        A8: 1.40045e-10,
        A10: -3.9622e-13,
        A12: 5.96411e-16,
        A14: -3.74448e-19,
      },
    }, // L15 rear (asph) → image (BFD)
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.85,
    description:
      "Inner focus by single negative meniscus L7 (G2 / LF). L7 translates rigidly toward the image at close focus over a 9.6026 mm throw. Stepping-motor drive (Sigma published spec); BFD held constant.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Variable air spacings (focus mechanism: rigid translation of L7) ── */
  gaps: {
    STO: { label: "D12", values: [[2.7882, 12.3908]] }, // D12: stop → L7 front  (gap grows toward image)
    "14": { label: "D14", values: [[13.39, 3.7874]] }, // D14: L7 rear → L8 front (gap shrinks)
  },

  /* ── Aperture configuration ── */
  // The patent design F-number; Sigma markets the lens as F/1.4.
  aperture: { nominalFNumber: 1.46, fStops: [1.46, 1.6, 1.8, 2, 2.2, 2.5, 2.8, 3.5, 4, 5.6, 8, 11, 16] },

  /* ── Group annotations (patent G1/G2/G3 and patent functional GA/GB labels) ── */
  groups: [
    { text: "G1 (GA)", fromSurface: "1", toSurface: "11" },
    { text: "G2 (LF)", fromSurface: "13", toSurface: "14" },
    { text: "G3", fromSurface: "15", toSurface: "27A" },
  ],
  /* ── Cemented doublet annotations ── */
  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" }, // L4+L5
    { text: "D2", fromSurface: "15", toSurface: "17" }, // L8+L9
    { text: "D3", fromSurface: "18", toSurface: "20" }, // L10+L11
    { text: "D4", fromSurface: "23", toSurface: "25" }, // L13+L14
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.55, yScFill: 0.32 },
} satisfies LensDataV2Input;

export default LENS_DATA;
