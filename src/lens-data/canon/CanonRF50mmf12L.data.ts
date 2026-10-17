import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Canon RF 50mm f/1.2 L USM                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2019/0265441 A1 Example 2 (Katayose / Canon).    ║
 * ║  Large-aperture 50mm prime for Canon RF mount (mirrorless).        ║
 * ║  15 elements / 9 groups, 3 aspherical surfaces, 1 UD element.     ║
 * ║  Focus: front-group extension (L1 translates toward object;       ║
 * ║    L2 stationary). Single variable gap (d19); BFD constant.       ║
 * ║    Not unit focus (only a subunit moves, not the entire lens).    ║
 * ║                                                                    ║
 * ║  NOTE ON PRESCRIPTION:                                             ║
 * ║    All 25 rows, the three K = 0 aspheres and d19 were re-read     ║
 * ║    from the printed Numerical Data 2 table (PDF pp. 16–17). The    ║
 * ║    printed table is correct; machine-text copies of it misread    ║
 * ║    r14–r18 as Example 3's values. Paraxial EFL 51.10 mm, BF        ║
 * ║    14.60 mm and TL 111.01 mm reproduce the patent. The patent     ║
 * ║    lists no filter/cover plate; BF 14.60 is stored as the last    ║
 * ║    air gap. FNo is the patent's 1.25 (marketed f/1.2).            ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                          ║
 * ║    The patent publishes no effective diameters. Every rim follows ║
 * ║    FIG. 3 (PDF p. 4 at 300 dpi; 0.0753 mm/px from the 1280 px     ║
 * ║    S1–S25 vertex span), which draws each element with a flat      ║
 * ║    cylindrical edge: G1/G2 21.3, G3 19.9, G4 front flange 18.5,   ║
 * ║    G5/G6 16.6, G7/G8 16.8, G9/G10 17.2, G11 18.7, G12/G13 19.8,   ║
 * ║    G14/G15 19.1 mm. Two surfaces are held inside the figure by    ║
 * ║    the tabulated air gaps: S7 = 16.0 mm (the f/1.25 axial beam    ║
 * ║    needs 15.61 mm; the 7.45 mm gap to G5 closes near 16.3 mm, so  ║
 * ║    gapSagFrac is 0.97) and S23 = 17.5 mm (the 7.14 mm gap to S22  ║
 * ║    closes near 18 mm). S25A = 19.1 mm as drawn: its sag has a     ║
 * ║    shallow extremum near 16.3 mm but the slope stays under 3° to  ║
 * ║    the rim. Every rim clears the f/1.25 axial beam and the corner ║
 * ║    chief ray at infinity and at 0.40 m.                           ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-rf-50-f12-l",
  maker: "Canon",
  name: "CANON RF 50mm f/1.2 L USM",
  subtitle: "US 2019/0265441 A1 EXAMPLE 2 — CANON / KATAYOSE",

  catalog: {
    lensMounts: ["canon-rf"],
    imageFormat: "135-full-frame",
    specs: [
      "15 ELEMENTS / 9 GROUPS",
      "f ≈ 51.1 mm (marketed 50 mm)",
      "F/1.25 (marketed F/1.2)",
      "2ω ≈ 45.9°",
      "3 ASPHERICAL SURFACES",
      "1 UD ELEMENT (S-FPL51)",
    ],
    elementCount: 15,
    groupCount: 9,
    /* ── Metadata ── */
    focalLengthMm: { marketing: 50, design: 51.1 },
    fNumber: { marketing: 1.2, design: 1.25 },
  },

  source: {
    patentNumber: "US 2019/0265441 A1",
    patentYear: 2019,
    authors: ["Masato Katayose"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "G1",
      label: "Element 1",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.804,
      vd: 46.58,
      focalLengthMm: 47.21,
      glass: "S-LAH65V (OHARA)",
      apd: false,
      apdNote: "",
      role: "Front positive element (Lp); primary beam convergence. Ground aspherical front surface for zonal spherical aberration correction at f/1.2.",
      cemented: "D1",
      dPgF: -0.0088,
    },
    {
      id: 2,
      name: "G2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.07,
      focalLengthMm: -43.0,
      glass: "S-TIM28 (OHARA)",
      apd: false,
      apdNote: "",
      role: "Negative component of front doublet D1; chromatic correction against G1. Doublet D1 is near-afocal (f ≈ −1810 mm).",
      cemented: "D1",
      dPgF: 0.0092,
    },
    {
      id: 3,
      name: "G3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 2.001,
      vd: 29.13,
      focalLengthMm: 42.8,
      glass: "S-LAH99 (OHARA catalog-equivalent to patent 001291; supplier not identified)",
      apd: false,
      apdNote: "Patent-listed ΔθgF = +0.0050 (ordinary dense-flint deviation, not anomalous).",
      role: "Primary converging element; ultra-high refractive index enables strong power with moderate curvature. Near-plano rear surface (R₂ ≈ 2511 mm).",
      dPgF: 0.005,
    },
    {
      id: 4,
      name: "G4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.65412,
      vd: 39.68,
      focalLengthMm: -50.05,
      glass: "S-NBH5 (OHARA)",
      apd: false,
      apdNote: "",
      role: "Spherical aberration corrector for G3; steep meniscus form (concave toward image).",
      dPgF: -0.0036,
    },
    {
      id: 5,
      name: "G5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.66565,
      vd: 35.64,
      focalLengthMm: -38.82,
      glass: "H-ZBaF4 catalog equivalent (patent 666356; production supplier unspecified)",
      apd: false,
      apdNote: "",
      role: "Negative lens Ln (patent conditional expr.); final spherical aberration correction before stop. fLn/Dns = −4.156.",
      cemented: "D2",
      dPgF: -0.0018,
    },
    {
      id: 6,
      name: "G6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.95375,
      vd: 32.32,
      focalLengthMm: 38.91,
      glass: "S-LAH98 (OHARA catalog equivalent to patent 954323; supplier not identified)",
      apd: false,
      apdNote: "",
      role: "Ultra-high-index positive in near-afocal doublet D2 (f ≈ −17,500 mm); Petzval-reducing pair with G5. Near-plano rear (R₂ ≈ 516 mm).",
      cemented: "D2",
      dPgF: 0.0009,
    },
    {
      id: 7,
      name: "G7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.54,
      focalLengthMm: 42.76,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "Fluorophosphate UD glass; patent-listed ΔθgF = +0.0279.",
      role: "UD (Ultra-low Dispersion) element; primary apochromatic corrector. Nearly plano-concave meniscus (R₁ ≈ −1398 mm). Thickest element (ct = 10.02 mm).",
      cemented: "D3",
      dPgF: 0.0279,
    },
    {
      id: 8,
      name: "G8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.738,
      vd: 32.26,
      focalLengthMm: -26.19,
      glass: "S-NBH53 (OHARA catalog equivalent to patent 738323; supplier not identified)",
      apd: false,
      apdNote: "",
      role: "Strongest negative element (f = −26.2 mm); paired with G7 in doublet D3 (f = −67.4 mm) for aggressive chromatic correction. Junction Δnd = 0.241.",
      cemented: "D3",
      dPgF: 0.0006,
    },
    {
      id: 9,
      name: "G9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.76385,
      vd: 48.51,
      focalLengthMm: 38.96,
      glass: "S-LAH96 (OHARA catalog equivalent to patent 764485; supplier not identified)",
      apd: false,
      apdNote: "",
      role: "Moderate positive power; residual chromatic and astigmatism correction. Lanthanum crown for favorable dispersion balance.",
      cemented: "D4",
      dPgF: -0.0041,
    },
    {
      id: 10,
      name: "G10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.66565,
      vd: 35.64,
      focalLengthMm: -46.1,
      glass: "H-ZBaF4 catalog equivalent (patent 666356; production supplier unspecified)",
      apd: false,
      apdNote: "",
      role: "Negative component of doublet D4 (f = +204.8 mm); lateral chromatic compensation.",
      cemented: "D4",
      dPgF: -0.0018,
    },
    {
      id: 11,
      name: "G11",
      label: "Element 11",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 38.77,
      glass: "S-LAH58 / TAFD30 class (883408)",
      apd: false,
      apdNote: "",
      role: "Last element of focus unit L1; second ground aspherical surface (S18*) for residual higher-order spherical aberration. High-index biconvex.",
      dPgF: -0.0101,
    },
    {
      id: 12,
      name: "G12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 33.67,
      glass: "S-LAH58 / TAFD30 class (883408)",
      apd: false,
      apdNote: "",
      role: "First element of stationary unit L2; final convergence. Same glass as G11.",
      cemented: "D5",
      dPgF: -0.0101,
    },
    {
      id: 13,
      name: "G13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.59551,
      vd: 39.24,
      focalLengthMm: -40.55,
      glass: "S-TIM8 (OHARA catalog equivalent; production glass unspecified)",
      apd: false,
      apdNote: "",
      role: "Negative component of doublet D5 (f = +136.6 mm).",
      cemented: "D5",
      dPgF: 0.0023,
    },
    {
      id: 14,
      name: "G14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.673,
      vd: 38.15,
      focalLengthMm: -55.64,
      glass: "S-NBH52 (OHARA)",
      apd: false,
      apdNote: "",
      role: "Negative component of rear field-flattening doublet D6 (f = −154.7 mm); Petzval curvature reduction.",
      cemented: "D6",
      dPgF: -0.0044,
    },
    {
      id: 15,
      name: "G15",
      label: "Element 15",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.804,
      vd: 46.58,
      focalLengthMm: 89.08,
      glass: "S-LAH65V / L-LAH65V (OHARA)",
      apd: false,
      apdNote: "",
      role: "Final element; glass-molded aspherical rear surface (S25*) for field-dependent astigmatism/curvature correction. Same glass family as G1.",
      cemented: "D6",
      dPgF: -0.0088,
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    // ── Front Lens Group (LF): G1–G6 ──
    // Cemented doublet D1: G1 + G2
    {
      label: "1A",
      R: 80.11,
      d: 9.67,
      sd: 21.3,
      medium: 1,
      asphere: { K: 0, A4: -1.44652e-6, A6: -1.02693e-9, A8: 1.91678e-12, A10: -3.07794e-15, A12: 2.00476e-18 },
    }, // G1 front (asph)
    { label: "2", R: -68.243, d: 1.64, sd: 21.3, medium: 2 }, // G1→G2 junction
    { label: "3", R: 52.862, d: 0.2, sd: 21.3 }, // G2 rear → air

    // Singlet G3
    { label: "4", R: 42.184, d: 7.47, sd: 19.9, medium: 3 }, // G3 front
    { label: "5", R: 2510.576, d: 0.7, sd: 19.9 }, // G3 rear → air

    // Singlet G4
    { label: "6", R: 99.979, d: 1.6, sd: 18.5, medium: 4 }, // G4 front
    { label: "7", R: 24.508, d: 7.45, sd: 16.0 }, // G4 rear → air (rim meets G5 front near 16.3 mm)

    // Cemented doublet D2: G5 + G6
    { label: "8", R: -101.919, d: 1.34, sd: 16.6, medium: 5 }, // G5 front
    { label: "9", R: 34.799, d: 5.56, sd: 16.6, medium: 6 }, // G5→G6 junction
    { label: "10", R: 516.053, d: 2.44, sd: 16.6 }, // G6 rear → air

    // ── Aperture Stop ──
    { label: "STO", R: "flat", d: 2.58 },

    // ── Rear Lens Group (LR): G7–G15 ──
    // Cemented doublet D3: G7 (UD) + G8
    { label: "12", R: -1398.232, d: 10.02, sd: 16.8, medium: 7 }, // G7 front
    { label: "13", R: -20.985, d: 1.29, sd: 16.8, medium: 8 }, // G7→G8 junction
    { label: "14", R: 251.143, d: 0.44, sd: 16.8 }, // G8 rear → air

    // Cemented doublet D4: G9 + G10
    { label: "15", R: 87.566, d: 7.29, sd: 17.2, medium: 9 }, // G9 front
    { label: "16", R: -43.447, d: 1.28, sd: 17.2, medium: 10 }, // G9→G10 junction
    { label: "17", R: 105.692, d: 1.79, sd: 17.2 }, // G10 rear → air

    // Singlet G11
    {
      label: "18A",
      R: 161.695,
      d: 7.96,
      sd: 18.7,
      medium: 11,
      asphere: { K: 0, A4: -2.17027e-6, A6: 4.00496e-9, A8: -1.90948e-11, A10: 4.86536e-14, A12: -4.89586e-17 },
    }, // G11 front (asph)
    { label: "19", R: -42.423, sd: 18.7 }, // G11 rear → air (VARIABLE)

    // Cemented doublet D5: G12 + G13 (stationary unit L2)
    { label: "20", R: 54.474, d: 8.77, sd: 19.8, medium: 12 }, // G12 front
    { label: "21", R: -60.531, d: 1.54, sd: 19.8, medium: 13 }, // G12→G13 junction
    { label: "22", R: 40.56, d: 7.14, sd: 19.8 }, // G13 rear → air

    // Cemented doublet D6: G14 + G15
    { label: "23", R: -58.17, d: 1.21, sd: 17.5, medium: 14 }, // G14 front
    { label: "24", R: 105.985, d: 5.08, sd: 19.1, medium: 15 }, // G14→G15 junction
    {
      label: "25A",
      R: -216.191,
      d: 14.6,
      sd: 19.1,
      asphere: { K: 0, A4: 3.50064e-6, A6: -5.9867e-10, A8: 1.34319e-11, A10: -2.56798e-14, A12: 2.5993e-17 },
    }, // G15 rear (asph) → air (patent BF 14.60)
  ],

  /* ── Focus ── */
  focus: {
    closeFocusM: 0.4,
    description:
      "Front-group extension focus: L1 (G1–G11 + stop) translates toward object; L2 (G12–G15) stationary. Single variable gap (d19); BFD constant. Ring-type USM.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Variable air spacings ── */
  gaps: { "19": { label: "D19", values: [[1.95, 16.11]] } },

  /* ── Aperture ── */
  aperture: { nominalFNumber: 1.25, fStops: [1.25, 1.4, 1.8, 2, 2.5, 2.8, 4, 5.6, 8, 11, 16], blades: 10 },

  /* ── Group and doublet annotations ── */
  groups: [
    // Patent focus units (FIG. 3 L1/L2 brackets); the optical halves LF (1A–10) and LR (12–25A) are described in prose.
    { text: "L1 (FOCUS)", fromSurface: "1A", toSurface: "19" },
    { text: "L2 (FIXED)", fromSurface: "20", toSurface: "25A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1A", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "12", toSurface: "14" },
    { text: "D4", fromSurface: "15", toSurface: "17" },
    { text: "D5", fromSurface: "20", toSurface: "22" },
    { text: "D6", fromSurface: "23", toSurface: "25A" },
  ],

  layout: { scFill: 0.5, yScFill: 0.38 },

  /* ── Layout tuning ── */
  checks: {
    gapSagFrac: 0.97, // S7/S8 rims nearly touch in FIG. 3; the f/1.25 axial beam needs S7 = 15.61 mm
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
