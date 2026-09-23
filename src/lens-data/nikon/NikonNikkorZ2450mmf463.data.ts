import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON NIKKOR Z 24-50mm f/4-6.3                         ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2021-189377 A, Numerical Example 1 (Konica Minolta /        ║
 * ║  Nikon joint application). Stored at native patent scale.                    ║
 * ║  Negative-positive-negative-positive 4-group zoom (−+−+ power).              ║
 * ║  11 elements / 10 groups, 6 aspherical surfaces (3 asph elements), 2 ED.     ║
 * ║  Example 1 matches the production counts (Nikon: 11/10, 2 ED, 3 asph);       ║
 * ║  Example 2 has the same construction, so the choice is an inference.         ║
 * ║                                                                              ║
 * ║  Zoom mechanism (patent ¶0045, relative to the fixed G4 / image):            ║
 * ║    G1 (negative front): moves toward the image, then U-turns toward the      ║
 * ║      object (S1 → S23 track 75.80 / 73.41 / 75.43 mm).                       ║
 * ║    G2 (positive, stop moves with it): monotonic toward object, ≈16.4 mm.     ║
 * ║    G3 (negative focus group): monotonic toward object, ≈13.2 mm.             ║
 * ║    G4 (positive rear): fixed.                                                ║
 * ║    Three patent-tabulated zoom stations only (f = 24.726 / 34.711 /          ║
 * ║    48.503 mm); no intermediate stations are interpolated into the data.      ║
 * ║                                                                              ║
 * ║  Focus: G3 moves toward the image (patent ¶0046). The patent tabulates       ║
 * ║    infinity gaps only; the close-focus D17/D21 values are CALCULATED to      ║
 * ║    focus 0.35 m object-to-image (production MFD at every zoom position),     ║
 * ║    giving β ≈ −0.089 / −0.125 / −0.179 (Nikon: 0.17× max at 50 mm).          ║
 * ║                                                                              ║
 * ║  NOTE ON PATENT ERRATA (Example 1):                                          ║
 * ║    1. S14 A6 printed as 1.05587E-01; correct: 1.05587E-07                    ║
 * ║    2. S20 A8 printed as 1.13683E-01; correct: 1.13683E-07                    ║
 * ║    3. S20/S21 aspherical blocks printed as S21/S22 in the patent;            ║
 * ║       corrected to match the * markers and Example 2.                        ║
 * ║    Conic form is z = ch²/[1+√(1−(1+K)c²h²)] + ΣAj·hʲ; all K = 0.             ║
 * ║                                                                              ║
 * ║  NOTE ON d23 / BF:                                                           ║
 * ║    The table prints d23 = 9.90 (constant) and the printed TL uses it         ║
 * ║    (TL = S1→S23 + 9.90 at every station). The paraxial back focus of the     ║
 * ║    tabulated surfaces is 11.438 / 11.381 / 11.301 mm, exactly the BF         ║
 * ║    column (defined as air-converted last-surface-to-paraxial-image). No      ║
 * ║    plate is tabulated, and a plate would make the physical distance LONGER   ║
 * ║    than its air equivalent, so the 1.54 mm offset is unresolved. The BF      ║
 * ║    column is stored as d23 so every station sits at paraxial focus.          ║
 * ║                                                                              ║
 * ║  NOTE ON APERTURE:                                                           ║
 * ║    Patent FNO 4.080 / 5.115 / 6.337; no iris diameters are published.        ║
 * ║    zoomApertureModel "from-nominal-fno" infers the iris per station.         ║
 * ║                                                                              ║
 * ║  NOTE ON SEMI-DIAMETERS:                                                     ║
 * ║    Not listed in the patent. G1/G2 are ray-envelope estimates (52 mm         ║
 * ║    filter); the patent Fig. 1 draws G2 slightly smaller (≈6–7 mm) than the   ║
 * ║    full-field bundle, so G2 is left between the two. G3 and G4 were raised   ║
 * ║    in the 2026-09-23 audit to the Fig. 1 wide-panel rims (L3a ≈9.1–9.2,      ║
 * ║    L3b ≈10.6, L4a ≈18.6 mm at 0.1417 mm/px), which also match the traced     ║
 * ║    full-field bundle; L3b is held at 10.4 mm, inside S20's turnover.         ║
 * ║                                                                              ║
 * ║  NOTE ON CEMENT LAYER:                                                       ║
 * ║    The cemented doublet L2b+L2c has an explicit cement layer                 ║
 * ║    (nd=1.51400, d=0.01 mm) modeled as element id:6. Manufacturer             ║
 * ║    counts 11 elements excluding this layer.                                  ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-z-24-50-f4-63",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 24-50mm f/4-6.3",
  subtitle: "JP 2021-189377 A EXAMPLE 1 — KONICA MINOLTA / NIKON",
  specs: ["11 ELEMENTS / 10 GROUPS", "f = 24.7–48.5 mm", "F/4.08–6.34", "2ω = 82.5°–48.2°", "6 ASPHERICAL SURFACES"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: [24, 50],
  focalLengthDesign: [24.73, 48.5],
  apertureMarketing: 4,
  apertureDesign: 4.08,
  lensMounts: ["nikon-z"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2021-189377 A",
  patentAuthors: ["Takakazu Hirose", "Keiko Yamada", "Yasushi Yamamoto", "Hiroshi Yamamoto"],
  patentAssignees: ["Konica Minolta, Inc.","Nikon Corporation"],
  patentYear: 2021,
  elementCount: 11,
  groupCount: 10,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1a",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.46,
      fl: -28.2,
      glass: "LAC14 (HOYA)",
      apd: false,
      role: "Primary G1 diverging element; convex toward object",
    },
    {
      id: 2,
      name: "L1b",
      label: "Element 2",
      type: "Biconcave Neg. (2× Asph)",
      nd: 1.53048,
      vd: 55.72,
      fl: -133.8,
      glass: "COP resin (ZEONEX-type)",
      apd: false,
      role: "Aspherical distortion corrector in G1; injection-molded plastic",
    },
    {
      id: 3,
      name: "L1c",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 20.88,
      fl: 86.6,
      glass: "PBH21 (OHARA; historical 923209)",
      apd: false,
      role: "Ultra-high-dispersion chromatic corrector in G1; convex toward object",
    },
    {
      id: 4,
      name: "L2a",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.61,
      fl: 46.2,
      glass: "FCD1 (HOYA) / S-FPL51",
      apd: "inferred",
      apdNote: "ED fluorophosphate glass; patent gives nd/νd only and no partial-dispersion table.",
      role: "Primary G2f power element; ED fluorophosphate, convex toward object",
    },
    {
      id: 5,
      name: "L2b",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 25.4,
      glass: "FCD1 (HOYA) / S-FPL51",
      apd: "inferred",
      apdNote: "ED fluorophosphate glass; patent gives nd/νd only and no partial-dispersion table.",
      role: "ED element of cemented achromatic doublet in G2f",
      cemented: "D1",
    },
    {
      id: 6,
      name: "Cem",
      label: "Cement",
      type: "Cement Layer",
      nd: 1.514,
      vd: 27.05,
      glass: "UV-cure adhesive",
      apd: false,
      role: "Optical cement bonding L2b to L2c (0.01 mm layer)",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L2c",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.70154,
      vd: 41.24,
      fl: -24.2,
      glass: "S-BAH27 (OHARA)",
      apd: false,
      role: "Dense barium flint element of cemented doublet; chromatic correction",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L2d",
      label: "Element 7",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58313,
      vd: 59.46,
      fl: 23.5,
      glass: "M-BACD12 (HOYA)",
      apd: false,
      role: "Post-stop spherical aberration and coma corrector; PGM molded glass",
    },
    {
      id: 9,
      name: "L2e",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.64769,
      vd: 33.84,
      fl: -45.0,
      glass: "E-FD2 (HOYA)",
      apd: false,
      role: "Field flattener and coma corrector in G2r; convex toward object",
    },
    {
      id: 10,
      name: "L3a",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.72,
      fl: -35.8,
      glass: "TAFD5G (HOYA)",
      apd: false,
      role: "Primary G3 diverging element; convex toward image",
    },
    {
      id: 11,
      name: "L3b",
      label: "Element 10",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.53048,
      vd: 55.72,
      fl: -915.3,
      glass: "COP resin (ZEONEX-type)",
      apd: false,
      role: "Focus-invariant corrector plate in G3; injection-molded plastic, convex toward image",
    },
    {
      id: 12,
      name: "L4a",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.64769,
      vd: 33.84,
      fl: 79.1,
      glass: "E-FD2 (HOYA)",
      apd: false,
      role: "Rear field lens (G4, fixed); bends chief ray for telecentricity, convex toward image",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1: Negative front group (f₁ = −32.86 mm) ──
    { label: "1", R: 71.885, d: 1.2, nd: 1.6968, elemId: 1, sd: 15.5 }, // L1a front
    { label: "2", R: 15.312, d: 7.8, nd: 1.0, elemId: 0, sd: 13.5 }, // L1a rear → air
    { label: "3A", R: -298.152, d: 1.57, nd: 1.53048, elemId: 2, sd: 12.7 }, // L1b front (asph)
    { label: "4A", R: 93.305, d: 1.78, nd: 1.0, elemId: 0, sd: 13.0 }, // L1b rear (asph) → air
    { label: "5", R: 26.391, d: 2.21, nd: 1.92286, elemId: 3, sd: 12.5 }, // L1c front
    { label: "6", R: 37.81, d: 19.973, nd: 1.0, elemId: 0, sd: 12.0 }, // L1c rear → air [VARIABLE: zoom only]

    // ── G2f: Positive front sub-group of G2 (f₂f = +45.48 mm) ──
    { label: "7", R: 21.71, d: 2.23, nd: 1.497, elemId: 4, sd: 8.5 }, // L2a front
    { label: "8", R: 383.239, d: 0.25, nd: 1.0, elemId: 0, sd: 8.5 }, // L2a rear → air
    { label: "9", R: 31.562, d: 3.16, nd: 1.497, elemId: 5, sd: 8.0 }, // L2b front (cemented D1)
    { label: "10", R: -20.356, d: 0.01, nd: 1.514, elemId: 6, sd: 7.5 }, // L2b→cement junction
    { label: "11", R: -20.356, d: 0.89, nd: 1.70154, elemId: 7, sd: 7.5 }, // cement→L2c junction
    { label: "12", R: 103.171, d: 1.36, nd: 1.0, elemId: 0, sd: 7.5 }, // L2c rear → air

    // ── Aperture stop (between G2f and G2r) ──
    { label: "STO", R: 1e15, d: 3.41, nd: 1.0, elemId: 0, sd: 5.6 },

    // ── G2r: Positive rear sub-group of G2 (f₂r = +38.95 mm) ──
    { label: "14A", R: 22.656, d: 4.2, nd: 1.58313, elemId: 8, sd: 8.0 }, // L2d front (asph)
    { label: "15A", R: -32.267, d: 2.51, nd: 1.0, elemId: 0, sd: 7.5 }, // L2d rear (asph) → air
    { label: "16", R: 21.017, d: 1.0, nd: 1.64769, elemId: 9, sd: 7.0 }, // L2e front
    { label: "17", R: 11.988, d: 8.661, nd: 1.0, elemId: 0, sd: 6.5 }, // L2e rear → air [VARIABLE: zoom+focus]

    // ── G3: Negative focus group (f₃ = −34.44 mm) ──
    { label: "18", R: -27.734, d: 0.9, nd: 1.83481, elemId: 10, sd: 9.2 }, // L3a front
    { label: "19", R: -393.55, d: 1.85, nd: 1.0, elemId: 0, sd: 9.2 }, // L3a rear → air
    { label: "20A", R: -135.797, d: 1.5, nd: 1.53048, elemId: 11, sd: 10.4 }, // L3b front (asph)
    { label: "21A", R: -189.242, d: 4.448, nd: 1.0, elemId: 0, sd: 10.4 }, // L3b rear (asph) → air [VARIABLE: zoom+focus]

    // ── G4: Positive rear group (f₄ = +79.05 mm, fixed) ──
    { label: "22", R: -99.603, d: 4.89, nd: 1.64769, elemId: 12, sd: 18.6 }, // L4a front
    { label: "23", R: -34.47, d: 11.438, nd: 1.0, elemId: 0, sd: 18.6 }, // L4a rear → image [VARIABLE: zoom only, BFD]
  ],

  /* ── Aspherical coefficients (with patent errata corrected) ── */
  asph: {
    "3A": {
      K: 0,
      A4: 1.99678e-5,
      A6: -8.24417e-8,
      A8: -2.122e-11,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "4A": {
      K: 0,
      A4: 1.73101e-5,
      A6: -1.05802e-7,
      A8: -1.53034e-10,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "14A": {
      K: 0,
      A4: -1.98288e-5,
      A6: 1.05587e-7, // Patent prints 1.05587E-01; corrected to E-07
      A8: 4.37228e-9,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "15A": {
      K: 0,
      A4: 3.67654e-5,
      A6: 1.03408e-7,
      A8: 4.94217e-9,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "20A": {
      K: 0,
      A4: -5.93134e-5,
      A6: -2.83344e-6,
      A8: 1.13683e-7, // Patent prints 1.13683E-01; corrected to E-07
      A10: -2.41213e-9,
      A12: 2.81858e-11,
      A14: -1.74792e-13,
      A16: 4.56347e-16,
    },
    "21A": {
      K: 0,
      A4: -3.19651e-5,
      A6: -2.14179e-6,
      A8: 7.43176e-8,
      A10: -1.36585e-9,
      A12: 1.38436e-11,
      A14: -7.40158e-14,
      A16: 1.64402e-16,
    },
  },

  /* ── Zoom positions (3 positions: wide, middle, tele) ── */
  zoomPositions: [24.726, 34.711, 48.503],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Variable air spacings ── */
  var: {
    // d6: G1–G2 gap (zoom only — identical inf/close at each position)
    "6": [
      [19.973, 19.973],
      [10.326, 10.326],
      [3.17, 3.17],
    ],
    // d17: G2r–G3 gap (patent infinity value; close value CALCULATED for 0.35 m — G3 moves toward image)
    "17": [
      [8.661, 10.29],
      [9.998, 12.452],
      [11.938, 15.665],
    ],
    // d21: G3–G4 gap (patent infinity value; close value CALCULATED — complement of d17 shift)
    "21A": [
      [4.448, 2.819],
      [10.367, 7.913],
      [17.606, 13.879],
    ],
    // d23: patent BF column (air-converted paraxial back focus); printed d23 = 9.90 is not used
    "23": [
      [11.438, 11.438],
      [11.381, 11.381],
      [11.301, 11.301],
    ],
  },

  varLabels: [
    ["6", "D6"],
    ["17", "D17"],
    ["21A", "D21"],
    ["23", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (−)", fromSurface: "1", toSurface: "6" },
    { text: "G2f (+)", fromSurface: "7", toSurface: "12" },
    { text: "G2r (+)", fromSurface: "14A", toSurface: "17" },
    { text: "G3 (−)", fromSurface: "18", toSurface: "21A" },
    { text: "G4 (+)", fromSurface: "22", toSurface: "23" },
  ],

  doublets: [{ text: "D1", fromSurface: "9", toSurface: "12" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.35,
  focusDescription:
    "Internal focus via G3 (2 elements, stepping motor). G3 translates toward image for close focus; close-focus gaps are calculated (patent gives infinity gaps only).",

  /* ── Aperture configuration ── */
  nominalFno: [4.08, 5.115, 6.337],
  zoomApertureModel: "from-nominal-fno",
  apertureBlades: 7,
  apertureBladeRoundedness: 0.7,
  fstopSeries: [4.08, 4.5, 5.6, 6.3, 8, 11, 16, 22, 32, 36],
  maxFstop: 36,

  /* ── Layout tuning ── */
  scFill: 0.48,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
