import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON PC NIKKOR 19mm f/4E ED                         ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2017-161685 A, Example 1                         ║
 * ║    (Konica Minolta / Nikon Corporation, published 2017.09.14).     ║
 * ║  Retrofocus ultra-wide-angle perspective control (tilt-shift).     ║
 * ║  18 elements / 13 groups, 3 aspherical surfaces.                  ║
 * ║  Focus: rear-group (Gr2 + stop) moves toward object.              ║
 * ║                                                                    ║
 * ║  NOTE ON EXAMPLE SELECTION:                                        ║
 * ║    Example 1 selected over Example 2 because EX1 yields exactly   ║
 * ║    17 elements in 13 groups (Nikon spec), whereas EX2's cemented  ║
 * ║    triplet (L22+L23+L24) gives 12 groups.  Both examples share    ║
 * ║    identical Gr1 construction; EX1 separates L24 as air-spaced.   ║
 * ║    Nikon markets the lens as "17 elements / 13 groups."           ║
 * ║    Element count: 18 physical pieces (17 marketed — resin L28     ║
 * ║    is counted with glass body L29 as one "element" for marketing).║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Visually adjusted to match the Nikon manufacturer's lens       ║
 * ║    construction diagram.  L12/L13/L14 front-group SDs increased   ║
 * ║    for proportional accuracy; surface 6A (R=13.901) is pinned at  ║
 * ║    12.5 by the 64.2° slope limit.  H1 rear element enlarged to   ║
 * ║    reflect its visual prominence in the diagram.                  ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-pc-nikkor-19mm-f4e-ed",
  maker: "Nikon",
  name: "NIKON PC NIKKOR 19mm f/4E ED",
  subtitle: "JP 2017-161685 A Example 1 — Konica Minolta / Nikon",
  specs: [
    "17 ELEMENTS / 13 GROUPS (18 physical)",
    "f ≈ 19.4 mm",
    "F/4.08 (design) / F/4 (marketed)",
    "2ω ≈ 119.2° (full image circle for ±12 mm shift)",
    "3 ASPHERICAL SURFACES (1 molded glass, 1 composite resin)",
    "3 ED ELEMENTS (S-FPL51)",
  ],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 19,
  focalLengthDesign: 19.37,
  apertureMarketing: 4,
  apertureDesign: 4.08,
  patentYear: 2017,
  elementCount: 17,
  groupCount: 13,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.46,
      fl: -154.5,
      glass: "S-LAL14 (OHARA)",
      apd: false,
      role: "Front negative meniscus — begins diverging the on-axis beam across the 119° field",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.46,
      fl: -105.4,
      glass: "S-LAL14 (OHARA)",
      apd: false,
      role: "Continues beam divergence; same glass as L11 for manufacturing efficiency",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.39,
      fl: -42.9,
      glass: "L-BAL42 (OHARA)",
      apd: false,
      role: "Glass-molded double asphere — height-dependent negative power reduction corrects distortion and field curvature across the ultra-wide field",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.497,
      vd: 81.61,
      fl: -48.7,
      glass: "S-FPL51 (OHARA)",
      apd: false,
      role: "ED negative meniscus — contributes negative power for retrofocus balance while suppressing lateral chromatic aberration",
    },
    {
      id: 5,
      name: "L15",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.64769,
      vd: 33.84,
      fl: +21.6,
      glass: "NBFD3 (HOYA)",
      apd: false,
      cemented: "Ja",
      role: "Front element of coma-control doublet Ja; concave-to-object junction controls residual coma",
    },
    {
      id: 6,
      name: "L16",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.90366,
      vd: 31.32,
      fl: -13.8,
      glass: "S-LAH79 (OHARA)",
      apd: "patent",
      apdNote: "θgf = 0.5947; (0.6425−θgf)/νd = 0.00153 > 0.00150",
      cemented: "Ja",
      role: "Ultra-high-index APD negative — strong negative power in compact form; aids secondary spectrum correction",
    },
    {
      id: 7,
      name: "L17",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.72,
      fl: -62.4,
      glass: "TAFD25 (HOYA)",
      apd: false,
      cemented: "Jb",
      role: "Front element of spherical-aberration-control doublet Jb; convex-to-object junction adjusts residual SA",
    },
    {
      id: 8,
      name: "L18",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.65412,
      vd: 39.68,
      fl: +19.4,
      glass: "S-NBH5 (OHARA)",
      apd: "patent",
      apdNote: "θgf = 0.5737; (0.6425−θgf)/νd = 0.00173 > 0.00150",
      cemented: "Jb",
      role: "APD positive — provides positive power with anomalous partial dispersion for secondary spectrum management",
    },
    {
      id: 9,
      name: "L19",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.64769,
      vd: 33.84,
      fl: +81.3,
      glass: "NBFD3 (HOYA)",
      apd: false,
      role: "Last element of Gr1 — weak positive power begins converging the divergent beam before the stop",
    },
    {
      id: 10,
      name: "L21",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.44,
      fl: +30.3,
      glass: "S-TIM28 (OHARA)",
      apd: false,
      role: "First element of focusing group Gr2; substantial positive power with near-APD dispersion",
    },
    {
      id: 11,
      name: "L22",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.62,
      fl: -11.5,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      cemented: "Jc",
      role: "High-index negative in achromatic doublet Jc",
    },
    {
      id: 12,
      name: "L23",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.15,
      fl: +19.1,
      glass: "S-NSL5 (OHARA)",
      apd: false,
      cemented: "Jc",
      role: "Low-index positive in achromatic doublet Jc; large Δnd at junction enables buried-surface aberration control",
    },
    {
      id: 13,
      name: "L24",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.25,
      fl: -31.7,
      glass: "TAFD55 (HOYA)",
      apd: false,
      role: "Highest-index element (nd = 1.911) — air-spaced negative meniscus providing field correction in Gr2",
    },
    {
      id: 14,
      name: "L25",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: +28.9,
      glass: "S-FPL51 (OHARA)",
      apd: false,
      role: "ED biconvex — strongest individual positive power in Gr2; very low dispersion for axial chromatic correction",
    },
    {
      id: 15,
      name: "L26",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.72,
      fl: -27.1,
      glass: "TAFD25 (HOYA)",
      apd: false,
      cemented: "Jd",
      role: "High-index flint in achromatic doublet Jd; same glass as L17 for inventory efficiency",
    },
    {
      id: 16,
      name: "L27",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: +22.6,
      glass: "S-FPL51 (OHARA)",
      apd: false,
      cemented: "Jd",
      role: "ED biconvex — thick positive element (11 mm) in achromatic doublet Jd; Δνd = 38.89 provides strong chromatic correction",
    },
    {
      id: 17,
      name: "L28",
      label: "Element 17 (resin)",
      type: "Asph. Resin Layer",
      nd: 1.5138,
      vd: 52.97,
      fl: +2191.2,
      glass: "UV-cure aspherical resin",
      apd: false,
      cemented: "H1",
      role: "Thin aspherical resin layer bonded to L29 — corrects field curvature and astigmatism variation during focus travel",
    },
    {
      id: 18,
      name: "L29",
      label: "Element 17 (glass)",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.2,
      fl: -125.6,
      glass: "BSC7 (HOYA)",
      apd: false,
      cemented: "H1",
      role: "Glass body of composite aspherical element — weak negative meniscus as substrate for aspherical resin layer",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 43.971, d: 3.5, nd: 1.6968, elemId: 1, sd: 26.5 },
    { label: "2", R: 30.197, d: 7.13, nd: 1.0, elemId: 0, sd: 24.0 },
    { label: "3", R: 35.045, d: 3.17, nd: 1.6968, elemId: 2, sd: 21.0 },
    { label: "4", R: 22.843, d: 7.0, nd: 1.0, elemId: 0, sd: 20.0 },
    { label: "5A", R: 34.175, d: 3.5, nd: 1.58313, elemId: 3, sd: 16.0 },
    { label: "6A", R: 13.901, d: 9.41, nd: 1.0, elemId: 0, sd: 12.5 },
    { label: "7", R: 160.346, d: 2.0, nd: 1.497, elemId: 4, sd: 13.5 },
    { label: "8", R: 20.956, d: 5.22, nd: 1.0, elemId: 0, sd: 13.0 },
    { label: "9", R: 76.016, d: 8.4, nd: 1.64769, elemId: 5, sd: 11.5 }, // L15 front (Ja)
    { label: "10", R: -16.389, d: 5.29, nd: 1.90366, elemId: 6, sd: 11.0 }, // L15→L16 junction
    { label: "11", R: 60.949, d: 0.76, nd: 1.0, elemId: 0, sd: 11.0 }, // L16 rear → air
    { label: "12", R: 34.641, d: 5.0, nd: 1.83481, elemId: 7, sd: 11.0 }, // L17 front (Jb)
    { label: "13", R: 19.438, d: 6.73, nd: 1.65412, elemId: 8, sd: 10.8 }, // L17→L18 junction
    { label: "14", R: -31.576, d: 0.81, nd: 1.0, elemId: 0, sd: 11.0 }, // L18 rear → air
    { label: "15", R: 31.187, d: 2.25, nd: 1.64769, elemId: 9, sd: 10.8 }, // L19 front
    { label: "16", R: 74.264, d: 6.81, nd: 1.0, elemId: 0, sd: 10.3 }, // L19 rear → air (VARIABLE)
    { label: "STO", R: 1e15, d: 2.72, nd: 1.0, elemId: 0, sd: 7.35 }, // Aperture stop — moves with Gr2
    { label: "18", R: 49.359, d: 3.23, nd: 1.5927, elemId: 10, sd: 8.5 }, // L21 front
    { label: "19", R: -27.494, d: 1.02, nd: 1.0, elemId: 0, sd: 8.6 }, // L21 rear → air
    { label: "20", R: -23.268, d: 1.2, nd: 1.7725, elemId: 11, sd: 9.0 }, // L22 front (Jc)
    { label: "21", R: 14.617, d: 4.9, nd: 1.51742, elemId: 12, sd: 9.0 }, // L22→L23 junction
    { label: "22", R: -27.0, d: 1.09, nd: 1.0, elemId: 0, sd: 9.0 }, // L23 rear → air
    { label: "23", R: -25.008, d: 1.0, nd: 1.91082, elemId: 13, sd: 9.5 }, // L24 front
    { label: "24", R: -188.788, d: 0.37, nd: 1.0, elemId: 0, sd: 9.5 }, // L24 rear → air
    { label: "25", R: 35.526, d: 5.51, nd: 1.497, elemId: 14, sd: 10.0 }, // L25 front
    { label: "26", R: -22.931, d: 0.15, nd: 1.0, elemId: 0, sd: 10.5 }, // L25 rear → air
    { label: "27", R: 112.277, d: 1.2, nd: 1.83481, elemId: 15, sd: 11.0 }, // L26 front (Jd)
    { label: "28", R: 18.718, d: 11.0, nd: 1.497, elemId: 16, sd: 11.5 }, // L26→L27 junction
    { label: "29", R: -22.556, d: 0.15, nd: 1.0, elemId: 0, sd: 12.0 }, // L27 rear → air
    { label: "30A", R: -64.378, d: 0.1, nd: 1.5138, elemId: 17, sd: 13.5 }, // L28 front (asph, resin)
    { label: "31", R: -60.928, d: 1.9, nd: 1.5168, elemId: 18, sd: 13.5 }, // L28→L29 junction
    { label: "32", R: -1000.0, d: 56.38, nd: 1.0, elemId: 0, sd: 13.5 }, // L29 rear → air (BFD, VARIABLE)
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "5A": {
      K: 1.1933,
      A4: 1.3754e-5,
      A6: -6.3757e-8,
      A8: 9.303e-11,
      A10: -5.9263e-14,
      A12: 5.6844e-17,
      A14: -1.9087e-19,
    },
    "6A": {
      K: -0.42274,
      A4: -1.1347e-6,
      A6: -6.8233e-8,
      A8: -6.9108e-10,
      A10: 1.6037e-12,
      A12: 2.0146e-15,
      A14: -1.6393e-17,
    },
    "30A": {
      K: 0,
      A4: -1.2685e-5,
      A6: 1.5258e-8,
      A8: -1.6714e-10,
      A10: 1.1054e-12,
      A12: -2.1127e-15,
      A14: 0,
    },
  },

  /* ── Variable air spacings (focus mechanism) ──
   *  Rear-group focus: Gr2 (including stop) moves toward object.
   *  Gr1 fixed. Two variable gaps: Gr1→stop spacing and BFD.
   *  Focus travel: 3.67 mm (Gr2 advances toward object at close focus).
   */
  var: {
    "16": [6.81, 3.14], // L19 rear → stop: closes as Gr2 advances
    "32": [56.38, 60.01], // BFD: increases as Gr2 advances
  },

  varLabels: [
    ["16", "D16"],
    ["32", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "Gr1 (+) FIXED", fromSurface: "1", toSurface: "16" },
    { text: "Gr2 (+) FOCUS", fromSurface: "18", toSurface: "32" },
  ],

  doublets: [
    { text: "Ja", fromSurface: "9", toSurface: "11" },
    { text: "Jb", fromSurface: "12", toSurface: "14" },
    { text: "Jc", fromSurface: "20", toSurface: "22" },
    { text: "Jd", fromSurface: "27", toSurface: "29" },
    { text: "H1", fromSurface: "30A", toSurface: "32" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.25,
  focusDescription:
    "Rear-group focus: Gr2 and aperture stop translate axially toward object (3.67 mm travel). Gr1 remains fixed relative to image plane.",

  /* ── Aperture configuration ── */
  nominalFno: 4,
  fstopSeries: [4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22, 32],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.28,
} satisfies LensDataInput;

export default LENS_DATA;
