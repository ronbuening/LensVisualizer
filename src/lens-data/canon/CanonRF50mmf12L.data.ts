import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2019/0265441 A1, Numerical Data 2, PDF pp.16–17; Figure3 PDF4/sheet3.
 * Source R/d, three aspheres, d19 focus travel and all15 d-line pairs remain literal.
 * Figure rims are estimates (native300ppi, about0.0753mm/pixel), not published clear apertures.
 * S7 clear16.0 and S23 clear17.5 preserve existing gap constraints. Native outer
 * shoulder trials18.5/19.1 fail those guards; neither a bonded land nor a cut is invented.
 * Existing gapSagFrac.97 is retained, never relaxed in this review.
 * All15 catalog curves are qualified spectral proxies; supplier, melt, chemistry and production
 * process remain unresolved. No extra resin, cement or rear plate is dimensioned.
 * Fifteen legacy dPgF values attributed to absent grantUS10838201B2 are preserved in analysis
 * as unverified provenance, but removed from active tracing: this selected A1 prints none.
 * Source aperture is f/1.25. Source focus endpoints are published; interpolation is qualified.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-rf-50-f12-l",
  maker: "Canon",
  name: "CANON RF 50mm f/1.2 L USM",
  subtitle: "US 2019/0265441 A1, Numerical Data 2 — production correlation",

  catalog: {
    lensMounts: ["canon-rf"],
    imageFormat: "135-full-frame",
    specs: [
      "15 ELEMENTS / 9 GROUPS",
      "f ≈ 51.1 mm (marketed 50 mm)",
      "F/1.25 (marketed F/1.2)",
      "2ω ≈ 45.9°",
      "3 ASPHERICAL SURFACES",
      "ONE LOW-DISPERSION SOURCE MEDIUM; PROXY APD INFERRED",
    ],
    elementCount: 15,
    groupCount: 9,
    /* ── Metadata ── */
    focalLengthMm: { marketing: 50, design: 51.1 },
    fNumber: { marketing: 1.2, design: 1.25 },
  },

  source: {
    patentNumber: "US 2019/0265441 A1",
    example: { label: "Numerical Data 2", id: "2" },
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
      indexReference: "d",
      indexReferenceNote:
        "US 2019/0265441 A1 ¶0068, PDF15/printed5 defines each material index/Abbe at d; Numerical Data2 PDF16–17. No numerical C/F/g indices or partial dispersion is printed in this application.",
      vd: 46.58,
      focalLengthMm: 47.21,
      glass: "S-LAH65V (OHARA compatible catalog proxy; supplier/melt unspecified)",
      apd: false,
      apdNote: "",
      role: "Front positive element (Lp); primary beam convergence. Aspherical front surface for zonal spherical aberration correction at f/1.2.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "G2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.68893,
      indexReference: "d",
      indexReferenceNote:
        "US 2019/0265441 A1 ¶0068, PDF15/printed5 defines each material index/Abbe at d; Numerical Data2 PDF16–17. No numerical C/F/g indices or partial dispersion is printed in this application.",
      vd: 31.07,
      focalLengthMm: -43.0,
      glass: "S-TIM28 (OHARA compatible catalog proxy; supplier/melt unspecified)",
      apd: false,
      apdNote: "",
      role: "Negative component of front doublet D1; chromatic correction against G1. Doublet D1 is near-afocal (f ≈ −1810 mm).",
      cemented: "D1",
    },
    {
      id: 3,
      name: "G3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 2.001,
      indexReference: "d",
      indexReferenceNote:
        "US 2019/0265441 A1 ¶0068, PDF15/printed5 defines each material index/Abbe at d; Numerical Data2 PDF16–17. No numerical C/F/g indices or partial dispersion is printed in this application.",
      vd: 29.13,
      focalLengthMm: 42.8,
      glass: "S-LAH99 (OHARA compatible catalog proxy; source nd/vd pair, supplier/melt unspecified)",
      apd: false,
      apdNote:
        "No partial dispersion is printed in the selected application. Legacy family-derived +0.0050 is preserved as unverified provenance in analysis, not active tracing.",
      role: "Primary converging element; ultra-high refractive index enables strong power with moderate curvature. Near-plano rear surface (R₂ ≈ 2511 mm).",
    },
    {
      id: 4,
      name: "G4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.65412,
      indexReference: "d",
      indexReferenceNote:
        "US 2019/0265441 A1 ¶0068, PDF15/printed5 defines each material index/Abbe at d; Numerical Data2 PDF16–17. No numerical C/F/g indices or partial dispersion is printed in this application.",
      vd: 39.68,
      focalLengthMm: -50.05,
      glass: "S-NBH5 (OHARA compatible catalog proxy; supplier/melt unspecified)",
      apd: false,
      apdNote: "",
      role: "Spherical aberration corrector for G3; steep meniscus form (concave toward image).",
    },
    {
      id: 5,
      name: "G5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.66565,
      indexReference: "d",
      indexReferenceNote:
        "US 2019/0265441 A1 ¶0068, PDF15/printed5 defines each material index/Abbe at d; Numerical Data2 PDF16–17. No numerical C/F/g indices or partial dispersion is printed in this application.",
      vd: 35.64,
      focalLengthMm: -38.82,
      glass: "H-ZBaF4 (CDGM nearest-coordinate spectral proxy; source pair retained, supplier/melt unspecified)",
      apd: false,
      apdNote: "",
      role: "Negative lens Ln (patent conditional expr.); final spherical aberration correction before stop. fLn/Dns = −4.156.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "G6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.95375,
      indexReference: "d",
      indexReferenceNote:
        "US 2019/0265441 A1 ¶0068, PDF15/printed5 defines each material index/Abbe at d; Numerical Data2 PDF16–17. No numerical C/F/g indices or partial dispersion is printed in this application.",
      vd: 32.32,
      focalLengthMm: 38.91,
      glass: "S-LAH98 (OHARA compatible catalog proxy; source nd/vd pair, supplier/melt unspecified)",
      apd: false,
      apdNote: "",
      role: "Ultra-high-index positive in near-afocal doublet D2 (f ≈ −17,500 mm); Petzval-reducing pair with G5. Near-plano rear (R₂ ≈ 516 mm).",
      cemented: "D2",
    },
    {
      id: 7,
      name: "G7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.497,
      indexReference: "d",
      indexReferenceNote:
        "US 2019/0265441 A1 ¶0068, PDF15/printed5 defines each material index/Abbe at d; Numerical Data2 PDF16–17. No numerical C/F/g indices or partial dispersion is printed in this application.",
      vd: 81.54,
      focalLengthMm: 42.76,
      glass: "S-FPL51 (OHARA compatible catalog proxy; supplier/melt unspecified)",
      apd: "inferred",
      apdNote:
        "APD is inferred from the compatible low-dispersion catalog curve, not stated for this source medium. The application gives nd=1.49700, vd=81.54; neither chemistry nor supplier is identified.",
      role: "Low-dispersion element from its printed Abbe number; catalog APD inference only. Nearly plano-concave meniscus (R₁ ≈ −1398 mm). Thickest element (ct = 10.02 mm).",
      cemented: "D3",
    },
    {
      id: 8,
      name: "G8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.738,
      indexReference: "d",
      indexReferenceNote:
        "US 2019/0265441 A1 ¶0068, PDF15/printed5 defines each material index/Abbe at d; Numerical Data2 PDF16–17. No numerical C/F/g indices or partial dispersion is printed in this application.",
      vd: 32.26,
      focalLengthMm: -26.19,
      glass: "S-NBH53 (OHARA compatible catalog proxy; source nd/vd pair, supplier/melt unspecified)",
      apd: false,
      apdNote: "",
      role: "Strongest negative element (f = −26.2 mm); paired with G7 in doublet D3 (f = −67.4 mm) for aggressive chromatic correction. Junction Δnd = 0.241.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "G9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.76385,
      indexReference: "d",
      indexReferenceNote:
        "US 2019/0265441 A1 ¶0068, PDF15/printed5 defines each material index/Abbe at d; Numerical Data2 PDF16–17. No numerical C/F/g indices or partial dispersion is printed in this application.",
      vd: 48.51,
      focalLengthMm: 38.96,
      glass: "S-LAH96 (OHARA compatible catalog proxy; source nd/vd pair, supplier/melt unspecified)",
      apd: false,
      apdNote: "",
      role: "Moderate positive power; residual chromatic and astigmatism correction. Chemical family is not identified by the printed pair.",
      cemented: "D4",
    },
    {
      id: 10,
      name: "G10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.66565,
      indexReference: "d",
      indexReferenceNote:
        "US 2019/0265441 A1 ¶0068, PDF15/printed5 defines each material index/Abbe at d; Numerical Data2 PDF16–17. No numerical C/F/g indices or partial dispersion is printed in this application.",
      vd: 35.64,
      focalLengthMm: -46.1,
      glass: "H-ZBaF4 (CDGM nearest-coordinate spectral proxy; source pair retained, supplier/melt unspecified)",
      apd: false,
      apdNote: "",
      role: "Negative component of doublet D4 (f = +204.8 mm); lateral chromatic compensation.",
      cemented: "D4",
    },
    {
      id: 11,
      name: "G11",
      label: "Element 11",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.883,
      indexReference: "d",
      indexReferenceNote:
        "US 2019/0265441 A1 ¶0068, PDF15/printed5 defines each material index/Abbe at d; Numerical Data2 PDF16–17. No numerical C/F/g indices or partial dispersion is printed in this application.",
      vd: 40.8,
      focalLengthMm: 38.77,
      glass: "S-LAH58 / TAFD30 (compatible catalog proxies; supplier/melt unspecified)",
      apd: false,
      apdNote: "",
      role: "Last element of focus unit L1; second aspherical surface (S18*) for residual higher-order spherical aberration. High-index biconvex.",
    },
    {
      id: 12,
      name: "G12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.883,
      indexReference: "d",
      indexReferenceNote:
        "US 2019/0265441 A1 ¶0068, PDF15/printed5 defines each material index/Abbe at d; Numerical Data2 PDF16–17. No numerical C/F/g indices or partial dispersion is printed in this application.",
      vd: 40.8,
      focalLengthMm: 33.67,
      glass: "S-LAH58 / TAFD30 (compatible catalog proxies; supplier/melt unspecified)",
      apd: false,
      apdNote: "",
      role: "First element of stationary unit L2; final convergence. Same glass as G11.",
      cemented: "D5",
    },
    {
      id: 13,
      name: "G13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.59551,
      indexReference: "d",
      indexReferenceNote:
        "US 2019/0265441 A1 ¶0068, PDF15/printed5 defines each material index/Abbe at d; Numerical Data2 PDF16–17. No numerical C/F/g indices or partial dispersion is printed in this application.",
      vd: 39.24,
      focalLengthMm: -40.55,
      glass: "S-TIM8 (OHARA compatible catalog proxy; supplier/melt unspecified)",
      apd: false,
      apdNote: "",
      role: "Negative component of doublet D5 (f = +136.6 mm).",
      cemented: "D5",
    },
    {
      id: 14,
      name: "G14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.673,
      indexReference: "d",
      indexReferenceNote:
        "US 2019/0265441 A1 ¶0068, PDF15/printed5 defines each material index/Abbe at d; Numerical Data2 PDF16–17. No numerical C/F/g indices or partial dispersion is printed in this application.",
      vd: 38.15,
      focalLengthMm: -55.64,
      glass: "S-NBH52 (OHARA compatible catalog proxy; supplier/melt unspecified)",
      apd: false,
      apdNote: "",
      role: "Negative component of rear field-flattening doublet D6 (f = −154.7 mm); Petzval curvature reduction.",
      cemented: "D6",
    },
    {
      id: 15,
      name: "G15",
      label: "Element 15",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.804,
      indexReference: "d",
      indexReferenceNote:
        "US 2019/0265441 A1 ¶0068, PDF15/printed5 defines each material index/Abbe at d; Numerical Data2 PDF16–17. No numerical C/F/g indices or partial dispersion is printed in this application.",
      vd: 46.58,
      focalLengthMm: 89.08,
      glass: "S-LAH65V / L-LAH65V (OHARA compatible catalog proxies; supplier/melt unspecified)",
      apd: false,
      apdNote: "",
      role: "Final element; aspherical rear surface (S25*) for field-dependent astigmatism/curvature correction. Same glass family as G1.",
      cemented: "D6",
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
      asphere: {
        K: 0,
        A4: -1.44652e-6,
        A6: -1.02693e-9,
        A8: 1.91678e-12,
        A10: -3.07794e-15,
        A12: 2.00476e-18,
      },
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
      asphere: {
        K: 0,
        A4: -2.17027e-6,
        A6: 4.00496e-9,
        A8: -1.90948e-11,
        A10: 4.86536e-14,
        A12: -4.89586e-17,
      },
    }, // G11 front (asph)
    { label: "19", R: -42.423, sd: 18.7 }, // G11 rear → air (VARIABLE)

    // Cemented doublet D5: G12 + G13 (stationary unit L2)
    { label: "20", R: 54.474, d: 8.77, sd: 19.8, medium: 12 }, // G12 front
    { label: "21", R: -60.531, d: 1.54, sd: 19.8, medium: 13 }, // G12→G13 junction
    { label: "22", R: 40.56, d: 7.14, sd: 19.8 }, // G13 rear → air

    // Cemented doublet D6: G14 + G15
    {
      label: "23",
      R: -58.17,
      d: 1.21,
      sd: 17.5,
      medium: 14,
    }, // G14 front
    { label: "24", R: 105.985, d: 5.08, sd: 19.1, medium: 15 }, // G14→G15 junction
    {
      label: "25A",
      R: -216.191,
      d: 14.6,
      sd: 19.1,
      asphere: {
        K: 0,
        A4: 3.50064e-6,
        A6: -5.9867e-10,
        A8: 1.34319e-11,
        A10: -2.56798e-14,
        A12: 2.5993e-17,
      },
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
  aperture: {
    nominalFNumber: 1.25,
    fStops: [1.25, 1.4, 1.8, 2, 2.5, 2.8, 4, 5.6, 8, 11, 16],
    blades: 10,
  },

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
