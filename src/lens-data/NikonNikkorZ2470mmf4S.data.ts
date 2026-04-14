import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON NIKKOR Z 24-70mm f/4 S                     ║
 * ╠══════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO2019/049372 A1, Example 1 (Nikon / Takeshi Umeda).    ║
 * ║  Positive-lead 5-group zoom: G1(+) G2(−) G3(+) G4(+) G5(−).         ║
 * ║  14 elements / 11 groups, 4 aspherical surfaces.                      ║
 * ║  Focus: internal focus via G4 (2 elements) moving toward object.      ║
 * ║                                                                        ║
 * ║  Zoom variable gaps: D3, D9 (zoom only).                              ║
 * ║  Focus variable gaps: D18, D22 (zoom + focus).                        ║
 * ║  BFD variable gap: D26 (zoom only, includes folded cover glass OPL).  ║
 * ║  All zoom gaps are monotonically varying — no reversing groups.        ║
 * ║  Total track: 121.6 mm (wide) to 151.0 mm (tele).                    ║
 * ║                                                                        ║
 * ║  NOTE ON SEMI-DIAMETERS:                                               ║
 * ║    Patent does not provide semi-diameter data. SDs estimated via        ║
 * ║    combined marginal + chief ray traces at f/4 and full field angle    ║
 * ║    across all three zoom positions (envelope method), with 8-10%       ║
 * ║    mechanical clearance. Edge thickness (≥0.5 mm), cross-gap sag      ║
 * ║    overlap, and sd/|R| constraints applied. Front element SD           ║
 * ║    constrained by 72 mm filter thread (~34 mm max SD).                ║
 * ║    Aspherical sag corrections included in ET validation for S5A,      ║
 * ║    S11A, S22A, S24A. Some beam clipping at wide-end field edges       ║
 * ║    is expected — Nikon applies digital vignetting/distortion           ║
 * ║    correction in-camera for this compact zoom design.                  ║
 * ║                                                                        ║
 * ║  NOTE ON COVER GLASS:                                                  ║
 * ║    Patent surfaces 27-28 (filter, nd=1.51680, d=1.60) excluded.       ║
 * ║    Physical BFD from last lens surface to image (including filter      ║
 * ║    path) folded into S26 d value.                                      ║
 * ║                                                                        ║
 * ║  NOTE ON CONIC CONVENTION:                                              ║
 * ║    Patent uses κ in sag equation where K(standard) = κ − 1.           ║
 * ║    S5A: patent κ = 0 → K = −1 (paraboloid).                          ║
 * ║    S11A, S22A, S24A: patent κ = 1 → K = 0 (spherical base).          ║
 * ║    Patent provides coefficients through A10 only; A12–A14 = 0.        ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-z-24-70f4s",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 24-70mm f/4 S",
  subtitle: "WO2019/049372 EXAMPLE 1 — NIKON / UMEDA",
  specs: [
    "14 ELEMENTS / 11 GROUPS",
    "f = 24.72 – 67.91 mm (2.75× zoom)",
    "F/4.0 (constant)",
    "2ω ≈ 86.6° (wide) – 33.4° (tele)",
    "4 ASPHERICAL SURFACES (1 AS-ED + 3 asph)",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: [24, 70],
  focalLengthDesign: [24.72, 67.91],
  apertureMarketing: 4,
  apertureDesign: 4.0,
  patentYear: 2019,
  elementCount: 14,
  groupCount: 11,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: -167.0,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "G1 front — high-dispersion flint, chromatic correction against L12",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.755,
      vd: 52.3,
      fl: 70.3,
      glass: "S-LAL14 (OHARA)",
      apd: false,
      role: "G1 rear — dense lanthanum crown, primary positive collector power",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L21",
      label: "Element 3",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.74353,
      vd: 49.5,
      fl: -24.0,
      glass: "Uncertain (glass code 744495, no exact catalog match; PGM low-Tg lanthanum crown)",
      apd: false,
      role: "G2 variator — strongest single element, paraboloidal rear asph corrects off-axis aberrations",
    },
    {
      id: 4,
      name: "L22",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.755,
      vd: 52.3,
      fl: -51.8,
      glass: "S-LAL14 (OHARA)",
      apd: false,
      role: "G2 — distributes negative power across both surfaces for aberration balance",
    },
    {
      id: 5,
      name: "L23",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 2.00069,
      vd: 25.5,
      fl: 44.6,
      glass: "TAFD40 (HOYA)",
      apd: false,
      role: "G2 corrector — ultra-high index (nd > 2.0) tantalum flint, chromatic/spherical correction",
    },
    {
      id: 6,
      name: "L31",
      label: "Element 6",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.55332,
      vd: 71.7,
      fl: 42.7,
      glass: "E-FPL51 (HOYA)",
      apd: "inferred",
      apdNote: "νd = 71.7, fluorophosphate ED — Nikon's AS-ED designation (aspherical + ED in one element)",
      role: "G3 lead — AS-ED element, post-stop spherical and axial chromatic aberration correction",
    },
    {
      id: 7,
      name: "L32",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      fl: -65.1,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "G3 doublet front — high-index flint, achromatic correction partner to L33",
      cemented: "D3a",
    },
    {
      id: 8,
      name: "L33",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.3,
      fl: 36.6,
      glass: "S-PHM52 (OHARA)",
      apd: false,
      role: "G3 doublet rear — phosphate crown, low-dispersion convergence",
      cemented: "D3a",
    },
    {
      id: 9,
      name: "L34",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.816,
      vd: 46.6,
      fl: -13.9,
      glass: "S-LAH59 (OHARA)",
      apd: false,
      role: "G3 field-correcting doublet front — strong negative, Petzval/astigmatism correction",
      cemented: "D3b",
    },
    {
      id: 10,
      name: "L35",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.59319,
      vd: 67.9,
      fl: 17.7,
      glass: "L-LAM60 (OHARA)",
      apd: "inferred",
      apdNote: "νd = 67.9, low-Tg lanthanum crown — Nikon's second designated ED element",
      role: "G3 field-correcting doublet rear — ED glass for secondary spectrum correction",
      cemented: "D3b",
    },
    {
      id: 11,
      name: "L41",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.801,
      vd: 34.9,
      fl: -63.4,
      glass: "S-TIH18 (OHARA)",
      apd: false,
      role: "G4 focus group front — negative element in telephoto-like focusing pair",
    },
    {
      id: 12,
      name: "L42",
      label: "Element 12",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.59201,
      vd: 67.0,
      fl: 31.7,
      glass: "M-PCD51 (HOYA)",
      apd: false,
      role: "G4 focus group rear — largest aspherical departure, maintains correction across focus range",
    },
    {
      id: 13,
      name: "L51",
      label: "Element 13",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.58913,
      vd: 61.2,
      fl: 92.4,
      glass: "L-BAL35 (OHARA)",
      apd: false,
      role: "G5 field flattener front — aspherical rear corrects off-axis aberrations near image plane",
    },
    {
      id: 14,
      name: "L52",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.618,
      vd: 63.3,
      fl: -32.0,
      glass: "S-PHM52 (OHARA)",
      apd: false,
      role: "G5 field flattener rear — Petzval correction, telecentricity for mirrorless sensor",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    /* G1 — cemented doublet (L11 + L12) */
    { label: "1", R: 73.0, d: 2.15, nd: 1.84666, elemId: 1, sd: 34.0 },
    { label: "2", R: 47.49515, d: 8.6, nd: 1.755, elemId: 2, sd: 33.5 },
    { label: "3", R: 417.0433, d: 1.6, nd: 1.0, elemId: 0, sd: 27.0 }, // D3 var — G1/G2 zoom gap

    /* G2 — L21 (asph rear), L22, L23 */
    { label: "4", R: 400.0, d: 1.8, nd: 1.74353, elemId: 3, sd: 19.0 },
    { label: "5A", R: 17.04241, d: 8.087, nd: 1.0, elemId: 0, sd: 15.0 }, // L21 rear (asph) → air
    { label: "6", R: -181.13172, d: 1.35, nd: 1.755, elemId: 4, sd: 14.0 },
    { label: "7", R: 49.98466, d: 2.108, nd: 1.0, elemId: 0, sd: 13.5 },
    { label: "8", R: 37.80684, d: 3.693, nd: 2.00069, elemId: 5, sd: 14.5 },
    { label: "9", R: 235.22758, d: 23.69, nd: 1.0, elemId: 0, sd: 14.0 }, // D9 var — G2/G3 zoom gap

    /* Aperture stop — travels with G3 during zoom */
    { label: "STO", R: 1e15, d: 1.5, nd: 1.0, elemId: 0, sd: 8.5 },

    /* G3 — L31 (asph front), L32+L33 (cemented), L34+L35 (cemented) */
    { label: "11A", R: 25.88353, d: 4.048, nd: 1.55332, elemId: 6, sd: 9.5 }, // L31 front (asph)
    { label: "12", R: -254.63176, d: 0.8, nd: 1.0, elemId: 0, sd: 9.5 },
    { label: "13", R: 52.19394, d: 1.0, nd: 1.83481, elemId: 7, sd: 9.5 }, // L32 front
    { label: "14", R: 26.38369, d: 3.546, nd: 1.618, elemId: 8, sd: 9.5 }, // L32/L33 junction
    { label: "15", R: -150.0, d: 3.743, nd: 1.0, elemId: 0, sd: 9.5 }, // L33 rear → air
    { label: "16", R: -33.68615, d: 1.0, nd: 1.816, elemId: 9, sd: 10.0 }, // L34 front
    { label: "17", R: 17.28639, d: 6.494, nd: 1.59319, elemId: 10, sd: 10.0 }, // L34/L35 junction
    { label: "18", R: -23.04098, d: 4.579, nd: 1.0, elemId: 0, sd: 10.0 }, // D18 var — G3/G4 gap

    /* G4 — focusing group (L41, L42 asph rear) */
    { label: "19", R: -22.45485, d: 1.0, nd: 1.801, elemId: 11, sd: 13.0 },
    { label: "20", R: -41.05177, d: 0.103, nd: 1.0, elemId: 0, sd: 13.5 },
    { label: "21", R: 59.92172, d: 6.115, nd: 1.59201, elemId: 12, sd: 14.0 },
    { label: "22A", R: -26.25646, d: 8.245, nd: 1.0, elemId: 0, sd: 14.0 }, // D22 var — G4/G5 gap

    /* G5 — field flattener (L51 asph rear, L52) */
    { label: "23", R: -40.60645, d: 3.489, nd: 1.58913, elemId: 13, sd: 15.0 },
    { label: "24A", R: -24.0, d: 5.786, nd: 1.0, elemId: 0, sd: 15.5 }, // L51 rear (asph) → air
    { label: "25", R: -24.36536, d: 1.5, nd: 1.618, elemId: 14, sd: 16.0 },
    { label: "26", R: 107.45414, d: 15.558, nd: 1.0, elemId: 0, sd: 15.5 }, // D26 var — BFD (incl. filter OPL)
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "5A": {
      K: -1, // patent κ = 0 → K = κ − 1 = −1 (paraboloid)
      A4: 2.11342e-5,
      A6: 4.21453e-8,
      A8: -3.77216e-11,
      A10: 4.44697e-13,
      A12: 0,
      A14: 0,
    },
    "11A": {
      K: 0, // patent κ = 1 → K = 0 (spherical base)
      A4: -5.01541e-6,
      A6: 1.10914e-9,
      A8: 4.72876e-11,
      A10: -3.5528e-13,
      A12: 0,
      A14: 0,
    },
    "22A": {
      K: 0, // patent κ = 1 → K = 0
      A4: 1.52181e-5,
      A6: -2.0973e-8,
      A8: -1.77284e-11,
      A10: -1.36838e-13,
      A12: 0,
      A14: 0,
    },
    "24A": {
      K: 0, // patent κ = 1 → K = 0
      A4: 3.09258e-6,
      A6: 3.56902e-8,
      A8: -3.36788e-11,
      A10: 3.80333e-13,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Zoom positions ── */
  zoomPositions: [24.72, 46.31, 67.91],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Variable air spacings ──
   *  D3, D9: zoom only (identical inf/close values).
   *  D18, D22: zoom + focus (G4 internal focus, D18+D22 conserved at each zoom position).
   *  D26: zoom only (BFD including folded cover glass path).
   */
  var: {
    "3": [
      [1.6, 1.6],
      [17.195, 17.195],
      [31.254, 31.254],
    ],
    "9": [
      [23.69, 23.69],
      [8.562, 8.562],
      [2.895, 2.895],
    ],
    "18": [
      [4.579, 2.148],
      [8.446, 3.205],
      [10.823, 2.313],
    ],
    "22A": [
      [8.245, 10.675],
      [4.378, 9.619],
      [2.0, 10.51],
    ],
    "26": [
      [15.558, 15.558],
      [28.486, 28.486],
      [36.145, 36.145],
    ],
  },

  varLabels: [
    ["3", "D3"],
    ["9", "D9"],
    ["18", "D18"],
    ["22A", "D22"],
    ["26", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+125 mm)", fromSurface: "1", toSurface: "3" },
    { text: "G2 (−29 mm)", fromSurface: "4", toSurface: "9" },
    { text: "G3 (+40 mm)", fromSurface: "11A", toSurface: "18" },
    { text: "G4 (+56 mm) FOCUS", fromSurface: "19", toSurface: "22A" },
    { text: "G5 (−52 mm)", fromSurface: "23", toSurface: "26" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D3a", fromSurface: "13", toSurface: "15" },
    { text: "D3b", fromSurface: "16", toSurface: "18" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.3,
  focusDescription: "Internal focus: G4 (L41 + L42) translates toward object. D18 + D22 sum conserved.",

  /* ── Aperture configuration ── */
  nominalFno: 4.0,
  fstopSeries: [4, 5.6, 8, 11, 16, 22],
  apertureBlades: 7,

  /* ── Layout tuning ── */
  scFill: 0.48,
  yScFill: 0.28,
} satisfies LensDataInput;

export default LENS_DATA;
