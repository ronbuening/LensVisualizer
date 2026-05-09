import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — HASSELBLAD XCD 3,5/120mm Macro                       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2020/0192060 A1, Example 2 (Figs. 5–8)           ║
 * ║  Applicant: Nittoh Inc. / Inventor: Akira Sawamoto                ║
 * ║  Doubled telephoto-type (pos-pos-neg / stop / pos-pos-neg)        ║
 * ║  macro design for 44×33 mm digital medium-format sensor.          ║
 * ║  10 elements / 7 groups, 0 aspherical surfaces.                   ║
 * ║  Focus: Triple-group inner focus (G2 + G4 + G5 move),             ║
 * ║         constant overall length, leaf-shutter compatible.         ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent-listed H*2 (effective diameter) values halved.           ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                              ║
 * ║    Patent surfaces 19–21 (Flat/1.51633/Flat cover glass) excluded. ║
 * ║    Air-equivalent BFD folded onto surface 18:                      ║
 * ║    31.25575 + 1.80/1.51633 + 0.10 = 32.543 mm.                   ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "hasselblad-xcd-120-f35-macro",
  maker: "Hasselblad",
  name: "HASSELBLAD XCD 3,5/120mm Macro",
  subtitle: "US 2020/0192060 A1 Example 2 — Nittoh Inc. / Sawamoto",
  specs: ["10 ELEMENTS / 7 GROUPS", "f = 120.0 mm", "F/3.5", "2ω ≈ 26°", "ALL SPHERICAL"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 120,
  apertureMarketing: 3.5,
  lensMounts: ["hasselblad-xcd"],
  imageFormat: "44x33",
  patentYear: 2020,
  elementCount: 10,
  groupCount: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.85026,
      vd: 32.27,
      fl: 156.7,
      glass: "Lanthanum flint, 850/323 (unmatched)",
      apd: false,
      role: "Front positive collector; equiconvex symmetry, fixed G1",
    },
    {
      id: 2,
      name: "L21",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.53775,
      vd: 74.7,
      fl: 52.6,
      glass: "S-FPM3 (OHARA)",
      apd: false,
      role: "ED fluorophosphate crown; primary chromatic corrector in moving G2",
      cemented: "B1",
    },
    {
      id: 3,
      name: "L22",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.74077,
      vd: 27.79,
      fl: -33.2,
      glass: "S-TIH13 (OHARA)",
      apd: false,
      role: "Dense flint; achromatic partner in cemented doublet B1",
      cemented: "B1",
    },
    {
      id: 4,
      name: "L23",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.9165,
      vd: 31.6,
      fl: 63.6,
      glass: "Very high-index lanthanum flint, 917/316 (unmatched)",
      apd: false,
      role: "Positive power contributor of G2; convex to object",
    },
    {
      id: 5,
      name: "L31",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.89286,
      vd: 20.36,
      fl: 50.4,
      glass: "Ultra-high-dispersion flint, 893/204 (unmatched)",
      apd: false,
      role: "Nearly plano-convex positive in fixed G3; front curvature R ≈ 17 km",
      cemented: "B2",
    },
    {
      id: 6,
      name: "L32",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.1,
      fl: -31.6,
      glass: "S-TIM25 (OHARA)",
      apd: false,
      role: "Diverging element in cemented doublet B2; fixed G3",
      cemented: "B2",
    },
    {
      id: 7,
      name: "L41",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.24,
      fl: 91.4,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Primary focus element; equiconvex ED singlet, 40 mm travel, moving G4",
    },
    {
      id: 8,
      name: "L51",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.8,
      vd: 29.84,
      fl: -45.4,
      glass: "Dense flint, 800/298 (unmatched)",
      apd: false,
      role: "Negative element in cemented doublet B3; moving G5",
      cemented: "B3",
    },
    {
      id: 9,
      name: "L52",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.9165,
      vd: 31.6,
      fl: 35.5,
      glass: "Very high-index lanthanum flint, 917/316 (same as L23, unmatched)",
      apd: false,
      role: "Positive element in doublet B3; aberration fine-tuning, moving G5",
      cemented: "B3",
    },
    {
      id: 10,
      name: "L61",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.13,
      fl: -76.6,
      glass: "E-FD15L (HOYA) / S-TIM35 (OHARA)",
      apd: false,
      role: "Field flattener / image-circle expander; fixed G6",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // G1 — L11 (fixed)
    { label: "1", R: 265.465, d: 4.05, nd: 1.85026, elemId: 1, sd: 21.0 },
    { label: "2", R: -265.465, d: 9.65052, nd: 1.0, elemId: 0, sd: 21.0 }, // VAR: G1↔G2

    // G2 — B1 (L21+L22 cemented) + L23 (moving group)
    { label: "3", R: 43.71, d: 7.05, nd: 1.53775, elemId: 2, sd: 16.0 }, // L21 front
    { label: "4", R: -75.472, d: 1.0, nd: 1.74077, elemId: 3, sd: 15.6 }, // L21→L22 junction
    { label: "5", R: 36.655, d: 0.77315, nd: 1.0, elemId: 0, sd: 14.85 }, // L22 rear → air
    { label: "6", R: 40.361, d: 4.4, nd: 1.9165, elemId: 4, sd: 14.9 }, // L23 front
    { label: "7", R: 124.216, d: 5.15475, nd: 1.0, elemId: 0, sd: 14.6 }, // VAR: G2↔G3

    // G3 — B2 (L31+L32 cemented, fixed)
    { label: "8", R: 17080.49126, d: 4.35, nd: 1.89286, elemId: 5, sd: 13.4 }, // L31 front (near-plano)
    { label: "9", R: -45.124, d: 1.65, nd: 1.6727, elemId: 6, sd: 13.15 }, // L31→L32 junction
    { label: "10", R: 40.879, d: 7.93376, nd: 1.0, elemId: 0, sd: 12.25 }, // L32 rear → air

    // Aperture stop
    { label: "STO", R: 1e15, d: 45.0101, nd: 1.0, elemId: 0, sd: 11.51 }, // VAR: STO↔G4

    // G4 — L41 (moving, primary focus)
    { label: "12", R: 88.124, d: 6.2, nd: 1.48749, elemId: 7, sd: 18.0 }, // L41 front (equiconvex)
    { label: "13", R: -88.124, d: 0.8, nd: 1.0, elemId: 0, sd: 18.4 }, // VAR: G4↔G5

    // G5 — B3 (L51+L52 cemented, moving with reversal)
    { label: "14", R: -333.146, d: 1.0, nd: 1.8, elemId: 8, sd: 18.75 }, // L51 front
    { label: "15", R: 40.803, d: 8.6, nd: 1.9165, elemId: 9, sd: 19.4 }, // L51→L52 junction
    { label: "16", R: -144.777, d: 11.23909, nd: 1.0, elemId: 0, sd: 19.5 }, // VAR: G5↔G6

    // G6 — L61 (fixed, field flattener)
    { label: "17", R: -61.952, d: 2.0, nd: 1.69895, elemId: 10, sd: 19.35 }, // L61 front
    { label: "18", R: 401.068, d: 32.54309, nd: 1.0, elemId: 0, sd: 20.0 }, // BFD (air-equiv, cover glass folded)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (focus) ──
   *  Triple-group inner focus: G2, G4, G5 move; G1, G3, G6, STO fixed.
   *  G2 moves +8.24 mm toward object (infinity → 0.43 m).
   *  G4 moves +40.39 mm toward object (primary focus adjustment).
   *  G5 moves −1.01 mm net (reversal: first toward image, then toward object).
   *  Total optical length (surface 1 → cover glass) is constant at 152.12 mm.
   */
  var: {
    "2": [9.65052, 1.41023], // G1↔G2  (G2 approach toward object shrinks this gap)
    "7": [5.15475, 13.39504], // G2↔G3  (expands as G2 moves forward)
    STO: [45.0101, 4.62225], // STO↔G4 (compresses as G4 moves forward)
    "13": [0.8, 42.1999], // G4↔G5  (expands as G4 moves forward)
    "16": [11.23909, 10.22703], // G5↔G6  (slight change, G5 reversal)
  },

  varLabels: [
    ["2", "D2"],
    ["7", "D7"],
    ["STO", "D(STO)"],
    ["13", "D13"],
    ["16", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "7" },
    { text: "G3", fromSurface: "8", toSurface: "10" },
    { text: "G4", fromSurface: "12", toSurface: "13" },
    { text: "G5", fromSurface: "14", toSurface: "16" },
    { text: "G6", fromSurface: "17", toSurface: "18" },
  ],

  doublets: [
    { text: "B1", fromSurface: "3", toSurface: "5" },
    { text: "B2", fromSurface: "8", toSurface: "10" },
    { text: "B3", fromSurface: "14", toSurface: "16" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.43,
  focusDescription:
    "Triple-group inner focus (G2 + G4 + G5 move toward object); constant overall length. G4 is primary focus element (40 mm travel). G5 reversal motion fine-tunes aberrations at macro magnifications.",

  /* ── Aperture configuration ── */
  nominalFno: 3.5,
  fstopSeries: [3.5, 4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22, 32, 45],

  /* ── Layout tuning ── */
  scFill: 0.52,
  yScFill: 0.28,
  maxFstop: 45,
} satisfies LensDataInput;

export default LENS_DATA;
