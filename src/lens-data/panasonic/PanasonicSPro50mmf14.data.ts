import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — PANASONIC LUMIX S PRO 50mm f/1.4 (S-X50)             ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2020/158622 A1, Numerical Example 3 (Panasonic   ║
 * ║  IP Management / Yoshinaga, Suzuki). Modified Gauss-derivative    ║
 * ║  high-speed normal prime for L-mount full-frame mirrorless.       ║
 * ║  13 elements / 11 groups, 4 aspherical surfaces (2 elements).    ║
 * ║  Focus: dual inner focus — L9 (Fn, negative) moves toward image, ║
 * ║  L10 (Fp, positive) moves toward object. Three variable gaps.     ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters. Values are production-     ║
 * ║    representative estimates matched to Panasonic's published      ║
 * ║    construction section, then checked against rim slope, edge      ║
 * ║    thickness, and cross-gap sag constraints. Front element remains║
 * ║    capped by the 77 mm filter thread envelope (~35 mm max SD).    ║
 * ║    This lens overrides maxRimAngleDeg to 70.5° so S4 (L2 rear,    ║
 * ║    R=24.46) can use a 23.0 mm production-style clear aperture     ║
 * ║    while preserving the characteristic pinched second-element      ║
 * ║    rear aperture seen in the production diagram.                  ║
 * ║                                                                    ║
 * ║  Cover glass (CG, surfaces 26–27: 2.10 mm flat, nd=1.51680)      ║
 * ║  excluded; physical BFD folded into air-equivalent on surface 25A ║
 * ║  (13.42 + 2.10/1.5168 + 1.004 = 15.809 mm).                     ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "panasonic-lumix-s-pro-50-f14",
  maker: "Panasonic",
  name: "PANASONIC LUMIX S PRO 50mm f/1.4",
  subtitle: "WO 2020/158622 A1 Example 3 — Panasonic / Yoshinaga, Suzuki",
  specs: [
    "13 ELEMENTS / 11 GROUPS",
    "f ≈ 49.0 mm",
    "F/1.4",
    "2ω ≈ 47.6°",
    "2 ASPHERICAL ELEMENTS (4 SURFACES)",
    "3 ED ELEMENTS",
  ],

  focalLengthMarketing: 50,
  focalLengthDesign: 49.0,
  apertureMarketing: 1.4,
  apertureDesign: 1.47,
  lensMounts: ["l-mount"],
  imageFormat: "135-full-frame",
  patentYear: 2020,
  elementCount: 13,
  groupCount: 11,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 20.9,
      fl: 82.0,
      glass: "S-NPH2 (OHARA)",
      apd: "patent",
      apdNote: "ΔPgF = +0.0282 (patent-listed)",
      dPgF: 0.0282,
      role: "Front positive collector; ultra-high-index short flint provides curvature reduction at f/1.4 entrance beam.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.2,
      fl: -47.1,
      glass: "S-BSL7 (OHARA)",
      apd: false,
      role: "Diverging element; forms air-spaced pair with L1 for deliberate chromatic under-correction.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.58144,
      vd: 40.9,
      fl: -59.9,
      glass: "Dense flint (581/409, uncertain)",
      apd: false,
      role: "Beam divergence continuation; fine-tunes wavefront curvature before aspherical L4.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.80755,
      vd: 40.9,
      fl: 72.5,
      glass: "808409 - PGM-moldable lanthanum crown (MC-NBFD135 code match; patent nd=1.80755, vd=40.9)",
      apd: false,
      role: "Aspherical SA corrector; both surfaces aspherical, targets 5th/7th-order spherical aberration residuals.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.6,
      fl: 56.2,
      glass: "FCD515 (Hoya)",
      apd: "patent",
      apdNote: "ΔPgF = +0.0194 (patent-listed); ED fluorophosphate crown",
      dPgF: 0.0194,
      role: "First ED element; anomalous dispersion for secondary-spectrum correction, major positive power contributor.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.6,
      fl: 61.4,
      glass: "FCD515 (Hoya)",
      apd: "patent",
      apdNote: "ΔPgF = +0.0194 (patent-listed); ED fluorophosphate crown",
      dPgF: 0.0194,
      cemented: "D1",
      role: "Second ED element; positive component of L6+L7 chromatic-engine cemented doublet.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.85478,
      vd: 24.8,
      fl: -26.8,
      glass: "S-NBH56 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Dense barium short flint; achromatizing partner for L6 in cemented doublet, strongest negative element.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.8042,
      vd: 46.5,
      fl: 38.2,
      glass: "S-LAH65VS (OHARA)",
      apd: false,
      role: "LG1R — rearmost front-group element; strongest positive power in G1, converges beam before stop.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.5,
      fl: -76.0,
      glass: "717295 - dense flint (SF1 / S-TIH1 code match)",
      apd: false,
      role: "Focus element Fn (G2); single-element inner focus group, moves toward image during close focus.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.94595,
      vd: 18.0,
      fl: 52.0,
      glass: "FDS18 (HOYA)",
      apd: "patent",
      apdNote: "ΔPgF = +0.0386 (patent-listed); highest-index glass in system",
      dPgF: 0.0386,
      role: "Focus element Fp (G3); counter-moves toward object to compensate field curvature from L9 motion.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.56732,
      vd: 42.8,
      fl: -62.1,
      glass: "S-TIL26 (OHARA)",
      apd: false,
      cemented: "D2",
      role: "Rear-group negative doublet component; lateral color correction partner for L12.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.55032,
      vd: 75.5,
      fl: 47.0,
      glass: "FCD705 (HOYA)",
      apd: "patent",
      apdNote: "ΔPgF = +0.0277 (patent-listed); ED fluorophosphate crown, lowest-dispersion glass in system",
      dPgF: 0.0277,
      cemented: "D2",
      role: "Third ED element; highest Abbe number in system, lateral chromatic correction in rear group.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.68822,
      vd: 31.1,
      fl: -52.3,
      glass: "L-TIM28(P) class (OHARA, PGM)",
      apd: false,
      role: "LGnR — rearmost element; aspherical field corrector for astigmatism, field curvature, distortion.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    /* ── G1: Front group (8 elements, 7 air-separated groups) ── */
    { label: "1", R: 66.0605, d: 9.2236, nd: 1.92286, elemId: 1, sd: 35.0 },
    { label: "2", R: 485.5991, d: 3.5225, nd: 1.0, elemId: 0, sd: 31.5 },
    { label: "3", R: -5608.8306, d: 1.5, nd: 1.5168, elemId: 2, sd: 28.0 },
    { label: "4", R: 24.4639, d: 16.1084, nd: 1.0, elemId: 0, sd: 23.0 },
    { label: "5", R: -42.3161, d: 1.5, nd: 1.58144, elemId: 3, sd: 19.5 },
    { label: "6", R: 200.323, d: 3.6265, nd: 1.0, elemId: 0, sd: 19.5 },
    { label: "7A", R: 249.4497, d: 9.0, nd: 1.80755, elemId: 4, sd: 22.5 },
    { label: "8A", R: -75.216, d: 0.2, nd: 1.0, elemId: 0, sd: 23.0 },
    { label: "9", R: 81.9815, d: 10.7154, nd: 1.59282, elemId: 5, sd: 26.0 },
    { label: "10", R: -53.4384, d: 0.3, nd: 1.0, elemId: 0, sd: 25.0 },
    { label: "11", R: 114.347, d: 7.7332, nd: 1.59282, elemId: 6, sd: 24.5 },
    { label: "12", R: -52.0541, d: 1.51, nd: 1.85478, elemId: 7, sd: 22.0 },
    { label: "13", R: 41.4126, d: 6.6853, nd: 1.0, elemId: 0, sd: 21.0 },
    { label: "14", R: 65.4872, d: 10.0635, nd: 1.8042, elemId: 8, sd: 22.0 },
    { label: "15", R: -53.8185, d: 1.0, nd: 1.0, elemId: 0, sd: 19.5 },

    /* ── Aperture stop ── */
    { label: "STO", R: 1e15, d: 1.5, nd: 1.0, elemId: 0, sd: 17.2 },

    /* ── G2: Focus group Fn (L9, negative meniscus) ── */
    { label: "17", R: 64.1418, d: 1.4, nd: 1.71736, elemId: 9, sd: 16.0 },
    { label: "18", R: 29.2025, d: 19.687, nd: 1.0, elemId: 0, sd: 16.4 },

    /* ── G3: Focus group Fp (L10, biconvex positive) ── */
    { label: "19", R: 147.4207, d: 5.1, nd: 1.94595, elemId: 10, sd: 16.0 },
    { label: "20", R: -72.6539, d: 2.0, nd: 1.0, elemId: 0, sd: 15.0 },

    /* ── G4: Rear corrector group (3 elements, 2 groups) ── */
    { label: "21", R: -154.2306, d: 1.51, nd: 1.56732, elemId: 11, sd: 17.5 },
    { label: "22", R: 45.8027, d: 9.0554, nd: 1.55032, elemId: 12, sd: 19.5 },
    { label: "23", R: -55.2867, d: 6.539, nd: 1.0, elemId: 0, sd: 19.0 },
    { label: "24A", R: -30.7259, d: 2.0, nd: 1.68822, elemId: 13, sd: 18.0 },
    { label: "25A", R: -215.5886, d: 15.8087, nd: 1.0, elemId: 0, sd: 16.0 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "7A": {
      K: 0,
      A4: 4.04714e-7,
      A6: 2.58016e-9,
      A8: 4.51006e-12,
      A10: -1.10997e-14,
      A12: 0,
      A14: 0,
    },
    "8A": {
      K: 0,
      A4: 3.8726e-6,
      A6: 1.87609e-9,
      A8: 7.45815e-12,
      A10: -1.12514e-14,
      A12: 0,
      A14: 0,
    },
    "24A": {
      K: 0,
      A4: 1.32764e-5,
      A6: 9.38299e-9,
      A8: -5.0085e-11,
      A10: 7.82519e-14,
      A12: 0,
      A14: 0,
    },
    "25A": {
      K: 0,
      A4: 3.61044e-6,
      A6: 5.93299e-9,
      A8: -4.07704e-11,
      A10: 5.45033e-14,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (dual inner focus) ──
   *  L9 (Fn) moves 6.10 mm toward image; L10 (Fp) moves 1.28 mm toward object.
   *  Total variable-gap sum conserved to within 0.002 mm (23.187 → 23.189).
   *  G1 and G4 are mechanically fixed during focusing.
   */
  var: {
    STO: [1.5, 7.5963],
    "18": [19.687, 12.3145],
    "20": [2.0, 3.2779],
  },
  varLabels: [
    ["STO", "D16"],
    ["18", "D18"],
    ["20", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "15" },
    { text: "G2 (−) Fn", fromSurface: "17", toSurface: "18" },
    { text: "G3 (+) Fp", fromSurface: "19", toSurface: "20" },
    { text: "G4 (−)", fromSurface: "21", toSurface: "25A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "11", toSurface: "13" },
    { text: "D2", fromSurface: "21", toSurface: "23" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.44,
  focusDescription:
    "Dual inner focus: L9 (Fn, linear motor) translates toward image, L10 (Fp, stepping motor) counter-translates toward object. G1 and G4 fixed.",

  /* ── Aperture configuration ── */
  nominalFno: 1.4,
  fstopSeries: [1.4, 1.8, 2, 2.5, 2.8, 3.5, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.38,
  maxRimAngleDeg: 70.5,
} satisfies LensDataInput;

export default LENS_DATA;
