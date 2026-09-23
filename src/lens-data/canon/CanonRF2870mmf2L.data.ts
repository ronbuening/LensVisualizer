import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — CANON RF 28-70mm F2 L USM                               ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2020-118807 A, Example A main optical system       ║
 * ║  (Canon Inc.; inventor Kohei Kimura). Native patent scale.          ║
 * ║  Four-group positive-negative-positive-positive zoom.               ║
 * ║  19 elements / 13 groups, 5 aspherical surfaces (4 asph elements).  ║
 * ║  Surface labels follow the patent numbering (S22 = AP omitted).     ║
 * ║                                                                      ║
 * ║  Zoom variable gaps: D5 (G1–G2), D13 (G2–G3), D21 (G3–G4),          ║
 * ║                      D34 (BF). Patent zoom table, infinity only.    ║
 * ║  Group motion W→T (image plane fixed, derived from the gap table   ║
 * ║  and Fig. 1 arrows): G1 +21.6 mm toward the object, G2 ≈4 mm       ║
 * ║  toward the image (slight reversal near tele), G3 +9.6 mm and G4   ║
 * ║  +14.7 mm toward the object. No group is fixed.                     ║
 * ║                                                                      ║
 * ║  NOTE ON FLARE CUT (patent S22):                                     ║
 * ║    Patent surface 22 (AP, flare-cut stop, r = ∞) has d = −2.59 mm. ║
 * ║    It is omitted; its negative thickness is folded into d21:        ║
 * ║    stored d21 = patent d21 − 2.59 at each zoom position.            ║
 * ║                                                                      ║
 * ║  NOTE ON COVER GLASS:                                                ║
 * ║    Patent surfaces 35–36 (CG, t = 1.96 mm, nd = 1.51633) and the    ║
 * ║    trailing air gap d36 = 2.75 mm are excluded. The air-equivalent ║
 * ║    path 1.96/1.51633 + 2.75 = 4.043 mm is added to patent d34:      ║
 * ║    stored BF = 19.04 / 28.26 / 33.70 mm (paraxial BFD 19.05 /       ║
 * ║    28.28 / 33.73 mm; patent lens length 157.51 / 170.61 / 179.07).  ║
 * ║                                                                      ║
 * ║  NOTE ON APERTURE:                                                   ║
 * ║    Patent FNO 2.06 at all three stations; the stop (S14) moves with ║
 * ║    G3 and no iris diameters are published, so the station iris is   ║
 * ║    inferred from the nominal f-number (zoomApertureModel). STO sd   ║
 * ║    17.0 records the largest (tele) real-ray iris radius, 16.9 mm.   ║
 * ║                                                                      ║
 * ║  NOTE ON SEMI-DIAMETERS:                                             ║
 * ║    Not listed in the patent. Measured from the Fig. 1 wide-angle    ║
 * ║    section (8.70 px/mm at 400 dpi, calibrated on the S1–S34 vertex  ║
 * ║    spacing and confirmed by the drawn axial beam at SP) where the   ║
 * ║    earlier estimate was ≳15 % off or clipped the tele f/2.06 axial  ║
 * ║    beam: S1–S2, S7, STO, S15–S16, S20, S23–S29, S32–S34. Other     ║
 * ║    surfaces keep the earlier ray-trace estimate (within ~15 % of    ║
 * ║    the figure). S7 (16.0 vs figure 15.1) and S32 (15.4 vs 14.8)     ║
 * ║    sit slightly above the figure so the engine's paraxial wide     ║
 * ║    half-field (37.1°) still covers the patent ω = 36.82°.          ║
 * ║    Full-field corner bundles are mechanically                       ║
 * ║    vignetted at wide, as the patent figure's narrow drawn bundle    ║
 * ║    shows.                                                            ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-rf-28-70-f2",
  maker: "Canon",
  name: "CANON RF 28-70mm f/2 L USM",
  subtitle: "JP 2020-118807 A Example A — Canon / Kimura",
  specs: [
    "19 ELEMENTS / 13 GROUPS",
    "f = 28.9 – 67.9 mm (patent)",
    "F/2.06 (constant)",
    "2ω = 73.6° – 35.3°",
    "5 ASPHERICAL SURFACES (4 elements)",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: [28, 70] as [number, number],
  focalLengthDesign: [28.9, 67.9] as [number, number],
  apertureMarketing: 2.0,
  apertureDesign: 2.06,
  lensMounts: ["canon-rf"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2020-118807 A",
  patentAuthors: ["Kohei Kimura"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2020,
  elementCount: 19,
  groupCount: 13,

  /* ── Elements ── */
  elements: [
    // ── Group 1: Front Collector (f = +104.99 mm) ──
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.8081,
      vd: 22.8,
      fl: -162.0,
      glass: "S-NPH1 (OHARA)",
      apd: "inferred" as const,
      apdNote: "S-NPH1-class dense flint; catalog θgF 0.632 lies well above the normal line (inferred, not stated in the patent)",
      role: "Front negative corrector in D1; achromatic pair with L2",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.7,
      fl: 134.4,
      glass: "S-LAL18 (OHARA)",
      apd: false as const,
      role: "Positive element in D1 doublet; primary front power contribution",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 117.3,
      glass: "S-LAH66 (OHARA)",
      apd: false as const,
      role: "Dominant positive power element in G1; controls entrance pupil",
    },
    // ── Group 2: Variator (f = −19.17 mm) ──
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.76902,
      vd: 49.3,
      fl: -30.8,
      glass: "769493 - MC-TAF101-100 (HOYA)",
      apd: false as const,
      role: "Strong negative meniscus at variator entrance; asph S6 corrects zonal SA",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.76385,
      vd: 48.5,
      fl: -22.4,
      glass: "S-LAH96 (OHARA, 764485)",
      apd: false as const,
      role: "Negative element in D2; variator divergence",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.85478,
      vd: 24.8,
      fl: 21.5,
      glass: "S-NBH56 (OHARA; exact 855248 coordinate match)",
      role: "Positive corrector in D2; achromatic pair with L5",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      fl: 66.1,
      glass: "S-FSL5 (OHARA)",
      apd: false as const,
      role: "Positive meniscus in D3; low-index fluor crown for chromatic balance",
      cemented: "D3",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.883,
      vd: 40.8,
      fl: -31.2,
      glass: "TAFD30 (HOYA)",
      apd: false as const,
      role: "Negative corrector in D3; asph S13 cleans up variator exit aberrations",
      cemented: "D3",
    },
    // ── Group 3: Compensator, carries the stop (f = +47.05 mm) ──
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Plano-Convex Positive",
      nd: 1.72916,
      vd: 54.7,
      fl: 76.5,
      glass: "S-LAL18 (OHARA)",
      apd: false as const,
      role: "First converging element after stop; begins refocusing variator output",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Pos. (1× Asph)",
      nd: 1.804,
      vd: 46.6,
      fl: 37.0,
      glass: "S-LAH65V (OHARA)",
      apd: false as const,
      role: "Dominant power element in G3; asph S18 corrects SA and tangential field",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.738,
      vd: 32.3,
      fl: -22.3,
      glass: "S-NBH53V (OHARA)",
      apd: false as const,
      role: "High-dispersion negative in D4; secondary spectrum correction with UD partner",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.5,
      fl: 57.3,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred" as const,
      apdNote: "S-FPL51-class fluorophosphate (UD-type); anomalous dispersion inferred from the catalog glass, not stated in the patent",
      role: "UD positive meniscus in D4; secondary-spectrum correction inside Group 3",
      cemented: "D4",
    },
    // ── Group 4: Rear Image-Forming (f = +44.67 mm) ──
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.43875,
      vd: 94.7,
      fl: 66.4,
      glass: "S-FPL53 (OHARA)",
      apd: "inferred" as const,
      apdNote: "S-FPL53-class fluorophosphate (Super UD-type, νd = 94.7); anomalous dispersion inferred from the catalog glass, not stated in the patent",
      role: "Super UD biconvex at G4 front; maximum secondary spectrum correction at large marginal ray height",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.59522,
      vd: 67.7,
      fl: 55.9,
      glass: "S-FPM2 (OHARA)",
      apd: false as const,
      role: "Positive convergence element; shares load with L13 to reduce curvatures",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 85.6,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred" as const,
      apdNote: "S-FPL51-class fluorophosphate (UD-type); anomalous dispersion inferred from the catalog glass, not stated in the patent",
      role: "UD positive in D5; corrects secondary spectrum in rear image-forming group",
      cemented: "D5",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 33.3,
      fl: -43.8,
      glass: "NBFD15 (HOYA)",
      apd: false as const,
      role: "High-dispersion negative in D5; achromatic partner for UD L15",
      cemented: "D5",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconcave Neg. (2× Asph)",
      nd: 1.854,
      vd: 40.4,
      fl: -124.5,
      glass: "L-LAH85V (OHARA)",
      apd: false as const,
      role: "Double-asphere field corrector (nearly plano-concave base); ≈1.4 mm departure on S30 at its rim — primary corrector for field curvature, astigmatism and distortion",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.2,
      fl: -45.4,
      glass: "S-FSL5 (OHARA)",
      apd: false as const,
      role: "Low-index negative in D6; extreme Δnd junction (0.514) with L19 for chromatic correction",
      cemented: "D6",
    },
    {
      id: 19,
      name: "L19",
      label: "Element 19",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.1,
      fl: 36.8,
      glass: "TAFD55 (HOYA)",
      apd: false as const,
      role: "Final positive element; ultra-high nd minimizes curvatures close to sensor; exploits RF mount short flange",
      cemented: "D6",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── Group 1: Front Collector ──
    // Cemented doublet D1 (L1 + L2)
    { label: "1", R: 187.418, d: 2.2, nd: 1.8081, elemId: 1, sd: 39.3 },
    { label: "2", R: 76.661, d: 8.55, nd: 1.72916, elemId: 2, sd: 36.1 },
    { label: "3", R: 335.605, d: 0.15, nd: 1.0, elemId: 0, sd: 38.0 },
    // L3 singlet
    { label: "4", R: 58.97, d: 8.05, nd: 1.7725, elemId: 3, sd: 32.0 },
    { label: "5", R: 158.73, d: 3.93, nd: 1.0, elemId: 0, sd: 30.8 }, // [var: G1–G2]

    // ── Group 2: Variator ──
    // L4 singlet (1× asph front)
    { label: "6A", R: 167.209, d: 1.55, nd: 1.76902, elemId: 4, sd: 22.8 },
    { label: "7", R: 20.639, d: 9.56, nd: 1.0, elemId: 0, sd: 16.0 },
    // Cemented doublet D2 (L5 + L6)
    { label: "8", R: -49.152, d: 1.0, nd: 1.76385, elemId: 5, sd: 14.8 },
    { label: "9", R: 26.487, d: 8.15, nd: 1.85478, elemId: 6, sd: 16.1 },
    { label: "10", R: -51.463, d: 1.45, nd: 1.0, elemId: 0, sd: 16.5 },
    // Cemented doublet D3 (L7 + L8, rear asph)
    { label: "11", R: -42.283, d: 5.85, nd: 1.48749, elemId: 7, sd: 16.7 },
    { label: "12", R: -19.11, d: 1.2, nd: 1.883, elemId: 8, sd: 16.25 },
    { label: "13A", R: -64.186, d: 15.61, nd: 1.0, elemId: 0, sd: 16.8 }, // [var: G2–G3]

    // ── Aperture Stop (patent S14, moves with G3) ──
    { label: "STO", R: 1e15, d: 0.3, nd: 1.0, elemId: 0, sd: 17.0 },

    // ── Group 3: Compensator ──
    // L9 singlet (plano-convex)
    { label: "15", R: 55.781, d: 5.05, nd: 1.72916, elemId: 9, sd: 18.9 },
    { label: "16", R: 1e15, d: 0.15, nd: 1.0, elemId: 0, sd: 18.9 },
    // L10 singlet (1× asph rear)
    { label: "17", R: 42.901, d: 9.5, nd: 1.804, elemId: 10, sd: 19.2 },
    { label: "18A", R: -87.269, d: 3.8, nd: 1.0, elemId: 0, sd: 19.4 },
    // Cemented doublet D4 (L11 + L12, UD)
    { label: "19", R: -50.369, d: 1.5, nd: 1.738, elemId: 11, sd: 19.0 },
    { label: "20", R: 24.706, d: 7.7, nd: 1.497, elemId: 12, sd: 15.9 },
    { label: "21", R: 166.989, d: 6.08, nd: 1.0, elemId: 0, sd: 18.8 }, // [var: G3–G4, includes AP offset −2.59]

    // ── Group 4: Rear Image-Forming (patent S22 AP omitted) ──
    // L13 singlet (Super UD)
    { label: "23", R: 30.373, d: 7.3, nd: 1.43875, elemId: 13, sd: 16.9 },
    { label: "24", R: -664.868, d: 0.15, nd: 1.0, elemId: 0, sd: 16.9 },
    // L14 singlet
    { label: "25", R: 48.839, d: 5.5, nd: 1.59522, elemId: 14, sd: 16.5 },
    { label: "26", R: -100.131, d: 0.57, nd: 1.0, elemId: 0, sd: 16.5 },
    // Cemented doublet D5 (L15 + L16, UD)
    { label: "27", R: 66.531, d: 4.55, nd: 1.497, elemId: 15, sd: 15.5 },
    { label: "28", R: -115.19, d: 1.2, nd: 1.8061, elemId: 16, sd: 15.5 },
    { label: "29", R: 51.069, d: 3.84, nd: 1.0, elemId: 0, sd: 13.8 },
    // L17 singlet (double-asphere)
    { label: "30A", R: -1000.0, d: 3.0, nd: 1.854, elemId: 17, sd: 13.7 },
    { label: "31A", R: 119.129, d: 3.42, nd: 1.0, elemId: 0, sd: 14.5 },
    // Cemented doublet D6 (L18 + L19, ultra-high-index)
    { label: "32", R: -39.992, d: 1.3, nd: 1.48749, elemId: 18, sd: 15.4 },
    { label: "33", R: 50.003, d: 6.3, nd: 2.001, elemId: 19, sd: 18.4 },
    { label: "34", R: -131.617, d: 19.04, nd: 1.0, elemId: 0, sd: 18.4 }, // [var: BF, includes CG air-equivalent path]
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "6A": {
      K: 0,
      A4: 4.38428e-6,
      A6: -2.70954e-9,
      A8: 4.53124e-12,
      A10: -5.11345e-16,
      A12: 2.85627e-18,
      A14: 0,
    },
    "13A": {
      K: 0,
      A4: -2.04866e-6,
      A6: -6.82741e-10,
      A8: -2.06847e-11,
      A10: 9.28973e-14,
      A12: -1.47499e-16,
      A14: 0,
    },
    "18A": {
      K: 0,
      A4: 2.64029e-6,
      A6: -2.43625e-9,
      A8: -1.84031e-12,
      A10: -2.30946e-17,
      A12: 4.15861e-18,
      A14: 0,
    },
    "30A": {
      K: 0,
      A4: -4.43289e-5,
      A6: -1.56326e-8,
      A8: 3.31996e-10,
      A10: -1.13489e-12,
      A12: 2.02156e-15,
      A14: 0,
    },
    "31A": {
      K: 0,
      A4: -2.52968e-5,
      A6: 2.32789e-8,
      A8: 3.09529e-10,
      A10: -9.01793e-13,
      A12: 1.19241e-15,
      A14: 0,
    },
  },

  /* ── Zoom configuration ── */
  zoomPositions: [28.9, 50.0, 67.9],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Variable air spacings (zoom only — no close-focus data in patent) ──
   *  All gaps use identical inf/close values (zoom-only movement).
   *  "21" = patent d21 − 2.59 (absorbed flare-cut AP offset, patent S22).
   *  "34" = patent d34 + 1.96/1.51633 + 2.75 (CG air-equivalent + d36).
   */
  var: {
    "5": [
      [3.93, 3.93],
      [20.98, 20.98],
      [29.21, 29.21],
    ],
    "13A": [
      [15.61, 15.61],
      [6.51, 6.51],
      [2.27, 2.27],
    ],
    "21": [
      [6.08, 6.08],
      [2.0, 2.0],
      [1.02, 1.02],
    ],
    "34": [
      [19.04, 19.04],
      [28.26, 28.26],
      [33.7, 33.7],
    ],
  },
  varLabels: [
    ["5", "D5"],
    ["13A", "D13"],
    ["21", "D21"],
    ["34", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+105)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−19)", fromSurface: "6A", toSurface: "13A" },
    { text: "G3 (+47)", fromSurface: "STO", toSurface: "21" },
    { text: "G4 (+45)", fromSurface: "23", toSurface: "34" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "11", toSurface: "13A" },
    { text: "D4", fromSurface: "19", toSurface: "21" },
    { text: "D5", fromSurface: "27", toSurface: "29" },
    { text: "D6", fromSurface: "32", toSurface: "34" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.39,
  focusDescription:
    "Focusing group not identified in the patent (Canon lists inner focusing with a ring-type USM). No close-focus data in patent — zoom-only model.",

  /* ── Aperture configuration ── */
  nominalFno: 2.06,
  zoomApertureModel: "from-nominal-fno",
  fstopSeries: [2.06, 2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 9,

  /* ── Layout tuning ── */
  scFill: 0.42,
  yScFill: 0.55,
  maxAspectRatio: 2.0,
} satisfies LensDataInput;

export default LENS_DATA;
