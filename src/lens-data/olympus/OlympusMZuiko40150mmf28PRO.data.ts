import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — OLYMPUS M.ZUIKO DIGITAL ED 40-150mm f/2.8 PRO        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2015/0168697 A1, Example 4 (¶0316) (Olympus).    ║
 * ║  Inventor: Yasuji Ogata. Filed 2014-12-16, published 2015-06-18.  ║
 * ║  Six-unit telephoto zoom: +/−/+/−/−/+ (G1–G6).                   ║
 * ║  16 elements / 10 groups, 4 aspherical surfaces on 3 elements.    ║
 * ║  Internal zoom — constant overall length 179.90 mm (optical).     ║
 * ║  Focus: dual-group floating (G4 + G5), dual VCM.                  ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: d5, d11 (zoom only).                         ║
 * ║  Focus variable gaps: d19, d22A, d24 (zoom + focus).              ║
 * ║  All five variable gaps conserve at 78.668 mm (constant length).  ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Not listed in patent. Estimated from combined marginal + chief  ║
 * ║    ray trace at all three zoom positions with mechanical clearance.║
 * ║    Front group capped by 72 mm filter thread (SD ≤ 34 mm).        ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus/zoom gaps                   ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ║    Cover glass excluded; BFD is air-equivalent (29.50 mm).        ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "olympus-mzuiko-40-150-f28-pro",
  maker: "Olympus",
  name: "OLYMPUS M.ZUIKO DIGITAL ED 40-150mm f/2.8 PRO",
  subtitle: "US 2015/0168697 A1 EXAMPLE 4 — OLYMPUS / OGATA",
  specs: [
    "16 ELEMENTS / 10 GROUPS",
    "f = 40.81–147.00 mm (3.60×)",
    "F/2.88 (CONSTANT)",
    "2ω = 30.86°–8.30°",
    "4 ASPHERICAL SURFACES",
  ],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: [40, 150],
  focalLengthDesign: [40.81, 147.0],
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["micro-four-thirds"],
  imageFormat: "four-thirds",
  patentYear: 2015,
  elementCount: 16,
  groupCount: 10,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.7847,
      vd: 26.29,
      fl: -300.3,
      glass: "S-TIH18 (OHARA)",
      apd: false,
      role: "HD glass; chromatic partner for L2 in front achromatic doublet",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 137.3,
      glass: "FCD1 (HOYA)",
      apd: false,
      role: "ED glass; primary axial-color corrector in G1 front doublet",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.43875,
      vd: 94.93,
      fl: 261.2,
      glass: "S-FPL53 (OHARA)",
      apd: false,
      role: "Super ED glass; secondary-spectrum correction in G1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.8081,
      vd: 22.76,
      fl: 99.5,
      glass: "S-TIH4 (OHARA)",
      apd: false,
      role: "Beam-height reducer at G2 entry; convex toward image side",
      cemented: "T1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.23,
      fl: -41.6,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Core negative power in G2 variator; low-dispersion crown limits chromatic swing",
      cemented: "T1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.8,
      vd: 29.84,
      fl: 180.5,
      glass: "S-BAH27 (OHARA)",
      apd: false,
      role: "Lateral-color corrector in G2 cemented triplet",
      cemented: "T1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.73,
      fl: -53.6,
      glass: "S-LAM66 (OHARA)",
      apd: false,
      role: "Supplementary negative power in G2; high-index for Petzval control",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.497,
      vd: 81.61,
      fl: 54.7,
      glass: "FCD1 (HOYA)",
      apd: false,
      role: "EDA element; both surfaces aspherical for SA/coma correction after stop",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -72.7,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Chromatic partner for L10 in G3 cemented doublet; coma correction",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.63,
      fl: 33.8,
      glass: "S-BSM81 (OHARA)",
      apd: false,
      role: "Positive convergence in G3; borosilicate crown for beam contraction",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 109.6,
      glass: "FCD1 (HOYA)",
      apd: false,
      role: "ED glass; chromatic correction at G3 exit, completes beam contraction",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 18.9,
      fl: 84.5,
      glass: "S-NPH2 (OHARA)",
      apd: false,
      role: "Ultra-high-index focus element (VCM 1); minimizes mass for high-speed AF",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.7432,
      vd: 49.29,
      fl: -23.3,
      glass: "S-NBH53V (OHARA)",
      apd: false,
      role: "Rear surface aspherical; suppresses focus-dependent SA and field curvature",
      cemented: "D3",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.62004,
      vd: 36.26,
      fl: -43.0,
      glass: "S-TIM25 (OHARA)",
      apd: false,
      role: "Single-element secondary focus group (VCM 2); minimal mass for wobbling AF",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.8061,
      vd: 40.88,
      fl: 16.9,
      glass: "L-LAH53 (OHARA)",
      apd: false,
      role: "PGM-molded aspherical field flattener; exit-pupil push for MFT sensor",
      cemented: "D4",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Concave-Plano Negative",
      nd: 1.64769,
      vd: 33.79,
      fl: -37.1,
      glass: "S-TIM22 (OHARA)",
      apd: false,
      role: "Chromatic balance in G6 field-flattener doublet",
      cemented: "D4",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    //  G1 — Front collector (fixed)
    { label: "1", R: 137.0268, d: 2.6, nd: 1.7847, elemId: 1, sd: 34.0 }, // L1 front
    { label: "2", R: 86.6508, d: 7.76, nd: 1.497, elemId: 2, sd: 33.5 }, // L1→L2 junction
    { label: "3", R: -321.6069, d: 0.15, nd: 1.0, elemId: 0, sd: 32.0 }, // L2 rear → air
    { label: "4", R: 96.8154, d: 5.26, nd: 1.43875, elemId: 3, sd: 31.5 }, // L3 front
    { label: "5", R: 624.2467, d: 2.56328, nd: 1.0, elemId: 0, sd: 30.0 }, // L3 rear → air (d5 var, zoom only)

    //  G2 — Variator (moves image-ward monotonically)
    { label: "6", R: -227.2066, d: 3.37, nd: 1.8081, elemId: 4, sd: 17.0 }, // L4 front
    { label: "7", R: -59.4074, d: 1.6, nd: 1.48749, elemId: 5, sd: 16.0 }, // L4→L5 junction
    { label: "8", R: 30.8341, d: 2.75, nd: 1.8, elemId: 6, sd: 16.0 }, // L5→L6 junction
    { label: "9", R: 39.2048, d: 4.99, nd: 1.0, elemId: 0, sd: 14.5 }, // L6 rear → air
    { label: "10", R: -49.6375, d: 1.5, nd: 1.83481, elemId: 7, sd: 13.5 }, // L7 front
    { label: "11", R: 458.1191, d: 53.22784, nd: 1.0, elemId: 0, sd: 13.0 }, // L7 rear → air (d11 var, zoom only)

    //  Aperture stop (moves with G3 — both fixed)
    { label: "STO", R: 1e15, d: 1.8, nd: 1.0, elemId: 0, sd: 12.5 },

    //  G3 — Positive relay (fixed)
    { label: "13A", R: 39.4392, d: 5.76, nd: 1.497, elemId: 8, sd: 13.0 }, // L8 front (asph)
    { label: "14A", R: -87.6954, d: 7.98, nd: 1.0, elemId: 0, sd: 13.0 }, // L8 rear (asph) → air
    { label: "15", R: 70.3121, d: 1.5, nd: 1.84666, elemId: 9, sd: 12.5 }, // L9 front
    { label: "16", R: 32.8253, d: 6.58, nd: 1.59282, elemId: 10, sd: 12.3 }, // L9→L10 junction
    { label: "17", R: -51.5148, d: 0.15, nd: 1.0, elemId: 0, sd: 11.5 }, // L10 rear → air
    { label: "18", R: 129.4168, d: 3.1, nd: 1.497, elemId: 11, sd: 11.2 }, // L11 front
    { label: "19", R: -94.067, d: 2.5, nd: 1.0, elemId: 0, sd: 10.8 }, // L11 rear → air (d19 var, zoom+focus)

    //  G4 — Compensator / primary focus group (VCM 1; convex locus zoom, image-ward focus)
    { label: "20", R: 789.7458, d: 2.0, nd: 1.92286, elemId: 12, sd: 9.5 }, // L12 front
    { label: "21", R: -86.5458, d: 1.0, nd: 1.7432, elemId: 13, sd: 9.2 }, // L12→L13 junction
    { label: "22A", R: 21.6608, d: 17.30858, nd: 1.0, elemId: 0, sd: 9.0 }, // L13 rear (asph) → air (d22 var)

    //  G5 — Secondary focus group (VCM 2; slight zoom motion, independent focus)
    { label: "23", R: -356.0768, d: 1.0, nd: 1.62004, elemId: 14, sd: 8.5 }, // L14 front
    { label: "24", R: 28.8, d: 3.06837, nd: 1.0, elemId: 0, sd: 8.5 }, // L14 rear → air (d24 var)

    //  G6 — Field flattener / exit-pupil relay (fixed)
    { label: "25A", R: 31.6086, d: 9.58, nd: 1.8061, elemId: 15, sd: 12.5 }, // L15 front (asph)
    { label: "26", R: -24.0, d: 1.3, nd: 1.64769, elemId: 16, sd: 12.0 }, // L15→L16 junction
    { label: "27", R: 1e15, d: 29.5, nd: 1.0, elemId: 0, sd: 11.5 }, // L16 rear → BFD (air-equivalent)
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "13A": {
      K: 0,
      A4: -3.1251e-6,
      A6: -3.8756e-10,
      A8: 5.5927e-11,
      A10: -1.4099e-13,
      A12: 0,
      A14: 0,
    },
    "14A": {
      K: 0,
      A4: 1.0047e-5,
      A6: -3.039e-10,
      A8: 5.4533e-11,
      A10: -1.3296e-13,
      A12: 0,
      A14: 0,
    },
    "22A": {
      K: -0.0326,
      A4: -2.5854e-6,
      A6: 2.4119e-9,
      A8: -7.1028e-11,
      A10: 1.4991e-13,
      A12: 0,
      A14: 0,
    },
    "25A": {
      K: -0.7171,
      A4: 7.9298e-7,
      A6: -2.8322e-9,
      A8: 2.5344e-12,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Zoom lens fields ── */
  zoomPositions: [40.81, 77.27, 147.0],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Variable air spacings (zoom + focus) ──
   *  Each value is an array of [d_inf, d_close] pairs, one per zoom position.
   *  Close focus = 0.7 m object-to-image distance.
   *
   *  d5 and d11 are zoom-only (identical inf/close values).
   *  d19, d22A, d24 change with both zoom and focus.
   *  Gap conservation: d5+d11+d19+d22A+d24 ≈ 78.668 mm at all positions.
   */
  var: {
    "5": [
      [2.56328, 2.56328],
      [30.41889, 30.41889],
      [53.87892, 53.87892],
    ],
    "11": [
      [53.22784, 53.22784],
      [25.3723, 25.3723],
      [1.91217, 1.91217],
    ],
    "19": [
      [2.5, 3.12034],
      [4.62391, 6.98082],
      [3.89046, 12.71907],
    ],
    "22A": [
      [17.30858, 17.25696],
      [14.85531, 13.14454],
      [16.1946, 6.51353],
    ],
    "24": [
      [3.06837, 2.5],
      [3.39767, 2.75153],
      [2.79195, 3.64447],
    ],
  },

  varLabels: [
    ["5", "D5"],
    ["11", "D11"],
    ["19", "D19"],
    ["22A", "D22"],
    ["24", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−)", fromSurface: "6", toSurface: "11" },
    { text: "G3 (+)", fromSurface: "13A", toSurface: "19" },
    { text: "G4 (−)", fromSurface: "20", toSurface: "22A" },
    { text: "G5 (−)", fromSurface: "23", toSurface: "24" },
    { text: "G6 (+)", fromSurface: "25A", toSurface: "27" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "T1", fromSurface: "6", toSurface: "9" },
    { text: "D2", fromSurface: "15", toSurface: "17" },
    { text: "D3", fromSurface: "20", toSurface: "22A" },
    { text: "D4", fromSurface: "25A", toSurface: "27" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.7,
  focusDescription: "Dual VCM floating focus: G4 (VCM 1) and G5 (VCM 2) move independently.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.48,
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
