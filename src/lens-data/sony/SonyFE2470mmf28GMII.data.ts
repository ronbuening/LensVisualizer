import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Sony FE 24-70mm f/2.8 GM II                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2023/181666 A1, Example 4 (Sony / Maruyama).      ║
 * ║  7-group constant-aperture zoom (positive-lead), f/2.91 design.    ║
 * ║  20 elements / 15 groups, 8 aspherical surfaces on 5 elements.     ║
 * ║  Focus: dual floating inner focus (Gr5 negative, Gr6 positive).    ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: d5, d14, d20 (zoom only).                    ║
 * ║  Focus variable gaps: d29, d31, d33 (zoom + focus).               ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent Table 16 publishes φi (full clear aperture diameter)     ║
 * ║    for every optical surface. Semi-diameters are φi / 2,           ║
 * ║    transcribed directly. No estimation was required.               ║
 * ║                                                                    ║
 * ║  NOTE ON PATENT SURFACE 21:                                        ║
 * ║    Patent surface 21 (R = ∞, d = −1.10 mm) is a non-optical        ║
 * ║    variable-diameter flare cutter at the entrance to Gr4. It is    ║
 * ║    omitted from the sequential optical path; the −1.10 mm offset   ║
 * ║    is folded into d20 below.                                       ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus/zoom gaps                   ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sony-fe-24-70mm-f28-gm-ii",
  maker: "Sony",
  name: "SONY FE 24-70mm f/2.8 GM II",
  subtitle: "WO 2023/181666 A1 EXAMPLE 4 — SONY / MARUYAMA",
  specs: [
    "20 ELEMENTS / 15 GROUPS",
    "f = 24.72–67.90 mm",
    "F/2.91 (constant)",
    "2ω = 82.36°–35.35°",
    "8 ASPHERICAL SURFACES",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: [24, 70] as [number, number],
  focalLengthDesign: [24.72, 67.9] as [number, number],
  apertureMarketing: 2.8,
  apertureDesign: 2.91,
  lensMounts: ["sony-fe"],
  imageFormat: "135-full-frame" as const,
  patentYear: 2023,
  elementCount: 20,
  groupCount: 15,

  /* ── Elements ── */
  elements: [
    /* ── Gr1: Front collector (f = +112.87 mm) ── */
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.86966,
      vd: 20.0,
      fl: -379.3,
      glass: "Dense flint (870/200, uncertain — no OHARA catalog match)",
      apd: false as const,
      role: "L1i / L1n — ultra-high-dispersion front negative; chromatic lever for axial color",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.4,
      fl: 246.1,
      glass: "S-PHM52 (OHARA)",
      apd: "inferred" as const,
      apdNote: "L1p — satisfies condition (7), ΔPgF > 0.005; ED-class phosphate crown",
      role: "L1p — ED achromatizing partner to L11; secondary-spectrum corrector",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.76385,
      vd: 48.5,
      fl: 134.5,
      glass: "Lanthanum crown (764/485, uncertain — no exact OHARA match)",
      apd: false as const,
      role: "Dominant positive power carrier of Gr1",
    },
    /* ── Gr2: Negative variator (f = −20.20 mm) ── */
    {
      id: 4,
      name: "L21",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.72916,
      vd: 54.7,
      fl: -34.0,
      glass: "S-LAL18 (OHARA)",
      apd: false as const,
      role: "First negative diverging element of variator",
    },
    {
      id: 5,
      name: "L22",
      label: "Element 5",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.77002,
      vd: 49.4,
      fl: -83.9,
      glass: "770494 — lanthanum crown (patent nd=1.77002, nu_d=49.4)",
      apd: false as const,
      role: "Aspherical corrector plate within variator; coma and astigmatism control",
    },
    {
      id: 6,
      name: "L23",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.63854,
      vd: 55.4,
      fl: -31.3,
      glass: "Crown (639/554, uncertain — no exact OHARA match)",
      apd: false as const,
      role: "Achromatizing partner to L24; variator chromatic corrector",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L24",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 2.00069,
      vd: 25.5,
      fl: 27.7,
      glass: "S-LAH79 (OHARA)",
      apd: false as const,
      role: "L2p — ultra-high-index compact positive; satisfies condition (6), nd > 1.955",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L25",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.618,
      vd: 63.4,
      fl: -166.7,
      glass: "S-PHM52 (OHARA)",
      apd: false as const,
      role: "Weak negative at rear of variator; exit-angle management",
    },
    /* ── Gr3: First middle-group relay (f = +63.87 mm) ── */
    {
      id: 9,
      name: "L31",
      label: "Element 9",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.85108,
      vd: 40.1,
      fl: 57.8,
      glass: "S-LAH89 (OHARA)",
      apd: false as const,
      role: "Lmp_asp — aspherical positive just after stop; spherical aberration corrector (inferred XA element)",
    },
    {
      id: 10,
      name: "L32",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.437,
      vd: 95.1,
      fl: 69.9,
      glass: "FCD100 (HOYA)",
      apd: "patent" as const,
      apdNote: "Lmp — satisfies condition (9), ΔPgF > 0.045; Super ED fluorophosphate",
      role: "Lmp — Super ED chromatic corrector; secondary-spectrum control at the stop",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L33",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      fl: -58.2,
      glass: "S-LAH66 (OHARA)",
      apd: false as const,
      role: "Achromatizing flint partner to L32",
      cemented: "D3",
    },
    /* ── Gr4: Second middle-group relay (f = +26.64 mm) ── */
    {
      id: 12,
      name: "L41",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.1,
      fl: -52.6,
      glass: "S-LAH99 (OHARA)",
      apd: false as const,
      role: "Ultra-high-index flint; junction index contrast Δnd = 0.504 for achromatization",
      cemented: "D4a",
    },
    {
      id: 13,
      name: "L42",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 30.0,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred" as const,
      apdNote: "ED-class fluorophosphate; ΔPgF ≈ +0.038",
      role: "ED positive crown; workhorse secondary-spectrum corrector",
      cemented: "D4a",
    },
    {
      id: 14,
      name: "L43",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.437,
      vd: 95.1,
      fl: 72.7,
      glass: "FCD100 (HOYA)",
      apd: "patent" as const,
      apdNote: "Lmp — satisfies condition (9), ΔPgF > 0.045; Super ED fluorophosphate",
      role: "Lmp — second Super ED element; secondary-spectrum control in power relay",
      cemented: "D4b",
    },
    {
      id: 15,
      name: "L44",
      label: "Element 15",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 33.3,
      fl: -23.8,
      glass: "Dense flint (806/333, uncertain — no exact OHARA match)",
      apd: false as const,
      role: "Flint partner to L43; Petzval sum corrector within Gr4",
      cemented: "D4b",
    },
    {
      id: 16,
      name: "L45",
      label: "Element 16",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.85108,
      vd: 40.1,
      fl: 19.2,
      glass: "S-LAH89 (OHARA)",
      apd: false as const,
      role: "Strongest single element (f = +19.2 mm); heavily aspherized power carrier (inferred XA element)",
    },
    /* ── Gr5: Negative focus group, Grrn (f = −37.94 mm) ── */
    {
      id: 17,
      name: "L51",
      label: "Element 17",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.85155,
      vd: 40.1,
      fl: -37.9,
      glass: "S-LAH89 class (OHARA)",
      apd: false as const,
      role: "Grrn — moving negative focus singlet; dual-asph maintains correction across focus travel",
    },
    /* ── Gr6: Positive focus group, Grrp (f = +134.37 mm) ── */
    {
      id: 18,
      name: "L61",
      label: "Element 18",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.61875,
      vd: 63.7,
      fl: 134.4,
      glass: "S-PHM52 class (OHARA)",
      apd: false as const,
      role: "Grrp — moving positive focus singlet; aspherical close-focus SA corrector",
    },
    /* ── Gr7: Fixed rear group (f = −169.85 mm) ── */
    {
      id: 19,
      name: "L71",
      label: "Element 19",
      type: "Positive Meniscus",
      nd: 1.94595,
      vd: 18.0,
      fl: 56.5,
      glass: "FDS18 (HOYA)",
      apd: false as const,
      role: "Ultra-high-dispersion flint; lateral chromatic aberration lever",
    },
    {
      id: 20,
      name: "L72",
      label: "Element 20",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.2,
      fl: -40.5,
      glass: "Lanthanum dense flint (911/352, uncertain — no exact OHARA match)",
      apd: false as const,
      role: "Lrr — field-correcting rear element; satisfies condition (10), shape factor ≈ 1.04",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    /* ── Gr1 ── */
    { label: "1", R: 472.0, d: 2.1, nd: 1.86966, elemId: 1, sd: 34.4 },
    { label: "2", R: 193.776, d: 4.97, nd: 1.618, elemId: 2, sd: 33.37 }, // junction L11→L12
    { label: "3", R: -700.198, d: 0.25, nd: 1.0, elemId: 0, sd: 32.99 },
    { label: "4", R: 56.29, d: 5.6, nd: 1.76385, elemId: 3, sd: 28.28 },
    { label: "5", R: 119.15, d: 0.8, nd: 1.0, elemId: 0, sd: 27.6 }, // d5 zoom variable
    /* ── Gr2 ── */
    { label: "6", R: 63.19, d: 1.35, nd: 1.72916, elemId: 4, sd: 19.87 },
    { label: "7", R: 17.636, d: 8.8, nd: 1.0, elemId: 0, sd: 14.56 },
    { label: "8A", R: 306.998, d: 1.0, nd: 1.77002, elemId: 5, sd: 13.7 },
    { label: "9A", R: 53.285, d: 2.32, nd: 1.0, elemId: 0, sd: 12.94 },
    { label: "10", R: -142.616, d: 0.95, nd: 1.63854, elemId: 6, sd: 12.85 },
    { label: "11", R: 23.272, d: 4.15, nd: 2.00069, elemId: 7, sd: 11.9 }, // junction L23→L24
    { label: "12", R: 131.284, d: 4.28, nd: 1.0, elemId: 0, sd: 11.53 },
    { label: "13", R: -29.707, d: 0.9, nd: 1.618, elemId: 8, sd: 10.7 },
    { label: "14", R: -42.228, d: 16.48, nd: 1.0, elemId: 0, sd: 11.08 }, // d14 zoom variable
    /* ── Gr3 (STO + L31–L33) ── */
    { label: "STO", R: 1e15, d: 0.71, nd: 1.0, elemId: 0, sd: 11.93 },
    { label: "16A", R: 39.77, d: 2.95, nd: 1.85108, elemId: 9, sd: 12.68 },
    { label: "17", R: 200.0, d: 0.2, nd: 1.0, elemId: 0, sd: 12.69 },
    { label: "18", R: 49.057, d: 4.2, nd: 1.437, elemId: 10, sd: 12.79 },
    { label: "19", R: -78.843, d: 0.9, nd: 1.7725, elemId: 11, sd: 12.74 }, // junction L32→L33
    { label: "20", R: 105.182, d: 7.27, nd: 1.0, elemId: 0, sd: 12.74 }, // d20 zoom variable, adjusted past omitted flare cutter
    /* ── Gr4 (flare cutter + L41–L45) ── */
    { label: "22", R: 29.509, d: 0.9, nd: 2.001, elemId: 12, sd: 13.05 },
    { label: "23", R: 18.62, d: 8.1, nd: 1.497, elemId: 13, sd: 12.53 }, // junction L41→L42
    { label: "24", R: -63.752, d: 0.2, nd: 1.0, elemId: 0, sd: 12.59 },
    { label: "25", R: -152.92, d: 4.17, nd: 1.437, elemId: 14, sd: 12.54 },
    { label: "26", R: -26.513, d: 0.9, nd: 1.8061, elemId: 15, sd: 12.52 }, // junction L43→L44
    { label: "27", R: 70.0, d: 0.3, nd: 1.0, elemId: 0, sd: 13.04 },
    { label: "28A", R: 34.667, d: 7.26, nd: 1.85108, elemId: 16, sd: 13.51 },
    { label: "29A", R: -28.064, d: 4.76, nd: 1.0, elemId: 0, sd: 13.6 }, // d29 focus variable
    /* ── Gr5 ── */
    { label: "30A", R: 116.671, d: 0.9, nd: 1.85155, elemId: 17, sd: 12.99 },
    { label: "31A", R: 25.211, d: 7.22, nd: 1.0, elemId: 0, sd: 12.65 }, // d31 focus variable
    /* ── Gr6 ── */
    { label: "32A", R: 43.858, d: 2.93, nd: 1.61875, elemId: 18, sd: 15.0 },
    { label: "33", R: 90.456, d: 4.3, nd: 1.0, elemId: 0, sd: 15.07 }, // d33 focus variable
    /* ── Gr7 ── */
    { label: "34", R: -795.908, d: 4.18, nd: 1.94595, elemId: 19, sd: 17.0 },
    { label: "35", R: -50.24, d: 2.7, nd: 1.0, elemId: 0, sd: 17.1 },
    { label: "36", R: -36.09, d: 1.2, nd: 1.91082, elemId: 20, sd: 16.74 },
    { label: "37", R: -1674.853, d: 15.82, nd: 1.0, elemId: 0, sd: 17.47 }, // BFD (constant)
  ],

  /* ── Aspherical coefficients (Table 19) ──
   *  All K = 0 (spherical base); polynomial terms define all aspherical departure.
   */
  asph: {
    "8A": {
      K: 0,
      A4: -5.14944e-6,
      A6: 4.60809e-8,
      A8: -2.89959e-10,
      A10: 9.30686e-13,
      A12: -1.60526e-15,
      A14: 1.65686e-18,
    },
    "9A": {
      K: 0,
      A4: -5.17976e-6,
      A6: 4.12989e-8,
      A8: -2.25658e-10,
      A10: 4.58861e-13,
      A12: 0,
      A14: 0,
    },
    "16A": {
      K: 0,
      A4: -3.1333e-6,
      A6: -7.34511e-9,
      A8: 1.28659e-11,
      A10: -1.01547e-13,
      A12: 0,
      A14: 0,
    },
    "28A": {
      K: 0,
      A4: -1.46138e-5,
      A6: -2.52878e-9,
      A8: -4.34645e-12,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "29A": {
      K: 0,
      A4: 1.15716e-5,
      A6: -3.47243e-8,
      A8: 6.88354e-11,
      A10: -1.46572e-13,
      A12: 0,
      A14: 0,
    },
    "30A": {
      K: 0,
      A4: 9.06943e-6,
      A6: -1.21442e-8,
      A8: -3.81611e-11,
      A10: 4.34214e-14,
      A12: 0,
      A14: 0,
    },
    "31A": {
      K: 0,
      A4: 7.537e-6,
      A6: 1.15392e-8,
      A8: -8.24959e-11,
      A10: -1.74804e-13,
      A12: 0,
      A14: 0,
    },
    "32A": {
      K: 0,
      A4: 4.16599e-6,
      A6: -3.88365e-9,
      A8: 2.4632e-11,
      A10: -4.90978e-14,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (zoom + focus) ──
   *  3 zoom positions: [24.72, 41.46, 67.90] mm
   *  Each value: [[d_wide_inf, d_wide_close], [d_mid_inf, d_mid_close], [d_tele_inf, d_tele_close]]
   *
   *  d5, d14, d20: zoom-only (identical inf/close values)
   *  d29, d31, d33: zoom + focus (Gr5, Gr5–Gr6, Gr6–Gr7 gaps)
   */
  var: {
    "5": [
      [0.8, 0.8],
      [15.67, 15.67],
      [28.87, 28.87],
    ],
    "14": [
      [16.48, 16.48],
      [7.18, 7.18],
      [1.54, 1.54],
    ],
    "20": [
      [7.27, 7.27],
      [3.14, 3.14],
      [0.88, 0.88],
    ],
    "29A": [
      [4.76, 7.18],
      [3.76, 5.66],
      [2.12, 5.75],
    ],
    "31A": [
      [7.22, 4.5],
      [8.51, 4.35],
      [13.4, 5.56],
    ],
    "33": [
      [4.3, 4.6],
      [14.75, 17.01],
      [26.83, 31.03],
    ],
  },

  varLabels: [
    ["5", "D5"],
    ["14", "D14"],
    ["20", "D20"],
    ["29A", "D29"],
    ["31A", "D31"],
    ["33", "BF"],
  ],

  /* ── Zoom ── */
  zoomPositions: [24.72, 41.46, 67.9],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "Gr1", fromSurface: "1", toSurface: "5" },
    { text: "Gr2", fromSurface: "6", toSurface: "14" },
    { text: "Gr3", fromSurface: "STO", toSurface: "20" },
    { text: "Gr4", fromSurface: "22", toSurface: "29A" },
    { text: "Gr5", fromSurface: "30A", toSurface: "31A" },
    { text: "Gr6", fromSurface: "32A", toSurface: "33" },
    { text: "Gr7", fromSurface: "34", toSurface: "37" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "D3", fromSurface: "18", toSurface: "20" },
    { text: "D4a", fromSurface: "22", toSurface: "24" },
    { text: "D4b", fromSurface: "25", toSurface: "27" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.21, // manufacturer spec: 0.21 m at 24 mm (0.30 m at 70 mm)
  focusDescription:
    "Dual floating inner focus: Gr5 (negative singlet) and Gr6 (positive singlet) move on independent trajectories, driven by four XD Linear Motors.",

  /* ── Aperture configuration ── */
  nominalFno: 2.91,
  fstopSeries: [2.8, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.48,
  yScFill: 0.27,
} satisfies LensDataInput;

export default LENS_DATA;
