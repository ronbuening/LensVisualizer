import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — PANASONIC LUMIX S PRO 50mm f/1.4 (S-X50)             ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2020/158622 A1, Numerical Example 3 (Panasonic   ║
 * ║  IP Management / Yoshinaga, Suzuki). Modified Gauss-derivative    ║
 * ║  high-speed normal prime for L-mount full-frame mirrorless.       ║
 * ║  13 elements / 11 groups, 4 aspherical surfaces (2 elements).    ║
 * ║  Focus: dual inner focus — L9 (Fn, negative) moves toward image, ║
 * ║  L10 (Fp, positive) moves toward object. Three variable gaps.     ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters. Values are production-     ║
 * ║    representative estimates matched to Panasonic's published      ║
 * ║    construction section, then checked against rim slope, edge      ║
 * ║    thickness, and cross-gap sag constraints. Front element remains║
 * ║    capped by the 77 mm filter thread envelope (~35 mm max SD).    ║
 * ║    This lens overrides maxRimAngleDeg to 70.5° so S4 (L2 rear,    ║
 * ║    R=24.46) can use a 23.0 mm production-style clear aperture     ║
 * ║    while preserving the characteristic pinched second-element      ║
 * ║    rear aperture seen in the production diagram.                  ║
 * ║                                                                    ║
 * ║  NOTE ON PARTIAL DISPERSION:                                       ║
 * ║    Table 3A prints a dPgF deviation for L1, L5, L6, L10 and L12,   ║
 * ║    but the patent states no normal-line formula. The figures equal ║
 * ║    HOYA's catalog ΔPgF for the four glasses, measured from a line  ║
 * ║    near 0.64833 − 0.00180·νd, not the engine's. `dPgF` here is PgF ║
 * ║    minus the engine's normal line (0.6438 − 0.001682·νd), with PgF ║
 * ║    taken from the HOYA catalog curve of each glass. The patent's   ║
 * ║    own figures stay in each apdNote and in the analysis.           ║
 * ║                                                                    ║
 * ║  Cover glass (Table 3A surfaces 26–27: 2.10 mm flat, nd 1.51680,  ║
 * ║  νd 64.2) and the BF 1.00419 mm air gap to the image are modeled  ║
 * ║  in `rearPlates` (traced, not drawn). Surface 25A keeps the       ║
 * ║  patent's 13.42 mm gap to the cover glass.                        ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: mechanical parts (cover glass: `rearPlates`) ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "panasonic-lumix-s-pro-50-f14",
  maker: "Panasonic",
  name: "PANASONIC LUMIX S PRO 50mm f/1.4",
  subtitle: "WO 2020/158622 A1 Example 3 — Panasonic / Yoshinaga, Suzuki",

  catalog: {
    lensMounts: ["l-mount"],
    imageFormat: "135-full-frame",
    specs: [
      "13 ELEMENTS / 11 GROUPS",
      "f ≈ 49.0 mm",
      "F/1.4",
      "2ω ≈ 47.6°",
      "2 ASPHERICAL ELEMENTS (4 SURFACES)",
      "3 ED ELEMENTS",
    ],
    elementCount: 13,
    groupCount: 11,
    focalLengthMm: { marketing: 50, design: 49.0 },
    fNumber: { marketing: 1.4, design: 1.47 },
  },

  source: {
    patentNumber: "WO 2020/158622 A1",
    patentYear: 2020,
    authors: ["Shunichiro Yoshinaga", "Yasuhito Suzuki"],
    assignees: ["Panasonic Intellectual Property Management Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 20.9,
      focalLengthMm: 82.0,
      glass: "E-FDS1 (HOYA catalog-equivalent; 923209, production supplier unspecified)",
      apd: "patent",
      apdNote:
        "Patent dPgF = +0.0282 (Table 3A; normal line not stated, equals HOYA's catalog ΔPgF for E-FDS1). Runtime dPgF +0.030324 is catalog-derived: HOYA E-FDS1 PgF 0.6390 minus the engine's line.",
      role: "Front positive collector; ultra-high-index short flint provides curvature reduction at f/1.4 entrance beam.",
      dPgF: 0.030324,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.2,
      focalLengthMm: -47.1,
      glass: "N-BK7 (SCHOTT catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Diverging element; forms air-spaced pair with L1 for deliberate chromatic under-correction.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.58144,
      vd: 40.9,
      focalLengthMm: -59.9,
      glass: "Dense flint (581/409, uncertain)",
      apd: false,
      role: "Beam divergence continuation; fine-tunes wavefront curvature before aspherical L4.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.80755,
      vd: 40.9,
      focalLengthMm: 72.5,
      glass: "808409 - PGM-moldable lanthanum crown (MC-NBFD135 code match; patent nd=1.80755, vd=40.9)",
      apd: false,
      role: "Aspherical SA corrector; both surfaces aspherical, targets 5th/7th-order spherical aberration residuals.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.6,
      focalLengthMm: 56.2,
      glass: "FCD515 (Hoya)",
      apd: "patent",
      apdNote:
        "Patent dPgF = +0.0194 (Table 3A; normal line not stated, equals HOYA's catalog ΔPgF for FCD515). Runtime dPgF +0.015701 is catalog-derived: HOYA FCD515 PgF 0.5441 minus the engine's line. ED fluorophosphate crown.",
      role: "First ED element; anomalous dispersion for secondary-spectrum correction, major positive power contributor.",
      dPgF: 0.015701,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.6,
      focalLengthMm: 61.4,
      glass: "FCD515 (Hoya)",
      apd: "patent",
      apdNote:
        "Patent dPgF = +0.0194 (Table 3A; normal line not stated, equals HOYA's catalog ΔPgF for FCD515). Runtime dPgF +0.015701 is catalog-derived: HOYA FCD515 PgF 0.5441 minus the engine's line. ED fluorophosphate crown.",
      role: "Second ED element; positive component of L6+L7 chromatic-engine cemented doublet.",
      cemented: "D1",
      dPgF: 0.015701,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.85478,
      vd: 24.8,
      focalLengthMm: -26.8,
      glass: "S-NBH56 (OHARA)",
      apd: false,
      role: "Dense barium short flint; achromatizing partner for L6 in cemented doublet, strongest negative element.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.8042,
      vd: 46.5,
      focalLengthMm: 38.2,
      glass: "S-LAH65VS (OHARA)",
      apd: false,
      role: "LG1R — rearmost front-group element; strongest positive power in G1, converges beam before stop.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.5,
      focalLengthMm: -76.0,
      glass: "717295 - dense flint (SF1 / S-TIH1 code match)",
      apd: false,
      role: "Focus element Fn (G2); single-element inner focus group, moves toward image during close focus.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.94595,
      vd: 18.0,
      focalLengthMm: 52.0,
      glass: "FDS18 (HOYA)",
      apd: "patent",
      apdNote:
        "Patent dPgF = +0.0386 (Table 3A; normal line not stated, equals HOYA's catalog ΔPgF for FDS18). Runtime dPgF +0.041043 is catalog-derived: HOYA FDS18 PgF 0.6546 minus the engine's line. Highest-index glass in system.",
      role: "Focus element Fp (G3); counter-moves toward object to compensate field curvature from L9 motion.",
      dPgF: 0.041043,
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.56732,
      vd: 42.8,
      focalLengthMm: -62.1,
      glass: "S-TIL26 (OHARA)",
      apd: false,
      role: "Rear-group negative doublet component; lateral color correction partner for L12.",
      cemented: "D2",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.55032,
      vd: 75.5,
      focalLengthMm: 47.0,
      glass: "FCD705 (HOYA)",
      apd: "patent",
      apdNote:
        "Patent dPgF = +0.0277 (Table 3A; normal line not stated, equals HOYA's catalog ΔPgF for FCD705). Runtime dPgF +0.023177 is catalog-derived: HOYA FCD705 PgF 0.5400 minus the engine's line. ED fluorophosphate crown, lowest-dispersion glass in system.",
      role: "Third ED element; highest Abbe number in system, lateral chromatic correction in rear group.",
      cemented: "D2",
      dPgF: 0.023177,
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.68822,
      vd: 31.1,
      focalLengthMm: -52.3,
      glass: "L-TIM28 class, moulded (OHARA, PGM); S-TIM28 is the nearest catalog curve",
      apd: false,
      role: "LGnR — rearmost element; aspherical field corrector for astigmatism, field curvature, distortion.",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    /* ── G1: Front group (8 elements, 7 air-separated groups) ── */
    { label: "1", R: 66.0605, d: 9.2236, sd: 35.0, medium: 1 },
    { label: "2", R: 485.5991, d: 3.5225, sd: 31.5 },
    { label: "3", R: -5608.8306, d: 1.5, sd: 28.0, medium: 2 },
    { label: "4", R: 24.4639, d: 16.1084, sd: 23.0 },
    { label: "5", R: -42.3161, d: 1.5, sd: 19.5, medium: 3 },
    { label: "6", R: 200.323, d: 3.6265, sd: 19.5 },
    {
      label: "7A",
      R: 249.4497,
      d: 9.0,
      sd: 22.5,
      medium: 4,
      asphere: { K: 0, A4: 4.04714e-7, A6: 2.58016e-9, A8: 4.51006e-12, A10: -1.10997e-14 },
    },
    {
      label: "8A",
      R: -75.216,
      d: 0.2,
      sd: 23.0,
      asphere: { K: 0, A4: 3.8726e-6, A6: 1.87609e-9, A8: 7.45815e-12, A10: -1.12514e-14 },
    },
    { label: "9", R: 81.9815, d: 10.7154, sd: 26.0, medium: 5 },
    { label: "10", R: -53.4384, d: 0.3, sd: 25.0 },
    { label: "11", R: 114.347, d: 7.7332, sd: 24.5, medium: 6 },
    { label: "12", R: -52.0541, d: 1.51, sd: 22.0, medium: 7 },
    { label: "13", R: 41.4126, d: 6.6853, sd: 21.0 },
    { label: "14", R: 65.4872, d: 10.0635, sd: 22.0, medium: 8 },
    { label: "15", R: -53.8185, d: 1.0, sd: 19.5 },

    /* ── Aperture stop ── */
    { label: "STO", R: "flat" },

    /* ── G2: Focus group Fn (L9, negative meniscus) ── */
    { label: "17", R: 64.1418, d: 1.4, sd: 16.0, medium: 9 },
    { label: "18", R: 29.2025, sd: 16.4 },

    /* ── G3: Focus group Fp (L10, biconvex positive) ── */
    { label: "19", R: 147.4207, d: 5.1, sd: 16.0, medium: 10 },
    { label: "20", R: -72.6539, sd: 15.0 },

    /* ── G4: Rear corrector group (3 elements, 2 groups) ── */
    { label: "21", R: -154.2306, d: 1.51, sd: 17.5, medium: 11 },
    { label: "22", R: 45.8027, d: 9.0554, sd: 19.5, medium: 12 },
    { label: "23", R: -55.2867, d: 6.539, sd: 19.0 },
    {
      label: "24A",
      R: -30.7259,
      d: 2.0,
      sd: 18.0,
      medium: 13,
      asphere: { K: 0, A4: 1.32764e-5, A6: 9.38299e-9, A8: -5.0085e-11, A10: 7.82519e-14 },
    },
    // Last surface: patent gap to the cover glass
    {
      label: "25A",
      R: -215.5886,
      d: 13.42,
      sd: 16.0,
      asphere: { K: 0, A4: 3.61044e-6, A6: 5.93299e-9, A8: -4.07704e-11, A10: 5.45033e-14 },
    },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.44,
    description:
      "Dual inner focus: L9 (Fn, linear motor) translates toward image, L10 (Fp, stepping motor) counter-translates toward object. G1 and G4 fixed.",
    // (moved from publishedStations) Patent read 2026-10-06: Close-focus gaps are the patent's Table 3C close-object column for Example 3 (-0.15x, d0
    // = 291.4803 mm): d16 7.5963, d18 12.3145, d20 3.2779.
    published: [1],
  },

  /* (moved from var) ── Variable air spacings (dual inner focus) ──
   *  L9 (Fn) moves 6.10 mm toward image; L10 (Fp) moves 1.28 mm toward object.
   *  Total variable-gap sum conserved to within 0.002 mm (23.187 → 23.189).
   *  G1 and G4 are mechanically fixed during focusing.
   */
  gaps: {
    STO: { label: "D16", values: [[1.5, 7.5963]] },
    "18": { label: "D18", values: [[19.687, 12.3145]] },
    "20": { label: "BF", values: [[2.0, 3.2779]] },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.47, fStops: [1.47, 1.8, 2, 2.5, 2.8, 3.5, 4, 5.6, 8, 11, 16] },

  /* ── Cover glass (patent Table 3A surfaces 26–27): traced, not drawn ── */
  rearPlates: [
    {
      thicknessMm: 2.1,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 1.00419,
      source: "WO 2020/158622 A1, Numerical Example 3 Table 3A surfaces 26–27, Table 3C BF (infinity)",
    },
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "15" },
    { text: "G2 (−) Fn", fromSurface: "17", toSurface: "18" },
    { text: "G3 (+) Fp", fromSurface: "19", toSurface: "20" },
    { text: "G4 (−)", fromSurface: "21", toSurface: "25A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "11", toSurface: "13" },
    { text: "D2", fromSurface: "21", toSurface: "23" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.38 },

  checks: { maxRimAngleDeg: 70.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
