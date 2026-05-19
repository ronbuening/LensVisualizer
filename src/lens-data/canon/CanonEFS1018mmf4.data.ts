import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Canon EF-S 10-18mm f/4.5-5.6 IS STM         ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2015-31869 A, Numerical Example 1 (Canon Inc.).   ║
 * ║  Negative-lead 4-group zoom for APS-C.                             ║
 * ║  14 elements / 11 groups, 2 aspherical surfaces (S4, S26).         ║
 * ║  Focus: Group 3 (L12, single biconcave) moves image-ward           ║
 * ║         for close focus. STM drive.                                 ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: D10, D26 (zoom only).                         ║
 * ║  Focus variable gaps: D21, D23 (zoom + focus).                     ║
 * ║  No reversing groups; all gaps monotonic across zoom range.         ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING: None — patent prescription matches production    ║
 * ║  focal length range directly.                                      ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS: Estimated from combined marginal + chief  ║
 * ║  ray trace at all 3 zoom positions, taking max SD per surface,     ║
 * ║  +10% mechanical clearance, constrained by sd/|R| < 0.90.          ║
 * ║  Edge thickness verified ≥ 0.3 mm for all 14 elements.            ║
 * ║                                                                    ║
 * ║  NOTE ON CLOSE-FOCUS: Patent provides only infinity-focus data.    ║
 * ║  Close-focus spacings solved via system ABCD matrix at MFD = 0.22m ║
 * ║  for each zoom position. L12 moves image-ward (positive delta),    ║
 * ║  consistent with patent ¶0021.                                     ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus/zoom gaps                   ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-efs-10-18-f4556-is-stm",
  maker: "Canon",
  name: "CANON EF-S 10-18mm f/4.5-5.6 IS STM",
  subtitle: "JP 2015-31869 A Example 1 — Canon / Nakahara",
  specs: ["14 ELEMENTS / 11 GROUPS", "f = 10.30–17.46 mm", "F/4.64–5.71", "2ω = 106.0–76.1°", "2 ASPHERICAL SURFACES"],

  focalLengthMarketing: [10, 18] as [number, number],
  focalLengthDesign: [10.3, 17.46] as [number, number],
  apertureMarketing: 4.5,
  apertureDesign: 4.64,
  lensMounts: ["canon-ef-s"],
  imageFormat: "aps-c",
  patentYear: 2015,
  elementCount: 14,
  groupCount: 11,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: -37.6,
      glass: "S-LAH66 (OHARA)",
      role: "Front diverging element; high-index dense lanthanum flint reduces curvature for given power",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.52996,
      vd: 55.8,
      fl: -80.0,
      glass: "PMo optical plastic (cyclo-olefin polymer)",
      role: "Large-diameter plastic-molded asphere; rear surface corrects field curvature and astigmatism",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: -27.5,
      glass: "S-LAH66 (OHARA)",
      role: "Strongest negative element in Group 1; establishes wide field of view",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.59522,
      vd: 67.7,
      fl: -34.6,
      glass: "S-FPM2 (OHARA)",
      role: "Low-dispersion fluorophosphate crown; minimizes lateral color from front group",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.72047,
      vd: 34.7,
      fl: 27.9,
      glass: "S-NBH8 (OHARA)",
      role: "Sole positive element in Group 1; high-dispersion niobate flint compensates lateral color",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      fl: 160.4,
      glass: "S-FSL5 (OHARA)",
      role: "IS stabilization element (Ls); decenters perpendicular to axis for shake correction",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.3,
      fl: -19.9,
      glass: "TAFD35 (HOYA)",
      cemented: "D1",
      role: "Front element of cemented doublet D1; high-index dense flint",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.60342,
      vd: 38.0,
      fl: 14.5,
      glass: "S-TIM5 (OHARA)",
      cemented: "D1",
      role: "Rear element of doublet D1; cemented interface corrects coma and spherical aberration",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      fl: -10.6,
      glass: "S-LAH55 (OHARA)",
      cemented: "D2",
      role: "Front element of post-stop doublet D2; strong negative for field flattening",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.64769,
      vd: 33.8,
      fl: 14.3,
      glass: "S-TIM22 (OHARA)",
      cemented: "D2",
      role: "Rear element of doublet D2; high-dispersion titanium flint",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 17.3,
      glass: "S-FPL51 (OHARA)",
      apd: "patent",
      apdNote: "UD (Ultra-low Dispersion) element; Canon Camera Museum designation",
      role: "Primary chromatic corrector; symmetric biconvex UD element providing strong positive power with minimal color",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.91082,
      vd: 35.3,
      fl: -26.7,
      glass: "TAFD35 (HOYA)",
      role: "Focus group (LF); single element moves image-ward for close focus. STM driven.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.3,
      fl: -16.8,
      glass: "TAFD35 (HOYA)",
      cemented: "D3",
      role: "Front element of rear doublet D3; high-index dense flint",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: 14.5,
      glass: "S-BAL42 (OHARA)",
      cemented: "D3",
      role: "Rear element of doublet D3; rear asphere corrects residual field aberrations. Barium crown, glass-molded.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    /* ── Group 1: Front negative group (L1–L5, surfaces 1–10) ── */
    { label: "1", R: 55.999, d: 1.2, nd: 1.7725, elemId: 1, sd: 24.4 },
    { label: "2", R: 18.939, d: 0.21, nd: 1.0, elemId: 0, sd: 16.9 },
    { label: "3", R: 18.794, d: 3.0, nd: 1.52996, elemId: 2, sd: 16.7 },
    { label: "4A", R: 12.302, d: 13.97, nd: 1.0, elemId: 0, sd: 10.9 },
    { label: "5", R: 27.078, d: 0.85, nd: 1.7725, elemId: 3, sd: 11.2 },
    { label: "6", R: 11.734, d: 5.86, nd: 1.0, elemId: 0, sd: 8.2 },
    { label: "7", R: -18.556, d: 0.86, nd: 1.59522, elemId: 4, sd: 8.2 },
    { label: "8", R: -193.388, d: 0.15, nd: 1.0, elemId: 0, sd: 9.4 },
    { label: "9", R: 43.637, d: 3.35, nd: 1.72047, elemId: 5, sd: 9.4 },
    { label: "10", R: -36.162, d: 18.12, nd: 1.0, elemId: 0, sd: 9.1 }, // d10 variable (zoom only)

    /* ── Group 2: Main positive group (L6–L11, surfaces 11–21) ── */
    { label: "11", R: -51.134, d: 1.22, nd: 1.48749, elemId: 6, sd: 3.5 },
    { label: "12", R: -31.161, d: 1.29, nd: 1.0, elemId: 0, sd: 3.3 },
    { label: "13", R: 24.67, d: 0.8, nd: 1.91082, elemId: 7, sd: 3.0 }, // D1 front (L7)
    { label: "14", R: 10.275, d: 2.98, nd: 1.60342, elemId: 8, sd: 2.8 }, // D1 junction → L8
    { label: "15", R: -52.144, d: 2.17, nd: 1.0, elemId: 0, sd: 2.3 },
    { label: "STO", R: 1e15, d: 4.04, nd: 1.0, elemId: 0, sd: 1.7 }, // aperture stop
    { label: "17", R: -69.148, d: 0.8, nd: 1.83481, elemId: 9, sd: 2.9 }, // D2 front (L9)
    { label: "18", R: 10.223, d: 3.33, nd: 1.64769, elemId: 10, sd: 3.1 }, // D2 junction → L10
    { label: "19", R: -84.53, d: 0.15, nd: 1.0, elemId: 0, sd: 3.9 },
    { label: "20", R: 16.445, d: 4.22, nd: 1.497, elemId: 11, sd: 3.9 },
    { label: "21", R: -16.445, d: 1.25, nd: 1.0, elemId: 0, sd: 4.7 }, // d21 variable (zoom+focus)

    /* ── Group 3: Focus group (L12, surfaces 22–23) ── */
    { label: "22", R: -43.861, d: 0.7, nd: 1.91082, elemId: 12, sd: 4.9 },
    { label: "23", R: 54.842, d: 3.8, nd: 1.0, elemId: 0, sd: 5.0 }, // d23 variable (zoom+focus)

    /* ── Group 4: Rear positive group (L13+L14, surfaces 24–26A) ── */
    { label: "24", R: 83.184, d: 0.8, nd: 1.91082, elemId: 13, sd: 6.3 }, // D3 front (L13)
    { label: "25", R: 12.879, d: 7.14, nd: 1.58313, elemId: 14, sd: 6.4 }, // D3 junction → L14
    { label: "26A", R: -19.588, d: 35.35, nd: 1.0, elemId: 0, sd: 8.4 }, // BFD; d26 variable (zoom only)
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "4A": {
      K: -4.75949e-1,
      A4: -3.84236e-5,
      A6: -7.6339e-8,
      A8: -6.26237e-10,
      A10: 3.48984e-12,
      A12: -1.12759e-14,
      A14: 0,
    },
    "26A": {
      K: 0,
      A4: 1.25041e-5,
      A6: -1.14292e-7,
      A8: 4.98491e-9,
      A10: -1.03089e-10,
      A12: 7.40509e-13,
      A14: 0,
    },
  },

  /* ── Variable air spacings ──
   *  d10, d26: zoom-only (identical inf/close at each zoom position).
   *  d21, d23: zoom + focus (L12 moves image-ward for close focus).
   *  Close-focus spacings solved via ABCD matrix at MFD = 0.22 m.
   */
  var: {
    "10": [
      [18.12, 18.12],
      [7.58, 7.58],
      [1.64, 1.64],
    ],
    "21": [
      [1.25, 1.53],
      [1.57, 2.01],
      [1.9, 2.54],
    ],
    "23": [
      [3.8, 3.52],
      [3.48, 3.04],
      [3.15, 2.51],
    ],
    "26A": [
      [35.35, 35.35],
      [42.66, 42.66],
      [49.42, 49.42],
    ],
  },

  varLabels: [
    ["10", "D10"],
    ["21", "D21"],
    ["23", "D23"],
    ["26A", "BF"],
  ],

  /* ── Zoom lens fields ── */
  zoomPositions: [10.3, 13.96, 17.46],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (−)", fromSurface: "1", toSurface: "10" },
    { text: "G2 (+)", fromSurface: "11", toSurface: "21" },
    { text: "G3 (−) Focus", fromSurface: "22", toSurface: "23" },
    { text: "G4 (+)", fromSurface: "24", toSurface: "26A" },
  ],

  doublets: [
    { text: "D1", fromSurface: "13", toSurface: "15" },
    { text: "D2", fromSurface: "17", toSurface: "19" },
    { text: "D3", fromSurface: "24", toSurface: "26A" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.22,
  focusDescription:
    "Rear focus: Group 3 (L12, single biconcave) moves image-ward along optical axis. STM stepping motor drive.",

  /* ── Aperture configuration ── */
  nominalFno: [4.5, 5.1, 5.6],
  fstopSeries: [4.5, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.45,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
