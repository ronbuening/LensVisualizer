import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — SIGMA dp0 QUATTRO 14mm f/4                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2016-139087 A Example 2 (Sigma / Kōno, Ogasawara)║
 * ║  Retrofocus wide-angle for APS-C Foveon X3 Quattro sensor.        ║
 * ║  11 elements / 8 groups, 3 aspherical surfaces on 2 lenses.       ║
 * ║  Focus: inner focus — G2 (single FLD element) moves forward.      ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list clear apertures. SDs estimated from        ║
 * ║    combined marginal + chief ray trace at 2ω = 90.90° with ~8%    ║
 * ║    clearance. Front group reduced for expected vignetting.         ║
 * ║    L3e (equi-convex, R = ±18.81 mm) is edge-thickness-limited     ║
 * ║    at sd = 8.8 mm (ET ≈ 0.36 mm).                                 ║
 * ║                                                                    ║
 * ║  NOTE ON FLARE CUT:                                                ║
 * ║    Patent surface 11 (flare cut, d = 1.4753 mm) is absorbed into  ║
 * ║    the air gap following L3b (data-file surface "9").              ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sigma-dp0-quattro-14-f4",
  maker: "Sigma",
  name: "SIGMA dp0 Quattro 14mm f/4",
  subtitle: "JP 2016-139087 A EXAMPLE 2 — SIGMA / KŌNO, OGASAWARA",
  specs: ["11 ELEMENTS / 8 GROUPS", "f ≈ 13.97 mm", "F/4.13", "2ω ≈ 90.9°", "3 ASPHERICAL SURFACES"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 14,
  focalLengthDesign: 13.97,
  apertureMarketing: 4,
  apertureDesign: 4.13,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "aps-c",
  patentYear: 2016,
  elementCount: 11,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1a",
      label: "Element 1",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.46,
      fl: -26.7,
      glass: "S-BAL42 (OHARA)",
      apd: false,
      role: "Front diverging meniscus with double-sided aspherical surfaces for distortion control. Dominant A4 on front flattens peripheral refraction; paraboloidal rear (K = −1) extends usable aperture beyond the sphere's geometric limit.",
    },
    {
      id: 2,
      name: "L1b",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.497,
      vd: 81.6,
      fl: -65.1,
      glass: "S-FPL51 (OHARA) / FCD1 (HOYA)",
      apd: "inferred",
      apdNote: "ED fluorophosphate (SLD); ΔPgF ≈ +0.038. Satisfies conditional (1): νdLA > 70.",
      role: "Second negative meniscus in G1. High-Abbe SLD glass limits lateral chromatic aberration from the front group.",
    },
    {
      id: 3,
      name: "L2a",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.437,
      vd: 95.1,
      fl: -127.2,
      glass: "FCD100 (HOYA)",
      apd: "inferred",
      apdNote: "Super-ED fluoride crown (FLD); near-fluorite dispersion. Low density enables lightweight focus group.",
      role: "Sole element of G2 — inner focus group. Weak negative power; moves forward during close focus. FLD glass ensures focus travel does not disturb chromatic balance.",
    },
    {
      id: 4,
      name: "L3a",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.59282,
      vd: 68.62,
      fl: -24.1,
      glass: "M-TAC80 (HOYA)",
      apd: "inferred",
      apdNote: "Phosphate crown (SLD); positive anomalous partial dispersion.",
      role: "Negative element of first cemented doublet Ja, immediately behind the stop. SLD glass with moderate Abbe number.",
      cemented: "Ja",
    },
    {
      id: 5,
      name: "L3b",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.19,
      fl: 14.8,
      glass: "BSC7 (HOYA)",
      apd: false,
      role: "Positive element of doublet Ja (combined f = +36.8 mm). Standard BK7-class crown. Begins converging the divergent beam from G1/G2.",
      cemented: "Ja",
    },
    {
      id: 6,
      name: "L3c",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.437,
      vd: 95.1,
      fl: 46.6,
      glass: "FCD100 (HOYA)",
      apd: "inferred",
      apdNote:
        "Super-ED fluoride crown (FLD). Chromatically neutral positive power between the two achromatizing doublets.",
      role: "Standalone FLD singlet between doublets Ja and Jb. Continues beam convergence with near-zero chromatic contribution.",
    },
    {
      id: 7,
      name: "L3d",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.72,
      fl: -31.5,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Negative lanthanum dense flint in doublet Jb. Large Δνd = 52.4 against FLD partner L3e drives primary axial color correction.",
      cemented: "Jb",
    },
    {
      id: 8,
      name: "L3e",
      label: "Element 8",
      type: "Biconvex Positive (Equi-Convex)",
      nd: 1.437,
      vd: 95.1,
      fl: 22.4,
      glass: "FCD100 (HOYA)",
      apd: "inferred",
      apdNote: "Super-ED fluoride crown (FLD). Equi-convex form (R = ±18.81 mm) minimizes coma.",
      role: "Positive FLD element of doublet Jb (combined f = +67.1 mm). Symmetric radii reduce off-axis coma and manufacturing sensitivity.",
      cemented: "Jb",
    },
    {
      id: 9,
      name: "L3f",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.437,
      vd: 95.1,
      fl: 26.4,
      glass: "FCD100 (HOYA)",
      apd: "inferred",
      apdNote: "Super-ED fluoride crown (FLD).",
      role: "Positive FLD element of doublet Jc (combined f ≈ −345 mm, near-afocal). Provides field-curvature correction rather than net convergent power.",
      cemented: "Jc",
    },
    {
      id: 10,
      name: "L3g",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: -23.8,
      glass: "TAFD30 (HOYA)",
      apd: false,
      role: "Highest-index glass in the design (nd = 1.883). Negative meniscus in doublet Jc; Δνd = 54.3 with L3f. Second major chromatic correction interface.",
      cemented: "Jc",
    },
    {
      id: 11,
      name: "L3h",
      label: "Element 11",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.8061,
      vd: 40.73,
      fl: -84.4,
      glass: "NBFD13 (HOYA)",
      apd: false,
      role: "Last element before image. Rear aspherical surface provides field-flattening and residual astigmatism correction. Titanium flint; aspherical departure ~0.03 mm suggests polished glass asphere.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ─── G1: front diverging group ───
    { label: "1A", R: 23.0837, d: 2.0, nd: 1.58313, elemId: 1, sd: 15.0 }, // L1a front (asph)
    { label: "2A", R: 9.0102, d: 3.1875, nd: 1.0, elemId: 0, sd: 12.5 }, // L1a rear (asph) → air
    { label: "3", R: 16.1661, d: 1.2, nd: 1.497, elemId: 2, sd: 10.8 }, // L1b front
    { label: "4", R: 10.5125, d: 16.797, nd: 1.0, elemId: 0, sd: 9.4 }, // L1b rear → air (d4, var)

    // ─── G2: inner focus group ───
    { label: "5", R: -200.0, d: 1.0, nd: 1.437, elemId: 3, sd: 5.8 }, // L2a front
    { label: "6", R: 77.0673, d: 4.4772, nd: 1.0, elemId: 0, sd: 5.5 }, // L2a rear → air (d6, var)

    // ─── G3: positive rear group (with stop) ───
    { label: "STO", R: 1e15, d: 2.6974, nd: 1.0, elemId: 0, sd: 1.691 }, // aperture stop

    // Doublet Ja (L3a + L3b)
    { label: "7", R: 33.105, d: 0.8, nd: 1.59282, elemId: 4, sd: 5.5 }, // L3a front
    { label: "8", R: 9.9, d: 3.5521, nd: 1.5168, elemId: 5, sd: 5.8 }, // junction → L3b
    { label: "9", R: -29.6381, d: 4.7753, nd: 1.0, elemId: 0, sd: 6.5 }, // L3b rear → air (incl. 1.4753 mm flare cut gap)

    // L3c singlet
    { label: "10", R: 18.5751, d: 3.1373, nd: 1.437, elemId: 6, sd: 8.5 }, // L3c front
    { label: "11", R: 202.4366, d: 3.3777, nd: 1.0, elemId: 0, sd: 8.5 }, // L3c rear → air

    // Doublet Jb (L3d + L3e)
    { label: "12", R: 68.6065, d: 1.4048, nd: 1.83481, elemId: 7, sd: 8.8 }, // L3d front
    { label: "13", R: 18.8114, d: 4.7258, nd: 1.437, elemId: 8, sd: 8.8 }, // junction → L3e
    { label: "14", R: -18.8114, d: 2.6357, nd: 1.0, elemId: 0, sd: 8.8 }, // L3e rear → air

    // Doublet Jc (L3f + L3g)
    { label: "15", R: 40.1618, d: 4.7212, nd: 1.437, elemId: 9, sd: 9.5 }, // L3f front
    { label: "16", R: -15.614, d: 0.75, nd: 1.883, elemId: 10, sd: 9.0 }, // junction → L3g
    { label: "17", R: -62.2753, d: 2.5693, nd: 1.0, elemId: 0, sd: 9.0 }, // L3g rear → air

    // L3h singlet
    { label: "18", R: -27.7936, d: 1.1, nd: 1.8061, elemId: 11, sd: 9.0 }, // L3h front
    { label: "19A", R: -47.8074, d: 17.6874, nd: 1.0, elemId: 0, sd: 9.0 }, // L3h rear (asph) → BFD
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "1A": {
      K: 0,
      A4: -3.96887e-5,
      A6: 2.9429e-8,
      A8: -5.15347e-11,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "2A": {
      K: -1.0,
      A4: 3.35668e-5,
      A6: -1.00793e-7,
      A8: -1.13985e-9,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "19A": {
      K: 0,
      A4: 4.27783e-5,
      A6: 8.80624e-8,
      A8: 3.92712e-10,
      A10: 2.22145e-12,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (inner focus) ── */
  var: {
    "4": [16.797, 12.9201], // d4: L1b rear → L2a front
    "6": [4.4772, 8.3541], // d6: L2a rear → STO
  },

  varLabels: [
    ["4", "D4"],
    ["6", "D6"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1", fromSurface: "1A", toSurface: "4" },
    { text: "G2", fromSurface: "5", toSurface: "6" },
    { text: "G3", fromSurface: "STO", toSurface: "19A" },
  ],

  doublets: [
    { text: "Ja", fromSurface: "7", toSurface: "9" },
    { text: "Jb", fromSurface: "12", toSurface: "14" },
    { text: "Jc", fromSurface: "15", toSurface: "17" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.2,
  focusDescription:
    "Inner focus — G2 (single FLD biconcave L2a) moves forward toward the object. " +
    "Gap conservation: Δd4 + Δd6 = 0; total track and BFD fixed. " +
    "Patent close focus at 200 mm (object to image); production dp0 Quattro specifies MFD = 18 cm.",

  /* ── Aperture configuration ── */
  nominalFno: 4.0,
  apertureBlades: 7,
  fstopSeries: [4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.48,
  yScFill: 0.36,
} satisfies LensDataInput;

export default LENS_DATA;
