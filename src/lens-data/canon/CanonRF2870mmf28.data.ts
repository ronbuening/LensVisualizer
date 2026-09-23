import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Canon RF 28-70mm F2.8 IS STM                            ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2024/0329367 A1, First Numerical Example (¶0083,    ║
 * ║  FIG. 1) — Canon / Hagiwara. Stored at native patent scale.          ║
 * ║  15 elements / 12 groups in 7 lens units, 4 aspherical surfaces.     ║
 * ║  Zoom: 28.80–67.90 mm (marketed 28–70 mm), F2.88 / 2.88 / 2.92.      ║
 * ║                                                                      ║
 * ║  ZOOM MOTION (extending barrel, every unit moves):                   ║
 * ║    Abstract / ¶0028–0029: B1, B3–B7 move toward the object from      ║
 * ║    wide to tele; B2 follows a convex-to-image path (image-ward to    ║
 * ║    the intermediate position, then object-ward). Derived front-      ║
 * ║    vertex positions from the image plane (W / M / T, mm): B1 131.5 / ║
 * ║    143.4 / 157.9; B2 123.2 / 120.3 / 124.0; B3 78.8 / 89.8 / 98.3;   ║
 * ║    B7 22.2 / 33.1 / 41.7. The stop rides with B3.                    ║
 * ║  Variable gaps: D2, D9, D16, D19, D23, D25, and the back focus.      ║
 * ║                                                                      ║
 * ║  FOCUS: B6 (single negative meniscus L13) moves toward the image     ║
 * ║  from infinity to close (¶0065). The patent publishes infinity      ║
 * ║  spacings only, so focus travel is not modelled (zoom-only gaps).    ║
 * ║                                                                      ║
 * ║  APERTURE: patent FNO 2.88 / 2.88 / 2.92 with a moving stop and no   ║
 * ║  published iris diameters; zoomApertureModel "from-nominal-fno"      ║
 * ║  infers iris radii 9.04 / 10.68 / 11.94 mm (calculated). STO sd      ║
 * ║  records the largest inferred radius.                                ║
 * ║                                                                      ║
 * ║  COVER GLASS: patent surfaces 29–30 (GB, 2.00 mm, nd 1.54400) are    ║
 * ║  excluded. Last gap = d28 + 2.00/1.544 + d30 (1.09) = 15.385 /       ║
 * ║  26.315 / 34.865 mm, the air-equivalent bf (patent 15.39 / 26.31 /   ║
 * ║  34.87).                                                             ║
 * ║                                                                      ║
 * ║  SOURCE CONFLICT: the printed Total Lens Length (132.38 / 144.25 /   ║
 * ║  158.83) is 0.90 mm longer than the tabulated physical sum (131.48 / ║
 * ║  143.36 / 157.94). The tabulated rows reproduce f and bf, so they    ║
 * ║  are retained; the offset is unexplained.                            ║
 * ║                                                                      ║
 * ║  NOTE ON R4: surface 4 reads 22.455 mm; the paraxial trace with this ║
 * ║  value reproduces f and all seven unit focal lengths.                ║
 * ║                                                                      ║
 * ║  NOTE ON SEMI-DIAMETERS: no effective diameters are published.       ║
 * ║  Rims follow FIG. 1 (wide end, 13.25 px/mm at 300 dpi from the       ║
 * ║  S1–S28 vertex span) where the stored value differed by more than    ║
 * ║  about 15 %, subject to the exact axial f-number beam at every       ║
 * ║  station: L2 flange 18.0, D1 rear 13.6, L5 11.3, L6 12.6, D2 12.2,   ║
 * ║  D3 15.8 mm. L1 (29.5 vs FIG. 1 26.3), L11 and L12 remain about      ║
 * ║  12–15 % above the figure. S4 is capped at 15.3 mm by its sag        ║
 * ║  against S5 across the 7.05 mm gap.                                  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-rf-28-70-f28-is-stm",
  maker: "Canon",
  name: "CANON RF 28-70mm f/2.8 IS STM",
  subtitle: "US 2024/0329367 A1 EXAMPLE 1 — CANON / HAGIWARA",
  specs: [
    "15 ELEMENTS / 12 GROUPS",
    "f = 28.80–67.90 mm (2.36×)",
    "F/2.88–2.92",
    "2ω = 69.9–35.3°",
    "4 ASPHERICAL SURFACES (2 GMo ELEMENTS)",
    "2 UD ELEMENTS",
  ],

  focalLengthMarketing: [28, 70],
  focalLengthDesign: [28.8, 67.9],
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["canon-rf"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2024/0329367 A1",
  patentAuthors: ["Yasuaki Hagiwara"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2024,
  elementCount: 15,
  groupCount: 12,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.7,
      fl: 135.5,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      dPgF: 0.028, apdNote: "ΔPgF ≈ +0.028 (S-FPL51 catalog)",
      role: "Front collecting element; UD glass suppresses chromatic aberration at wide-angle where marginal ray height is greatest.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.8919,
      vd: 37.1,
      fl: -33.2,
      glass: "S-LAH92 (OHARA catalog equivalent; patent 892371)",
      apd: false,
      role: "Primary variator element; strong negative power drives zoom action in B2.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.60311,
      vd: 60.6,
      fl: -34.6,
      glass: "S-BSM14 (OHARA catalog equivalent; patent 603606)",
      apd: false,
      role: "Front element of cemented doublet D1 in B2; provides achromatic correction for the variator.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.90366,
      vd: 31.3,
      fl: 25.7,
      glass: "S-LAH95 (OHARA catalog equivalent; patent 904313)",
      apd: false,
      role: "Rear element of D1; high-index lanthanum flint provides positive power for achromatic balance in B2.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.8515,
      vd: 40.8,
      fl: -73.0,
      glass: "S-LAH89 (OHARA)",
      apd: false,
      role: "Rear element of B2; concave-to-object meniscus controls field curvature near the stop.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.1,
      fl: 41.5,
      glass: "S-LAH99 (OHARA catalog equivalent; patent 001291)",
      apd: false,
      role: "Ultra-high-index element immediately after stop; primary spherical aberration corrector at f/2.88.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: 73.5,
      glass: "L-BAL42 (OHARA)",
      apd: false,
      role: "First GMo aspherical element; doubly-aspherized corrector for zonal spherical aberration post-stop.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.77047,
      vd: 29.7,
      fl: -45.2,
      glass: "NBFD29 (HOYA, 770297)",
      apd: false,
      role: "Chromatic corrector and Petzval flattener for B3.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Plano-Concave Negative",
      nd: 1.85478,
      vd: 24.8,
      fl: -33.7,
      glass: "S-NBH56 (OHARA catalog equivalent; patent 855248)",
      apd: false,
      role: "Front element of anomalous-dispersion doublet D2; ultra-dense flint for secondary spectrum correction.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.7,
      fl: 39.3,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      dPgF: 0.028, apdNote: "ΔPgF ≈ +0.028 (S-FPL51 catalog)",
      role: "Rear element of D2; UD glass paired with L9 for secondary chromatic aberration correction across zoom range.",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: 78.3,
      glass: "L-BAL42 (OHARA)",
      apd: false,
      role: "Second GMo aspherical element; addresses field-dependent aberrations (coma, astigmatism, field curvature) away from stop.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.59522,
      vd: 67.7,
      fl: 37.7,
      glass: "S-FPM2 (OHARA catalog equivalent; patent 595677)",
      apd: false,
      role: "Primary positive element of B5; low-dispersion barium crown provides strong convergence for image formation.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.6134,
      vd: 44.3,
      fl: -57.2,
      glass: "S-NBM51 (OHARA catalog equivalent; patent 613443)",
      apd: false,
      role: "Sole focusing element (B6); lightweight meniscus for fast, quiet STM autofocus. Convex side faces object per §0065.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.744,
      vd: 44.8,
      fl: -32.0,
      glass: "S-LAM2 (OHARA)",
      apd: false,
      role: "Front element of rear doublet D3; provides strong negative power for field curvature and distortion control.",
      cemented: "D3",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.9,
      fl: 44.3,
      glass: "PBH21 (OHARA; historical 923209)",
      apd: false,
      role: "Rear element of D3; ultra-dense short flint provides achromatic correction and positive power to offset L14.",
      cemented: "D3",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── B1: Front collecting group (L1) ──
    { label: "1", R: 71.698, d: 7.4, nd: 1.497, elemId: 1, sd: 29.5 },
    { label: "2", R: -1074.771, d: 0.85, nd: 1.0, elemId: 0, sd: 29.0 }, // d2 variable (zoom)

    // ── B2: Variator (L2, L3+L4, L5) ──
    { label: "3", R: 95.769, d: 1.6, nd: 1.8919, elemId: 2, sd: 18.0 },
    { label: "4", R: 22.455, d: 7.05, nd: 1.0, elemId: 0, sd: 15.3 }, // R4 = 22.455; sag against S5 caps sd
    { label: "5", R: -369.959, d: 1.25, nd: 1.60311, elemId: 3, sd: 15.4 }, // D1 front
    { label: "6", R: 22.126, d: 7.0, nd: 1.90366, elemId: 4, sd: 15.4 }, // D1 junction
    { label: "7", R: 412.508, d: 4.86, nd: 1.0, elemId: 0, sd: 13.6 },
    { label: "8", R: -36.457, d: 1.0, nd: 1.8515, elemId: 5, sd: 11.3 },
    { label: "9", R: -89.252, d: 21.64, nd: 1.0, elemId: 0, sd: 11.3 }, // d9 variable (zoom)

    // ── B3: First intermediate positive (Stop, L6, L7, L8) ──
    { label: "STO", R: 1e15, d: 0.65, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "11", R: 43.928, d: 3.45, nd: 2.001, elemId: 6, sd: 12.6 },
    { label: "12", R: -750.0, d: 2.4, nd: 1.0, elemId: 0, sd: 12.6 },
    { label: "13A", R: 106.432, d: 3.7, nd: 1.58313, elemId: 7, sd: 12.4 },
    { label: "14A", R: -70.798, d: 2.33, nd: 1.0, elemId: 0, sd: 12.4 },
    { label: "15", R: -41.445, d: 1.2, nd: 1.77047, elemId: 8, sd: 11.6 },
    { label: "16", R: 220.269, d: 4.86, nd: 1.0, elemId: 0, sd: 11.6 }, // d16 variable (zoom)

    // ── B4: Weak negative compensator (L9+L10 cemented doublet D2) ──
    { label: "17", R: 1e15, d: 1.2, nd: 1.85478, elemId: 9, sd: 12.2 },
    { label: "18", R: 28.842, d: 6.1, nd: 1.497, elemId: 10, sd: 12.2 }, // D2 junction
    { label: "19", R: -56.203, d: 2.0, nd: 1.0, elemId: 0, sd: 12.2 }, // d19 variable (zoom)

    // ── B5: Second intermediate positive (L11, L12) ──
    { label: "20A", R: 55.622, d: 3.8, nd: 1.58313, elemId: 11, sd: 14.8 },
    { label: "21A", R: -248.88, d: 0.2, nd: 1.0, elemId: 0, sd: 14.8 },
    { label: "22", R: 69.909, d: 7.75, nd: 1.59522, elemId: 12, sd: 16.0 },
    { label: "23", R: -31.69, d: 3.22, nd: 1.0, elemId: 0, sd: 15.5 }, // d23 variable (zoom)

    // ── B6: Focusing element (L13) ──
    { label: "24", R: 71.379, d: 1.1, nd: 1.6134, elemId: 13, sd: 13.0 },
    { label: "25", R: 23.38, d: 12.68, nd: 1.0, elemId: 0, sd: 12.6 }, // d25 variable (zoom)

    // ── B7: Rear negative doublet (L14+L15 cemented doublet D3) ──
    { label: "26", R: -53.964, d: 1.3, nd: 1.744, elemId: 14, sd: 15.8 },
    { label: "27", R: 43.097, d: 4.8, nd: 1.92286, elemId: 15, sd: 15.8 }, // D3 junction
    { label: "28", R: -750.0, d: 15.385, nd: 1.0, elemId: 0, sd: 15.8 }, // air-equivalent bf (d28 + 2.00/1.544 + d30)
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "13A": {
      K: 0,
      A4: -5.91734e-6,
      A6: -1.25922e-8,
      A8: -6.96192e-11,
      A10: -1.24634e-13,
      A12: 3.32938e-16,
      A14: 0,
    },
    "14A": {
      K: 0,
      A4: -2.81431e-6,
      A6: -1.15888e-8,
      A8: -1.2081e-10,
      A10: 3.67743e-13,
      A12: -6.62375e-16,
      A14: 0,
    },
    "20A": {
      K: 0,
      A4: -2.16306e-6,
      A6: -3.51669e-8,
      A8: 3.80997e-12,
      A10: -8.02806e-13,
      A12: 7.68937e-16,
      A14: 0,
    },
    "21A": {
      K: 0,
      A4: 1.35282e-5,
      A6: -2.86368e-8,
      A8: 3.89958e-11,
      A10: -1.08816e-12,
      A12: 1.8361e-15,
      A14: 0,
    },
  },

  /* ── Zoom configuration ── */
  zoomPositions: [28.8, 49.0, 67.9],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Variable air spacings (zoom only — close-focus data not published; last gap is air-equivalent bf) ── */
  var: {
    "2": [
      [0.85, 0.85],
      [15.7, 15.7],
      [26.56, 26.56],
    ],
    "9": [
      [21.64, 21.64],
      [7.73, 7.73],
      [2.9, 2.9],
    ],
    "16": [
      [4.86, 4.86],
      [2.83, 2.83],
      [2.01, 2.01],
    ],
    "19": [
      [2.0, 2.0],
      [4.04, 4.04],
      [4.86, 4.86],
    ],
    "23": [
      [3.22, 3.22],
      [3.12, 3.12],
      [2.0, 2.0],
    ],
    "25": [
      [12.68, 12.68],
      [12.78, 12.78],
      [13.9, 13.9],
    ],
    "28": [
      [15.385, 15.385],
      [26.315, 26.315],
      [34.865, 34.865],
    ],
  },
  varLabels: [
    ["2", "D2"],
    ["9", "D9"],
    ["16", "D16"],
    ["19", "D19"],
    ["23", "D23"],
    ["25", "D25"],
    ["28", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "B1 (+)", fromSurface: "1", toSurface: "2" },
    { text: "B2 (−)", fromSurface: "3", toSurface: "9" },
    { text: "B3 (+)", fromSurface: "STO", toSurface: "16" },
    { text: "B4 (−)", fromSurface: "17", toSurface: "19" },
    { text: "B5 (+)", fromSurface: "20A", toSurface: "23" },
    { text: "B6 (−)", fromSurface: "24", toSurface: "25" },
    { text: "B7 (−)", fromSurface: "26", toSurface: "28" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "17", toSurface: "19" },
    { text: "D3", fromSurface: "26", toSurface: "28" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.27,
  focusDescription:
    "Rear inner focus via B6 (single negative meniscus L13). Patent ¶0042/¶0065: B6 moves toward the image " +
    "side from infinity to close. Close-focus spacings are not published for Example 1, so the gaps are zoom-only " +
    "and the focus slider does not move B6.",

  /* ── Aperture configuration ── */
  nominalFno: [2.88, 2.88, 2.92],
  zoomApertureModel: "from-nominal-fno",
  fstopSeries: [2.88, 3.2, 3.5, 4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 9,

  /* ── Layout tuning ── */
  scFill: 0.48,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
